'use client';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { track } from '@/lib/analytics';
import { submitContact } from '@/lib/rfq/submit';
import { EMAIL_RE } from '@/lib/rfq/validate';
import type { Dict } from '@/content/ui';

type F = { name: string; email: string; company: string; phone: string; message: string; consent: boolean };
const init: F = { name: '', email: '', company: '', phone: '', message: '', consent: false };

export function ContactForm({ d }: { d: Dict['contact'] }) {
  const [v, setV] = useState<F>(init);
  const [err, setErr] = useState<Partial<Record<keyof F, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'fail'>('idle');

  const validate = () => {
    const e: Partial<Record<keyof F, string>> = {};
    if (!v.name.trim()) e.name = d.required;
    if (!v.email.trim()) e.email = d.required; else if (!EMAIL_RE.test(v.email.trim())) e.email = d.invalidEmail;
    if (!v.message.trim()) e.message = d.required;
    if (!v.consent) e.consent = d.consentReq;
    return e;
  };
  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) { requestAnimationFrame(() => (document.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus()); return; }
    setStatus('sending');
    const simulateError = new URLSearchParams(window.location.search).get('simulate') === 'error';
    const res = await submitContact({ name: v.name, email: v.email, company: v.company, phone: v.phone, message: v.message }, { simulateError });
    if (res.ok) { setStatus('ok'); setV(init); track('contact_submit', { path: window.location.pathname }); } else setStatus('fail');
  };
  const p = (k: keyof F) => ({ id: `c-${k}`, 'aria-invalid': err[k] ? true : undefined, 'aria-describedby': err[k] ? `ce-${k}` : undefined } as const);
  const E = ({ k }: { k: keyof F }) => (err[k] ? <p id={`ce-${k}`} className="mt-1.5 text-sm font-medium text-red-700">{err[k]}</p> : null);

  if (status === 'ok') {
    return (
      <div role="status" className="animate-rise rounded-xl border border-steel/30 bg-white p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-steel text-white"><Icon name="check" className="h-7 w-7" /></span>
        <p className="mt-4 font-display text-2xl font-semibold">{d.success}</p>
        <p className="mt-2 text-xs text-[#6b7b8a]">{d.demoNote}</p>
      </div>
    );
  }
  return (
    <form noValidate onSubmit={onSubmit} className="rounded-xl border border-ink/10 bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{d.formH}</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div><label className="label" htmlFor="c-name">{d.name} *</label><input {...p('name')} className="field" autoComplete="name" value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} /><E k="name" /></div>
        <div><label className="label" htmlFor="c-email">{d.email} *</label><input {...p('email')} type="email" inputMode="email" className="field" autoComplete="email" value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} /><E k="email" /></div>
        <div><label className="label" htmlFor="c-company">{d.company}</label><input {...p('company')} className="field" autoComplete="organization" value={v.company} onChange={(e) => setV({ ...v, company: e.target.value })} /></div>
        <div><label className="label" htmlFor="c-phone">{d.phone}</label><input {...p('phone')} type="tel" inputMode="tel" className="field" autoComplete="tel" value={v.phone} onChange={(e) => setV({ ...v, phone: e.target.value })} /></div>
        <div className="sm:col-span-2"><label className="label" htmlFor="c-message">{d.message} *</label><textarea {...p('message')} rows={5} className="field" value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} /><E k="message" /></div>
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-[15px] text-[#33465a]"><input {...p('consent')} type="checkbox" className="mt-1 h-5 w-5 accent-[#397A9C]" checked={v.consent} onChange={(e) => setV({ ...v, consent: e.target.checked })} /><span>{d.consent} *</span></label>
          <E k="consent" />
        </div>
      </div>
      {status === 'fail' && <p role="alert" className="mt-5 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-900">{d.error}</p>}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary min-w-[10rem] disabled:opacity-80">
          {status === 'sending' ? (<><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />{d.sending}</>) : d.send}
        </button>
        <p className="text-xs text-[#6b7b8a]">{d.demoNote}</p>
      </div>
    </form>
  );
}
