'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import { Icon } from '@/components/ui/Icon';
import { DropZone } from './DropZone';
import { track } from '@/lib/analytics';
import { submitRfq } from '@/lib/rfq/submit';
import { validateStep, validateAll, type RfqErrors } from '@/lib/rfq/validate';
import { SERVICE_TO_NEED } from '@/lib/rfq/prefill';
import type { RfqNeed, RfqPayload } from '@/lib/rfq/types';
import type { Dict } from '@/content/ui';

type Opt = { id: string; name: string };
const NEEDS: RfqNeed[] = ['cnc-milling', 'cnc-turning', 'multi-axis-machining', 'prototype', 'production', 'custom-precision-parts', 'other'];
const LAST = 5;

const empty = (lang: Lang): RfqPayload => ({
  lang, need: '', industry: '', material: '', quantity: '', deliveryDate: '', files: [],
  firstName: '', lastName: '', company: '', email: '', phone: '', description: '', additional: '', consent: false,
});

export function RfqForm({ lang, d, industries, materials, homeHref }: { lang: Lang; d: Dict['rfq']; industries: Opt[]; materials: Opt[]; homeHref: string }) {
  const [step, setStep] = useState(0);
  const [v, setV] = useState<RfqPayload>(() => empty(lang));
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<RfqErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [ref, setRef] = useState('');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);
  const mounted = useRef(false);

  // Prefill from ?service=&industry=&material= (client-side so the page stays statically rendered).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const need = SERVICE_TO_NEED[q.get('service') || ''];
    const industry = industries.find((o) => o.id === q.get('industry'))?.id;
    const material = materials.find((o) => o.id === q.get('material'))?.id;
    if (need || industry || material) setV((p) => ({ ...p, need: need ?? p.need, industry: industry ?? p.industry, material: material ?? p.material }));
  }, [industries, materials]);

  // Move focus to the step heading on step change (a11y) — but not on first render.
  useEffect(() => {
    if (mounted.current) headingRef.current?.focus({ preventScroll: false });
    mounted.current = true;
  }, [step, status]);

  const markStarted = () => { if (!started.current) { started.current = true; track('rfq_start', { lang }); } };
  const set = <K extends keyof RfqPayload>(k: K, val: RfqPayload[K]) => { markStarted(); setV((p) => ({ ...p, [k]: val })); if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined })); };

  const goto = (n: number) => { setStep(n); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const next = () => {
    markStarted();
    const e = validateStep(step, v);
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => (document.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus());
      return;
    }
    track('rfq_step', { step: step + 1, of: LAST + 1 });
    goto(step + 1);
  };
  const submit = async () => {
    const e = validateAll(v);
    if (Object.keys(e).length) { setErrors(e); goto(e.need ? 0 : e.consent ? 4 : 3); return; }
    setStatus('submitting');
    const payload: RfqPayload = {
      ...v, lang, sourcePath: window.location.pathname,
      files: files.map((f) => ({ name: f.name, size: f.size, ext: (f.name.split('.').pop() || '').toLowerCase() })),
    };
    const simulateError = new URLSearchParams(window.location.search).get('simulate') === 'error';
    const res = await submitRfq(payload, { simulateError });
    if (res.ok) { setRef(res.reference); setStatus('success'); track('rfq_submit', { need: v.need, industry: v.industry, material: v.material, files: files.length }); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else setStatus('error');
  };

  const err = (k: keyof RfqPayload) => (errors[k] ? d[errors[k]!] : undefined);
  const fieldProps = (k: keyof RfqPayload) => ({ id: `f-${k}`, 'aria-invalid': errors[k] ? true : undefined, 'aria-describedby': errors[k] ? `e-${k}` : undefined } as const);
  const Err = ({ k }: { k: keyof RfqPayload }) => (errors[k] ? <p id={`e-${k}`} className="mt-1.5 text-sm font-medium text-red-700">{err(k)}</p> : null);
  const needLabel = (id: string) => (d.options as Record<string, string>)[id] || id;

  /* ---------- success ---------- */
  if (status === 'success') {
    return (
      <div className="animate-rise rounded-2xl border border-steel/30 bg-white p-8 text-center shadow-sm sm:p-12" role="status">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-steel text-white"><Icon name="check" className="h-8 w-8" /></span>
        <h2 ref={headingRef} tabIndex={-1} className="mt-6 font-display text-3xl font-semibold outline-none">{d.successH}</h2>
        <p className="mx-auto mt-3 max-w-md text-[#46586a]">{d.successT}</p>
        <p className="mt-5 inline-block rounded bg-paper px-3 py-1.5 font-display text-sm font-semibold text-ink">{d.reference}: {ref}</p>
        <p className="mt-4 text-xs text-[#6b7b8a]">{d.demoNote}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={homeHref} className="btn btn-outline">{d.back}</Link>
          <button type="button" className="btn btn-primary" onClick={() => { setV(empty(lang)); setFiles([]); setErrors({}); setStep(0); setStatus('idle'); started.current = false; }}>{d.newRfq}</button>
        </div>
      </div>
    );
  }

  const titles = [d.s1, d.s2, d.s3, d.s4, d.s5, d.review];
  const subs = [d.s1sub, d.s2sub, d.s3sub, d.s4sub, d.s5sub, ''];
  const busy = status === 'submitting';

  return (
    <form noValidate onSubmit={(e) => { e.preventDefault(); if (step === LAST) submit(); else next(); }} className="rounded-2xl border border-ink/10 bg-white shadow-[0_24px_60px_-40px_rgba(16,28,41,.5)]">
      {/* progress */}
      <div className="border-b border-ink/10 px-5 pb-5 pt-6 sm:px-8">
        <div className="flex items-center justify-between text-sm font-medium text-[#5a6b7b] sm:hidden">
          <span>{d.step} {step + 1} {d.of} {LAST + 1}</span><span className="text-ink">{d.steps[step]}</span>
        </div>
        <ol className="mt-3 flex items-center gap-1.5 sm:mt-0" aria-label="Progress">
          {d.steps.map((s, i) => (
            <li key={s} className="flex flex-1 items-center gap-1.5" aria-current={i === step ? 'step' : undefined}>
              <span className="flex w-full flex-col gap-2">
                <span className={`h-1.5 rounded-full transition-all duration-500 ${i < step ? 'bg-steel' : i === step ? 'bg-steel/60' : 'bg-ink/10'}`} />
                <span className={`hidden text-xs font-semibold uppercase tracking-wider sm:block ${i <= step ? 'text-ink' : 'text-[#8593a0]'}`}>{s}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="px-5 py-7 sm:px-8 sm:py-9">
        <div key={step} className="animate-rise">
          <h2 ref={headingRef} tabIndex={-1} className="font-display text-2xl font-semibold outline-none sm:text-3xl">{titles[step]}</h2>
          {subs[step] && <p className="mt-1.5 text-[#5a6b7b]">{subs[step]}</p>}

          <div className="mt-7">
            {step === 0 && (
              <fieldset>
                <legend className="sr-only">{d.s1}</legend>
                <div role="radiogroup" className="grid gap-3 sm:grid-cols-2" aria-describedby={errors.need ? 'e-need' : undefined}>
                  {NEEDS.map((n, i) => {
                    const on = v.need === n;
                    return (
                      <label key={n} className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition ${on ? 'border-steel bg-steel/5' : 'border-ink/10 hover:border-steel/50'}`}>
                        <input type="radio" name="need" value={n} checked={on} onChange={() => set('need', n)} className="peer sr-only" {...(i === 0 ? { id: 'f-need', 'aria-invalid': errors.need ? true : undefined } : {})} />
                        <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition peer-focus-visible:ring-2 peer-focus-visible:ring-steel/50 ${on ? 'border-steel bg-steel' : 'border-ink/30'}`}>{on && <span className="h-1.5 w-1.5 rounded-full bg-white" />}</span>
                        <span className="font-display text-[17px] font-semibold">{needLabel(n)}</span>
                      </label>
                    );
                  })}
                </div>
                <Err k="need" />
              </fieldset>
            )}

            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="label" htmlFor="f-industry">{d.industry}</label>
                  <select {...fieldProps('industry')} className="field" value={v.industry} onChange={(e) => set('industry', e.target.value)}>
                    <option value="">{d.select}</option>{industries.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}<option value="other">{d.other}</option>
                  </select></div>
                <div><label className="label" htmlFor="f-material">{d.material}</label>
                  <select {...fieldProps('material')} className="field" value={v.material} onChange={(e) => set('material', e.target.value)}>
                    <option value="">{d.select}</option>{materials.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}<option value="not-sure">{d.notSure}</option><option value="other">{d.other}</option>
                  </select></div>
                <div><label className="label" htmlFor="f-quantity">{d.quantity}</label>
                  <select {...fieldProps('quantity')} className="field" value={v.quantity} onChange={(e) => set('quantity', e.target.value)}>
                    <option value="">{d.select}</option>{d.qty.map((q) => <option key={q} value={q}>{q}</option>)}<option value="not-sure">{d.notSure}</option>
                  </select></div>
                <div><label className="label" htmlFor="f-deliveryDate">{d.delivery}</label>
                  <input {...fieldProps('deliveryDate')} type="date" className="field" value={v.deliveryDate} min={new Date().toISOString().slice(0, 10)} onChange={(e) => set('deliveryDate', e.target.value)} /></div>
              </div>
            )}

            {step === 2 && (
              <DropZone files={files} onChange={setFiles} d={d} onAdded={(a) => { markStarted(); track('drawing_upload', { count: a.length, ext: a.map((f) => (f.name.split('.').pop() || '').toLowerCase()).join(',') }); }} />
            )}

            {step === 3 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <div><label className="label" htmlFor="f-firstName">{d.first} *</label><input {...fieldProps('firstName')} className="field" autoComplete="given-name" value={v.firstName} onChange={(e) => set('firstName', e.target.value)} /><Err k="firstName" /></div>
                <div><label className="label" htmlFor="f-lastName">{d.last} *</label><input {...fieldProps('lastName')} className="field" autoComplete="family-name" value={v.lastName} onChange={(e) => set('lastName', e.target.value)} /><Err k="lastName" /></div>
                <div className="sm:col-span-2"><label className="label" htmlFor="f-company">{d.company} *</label><input {...fieldProps('company')} className="field" autoComplete="organization" value={v.company} onChange={(e) => set('company', e.target.value)} /><Err k="company" /></div>
                <div><label className="label" htmlFor="f-email">{d.email} *</label><input {...fieldProps('email')} type="email" inputMode="email" className="field" autoComplete="email" value={v.email} onChange={(e) => set('email', e.target.value)} /><Err k="email" /></div>
                <div><label className="label" htmlFor="f-phone">{d.phone} *</label><input {...fieldProps('phone')} type="tel" inputMode="tel" className="field" autoComplete="tel" value={v.phone} onChange={(e) => set('phone', e.target.value)} /><Err k="phone" /></div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <div><label className="label" htmlFor="f-description">{d.desc}</label><textarea {...fieldProps('description')} rows={5} className="field" placeholder={d.descPh} value={v.description} onChange={(e) => set('description', e.target.value)} /></div>
                <div><label className="label" htmlFor="f-additional">{d.extra}</label><textarea {...fieldProps('additional')} rows={3} className="field" placeholder={d.extraPh} value={v.additional} onChange={(e) => set('additional', e.target.value)} /></div>
                <div>
                  <label className="flex cursor-pointer items-start gap-3 text-[15px] text-[#33465a]">
                    <input {...fieldProps('consent')} type="checkbox" checked={v.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[#397A9C]" />
                    <span>{d.consent} *</span>
                  </label>
                  <Err k="consent" />
                </div>
              </div>
            )}

            {step === LAST && (
              <dl className="divide-y divide-ink/10 rounded-xl border border-ink/10">
                {([
                  [d.steps[0], 0, [v.need ? needLabel(v.need) : '']],
                  [d.steps[1], 1, [industries.find((o) => o.id === v.industry)?.name || (v.industry === 'other' ? d.other : ''), materials.find((o) => o.id === v.material)?.name || (v.material === 'not-sure' ? d.notSure : v.material === 'other' ? d.other : ''), v.quantity === 'not-sure' ? d.notSure : v.quantity, v.deliveryDate]],
                  [d.steps[2], 2, files.length ? files.map((f) => f.name) : [d.noFiles]],
                  [d.steps[3], 3, [`${v.firstName} ${v.lastName}`, v.company, v.email, v.phone]],
                  [d.steps[4], 4, [v.description, v.additional]],
                ] as [string, number, string[]][]).map(([label, s, vals]) => (
                  <div key={label} className="grid gap-1 px-4 py-4 sm:grid-cols-[8rem_1fr_auto] sm:gap-4">
                    <dt className="font-display text-sm font-semibold uppercase tracking-wider text-steel">{label}</dt>
                    <dd className="min-w-0 space-y-0.5 break-words text-[15px] text-ink">{vals.filter(Boolean).length ? vals.filter(Boolean).map((t, i) => <span key={i} className="block">{t}</span>) : <span className="text-[#8593a0]">{d.notProvided}</span>}</dd>
                    <button type="button" onClick={() => goto(s)} className="w-fit text-sm font-semibold text-steel underline underline-offset-2">{d.edit}</button>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>

        {status === 'error' && (
          <div role="alert" className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
            <p className="font-display font-semibold">{d.errorH}</p><p className="mt-1 text-sm">{d.errorT}</p>
          </div>
        )}
        {Object.keys(errors).length > 0 && <p role="alert" className="mt-5 text-sm font-medium text-red-700">{d.fixErrors}</p>}

        <div className="mt-8 flex items-center justify-between gap-3">
          <button type="button" onClick={() => goto(step - 1)} disabled={step === 0 || busy} className="btn btn-outline disabled:invisible">{d.back}</button>
          <button type="submit" disabled={busy} className="btn btn-primary min-w-[9.5rem] disabled:opacity-80">
            {busy ? (<><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />{d.submitting}</>) : step === LAST ? d.submit : d.next}
            {!busy && <Icon name="arrow" className="h-4 w-4" />}
          </button>
        </div>
        {step === LAST && <p className="mt-4 text-center text-xs text-[#6b7b8a]">{d.demoNote}</p>}
      </div>
    </form>
  );
}
