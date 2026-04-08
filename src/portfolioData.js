import profileImg from './assets/profile.jpg';

// ============================================================
//  portfolioData.js
//  Single source of truth for all portfolio content.
// ============================================================

export const identity = {
  name: "Henna Marie Barcebal",
  initials: "HB",
  title: "IT Student | Project Manager & Software Developer",
  tagline: "Code with purpose. Lead with vision.",
  bio:
    "I build user-centric technology and lead teams that turn ideas into working systems. " +
    "From full-stack web apps to AI-powered mobile tools, I bridge the gap between " +
    "thoughtful design and clean, purposeful code.",
  location: "Davao City, Philippines",
  email: "barcebalhenna@gmail.com",
  emailUniversity: "hbarcebal_230000001414@uic.edu.ph",
  github: "https://github.com/barcebalhenna",
  resumeUrl: "/assets/Barcebal_resume.pdf",
  photo: profileImg,
};

export const about = {
  background:
    "I have always been someone who notices the smallest details that others often miss. " +
    "This natural inclination has shaped my keen eye for systems, organization, and " +
    "problem-solving. As an Information Technology student, I quickly realized that my " +
    "core strengths — critical thinking, effective communication, and a drive for " +
    "follow-through — are exactly what the tech industry needs.",

  mission:
    "To develop user-centric, culturally grounded, and highly efficient technological " +
    "solutions that address real-world challenges and create a lasting positive impact " +
    "for communities.",

  vision:
    "To empower individuals and organizations to achieve their goals and a brighter " +
    "future through seamless, accessible, and innovative technology.",

  goalsMotivation:
    "My ultimate drive comes from a desire to provide for my family and achieve personal " +
    "freedom and peace. Long-term, I aspire to become financially stable, establish a " +
    "successful career managing high-impact IT projects, eventually achieve early retirement, " +
    "and travel the world.",

  education: [
    {
      degree: "Bachelor of Science in Information Technology (3rd Year)",
      school: "University of the Immaculate Conception",
      year: "2023 – Present",
    },
    {
      degree: "Senior High School — STEM Strand",
      school: "Cotabato City National High School",
      year: "2021 – 2023",
    },
  ],

  achievements: [
    {
      title: "DOST-SEI Scholar",
      description:
        "Recipient of the Department of Science and Technology – Science & Technology " +
        "Education scholarship, awarded for academic excellence in STEM (2023 – Present).",
    },
    {
      title: "University Academic Scholar — First Honor",
      description:
        "Recognized as a First Honor academic scholar at the University of the " +
        "Immaculate Conception for the academic year 2023 – 2024.",
    },
    {
      title: "University Academic Scholar — Second Honor",
      description:
        "Continued academic excellence recognized with Second Honor standing " +
        "for the 2024 – Present period.",
    },
    {
      title: "NSPC Qualifier — Science & Technology Writing",
      description:
        "Qualified for the National Schools Press Conference in the Science & " +
        "Technology Writing category (English), 2023.",
    },
  ],

  stats: [
    { value: "4", label: "Real Projects Shipped" },
    { value: "3rd", label: "Year IT Student" },
    { value: "2x", label: "University Academic Scholar" },
    { value: "DOST", label: "SEI Scholar" },
  ],
};

export const skills = {
  technical: [
    "Java", "Python", "Dart", "JavaScript", "SQL", "HTML & CSS",
    "React.js", "Next.js", "Flutter", "Tailwind CSS", "PHP",
    "MySQL", "SQLite", "Firebase", "Supabase", "MongoDB",
    "Machine Learning (TensorFlow)", "MobileNetV2",
  ],

  soft: [
    "Project Organization & Team Collaboration",
    "Adaptability & Resilience",
    "Creative Problem-Solving",
    "Empathy-Driven Design",
    "Technical Documentation & Writing",
    "Critical Thinking",
    "Effective Communication",
    "Attention to Detail",
  ],

  services: [
    {
      name: "Full-Stack Web Development",
      description:
        "Building end-to-end web applications using React.js, Next.js, Tailwind CSS, " +
        "and backend services — from UI to database.",
      icon: "Globe",
    },
    {
      name: "Mobile Application Development",
      description:
        "Developing cross-platform mobile apps with Flutter and Firebase, including " +
        "ML-powered features using TensorFlow Lite.",
      icon: "Smartphone",
    },
    {
      name: "IT Project Management & Team Leadership",
      description:
        "Leading development teams from planning to delivery — defining scope, " +
        "managing timelines, and keeping stakeholders aligned.",
      icon: "LayoutDashboard",
    },
    {
      name: "UI/UX Design & System Analysis",
      description:
        "Designing intuitive interfaces in Figma and translating user needs into " +
        "clean, functional system architectures.",
      icon: "Figma",
    },
    {
      name: "Database Design & Management",
      description:
        "Structuring and managing relational and NoSQL databases including MySQL, " +
        "Supabase, Firebase, and MongoDB.",
      icon: "Database",
    },
    {
      name: "Technical Documentation",
      description:
        "Writing clear, well-structured technical documents, system manuals, and " +
        "project reports that non-technical stakeholders can actually understand.",
      icon: "FileText",
    },
  ],

  softwareTools: {
    development: ["VS Code", "Android Studio", "Git / GitHub"],
    design: ["Figma", "Canva", "Photopea", "CapCut", "Filmora"],
    productivity: ["ClickUp", "Notion", "MS Office Suite", "Google Workspace"],
  },

  proficiency: [
    { tool: "React.js / Next.js", level: 80 },
    { tool: "Flutter / Dart", level: 78 },
    { tool: "Figma / UI Design", level: 78 },
    { tool: "Firebase / Supabase", level: 83 },
    { tool: "Git / GitHub", level: 85 },
  ],
};

export const experience = [
  {
    role: "IT Student — Full-Stack Developer & Project Manager",
    company: "University of the Immaculate Conception",
    duration: "2023 – Present",
    type: "Academic / Student-Led",
    responsibilities: [
      "Leading and contributing to multiple full-stack and mobile development projects across web and mobile platforms.",
      "Managing project scope, timelines, and cross-functional student teams using ClickUp and Notion.",
      "Applying agile-inspired workflows to deliver working systems within academic deadlines.",
      "Currently seeking internship opportunities to apply full-stack development and project management skills in an industry setting.",
    ],
  },
];

export const projects = [
  {
    title: "Lamdag LMS",
    role: "Project Manager & Programmer",
    type: "Academic Project",
    year: "2026 – Present",
    description:
      "A learning management system featuring AI-driven quiz generation to streamline " +
      "assessment creation for educators — reducing manual effort and improving the " +
      "consistency and quality of student evaluations.",
    tools: ["Next.js", "Supabase", "AI Integration"],
    color: "purple",
    github: "https://github.com/barcebalhenna",
    image: "/assets/projects/lamdag-lms.png",
  },
  {
    title: "IDRenew: Smart E-Waste App",
    role: "Programmer",
    type: "Academic Project",
    year: "2025",
    description:
      "A mobile app that reduces electronic waste by using ML-based camera scanning " +
      "to classify damaged device components as reusable or requiring proper disposal — " +
      "combining computer vision with a practical environmental advocacy use case.",
    tools: ["Flutter", "Firebase", "TensorFlow Lite", "MobileNetV2"],
    color: "green",
    github: "https://github.com/barcebalhenna",
    image: "/assets/projects/idrenew-cover.png",
  },
  {
    title: "Palitab",
    role: "Project Manager",
    type: "Academic Project",
    year: "2025",
    description:
      "A gamified mobile learning app that strengthens reading comprehension for " +
      "early-grade learners using culturally grounded Filipino folk parables — making " +
      "literacy development both engaging and rooted in local heritage.",
    tools: ["Flutter", "Firebase"],
    color: "blue",
    github: "https://github.com/barcebalhenna",
    image: "/assets/projects/palitab-cover.png",
  },
  {
    title: "UIC Health Inventory Management System",
    role: "Project Manager",
    type: "Academic Project",
    year: "2025",
    description:
      "An automated clinic inventory system featuring expiry tracking and a data " +
      "analytics dashboard, deployed across five campus branches of UIC — optimizing " +
      "medicine distribution and reducing manual record-keeping errors.",
    tools: ["React.js", "Tailwind CSS", "PHP Laravel", "MSSQL"],
    color: "violet",
    github: "https://github.com/barcebalhenna",
    image: "/assets/projects/uic-health-inventory.png",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  heading: "Let's Connect",
  subheading:
    "Whether you're looking for a dedicated developer, a highly organized project " +
    "manager, or simply want to chat about tech — I'd love to hear from you.",
};
