export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-ink/10 rounded-lg border border-ink/10 bg-white">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-display text-[17px] font-medium text-ink hover:text-steel">
            {f.q}
            <span className="faq-plus grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-lg leading-none transition-transform" aria-hidden="true">+</span>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-[#3a4b5c]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
