import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { href, idFromSlug, pathsFor, rfqHref, staticParams } from '@/lib/routes';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import type { InsightId } from '@/content/registry';
import { getInsight } from '@/content/insights';
import { getService } from '@/content/services';
import { getDict } from '@/content/ui';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { Block, CheckList, DetailShell, PillLinks } from '@/components/ui/Detail';
import { StickyRfq } from '@/components/ui/StickyRfq';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';

type P = { params: Promise<{ lang: string; slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => staticParams('insights');

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const id = idFromSlug('insights', lang, slug) as InsightId | undefined;
  return id ? { lang: lang as Lang, id, a: getInsight(id) } : null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const r = resolve(lang, slug);
  if (!r) return {};
  return buildMetadata({
    lang: r.lang, title: `${r.a.title[r.lang]} | Apex Technologies`, description: r.a.summary[r.lang],
    paths: pathsFor('insights', r.id), noindex: r.a.status === 'planned',
  });
}

export default async function InsightPage({ params }: P) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  const { lang, id, a } = r;
  const d = getDict(lang);
  const path = href(lang, 'insights', id);
  const crumbs = [
    { name: d.nav.home_crumb, href: `/${lang}` },
    { name: d.nav.insights, href: href(lang, 'insights') },
    { name: a.title[lang], href: path },
  ];
  const svc = getService(a.relatedService);
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={a.status === 'planned' ? d.insights.planned : d.nav.insights} h1={a.title[lang]} lead={a.summary[lang]}>
        <ButtonLink href={rfqHref(lang, { service: a.relatedService })} cta={`insight_${id}_rfq`} arrow>{d.cta.rfq}</ButtonLink>
      </PageHero>
      <DetailShell aside={<StickyRfq lang={lang} prefill={{ service: a.relatedService }} />}>
        <Block title={d.insights.outlineH}>
          <p className="mb-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{d.insights.outlineNote}</p>
          <CheckList items={a.outline[lang]} />
        </Block>
        <Block title={d.insights.relatedService}>
          <PillLinks items={[{ href: href(lang, 'services', a.relatedService), label: svc.name[lang] }]} />
        </Block>
      </DetailShell>
      <CtaBand lang={lang} location={`insight_${id}`} title={d.cta.discuss} text={d.home.finalText} prefill={{ service: a.relatedService }} />
    </>
  );
}
