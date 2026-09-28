import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { href, idFromSlug, pathsFor, rfqHref, staticParams } from '@/lib/routes';
import { buildMetadata, breadcrumbLd, faqLd, serviceLd } from '@/lib/seo';
import { absUrl } from '@/lib/routes';
import type { ServiceId } from '@/content/registry';
import { getService } from '@/content/services';
import { getIndustry } from '@/content/industries';
import { getMaterial } from '@/content/materials';
import { PROJECTS } from '@/content/projects';
import { getDict } from '@/content/ui';
import { SERVICE_ICON } from '@/content/icons';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { Advantages, Block, CheckList, DetailShell, PillLinks, Steps } from '@/components/ui/Detail';
import { FaqList } from '@/components/ui/Faq';
import { StickyRfq } from '@/components/ui/StickyRfq';
import { CtaBand } from '@/components/ui/CtaBand';
import { LinkCard } from '@/components/ui/LinkCard';
import { JsonLd } from '@/components/ui/JsonLd';
import { TrackView } from '@/components/layout/TrackView';
import { ProjectCard } from '@/components/ui/ProjectCard';

type P = { params: Promise<{ lang: string; slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => staticParams('services');

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const id = idFromSlug('services', lang, slug) as ServiceId | undefined;
  return id ? { lang: lang as Lang, id, s: getService(id) } : null;
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const r = resolve(lang, slug);
  if (!r) return {};
  return buildMetadata({ lang: r.lang, title: r.s.seoTitle[r.lang], description: r.s.seoDescription[r.lang], paths: pathsFor('services', r.id) });
}

export default async function ServicePage({ params }: P) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  const { lang, id, s } = r;
  const d = getDict(lang);
  const path = href(lang, 'services', id);
  const crumbs = [
    { name: d.nav.home_crumb, href: `/${lang}` },
    { name: d.nav.capabilities, href: href(lang, 'capabilities') },
    { name: s.name[lang], href: path },
  ];
  const prefill = { service: id };
  const projects = PROJECTS.filter((p) => p.service === id);

  return (
    <>
      <JsonLd data={[
        serviceLd({ name: s.name[lang], description: s.seoDescription[lang], url: absUrl(path), lang }),
        breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href }))),
        faqLd(s.faq[lang]),
      ]} />
      <TrackView event="service_view" id={id} lang={lang} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.capabilities} h1={s.h1[lang]} lead={s.short[lang]}>
        <ButtonLink href={rfqHref(lang, prefill)} cta={`service_${id}_rfq`} arrow>{s.ctaLabel[lang]}</ButtonLink>
        <ButtonLink href={rfqHref(lang, prefill)} variant="ghost" icon="upload" cta={`service_${id}_upload`}>{d.cta.upload}</ButtonLink>
      </PageHero>

      <DetailShell aside={<StickyRfq lang={lang} prefill={prefill} label={s.ctaLabel[lang]} />}>
        <Block title={d.common.intro}>
          <div className="prose-apex text-[17px]">{s.intro[lang].map((p) => <p key={p.slice(0, 24)}>{p}</p>)}</div>
        </Block>
        <Block title={d.common.capabilities}><CheckList items={s.capabilities[lang]} cols /></Block>
        <Block title={d.common.applications}><CheckList items={s.applications[lang]} cols /></Block>
        <Block title={d.common.advantages}><Advantages items={s.advantages[lang]} /></Block>
        <Block title={d.common.process}><Steps items={s.process[lang]} /></Block>
        <Block title={d.common.industries}>
          <PillLinks items={s.industries.map((i) => ({ href: href(lang, 'industries', i), label: getIndustry(i).name[lang] }))} />
        </Block>
        <Block title={d.common.materials}>
          <PillLinks items={s.materials.map((m) => ({ href: href(lang, 'materials', m), label: getMaterial(m).name[lang] }))} />
        </Block>
        {projects.length > 0 && (
          <Block title={d.common.relatedProjects}><div className="grid gap-5 sm:grid-cols-2">{projects.map((p) => <ProjectCard key={p.id} project={p} lang={lang} />)}</div></Block>
        )}
        <Block title={d.common.faq}><FaqList items={s.faq[lang]} /></Block>
        <Block title={d.common.related}>
          <div className="grid gap-4 sm:grid-cols-2">
            {s.related.map((rid) => (
              <LinkCard key={rid} href={href(lang, 'services', rid)} title={getService(rid).name[lang]} text={getService(rid).short[lang]} icon={SERVICE_ICON[rid]} cta={d.cta.learnMore} />
            ))}
          </div>
        </Block>
      </DetailShell>
      <CtaBand lang={lang} location={`service_${id}`} title={d.cta.needPart} text={d.home.finalText} prefill={prefill} />
    </>
  );
}
