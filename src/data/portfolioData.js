import {
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode, FaLaptopCode, FaServer
} from 'react-icons/fa';
import {
  SiCplusplus, SiExpress, SiMysql, SiFirebase, SiNetlify,
  SiVercel
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiChartBar, HiLightBulb, HiColorSwatch, HiPuzzle } from 'react-icons/hi';
import { BiBrain } from 'react-icons/bi';
import { MdOutlineSensors } from 'react-icons/md';

// ============================================
// 1. NAVIGATION LINKS
// ============================================
export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'whatido', label: 'What I Do', href: '#whatido' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'workspace', label: 'Workspace', href: '#workspace' },
  { id: 'journey', label: 'Journey', href: '#journey' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'github', label: 'GitHub', href: '#github' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// ============================================
// 2. PERSONAL INFORMATION
// ============================================
export const personalInfo = {
  firstName: "Shubham",
  lastName: "More",
  fullName: "Shubham More",
  roles: [
    "B.Tech IT Student",
    "Software Developer",
    "Web Developer",
    "AI Enthusiast",
    "Problem Solver"
  ],
  shortBio: "I build modern web applications, intelligent systems and real-world technology solutions.",
  aboutIntro: "Turning Ideas Into Technology",
  aboutText: "I am a B.Tech Information Technology student at MGM University with a deep passion for building impactful real-world technology solutions. My journey spans web development, software engineering, AI, and data-driven systems. I thrive on solving complex problems and maintaining a strong learning mindset, constantly exploring new technologies to build better, faster, and more intelligent applications.",
  email: "shubhamvmore11@gmail.com",
  location: "India",
  github: "https://github.com/shubhammore5145",
  linkedin: "https://www.linkedin.com/in/shubham-more-50a2a7428",
  resumePath: "#",
  profileImage: "/images/profile.jpg",
  githubUsername: "shubhammore5145",
  education: {
    degree: "B.Tech Information Technology",
    university: "MGM University"
  },
  interests: ["Web Development", "Software Development", "AI", "Data", "IoT"]
};

// ============================================
// 2. STATISTICS & QUICK STATS
// ============================================
export const statistics = [
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Hackathons", value: "3+" },
  { label: "Certifications", value: "5+" }
];

// ============================================
// 3. SKILLS / TECH STACK
// ============================================
export const techCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820", description: "OOP & Problem Solving" },
      { name: "Python", icon: FaPython, color: "#3776ab", description: "Data Analysis & Automation" },
      { name: "C++", icon: SiCplusplus, color: "#00599c", description: "Competitive Programming" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e", description: "Full-Stack Development" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#e34f26", description: "Semantic Markup" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572b6", description: "Modern Styling & Animations" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e", description: "Interactive UIs" },
      { name: "React", icon: FaReact, color: "#61dafb", description: "Component-based SPAs" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "PHP", icon: FaCode, color: "#777bb4", description: "Server-side Scripting" },
      { name: "XAMPP", icon: FaServer, color: "#fb7a24", description: "Local Web Server" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933", description: "Server-side Runtime" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff", description: "Backend Framework" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28", description: "BaaS" }
    ]
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479a1", description: "Relational Database" },
      { name: "Firestore", icon: SiFirebase, color: "#ffca28", description: "NoSQL Database" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032", description: "Version Control" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff", description: "Code Hosting & CI/CD" },
      { name: "VS Code", icon: VscVscode, color: "#007acc", description: "Code Editor" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7", description: "Frontend Hosting" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", description: "Serverless Deployment" }
    ]
  }
];

// ============================================
// 4. WHAT I DO
// ============================================
export const whatIDo = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    icon: FaLaptopCode
  },
  {
    title: "Software Development",
    description: "Creating practical applications using programming and OOP.",
    icon: FaCode
  },
  {
    title: "AI & Data",
    description: "Exploring AI, machine learning and data-driven solutions.",
    icon: BiBrain
  },
  {
    title: "IoT & Real-Time Systems",
    description: "Building connected systems using ESP32 and real-time technologies.",
    icon: MdOutlineSensors
  }
];

// ============================================
// 5. PROJECTS
// ============================================
export const projectFilters = ["ALL", "WEB", "AI", "JAVA", "PYTHON", "IOT"];

export const featuredProject = {
  id: "ambulance-system",
  title: "Smart Ambulance Traffic Management System",
  subtitle: "Real-time IoT-based traffic control",
  category: "IOT",
  image: "https://images.unsplash.com/photo-1587572236558-a3751c6d42c0?q=80&w=800", 
  description: "A real-time IoT-based system designed to reduce ambulance delays at traffic signals by detecting an approaching ambulance and coordinating traffic signals to create a clear route.",
  problem: "Ambulances can lose valuable time at traffic signals, risking patient lives.",
  idea: "Detect and prioritize approaching ambulances automatically without manual intervention.",
  technology: "ESP32 + Web + Firebase + Maps.",
  solution: "Create a real-time traffic coordination system using cloud-synced microcontrollers.",
  features: [
    "Real-time ambulance tracking via GPS",
    "Automated traffic light preemption using ESP32",
    "Cloud database synchronization with Firebase",
    "Live dashboard for traffic control centers"
  ],
  technologies: ["ESP32", "IoT", "Firebase", "JavaScript", "Maps", "Real-time Systems"],
  github: "#",
  liveDemo: "#",
  isFeatured: true
};

export const projectsData = [
  {
    id: "agro-nova",
    title: "Agro Nova",
    subtitle: "Smart Agriculture Platform",
    category: "WEB",
    image: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=800",
    description: "A modern web platform designed to assist farmers with crop management, weather forecasting, and market prices.",
    features: ["Weather API integration", "Crop recommendation system", "Market price tracking"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Weather API"],
    github: "#",
    liveDemo: "#"
  },
  {
    id: "ai-career-trackr",
    title: "AI Career Trackr",
    subtitle: "AI-powered career guidance",
    category: "AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
    description: "An intelligent platform that analyzes skills and suggests tailored career paths and learning resources using AI.",
    features: ["Skill gap analysis", "AI-driven roadmap generation", "Resume parsing"],
    technologies: ["React", "Python", "OpenAI API", "Firebase"],
    github: "#",
    liveDemo: "https://aicareertrackr.netlify.app/"
  },
  {
    id: "mess-management",
    title: "Mess Management System",
    subtitle: "Hostel mess operations tracker",
    category: "JAVA",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
    description: "A desktop application built in Java to manage hostel mess attendance, billing, and inventory.",
    features: ["Student attendance tracking", "Automated monthly billing", "Inventory low-stock alerts"],
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    github: "#",
    liveDemo: null
  },
  {
    id: "personal-finance",
    title: "Personal Finance Manager",
    subtitle: "Expense tracking and budgeting",
    category: "PYTHON",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=800",
    description: "A robust Python tool to track daily expenses, categorize spending, and visualize financial health.",
    features: ["CSV import/export", "Interactive data visualization", "Budget alerts"],
    technologies: ["Python", "Pandas", "Matplotlib", "Tkinter"],
    github: "#",
    liveDemo: null
  },
  {
    id: "student-management",
    title: "Student Management System",
    subtitle: "Academic record keeping",
    category: "JAVA",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
    description: "An administrative tool to securely manage student records, grades, and course enrollments.",
    features: ["Secure login system", "Grade calculation", "Report generation"],
    technologies: ["Java", "JavaFX", "MySQL"],
    github: "#",
    liveDemo: null
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    subtitle: "Online shopping platform",
    category: "WEB",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
    description: "A full-featured e-commerce storefront with product catalogs, shopping cart, and mock checkout.",
    features: ["Responsive product grid", "State-managed shopping cart", "User authentication"],
    technologies: ["React", "Firebase", "CSS Modules"],
    github: "#",
    liveDemo: "#"
  },
  {
    id: "cafe-website",
    title: "Café Website",
    subtitle: "Local café digital presence",
    category: "WEB",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
    description: "A visually appealing website for a local café featuring menus, online reservations, secure online payments, and location details.",
    features: ["Interactive menu", "Booking form", "Razorpay Payment Gateway", "Responsive design"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Razorpay"],
    github: "#",
    liveDemo: "https://nisardcafe.netlify.app/"
  }
];

// ============================================
// 6. MY JOURNEY (Timeline)
// ============================================
export const journeyData = [
  {
    id: "edu",
    category: "Education",
    title: "B.Tech Information Technology",
    organization: "MGM University",
    date: "Current",
    description: "Pursuing bachelor's degree with a focus on core computer science, software engineering, and modern web technologies."
  },
  {
    id: "proj",
    category: "Projects",
    title: "Started building real-world applications",
    organization: "Independent",
    date: "2023 - Present",
    description: "Transitioned from learning basic syntax to architecting and developing full-stack web applications and AI-integrated systems."
  },
  {
    id: "hack",
    category: "Hackathons",
    title: "Participated in technical competitions",
    organization: "Various Events",
    date: "2023 - Present",
    description: "Collaborated with teams under pressure to ideate, prototype, and present innovative solutions like the Smart Ambulance System."
  },
  {
    id: "dev",
    category: "Development",
    title: "Web + AI + IoT projects",
    organization: "Skill Expansion",
    date: "Ongoing",
    description: "Broadened technical horizons by integrating hardware (ESP32) with cloud databases (Firebase) and applying machine learning to practical tools."
  }
];

// ============================================
// 7. CERTIFICATES
// ============================================
export const certificatesData = [
  {
    id: 1,
    title: "Certificate of Completion",
    issuer: "Tech Academy",
    date: "2024",
    image: "/images/certificates/cert1.jpeg",
    description: "Professional certification."
  },
  {
    id: 2,
    title: "Certificate of Excellence",
    issuer: "Institution",
    date: "2024",
    image: "/images/certificates/cert2.jpeg",
    description: "Recognition for outstanding performance."
  },
  {
    id: 3,
    title: "Achievement Certificate",
    issuer: "Organization",
    date: "2024",
    image: "/images/certificates/cert3.jpeg",
    description: "Successfully completed the program."
  }
];

// ============================================
// 8. ACHIEVEMENTS
// ============================================
export const achievementsData = [
  {
    id: 1,
    category: "Hackathons",
    title: "Smart India Hackathon",
    description: "Finalist in national level hardware/software hackathon."
  },
  {
    id: 2,
    category: "Projects",
    title: "10+ Real-World Apps",
    description: "Successfully built and deployed multiple web and software tools."
  },
  {
    id: 3,
    category: "Certifications",
    title: "5+ Professional Certs",
    description: "Continuously upskilling through certified industry platforms."
  },
  {
    id: 4,
    category: "Technical Activities",
    title: "Open Source Contributor",
    description: "Active participation in coding communities and collaborative projects."
  }
];

// ============================================
// 9. LIVE WORK / WORKSPACE
// ============================================
export const liveWorkData = [
  {
    id: 1,
    title: "ESP32 Traffic Automation",
    date: "Current Project",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    description: "Testing the real-time traffic coordination system on hardware."
  },
  {
    id: 2,
    title: "Hackathon Brainstorming",
    date: "Recently",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    description: "Late night coding and whiteboarding session with the team."
  },
  {
    id: 3,
    title: "AI Model Training",
    date: "Last Week",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    description: "Training custom classification models for the Career Trackr app."
  }
];
