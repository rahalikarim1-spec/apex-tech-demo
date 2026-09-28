import type { IndustryId, ServiceId } from './registry';

export const SERVICE_ICON: Record<ServiceId, string> = {
  'cnc-machining': 'gear',
  'cnc-milling': 'layers',
  'cnc-turning': 'ruler',
  'multi-axis-machining': 'globe',
  'prototype-machining': 'box',
  'production-machining': 'users',
  'custom-precision-parts': 'shield',
};

export const INDUSTRY_ICON: Record<IndustryId, string> = {
  mining: 'layers',
  'oil-gas': 'gear',
  'medical-pharmaceutical': 'shield',
  'telecommunications-instruments': 'globe',
  firefighting: 'shield',
  construction: 'box',
  'horizontal-directional-drilling': 'ruler',
  'industrial-machinery': 'gear',
  'logistics-warehousing': 'box',
};
