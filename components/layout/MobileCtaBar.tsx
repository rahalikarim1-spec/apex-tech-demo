'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { COMPANY } from '@/content/site';
import type { Lang } from '@/lib/i18n';

/** Thumb-reach action bar on mobile: Call + Request a Quote. Hidden on the RFQ page itself. */
export function MobileCtaBar({ lang, call, rfq }: { lang: Lang; call: string; rfq: string }) {
  const path = usePathname() || '';
  if (path.endsWith('/rfq')) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-3 pb-[max(.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[auto_1fr] gap-2.5">
        <a href={COMPANY.phoneHref} data-cta="mobilebar_call" className="btn btn-ghost !px-4" aria-label={`${call} ${COMPANY.phone}`}>
          <Icon name="phone" className="h-4 w-4" />{call}
        </a>
        <Link href={`/${lang}/rfq`} data-cta="mobilebar_rfq" className="btn btn-primary">{rfq}<Icon name="arrow" className="h-4 w-4" /></Link>
      </div>
    </div>
  );
}
