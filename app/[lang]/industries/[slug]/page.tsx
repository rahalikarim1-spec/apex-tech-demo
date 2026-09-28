import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { absUrl, href, idFromSlug, pathsFor, rfqHref, staticParams } from '@/lib/routes';
import { buildMetadata, breadcrumbLd, serviceLd } from '@/lib/seo';
import type { IndustryId } from '@/content/registry';
import { getIndustry } from '@/content/industries';
import { getService } from '@/content/services';
import { getMaterial } from '@/content/materials';
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
import { TrackView } from '@/components/layout/TrackView';
import { ProjectCard } from '@/components/ui/ProjectCard';

type P = { params: Promise<{ lang: string; slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => staticParams('industries');

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const id = idFromSlug('industries', lang, slug) as IndustryId | undefined;
  return id ? { lang: lang as Lang, id, i: getIndustry(id) } : null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const r = resolve(lang, slug);
  if (!r) return {};
  return buildMetadata({ lang: r.lang, title: r.i.seoTitle[r.lang], description: r.i.seoDescription[r.lang], paths: pathsFor('industries', r.id) });
}

export default async function IndustryPage({ params }: P) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  const { lang, id, i } = r;
  const d = getDict(lang);
  const path = href(lang, 'industries', id);
  const crumbs = [
    { name: d.nav.home_crumb, href: `/${lang}` },
    { name: d.nav.industries, href: href(lang, 'industries') },
    { name: i.name[lang], href: path },
  ];
  const prefill = { industry: id };
  const projects = PROJECTS.filter((p) => p.industry === id);

  return (
    <>
      <JsonLd data={[
        serviceLd({ name: i.h1[lang], description: i.seoDescription[lang], url: absUrl(path), lang }),
        breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href }))),
      ]} />
      <TrackView event="industry_view" id={id} lang={lang} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.industries} h1={i.h1[lang]} lead={i.short[lang]}>
        <ButtonLink href={rfqHref(lang, prefill)} cta={`industry_${id}_rfq`} arrow>{d.cta.rfq}</ButtonLink>
        <ButtonLink href={href(lang, 'capabilities')} variant="ghost" cta={`industry_${id}_caps`}>{d.cta.explore}</ButtonLink>
      </PageHero>
      <DetailShell aside={<StickyRfq lang={lang} prefill={prefill} />}>
        <Block title={d.common.intro}><div className="prose-apex text-[17px]"><p>{i.intro[lang]}</p></div></Block>
        <Block title={d.common.needs}><CheckList items={i.needs[lang]} cols /></Block>
        <Block title={d.common.services}>
          <div className="grid gap-4 sm:grid-cols-2">
            {i.services.map((sid) => (
              <LinkCard key={sid} href={href(lang, 'services', sid)} title={getService(sid).name[lang]} text={getService(sid).short[lang]} icon={SERVICE_ICON[sid]} cta={d.cta.learnMore} />
            ))}
          </div>
        </Block>
        <Block title={d.common.relatedMaterials}>
          <PillLinks items={i.materials.map((m) => ({ href: href(lang, 'materials', m), label: getMaterial(m).name[lang] }))} />
        </Block>
        <Block title={d.common.why}><div className="prose-apex text-[17px]"><p>{i.why[lang]}</p></div></Block>
        <Block title={d.common.quality}>
          <div className="prose-apex text-[17px]"><p>{i.quality[lang]}</p></div>
          <div className="mt-2"><ButtonLink href={href(lang, 'quality')} variant="outline" arrow>{d.nav.quality}</ButtonLink></div>
        </Block>
        <Block title={lang === 'en' ? 'Related capabilities' : 'Capacités connexes'}>
          <PillLinks items={[
            { href: href(lang, 'equipment'), label: d.nav.equipment },
            { href: href(lang, 'complementary-services'), label: d.nav.complementary },
            { href: href(lang, 'projects'), label: d.nav.projects },
          ]} />
        </Block>
        {projects.length > 0 && (
          <Block title={d.common.relatedProjects}><div className="grid gap-5 sm:grid-cols-2">{projects.map((p) => <ProjectCard key={p.id} project={p} lang={lang} />)}</div></Block>
        )}
      </DetailShell>
      <CtaBand lang={lang} location={`industry_${id}`} title={d.cta.talk} text={d.home.finalText} prefill={prefill} />
    </>
  );
}
