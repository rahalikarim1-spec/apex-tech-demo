import type { L } from '@/lib/i18n';
import type { ServiceId } from './registry';

/**
 * Reusable machine-card data. Add a new machine by appending an object.
 * Only the DN Solutions Lynx 2100LSYB details below are verified Apex information;
 * everything else is an explicit placeholder (`status: 'placeholder'`).
 * Do NOT add spindle speeds, travels, tolerances or capacities unless Apex supplies them.
 */
export type Machine = {
  id: string;
  brand: string;
  model?: string;
  type: L<string>;
  status: 'verified' | 'placeholder';
  highlights: L<string[]>;
  services: ServiceId[];
  /** Spec rows to be completed by Apex. `value` omitted => "To be confirmed". */
  specs: { label: L<string>; value?: L<string> }[];
  image?: { src: string; alt: L<string> };
};

const TBC_SPECS: Machine['specs'] = [
  { label: { en: 'Model(s)', fr: 'Modèle(s)' } },
  { label: { en: 'Axes', fr: 'Axes' } },
  { label: { en: 'Work envelope', fr: 'Enveloppe de travail' } },
  { label: { en: 'Typical materials', fr: 'Matériaux courants' } },
];

export const MACHINES: Machine[] = [
  {
    id: 'dn-solutions-lynx-2100lsyb',
    brand: 'DN Solutions',
    model: 'Lynx 2100LSYB',
    type: { en: 'Turning centre with milling capability', fr: 'Centre de tournage avec capacité de fraisage' },
    status: 'verified',
    highlights: {
      en: ['Dual turrets', '4-axis capability', 'Complex turning', 'Milling'],
      fr: ['Double tourelle', 'Capacité 4 axes', 'Tournage complexe', 'Fraisage'],
    },
    services: ['cnc-turning', 'multi-axis-machining'],
    specs: [
      { label: { en: 'Turrets', fr: 'Tourelles' }, value: { en: 'Dual', fr: 'Double' } },
      { label: { en: 'Axis capability', fr: 'Capacité en axes' }, value: { en: '4-axis', fr: '4 axes' } },
      { label: { en: 'Spindle, travels, part size', fr: 'Broche, courses, taille de pièce' } },
    ],
  },
  { id: 'haas', brand: 'HAAS', type: { en: 'CNC machining equipment', fr: "Équipement d'usinage CNC" }, status: 'placeholder', highlights: { en: ['Machine models to be listed by Apex'], fr: ['Modèles à préciser par Apex'] }, services: ['cnc-milling', 'cnc-turning'], specs: TBC_SPECS },
  { id: 'brother', brand: 'BROTHER', type: { en: 'CNC machining equipment', fr: "Équipement d'usinage CNC" }, status: 'placeholder', highlights: { en: ['Machine models to be listed by Apex'], fr: ['Modèles à préciser par Apex'] }, services: ['cnc-milling'], specs: TBC_SPECS },
  { id: 'takisawa', brand: 'TAKISAWA', type: { en: 'CNC machining equipment', fr: "Équipement d'usinage CNC" }, status: 'placeholder', highlights: { en: ['Machine models to be listed by Apex'], fr: ['Modèles à préciser par Apex'] }, services: ['cnc-turning'], specs: TBC_SPECS },
];

export const EQUIPMENT_BRANDS = ['HAAS', 'BROTHER', 'TAKISAWA', 'DN Solutions'];
