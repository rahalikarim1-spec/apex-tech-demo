import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Lang } from '@/lib/i18n';
import { getProject } from '@/content/projects';
import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { PROJECTS } from '@/content/projects';
import { INDUSTRIES } from '@/content/industries';
import { MATERIALS } from '@/content/materials';
import { SERVICES } from '@/content/services';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { ProjectExplorer } from '@/components/sections/ProjectExplorer';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'projects', (l) => getDict(l).projects.seoTitle, (l) => getDict(l).projects.seoDescription);

export default async function Projects({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.projects, href: href(lang, 'projects') }];
  const items = PROJECTS.map((p) => ({ id: p.id, industry: p.industry, material: p.material, service: p.service }));
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.projects} h1={d.projects.h1} lead={d.projects.lead} />
      <Section>
        <p className="mb-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{d.projects.demoBanner}</p>
        <ProjectExplorer
          lang={lang}
          items={items}
          labels={{ all: d.common.filterAll, industry: d.common.filterIndustry, material: d.common.filterMaterial, service: d.common.filterService, none: d.projects.noResults, reset: d.projects.reset }}
          options={{
            industry: INDUSTRIES.map((i) => ({ id: i.id, name: i.name[lang] })),
            material: MATERIALS.map((m) => ({ id: m.id, name: m.name[lang] })),
            service: SERVICES.filter((s) => PROJECTS.some((p) => p.service === s.id)).map((s) => ({ id: s.id, name: s.name[lang] })),
          }}
        >
          {/* Cards are rendered on the server so they are in the HTML; the explorer only toggles visibility. */}
          {PROJECTS.map((p) => ({ id: p.id, node: <ProjectCardSlot key={p.id} id={p.id} lang={lang} /> }))}
        </ProjectExplorer>
      </Section>
      <CtaBand lang={lang} location="projects" title={d.cta.needPart} text={d.home.finalText} />
    </>
  );
}

function ProjectCardSlot({ id, lang }: { id: (typeof PROJECTS)[number]['id']; lang: Lang }) {
  return <ProjectCard project={getProject(id)} lang={lang} />;
}
