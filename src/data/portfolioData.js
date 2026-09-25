export const personalInfo = {
  name: "Pradeeshwaran M",
  title: "Full-Stack Software Engineer",
  roleHeadline: "Seeking Full-Time Full-Stack Developer & SDE Roles",
  tagline: "Engineering scalable web platforms, high-throughput REST APIs, and production-grade full-stack systems for high-impact teams.",
  bio: "Integrated M.Sc. Information Technology graduate from Anna University with hands-on software development internship experience at CSTF, IIT Madras and Atsuya Technologies. Proficient in React.js, Node.js, Express, PostgreSQL, RESTful APIs, Linux systems, and applied AI. Passionate about writing clean, maintainable code in collaborative, agile engineering teams.",
  email: "sendmail2pradeesh@gmail.com",
  phone: "+91 8838488967",
  location: "Chennai, Tamil Nadu, India",
  workPreference: "Full-Time | Open to On-Site, Hybrid & Remote (Willing to Relocate)",
  noticePeriod: "Immediate Joiner",
  linkedin: "https://linkedin.com/in/pradeeshwaran-m1621/",
  github: "https://github.com/pradeeshwaran-m",
  availability: "Actively Interviewing for Full-Time Roles",
  targetRoles: [
    "Full-Stack Developer",
    "Software Development Engineer (SDE I)",
    "Backend Software Engineer",
    "Frontend Engineer"
  ],
  impactMetrics: [
    { label: "Institutional Users Supported", value: "100+", detail: "Centralized fleet management platform at IIT Madras" },
    { label: "Engineering Internships", value: "2+", detail: "CSTF, IIT Madras & Atsuya Technologies" },
    { label: "Hardware Cost Reduction", value: "70%", detail: "LoRa & ESP32 wireless prototype vs commercial GPS" },
    { label: "System Reliability & Uptime", value: "99.9%", detail: "Zero-conflict scheduling & RBAC authorization" }
  ]
};

export const technicalDomains = [
  {
    id: "fullstack",
    icon: "Layout",
    title: "Full-Stack Web Architecture",
    shortDesc: "End-to-end web applications built with modern React.js frontend, Node.js/Express REST APIs, and PostgreSQL relational databases.",
    features: [
      "Component-driven React.js SPAs with responsive UX and state management",
      "Decoupled RESTful APIs with Node.js, Express, and JWT authentication",
      "PostgreSQL relational schema modeling, indexing, and query optimization",
      "Strict Role-Based Access Control (RBAC) and automated validation workflows"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JavaScript (ES6+)", "Vite"],
    valueAdd: "Building scalable, maintainable web systems that handle complex business workflows and high user concurrency."
  },
  {
    id: "backend-api",
    icon: "Server",
    title: "Backend & RESTful API Engineering",
    shortDesc: "High-reliability backend services, institutional LDAP/JWT authentication, conflict prevention algorithms, and secure Linux server deployments.",
    features: [
      "Centralized RESTful API architectures with asynchronous request handling",
      "LDAP credential verification and enterprise JWT token lifecycles",
      "Real-time resource allocation and zero-conflict scheduling algorithms",
      "Automated transactional email triggers, endpoint validation, and error logging"
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "LDAP", "JWT", "REST APIs", "Postman"],
    valueAdd: "Ensuring rock-solid business logic, data integrity, and strict access controls across all services."
  },
  {
    id: "ai-data",
    icon: "Brain",
    title: "AI Integration & Data Pipelines",
    shortDesc: "Machine learning pipelines, Vision Transformers (ViT) with PyTorch, statistical evaluation, and modern LLM vector search architectures.",
    features: [
      "Vision Transformer (ViT) deep neural network training & evaluation in PyTorch",
      "Quantitative data processing, confusion matrix analysis & precision tracking",
      "Exploration of RAG vector search, LLM embeddings, and tokenization",
      "High-concurrency async Python data processing & automation scripts"
    ],
    techStack: ["Python", "PyTorch", "Hugging Face", "Scikit-Learn", "ViT", "Computer Vision"],
    valueAdd: "Integrating cutting-edge AI models directly into software products to unlock intelligent automation."
  },
  {
    id: "systems-optimization",
    icon: "Zap",
    title: "Linux Systems, Performance & Reliability",
    shortDesc: "Server environment optimization, shell automation, technical schema SEO, and systematic debugging on production Linux environments.",
    features: [
      "Linux/Unix CLI server administration, endpoint validation, and service monitoring",
      "Structured schema markup implementation to boost technical search discoverability",
      "Custom PHP and JavaScript integrations reducing administrative overhead",
      "Collaborative Git/GitHub workflows, code reviews, and Agile sprint execution"
    ],
    techStack: ["Linux CLI", "Git & GitHub", "Bash", "PHP", "Schema Markup", "Agile / Scrum"],
    valueAdd: "Driving operational efficiency, fast incident resolution, and smooth development lifecycles."
  }
];

export const portfolioProjects = [
  {
    id: "fleet-mgmt",
    title: "Institutional Smart Fleet Management & Auth Portal",
    category: "Full-Stack",
    organization: "CSTF, IIT Madras",
    date: "Jan 2026 – May 2026",
    summary: "Architected and engineered a centralized, production-grade web platform serving 100+ active institutional users for real-time driver allocation, institutional credential validation, and multi-level approval workflows.",
    highlights: [
      "Integrated institutional LDAP-based authentication for credential verification across departments.",
      "Programmed real-time availability algorithms, conflict prevention, and driver assignment modules.",
      "Built JWT authentication with Role-Based Access Control (RBAC) to enforce administrative security tiers.",
      "Executed endpoint validation, automated email notifications, and deployment on Linux server environments."
    ],
    tech: ["Node.js", "Express.js", "React.js", "PostgreSQL", "LDAP Auth", "JWT", "Linux", "Git"],
    metrics: "100+ Active Users | 0 Scheduling Conflicts | 100% Audit Trackable",
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
      "Calculated precision metrics, confidence scores, and accuracy tracking dashboards for clinical validation."
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
      "Designed real-time wireless location tracking logic cutting cost by 70% vs commercial GPS units.",
      "Built low-power firmware communication protocols between ESP32 microcontrollers and gateway node.",
      "Integrated telemetry dashboard to plot live coordinates, signal strength, and battery metrics."
    ],
    tech: ["Embedded Systems", "ESP32", "LoRa", "C/C++", "Wireless Tech", "Firmware"],
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
      "Custom PHP/JS plugins cutting repetitive manual administrative overhead significantly.",
      "Implemented structured schema markup for enhanced technical SEO and search visibility.",
      "Optimized web server configurations for high concurrency and lower latency."
    ],
    tech: ["PHP", "JavaScript", "Linux CLI", "Schema Markup", "SEO Optimization", "Web Security"],
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
    description: "Engineered a full-stack centralized fleet management platform with Node.js, Express, React, and PostgreSQL for 100+ active institutional users. Built RESTful APIs, JWT auth with RBAC, and automated email triggers on Linux servers.",
    achievements: [
      "Architected centralized web portal integrating LDAP-based authentication for seamless institutional login.",
      "Programmed real-time driver assignment algorithms, audit logs, and conflict prevention logic.",
      "Maintained 99.9% system reliability on Linux servers through systematic debugging and endpoint validation.",
      "Collaborated in an Agile workflow with Git/GitHub, conducting code reviews and sprint retrospectives."
    ],
    tech: ["Node.js", "Express.js", "React.js", "PostgreSQL", "LDAP Auth", "JWT", "Linux", "Git"]
  },
  {
    role: "Software Development Engineer Intern",
    company: "Atsuya Technologies Pvt. Ltd.",
    period: "July 2024 – Dec 2024",
    location: "Chennai, India",
    description: "Developed and deployed custom features, plugins, and PHP/JavaScript integrations on live production systems. Optimized Linux web setups and implemented structured schema markups.",
    achievements: [
      "Cut manual administrative overhead by deploying custom PHP/JS automated web integrations.",
      "Enhanced system performance and search visibility by implementing schema markups.",
      "Administered Linux-based web environments, troubleshooting server configurations and caching."
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
    details: "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Software Design, Database Systems, Web Technologies, Artificial Intelligence, and Computer Networks."
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
  languages: ["JavaScript (ES6+)", "Python", "TypeScript", "SQL", "C/C++", "PHP"],
  frontend: ["React.js", "HTML5", "CSS3 / Modern CSS", "Responsive Web Design", "Component Architecture", "Vite"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "LDAP Integration"],
  databases: ["PostgreSQL", "Relational Database Design", "SQL Query Optimization", "Data Integrity"],
  aiData: ["PyTorch", "Vision Transformers (ViT)", "Hugging Face", "Scikit-Learn", "Vector Search / RAG Concepts", "Data Processing"],
  devopsTools: ["Linux / Unix CLI", "Git & GitHub", "Shell / Bash Scripting", "Postman", "Agile / Scrum", "VS Code"],
  coreFundamentals: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "System Design Fundamentals", "API Security", "Debugging & Profiling"]
};

export const leadershipRoles = [
  {
    title: "Vice Chairperson",
    organization: "Dept. of Mathematics, Anna University",
    period: "2025 – 2026",
    desc: "Spearheaded department technical initiatives, coordinated guest lectures, and led student event committees fostering cross-functional teamwork."
  },
  {
    title: "General Secretary",
    organization: "NSS Unit-6",
    period: "2023 – 2024",
    desc: "Organized community welfare drives, blood donation camps, and leadership workshops managing volunteer cohorts."
  },
  {
    title: "Rotaract Volunteer",
    organization: "Rotaract Club",
    period: "Active",
    desc: "Participated in youth leadership projects, tech mentoring sessions, and community service operations."
  }
];

export const hiringHighlights = [
  {
    title: "Full-Stack Breadth",
    desc: "Fluent across React.js frontends, Node.js/Express REST APIs, PostgreSQL schemas, and Linux servers."
  },
  {
    title: "Premier Lab Experience",
    desc: "Delivered production institutional portals at CSTF, IIT Madras and commercial web systems at Atsuya Tech."
  },
  {
    title: "Strong CS Foundation",
    desc: "Integrated M.Sc. in IT from Anna University with sound understanding of DSA, OOP, and system design."
  },
  {
    title: "Immediate Availability",
    desc: "Ready to join immediately with 0 days notice period. Open to on-site, hybrid, or remote positions."
  }
];
