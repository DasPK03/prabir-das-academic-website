import { useEffect } from 'react';

const BASE_TITLE = 'Prabir Kumar Das';

// Lightweight per-page SEO: sets document title and meta description without
// pulling in an extra dependency.
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
