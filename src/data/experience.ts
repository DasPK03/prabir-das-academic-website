// Research, teaching and industry experience — from CV.tex.

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  detail?: string;
  tags?: string[];
}

// Research & project experience
export const researchExperience: ExperienceEntry[] = [
  {
    period: 'Mar 2025 – Aug 2025',
    role: "Master's Thesis Internship — Ultrasound Image Deconvolution with Diffusion Models",
    org: 'MINDS Team, IRIT (Institut de Recherche en Informatique de Toulouse)',
    detail:
      'Thesis: "Ultrasound Image Deconvolution via Block-Circulant Spectral Decomposition in Diffusion Models." Developed a forward-model-based inverse-problem framework using PSF/BCCB operators and SVD-domain sampling (DDRM) for robust image restoration under realistic degradations. Supervisors: Dr. Duong-Hung Pham, Dr. Denis Kouamé.',
    tags: ['Diffusion models', 'Inverse problems', 'Ultrasound'],
  },
  {
    period: '2025 – Ongoing',
    role: 'Research Collaborator, Deep Learning in Medical Imaging',
    org: 'Department of Mathematics, BITS Pilani (with Prof. Swati Rani Hait)',
    detail:
      'Project: "Adaptive Genetic Algorithm–Based Deep Feature Selector for Cancer Detection in Lung Histopathological Images." Hybrid framework combining channel-attention CNN features with an adaptive Genetic Algorithm for feature selection, followed by KNN classification; achieved 99.75% accuracy on the LC25000 dataset.',
    tags: ['CNN', 'Feature selection', 'Histopathology'],
  },
  {
    period: 'Sep 2024 – Feb 2025',
    role: 'Team Project — Biomedical Instrumentation for Human Movement Analysis',
    org: 'Institut des Sciences du Mouvement, Marseille',
    detail:
      'Design of biomedical instrumentation for human movement analysis. Supervised by Serge Mesure (Aix-Marseille Université) and Didier Bertrand (CryoKiné).',
    tags: ['Instrumentation', 'Biomechanics'],
  },
  {
    period: '2021 – 2022',
    role: "Master's Thesis Student — Functional Brain Connectivity (EEG)",
    org: 'Medical Informatics Lab, IIT Kharagpur (Supervisor: Dr. Debashree Guha Adhya)',
    detail:
      'Thesis: "Functional Brain Connectivity Analysis with Brain–Behavior Correlation: An EEG-Based Study." Analysed task-based and resting-state EEG using graph-theoretic and phase-synchronisation models to study small-world topology, hub formation and brain–behaviour correlations, establishing EEG network biomarkers for longitudinal neurophysiological monitoring.',
    tags: ['EEG', 'Graph theory', 'Connectivity'],
  },
  {
    period: 'Jul 2021 – Oct 2021',
    role: 'Summer Research Internship — fMRI Visual Eccentricity Analysis',
    org: 'IEEE EMBS Society, IIT Kharagpur',
    detail:
      'MATLAB-based analysis of BOLD signals to quantify variability and mean activation across visual-field eccentricity.',
    tags: ['fMRI', 'MATLAB'],
  },
];

// Work, teaching and industry experience
export const workExperience: ExperienceEntry[] = [
  {
    period: 'Oct 2025 – 2026',
    role: 'Assistant Professor',
    org: 'D.Y. Patil International University, Pune — Department of Bioscience and Bioengineering',
    detail:
      'Teaching: Advanced Computing for Biological Systems; Biomedical Signal Processing; Medical Imaging. Supervision of undergraduate research projects. Administrative roles: internship coordination; Skill Development Committee (In-Charge); organizing committee for departmental conference and the Biospark Hackathon; organised industrial (Cytiva) and hospital visits.',
    tags: ['Teaching', 'Research supervision', 'Administration'],
  },
  {
    period: 'Mar 2023 – Jul 2023',
    role: 'Senior Mathematics Faculty',
    org: 'ORCHIDS The International School, India',
    detail:
      'Taught advanced mathematics to high-school students; assessments, lesson planning and parent–teacher coordination.',
    tags: ['Teaching'],
  },
  {
    period: 'Aug 2021 – Dec 2021',
    role: 'Teaching Assistant — MATLAB for Quantitative Techniques in Medicine (MM61311)',
    org: 'IIT Kharagpur',
    detail: 'Conducted MATLAB labs on medical imaging and quantitative modelling.',
    tags: ['Teaching', 'MATLAB'],
  },
  {
    period: 'Nov 2016 – Aug 2018',
    role: 'Assistant Systems Engineer',
    org: 'Tata Consultancy Services (TCS), India',
    detail:
      'Software development and automation for enterprise clients and cross-team collaborations.',
    tags: ['Industry', 'Software'],
  },
];

// Technical expertise (grouped), from CV.tex
export interface SkillGroup {
  area: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    area: 'Signal Processing',
    items: [
      'EEG preprocessing & artefact removal',
      'ECG analysis',
      'Spectral analysis (PSD, band power)',
      'Time–frequency methods',
      'Phase synchronisation (PLV)',
      'Functional connectivity modelling',
    ],
  },
  {
    area: 'Computational Neuroimaging',
    items: [
      'EEG/fMRI connectivity analysis',
      'Graph-theoretic modelling (small-worldness, efficiency, modularity)',
      'Brain–behaviour modelling',
      'LOSO cross-validation',
    ],
  },
  {
    area: 'AI & Machine Learning',
    items: [
      'Deep learning (CNNs, ResNet, U-Net)',
      'Diffusion models (DDPM, DDRM)',
      'Classical ML (SVM, Random Forest, XGBoost)',
      'Interpretable AI (SHAP, Grad-CAM)',
      'Biomarker discovery & validation',
    ],
  },
  {
    area: 'Computational Imaging',
    items: [
      'Inverse problems',
      'Physics-informed modelling',
      'PSF-based forward models',
      'Spectral methods (FFT, SVD)',
      'Medical image reconstruction',
      'MRI (qMRI, DICOM)',
    ],
  },
  {
    area: 'Programming & Computing',
    items: [
      'Python (PyTorch, NumPy, SciPy)',
      'MATLAB, C/C++',
      'GPU computing (CUDA)',
      'OpenCV, NiBabel, NetworkX',
      'Linux, Git, LaTeX',
    ],
  },
];
