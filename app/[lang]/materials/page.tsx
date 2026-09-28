import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { MATERIALS, MATERIAL_DISCLAIMER } from '@/content/materials';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/LinkCard';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';

const T = {
  title: { en: 'CNC Machining Materials | Steel, Aluminum, Brass, Plastics | Apex', fr: "Matériaux d'usinage CNC | Acier, aluminium, laiton, plastiques | Apex" },
  desc: { en: 'Materials machined at Apex Technologies: carbon, stainless and alloy steel, aluminum, plastics, bronze, brass, copper and silver. Machining guidance for buyers.', fr: "Matériaux usinés chez Apex Technologies : acier au carbone, inoxydable et allié, aluminium, plastiques, bronze, laiton, cuivre et argent. Repères d'usinage pour acheteurs." },
  h1: { en: 'Materials for CNC Machining', fr: "Matériaux pour l'usinage CNC" },
  lead: { en: 'Material choice drives cost, lead time and performance. Each page explains what the material offers and what to consider when it is machined.', fr: "Le choix du matériau détermine coût, délai et performance. Chaque page explique ce qu'il offre et ce qu'il faut considérer à l'usinage." },
};

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'materials', (l) => T.title[l], (l) => T.desc[l]);

export default async function Materials({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.materials, href: href(lang, 'materials') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.materials} h1={T.h1[lang]} lead={T.lead[lang]} />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m) => <LinkCard key={m.id} href={href(lang, 'materials', m.id)} title={m.name[lang]} text={m.short[lang]} icon="layers" cta={d.cta.learnMore} />)}
        </div>
        <p className="mt-8 text-sm text-[#5a6b7b]">{MATERIAL_DISCLAIMER[lang]}</p>
      </Section>
      <CtaBand lang={lang} location="materials" title={d.cta.discuss} text={d.home.finalText} />
    </>
  );
}
