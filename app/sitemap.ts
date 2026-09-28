import type { MetadataRoute } from 'next';
import { COLLECTIONS, STATIC_PAGES } from '@/content/registry';
import { LOCALES } from '@/lib/i18n';
import { absUrl } from '@/lib/routes';
import { PROJECTS } from '@/content/projects';
import { INSIGHTS } from '@/content/insights';

type Entry = MetadataRoute.Sitemap[number];

/** Every indexable URL with hreflang alternates. Placeholder projects/insights are excluded (noindex). */
export default function sitemap(): MetadataRoute.Sitemap {
  const out: Entry[] = [];
  const alt = (path: (l: 'en' | 'fr') => string) => ({
    languages: { 'en-CA': absUrl(path('en')), 'fr-CA': absUrl(path('fr')), 'x-default': absUrl(path('en')) },
  });
  const add = (path: (l: 'en' | 'fr') => string, priority: number) => {
    for (const l of LOCALES) out.push({ url: absUrl(path(l)), changeFrequency: 'monthly', priority, alternates: alt(path) });
  };
  add((l) => `/${l}`, 1);
  for (const p of STATIC_PAGES) add((l) => `/${l}/${p}`, p === 'rfq' || p === 'capabilities' ? 0.9 : 0.7);
  const skip = new Set<string>([...PROJECTS.filter((p) => p.placeholder).map((p) => p.id), ...INSIGHTS.filter((i) => i.status === 'planned').map((i) => i.id)]);
  for (const [name, slugs] of Object.entries(COLLECTIONS)) {
    for (const [id, s] of Object.entries(slugs as Record<string, { en: string; fr: string }>)) {
      if (skip.has(id)) continue;
      add((l) => `/${l}/${name}/${s[l]}`, name === 'services' ? 0.9 : 0.8);
    }
  }
  return out;
}
