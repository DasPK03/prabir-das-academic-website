import type { ReactNode } from 'react';
import { Building2, Github, Youtube, Mail, GraduationCap, Linkedin, Award, ShieldCheck } from 'lucide-react';
import { OrcidIcon } from '../components/icons';
import { links } from '../data/links';
import { awards } from '../data/awards';
import { publications } from '../data/publications';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';

const ip = publications.find((p) => p.type === 'ip');

const referees = [
  {
    name: 'Prof. Jari Hyttinen',
    role: 'Professor, Biomedical Technology',
    org: 'BioMediTech, Faculty of Medicine and Health Technology, Tampere University',
  },
  {
    name: 'Dr. Julien Fade',
    role: 'Associate Professor & Director of Graduate School Programs',
    org: 'Centrale Méditerranée · Institut Fresnel',
  },
  {
    name: 'Dr. Swati Rani Hait',
    role: 'Assistant Professor, Department of Mathematics',
    org: 'BITS Pilani, Hyderabad Campus',
  },
];

interface ContactLink {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  placeholder?: boolean;
}

export default function Contact() {
  usePageMeta('Contact', 'Contact and professional profiles for Prabir Kumar Das.');

  const contactLinks: ContactLink[] = [
    {
      icon: <Building2 size={18} />,
      label: 'Institutional profile',
      value: 'research.tuni.fi/cbig/members',
      href: links.institutional,
      external: true,
    },
    { icon: <OrcidIcon size={18} />, label: 'ORCID', value: '0009-0000-6484-3718', href: links.orcid, external: true },
    { icon: <Github size={18} />, label: 'GitHub', value: 'github.com/dasprabir', href: links.github, external: true },
    { icon: <Youtube size={18} />, label: 'YouTube', value: '@gammamind16', href: links.youtube, external: true },
    { icon: <Mail size={18} />, label: 'Email', value: links.email, href: `mailto:${links.email}` },
    {
      icon: <GraduationCap size={18} />,
      label: 'Google Scholar',
      value: links.googleScholar ? links.googleScholar : 'Profile link to be added',
      href: links.googleScholar || '#',
      external: !!links.googleScholar,
      placeholder: !links.googleScholar,
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: links.linkedin ? links.linkedin : 'Profile link to be added',
      href: links.linkedin || '#',
      external: !!links.linkedin,
      placeholder: !links.linkedin,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact & profiles"
        lead="For research collaboration, academic enquiries or speaking, please reach out by email or connect through the profiles below."
      />

      <section className="container-academic py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((l) =>
            l.placeholder ? (
              <div
                key={l.label}
                className="flex items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-navy-700 dark:bg-navy-900/40"
              >
                <span className="text-slate-400">{l.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-navy-900 dark:text-white">{l.label}</div>
                  <div className="text-xs italic text-slate-500 dark:text-slate-400">{l.value}</div>
                </div>
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-teal-300 hover:bg-slate-50 dark:border-navy-700 dark:bg-navy-900/60 dark:hover:bg-navy-800/60"
              >
                <span className="text-teal-600 dark:text-teal-300">{l.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-navy-900 dark:text-white">{l.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{l.value}</div>
                </div>
              </a>
            ),
          )}
        </div>
      </section>

      {/* Awards */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-academic">
          <div className="mb-6 flex items-center gap-2">
            <Award className="text-teal-600 dark:text-teal-300" size={20} />
            <h2 className="text-xl font-semibold">Awards & achievements</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {awards.map((a, i) => (
              <div key={i} className="card">
                <div className="text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-300">
                  {a.year}
                </div>
                <h3 className="mt-1 font-serif text-base font-semibold text-navy-900 dark:text-white">
                  {a.title}
                </h3>
                {a.detail && (
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {a.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual property */}
      {ip && (
        <section className="container-academic py-12">
          <div className="mb-6 flex items-center gap-2">
            <ShieldCheck className="text-teal-600 dark:text-teal-300" size={20} />
            <h2 className="text-xl font-semibold">Intellectual property</h2>
          </div>
          <div className="card max-w-3xl">
            <span className="chip-accent">Registered Industrial Design</span>
            <h3 className="mt-3 font-serif text-lg font-semibold text-navy-900 dark:text-white">
              {ip.title}
            </h3>
            <dl className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex justify-between border-b border-slate-100 py-1 dark:border-navy-800">
                <dt className="text-slate-500 dark:text-slate-400">Design Number</dt>
                <dd className="font-medium text-navy-900 dark:text-white">493775-001</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-1 dark:border-navy-800">
                <dt className="text-slate-500 dark:text-slate-400">Class</dt>
                <dd className="font-medium text-navy-900 dark:text-white">24-01</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-1 dark:border-navy-800">
                <dt className="text-slate-500 dark:text-slate-400">Registered</dt>
                <dd className="font-medium text-navy-900 dark:text-white">20 May 2026</dd>
              </div>
              <div className="flex justify-between border-b border-slate-100 py-1 dark:border-navy-800">
                <dt className="text-slate-500 dark:text-slate-400">Role</dt>
                <dd className="font-medium text-navy-900 dark:text-white">Co-inventor (2nd of 10)</dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      {/* References */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-navy-800 dark:bg-navy-900/30">
        <div className="container-academic">
          <h2 className="mb-2 text-xl font-semibold">References</h2>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
            Referee contact details are available on request.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {referees.map((r) => (
              <div key={r.name} className="card">
                <h3 className="font-serif text-base font-semibold text-navy-900 dark:text-white">
                  {r.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{r.role}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{r.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
