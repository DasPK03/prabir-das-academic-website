import { Link } from 'react-router-dom';
import { Github, Youtube, Mail, Building2 } from 'lucide-react';
import { OrcidIcon } from './icons';
import { links } from '../data/links';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-950">
      <div className="container-academic grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
            Prabir Kumar Das
          </div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Marie Skłodowska-Curie Doctoral Researcher, EU BRAINET Network — Computational Biophysics
            and Imaging Group (CBIG), Faculty of Medicine and Health Technology, Tampere University,
            Finland.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={links.institutional}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tampere University profile"
              className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
            >
              <Building2 size={20} />
            </a>
            <a
              href={links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
              className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
            >
              <OrcidIcon size={20} />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
            >
              <Github size={20} />
            </a>
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
            >
              <Youtube size={20} />
            </a>
            <a
              href={`mailto:${links.email}`}
              aria-label="Email"
              className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Explore
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300" to="/research">Research</Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300" to="/publications">Publications</Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300" to="/projects">Projects</Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-300" to="/videos">Videos</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Affiliation
          </div>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a className="hover:text-teal-700 dark:hover:text-teal-300" href={links.cbig} target="_blank" rel="noopener noreferrer">CBIG Research Group</a>
            </li>
            <li>
              <a className="hover:text-teal-700 dark:hover:text-teal-300" href={links.brainet} target="_blank" rel="noopener noreferrer">BRAINET Network</a>
            </li>
            <li>
              <a className="hover:text-teal-700 dark:hover:text-teal-300" href={links.tampere} target="_blank" rel="noopener noreferrer">Tampere University</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5 dark:border-navy-800">
        <div className="container-academic flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row dark:text-slate-400">
          <span>© {year} Prabir Kumar Das. All rights reserved.</span>
          <span>Built with React, TypeScript &amp; Tailwind CSS · Hosted on GitHub Pages.</span>
        </div>
      </div>
    </footer>
  );
}
