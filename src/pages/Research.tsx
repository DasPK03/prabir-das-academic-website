import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { researchThemes } from '../data/research';
import { publications } from '../data/publications';
import { projects } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';

export default function Research() {
  usePageMeta(
    'Research',
    'Research themes: electrophysiology & MEA, neural signal processing, computational neuroscience, biomedical AI and computational medical imaging.',
  );

  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research themes"
        lead="My work spans five connected themes. Electrophysiology and microelectrode-array research is the primary focus of my doctoral work, with EEG signal processing, computational neuroscience, biomedical AI and medical imaging as complementary areas."
      />

      {/* Quick nav */}
      <nav className="border-b border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-950">
        <div className="container-academic flex flex-wrap gap-2 py-4">
          {researchThemes.map((t) => (
            <a key={t.id} href={`#${t.id}`} className={t.primary ? 'chip-accent' : 'chip'}>
              {t.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-academic py-6">
        {researchThemes.map((theme) => {
          const relPubs = theme.publicationIds
            .map((id) => publications.find((p) => p.id === id))
            .filter(Boolean);
          const relProjects = theme.projectIds
            .map((id) => projects.find((p) => p.id === id))
            .filter(Boolean);

          return (
            <section
              key={theme.id}
              id={theme.id}
              className="scroll-mt-24 border-b border-slate-200 py-12 last:border-b-0 dark:border-navy-800"
            >
              <div className="flex flex-wrap items-center gap-3">
                {theme.primary && <span className="chip-accent">Primary focus</span>}
                <h2 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                  {theme.title}
                </h2>
              </div>

              <div className="mt-5 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                      Overview
                    </h3>
                    <p className="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">
                      {theme.overview}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                      Scientific motivation
                    </h3>
                    <p className="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">
                      {theme.motivation}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                      Methods
                    </h3>
                    <p className="mt-1 leading-relaxed text-slate-700 dark:text-slate-300">
                      {theme.methods}
                    </p>
                  </div>
                </div>

                <aside className="space-y-5">
                  <div className="card">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Topics
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {theme.topics.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {theme.software && (
                    <div className="card">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Software & tools
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        {theme.software.join(' · ')}
                      </p>
                    </div>
                  )}

                  {relProjects.length > 0 && (
                    <div className="card">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Related projects
                      </h3>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {relProjects.map((p) => (
                          <li key={p!.id}>
                            <Link
                              to="/projects"
                              className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-600 dark:text-teal-300"
                            >
                              {p!.title} <ArrowRight size={13} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </aside>
              </div>

              {relPubs.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Relevant publications
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {relPubs.map((p) => (
                      <li key={p!.id} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal-500" />
                        <span>
                          {p!.title}{' '}
                          <span className="text-slate-500 dark:text-slate-400">
                            — {p!.venueShort} ({p!.status})
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/publications"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-600 dark:text-teal-300"
                  >
                    See all publications <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
