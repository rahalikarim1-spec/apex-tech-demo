import Link from 'next/link';
import Image from 'next/image';
import type { Lang } from '@/lib/i18n';
import { href } from '@/lib/routes';
import type { Project } from '@/content/projects';
import { getIndustry } from '@/content/industries';
import { getMaterial } from '@/content/materials';
import { getDict } from '@/content/ui';
import { PartIllustration } from './PartIllustration';
import { Icon } from './Icon';

/** Uses the first real photo (next/image → AVIF/WebP) or a drawing illustration until photos exist. */
export function ProjectMedia({ project, lang, priority }: { project: Project; lang: Lang; priority?: boolean }) {
  const photo = project.photos[0];
  if (photo) {
    return <Image src={photo.src} alt={photo.alt[lang]} width={photo.width} height={photo.height} sizes="(min-width:1024px) 33vw, 100vw" priority={priority} className="h-full w-full object-cover" />;
  }
  return <PartIllustration kind={project.illustration} label={project.name[lang]} className="h-full w-full" />;
}

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const d = getDict(lang);
  return (
    <Link href={href(lang, 'projects', project.id)} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="aspect-[16/10] overflow-hidden bg-navy"><ProjectMedia project={project} lang={lang} /></div>
      <div className="flex flex-1 flex-col p-5">
        {project.placeholder && <span className="mb-2 w-fit rounded bg-amber-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-amber-900">{d.common.placeholder}</span>}
        <h3 className="font-display text-lg font-semibold">{project.name[lang]}</h3>
        <dl className="mt-3 flex flex-wrap gap-1.5 text-xs">
          {[getIndustry(project.industry).name[lang], getMaterial(project.material).name[lang], project.machiningType[lang], project.productionType[lang]].map((t) => (
            <dd key={t} className="rounded-full bg-paper px-2.5 py-1 font-medium text-[#33465a]">{t}</dd>
          ))}
        </dl>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4a5c6d]">{project.description[lang]}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-steel">{d.projects.open}<Icon name="arrow" className="h-4 w-4" /></span>
      </div>
    </Link>
  );
}
