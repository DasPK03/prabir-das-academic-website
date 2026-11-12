import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Search } from 'lucide-react';
import { publications } from '../data/publications';
import type { Publication } from '../data/publications';
import { publicationStats } from '../data/publicationStats';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';
import PublicationItem from '../components/PublicationItem';

type TypeFilter = 'all' | 'conference' | 'journal' | 'ip';
type StatusFilter = 'all' | 'Published' | 'Accepted' | 'Presented';
type RoleFilter = 'all' | 'first' | 'corr';

const statusOrder: Record<string, number> = { Published: 0, Accepted: 1, Presented: 2 };

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-md border px-3 py-1.5 text-sm font-medium transition',
        active
          ? 'border-navy-800 bg-navy-800 text-white dark:border-teal-600 dark:bg-teal-600'
          : 'border-slate-300 bg-white text-slate-600 hover:border-navy-400 dark:border-navy-700 dark:bg-navy-900/60 dark:text-slate-300 dark:hover:border-teal-700',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export default function Publications() {
  usePageMeta(
    'Publications',
    'Peer-reviewed conference papers, accepted papers, presentations and registered intellectual property by Prabir Kumar Das.',
  );

  const [query, setQuery] = useState('');
  const [type, setType] = useState<TypeFilter>('all');
  const [status, setStatus] = useState<StatusFilter>('all');
  const [role, setRole] = useState<RoleFilter>('all');
  const [year, setYear] = useState<string>('all');

  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications
      .filter((p) => {
        if (type !== 'all' && p.type !== type) return false;
        if (status !== 'all' && p.status !== status) return false;
        if (role === 'first' && !p.firstAuthor) return false;
        if (role === 'corr' && !p.corresponding) return false;
        if (year !== 'all' && String(p.year) !== year) return false;
        if (q) {
          const hay = `${p.title} ${p.venue} ${p.authors.map((a) => a.name).join(' ')}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      })
      .sort((a, b) => (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9));
  }, [query, type, status, role, year]);

  const conference = filtered.filter((p) => p.type === 'conference');
  const journal = filtered.filter((p) => p.type === 'journal');
  const ip = filtered.filter((p) => p.type === 'ip');

  const stats = [
    { label: 'Conference Papers', value: publicationStats.totalConferencePapers },
    { label: 'Published', value: publicationStats.published },
    { label: 'Presented', value: publicationStats.presented },
    { label: 'Accepted', value: publicationStats.accepted },
    { label: 'Registered Designs', value: publicationStats.registeredDesigns },
  ];

  const Section = ({ title, items }: { title: string; items: Publication[] }) =>
    items.length === 0 ? null : (
      <section className="py-6">
        <h2 className="mb-1 font-serif text-xl font-semibold text-navy-900 dark:text-white">
          {title}
          <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
            ({items.length})
          </span>
        </h2>
        <div>
          {items.map((p) => (
            <PublicationItem key={p.id} pub={p} />
          ))}
        </div>
      </section>
    );

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications & intellectual property"
        lead="All titles, author order and statuses are preserved as recorded. Acceptance is distinguished from proceedings publication — accepted papers are not listed as published."
      />

      {/* STATIC statistics (manually maintained — not derived from the list below) */}
      <section className="border-b border-slate-200 bg-slate-50 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-academic py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-slate-200 bg-white p-4 text-center dark:border-navy-700 dark:bg-navy-900/60"
              >
                <div className="font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            These totals are fixed and maintained by hand; they are independent of the filters below.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="container-academic py-8">
        <div className="relative mb-5">
          <Search
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author or venue…"
            aria-label="Search publications"
            className="w-full rounded-md border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-teal-500 dark:border-navy-700 dark:bg-navy-900/60 dark:text-slate-100"
          />
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Type
            </span>
            <FilterButton active={type === 'all'} onClick={() => setType('all')}>All</FilterButton>
            <FilterButton active={type === 'conference'} onClick={() => setType('conference')}>Conference</FilterButton>
            <FilterButton active={type === 'journal'} onClick={() => setType('journal')}>Journal</FilterButton>
            <FilterButton active={type === 'ip'} onClick={() => setType('ip')}>Intellectual Property</FilterButton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Status
            </span>
            <FilterButton active={status === 'all'} onClick={() => setStatus('all')}>All</FilterButton>
            <FilterButton active={status === 'Published'} onClick={() => setStatus('Published')}>Published</FilterButton>
            <FilterButton active={status === 'Accepted'} onClick={() => setStatus('Accepted')}>Accepted</FilterButton>
            <FilterButton active={status === 'Presented'} onClick={() => setStatus('Presented')}>Presented</FilterButton>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Role
            </span>
            <FilterButton active={role === 'all'} onClick={() => setRole('all')}>All</FilterButton>
            <FilterButton active={role === 'first'} onClick={() => setRole('first')}>First author</FilterButton>
            <FilterButton active={role === 'corr'} onClick={() => setRole('corr')}>Corresponding</FilterButton>

            <span className="ml-auto flex items-center gap-2">
              <label htmlFor="year" className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Year
              </label>
              <select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm dark:border-navy-700 dark:bg-navy-900/60 dark:text-slate-100"
              >
                <option value="all">All</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          Showing {filtered.length} of {publications.length} records.
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-slate-500 dark:text-slate-400">
            No publications match the current filters.
          </p>
        ) : (
          <>
            <Section title="Peer-Reviewed Conference Papers" items={conference} />
            <Section title="Journal Articles" items={journal} />
            <Section title="Intellectual Property" items={ip} />
          </>
        )}
      </section>
    </>
  );
}
