// Education timeline — transcribed from CV.tex. Dates and institutions preserved.

export interface EducationEntry {
  period: string;
  degree: string;
  institution: string;
  detail?: string;
  highlights?: string[];
}

export const education: EducationEntry[] = [
  {
    period: '2026 – 2029',
    degree: 'Marie Skłodowska-Curie Doctoral Researcher (PhD), Biomedical Technology',
    institution: 'Faculty of Medicine and Health Technology, Tampere University, Finland',
    detail:
      'MSCA Fellow in the EU BRAINET Doctoral Network (Marie Skłodowska-Curie Actions, Horizon Europe) — a competitively selected European doctoral network. Supervisor: Prof. Jari Hyttinen.',
    highlights: [
      'Developing electrophysiological methods (MEA, EEG) to assess the effects of non-invasive temporal-interference (TI) stimulation on the nervous system in vitro and in vivo, including control of stimulus patterns from novel networked microdevices.',
      'Planned secondments: TU Ilmenau and NEUROCONN, Germany (3 months).',
    ],
  },
  {
    period: '2024 – 2025',
    degree: 'M.Sc. & Technology in Complex System Engineering (Biomedical Track)',
    institution: 'Centrale Méditerranée, France',
    detail: 'GPA: 3.55 / 4.',
  },
  {
    period: '2020 – 2022',
    degree: 'M.Tech in Medical Imaging and Informatics',
    institution: 'SMST, Indian Institute of Technology Kharagpur, India (QS rank: 215)',
    detail: 'CGPA: 8.86 / 10.',
  },
  {
    period: '2012 – 2016',
    degree: 'B.Tech in Electronics and Instrumentation',
    institution: 'West Bengal University of Technology (MAKAUT), Kolkata, India',
    detail: 'CGPA: 8.29 / 10.',
  },
];
