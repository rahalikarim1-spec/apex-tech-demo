import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { absUrl, href, idFromSlug, pathsFor, rfqHref, staticParams } from '@/lib/routes';
import { buildMetadata, breadcrumbLd, serviceLd } from '@/lib/seo';
import type { MaterialId } from '@/content/registry';
import { MATERIAL_DISCLAIMER, getMaterial } from '@/content/materials';
import { getService } from '@/content/services';
import { getIndustry } from '@/content/industries';
import { PROJECTS } from '@/content/projects';
import { getDict } from '@/content/ui';
import { SERVICE_ICON } from '@/content/icons';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { Block, CheckList, DetailShell, PillLinks } from '@/components/ui/Detail';
import { StickyRfq } from '@/components/ui/StickyRfq';
import { CtaBand } from '@/components/ui/CtaBand';
import { LinkCard } from '@/components/ui/LinkCard';
import { JsonLd } from '@/components/ui/JsonLd';
import { ProjectCard } from '@/components/ui/ProjectCard';

type P = { params: Promise<{ lang: string; slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => staticParams('materials');

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const id = idFromSlug('materials', lang, slug) as MaterialId | undefined;
  return id ? { lang: lang as Lang, id, m: getMaterial(id) } : null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const r = resolve(lang, slug);
  if (!r) return {};
  return buildMetadata({ lang: r.lang, title: r.m.seoTitle[r.lang], description: r.m.seoDescription[r.lang], paths: pathsFor('materials', r.id) });
}

export default async function MaterialPage({ params }: P) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  const { lang, id, m } = r;
  const d = getDict(lang);
  const path = href(lang, 'materials', id);
  const crumbs = [
    { name: d.nav.home_crumb, href: `/${lang}` },
    { name: d.nav.materials, href: href(lang, 'materials') },
    { name: m.name[lang], href: path },
  ];
  const prefill = { material: id };
  const projects = PROJECTS.filter((p) => p.material === id);

  return (
    <>
      <JsonLd data={[
        serviceLd({ name: m.h1[lang], description: m.seoDescription[lang], url: absUrl(path), lang }),
        breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href }))),
      ]} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.materials} h1={m.h1[lang]} lead={m.short[lang]}>
        <ButtonLink href={rfqHref(lang, prefill)} cta={`material_${id}_rfq`} arrow>{d.cta.rfq}</ButtonLink>
      </PageHero>
      <DetailShell aside={<StickyRfq lang={lang} prefill={prefill} />}>
        <Block title={d.common.intro}><div className="prose-apex text-[17px]"><p>{m.overview[lang]}</p></div></Block>
        <Block title={d.common.considerations}><CheckList items={m.considerations[lang]} /></Block>
        <Block title={d.common.services}>
          <div className="grid gap-4 sm:grid-cols-2">
            {m.services.map((sid) => (
              <LinkCard key={sid} href={href(lang, 'services', sid)} title={getService(sid).name[lang]} text={getService(sid).short[lang]} icon={SERVICE_ICON[sid]} cta={d.cta.learnMore} />
            ))}
          </div>
        </Block>
        <Block title={d.common.applications}><CheckList items={m.applications[lang]} cols /></Block>
        <Block title={d.common.relatedIndustries}>
          <PillLinks items={m.industries.map((i) => ({ href: href(lang, 'industries', i), label: getIndustry(i).name[lang] }))} />
        </Block>
        {projects.length > 0 && (
          <Block title={d.common.relatedProjects}><div className="grid gap-5 sm:grid-cols-2">{projects.map((p) => <ProjectCard key={p.id} project={p} lang={lang} />)}</div></Block>
        )}
        <p className="rounded-lg border border-ink/10 bg-paper p-4 text-sm text-[#46586a]">{MATERIAL_DISCLAIMER[lang]}</p>
      </DetailShell>
      <CtaBand lang={lang} location={`material_${id}`} title={d.cta.discuss} text={d.home.finalText} prefill={prefill} />
    </>
  );
}
