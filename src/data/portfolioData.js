export const personalInfo = {
  name: "Pradeeshwaran M",
  title: "Full-Stack Engineer & AI Specialist",
  tagline: "Building scalable web platforms, robust REST APIs, and intelligent AI models for ambitious clients.",
  bio: "Integrated M.Sc. Information Technology graduate from Anna University with software development internship experience at CSTF, IIT Madras & Atsuya Technologies. Passionate about delivering high-performance full-stack web applications, RESTful backends, and AI automation.",
  email: "sendmail2pradeesh@gmail.com",
  phone: "+91 8838488967",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/pradeeshwaran-m1621/",
  github: "https://github.com/pradeeshwaran-m",
  availability: "Available for Freelance & Contract Projects",
  freelanceStats: [
    { label: "Institutional Users Supported", value: "100+" },
    { label: "Hardware Cost Reduction", value: "70%" },
    { label: "Engineering Internships", value: "2+" },
    { label: "Code Quality & Delivery", value: "100%" }
  ]
};

export const freelanceServices = [
  {
    id: "fullstack",
    icon: "Layout",
    title: "Full-Stack Web Application Development",
    shortDesc: "End-to-end web applications built with modern React.js frontend, Node.js/Express REST APIs, and PostgreSQL databases.",
    features: [
      "Custom responsive single-page & multi-page web apps",
      "Role-Based Access Control (RBAC) & JWT Authentication",
      "Robust PostgreSQL database architecture & API optimization",
      "Agile iterative development & production deployment"
    ],
    idealFor: "Startups, Businesses, Institutional Portals & SaaS Ideas"
  },
  {
    id: "ai-data",
    icon: "Brain",
    title: "AI Solutions & Python Data Pipelines",
    shortDesc: "Tailored machine learning models, Vision Transformers (ViT), LLM vector search (RAG), and data automation scripts.",
    features: [
      "Custom Python quantitative data processing & visualization",
      "PyTorch & Hugging Face model fine-tuning & evaluation",
      "LLM tokenization, embeddings & vector store setups",
      "High-concurrency async Python backend scripting"
    ],
    idealFor: "AI Startups, Data-heavy Businesses & Automation Needs"
  },
  {
    id: "optimization",
    icon: "Zap",
    title: "Linux Setup, Performance & SEO Optimization",
    shortDesc: "Eliminate server bottlenecks, implement structured schema markups, and streamline Linux server deployments.",
    features: [
      "Linux server Nginx/Apache configuration & endpoint validation",
      "Structured data markups & technical SEO enhancements",
      "Custom PHP/JavaScript plugin integrations & feature additions",
      "API debugging, conflict prevention & security hardening"
    ],
    idealFor: "Existing Websites, Web Systems & Performance Upgrades"
  }
];

export const portfolioProjects = [
  {
    id: "fleet-mgmt",
    title: "Institutional Smart Fleet Management & Auth Portal",
    category: "Full-Stack",
    organization: "CSTF, IIT Madras",
    date: "Jan 2026 – May 2026",
    summary: "Architected and engineered a robust centralized web platform serving 100+ active institutional users for real-time driver allocation, institutional credential validation, and multi-level approval workflows.",
    highlights: [
      "Integrated institutional LDAP-based authentication for credential verification.",
      "Programmed real-time availability algorithms, conflict prevention, and driver assignment modules.",
      "Built JWT authentication with Role-Based Access Control (RBAC).",
      "Executed endpoint validation and automated email triggers on Linux servers."
    ],
    tech: ["Node.js", "Express.js", "React.js", "PostgreSQL", "LDAP Auth", "JWT", "Linux"],
    metrics: "100+ Active Users | 0 Conflicts | 100% Audit Trackable",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "vit-blood-classifier",
    title: "Microscopic Blood Cell Classification via Vision Transformer",
    category: "AI & Data",
    organization: "Academic Research / PyTorch",
    date: "2025",
    summary: "High-precision AI computer vision pipeline training Vision Transformer (ViT) deep neural networks to accurately classify microscopic white blood cell dataset types.",
    highlights: [
      "Quantitative data processing & statistical evaluation on microscopic blood cell datasets.",
      "Trained Vision Transformer (ViT) models using PyTorch & Hugging Face Transformers.",
      "Calculated precision metrics, confidence scores, and accuracy tracking dashboards."
    ],
    tech: ["Python", "PyTorch", "Hugging Face", "Scikit-Learn", "Computer Vision", "ViT"],
    metrics: "High Precision | Deep ViT Architecture | Medical Imaging",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "lora-baggage-tracker",
    title: "Wireless Low-Cost Real-Time Baggage Tracker Prototype",
    category: "Embedded & IoT",
    organization: "Hardware Research Project",
    date: "2024",
    summary: "Engineered a low-cost, real-time wireless tracking hardware-software prototype utilizing ESP32 microcontrollers and LoRa long-range radio protocol.",
    highlights: [
      "Designed real-time wireless location tracking logic cutting cost by 70% vs commercial GPS.",
      "Built low-power firmware communication protocols between ESP32 microcontrollers and gateway.",
      "Integrated telemetry dashboard to plot live coordinates and battery telemetry."
    ],
    tech: ["Embedded Systems", "ESP32", "LoRa", "C/C++", "Wireless Tech"],
    metrics: "70% Hardware Cost Reduction | Long Range LoRa Telemetry",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "atsuya-web-integrations",
    title: "Enterprise Custom Web Plugins & Linux Setup Optimization",
    category: "Full-Stack",
    organization: "Atsuya Technologies Pvt. Ltd.",
    date: "July 2024 – Dec 2024",
    summary: "Developed custom PHP and JavaScript web plugins, structured schema markups, and Linux web setup optimizations to increase performance and reduce admin overhead.",
    highlights: [
      "Custom PHP/JS plugins cutting manual administrative overhead.",
      "Implemented structured schema markup for search visibility.",
      "Optimized web server configurations for high concurrency."
    ],
    tech: ["PHP", "JavaScript", "Linux CLI", "Schema Markup", "SEO Optimization"],
    metrics: "Substantial Manual Overhead Savings | Optimized Technical SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
  }
];

export const workExperience = [
  {
    role: "Software Development Intern",
    company: "CSTF, IIT Madras",
    period: "Jan 2026 – May 2026",
    location: "Chennai, India",
    description: "Engineered a full-stack fleet management platform with Node.js, Express, React, and PostgreSQL for 100+ active institutional users. Built RESTful APIs, JWT auth with RBAC, and automated email triggers.",
    achievements: [
      "Architected centralized web portal integrating LDAP-based authentication.",
      "Programmed real-time driver assignment algorithms & conflict prevention.",
      "Maintained high system reliability on Linux servers through systematic debugging."
    ],
    tech: ["Node.js", "Express.js", "React.js", "PostgreSQL", "LDAP", "JWT", "Linux", "Git"]
  },
  {
    role: "Software Development Engineer Intern",
    company: "Atsuya Technologies Pvt. Ltd.",
    period: "July 2024 – Dec 2024",
    location: "Chennai, India",
    description: "Developed and deployed custom features, plugins, and PHP/JavaScript integrations on live web systems. Optimized Linux web setups and implemented structured schema markups.",
    achievements: [
      "Cut manual admin overhead with custom PHP/JS web integrations.",
      "Increased technical performance and search visibility via schema markups.",
      "Collaborated in Linux-based web setups and deployment environments."
    ],
    tech: ["PHP", "JavaScript", "HTML5/CSS3", "Linux CLI", "Schema Markups", "Web Security"]
  }
];

export const education = [
  {
    degree: "Master of Science (Integrated) in Information Technology",
    institution: "Anna University, Chennai",
    period: "2021 – 2026",
    score: "CGPA: 7.00 / 10.0",
    details: "Focus on Full-Stack Engineering, Data Structures, AI/ML, and Software Architecture."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sri Jayendra Matric. HSS, Trichy",
    period: "2020 – 2021",
    score: "Score: 92%",
    details: "Mathematics, Physics, Chemistry, Computer Science."
  }
];

export const technicalSkills = {
  languages: ["Python", "JavaScript (ES6+)", "TypeScript", "C/C++", "PHP", "SQL"],
  fullStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "RESTful APIs", "HTML5", "CSS3 / Modern CSS", "JWT Auth", "LDAP"],
  aiData: ["PyTorch", "Vision Transformers (ViT)", "Hugging Face", "Scikit-Learn", "RAG Vector Search", "LLM Tokenization", "Data Processing"],
  tools: ["Git & GitHub", "Linux / Unix CLI", "Postman", "Bash Scripting", "Agile Methodology", "VS Code"]
};

export const leadershipRoles = [
  {
    title: "Vice Chairperson",
    organization: "Dept. of Mathematics, Anna University",
    period: "2025 – 2026",
    desc: "Spearheaded department initiatives, organized tech workshops, and led student event committees."
  },
  {
    title: "General Secretary",
    organization: "NSS Unit-6",
    period: "2023 – 2024",
    desc: "Organized community welfare programs, blood donation camps, and social awareness drives."
  },
  {
    title: "Rotaract Volunteer",
    organization: "Rotaract Club",
    period: "Active",
    desc: "Participated in youth leadership projects and community service operations."
  }
];

export const resumeDetails = {
  summary: "Integrated M.Sc. IT graduate from Anna University with hands-on software development internship experience at CSTF IIT Madras and Atsuya Technologies. Proficient in Python, Node.js, React.js, RESTful APIs, and AI Vision Transformers.",
  languagesSpoken: ["English (Proficient)", "Tamil (Native)", "Malayalam (Working)", "Hindi (Intermediate)"]
};
