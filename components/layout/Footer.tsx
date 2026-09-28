import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '@/lib/i18n';
import { href, rfqHref } from '@/lib/routes';
import { getDict } from '@/content/ui';
import { COMPANY, ADDRESS_LINES } from '@/content/site';
import { SERVICES } from '@/content/services';
import { INDUSTRIES } from '@/content/industries';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { FooterLang } from './FooterLang';

export function Footer({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const year = new Date().getFullYear();
  const col = 'font-display text-sm font-semibold uppercase tracking-[.16em] text-white';
  const a = 'text-[15px] text-metal transition hover:text-white';
  return (
    <footer className="on-dark bg-ink">
      <div className="border-b border-white/10">
        <div className="wrap flex flex-col items-start justify-between gap-5 py-10 md:flex-row md:items-center">
          <p className="font-display text-2xl font-semibold text-white">{d.footer.ctaH}</p>
          <ButtonLink href={rfqHref(lang)} cta="footer_rfq" arrow>{d.cta.rfq}</ButtonLink>
        </div>
      </div>
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href={`/${lang}`} className="flex items-center gap-3" aria-label={d.nav.home}>
            <Image src="/logo.svg" alt="" width={36} height={36} />
            <span className="font-display text-lg font-semibold text-white">{COMPANY.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-metal">{d.footer.tagline}</p>
          <address className="mt-5 space-y-1.5 text-[15px] not-italic text-metal">
            <p className="flex gap-2"><Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-steel-light" /><span>{COMPANY.name}<br />{ADDRESS_LINES.map((l) => (<span key={l} className="block">{l}</span>))}</span></p>
            <p><a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-white"><Icon name="phone" className="h-4 w-4 text-steel-light" />{COMPANY.phone}</a></p>
            <p><a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-white"><Icon name="mail" className="h-4 w-4 text-steel-light" />{COMPANY.email}</a></p>
          </address>
        </div>
        <nav aria-label={d.footer.services}>
          <h2 className={col}>{d.footer.services}</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (<li key={s.id}><Link className={a} href={href(lang, 'services', s.id)}>{s.name[lang]}</Link></li>))}
            <li><Link className={a} href={href(lang, 'complementary-services')}>{d.nav.complementary}</Link></li>
            <li><Link className={a} href={href(lang, 'equipment')}>{d.nav.equipment}</Link></li>
          </ul>
        </nav>
        <nav aria-label={d.footer.industries}>
          <h2 className={col}>{d.footer.industries}</h2>
          <ul className="mt-4 space-y-2.5">
            {INDUSTRIES.map((i) => (<li key={i.id}><Link className={a} href={href(lang, 'industries', i.id)}>{i.name[lang]}</Link></li>))}
          </ul>
        </nav>
        <nav aria-label={d.footer.company}>
          <h2 className={col}>{d.footer.company}</h2>
          <ul className="mt-4 space-y-2.5">
            <li><Link className={a} href={href(lang, 'about')}>{d.nav.about}</Link></li>
            <li><Link className={a} href={href(lang, 'quality')}>{d.nav.quality}</Link></li>
            <li><Link className={a} href={href(lang, 'materials')}>{d.nav.materials}</Link></li>
            <li><Link className={a} href={href(lang, 'projects')}>{d.nav.projects}</Link></li>
            <li><Link className={a} href={href(lang, 'insights')}>{d.nav.insights}</Link></li>
            <li><Link className={a} href={href(lang, 'contact')}>{d.nav.contact}</Link></li>
          </ul>
          <h2 className={`${col} mt-8`}>{d.footer.language}</h2>
          <FooterLang lang={lang} />
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-metal/80 sm:flex-row sm:justify-between">
          <p>© {year} {COMPANY.name} {d.footer.rights}</p>
          <p>{d.footer.demo}</p>
        </div>
      </div>
    </footer>
  );
}
