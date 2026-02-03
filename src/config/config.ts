// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  /* =========================
     PERSONAL
  ========================== */
  personal: {
    name: 'Udditee Kapoor',
    title: 'Data Science & Economics Student | Aspiring Data Analyst',
    image: getAsset('images/me.png'),
    description:
      'I am a first-year BSc Data Science and Economics student at Christ (Deemed to be University), Bangalore, interested in the intersection of data, economics, and business decision-making.\n' +
      '\n' +
      'I have worked with nonprofit organizations, conglomerates, and policy research firms, contributing to data validation, operational analysis, and research support. I am also the co-founder of MyG.O.A.T, a platform helping students discover better colleges in India.\n' +
      '\n' +
      'My focus lies in converting complex datasets into actionable insights using data analysis and visualization. I am currently seeking internship opportunities in analytics, research, or strategy roles.\n' +
      '\n' +
      'Languages: English, Hindi, Bangla, Gujarati.',
    tagline: 'Turning data into decisions.',
    location: 'Bangalore, India',
  },

  /* =========================
     SEO
  ========================== */
  seo: {
    title: 'Udditee Kapoor – Data Science & Economics',
    description:
      'Portfolio website showcasing education, experience, projects, and research in data science and economics.',
  },

  /* =========================
     ANIMATED TEXT
  ========================== */
  animatedText: [
    'Aspiring Data Analyst',
    'Economics Student',
    'Problem Solver',
    'Builder',
  ],

  /* =========================
     NAVIGATION
  ========================== */
  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  /* =========================
     BLOGS (SAFE DEFAULT)
  ========================== */
  blogs: [],

  /* =========================
     EDUCATION
  ========================== */
  education: [
    {
      institution: 'Christ (Deemed to be University)',
      degree: 'BSc Economics with Data Science',
      year: '2024–2028',
      image: getAsset('images/education/christ_university.png'),
      description: [
        'Focus on applied data analysis and economic theory',
      ],
    },
    {
      institution: 'Grace International School',
      degree: 'Pearson Edexcel A Levels',
      year: '2023–2025',
      image: getAsset('images/education/grace_international.png'),
      description: [
        'Mathematics, Economics, English',
        'Dhaka, Bangladesh',
      ],
    },
  ],

  /* =========================
     CERTIFICATIONS (SAFE DEFAULT)
  ========================== */
  certifications: [],

  /* =========================
     EXPERIENCE
  ========================== */
  experience: [
    {
      title: 'Co-Founder',
      cardImage: getAsset('images/experience/mygoat.png'),
      place: 'MyG.O.A.T',
      time: '(2025 – Present)',
      desp: [
        'Co-founded a platform helping students evaluate colleges across India',
        'Led product development and user research initiatives',
      ],
    },
    {
      title: 'Intern',
      cardImage: getAsset('images/experience/bengal_industries.png'),
      place: 'Bengal Industries',
      time: '(Oct 2025 – Nov 2025)',
      desp: [
        'Worked with sales and marketing teams to observe operational workflows',
        'Identified process improvements for data handling',
      ],
    },
    {
      title: 'Volunteer',
      cardImage: getAsset('images/experience/vialisa.png'),
      place: 'Via-Lisa',
      time: '(Apr 2024 – Jul 2024)',
      desp: [
        'Facilitated English learning sessions for teenage girls',
        'Participated in financial literacy initiatives',
      ],
    },
    {
      title: 'Intern',
      cardImage: getAsset('images/experience/policy_exchange.png'),
      place: 'Policy Exchange Bangladesh',
      time: '(Oct 2023 – Nov 2023)',
      desp: [
        'Validated datasets for government research projects',
        'Supported policy briefs and research presentations',
      ],
    },
  ],

  /* =========================
     PROJECTS
  ========================== */
  projects: [
    {
      title: 'MyG.O.A.T – College Discovery Platform',
      cardImage: getAsset('images/project/mygoat_project.png'),
      description:
        'A student-focused platform offering data-driven insights to help applicants make better college decisions in India.',
      Githublink: 'https://github.com/udditeekapoor/mygoat',
    },
    {
      title: 'Applied Data Analysis & Visualization',
      cardImage: getAsset('images/project/data_viz_project.png'),
      description:
        'End-to-end data analysis project involving data cleaning, analysis, and interactive visualizations.',
      Githublink: 'https://github.com/udditeekapoor/data-analysis-project',
    },
  ],

  /* =========================
     RESEARCH (SAFE DEFAULT)
  ========================== */
  research: [],

  /* =========================
     BOOKS (SAFE DEFAULT)
  ========================== */
  books: [],

  /* =========================
     CONTACT
  ========================== */
  contact: {
    email: 'kapoorudditee@gmail.com',
    linkedin: 'https://www.linkedin.com/in/udditee-kapoor/',
    github: 'https://github.com/udditeekapoor',
    googleScholar: '',
    orcid: '',
  },
};

export default siteConfig;
