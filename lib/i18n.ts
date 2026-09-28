export const LOCALES = ['en', 'fr'] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = 'en';

/** Localised value: every user-facing string in content files is an `L<string>`. */
export type L<T> = { en: T; fr: T };

/** BCP-47 tags used for <html lang>, hreflang and og:locale. */
export const HTML_LANG: Record<Lang, string> = { en: 'en-CA', fr: 'fr-CA' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_CA', fr: 'fr_CA' };

export const isLang = (v: string): v is Lang => (LOCALES as readonly string[]).includes(v);
export const t = <T,>(v: L<T>, lang: Lang): T => v[lang];
export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'fr' : 'en');
