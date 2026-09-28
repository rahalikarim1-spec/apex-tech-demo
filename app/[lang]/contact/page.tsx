import { href, rfqHref } from '@/lib/routes';
import { breadcrumbLd } from '@/lib/seo';
import { getLang, staticMetadata, type LangParams } from '@/lib/page';
import { getDict } from '@/content/ui';
import { ADDRESS_LINES, COMPANY, MAP_DIRECTIONS_URL } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { JsonLd } from '@/components/ui/JsonLd';
import { Icon } from '@/components/ui/Icon';
import { ButtonLink } from '@/components/ui/Button';
import { MapEmbed } from '@/components/ui/MapEmbed';
import { ContactForm } from '@/components/rfq/ContactForm';

export const generateMetadata = (p: LangParams) => staticMetadata(p.params, 'contact', (l) => getDict(l).contact.seoTitle, (l) => getDict(l).contact.seoDescription);

export default async function Contact({ params }: LangParams) {
  const lang = await getLang(params);
  const d = getDict(lang);
  const c = d.contact;
  const crumbs = [{ name: d.nav.home_crumb, href: `/${lang}` }, { name: d.nav.contact, href: href(lang, 'contact') }];
  const row = 'flex items-start gap-3';
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs.map((x) => ({ name: x.name, path: x.href })))} />
      <PageHero crumbs={crumbs} crumbLabel={d.nav.breadcrumbs} eyebrow={d.nav.contact} h1={c.h1} lead={c.lead}>
        <ButtonLink href={rfqHref(lang)} cta="contact_rfq" arrow>{d.cta.rfq}</ButtonLink>
        <ButtonLink href={COMPANY.phoneHref} variant="ghost" icon="phone" cta="contact_call">{COMPANY.phone}</ButtonLink>
      </PageHero>
      <Section tone="paper">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <address className="space-y-4 rounded-xl border border-ink/10 bg-white p-6 not-italic text-[#33465a]">
              <p className="font-display text-xl font-semibold text-ink">{COMPANY.name}</p>
              <p className={row}><Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-steel" /><span>{ADDRESS_LINES.map((l) => <span key={l} className="block">{l}</span>)}</span></p>
              <p className={row}><Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-steel" /><a className="font-medium text-steel hover:underline" href={COMPANY.phoneHref}>{COMPANY.phone}</a></p>
              <p className={row}><Icon name="mail" className="mt-1 h-5 w-5 shrink-0 text-steel" /><a className="font-medium text-steel hover:underline" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
              {/* CONTENT PLACEHOLDER: business hours (also needed for Google Business Profile + LocalBusiness schema) */}
              <p className={row}><Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-steel" /><span className="text-amber-800">{d.common.hoursTbc}</span></p>
            </address>
            <div className="rounded-xl bg-navy p-6 on-dark">
              <h2 className="font-display text-xl font-semibold text-white">{c.rfqH}</h2>
              <p className="mt-1 text-metal">{c.rfqT}</p>
              <div className="mt-4"><ButtonLink href={rfqHref(lang)} cta="contact_side_rfq" icon="upload">{d.cta.upload}</ButtonLink></div>
            </div>
          </div>
          <ContactForm d={c} />
        </div>
      </Section>
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="h2">{c.findH}</h2>
            <p className="lead mt-4">{c.findT}</p>
            <div className="mt-6"><ButtonLink href={MAP_DIRECTIONS_URL} external icon="pin" cta="contact_directions">{d.cta.directions}</ButtonLink></div>
          </div>
          <MapEmbed title={c.mapTitle} loadLabel={d.cta.viewMap} privacy={c.mapPrivacy} address={`${ADDRESS_LINES[0]}, ${ADDRESS_LINES[1]}`} />
        </div>
      </Section>
    </>
  );
}
