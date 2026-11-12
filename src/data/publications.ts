// ─────────────────────────────────────────────────────────────────────────────
// PUBLICATION DATABASE  (edit this file to add / change a publication)
//
// Accuracy rules honoured here:
//  • Full titles and author order are preserved exactly.
//  • `me: true` marks the author to highlight (rendered in bold).
//  • `corr: true` marks a corresponding author.
//  • status distinguishes Published / Accepted / Presented — acceptance is NOT
//    the same as proceedings publication.
//  • No DOIs, publishers or indexing are invented. Leave a field undefined when
//    it is not independently known.
//
// NOTE: The homepage statistics are STATIC and live in publicationStats.ts.
//       This list is independent of them — adding a paper here never changes
//       those numbers.
// ─────────────────────────────────────────────────────────────────────────────

export type PubType = 'journal' | 'conference' | 'ip';
export type PubStatus = 'Published' | 'Accepted' | 'Presented';

export interface Author {
  name: string;
  me?: boolean;
  corr?: boolean;
}

export interface Publication {
  id: string;
  type: PubType;
  title: string;
  authors: Author[];
  etAl?: boolean;
  venue: string;
  venueShort?: string;
  publisher?: string;
  year: number;
  status: PubStatus;
  firstAuthor?: boolean;
  corresponding?: boolean;
  doi?: string;
  pdf?: string;
  github?: string;
  url?: string;
  note?: string;
}

const ME = 'Prabir Kumar Das';

export const publications: Publication[] = [
  {
    id: 'paul2026-dasps',
    type: 'conference',
    title:
      'Multi-Domain EEG Characterization of Anxiety Severity in the DASPS Database: Robust Alpha Markers, Situation-Resolved Engagement Dynamics, and the Limits of Participant-Level Classification',
    authors: [
      { name: ME, me: true },
      { name: 'Mariya Urooj Abdul Basit Shaikh' },
      { name: 'Swati Rani Hait' },
      { name: 'Dhruba Jyoti Bora' },
      { name: 'Debasish Nath' },
    ],
    venue: '9th International Conference on Pattern Analysis, Understanding and Learning (PAUL 2026)',
    venueShort: 'PAUL 2026',
    publisher: 'Springer CCIS Conference Proceedings',
    year: 2026,
    status: 'Accepted',
    firstAuthor: true,
    url: 'https://paul-conference.org/',
  },
  {
    id: 'paul2026-cytology',
    type: 'conference',
    title:
      'Beyond Point Estimates: A Bootstrap-Validated Benchmark for Class-Imbalanced Cell Detection in Vaginal Cytology',
    authors: [
      { name: ME, me: true, corr: true },
      { name: 'Riya James' },
      { name: 'Hargunn Kour' },
      { name: 'Debasish Nath' },
      { name: 'Dhruba Jyoti Bora' },
    ],
    venue: '9th International Conference on Pattern Analysis, Understanding and Learning (PAUL 2026)',
    venueShort: 'PAUL 2026',
    publisher: 'Springer CCIS Conference Proceedings',
    year: 2026,
    status: 'Accepted',
    firstAuthor: true,
    corresponding: true,
    url: 'https://paul-conference.org/',
  },
  {
    id: 'cvmi2026-schizophrenia',
    type: 'conference',
    title:
      'Advanced EEG-Based Schizophrenia Detection Using CNN+BiLSTM with Novel Biomarkers and Explainable AI',
    authors: [{ name: ME, me: true }],
    etAl: true,
    venue:
      '5th IEEE International Conference on Computer Vision and Machine Intelligence (CVMI 2026), COEP Technological University, Pune',
    venueShort: 'IEEE CVMI 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Published',
    firstAuthor: true,
  },
  {
    id: 'icsit2026-music',
    type: 'conference',
    title: 'EEG Correlates of Music Familiarity and Enjoyment: Individual-Level Analysis',
    authors: [
      { name: 'Siddhi Pandey' },
      { name: ME, me: true, corr: true },
      { name: 'Rahul Sharma' },
    ],
    venue:
      '2nd International Conference on Intelligent Computing and Sustainable Innovation in Technology (IC-SIT 2026)',
    venueShort: 'IC-SIT 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Presented',
    corresponding: true,
  },
  {
    id: 'incowoco2026-pcos',
    type: 'conference',
    title:
      'Uncertainty-Aware Benchmarking, Attribution Agreement, and a Pre-Ultrasound Screening Model for Polycystic Ovary Syndrome Prediction',
    authors: [
      { name: 'A. S. Salunke' },
      { name: 'K. Shetty' },
      { name: 'Hargunn Kour' },
      { name: 'P. Jalan' },
      { name: ME, me: true, corr: true },
    ],
    venue:
      '3rd IEEE International Conference for Women in Computing (INCOWOCO 2026), Symbiosis Institute of Computer Studies and Research, Pune',
    venueShort: 'INCOWOCO 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Accepted',
    corresponding: true,
  },
  {
    id: 'aicta2026-hippocampus',
    type: 'conference',
    title:
      'Deep Learning-Based Anterior and Posterior Hippocampus Segmentation in Brain MRI: A 3D Residual Ensemble Approach',
    authors: [
      { name: 'Aishwarya Wayal' },
      { name: ME, me: true },
      { name: 'Sudarsan Sahoo' },
      { name: 'Debasish Nath' },
    ],
    venue:
      '4th International Conference on Artificial Intelligence, Computing Technologies and IoT (AICTA 2026), NIT Silchar',
    venueShort: 'AICTA 2026',
    publisher: 'Springer',
    year: 2026,
    status: 'Presented',
  },
  {
    id: 'temsmet2026-fetal',
    type: 'conference',
    title:
      'Quality-Aware Fetal Ultrasound Plane Classification with Uncertainty Quantification and Calibration',
    authors: [{ name: ME, me: true }],
    etAl: true,
    venue: 'IEEE International Conference (TEMSMET 2026), Hyderabad',
    venueShort: 'IEEE TEMSMET 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Accepted',
    firstAuthor: true,
  },
  {
    id: 'temsmet2026-prostate',
    type: 'conference',
    title:
      'Deep Learning-Based Peripheral and Transition Zone Segmentation in Prostate MRI: A 3D Ensemble Approach',
    authors: [
      { name: 'Aishwarya Wayal' },
      { name: 'Debasish Nath' },
      { name: ME, me: true, corr: true },
    ],
    etAl: true,
    venue: 'IEEE International Conference (TEMSMET 2026), Hyderabad',
    venueShort: 'IEEE TEMSMET 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Accepted',
    corresponding: true,
  },
  {
    id: 'instcon2026-idc',
    type: 'conference',
    title:
      'A Comparison of CNN Architectures for IDC Identification Using Transfer Learning on Enhanced VGG19',
    authors: [
      { name: 'Hafsah S. Byahatti' },
      { name: ME, me: true },
      { name: 'Debasish Nath' },
      { name: 'Swati Rani Hait' },
    ],
    venue: '1st IEEE International Conference on Instrumentation (INSTCon 2026), NIT Rourkela',
    venueShort: 'IEEE INSTCon 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Presented',
  },
  {
    id: 'instcon2026-colon',
    type: 'conference',
    title: 'Colon Cancer Segmentation Using Deep Learning: A 3-D nnU-Net Pipeline with Cross-Validation',
    authors: [
      { name: 'Mansi Parkhedkar' },
      { name: ME, me: true },
      { name: 'Debasish Nath' },
      { name: 'Swati Rani Hait' },
    ],
    venue: '1st IEEE International Conference on Instrumentation (INSTCon 2026), NIT Rourkela',
    venueShort: 'IEEE INSTCon 2026',
    publisher: 'IEEE',
    year: 2026,
    status: 'Presented',
  },
  {
    id: 'sipcov2026-visual',
    type: 'conference',
    title: 'Mapping the Visual Periphery: Eccentricity-Dependent Patterns in Human Visual Cortex',
    authors: [
      { name: ME, me: true },
      { name: 'S. Tripathi' },
      { name: 'Sudarsan Sahoo' },
      { name: 'K. Mukherjee' },
      { name: 'Debasish Nath' },
    ],
    venue:
      '3rd International Conference on Signal Processing and Computer Vision (SIPCOV 2026) — Oral Presentation',
    venueShort: 'SIPCOV 2026',
    year: 2026,
    status: 'Presented',
    firstAuthor: true,
  },
  {
    id: 'sipcov2026-liver',
    type: 'conference',
    title:
      'Liver Tumour Segmentation Using Deep Learning: A 2.5D U-Net Baseline and nnU-Net 2D Ensemble',
    authors: [
      { name: ME, me: true },
      { name: 'S. Darekar', corr: true },
      { name: 'K. G. Ramchandani' },
      { name: 'N. M. Deshpande' },
      { name: 'Debasish Nath' },
      { name: 'K. Mukherjee' },
    ],
    venue:
      '3rd International Conference on Signal Processing and Computer Vision (SIPCOV 2026) — Oral Presentation',
    venueShort: 'SIPCOV 2026',
    year: 2026,
    status: 'Presented',
    firstAuthor: true,
  },

  // ── Intellectual Property ───────────────────────────────────────────────────
  {
    id: 'ip-pediatric-skin',
    type: 'ip',
    title: 'Pediatric Skin Cancer Diagnostic AI Device',
    authors: [{ name: ME, me: true }],
    venue: 'Registered Industrial Design — Design No. 493775-001, Class 24-01',
    venueShort: 'Registered Design',
    year: 2026,
    status: 'Published',
    note: 'Registered 20 May 2026. Co-inventor (2nd of 10 applicants). Registered industrial design — not a journal or conference paper.',
  },
];
