import type { PubStatus } from '../data/publications';

const styles: Record<string, string> = {
  Published:
    'bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-800/60',
  Accepted:
    'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-200 dark:border-amber-800/50',
  Presented:
    'bg-navy-50 text-navy-800 border-navy-200 dark:bg-navy-800/60 dark:text-slate-200 dark:border-navy-700',
  Ongoing:
    'bg-slate-100 text-slate-700 border-slate-200 dark:bg-navy-800/60 dark:text-slate-300 dark:border-navy-700',
  'In preparation':
    'bg-slate-100 text-slate-700 border-slate-200 dark:bg-navy-800/60 dark:text-slate-300 dark:border-navy-700',
};

export default function StatusBadge({ status }: { status: PubStatus | string }) {
  const cls = styles[status] ?? styles.Presented;
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${cls}`}
    >
      {status}
    </span>
  );
}
