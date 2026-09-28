import type { Lang } from './i18n';
import { LOCALES } from './i18n';
import {
  COLLECTIONS,
  type CollectionName,
  type StaticPage,
} from '@/content/registry';

type Slugs = Record<string, { en: string; fr: string }>;

/** Build an internal, localised path. */
export function href(lang: Lang, page?: StaticPage): string;
export function href(lang: Lang, page: CollectionName, id: string): string;
export function href(lang: Lang, page?: string, id?: string): string {
  if (!page) return `/${lang}`;
  if (!id) return `/${lang}/${page}`;
  const slugs = (COLLECTIONS as Record<string, Slugs>)[page];
  const slug = slugs?.[id]?.[lang];
  if (!slug) throw new Error(`Unknown route: ${page}/${id}`);
  return `/${lang}/${page}/${slug}`;
}

/** RFQ link with optional prefill (service / industry / material ids). */
export function rfqHref(
  lang: Lang,
  prefill: { service?: string; industry?: string; material?: string; project?: string } = {},
): string {
  const q = Object.entries(prefill)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`)
    .join('&');
  return `/${lang}/rfq${q ? `?${q}` : ''}`;
}

/**
 * Equivalent path in another language. Collection detail pages map slug -> id -> slug,
 * static pages keep their segment. Falls back to the target language home only if the
 * path cannot be resolved (never for known pages).
 */
export function switchLangPath(pathname: string, target: Lang): string {
  const parts = pathname.split('/').filter(Boolean);
  if (!parts.length || !(LOCALES as readonly string[]).includes(parts[0])) return `/${target}`;
  const from = parts[0] as Lang;
  const [, section, slug] = parts;
  if (!section) return `/${target}`;
  if (!slug) return `/${target}/${section}`;
  const slugs = (COLLECTIONS as Record<string, Slugs>)[section];
  if (!slugs) return `/${target}/${[section, slug].join('/')}`;
  const id = Object.keys(slugs).find((k) => slugs[k][from] === slug);
  return id ? `/${target}/${section}/${slugs[id][target]}` : `/${target}/${section}`;
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://apex-tech-demo.vercel.app').replace(/\/$/, '');
export const absUrl = (path: string) => `${SITE_URL}${path}`;

/** Resolve a localised slug back to its entity id (undefined => 404). */
export function idFromSlug(collection: CollectionName, lang: Lang, slug: string): string | undefined {
  const slugs = COLLECTIONS[collection] as Slugs;
  return Object.keys(slugs).find((id) => slugs[id][lang] === slug);
}

/** generateStaticParams helper: every lang × slug pair for a collection. */
export function staticParams(collection: CollectionName) {
  const slugs = COLLECTIONS[collection] as Slugs;
  return LOCALES.flatMap((lang) => Object.values(slugs).map((s) => ({ lang, slug: s[lang] })));
}

/** Both language paths for an entity — feeds canonical + hreflang. */
export function pathsFor(collection: CollectionName, id: string) {
  return { en: href('en', collection, id), fr: href('fr', collection, id) };
}
