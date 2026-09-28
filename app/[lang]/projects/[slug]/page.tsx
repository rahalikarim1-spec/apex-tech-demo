import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { href, idFromSlug, pathsFor, rfqHref, staticParams } from '@/lib/routes';
import { buildMetadata, breadcrumbLd } from '@/lib/seo';
import type { ProjectId } from '@/content/registry';
import { getProject } from '@/content/projects';
import { getIndustry } from '@/content/industries';
import { getMaterial } from '@/content/materials';
import { getService } from '@/content/services';
import { getDict } from '@/content/ui';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { Block, DetailShell, PillLinks } from '@/components/ui/Detail';
import { StickyRfq } from '@/components/ui/StickyRfq';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { ProjectMedia } from '@/components/ui/ProjectCard';

type P = { params: Promise<{ lang: string; slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => staticParams('projects');

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const id = idFromSlug('projects', lang, slug) as ProjectId | undefined;
  return id ? { lang: lang as Lang, id, p: getProject(id) } : null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const r = resolve(lang, slug);
  if (!r) return {};
  const ind = getIndustry(r.p.industry).name[r.lang];
  return buildMetadata({
    lang: r.lang,
    title: `${r.p.name[r.lang]} | ${ind} | Apex Technologies`,
    description: r.p.description[r.lang],
    paths: pathsFor('projects', r.id),
    noindex: r.p.placeholder, // demo entries stay out of the index until real content replaces them
  });
}

export default async function ProjectPage({ params }: P) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  const { lang, id, p } = r;
  const d = getDict(lang);
  const path = href(lang, 'projects', id);
  const crumbs = [
    { name: d.nav.home_crumb, href: `/${lang}` },
    { name: d.nav.projects, href: href(lang, 'projects') },
    { name: p.name[lang], href: path },
  ];
  const prefill = { service: p.service, industry: p.industry, material: p.material };
  const rows: [string, string][] = [
    [d.common.industry, getIndustry(p.industry).name[lang]],
    [d.common.material, getMaterial(p.material).name[lang]],
    [d.common.process_, getService(p.service).name[lang]],
    [d.common.machining, p.machiningType[lang]],
    [d.common.production, p.productionType[lang]],
  ];

  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={p.placeholder ? d.common.placeholder : d.nav.projects} h1={p.name[lang]} lead={p.description[lang]}>
        <ButtonLink href={rfqHref(lang, prefill)} cta={`project_${id}_rfq`} arrow>{d.cta.rfq}</ButtonLink>
      </PageHero>
      <DetailShell aside={<StickyRfq lang={lang} prefill={prefill} />}>
        <div className="aspect-[16/10] overflow-hidden rounded-xl bg-navy"><ProjectMedia project={p} lang={lang} priority /></div>
        <Block title={d.common.projectIn}>
          <dl className="divide-y divide-ink/10 rounded-lg border border-ink/10">
            {rows.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[9rem_1fr] gap-3 px-4 py-3 text-[15px]"><dt className="font-medium text-[#5a6b7b]">{k}</dt><dd className="font-medium text-ink">{v}</dd></div>
            ))}
          </dl>
          {p.placeholder && <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{d.projects.caseStudyNote}</p>}
        </Block>
        <Block title={d.projects.linkedTitle}>
          <PillLinks items={[
            { href: href(lang, 'services', p.service), label: getService(p.service).name[lang] },
            { href: href(lang, 'materials', p.material), label: getMaterial(p.material).name[lang] },
            { href: href(lang, 'industries', p.industry), label: getIndustry(p.industry).name[lang] },
            { href: href(lang, 'equipment'), label: d.nav.equipment },
          ]} />
        </Block>
      </DetailShell>
      <CtaBand lang={lang} location={`project_${id}`} title={d.cta.start} text={d.home.finalText} prefill={prefill} />
    </>
  );
}
