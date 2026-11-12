// Curated open-source repositories. These are the authoritative, hand-verified
// entries shown on the Open Science page. The page may additionally fetch live
// metadata from the GitHub API, but it never fabricates stats — if the API is
// unavailable or rate-limited, these curated entries are shown as-is.

export interface Repository {
  name: string;
  repo: string; // owner/name — used for the GitHub API and link
  description: string;
  language?: string;
  application: string;
  dataset?: string;
}

export const githubUser = 'dasprabir';

export const repositories: Repository[] = [
  {
    name: 'M.Tech Thesis — EEG Code & Data',
    repo: 'dasprabir/MTechThesisEEGCodeData',
    description:
      'Code and data from the M.Tech thesis on functional brain connectivity and brain–behaviour correlation from EEG.',
    language: 'MATLAB / Python',
    application: 'EEG connectivity & graph-theoretic analysis',
    dataset: 'Thesis EEG data included',
  },
  {
    name: 'Stable DDRM — Ultrasound',
    repo: 'dasprabir/stable-ddrm-ultrasound',
    description:
      'Diffusion-based restoration (DDRM) framework for ultrasound image deconvolution with PSF/BCCB forward operators.',
    language: 'Python',
    application: 'Ultrasound image reconstruction / inverse problems',
  },
  {
    name: 'fMRI Visual Eccentricity (MATLAB)',
    repo: 'dasprabir/MATLAB-Project-on-fMRI',
    description: 'MATLAB analysis of BOLD signals across visual-field eccentricity.',
    language: 'MATLAB',
    application: 'fMRI / computational neuroscience',
  },
  {
    name: 'NMA Projects — Emotion & Connectivity',
    repo: 'dasprabir/NMA_Projects_Emoticonn',
    description:
      'Neuromatch Academy project analysing emotion processing in the brain using fMRI with effective and functional connectivity.',
    language: 'Python',
    application: 'Computational neuroscience (fMRI connectivity)',
  },
  {
    name: 'SIR Model of Infectious Diseases (MATLAB)',
    repo: 'dasprabir/SIR-Model-of-infectious-diseases-using-MATLAB',
    description:
      'Teaching-assistant material: SIR epidemiological modelling in MATLAB for quantitative techniques in medicine.',
    language: 'MATLAB',
    application: 'Quantitative modelling / teaching',
  },
  {
    name: 'Breast Cancer Detection (Histopathology)',
    repo: 'dasprabir/Breast-Cancer-Detection-from-histopathology',
    description:
      'Deep-learning models (custom CNN and ResNet50) for Invasive Ductal Carcinoma classification in histopathology images.',
    language: 'Python',
    application: 'Medical image classification',
  },
];
