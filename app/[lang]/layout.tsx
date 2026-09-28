import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '../globals.css';
import { HTML_LANG, LOCALES, isLang } from '@/lib/i18n';
import { SITE_URL, href } from '@/lib/routes';
import { getDict } from '@/content/ui';
import { SERVICES } from '@/content/services';
import { INDUSTRIES } from '@/content/industries';
import { SERVICE_ICON, INDUSTRY_ICON } from '@/content/icons';
import { SITE_NAME } from '@/content/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCtaBar } from '@/components/layout/MobileCtaBar';
import { AnalyticsListener } from '@/components/layout/AnalyticsListener';
import { JsonLd } from '@/components/ui/JsonLd';
import { localBusinessLd, organizationLd } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

export const viewport: Viewport = { themeColor: '#0B1117', width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: { default: 'Apex Technologies | Precision CNC Machining, Burnaby BC', template: '%s' },
  formatDetection: { telephone: false },
};

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const d = getDict(lang);

  const services = SERVICES.map((s) => ({ href: href(lang, 'services', s.id), title: s.name[lang], text: s.short[lang], icon: SERVICE_ICON[s.id] }));
  const industries = INDUSTRIES.map((i) => ({ href: href(lang, 'industries', i.id), title: i.name[lang], icon: INDUSTRY_ICON[i.id] }));
  const links = {
    capabilities: href(lang, 'capabilities'), industries: href(lang, 'industries'), materials: href(lang, 'materials'),
    equipment: href(lang, 'equipment'), quality: href(lang, 'quality'), projects: href(lang, 'projects'),
    about: href(lang, 'about'), insights: href(lang, 'insights'), rfq: href(lang, 'rfq'),
  };

  return (
    <html lang={HTML_LANG[lang]}>
      <body className="pb-[76px] lg:pb-0">
        <noscript><style>{'.reveal{opacity:1!important;transform:none!important}'}</style></noscript>
        <JsonLd data={[organizationLd(), localBusinessLd(lang)]} />
        <Header lang={lang} d={{ nav: d.nav, cta: d.cta, langSwitch: d.langSwitch, stickyText: d.common.stickyText }} services={services} industries={industries} links={links} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <MobileCtaBar lang={lang} call={d.mobileBar.call} rfq={d.mobileBar.rfq} />
        <AnalyticsListener />
      </body>
    </html>
  );
}
