import { useState } from 'react';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { videos, channel } from '../data/videos';
import type { VideoItem } from '../data/videos';
import { usePageMeta } from '../hooks/usePageMeta';
import PageHeader from '../components/PageHeader';

function VideoCard({ video }: { video: VideoItem }) {
  const [play, setPlay] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <div className="card flex flex-col p-0">
      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-navy-900">
        {play ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="group relative h-full w-full"
            aria-label={`Play: ${video.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-lg">
                <Play size={24} className="ml-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-base font-semibold text-navy-900 dark:text-white">
          {video.title}
        </h3>
        {video.description && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {video.description}
          </p>
        )}
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-600 dark:text-teal-300"
        >
          Watch on YouTube <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Videos() {
  usePageMeta(
    'Research Videos',
    'Research videos and scientific communication by Prabir Kumar Das on the Gamma Mind YouTube channel.',
  );

  return (
    <>
      <PageHeader eyebrow="Scientific communication" title="Research Videos" />

      <section className="container-academic py-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center dark:border-navy-800 dark:bg-navy-900/40">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
              <Youtube size={26} />
            </span>
            <div>
              <div className="font-serif text-lg font-semibold text-navy-900 dark:text-white">
                {channel.name} <span className="text-sm font-normal text-slate-500">· {channel.handle}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{channel.blurb}</p>
            </div>
          </div>
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            <Youtube size={16} /> Subscribe
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>
    </>
  );
}
