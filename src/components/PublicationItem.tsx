import { FileText, Github, ExternalLink, Link as LinkIcon } from 'lucide-react';
import type { Publication } from '../data/publications';
import StatusBadge from './StatusBadge';

function Authors({ pub }: { pub: Publication }) {
  return (
    <span>
      {pub.authors.map((a, i) => (
        <span key={i}>
          <span className={a.me ? 'font-bold text-navy-900 dark:text-white' : ''}>{a.name}</span>
          {a.corr && <span className="text-slate-500 dark:text-slate-400"> (Corr.)</span>}
          {i < pub.authors.length - 1 ? ', ' : ''}
        </span>
      ))}
      {pub.etAl && <span>, et al.</span>}
    </span>
  );
}

export default function PublicationItem({ pub }: { pub: Publication }) {
  return (
    <article className="border-b border-slate-200 py-5 last:border-b-0 dark:border-navy-800">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={pub.status} />
        {pub.firstAuthor && <span className="chip-accent">First author</span>}
        {pub.corresponding && <span className="chip-accent">Corresponding author</span>}
        {pub.venueShort && <span className="chip">{pub.venueShort}</span>}
        <span className="chip">{pub.year}</span>
      </div>

      <h3 className="mt-2 font-serif text-[1.05rem] font-semibold leading-snug text-navy-900 dark:text-white">
        {pub.title}
      </h3>

      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
        <Authors pub={pub} />
      </p>

      <p className="mt-1 text-sm italic text-slate-600 dark:text-slate-400">{pub.venue}</p>

      <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
        {pub.publisher && <span>{pub.publisher}</span>}
        {pub.note && <span className="text-slate-500 dark:text-slate-400">· {pub.note}</span>}
      </div>

      {(pub.doi || pub.pdf || pub.github || pub.url) && (
        <div className="mt-2.5 flex flex-wrap gap-3 text-sm">
          {pub.doi && (
            <a
              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-600 dark:text-teal-300"
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon size={14} /> DOI
            </a>
          )}
          {pub.pdf && (
            <a
              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-600 dark:text-teal-300"
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={14} /> PDF
            </a>
          )}
          {pub.github && (
            <a
              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-600 dark:text-teal-300"
              href={pub.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} /> Code
            </a>
          )}
          {pub.url && (
            <a
              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-600 dark:text-teal-300"
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} /> Conference
            </a>
          )}
        </div>
      )}
    </article>
  );
}
