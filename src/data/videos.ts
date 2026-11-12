// Research videos & scientific communication.
// Add/remove videos by editing this list. Each `id` is the YouTube video ID
// (the part after watch?v=). Thumbnails are the standard YouTube thumbnails for
// that ID — nothing is fabricated. View counts are intentionally NOT shown.

export interface VideoItem {
  id: string; // YouTube video ID
  title: string;
  description?: string;
}

export const channel = {
  name: 'Gamma Mind',
  handle: '@gammamind16',
  url: 'https://www.youtube.com/@gammamind16',
  blurb:
    'Scientific communication and research walkthroughs — sharing projects, methods and the research journey.',
};

// Known public videos referenced from the CV. Replace titles/descriptions or add
// more entries as the channel grows.
export const videos: VideoItem[] = [
  {
    id: '8i_eWSINxh0',
    title: 'EEG-Based Brain Connectivity & Brain–Behaviour Study (M.Tech Thesis)',
    description:
      'Walkthrough of the functional brain-connectivity analysis from the IIT Kharagpur M.Tech thesis — graph-theoretic and phase-synchronisation models of EEG.',
  },
  {
    id: 'Sz4enWegPkE',
    title: 'Image-Guided Pick-and-Place Robot with Distance Measurement (Project Demo)',
    description:
      'Demonstration of an Arduino-based image-guided pick-and-place robot developed as a final-year B.Tech project.',
  },
];
