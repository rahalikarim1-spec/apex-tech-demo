import type { Lang } from '@/lib/i18n';
import { href, rfqHref } from '@/lib/routes';
import { getDict } from '@/content/ui';
import { COMPANY } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export function Hero({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  return (
    <section className="on-dark tech-grid relative overflow-hidden bg-ink" aria-labelledby="hero-h1">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_82%_10%,rgba(57,122,156,.32),transparent_68%)]" />
      <div className="wrap relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:py-28">
        <div>
          <p className="eyebrow">{d.hero.eyebrow}</p>
          <h1 id="hero-h1" className="font-display text-[2.4rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.1rem]">{d.hero.h1}</h1>
          <p className="lead mt-6 max-w-2xl">{d.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={rfqHref(lang)} cta="hero_rfq" arrow className="!min-h-[52px] !px-7 !text-base">{d.cta.rfq}</ButtonLink>
            <ButtonLink href={href(lang, 'capabilities')} variant="ghost" cta="hero_explore" className="!min-h-[52px] !px-7 !text-base">{d.cta.explore}</ButtonLink>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-metal">
            <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-steel-light" />{d.hero.reassure}</span>
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-white"><Icon name="phone" className="h-4 w-4 text-steel-light" />{COMPANY.phone}</a>
          </p>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block" aria-hidden="true">
          <div className="absolute inset-6 rounded-full border border-dashed border-steel-light/30 [animation:spin_60s_linear_infinite]" />
          <div className="absolute inset-16 rounded-full border border-steel/40 [animation:spin_40s_linear_infinite_reverse]" />
          <div className="relative grid aspect-square place-items-center">
            <svg viewBox="0 0 200 200" className="h-[88%] w-[88%]" fill="none" stroke="#8DA8B8" strokeWidth="1.2">
              <circle cx="100" cy="100" r="62" fill="#101C29" />
              <circle cx="100" cy="100" r="18" stroke="#397A9C" strokeWidth="2" />
              <circle cx="100" cy="100" r="40" strokeDasharray="3 5" />
              <path d="M100 26v24M100 150v24M26 100h24M150 100h24M48 48l17 17M135 135l17 17M152 48l-17 17M65 135l-17 17" />
              <path d="M20 190h160M20 184v12M180 184v12" stroke="#397A9C" />
            </svg>
            <div className="absolute left-0 top-6 rounded-md border border-white/10 bg-navy/90 px-3 py-2 text-xs backdrop-blur">
              <span className="block font-display text-[10px] uppercase tracking-widest text-steel-light">{d.hero.panelTitle}</span>
              <span className="font-semibold text-white">{d.hero.panelLines.join(' · ')}</span>
            </div>
            <div className="absolute bottom-6 right-0 rounded-md border border-white/10 bg-navy/90 px-3 py-2 text-xs backdrop-blur">
              <span className="block font-display text-[10px] uppercase tracking-widest text-steel-light">Burnaby, BC</span>
              <span className="font-semibold text-white">Canada · USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
