import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from './Icon';

type Props = {
  href: string;
  variant?: 'primary' | 'ghost' | 'outline' | 'light';
  children: ReactNode;
  /** Analytics label sent with the cta_click dataLayer event. */
  cta?: string;
  arrow?: boolean;
  icon?: string;
  className?: string;
  external?: boolean;
};

export function ButtonLink({ href, variant = 'primary', children, cta, arrow, icon, className = '', external }: Props) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {icon && <Icon name={icon} className="h-4 w-4" />}
      {children}
      {arrow && <Icon name="arrow" className="h-4 w-4" />}
    </>
  );
  const data = cta ? { 'data-cta': cta } : {};
  if (/^(tel:|mailto:|https?:)/.test(href) || external) {
    return (
      <a href={href} className={cls} {...data} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...data}>
      {inner}
    </Link>
  );
}
