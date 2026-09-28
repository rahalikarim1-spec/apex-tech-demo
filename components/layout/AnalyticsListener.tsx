'use client';
import { useEffect } from 'react';
import { track } from '@/lib/analytics';

/** One delegated listener: phone_click, email_click and cta_click for every link on the site. */
export function AnalyticsListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const where = window.location.pathname;
      if (href.startsWith('tel:')) track('phone_click', { path: where });
      else if (href.startsWith('mailto:')) track('email_click', { path: where });
      const cta = a.getAttribute('data-cta');
      if (cta) track('cta_click', { cta, href, path: where });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
