import type { L } from '@/lib/i18n';

/** Verified company facts (source of truth: existing Apex Technologies information). */
export const COMPANY = {
  name: 'Apex Technologies Ltd.',
  shortName: 'Apex Technologies',
  founded: 1997,
  partsManufactured: '7M+',
  phone: '+1 604-436-2739',
  phoneHref: 'tel:+16044362739',
  email: 'info@apex-tech.ca',
  address: {
    street: '21-8980 Fraserwood Court',
    city: 'Burnaby',
    region: 'BC',
    postalCode: 'V5J 5H7',
    country: 'Canada',
    countryCode: 'CA',
  },
  markets: ['Canada', 'United States'],
} as const;

export const ADDRESS_LINES = [
  COMPANY.address.street,
  `${COMPANY.address.city}, ${COMPANY.address.region} ${COMPANY.address.postalCode}`,
  COMPANY.address.country,
];

const mapQuery = encodeURIComponent(
  `${COMPANY.name} ${COMPANY.address.street}, ${COMPANY.address.city}, ${COMPANY.address.region} ${COMPANY.address.postalCode}, ${COMPANY.address.country}`,
);
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
export const MAP_VIEW_URL = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

/**
 * CONTENT PLACEHOLDERS — items Apex must supply. Search the codebase for
 * `placeholder: true` / `CONTENT PLACEHOLDER` to find every open slot.
 */
export const PLACEHOLDER_NOTE: L<string> = {
  en: 'Content placeholder — to be supplied and verified by Apex.',
  fr: 'Contenu à fournir — à valider par Apex.',
};

export const SITE_NAME = 'Apex Technologies';

/** Geographic keywords woven naturally into local sections. */
export const SERVICE_AREA = ['Burnaby', 'Vancouver', 'British Columbia', 'Canada', 'United States'];
