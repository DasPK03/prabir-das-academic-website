import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="container-academic flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="font-serif text-6xl font-semibold text-navy-900 dark:text-white">404</div>
      <h1 className="mt-4 text-xl font-semibold">Page not found</h1>
      <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
        The page you are looking for doesn’t exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-6">
        Back to home
      </Link>
    </section>
  );
}
