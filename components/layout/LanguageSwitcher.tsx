'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, type Lang } from '@/lib/i18n';
import { switchLangPath } from '@/lib/routes';
import { track } from '@/lib/analytics';

/** Keeps the visitor on the equivalent page (slug-mapped), never dumps them on the homepage. */
export function LanguageSwitcher({ lang, label, names, className = '' }: { lang: Lang; label: string; names: Record<Lang, string>; className?: string }) {
  const pathname = usePathname() || `/${lang}`;
  return (
    <div role="group" aria-label={label} className={`inline-flex items-center rounded-md border border-white/20 p-0.5 text-xs font-semibold ${className}`}>
      {LOCALES.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={switchLangPath(pathname, l)}
            hrefLang={l === 'en' ? 'en-CA' : 'fr-CA'}
            lang={l === 'en' ? 'en-CA' : 'fr-CA'}
            aria-current={active ? 'true' : undefined}
            title={names[l]}
            onClick={() => !active && track('language_change', { from: lang, to: l, path: pathname })}
            className={`rounded px-2.5 py-1.5 uppercase tracking-wider transition ${active ? 'bg-steel text-white' : 'text-metal hover:text-white'}`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
