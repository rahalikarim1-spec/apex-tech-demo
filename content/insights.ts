import type { L } from '@/lib/i18n';
import type { InsightId, ServiceId } from './registry';

/**
 * Insights architecture. Entries are TOPIC CARDS only (outline + planned status) —
 * no fabricated articles. Replace `outline` with `body` when real content is written;
 * a CMS (Sanity / Supabase / Strapi) can later supply the same shape.
 */
export type Insight = {
  id: InsightId;
  status: 'planned' | 'published';
  title: L<string>;
  summary: L<string>;
  outline: L<string[]>;
  relatedService: ServiceId;
  targetKeyword: string;
};

export const INSIGHTS: Insight[] = [
  {
    id: 'cnc-milling-vs-cnc-turning',
    status: 'planned',
    title: { en: 'CNC Milling vs CNC Turning', fr: 'Fraisage CNC vs tournage CNC' },
    summary: { en: 'How to decide which process fits your part geometry, and when a combined route wins.', fr: "Comment choisir le procédé adapté à la géométrie de votre pièce, et quand une gamme combinée l'emporte." },
    outline: { en: ['Part geometry as the deciding factor', 'Cost drivers of each process', 'When multi-axis combines both'], fr: ['La géométrie de la pièce comme critère', 'Facteurs de coût de chaque procédé', 'Quand le multi-axes combine les deux'] },
    relatedService: 'cnc-milling',
    targetKeyword: 'CNC milling vs CNC turning',
  },
  {
    id: 'prepare-cad-file-for-cnc-machining',
    status: 'planned',
    title: { en: 'How to Prepare a CAD File for CNC Machining', fr: 'Comment préparer un fichier CAO pour l’usinage CNC' },
    summary: { en: 'File formats, drawing notes and model hygiene that shorten quoting time.', fr: 'Formats, notes de plan et bonnes pratiques de modèle qui raccourcissent la soumission.' },
    outline: { en: ['STEP, IGES, DWG and PDF: what to send', 'What a good drawing states', 'Common quoting delays'], fr: ['STEP, IGES, DWG et PDF : quoi envoyer', 'Ce que dit un bon plan', 'Causes fréquentes de retard de soumission'] },
    relatedService: 'cnc-machining',
    targetKeyword: 'CAD file for CNC machining',
  },
  {
    id: 'choosing-materials-for-precision-machining',
    status: 'planned',
    title: { en: 'Choosing Materials for Precision Machining', fr: "Choisir les matériaux pour l'usinage de précision" },
    summary: { en: 'A buyer’s framework for balancing strength, corrosion, machinability and cost.', fr: "Un cadre pour acheteurs afin d'équilibrer résistance, corrosion, usinabilité et coût." },
    outline: { en: ['Service environment first', 'Machinability and cost', 'Finishing options'], fr: ["L'environnement de service d'abord", 'Usinabilité et coût', 'Options de finition'] },
    relatedService: 'custom-precision-parts',
    targetKeyword: 'choosing materials for precision machining',
  },
  {
    id: 'prototype-vs-production-cnc-machining',
    status: 'planned',
    title: { en: 'Prototype vs Production CNC Machining', fr: 'Usinage CNC : prototype vs production' },
    summary: { en: 'What changes when a design moves from a handful of parts to repeat supply.', fr: "Ce qui change quand une conception passe de quelques pièces à un approvisionnement récurrent." },
    outline: { en: ['Design for manufacturing at each stage', 'Process planning and inspection', 'Planning the transition'], fr: ['Conception pour la fabrication à chaque étape', 'Planification du procédé et inspection', 'Planifier la transition'] },
    relatedService: 'production-machining',
    targetKeyword: 'prototype vs production CNC machining',
  },
];

export const getInsight = (id: InsightId) => {
  const i = INSIGHTS.find((x) => x.id === id);
  if (!i) throw new Error(`Unknown insight ${id}`);
  return i;
};
