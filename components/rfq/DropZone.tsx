'use client';
import { useRef, useState, type DragEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import { RFQ_ACCEPTED_EXT, RFQ_MAX_FILES, RFQ_MAX_FILE_BYTES } from '@/lib/rfq/types';
import type { Dict } from '@/content/ui';

const extOf = (n: string) => (n.split('.').pop() || '').toLowerCase();
const fmt = (b: number) => (b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

/** Accessible drag-and-drop upload. Files stay in the browser in demo mode. */
export function DropZone({ files, onChange, d, onAdded }: { files: File[]; onChange: (f: File[]) => void; d: Dict['rfq']; onAdded?: (added: File[]) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const [over, setOver] = useState(false);
  const [err, setErr] = useState('');

  const add = (list: FileList | File[]) => {
    const next = [...files];
    const added: File[] = [];
    let msg = '';
    for (const f of Array.from(list)) {
      if (!(RFQ_ACCEPTED_EXT as readonly string[]).includes(extOf(f.name))) { msg = `${f.name}: ${d.badType}`; continue; }
      if (f.size > RFQ_MAX_FILE_BYTES) { msg = `${f.name}: ${d.tooBig}`; continue; }
      if (next.length >= RFQ_MAX_FILES) { msg = d.tooMany; break; }
      next.push(f); added.push(f);
    }
    setErr(msg);
    if (added.length) { onChange(next); onAdded?.(added); }
  };
  const onDrop = (e: DragEvent) => { e.preventDefault(); setOver(false); add(e.dataTransfer.files); };

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={onDrop}
        className={`rounded-xl border-2 border-dashed p-8 text-center transition sm:p-10 ${over ? 'border-steel bg-steel/10' : 'border-ink/25 bg-paper'}`}
      >
        <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full bg-steel text-white transition ${over ? 'scale-110' : ''}`}><Icon name="upload" className="h-7 w-7" /></span>
        <p className="mt-4 font-display text-lg font-semibold text-ink">{d.drop}</p>
        <p className="mt-1 text-sm text-[#5a6b7b]">{d.dropOr} <button type="button" className="font-semibold text-steel underline underline-offset-2" onClick={() => input.current?.click()}>{d.browse}</button></p>
        <p className="mt-3 text-xs text-[#6b7b8a]">{d.accepted}</p>
        <input ref={input} type="file" multiple className="sr-only" tabIndex={-1} aria-label={d.browse} accept={RFQ_ACCEPTED_EXT.map((e) => `.${e}`).join(',')} onChange={(e) => { if (e.target.files) add(e.target.files); e.target.value = ''; }} />
      </div>
      {err && <p role="alert" className="mt-3 text-sm font-medium text-red-700">{err}</p>}
      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex items-center gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3">
              <Icon name="file" className="h-5 w-5 shrink-0 text-steel" />
              <span className="min-w-0 flex-1"><span className="block truncate text-sm font-medium text-ink">{f.name}</span><span className="text-xs text-[#6b7b8a]">{extOf(f.name).toUpperCase()} · {fmt(f.size)}</span></span>
              <button type="button" onClick={() => onChange(files.filter((_, j) => j !== i))} className="rounded p-2 text-[#5a6b7b] hover:bg-paper hover:text-red-700" aria-label={`${d.remove} ${f.name}`}><Icon name="close" className="h-4 w-4" /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
