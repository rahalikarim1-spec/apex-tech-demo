import type { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, text, className = '' }: { eyebrow?: string; title: string; text?: string; className?: string }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2">{title}</h2>
      {text && <p className="lead mt-4">{text}</p>}
    </div>
  );
}

export function Section({ children, tone = 'white', id, className = '' }: { children: ReactNode; tone?: 'white' | 'paper' | 'dark' | 'navy'; id?: string; className?: string }) {
  const bg = { white: 'bg-white', paper: 'bg-paper', dark: 'on-dark bg-ink', navy: 'on-dark bg-navy' }[tone];
  return (
    <section id={id} className={`section ${bg} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}
