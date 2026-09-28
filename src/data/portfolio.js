// portfolio.js — all site content in one place, separated from UI

export const personal = {
  name: 'Keyan',
  github: 'keyanskv',
  githubUrl: 'https://github.com/keyanskv/',
  linkedinUrl: 'https://www.linkedin.com/in/karthi-keyan-s-92b8b4220/',
  emailPrimary: 'keyanskv@gmail.com',
  emailSecondary: 'keyanskv@protonmail.com',
  bugcrowdUrl: 'https://bugcrowd.com/h/Keyans',
  tryhackmeUrl: 'https://tryhackme.com/badges',
  tagline: 'Software Developer • Linux & DevOps Learner • Cybersecurity Researcher',
  heroDescription:
    'I build practical software, automate Linux environments, explore cybersecurity through responsible vulnerability research, and experiment with AI and emerging technologies.',
  statusBadge: 'Currently learning • Building • Contributing to Open Source',
};

export const about = {
  paragraphs: [
    "I'm Keyan, a technology learner and developer interested in software development, Linux, DevOps, networking, cybersecurity and AI.",
    'My learning approach is strongly hands-on. I enjoy building applications, configuring Linux environments, experimenting with automation, troubleshooting systems and exploring security through responsible vulnerability research.',
    "I've worked with technologies including React, Flutter, Python, Flask, Linux, Docker, Ansible, networking tools and machine-learning technologies.",
    'I also contribute to open-source projects and continuously improve my skills by building projects and solving real technical problems.',
  ],
  interests: [
    'Building software',
    'Linux and system administration',
    'Automation',
    'Networking',
    'Cybersecurity research',
    'Open-source contribution',
    'AI experimentation',
    'Learning emerging technologies',
    'Quantum computing / quantum algorithms',
  ],
};

export const skills = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    items: ['Python', 'JavaScript', 'Dart', 'Bash'],
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    items: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Mobile Development',
    icon: 'Smartphone',
    items: ['Flutter', 'Dart', 'Riverpod'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Flask', 'REST APIs', 'SQLite', 'Python'],
  },
  {
    category: 'Linux & DevOps',
    icon: 'Terminal',
    items: ['Ubuntu', 'Linux CLI', 'Bash', 'Nginx', 'Docker', 'Ansible', 'Git'],
  },
  {
    category: 'Networking',
    icon: 'Network',
    items: ['TCP/IP', 'DNS', 'Nmap', 'Cisco Packet Tracer', 'Network troubleshooting', 'RJ45 / basic physical networking'],
  },
  {
    category: 'Cybersecurity',
    icon: 'Shield',
    items: ['Web Security', 'Vulnerability Research', 'VDP Research', 'Nmap', 'Linux security', 'Security testing'],
  },
  {
    category: 'AI / Research',
    icon: 'Brain',
    items: ['TensorFlow', 'Keras', 'TensorFlow Lite', 'OpenCV', 'Qiskit', 'Offline AI experimentation'],
  },
];

export const experience = [
  {
    role: 'Frontend Developer',
    period: 'Feb 2025 – May 2025',
    duration: '~4 months',
    highlights: [
      'Worked on an E-commerce ERP project.',
      'Developed frontend functionality using React.',
      'Used JavaScript and CSS throughout the project.',
      'Integrated APIs to connect frontend with backend services.',
      'Gained practical experience in frontend development and application workflows.',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'REST APIs'],
  },
];

export const projects = [
  {
    name: 'Pneumonia Detection',
    description:
      'A deep-learning project that detects pneumonia from chest X-ray images by classifying them into Normal and Pneumonia categories using a Convolutional Neural Network (CNN).',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'NumPy', 'Pandas', 'OpenCV', 'Scikit-learn', 'Flask'],
    features: [
      'Chest X-ray image classification',
      'Pneumonia vs Normal detection',
      'Convolutional Neural Network',
      'Deep learning model training',
      'Image preprocessing',
      'Model evaluation',
      'Flask deployment',
    ],
    githubUrl: 'https://github.com/keyanskv/pneumonia_dectection',
    demoUrl: null,
    icon: 'ScanSearch',
    featured: true,
  },

  {
    name: 'Quantum Computing Algorithms',
    description:
      'A learning-focused quantum computing project exploring fundamental quantum concepts and implementing algorithms related to entanglement, superposition and quantum teleportation.',
    tech: ['Python', 'Quantum Computing'],
    features: [
      'Quantum computing fundamentals',
      'Quantum superposition',
      'Quantum entanglement',
      'Quantum teleportation',
      'Algorithm implementations',
      'Hands-on quantum computing experiments',
    ],
    githubUrl: 'https://github.com/keyanskv/quantum',
    demoUrl: null,
    icon: 'Atom',
    featured: true,
  },

  {
    name: 'Ansible Debian Playbook',
    description:
      'An Ansible automation project focused on creating reusable playbooks for automating and managing Debian-based Linux systems.',
    tech: ['Ansible', 'YAML', 'Linux', 'Debian'],
    features: [
      'Linux system automation',
      'Debian configuration',
      'Infrastructure automation',
      'Reusable Ansible playbooks',
      'Automated system administration',
    ],
    githubUrl: 'https://github.com/keyanskv/ansible_debain_playbook',
    demoUrl: null,
    icon: 'ServerCog',
    featured: false,
  },

  // {
  //   name: 'ProTask AI / TodoGoal',
  //   description:
  //     'A productivity and task-management application designed around offline-first functionality, task organization, productivity tracking and AI-assisted suggestions.',
  //   tech: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'TensorFlow Lite', 'fl_chart', 'Table Calendar'],
  //   features: [
  //     'Task management & habits',
  //     'Calendar integration',
  //     'Pomodoro timer',
  //     'XP, levels & streaks',
  //     'Productivity tracking',
  //     'Offline-first storage',
  //     'AI-powered suggestions',
  //     'Progress visualization',
  //   ],
  //   githubUrl: 'https://github.com/keyanskv/Todogoal',
  //   demoUrl: null,
  //   icon: 'CheckSquare',
  //   featured: true,
  // },
  // {
  //   name: 'QR Analytics Dashboard',
  //   description:
  //     'A full-stack QR analytics dashboard concept for generating and embedding QR links, and tracking scan and download activity.',
  //   tech: ['React', 'Flask', 'Python', 'SQLite', 'QR code technology'],
  //   features: [
  //     'QR management',
  //     'Link embedding',
  //     'Scan tracking',
  //     'Download tracking',
  //     'Analytics dashboard',
  //   ],
  //   githubUrl: 'https://github.com/keyanskv',
  //   demoUrl: null,
  //   icon: 'QrCode',
  //   featured: true,
  // },
  // {
  //   name: 'AntSoftware',
  //   description:
  //     'A collection of productivity and automation experiments focused on practical software tools.',
  //   tech: ['Python', 'Automation', 'Scripting'],
  //   features: [],
  //   githubUrl: 'https://github.com/keyanskv/AntSoftware',
  //   demoUrl: null,
  //   icon: 'Package',
  //   featured: false,
  // },
  // {
  //   name: 'Todogoal',
  //   description:
  //     'A task and productivity application focused on organizing goals, tasks and daily progress.',
  //   tech: ['Flutter', 'Dart', 'Hive', 'Riverpod'],
  //   features: [],
  //   githubUrl: 'https://github.com/keyanskv/Todogoal',
  //   demoUrl: null,
  //   icon: 'ListTodo',
  //   featured: false,
  // },
  // {
  //   name: 'Backend TodoApp',
  //   description: 'Backend service for a task management application.',
  //   tech: ['Python', 'Flask', 'SQLite', 'REST API'],
  //   features: [],
  //   githubUrl: 'https://github.com/keyanskv/backend-todo',
  //   demoUrl: null,
  //   icon: 'Database',
  //   featured: false,
  // },
  // {
  //   name: 'iptable_script',
  //   description:
  //     'Linux networking and firewall scripting experiments using Bash and iptables.',
  //   tech: ['Linux', 'Bash', 'iptables', 'Networking'],
  //   features: [],
  //   githubUrl: 'https://github.com/keyanskv/iptable_script',
  //   demoUrl: null,
  //   icon: 'Lock',
  //   featured: false,
  // },
  // {
  //   name: 'Linux AI Model',
  //   description:
  //     'Experiments exploring AI-assisted Linux administration, log analysis and command suggestions.',
  //   tech: ['Python', 'Machine Learning', 'Linux', 'AI'],
  //   features: [],
  //   githubUrl: 'https://github.com/keyanskv/Linux_ai_model',
  //   demoUrl: null,
  //   icon: 'Bot',
  //   featured: false,
  // },
];

export const security = {
  intro:
    'I explore cybersecurity through responsible vulnerability research, vulnerability disclosure programs and security learning platforms.',
  bugcrowd: {
    label: 'Bugcrowd Security Researcher',
    profileUrl: 'https://bugcrowd.com/h/Keyans',
  },
  recognitions: [
    {
      org: 'National Australia Bank',
      label: 'Bugcrowd Hall of Fame',
      url: 'https://bugcrowd.com/engagements/nationalaustraliabankog/hall_of_fames',
    },
    {
      org: 'Geotab',
      label: 'Bugcrowd Hall of Fame',
      url: 'https://bugcrowd.com/engagements/geotab-vdp/hall_of_fames',
    },
    {
      org: 'NCIIPC',
      label: 'Appreciation for responsible security research',
      url: null, // no public link available
    },
  ],
  tryhackme: {
    label: 'TryHackMe Badges',
    url: 'https://tryhackme.com/badges',
  },
};

export const openSource = {
  intro:
    'I believe open source is one of the best ways to learn real-world development practices, collaboration and code review.',
  contributions: [
    {
      project: 'Django Oscar',
      description:
        'Contributed to Django Oscar with a pull request that was merged into the main project.',
      pr: 'Pull Request #4619',
      url: 'https://github.com/django-oscar/django-oscar/pull/4619',
      status: 'Merged',
      statusColor: 'success',
    },
    {
      project: 'Metasploit Framework',
      description:
        'Open-source contribution to the Metasploit Framework — a widely-used security research project.',
      pr: 'Pull Request #21743',
      url: 'https://github.com/rapid7/metasploit-framework/pull/21743',
      status: 'Under Review',
      statusColor: 'pending',
    },
  ],
};

export const education = [
  {
    degree: 'B.Sc. Computer Science',
    specialization: 'Cloud Computing & Cyber Security',
    institution: 'Madurai Kamaraj University',
    period: '2022 – 2025',
    icon: 'GraduationCap',
  },
];

export const certifications = [
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    year: '2023',
    icon: 'Network',
    verifyUrl: null,
  },
  {
    name: 'Operating Systems Basics',
    issuer: 'IBM',
    year: '2023',
    icon: 'Monitor',
    verifyUrl: null,
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2023',
    icon: 'Shield',
    verifyUrl: null,
  },
  {
    name: 'Basics of Quantum Information',
    issuer: 'IBM',
    year: '2024',
    icon: 'Atom',
    verifyUrl: null,
  },
  {
    name: 'Journey to Cloud: Envisioning Your Solution',
    issuer: 'IBM SkillsBuild',
    year: '2024',
    icon: 'Cloud',
    verifyUrl: null,
  },
];

export const learning = [
  { topic: 'Linux System Administration', status: 'Practicing' },
  { topic: 'DevOps', status: 'Learning' },
  { topic: 'Docker', status: 'Practicing' },
  { topic: 'Ansible', status: 'Learning' },
  { topic: 'Networking', status: 'Practicing' },
  { topic: 'Cybersecurity', status: 'Exploring' },
  { topic: 'Cloud Technologies', status: 'Learning' },
  { topic: 'AI / ML', status: 'Exploring' },
  { topic: 'Quantum Algorithms', status: 'Exploring' },
  { topic: 'Open-Source Contribution', status: 'Building' },
  { topic: 'Automation', status: 'Building' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Security', href: '#security' },
  { label: 'Open Source', href: '#opensource' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
