import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { INDUSTRIES } from '@/content/industries';
import { INDUSTRY_ICON } from '@/content/icons';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/LinkCard';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';

const T = {
  title: { en: 'Industries We Serve | Industrial CNC Machining | Apex Technologies', fr: 'Industries desservies | Usinage CNC industriel | Apex Technologies' },
  desc: { en: 'CNC machining for mining, oil and gas, medical, telecommunications, firefighting, construction, HDD, industrial machinery and logistics. Burnaby, BC.', fr: "Usinage CNC pour les secteurs minier, pétrolier et gazier, médical, télécoms, incendie, construction, FDH, machinerie industrielle et logistique. Burnaby (C.-B.)." },
  h1: { en: 'Industries We Serve', fr: 'Industries desservies' },
  lead: { en: 'Apex machines components for the equipment behind resource, energy, healthcare, infrastructure and logistics. Each industry page outlines typical needs, relevant services and materials.', fr: "Apex usine des composants pour l'équipement des ressources, de l'énergie, de la santé, des infrastructures et de la logistique. Chaque page présente besoins typiques, services et matériaux pertinents." },
};

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'industries', (l) => T.title[l], (l) => T.desc[l]);

export default async function Industries({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.industries, href: href(lang, 'industries') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.industries} h1={T.h1[lang]} lead={T.lead[lang]} />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((i) => <LinkCard key={i.id} href={href(lang, 'industries', i.id)} title={i.name[lang]} text={i.short[lang]} icon={INDUSTRY_ICON[i.id]} cta={d.cta.learnMore} />)}
        </div>
      </Section>
      <CtaBand lang={lang} location="industries" title={d.cta.talk} text={d.home.finalText} />
    </>
  );
}
