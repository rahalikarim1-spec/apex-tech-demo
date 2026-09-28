import type { Lang } from '@/lib/i18n';
import { rfqHref } from '@/lib/routes';
import { getDict } from '@/content/ui';
import { COMPANY } from '@/content/site';
import { ButtonLink } from './Button';
import { Icon } from './Icon';

/** Sticky sidebar RFQ card for desktop detail pages. Collapses into normal flow on mobile. */
export function StickyRfq({ lang, prefill, label }: { lang: Lang; prefill?: { service?: string; industry?: string; material?: string }; label?: string }) {
  const d = getDict(lang);
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="on-dark overflow-hidden rounded-xl bg-navy p-6 shadow-[0_20px_50px_-25px_rgba(11,17,23,.6)]">
        <h2 className="font-display text-xl font-semibold text-white">{d.common.stickyTitle}</h2>
        <p className="mt-2 text-sm text-metal">{d.common.stickyText}</p>
        <ul className="mt-4 space-y-2 text-sm text-white/85">
          {d.common.stickyBullets.map((b) => (
            <li key={b} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-steel-light" />{b}</li>
          ))}
        </ul>
        <div className="mt-5 grid gap-2.5">
          <ButtonLink href={rfqHref(lang, prefill)} cta="sticky_rfq" arrow>{label ?? d.cta.rfq}</ButtonLink>
          <ButtonLink href={COMPANY.phoneHref} variant="ghost" icon="phone" cta="sticky_call">{COMPANY.phone}</ButtonLink>
        </div>
      </div>
    </aside>
  );
}
