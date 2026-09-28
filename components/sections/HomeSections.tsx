import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import { href, rfqHref } from '@/lib/routes';
import { getDict } from '@/content/ui';
import { COMPANY, ADDRESS_LINES, MAP_DIRECTIONS_URL, PLACEHOLDER_NOTE } from '@/content/site';
import { SERVICES } from '@/content/services';
import { INDUSTRIES } from '@/content/industries';
import { MATERIALS } from '@/content/materials';
import { PROJECTS } from '@/content/projects';
import { EQUIPMENT_BRANDS, MACHINES } from '@/content/equipment';
import { SERVICE_ICON, INDUSTRY_ICON } from '@/content/icons';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/LinkCard';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Counter } from '@/components/ui/Counter';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MapEmbed } from '@/components/ui/MapEmbed';

export function MetricsBar({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <section className="on-dark border-y border-white/10 bg-navy" aria-label="Apex Technologies key figures">
      <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
        {d.metrics.map((m, i) => (
          <div key={m.key} className={`px-2 py-7 sm:px-6 ${i % 2 === 1 ? 'border-l border-white/10' : ''} ${i > 0 ? 'lg:border-l lg:border-white/10' : ''} ${i > 1 ? 'border-t border-white/10 lg:border-t-0' : ''}`}>
            <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {m.numeric ? <Counter to={m.numeric} from={m.from} suffix={m.suffix ?? ''} /> : m.text}
            </dd>
            <dt className="mt-1 text-sm text-metal">{m.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function TrustStrip({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <section className="border-b border-ink/10 bg-paper" aria-label={d.trust.title}>
      <div className="wrap flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm font-medium text-[#33465a]">
        {d.trust.items.map((t) => (
          <span key={t} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-steel" />{t}</span>
        ))}
        <span className="hidden h-4 w-px bg-ink/15 md:block" />
        <span className="font-display text-xs uppercase tracking-[.16em] text-steel">{d.trust.equipmentLead}: {EQUIPMENT_BRANDS.join(' · ')}</span>
      </div>
    </section>
  );
}

export function CapabilitiesSection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="white">
      <SectionHeading eyebrow={d.home.capEyebrow} title={d.home.capH2} text={d.home.capText} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 70}>
            <LinkCard href={href(lang, 'services', s.id)} title={s.name[lang]} text={s.short[lang]} icon={SERVICE_ICON[s.id]} cta={d.cta.learnMore} />
          </Reveal>
        ))}
        <Reveal>
          <div className="on-dark flex h-full flex-col justify-between rounded-lg bg-navy p-6">
            <div>
              <Icon name="upload" className="h-8 w-8 text-steel-light" />
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{d.home.ctaMid.t}</h3>
              <p className="mt-2 text-[15px] text-metal">{d.home.ctaMid.x}</p>
            </div>
            <ButtonLink href={rfqHref(lang)} cta="capabilities_upload" className="mt-6" arrow>{d.cta.upload}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function IndustriesSection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="dark">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow={d.home.indEyebrow} title={d.home.indH2} text={d.home.indText} />
        <ButtonLink href={href(lang, 'industries')} variant="ghost" arrow>{d.nav.allIndustries}</ButtonLink>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <Link key={i.id} href={href(lang, 'industries', i.id)} className="card card-hover group flex items-start gap-4 p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-steel/20 text-steel-light"><Icon name={INDUSTRY_ICON[i.id]} /></span>
            <span>
              <span className="block font-display text-lg font-semibold text-white">{i.name[lang]}</span>
              <span className="mt-1 block text-sm leading-snug text-metal">{i.short[lang]}</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function WhySection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const icons = ['clock', 'layers', 'users', 'shield', 'globe', 'box'];
  return (
    <Section tone="paper">
      <SectionHeading eyebrow={d.home.whyEyebrow} title={d.home.whyH2} />
      <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {d.home.why.map((w, i) => (
          <Reveal key={w.t} delay={(i % 3) * 70}>
            <Icon name={icons[i]} className="h-7 w-7 text-steel" />
            <h3 className="mt-3 font-display text-xl font-semibold">{w.t}</h3>
            <p className="mt-2 leading-relaxed text-[#46586a]">{w.x}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="white">
      <SectionHeading eyebrow={d.home.procEyebrow} title={d.home.procH2} />
      <ol className="mt-10 grid gap-6 md:grid-cols-5">
        {d.home.steps.map((s, i) => (
          <li key={s.t} className="relative border-t-2 border-steel/30 pt-5">
            <span className="absolute -top-px left-0 h-0.5 w-10 bg-steel" />
            <span className="font-display text-sm font-semibold text-steel">0{i + 1}</span>
            <h3 className="mt-1 font-display text-lg font-semibold">{s.t}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[#46586a]">{s.x}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10"><ButtonLink href={rfqHref(lang)} cta="process_rfq" arrow>{d.cta.start}</ButtonLink></div>
    </Section>
  );
}

export function EquipmentPreview({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const m = MACHINES[0];
  return (
    <Section tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={d.home.eqEyebrow} title={d.home.eqH2} text={d.home.eqText} />
          <div className="mt-6 flex flex-wrap gap-2">
            {EQUIPMENT_BRANDS.map((b) => <span key={b} className="rounded border border-white/15 px-3 py-1.5 font-display text-sm font-semibold tracking-wider text-white">{b}</span>)}
          </div>
          <div className="mt-8"><ButtonLink href={href(lang, 'equipment')} variant="ghost" arrow>{d.nav.equipment}</ButtonLink></div>
        </div>
        <div className="card p-6">
          <p className="font-display text-xs font-semibold uppercase tracking-[.16em] text-steel-light">{d.equipment.featured}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{m.brand} {m.model}</h3>
          <p className="mt-1 text-sm text-metal">{m.type[lang]}</p>
          <ul className="mt-5 grid grid-cols-2 gap-2">
            {m.highlights[lang].map((h) => <li key={h} className="flex items-center gap-2 rounded bg-white/5 px-3 py-2 text-sm text-white"><Icon name="check" className="h-4 w-4 text-steel-light" />{h}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function MaterialsSection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow={d.home.matEyebrow} title={d.home.matH2} text={d.home.matText} />
        <ButtonLink href={href(lang, 'materials')} variant="outline" arrow>{d.nav.allMaterials}</ButtonLink>
      </div>
      <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {MATERIALS.map((m) => (
          <li key={m.id}>
            <Link href={href(lang, 'materials', m.id)} className="card card-hover flex h-full min-h-[76px] items-center justify-between gap-2 px-4 py-4 font-display text-[15px] font-semibold">
              {m.name[lang]}<Icon name="arrow" className="h-4 w-4 shrink-0 text-steel" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function QualitySection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="paper">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading eyebrow={d.home.qEyebrow} title={d.home.qH2} text={d.home.qText} />
          <div className="mt-8"><ButtonLink href={href(lang, 'quality')} arrow>{d.nav.quality}</ButtonLink></div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {d.quality.pillars.slice(0, 4).map((p) => (
            <li key={p.t} className="card p-5"><Icon name="shield" className="h-6 w-6 text-steel" /><h3 className="mt-3 font-display text-lg font-semibold">{p.t}</h3><p className="mt-1 text-[15px] text-[#46586a]">{p.x}</p></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function ProjectsPreview({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="white">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow={d.home.projEyebrow} title={d.home.projH2} text={d.home.projText} />
        <ButtonLink href={href(lang, 'projects')} variant="outline" arrow>{d.common.allProjects}</ButtonLink>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} lang={lang} />)}
      </div>
    </Section>
  );
}

/** Testimonials must come from verified existing Apex content. Until supplied, show clearly-labelled slots. */
export function TestimonialsSection({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <Section tone="paper">
      <SectionHeading eyebrow={d.home.testEyebrow} title={d.home.testH2} />
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {[0, 1].map((n) => (
          <figure key={n} className="rounded-lg border-2 border-dashed border-steel/40 bg-white/60 p-6">
            {/* CONTENT PLACEHOLDER: replace with a verified quote { text, name, role, company } */}
            <figcaption className="font-display text-xs font-semibold uppercase tracking-widest text-steel">{d.home.testSlot} {n + 1}</figcaption>
            <blockquote className="mt-3 text-[15px] leading-relaxed text-[#46586a]">{d.home.testSlotText}</blockquote>
            <p className="mt-3 text-xs text-[#6b7b8a]">{PLACEHOLDER_NOTE[lang]}</p>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function LocationSection({ lang, heading = true }: { lang: Lang; heading?: boolean }) {
  const d = getDict(lang);
  return (
    <Section tone="white">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          {heading && <SectionHeading eyebrow={d.home.locEyebrow} title={d.home.locH2} text={d.home.locText} />}
          <address className="mt-6 space-y-2 not-italic text-[#33465a]">
            <p className="font-display text-lg font-semibold text-ink">{COMPANY.name}</p>
            {ADDRESS_LINES.map((l) => <p key={l}>{l}</p>)}
            <p><a href={COMPANY.phoneHref} className="font-medium text-steel hover:underline">{COMPANY.phone}</a></p>
            <p><a href={`mailto:${COMPANY.email}`} className="font-medium text-steel hover:underline">{COMPANY.email}</a></p>
          </address>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={MAP_DIRECTIONS_URL} external icon="pin" cta="directions">{d.cta.directions}</ButtonLink>
            <ButtonLink href={href(lang, 'contact')} variant="outline" cta="location_contact">{d.cta.contact}</ButtonLink>
          </div>
        </div>
        <MapEmbed title={d.contact.mapTitle} loadLabel={d.cta.viewMap} privacy={d.contact.mapPrivacy} address={ADDRESS_LINES[0] + ', ' + ADDRESS_LINES[1]} />
      </div>
    </Section>
  );
}
