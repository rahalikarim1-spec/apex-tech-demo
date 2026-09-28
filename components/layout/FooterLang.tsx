'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/i18n';
import { switchLangPath } from '@/lib/routes';

export function FooterLang({ lang }: { lang: Lang }) {
  const pathname = usePathname() || `/${lang}`;
  return (
    <ul className="mt-4 flex gap-4">
      {(['en', 'fr'] as const).map((l) => (
        <li key={l}>
          <Link
            className={`text-[15px] transition hover:text-white ${l === lang ? 'font-semibold text-white' : 'text-metal'}`}
            lang={l === 'en' ? 'en-CA' : 'fr-CA'}
            hrefLang={l === 'en' ? 'en-CA' : 'fr-CA'}
            href={switchLangPath(pathname, l)}
          >
            {l === 'en' ? 'English' : 'Français'}
          </Link>
        </li>
      ))}
    </ul>
  );
}
