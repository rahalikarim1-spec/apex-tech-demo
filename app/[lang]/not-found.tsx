import Link from 'next/link';
import { rfqHref } from '@/lib/routes';

export default function NotFound() {
  return (
    <div className="on-dark tech-grid bg-ink">
      <div className="wrap py-28 text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="font-display text-4xl font-semibold text-white">Page not found · Page introuvable</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/en/capabilities" className="btn btn-ghost">Capabilities</Link>
          <Link href="/fr/capabilities" className="btn btn-ghost">Capacités</Link>
          <Link href={rfqHref('en')} className="btn btn-primary">Request a Quote</Link>
        </div>
      </div>
    </div>
  );
}
