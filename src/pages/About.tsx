import portrait from '../assets/prabir.jpg';
import { profile } from '../data/profile';
import { education } from '../data/education';
import { researchExperience, workExperience, skills } from '../data/experience';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';
import ProfileLinks from '../components/ProfileLinks';
import type { ExperienceEntry } from '../data/experience';

function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative space-y-7 border-l border-slate-200 pl-6 dark:border-navy-700">
      {entries.map((e, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-teal-500 dark:border-navy-950" />
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
            {e.period}
          </div>
          <h3 className="mt-1 font-serif text-base font-semibold text-navy-900 dark:text-white">
            {e.role}
          </h3>
          <div className="text-sm text-slate-600 dark:text-slate-400">{e.org}</div>
          {e.detail && (
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {e.detail}
            </p>
          )}
          {e.tags && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function About() {
  usePageMeta(
    'About',
    'Academic biography, education, research experience and technical expertise of Prabir Kumar Das.',
  );

  return (
    <>
      <PageHeader eyebrow="About me" title="Academic biography" />

      <section className="container-academic grid gap-10 py-12 lg:grid-cols-[1fr_300px]">
        <div className="prose-academic space-y-4">
          {profile.biography.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="pt-2">
            <ProfileLinks />
          </div>
        </div>

        <aside className="space-y-5">
          <img
            src={portrait}
            alt="Portrait of Prabir Kumar Das"
            className="w-full rounded-xl border border-slate-200 object-cover dark:border-navy-700"
          />
          <div className="card">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-navy-900 dark:text-white">Position</dt>
                <dd className="text-slate-600 dark:text-slate-400">{profile.role}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900 dark:text-white">Group</dt>
                <dd className="text-slate-600 dark:text-slate-400">{profile.group}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900 dark:text-white">Faculty</dt>
                <dd className="text-slate-600 dark:text-slate-400">{profile.faculty}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900 dark:text-white">Supervisor</dt>
                <dd className="text-slate-600 dark:text-slate-400">{profile.supervisor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-900 dark:text-white">Location</dt>
                <dd className="text-slate-600 dark:text-slate-400">{profile.location}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      {/* Research interests */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-academic">
          <h2 className="text-xl font-semibold">Research interests</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {profile.interests.map((it) => (
              <span key={it.label} className={it.primary ? 'chip-accent' : 'chip'}>
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="container-academic py-12">
        <h2 className="mb-6 text-xl font-semibold">Education</h2>
        <Timeline
          entries={education.map((e) => ({
            period: e.period,
            role: e.degree,
            org: e.institution,
            detail: [e.detail, ...(e.highlights ?? [])].filter(Boolean).join(' '),
          }))}
        />
      </section>

      {/* Research experience */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-academic">
          <h2 className="mb-6 text-xl font-semibold">Research & project experience</h2>
          <Timeline entries={researchExperience} />
        </div>
      </section>

      {/* Work / teaching / industry */}
      <section className="container-academic py-12">
        <h2 className="mb-6 text-xl font-semibold">Appointments, teaching & industry</h2>
        <Timeline entries={workExperience} />
      </section>

      {/* Technical expertise */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-academic">
          <h2 className="mb-6 text-xl font-semibold">Technical expertise</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.area} className="card">
                <h3 className="font-serif text-base font-semibold text-navy-900 dark:text-white">
                  {g.area}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-teal-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
