import type { Lang } from '@/lib/i18n';
import { rfqHref } from '@/lib/routes';
import { getDict } from '@/content/ui';
import { COMPANY } from '@/content/site';
import { ButtonLink } from './Button';

type Props = {
  lang: Lang;
  title: string;
  text?: string;
  primaryLabel?: string;
  prefill?: { service?: string; industry?: string; material?: string; project?: string };
  tone?: 'dark' | 'steel';
  location: string;
};

/** Contextual RFQ band. `location` feeds analytics so we know which CTA converts. */
export function CtaBand({ lang, title, text, primaryLabel, prefill, tone = 'dark', location }: Props) {
  const d = getDict(lang);
  const bg = tone === 'steel' ? 'bg-steel' : 'bg-navy';
  return (
    <section className={`on-dark ${bg} relative overflow-hidden`} aria-label={title}>
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="wrap relative grid items-center gap-8 py-14 lg:grid-cols-[1.4fr_1fr] lg:py-16">
        <div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
          {text && <p className="mt-3 max-w-xl text-lg text-white/80">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <ButtonLink href={rfqHref(lang, prefill)} variant={tone === 'steel' ? 'light' : 'primary'} cta={`band_${location}`} arrow>
            {primaryLabel ?? d.cta.rfq}
          </ButtonLink>
          <ButtonLink href={COMPANY.phoneHref} variant="ghost" icon="phone" cta={`band_call_${location}`}>
            {COMPANY.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
