/**
 * GTM-ready dataLayer helper. No GTM/GA4 IDs are installed on purpose:
 * when Apex provides a GTM container, add the snippet in app/[lang]/layout.tsx and
 * every event below is already flowing into window.dataLayer.
 */
export type AnalyticsEvent =
  | 'rfq_start'
  | 'rfq_step'
  | 'rfq_submit'
  | 'drawing_upload'
  | 'phone_click'
  | 'email_click'
  | 'contact_submit'
  | 'cta_click'
  | 'language_change'
  | 'service_view'
  | 'industry_view';

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (process.env.NODE_ENV === 'development') console.debug('[dataLayer]', event, params);
}
