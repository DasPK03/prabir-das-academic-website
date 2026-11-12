import { Github, Youtube, Mail, FileText, Building2, GraduationCap, Linkedin } from 'lucide-react';
import { OrcidIcon } from './icons';
import { links } from '../data/links';

const cvHref = `${import.meta.env.BASE_URL}${links.cv}`;

type Variant = 'solid' | 'ghost';

interface Props {
  variant?: Variant;
  showCV?: boolean;
}

export default function ProfileLinks({ variant = 'ghost', showCV = true }: Props) {
  const base =
    variant === 'solid'
      ? 'bg-white/10 text-white hover:bg-white/20 border-white/15'
      : 'bg-white text-navy-800 hover:border-navy-400 hover:bg-slate-50 border-slate-300 dark:bg-navy-900/60 dark:text-slate-100 dark:border-navy-700 dark:hover:bg-navy-800';

  const cls = `inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition ${base}`;

  return (
    <div className="flex flex-wrap gap-2">
      <a className={cls} href={links.institutional} target="_blank" rel="noopener noreferrer">
        <Building2 size={16} /> Tampere profile
      </a>
      <a className={cls} href={links.orcid} target="_blank" rel="noopener noreferrer">
        <OrcidIcon size={16} /> ORCID
      </a>
      <a className={cls} href={links.github} target="_blank" rel="noopener noreferrer">
        <Github size={16} /> GitHub
      </a>
      <a className={cls} href={links.youtube} target="_blank" rel="noopener noreferrer">
        <Youtube size={16} /> YouTube
      </a>
      <a className={cls} href={`mailto:${links.email}`}>
        <Mail size={16} /> Email
      </a>
      {links.googleScholar && (
        <a className={cls} href={links.googleScholar} target="_blank" rel="noopener noreferrer">
          <GraduationCap size={16} /> Scholar
        </a>
      )}
      {links.linkedin && (
        <a className={cls} href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
      )}
      {showCV && (
        <a className={cls} href={cvHref} target="_blank" rel="noopener noreferrer">
          <FileText size={16} /> Download CV
        </a>
      )}
    </div>
  );
}
