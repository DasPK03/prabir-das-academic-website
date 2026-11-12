// Research themes. `publicationIds` / `projectIds` reference ids in
// publications.ts and projects.ts so the Research page can link to them.

export interface ResearchTheme {
  id: string;
  title: string;
  primary?: boolean;
  topics: string[];
  overview: string;
  motivation: string;
  methods: string;
  projectIds: string[];
  publicationIds: string[];
  software?: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    id: 'electrophysiology-mea',
    title: 'Electrophysiology & Microelectrode Array (MEA) Research',
    primary: true,
    topics: [
      'Microelectrode array recordings',
      'In-vitro electrophysiology',
      'Neuronal network activity',
      'DIV21 electrophysiological characterization',
      'Neural signal processing',
      'Network dynamics',
      'Temporal-interference stimulation',
      'Electrophysiological biomarkers',
    ],
    overview:
      'My doctoral research develops electrophysiological methods — microelectrode arrays (MEA) and EEG — to characterise neuronal network activity and to assess how non-invasive temporal-interference (TI) stimulation affects the nervous system in vitro and in vivo.',
    motivation:
      'Temporal-interference stimulation promises focal, non-invasive neuromodulation, but its cell- and network-level effects remain incompletely understood. Quantitative electrophysiology is needed to connect stimulation parameters to measurable changes in neuronal and network behaviour.',
    methods:
      'MEA recording and analysis of in-vitro neuronal cultures; network-level descriptors of activity and dynamics; neural signal processing pipelines; and controlled stimulus patterning from networked microdevices. This is ongoing doctoral work within the BRAINET network.',
    projectIds: ['mea-div21', 'ti-stimulation'],
    publicationIds: [],
    software: ['Python', 'Signal-processing pipelines for electrophysiological recordings'],
  },
  {
    id: 'neural-signal-processing',
    title: 'Neural Signal Processing',
    topics: [
      'EEG analysis',
      'Functional connectivity',
      'Time–frequency analysis',
      'Phase synchronization',
      'Power spectral density',
      'Graph theory',
      'Brain–behaviour relationships',
      'EEG biomarkers',
    ],
    overview:
      'A sustained line of work on extracting interpretable biomarkers from EEG using spectral, time–frequency, connectivity and graph-theoretic analysis, with careful participant-level statistical validation.',
    motivation:
      'Robust EEG biomarkers can support disease monitoring and brain–behaviour research, but many reported effects do not survive participant-level validation. My work emphasises methods that are both interpretable and statistically honest.',
    methods:
      'Welch PSD and band-power features; continuous wavelet / time–frequency analysis; phase-locking value and debiased weighted phase-lag index (dwPLI) connectivity; graph-theoretic small-world analysis; FDR-corrected statistics and LOSO / LOPO cross-validation.',
    projectIds: ['eeg-anxiety', 'brain-connectivity'],
    publicationIds: ['paul2026-dasps', 'icsit2026-music'],
    software: ['Python', 'MNE-style EEG pipelines', 'NetworkX'],
  },
  {
    id: 'computational-neuroscience',
    title: 'Computational Neuroscience',
    topics: [
      'Neural network dynamics',
      'Computational modelling',
      'Biological signal characterization',
      'Network connectivity',
      'Quantitative analysis of electrophysiological data',
    ],
    overview:
      'Quantitative and modelling approaches to characterise neural network dynamics and connectivity from biological signals, spanning EEG, fMRI and electrophysiological recordings.',
    motivation:
      'Understanding how coordinated network activity gives rise to measurable signals is central to both basic neuroscience and clinical neurotechnology.',
    methods:
      'Graph-theoretic network modelling (efficiency, modularity, small-worldness); effective and functional connectivity estimation; quantitative characterisation of electrophysiological and neuroimaging data.',
    projectIds: ['brain-connectivity', 'fmri-eccentricity'],
    publicationIds: ['sipcov2026-visual'],
    software: ['Python', 'MATLAB', 'NetworkX'],
  },
  {
    id: 'biomedical-ai',
    title: 'Biomedical Artificial Intelligence',
    topics: [
      'Machine learning',
      'Deep learning',
      'Explainable AI',
      'Biomedical signal classification',
      'Uncertainty quantification',
      'Model calibration',
      'Clinical decision-support systems',
    ],
    overview:
      'Interpretable and uncertainty-aware machine learning for biomedical signals and images, with an emphasis on honest benchmarking and calibration rather than headline accuracy alone.',
    motivation:
      'Clinical decision support requires models that are not only accurate but also calibrated, interpretable, and validated without data leakage. Several of my projects specifically re-examine reported results under rigorous validation.',
    methods:
      'CNN / BiLSTM architectures; explainable AI (SHAP, Grad-CAM); uncertainty quantification and model calibration (e.g. MC-Dropout, reliability diagrams); bootstrap-validated benchmarks; StratifiedGroupKFold / LOSO to prevent leakage.',
    projectIds: ['schizophrenia-eeg', 'explainable-ai', 'cytology'],
    publicationIds: [
      'cvmi2026-schizophrenia',
      'paul2026-cytology',
      'incowoco2026-pcos',
      'temsmet2026-fetal',
    ],
    software: ['Python', 'PyTorch', 'scikit-learn'],
  },
  {
    id: 'computational-medical-imaging',
    title: 'Computational Medical Imaging',
    topics: [
      'MRI segmentation',
      'Ultrasound image reconstruction',
      'Diffusion models',
      'Inverse problems',
      'Medical image analysis',
      'Physics-informed machine learning',
    ],
    overview:
      'Physics-informed and deep-learning methods for medical image reconstruction and segmentation, including diffusion-based restoration and 3D ensemble segmentation.',
    motivation:
      'Medical image reconstruction and segmentation benefit from combining learned priors with explicit forward models, improving robustness under realistic degradations.',
    methods:
      'Diffusion-based restoration (DDPM / DDRM) with PSF/BCCB forward operators and SVD-domain sampling; 3D U-Net and residual ensemble segmentation with test-time augmentation; nnU-Net pipelines.',
    projectIds: ['ultrasound-deconv', 'mri-segmentation'],
    publicationIds: [
      'aicta2026-hippocampus',
      'temsmet2026-prostate',
      'instcon2026-colon',
      'sipcov2026-liver',
    ],
    software: ['Python', 'PyTorch', 'nnU-Net'],
  },
];
