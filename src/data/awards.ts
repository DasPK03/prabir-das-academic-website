// Awards & achievements — from CV.tex.

export interface Award {
  year: string;
  title: string;
  detail?: string;
}

export const awards: Award[] = [
  {
    year: '2026–2029',
    title: 'Marie Skłodowska-Curie Actions (MSCA) Doctoral Fellowship, Horizon Europe',
    detail:
      'Selected as a Doctoral Candidate in the BRAINET Doctoral Network, hosted by Tampere University, Finland.',
  },
  {
    year: '2024–2025',
    title: 'TIGER Master’s Excellence Scholarship (€10,000)',
    detail: 'Awarded for the academic year 2024–2025.',
  },
  {
    year: '2020',
    title: 'GATE 2020 — All India Rank 140, Instrumentation Engineering (IN)',
    detail: '98.09 percentile (Graduate Aptitude Test in Engineering).',
  },
  {
    year: '—',
    title: 'Post Graduate Scholarship (INR 2,97,600)',
    detail:
      'All India Council for Technical Education (AICTE), Department of Higher Education, Government of India.',
  },
];
