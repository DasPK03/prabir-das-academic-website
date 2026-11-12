interface Props {
  eyebrow?: string;
  title: string;
  lead?: string;
}

export default function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <div className="border-b border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-900/40">
      <div className="container-academic py-12 sm:py-16">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        {lead && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
