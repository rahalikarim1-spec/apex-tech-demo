import type { L } from '@/lib/i18n';
import type { IndustryId, MaterialId, ProjectId, ServiceId } from './registry';

/**
 * Project / case-study model. The three entries below are DEMO PLACEHOLDERS that show
 * the architecture (filters, cards, detail pages, internal linking). They describe no
 * real customer, result or specification and are set to noindex until replaced.
 * To publish a real case study: set `placeholder: false`, fill fields, add photos.
 */
export type Project = {
  id: ProjectId;
  placeholder: boolean;
  name: L<string>;
  industry: IndustryId;
  material: MaterialId;
  service: ServiceId;
  machiningType: L<string>;
  productionType: L<string>;
  description: L<string>;
  /** Real photos go here (next/image). Empty => illustration placeholder. */
  photos: { src: string; alt: L<string>; width: number; height: number }[];
  illustration: 'manifold' | 'housing' | 'shaft';
};

export const PROJECTS: Project[] = [
  {
    id: 'sample-hydraulic-manifold',
    placeholder: true,
    name: { en: 'Sample Part — Fluid Manifold', fr: 'Pièce exemple — Bloc de fluides' },
    industry: 'oil-gas',
    material: 'stainless-steel',
    service: 'multi-axis-machining',
    machiningType: { en: 'Milling + multi-axis', fr: 'Fraisage + multi-axes' },
    productionType: { en: 'Production', fr: 'Production' },
    description: {
      en: 'Demo card. Replace with a real Apex manifold-style part, its photos and a short factual description.',
      fr: 'Carte de démonstration. À remplacer par une vraie pièce Apex de type bloc, ses photos et une courte description factuelle.',
    },
    photos: [],
    illustration: 'manifold',
  },
  {
    id: 'sample-instrument-housing',
    placeholder: true,
    name: { en: 'Sample Part — Instrument Housing', fr: "Pièce exemple — Boîtier d'instrument" },
    industry: 'telecommunications-instruments',
    material: 'aluminum',
    service: 'cnc-milling',
    machiningType: { en: 'CNC milling', fr: 'Fraisage CNC' },
    productionType: { en: 'Prototype', fr: 'Prototype' },
    description: {
      en: 'Demo card. Replace with a real Apex housing or enclosure part and its verified details.',
      fr: 'Carte de démonstration. À remplacer par un vrai boîtier ou enveloppe Apex et ses détails vérifiés.',
    },
    photos: [],
    illustration: 'housing',
  },
  {
    id: 'sample-drive-shaft',
    placeholder: true,
    name: { en: 'Sample Part — Turned Shaft', fr: 'Pièce exemple — Arbre tourné' },
    industry: 'industrial-machinery',
    material: 'alloy-steel',
    service: 'cnc-turning',
    machiningType: { en: 'CNC turning', fr: 'Tournage CNC' },
    productionType: { en: 'Production', fr: 'Production' },
    description: {
      en: 'Demo card. Replace with a real turned part, photographed and described by Apex.',
      fr: 'Carte de démonstration. À remplacer par une vraie pièce tournée, photographiée et décrite par Apex.',
    },
    photos: [],
    illustration: 'shaft',
  },
];

export const getProject = (id: ProjectId) => {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project ${id}`);
  return p;
};
