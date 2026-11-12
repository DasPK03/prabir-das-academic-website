// Latest research updates for the homepage. Edit this list to post news.
// Keep entries factual; link to a publication id where relevant.

export interface Update {
  date: string;
  text: string;
  publicationId?: string;
}

export const updates: Update[] = [
  {
    date: '2026',
    text:
      'Began the Marie Skłodowska-Curie doctoral position at Tampere University (EU BRAINET Network, CBIG), working on electrophysiology and temporal-interference stimulation.',
  },
  {
    date: '2026',
    text: 'Two papers accepted at PAUL 2026 (Springer CCIS): DASPS multi-domain EEG anxiety analysis, and a bootstrap-validated cytology benchmark.',
    publicationId: 'paul2026-dasps',
  },
  {
    date: '2026',
    text: 'EEG-based schizophrenia detection (CNN+BiLSTM, explainable AI) published at IEEE CVMI 2026.',
    publicationId: 'cvmi2026-schizophrenia',
  },
  {
    date: '2026',
    text: 'Presented hippocampus sub-region segmentation (ResUNet3D) at AICTA 2026, NIT Silchar.',
    publicationId: 'aicta2026-hippocampus',
  },
];
