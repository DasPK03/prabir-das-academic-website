// Core academic identity and biography. Edit this file to update the hero,
// About page intro, and research-interest chips.

export interface ResearchInterest {
  label: string;
  primary?: boolean;
}

export const profile = {
  name: 'Prabir Kumar Das',
  role: 'Marie Skłodowska-Curie Doctoral Researcher',
  network: 'EU BRAINET Doctoral Network',
  institution: 'Tampere University, Finland',
  faculty: 'Faculty of Medicine and Health Technology',
  group: 'Computational Biophysics and Imaging Group (CBIG)',
  environment: 'Biomedical Engineering and Technology (BMT TECH)',
  supervisor: 'Prof. Jari Hyttinen',
  location: 'Tampere, Finland',

  headline: 'Advancing Electrophysiology, Computational Neuroscience and Biomedical AI.',
  tagline:
    'Translating individual-level brain modelling into personalised and sustainable brain-health solutions.',

  // Short hero introduction.
  intro:
    'I am a Marie Skłodowska-Curie Doctoral Researcher in the EU BRAINET Doctoral Network at Tampere University, Finland, working in the Computational Biophysics and Imaging Group under Prof. Jari Hyttinen. My doctoral research develops electrophysiological methods — microelectrode arrays (MEA) and EEG — to study how non-invasive temporal-interference (TI) stimulation acts on the nervous system in vitro and in vivo.',

  // Longer biography for the About page (plain paragraphs).
  biography: [
    'I am a biomedical engineer and Marie Skłodowska-Curie (MSCA) Doctoral Researcher in the EU BRAINET Doctoral Network (Horizon Europe) at Tampere University, Finland, hosted by the Computational Biophysics and Imaging Group (CBIG) within the Faculty of Medicine and Health Technology. My supervisor is Prof. Jari Hyttinen. My PhD (2026–2029) develops electrophysiological methods — microelectrode arrays (MEA) and EEG — to assess the effects of non-invasive temporal-interference (TI) stimulation on the nervous system, both in vitro and in vivo, including the control of stimulus patterns from novel networked microdevices.',
    'My academic foundation is in biomedical signal processing and medical image analysis. I hold an M.Tech in Medical Imaging and Informatics from the School of Medical Science and Technology (SMST), IIT Kharagpur, where my thesis studied functional brain connectivity and brain–behaviour correlations from EEG using graph-theoretic and phase-synchronisation models. I subsequently completed a Master of Science and Technology (Biomedical Track) at Centrale Méditerranée, France, and a master’s thesis internship at the IRIT laboratory in Toulouse on ultrasound image deconvolution with diffusion-based generative models.',
    'Across these environments my work has centred on physics-informed and interpretable AI for biomedical data — EEG, fMRI, ultrasound and MRI — with an emphasis on biomarker discovery, rigorous participant-level validation, and uncertainty-aware clinical decision support. My doctoral work extends this trajectory from imaging toward electrophysiology and neurotechnology, bridging neural signal acquisition, computational modelling and quantitative analysis.',
  ],

  interests: [
    { label: 'Electrophysiology', primary: true },
    { label: 'Microelectrode Arrays (MEA)', primary: true },
    { label: 'EEG Signal Processing' },
    { label: 'Computational Neuroscience' },
    { label: 'Neural Network Dynamics' },
    { label: 'Functional Brain Connectivity' },
    { label: 'Biomedical AI' },
    { label: 'Medical Image Analysis' },
  ] as ResearchInterest[],
};
