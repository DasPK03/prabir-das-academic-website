import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, FlaskConical, BrainCircuit, Activity } from 'lucide-react';
import portrait from '../assets/prabir.jpg';
import { profile } from '../data/profile';
import { publicationStats } from '../data/publicationStats';
import { publications } from '../data/publications';
import { projects } from '../data/projects';
import { updates } from '../data/updates';
import { videos, channel } from '../data/videos';
import { usePageMeta } from '../hooks/usePageMeta';
import ProfileLinks from '../components/ProfileLinks';
import PublicationItem from '../components/PublicationItem';
import StatusBadge from '../components/StatusBadge';

const selectedIds = [
  'cvmi2026-schizophrenia',
  'paul2026-dasps',
  'paul2026-cytology',
  'aicta2026-hippocampus',
];

const stats = [
  { label: 'Conference Papers', value: publicationStats.totalConferencePapers },
  { label: 'Published', value: publicationStats.published },
  { label: 'Presented', value: publicationStats.presented },
  { label: 'Accepted', value: publicationStats.accepted },
  { label: 'Registered Designs', value: publicationStats.registeredDesigns },
];

export default function Home() {
  usePageMeta(
    'MSCA Doctoral Researcher, Tampere University',
    'Prabir Kumar Das — Marie Skłodowska-Curie Doctoral Researcher at Tampere University. Electrophysiology, microelectrode arrays, EEG, computational neuroscience and biomedical AI.',
  );

  const selected = selectedIds
    .map((id) => publications.find((p) => p.id === id))
    .filter((p): p is (typeof publications)[number] => Boolean(p));

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:border-navy-800 dark:from-navy-900 dark:via-navy-900 dark:to-navy-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_120%_at_85%_-10%,rgba(147,51,234,0.14),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_90%_at_0%_110%,rgba(37,99,235,0.10),transparent)]" />
        <div className="container-academic relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs font-medium text-purple-700 dark:border-purple-800/60 dark:bg-white/5 dark:text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              EU BRAINET Doctoral Network · CBIG
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-purple-700 dark:text-purple-300">
              {profile.role}
            </p>
            <p className="mt-1 text-navy-700 dark:text-slate-300">
              {profile.institution} · {profile.group}
            </p>
            <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-slate-700 dark:text-slate-200">
              {profile.headline}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.intro}
            </p>

            <div className="mt-7">
              <ProfileLinks variant="ghost" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-navy-700 dark:bg-navy-900/40">
              <img
                src={portrait}
                alt="Portrait of Prabir Kumar Das"
                width={720}
                height={766}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATIC STATISTICS (manually maintained; see publicationStats.ts) */}
      <section className="border-b border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-950">
        <div className="container-academic grid grid-cols-2 divide-x divide-slate-200 py-8 sm:grid-cols-3 lg:grid-cols-5 dark:divide-navy-800">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-3 text-center">
              <div className="font-serif text-3xl font-semibold text-navy-900 dark:text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="container-academic py-14">
        <div className="eyebrow mb-3">Research interests</div>
        <h2 className="text-2xl font-semibold">Where my work sits</h2>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
          My primary identity is in electrophysiology and microelectrode-array research, complemented
          by EEG signal processing, computational neuroscience, biomedical AI and medical image
          analysis.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {profile.interests.map((it) => (
            <span key={it.label} className={it.primary ? 'chip-accent' : 'chip'}>
              {it.label}
            </span>
          ))}
        </div>
      </section>

      {/* CURRENT DOCTORAL RESEARCH */}
      <section className="bg-slate-50 py-14 dark:bg-navy-900/30">
        <div className="container-academic">
          <div className="eyebrow mb-3">Current doctoral research</div>
          <h2 className="text-2xl font-semibold">
            Electrophysiology of non-invasive temporal-interference stimulation
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Activity, t: 'MEA & EEG', d: 'Electrophysiological acquisition and quantitative analysis of neuronal and network activity.' },
              { icon: FlaskConical, t: 'TI stimulation', d: 'Assessing temporal-interference stimulation effects in vitro and in vivo.' },
              { icon: BrainCircuit, t: 'Network dynamics', d: 'Characterising neuronal network dynamics and connectivity.' },
              { icon: GraduationCap, t: 'BRAINET / CBIG', d: 'MSCA doctoral training at Tampere University with planned secondments in Germany.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card">
                <Icon className="text-teal-600 dark:text-teal-300" size={22} />
                <h3 className="mt-3 font-serif text-base font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/research" className="btn-primary">
              Explore research themes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED PUBLICATIONS */}
      <section className="container-academic py-14">
        <div className="flex items-end justify-between">
          <div>
            <div className="eyebrow mb-3">Selected publications</div>
            <h2 className="text-2xl font-semibold">Recent work</h2>
          </div>
          <Link to="/publications" className="hidden text-sm font-semibold text-teal-700 hover:text-teal-600 sm:inline-flex sm:items-center sm:gap-1 dark:text-teal-300">
            All publications <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-4">
          {selected.map((p) => (
            <PublicationItem key={p.id} pub={p} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/publications" className="btn-outline">
            All publications <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* RESEARCH PROJECTS PREVIEW */}
      <section className="bg-slate-50 py-14 dark:bg-navy-900/30">
        <div className="container-academic">
          <div className="eyebrow mb-3">Research projects</div>
          <h2 className="text-2xl font-semibold">Most significant projects</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((p) => (
              <div key={p.id} className="card flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">{p.themeLabel}</span>
                  <StatusBadge status={p.status} />
                </div>
                <h3 className="mt-3 font-serif text-base font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.objective}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/projects" className="btn-primary">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES + VIDEOS */}
      <section className="container-academic grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <div className="eyebrow mb-3">Latest research updates</div>
          <h2 className="text-2xl font-semibold">News</h2>
          <ul className="mt-5 space-y-5">
            {updates.map((u, i) => (
              <li key={i} className="flex gap-4">
                <div className="mt-1 flex flex-col items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                  {i < updates.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-slate-200 dark:bg-navy-700" />}
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {u.date}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {u.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-3">Research videos</div>
          <h2 className="text-2xl font-semibold">{channel.name}</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{channel.blurb}</p>
          <div className="mt-5 space-y-4">
            {videos.slice(0, 2).map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-lg border border-slate-200 p-3 transition hover:border-teal-300 hover:bg-slate-50 dark:border-navy-700 dark:hover:bg-navy-800/50"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-16 w-28 flex-shrink-0 rounded object-cover"
                />
                <span className="text-sm font-medium leading-snug text-navy-900 group-hover:text-teal-700 dark:text-slate-100 dark:group-hover:text-teal-300">
                  {v.title}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-5">
            <Link to="/videos" className="btn-outline">
              All videos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL LINKS CTA */}
      <section className="border-t border-slate-200 bg-white py-14 dark:border-navy-800 dark:bg-navy-950">
        <div className="container-academic text-center">
          <h2 className="text-2xl font-semibold">Connect & profiles</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Find my institutional profile, ORCID, code and research videos — or download my academic
            CV.
          </p>
          <div className="mt-6 flex justify-center">
            <ProfileLinks />
          </div>
        </div>
      </section>
    </>
  );
}
