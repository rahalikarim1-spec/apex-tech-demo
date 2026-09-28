/**
 * Slug registry — the single lightweight source of truth for localised URLs.
 * It is imported by the client-side language switcher, so it must stay free of
 * heavy content. Content files reference entities by these ids.
 */
import type { L } from '@/lib/i18n';

const s = (en: string, fr: string): L<string> => ({ en, fr });

export const SERVICE_SLUGS = {
  'cnc-machining': s('cnc-machining', 'usinage-cnc'),
  'cnc-milling': s('cnc-milling', 'fraisage-cnc'),
  'cnc-turning': s('cnc-turning', 'tournage-cnc'),
  'multi-axis-machining': s('multi-axis-machining', 'usinage-multi-axes'),
  'prototype-machining': s('prototype-machining', 'usinage-prototype'),
  'production-machining': s('production-machining', 'usinage-production'),
  'custom-precision-parts': s('custom-precision-parts', 'pieces-de-precision-sur-mesure'),
} as const;

export const INDUSTRY_SLUGS = {
  mining: s('mining', 'exploitation-miniere'),
  'oil-gas': s('oil-gas', 'petrole-gaz'),
  'medical-pharmaceutical': s('medical-pharmaceutical', 'medical-pharmaceutique'),
  'telecommunications-instruments': s('telecommunications-instruments', 'telecommunications-instruments'),
  firefighting: s('firefighting', 'lutte-contre-incendie'),
  construction: s('construction', 'construction'),
  'horizontal-directional-drilling': s('horizontal-directional-drilling', 'forage-directionnel-horizontal'),
  'industrial-machinery': s('industrial-machinery', 'machinerie-industrielle'),
  'logistics-warehousing': s('logistics-warehousing', 'logistique-entreposage'),
} as const;

export const MATERIAL_SLUGS = {
  'carbon-steel': s('carbon-steel', 'acier-au-carbone'),
  'stainless-steel': s('stainless-steel', 'acier-inoxydable'),
  'alloy-steel': s('alloy-steel', 'acier-allie'),
  aluminum: s('aluminum', 'aluminium'),
  'polymers-plastics': s('polymers-plastics', 'polymeres-plastiques'),
  bronze: s('bronze', 'bronze'),
  brass: s('brass', 'laiton'),
  copper: s('copper', 'cuivre'),
  silver: s('silver', 'argent'),
} as const;

export const PROJECT_SLUGS = {
  'sample-hydraulic-manifold': s('sample-hydraulic-manifold', 'exemple-bloc-hydraulique'),
  'sample-instrument-housing': s('sample-instrument-housing', 'exemple-boitier-instrument'),
  'sample-drive-shaft': s('sample-drive-shaft', 'exemple-arbre-entrainement'),
} as const;

export const INSIGHT_SLUGS = {
  'cnc-milling-vs-cnc-turning': s('cnc-milling-vs-cnc-turning', 'fraisage-cnc-vs-tournage-cnc'),
  'prepare-cad-file-for-cnc-machining': s('prepare-cad-file-for-cnc-machining', 'preparer-fichier-cao-usinage-cnc'),
  'choosing-materials-for-precision-machining': s('choosing-materials-for-precision-machining', 'choisir-materiaux-usinage-de-precision'),
  'prototype-vs-production-cnc-machining': s('prototype-vs-production-cnc-machining', 'usinage-cnc-prototype-vs-production'),
} as const;

export type ServiceId = keyof typeof SERVICE_SLUGS;
export type IndustryId = keyof typeof INDUSTRY_SLUGS;
export type MaterialId = keyof typeof MATERIAL_SLUGS;
export type ProjectId = keyof typeof PROJECT_SLUGS;
export type InsightId = keyof typeof INSIGHT_SLUGS;

/** Collection sections that have `/[lang]/<section>/<slug>` detail pages. */
export const COLLECTIONS = {
  services: SERVICE_SLUGS,
  industries: INDUSTRY_SLUGS,
  materials: MATERIAL_SLUGS,
  projects: PROJECT_SLUGS,
  insights: INSIGHT_SLUGS,
} as const;
export type CollectionName = keyof typeof COLLECTIONS;

/** Static (non-collection) sections. Segments are identical in EN and FR. */
export const STATIC_PAGES = [
  'capabilities',
  'industries',
  'materials',
  'equipment',
  'complementary-services',
  'quality',
  'projects',
  'about',
  'insights',
  'contact',
  'rfq',
] as const;
export type StaticPage = (typeof STATIC_PAGES)[number];
