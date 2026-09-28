import type { RfqNeed } from './types';

/** Maps service ids used across the site to the RFQ "What do you need?" options. */
export const SERVICE_TO_NEED: Record<string, RfqNeed> = {
  'cnc-milling': 'cnc-milling',
  'cnc-turning': 'cnc-turning',
  'multi-axis-machining': 'multi-axis-machining',
  'prototype-machining': 'prototype',
  'production-machining': 'production',
  'custom-precision-parts': 'custom-precision-parts',
};
