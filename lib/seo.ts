import type { Metadata } from 'next';
import { HTML_LANG, OG_LOCALE, otherLang, type L, type Lang } from './i18n';
import { absUrl } from './routes';
import { COMPANY, SITE_NAME } from '@/content/site';

type Args = {
  lang: Lang;
  title: string;
  description: string;
  /** Path for each language, e.g. { en: '/en/services/cnc-milling', fr: '/fr/services/fraisage-cnc' } */
  paths: L<string>;
  noindex?: boolean;
};

export function buildMetadata({ lang, title, description, paths, noindex }: Args): Metadata {
  const url = absUrl(paths[lang]);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [HTML_LANG.en]: absUrl(paths.en),
        [HTML_LANG.fr]: absUrl(paths.fr),
        'x-default': absUrl(paths.en),
      },
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: OG_LOCALE[lang],
      alternateLocale: OG_LOCALE[otherLang(lang)],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: noindex ? { index: false, follow: true } : undefined,
  };
}

/* ---------- JSON-LD builders (no fabricated ratings or reviews) ---------- */

const orgId = () => absUrl('/#organization');

export const organizationLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId(),
  name: COMPANY.name,
  url: absUrl('/en'),
  logo: absUrl('/logo.svg'),
  foundingDate: String(COMPANY.founded),
  telephone: COMPANY.phone,
  email: COMPANY.email,
});

export const localBusinessLd = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': absUrl('/#localbusiness'),
  name: COMPANY.name,
  url: absUrl(`/${lang}`),
  image: absUrl('/logo.svg'),
  telephone: COMPANY.phone,
  email: COMPANY.email,
  foundingDate: String(COMPANY.founded),
  description:
    lang === 'en'
      ? 'Precision CNC machining and manufacturing in Burnaby, British Columbia, serving industrial customers across Canada and the USA since 1997.'
      : "Usinage et fabrication CNC de précision à Burnaby, en Colombie-Britannique, au service de clients industriels du Canada et des États-Unis depuis 1997.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.countryCode,
  },
  areaServed: [
    { '@type': 'City', name: 'Burnaby' },
    { '@type': 'City', name: 'Vancouver' },
    { '@type': 'AdministrativeArea', name: 'British Columbia' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United States' },
  ],
  parentOrganization: { '@id': orgId() },
});

export const serviceLd = (opts: { name: string; description: string; url: string; lang: Lang }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: opts.name,
  description: opts.description,
  url: opts.url,
  inLanguage: HTML_LANG[opts.lang],
  provider: { '@id': absUrl('/#localbusiness') },
  areaServed: [{ '@type': 'Country', name: 'Canada' }, { '@type': 'Country', name: 'United States' }],
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
});

export const faqLd = (faq: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});
