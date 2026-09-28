import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from './i18n';
import { buildMetadata } from './seo';
import type { StaticPage } from '@/content/registry';

export type LangParams = { params: Promise<{ lang: string }> };

export async function getLang(params: LangParams['params']): Promise<Lang> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return lang;
}

/** Metadata for a non-collection page; both language paths are generated automatically. */
export async function staticMetadata(
  params: LangParams['params'],
  page: StaticPage,
  title: (l: Lang) => string,
  description: (l: Lang) => string,
): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata({ lang, title: title(lang), description: description(lang), paths: { en: `/en/${page}`, fr: `/fr/${page}` } });
}
