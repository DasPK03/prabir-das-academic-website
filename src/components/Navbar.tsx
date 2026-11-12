import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/projects', label: 'Projects' },
  { to: '/videos', label: 'Videos' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'rounded-md px-3 py-2 text-sm font-medium transition',
      isActive
        ? 'bg-navy-50 text-navy-900 dark:bg-navy-800 dark:text-white'
        : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900 dark:text-slate-300 dark:hover:bg-navy-800 dark:hover:text-white',
    ].join(' ');

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-navy-800 dark:bg-navy-950/90">
      <nav className="container-academic flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-800 text-sm font-bold text-white dark:bg-teal-600">
            PD
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-sm font-semibold text-navy-900 dark:text-white">
              Prabir Kumar Das
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Tampere University
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-navy-800"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden dark:border-navy-800 dark:bg-navy-950">
          <div className="container-academic flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
