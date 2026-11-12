// Central registry of external profiles and contact links.
// Edit here to update links everywhere on the site.

export const links = {
  email: 'dasprabirk03@gmail.com',
  orcid: 'https://orcid.org/0009-0000-6484-3718',
  github: 'https://github.com/dasprabir',
  youtube: 'https://www.youtube.com/@gammamind16',
  institutional: 'https://research.tuni.fi/cbig/members/',
  tampere: 'https://www.tuni.fi/en',
  brainet: 'https://brainet-dn.eu/index.html',
  cbig: 'https://research.tuni.fi/cbig/',
  // Path to the downloadable CV (served from public/cv/). Replace the PDF to update.
  cv: 'cv/Prabir_Kumar_Das_CV.pdf',

  // Clearly-labelled placeholders — replace with the real URLs when available.
  googleScholar: '', // e.g. 'https://scholar.google.com/citations?user=XXXX'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/prabir-kumar-das-386579102/'
} as const;

export type LinkKey = keyof typeof links;
