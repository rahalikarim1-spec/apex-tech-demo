'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/i18n';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from './LanguageSwitcher';
import { COMPANY } from '@/content/site';
import type { Dict } from '@/content/ui';

/** Only the strings the header needs — keeps the client bundle small. */
export type HeaderDict = Pick<Dict, 'nav' | 'cta' | 'langSwitch'> & { stickyText: string };

export type NavItem = { href: string; title: string; text?: string; icon?: string };
type Props = {
  lang: Lang;
  d: HeaderDict;
  services: NavItem[];
  industries: NavItem[];
  links: { materials: string; equipment: string; quality: string; projects: string; about: string; insights: string; capabilities: string; industries: string; rfq: string };
};

export function Header({ lang, d, services, industries, links }: Props) {
  const pathname = usePathname() || '';
  const [open, setOpen] = useState<null | 'cap' | 'ind'>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false); } };
    const onDown = (e: MouseEvent) => { if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobile]);

  const hoverOpen = (k: 'cap' | 'ind') => { clearTimeout(closeTimer.current); setOpen(k); };
  const hoverClose = () => { closeTimer.current = setTimeout(() => setOpen(null), 160); };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const linkCls = (href: string) => `rounded-md px-3 py-2 text-[15px] font-medium transition hover:text-white ${isActive(href) ? 'text-white' : 'text-metal'}`;

  const mega = (k: 'cap' | 'ind') => {
    const isCap = k === 'cap';
    const items = isCap ? services : industries;
    return (
      <div
        id={`mega-${k}`}
        className="absolute inset-x-0 top-full border-t border-white/10 bg-navy shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]"
        onMouseEnter={() => hoverOpen(k)}
        onMouseLeave={hoverClose}
      >
        <div className="wrap grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <p className="mb-1 font-display text-lg font-semibold text-white">{isCap ? d.nav.megaCapTitle : d.nav.megaIndTitle}</p>
            <p className="mb-5 max-w-xl text-sm text-metal">{isCap ? d.nav.megaCapText : d.nav.megaIndText}</p>
            <ul className={`grid gap-1 ${isCap ? 'sm:grid-cols-2' : 'sm:grid-cols-2 xl:grid-cols-3'}`}>
              {items.map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className="group flex items-start gap-3 rounded-lg p-3 transition hover:bg-white/5">
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-steel/15 text-steel-light"><Icon name={it.icon ?? 'gear'} className="h-[18px] w-[18px]" /></span>
                    <span>
                      <span className="block font-display text-[15px] font-semibold text-white group-hover:text-steel-light">{it.title}</span>
                      {it.text && <span className="mt-0.5 block text-[13px] leading-snug text-metal">{it.text}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={isCap ? links.capabilities : links.industries} className="mt-4 inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-steel-light hover:text-white">
              {isCap ? d.nav.allCapabilities : d.nav.allIndustries}<Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-white/10 bg-ink p-5">
            <Icon name="upload" className="h-6 w-6 text-steel-light" />
            <p className="mt-3 font-display text-lg font-semibold text-white">{d.nav.megaCta}</p>
            <p className="mt-1 text-sm text-metal">{d.stickyText}</p>
            <Link href={links.rfq} data-cta="mega_rfq" className="btn btn-primary mt-4 w-full">{d.cta.upload}</Link>
            <a href={COMPANY.phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm text-metal hover:text-white"><Icon name="phone" className="h-4 w-4" />{COMPANY.phone}</a>
          </div>
        </div>
      </div>
    );
  };

  const trigger = (k: 'cap' | 'ind', label: string) => (
    <div className="relative" onMouseEnter={() => hoverOpen(k)} onMouseLeave={hoverClose}>
      <button
        type="button"
        aria-expanded={open === k}
        aria-controls={`mega-${k}`}
        onClick={() => setOpen(open === k ? null : k)}
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium transition hover:text-white ${open === k ? 'text-white' : 'text-metal'}`}
      >
        {label}<Icon name="chevron" className={`h-4 w-4 transition ${open === k ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-ink">{d.nav.skip}</a>
      <div ref={wrapRef} className={`on-dark sticky top-0 z-50 transition-colors ${scrolled || open || mobile ? 'bg-ink/95 backdrop-blur' : 'bg-ink'} ${scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,.08)]' : ''}`}>
        <div className="wrap flex h-[68px] items-center justify-between gap-4">
          <Link href={`/${lang}`} aria-label={d.nav.home} className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={36} height={36} priority />
            <span className="font-display leading-none">
              <span className="block text-[17px] font-semibold tracking-wide text-white">APEX</span>
              <span className="block text-[10px] font-medium uppercase tracking-[.22em] text-steel-light">Technologies</span>
            </span>
          </Link>

          <nav aria-label={d.nav.main} className="hidden items-center xl:flex">
            {trigger('cap', d.nav.capabilities)}
            {trigger('ind', d.nav.industries)}
            <Link href={links.materials} className={linkCls(links.materials)}>{d.nav.materials}</Link>
            <Link href={links.equipment} className={linkCls(links.equipment)}>{d.nav.equipment}</Link>
            <Link href={links.quality} className={linkCls(links.quality)}>{d.nav.quality}</Link>
            <Link href={links.projects} className={linkCls(links.projects)}>{d.nav.projects}</Link>
            <Link href={links.about} className={linkCls(links.about)}>{d.nav.about}</Link>
            <Link href={links.insights} className={linkCls(links.insights)}>{d.nav.insights}</Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher lang={lang} label={d.langSwitch.label} names={{ en: d.langSwitch.en, fr: d.langSwitch.fr }} className="hidden sm:inline-flex" />
            <Link href={links.rfq} data-cta="header_rfq" className="btn btn-primary hidden !min-h-[42px] sm:inline-flex">{d.cta.rfq}</Link>
            <button type="button" className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white xl:hidden" aria-expanded={mobile} aria-controls="mobile-nav" aria-label={mobile ? d.nav.close : d.nav.menu} onClick={() => setMobile((v) => !v)}>
              <Icon name={mobile ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
        <div className="hidden xl:block">{open && mega(open)}</div>
      </div>

      {mobile && (
        <div id="mobile-nav" className="on-dark fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto bg-ink xl:hidden">
          <div className="wrap space-y-1 py-5 pb-28">
            <MobileGroup title={d.nav.capabilities} items={services} all={{ href: links.capabilities, label: d.nav.allCapabilities }} />
            <MobileGroup title={d.nav.industries} items={industries} all={{ href: links.industries, label: d.nav.allIndustries }} />
            {[
              [links.materials, d.nav.materials], [links.equipment, d.nav.equipment], [links.quality, d.nav.quality],
              [links.projects, d.nav.projects], [links.about, d.nav.about], [links.insights, d.nav.insights],
            ].map(([h, l]) => (
              <Link key={h} href={h} className="block rounded-md px-3 py-3.5 font-display text-lg font-medium text-white hover:bg-white/5">{l}</Link>
            ))}
            <div className="flex items-center justify-between gap-3 px-3 pt-5">
              <LanguageSwitcher lang={lang} label={d.langSwitch.label} names={{ en: d.langSwitch.en, fr: d.langSwitch.fr }} />
              <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 text-sm text-metal"><Icon name="phone" className="h-4 w-4" />{COMPANY.phone}</a>
            </div>
            <div className="px-3 pt-4"><Link href={links.rfq} data-cta="drawer_rfq" className="btn btn-primary w-full">{d.cta.rfq}</Link></div>
          </div>
        </div>
      )}
    </>
  );
}

function MobileGroup({ title, items, all }: { title: string; items: NavItem[]; all: { href: string; label: string } }) {
  const [o, setO] = useState(false);
  return (
    <div>
      <button type="button" aria-expanded={o} onClick={() => setO(!o)} className="flex w-full items-center justify-between rounded-md px-3 py-3.5 font-display text-lg font-medium text-white hover:bg-white/5">
        {title}<Icon name="chevron" className={`h-5 w-5 transition ${o ? 'rotate-180' : ''}`} />
      </button>
      {o && (
        <ul className="mb-2 ml-3 border-l border-white/10 pl-3">
          {items.map((it) => (
            <li key={it.href}><Link href={it.href} className="block rounded-md px-3 py-2.5 text-[15px] text-metal hover:text-white">{it.title}</Link></li>
          ))}
          <li><Link href={all.href} className="block px-3 py-2.5 text-sm font-semibold text-steel-light">{all.label} →</Link></li>
        </ul>
      )}
    </div>
  );
}
