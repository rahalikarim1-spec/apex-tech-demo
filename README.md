# Apex Technologies — Bilingual B2B SEO + RFQ Platform (Demo)

Next.js 15 (App Router) · TypeScript · Tailwind CSS. Routes: `/en/*` and `/fr/*` (hreflang `en-CA` / `fr-CA`).

## Run
```
npm install
npm run dev      # http://localhost:3000  (redirects / -> /en)
npm run build && npm start
```
Set `NEXT_PUBLIC_SITE_URL` to the production domain (canonicals, sitemap, schema).

## Architecture
- `content/` — typed, bilingual content objects (services, industries, materials, equipment, projects, insights, UI strings). `registry.ts` holds localised slugs and powers the language switcher (equivalent-page mapping). CMS-ready: swap these modules for Sanity/Supabase/Strapi fetchers.
- `app/[lang]/…` — dynamic pages generated from content; no copy-pasted pages.
- `lib/seo.ts` — metadata, canonical, hreflang, JSON-LD (Organization, LocalBusiness, Service, BreadcrumbList, FAQPage).
- `lib/rfq/submit.ts` — single transport for the RFQ/contact forms. Demo mode simulates; set `NEXT_PUBLIC_RFQ_MODE=api` and implement `app/api/rfq/route.ts` for email/CRM/file storage.
- `lib/analytics.ts` — dataLayer events (rfq_start, rfq_step, rfq_submit, drawing_upload, phone_click, email_click, contact_submit, cta_click, language_change, service_view, industry_view). No GTM/GA4 ID installed.

## Content placeholders (Apex must supply)
Search for `placeholder`, `CONTENT PLACEHOLDER`: testimonials, project photos/case studies (demo projects are `noindex`), machine models/specs, current quality certificate, business hours, facility photos, insight articles. Test the RFQ error state with `?simulate=error`.
