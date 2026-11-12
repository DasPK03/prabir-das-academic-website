// Research projects. `themeId` links a project to a research theme (for filtering);
// `publicationIds` link to publications.ts. Only verified findings are stated;
// ongoing work is marked as such with no invented results.

export type ProjectStatus =
  | 'Ongoing'
  | 'In preparation'
  | 'Published'
  | 'Accepted'
  | 'Presented';

export interface Project {
  id: string;
  title: string;
  themeId: string;
  themeLabel: string;
  status: ProjectStatus;
  motivation: string;
  objective: string;
  dataset?: string;
  methodology: string;
  tools: string[];
  findings?: string;
  publicationIds?: string[];
  github?: string;
  /** Marks a project as one of the most significant — featured on the homepage
   *  and highlighted at the top of the Projects page. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'mea-div21',
    featured: true,
    title: 'MEA Electrophysiology & DIV21 Network Characterization',
    themeId: 'electrophysiology-mea',
    themeLabel: 'Electrophysiology & MEA',
    status: 'Ongoing',
    motivation:
      'Characterising the activity of in-vitro neuronal networks on microelectrode arrays is a foundation for studying how stimulation reshapes network behaviour.',
    objective:
      'Record and quantify neuronal network activity from MEA cultures and establish electrophysiological descriptors of network dynamics.',
    methodology:
      'Microelectrode array recording of in-vitro cultures; neural signal processing and network-level analysis of activity and dynamics.',
    tools: ['MEA recording', 'Python', 'Electrophysiology signal processing'],
    publicationIds: [],
  },
  {
    id: 'ti-stimulation',
    featured: true,
    title: 'Cell-Specific Temporal-Interference (TI) Stimulation Electrophysiology',
    themeId: 'electrophysiology-mea',
    themeLabel: 'Electrophysiology & MEA',
    status: 'In preparation',
    motivation:
      'Temporal-interference stimulation enables focal, non-invasive neuromodulation, but its cell-specific effects on cortical neurons require quantitative electrophysiological study.',
    objective:
      'Analyse whole-cell patch-clamp recordings of cortical neurons under TI stimulation to characterise cell-specific responses.',
    dataset:
      'Raw electrophysiological recordings of mouse cortical L2–3 neurons under temporal-interference stimulation (whole-cell patch-clamp).',
    methodology:
      'Sweep-level processing of patch-clamp recordings and machine-learning characterisation of cell-specific stimulation responses.',
    tools: ['Python', 'Electrophysiology analysis', 'Machine learning'],
    publicationIds: [],
  },
  {
    id: 'eeg-anxiety',
    featured: true,
    title: 'DASPS Multi-Domain EEG — Anxiety Severity Characterization',
    themeId: 'neural-signal-processing',
    themeLabel: 'Neural Signal Processing',
    status: 'Accepted',
    motivation:
      'Anxiety-severity EEG studies often report classifiers that do not survive participant-level validation; a rigorous multi-domain characterisation is needed.',
    objective:
      'Provide a full, statistically validated multi-domain characterisation of anxiety severity in the DASPS database and establish the limits of participant-level classification.',
    dataset:
      'DASPS (Database for Anxious States based on a Psychological Stimulation) — EEG from 23 participants across 276 trials, grouped by HAM-A severity.',
    methodology:
      'Spectral power, situation-anchored band-envelope dynamics, continuous wavelet analysis, dwPLI functional connectivity and graph-theoretic small-world analysis; cluster-bootstrap confidence intervals, participant-level PCA, LOPO cross-validation with permutation testing and a situation-slope mixed model.',
    findings:
      'Alpha-band power is the most robust univariate anxiety marker; cortical engagement escalates across induction situations in the Mild group but is blunted in Severe (theta group×situation interaction). Participant-level classification does not beat chance — framed as a cautionary benchmark.',
    tools: ['Python', 'EEG pipelines', 'NetworkX', 'LaTeX'],
    publicationIds: ['paul2026-dasps'],
  },
  {
    id: 'brain-connectivity',
    title: 'Functional Brain Connectivity & Brain–Behaviour Correlation (EEG)',
    themeId: 'neural-signal-processing',
    themeLabel: 'Neural Signal Processing',
    status: 'Presented',
    motivation:
      'Linking EEG network organisation to behaviour can yield interpretable biomarkers for neurophysiological monitoring.',
    objective:
      "Analyse task-based and resting-state EEG to study small-world topology, hub formation and brain–behaviour correlations (M.Tech thesis).",
    methodology:
      'Graph-theoretic and phase-synchronisation models of EEG connectivity; small-world and hub analysis; correlation with behavioural measures.',
    tools: ['MATLAB', 'Python', 'Graph theory'],
    github: 'https://github.com/dasprabir/MTechThesisEEGCodeData',
    publicationIds: [],
  },
  {
    id: 'schizophrenia-eeg',
    featured: true,
    title: 'EEG-Based Schizophrenia Detection (CNN + BiLSTM, Explainable AI)',
    themeId: 'biomedical-ai',
    themeLabel: 'Biomedical AI',
    status: 'Published',
    motivation:
      'Reported EEG schizophrenia classifiers can be inflated by segment-level cross-validation that leaks subject identity.',
    objective:
      'Detect schizophrenia from EEG with novel biomarkers and explainable AI, under leakage-free, subject-level validation.',
    dataset: 'Warsaw EEG schizophrenia dataset (28 subjects).',
    methodology:
      'CNN + BiLSTM architecture with explainable-AI biomarkers; honest re-evaluation using StratifiedGroupKFold and LOSO to eliminate data leakage.',
    findings:
      'Subject-level validation revealed that segment-level cross-validation caused data leakage; honest re-evaluation reframes the contribution around leakage-aware benchmarking.',
    tools: ['Python', 'PyTorch', 'Grad-CAM / SHAP'],
    publicationIds: ['cvmi2026-schizophrenia'],
  },
  {
    id: 'mri-segmentation',
    title: 'Brain & Organ MRI/CT Segmentation (3D Ensembles, nnU-Net)',
    themeId: 'computational-medical-imaging',
    themeLabel: 'Computational Medical Imaging',
    status: 'Presented',
    motivation:
      'Robust 3D segmentation of anatomy and lesions supports downstream diagnosis and planning.',
    objective:
      'Develop 3D residual/ensemble and nnU-Net segmentation pipelines across hippocampus, prostate, colon and liver.',
    dataset:
      'Medical Segmentation Decathlon tasks (e.g. Hippocampus, Colon) and related MRI/CT datasets.',
    methodology:
      'ResUNet3D with channel attention, deep supervision and 5-fold ensembling with test-time augmentation; nnU-Net 3D full-resolution pipelines with cross-validation.',
    tools: ['Python', 'PyTorch', 'nnU-Net'],
    publicationIds: [
      'aicta2026-hippocampus',
      'temsmet2026-prostate',
      'instcon2026-colon',
      'sipcov2026-liver',
    ],
  },
  {
    id: 'ultrasound-deconv',
    title: 'Ultrasound Image Deconvolution via Diffusion Models',
    themeId: 'computational-medical-imaging',
    themeLabel: 'Computational Medical Imaging',
    status: 'Presented',
    motivation:
      'Ultrasound restoration benefits from combining learned diffusion priors with explicit forward models of the imaging degradation.',
    objective:
      'Develop a forward-model-based inverse-problem framework for robust ultrasound image restoration.',
    methodology:
      'PSF/BCCB forward operators with SVD-domain sampling (DDRM) on a pretrained diffusion model; block-circulant spectral decomposition for restoration under realistic degradations.',
    tools: ['Python', 'PyTorch', 'Diffusion models (DDRM)'],
    github: 'https://github.com/dasprabir/stable-ddrm-ultrasound',
    publicationIds: [],
  },
  {
    id: 'cytology',
    title: 'Class-Imbalanced Cell Detection in Vaginal Cytology',
    themeId: 'biomedical-ai',
    themeLabel: 'Biomedical AI',
    status: 'Accepted',
    motivation:
      'Cytology cell detection suffers from severe class imbalance, and single point-estimate benchmarks can mislead.',
    objective:
      'Establish a bootstrap-validated benchmark for class-imbalanced cell detection, moving beyond point estimates.',
    methodology:
      'Bootstrap-validated benchmarking with confidence intervals for class-imbalanced detection.',
    tools: ['Python', 'PyTorch'],
    publicationIds: ['paul2026-cytology'],
  },
  {
    id: 'fmri-eccentricity',
    title: 'fMRI Visual Eccentricity Analysis',
    themeId: 'computational-neuroscience',
    themeLabel: 'Computational Neuroscience',
    status: 'Presented',
    motivation:
      'Mapping eccentricity-dependent responses clarifies the functional organisation of human visual cortex.',
    objective:
      'Quantify eccentricity-dependent patterns of BOLD activation across the visual field.',
    methodology:
      'MATLAB-based analysis of BOLD signals to quantify variability and mean activation across visual-field eccentricity.',
    tools: ['MATLAB'],
    github: 'https://github.com/dasprabir/MATLAB-Project-on-fMRI',
    publicationIds: ['sipcov2026-visual'],
  },
  {
    id: 'explainable-ai',
    title: 'Explainable & Uncertainty-Aware Biomedical AI',
    themeId: 'biomedical-ai',
    themeLabel: 'Biomedical AI',
    status: 'Ongoing',
    motivation:
      'Clinical AI needs interpretability, calibration and uncertainty quantification — not only accuracy.',
    objective:
      'Build interpretable, calibrated and uncertainty-aware models for biomedical classification and screening.',
    methodology:
      'Explainable AI (SHAP, Grad-CAM); uncertainty quantification and calibration (MC-Dropout, reliability diagrams); leakage-free validation; attribution-agreement analysis.',
    tools: ['Python', 'PyTorch', 'scikit-learn'],
    publicationIds: ['temsmet2026-fetal', 'incowoco2026-pcos'],
  },
];
