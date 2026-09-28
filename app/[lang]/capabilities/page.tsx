import { href } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { SERVICES } from '@/content/services';
import { SERVICE_ICON } from '@/content/icons';
import { COMPLEMENTARY_SERVICES } from '@/content/complementary';
import { PageHero } from '@/components/ui/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/LinkCard';
import { ButtonLink } from '@/components/ui/Button';
import { CtaBand } from '@/components/ui/CtaBand';
import { JsonLd } from '@/components/ui/JsonLd';
import { rfqHref } from '@/lib/routes';

const T = {
  title: { en: 'CNC Machining Capabilities | Milling, Turning, Multi-Axis | Apex', fr: "Capacités d'usinage CNC | Fraisage, tournage, multi-axes | Apex" },
  desc: { en: 'Explore Apex CNC machining capabilities in Burnaby, BC: CNC milling, turning, multi-axis, prototype and production machining and custom precision parts.', fr: "Découvrez les capacités d'usinage CNC d'Apex à Burnaby (C.-B.) : fraisage, tournage, multi-axes, prototypes, production et pièces de précision sur mesure." },
  h1: { en: 'CNC Machining Capabilities', fr: "Capacités d'usinage CNC" },
  lead: { en: 'From single prototypes to recurring production, Apex covers the processes industrial buyers ask for. Choose a capability to see applications, materials and how to specify your part.', fr: "Du prototype unique à la production récurrente, Apex couvre les procédés que demandent les acheteurs industriels. Choisissez une capacité pour voir applications, matériaux et comment spécifier votre pièce." },
  compH: { en: 'Complementary finishing, coordinated for you', fr: 'Finitions complémentaires, coordonnées pour vous' },
  compT: { en: 'Anodizing, plating, heat treating and more are available through established manufacturing and subcontracting partners where appropriate.', fr: "Anodisation, placage, traitement thermique et plus sont offerts par des partenaires de fabrication et de sous-traitance établis, selon le cas." },
};

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'capabilities', (l) => T.title[l], (l) => T.desc[l]);

export default async function Capabilities({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.capabilities, href: href(lang, 'capabilities') }];
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((c) => ({ name: c.name, path: c.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.capabilities} h1={T.h1[lang]} lead={T.lead[lang]}>
        <ButtonLink href={rfqHref(lang)} cta="capabilities_hero_rfq" arrow>{d.cta.rfq}</ButtonLink>
        <ButtonLink href={href(lang, 'equipment')} variant="ghost" cta="capabilities_equipment">{d.nav.equipment}</ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <LinkCard key={s.id} href={href(lang, 'services', s.id)} title={s.name[lang]} text={s.short[lang]} icon={SERVICE_ICON[s.id]} cta={d.cta.learnMore} />)}
        </div>
      </Section>
      <Section tone="paper">
        <SectionHeading title={T.compH[lang]} text={T.compT[lang]} />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {COMPLEMENTARY_SERVICES.map((c) => <li key={c.id} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium">{c.name[lang]}</li>)}
        </ul>
        <div className="mt-8"><ButtonLink href={href(lang, 'complementary-services')} variant="outline" arrow>{d.nav.complementary}</ButtonLink></div>
      </Section>
      <CtaBand lang={lang} location="capabilities" title={d.cta.needPart} text={d.home.finalText} />
    </>
  );
}
