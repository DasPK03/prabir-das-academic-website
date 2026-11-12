import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Github, ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { publications } from '../data/publications';
import { researchThemes } from '../data/research';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';
import StatusBadge from '../components/StatusBadge';

function Detail({ label, children }: { label: string; children: ReactNode }) {
  if (!children) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
        {label}
      </div>
      <div className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}

function ProjectCard({ project, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
  const relPubs = (project.publicationIds ?? [])
    .map((id) => publications.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="card">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">{project.themeLabel}</span>
            <StatusBadge status={project.status} />
          </div>
          <h3 className="mt-2 font-serif text-lg font-semibold text-navy-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.objective}
          </p>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 flex-shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="mt-5 space-y-4 border-t border-slate-200 pt-5 dark:border-navy-700">
          <Detail label="Research motivation">{project.motivation}</Detail>
          <Detail label="Dataset">{project.dataset}</Detail>
          <Detail label="Methodology">{project.methodology}</Detail>
          {project.findings && <Detail label="Verified findings">{project.findings}</Detail>}
          <Detail label="Tools">
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </Detail>
          {relPubs.length > 0 && (
            <Detail label="Related publications">
              <ul className="space-y-1">
                {relPubs.map((p) => (
                  <li key={p!.id}>
                    {p!.title}{' '}
                    <span className="text-slate-500 dark:text-slate-400">
                      — {p!.venueShort} ({p!.status})
                    </span>
                  </li>
                ))}
              </ul>
            </Detail>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-600 dark:text-teal-300"
            >
              <Github size={16} /> Repository
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  usePageMeta(
    'Projects',
    'Research projects spanning electrophysiology & MEA, EEG, computational neuroscience, biomedical AI and medical imaging.',
  );

  const [theme, setTheme] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>(null);

  const themeOptions = useMemo(
    () => [{ id: 'all', label: 'All' }, ...researchThemes.map((t) => ({ id: t.id, label: t.title }))],
    [],
  );

  const filtered = theme === 'all' ? projects : projects.filter((p) => p.themeId === theme);
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Research projects"
        lead="Selected projects across my research themes. Ongoing work is clearly marked; only verified findings are reported."
      />

      {/* Most significant projects — highlighted summary */}
      {theme === 'all' && featured.length > 0 && (
        <section className="border-b border-slate-200 bg-slate-50 py-10 dark:border-navy-800 dark:bg-navy-900/30">
          <div className="container-academic">
            <div className="eyebrow mb-3">Highlights</div>
            <h2 className="mb-6 text-xl font-semibold">Most significant projects</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col rounded-lg border-l-4 border-purple-500 border-y border-r border-slate-200 bg-white p-5 shadow-card dark:border-y-navy-700 dark:border-r-navy-700 dark:bg-navy-900/60"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="chip">{p.themeLabel}</span>
                    <StatusBadge status={p.status} />
                  </div>
                  <h3 className="mt-3 font-serif text-base font-semibold text-navy-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-academic py-8">
        <h2 className="mb-5 text-xl font-semibold">All projects</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {themeOptions.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setTheme(o.id)}
              className={[
                'rounded-md border px-3 py-1.5 text-sm font-medium transition',
                theme === o.id
                  ? 'border-navy-800 bg-navy-800 text-white dark:border-teal-600 dark:bg-teal-600'
                  : 'border-slate-300 bg-white text-slate-600 hover:border-navy-400 dark:border-navy-700 dark:bg-navy-900/60 dark:text-slate-300',
              ].join(' ')}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              open={openId === p.id}
              onToggle={() => setOpenId((cur) => (cur === p.id ? null : p.id))}
            />
          ))}
        </div>
      </section>
    </>
  );
}
