import {
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode, FaLaptopCode, FaServer, FaGraduationCap
} from 'react-icons/fa';
import {
  SiCplusplus, SiExpress, SiMysql, SiFirebase, SiNetlify,
  SiVercel, SiMongodb, SiPostman, SiPhp, SiArduino
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
// 2. PERSONAL INFORMATION (From Official Resume)
// ============================================
export const personalInfo = {
  firstName: "Shubham",
  lastName: "More",
  fullName: "Shubham More",
  headline: "Full-Stack Developer | B.Tech Information Technology Student",
  roles: [
    "Full-Stack Developer",
    "B.Tech IT Student @ MGM University",
    "Smart India Hackathon Finalist",
    "IoT & Real-Time Systems Builder",
    "AI & LLM Integration Developer"
  ],
  phone: "+91 9226345875",
  email: "shubhamvmore11@gmail.com",
  location: "Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431003, India",
  shortLocation: "Chhatrapati Sambhajinagar, India",
  shortBio: "Motivated B.Tech Information Technology student at MGM University with hands-on experience building full-stack web applications, IoT systems, and AI-powered platforms.",
  aboutIntro: "Engineering Scalable Web, IoT & Intelligent Systems",
  aboutText: "Motivated B.Tech Information Technology student at MGM University with hands-on experience building full-stack web applications, IoT systems, and AI-powered platforms. Smart India Hackathon finalist with 10+ deployed projects across healthcare, agriculture, finance, and hospitality. Skilled in Java, Python, JavaScript, web development, databases, APIs, IoT, and AI/LLM integration.",
  github: "https://github.com/shubhammore5145",
  linkedin: "https://www.linkedin.com/in/shubham-more-50a2a7428",
  resumePath: "/Shubham_More_Resume.pdf",
  profileImage: "/images/profile.jpg",
  githubUsername: "shubhammore5145",
  education: {
    degree: "B.Tech — Information Technology",
    university: "MGM University, Chhatrapati Sambhajinagar (Aurangabad)",
    duration: "Jun 2024 – 2028",
    coursework: [
      "Data Structures & Algorithms",
      "OOP",
      "Database Management Systems",
      "Computer Networks",
      "IoT Systems",
      "Software Engineering"
    ]
  },
  interests: [
    "Full-Stack Web Development",
    "IoT & Real-Time Systems",
    "AI & LLM Integration",
    "Databases & Cloud APIs",
    "Data Structures & Algorithms"
  ]
};

// ============================================
// 3. EDUCATION DETAILS (Exact Resume Data)
// ============================================
export const educationData = [
  {
    id: "btech",
    degree: "B.Tech — Information Technology",
    institution: "MGM University, Chhatrapati Sambhajinagar (Aurangabad)",
    duration: "Jun 2024 – 2028",
    score: "Pursuing",
    coursework: "Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks, IoT Systems, Software Engineering"
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
    duration: "Mar 2024",
    score: "82.17%",
    coursework: "Physics, Chemistry, Mathematics, Computer Science fundamentals"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "A. K. Waghmare High School, Chhatrapati Sambhajinagar (Aurangabad)",
    duration: "Mar 2022",
    score: "82.80%",
    coursework: "General Sciences, Mathematics & Foundational Academics"
  }
];

// ============================================
// 4. STATISTICS & QUICK STATS
// ============================================
export const statistics = [
  { label: "Deployed Projects", value: "10+" },
  { label: "Hackathon Finalist", value: "SIH '24" },
  { label: "Tech Stack", value: "15+" },
  { label: "Certifications", value: "5+" }
];

// ============================================
// 5. TECHNICAL SKILLS (Categorized per Resume)
// ============================================
export const techCategories = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      { name: "Java", icon: FaJava, color: "#f89820", description: "OOP, JDBC & Enterprise Systems" },
      { name: "Python", icon: FaPython, color: "#3776ab", description: "Automation & Data Analytics" },
      { name: "C++", icon: SiCplusplus, color: "#00599c", description: "DSA & Low-Level Logic" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e", description: "ES6+, Async & Full-Stack Apps" },
      { name: "PHP", icon: SiPhp, color: "#777bb4", description: "Backend & Web Scripting" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26", description: "Semantic & Accessible Structure" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6", description: "Modern Styling & Fluid Animations" },
      { name: "React.js", icon: FaReact, color: "#61dafb", description: "Modern SPAs, Hooks & State" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933", description: "Event-driven Server Runtime" },
      { name: "Express.js", icon: SiExpress, color: "#e5e5e5", description: "Fast Backend REST APIs" },
      { name: "REST APIs", icon: FaServer, color: "#38bdf8", description: "API Architecture & Endpoints" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479a1", description: "Relational Schemas & Queries" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248", description: "NoSQL Scalable Document DB" },
      { name: "Firebase Firestore", icon: SiFirebase, color: "#ffca28", description: "Realtime Cloud Database" }
    ]
  },
  {
    id: "ai-llm",
    title: "AI & LLM Integration",
    skills: [
      { name: "OpenAI API", icon: BiBrain, color: "#10a37f", description: "LLM Integration & AI Models" },
      { name: "Prompt Engineering", icon: HiLightBulb, color: "#f59e0b", description: "Optimized Context & Prompts" },
      { name: "Resume & Skill Parsing", icon: BiBrain, color: "#8b5cf6", description: "Automated Skill-Gap Analysis" }
    ]
  },
  {
    id: "iot-embedded",
    title: "IoT & Embedded",
    skills: [
      { name: "ESP32", icon: MdOutlineSensors, color: "#e11d48", description: "Microcontrollers & Telemetry" },
      { name: "Arduino", icon: SiArduino, color: "#00979d", description: "Prototyping & C++ Firmware" },
      { name: "GPIO Control", icon: MdOutlineSensors, color: "#06b6d4", description: "Hardware Pin Interfacing" },
      { name: "Sensor Integration", icon: MdOutlineSensors, color: "#10b981", description: "GPS & Environmental Sensors" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032", description: "Version Control Workflow" },
      { name: "GitHub", icon: FaGithub, color: "#f3f4f6", description: "Open Source & CI/CD" },
      { name: "VS Code", icon: VscVscode, color: "#007acc", description: "Primary IDE & Extensions" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37", description: "API Testing & Automation" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", description: "Serverless Cloud Hosting" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7", description: "Fast Edge Web Deployment" },
      { name: "XAMPP", icon: FaServer, color: "#fb7a24", description: "Local Apache & MySQL Stack" }
    ]
  },
  {
    id: "cs-fundamentals",
    title: "Computer Science",
    skills: [
      { name: "OOP", icon: HiPuzzle, color: "#ec4899", description: "Modular Object-Oriented Design" },
      { name: "DSA", icon: FaCode, color: "#8b5cf6", description: "Data Structures & Algorithms" },
      { name: "System Design", icon: FaLaptopCode, color: "#3b82f6", description: "Scalable Architecture" },
      { name: "Real-Time Systems", icon: MdOutlineSensors, color: "#10b981", description: "Low-Latency Event Sync" }
    ]
  }
];

// ============================================
// 6. WHAT I DO
// ============================================
export const whatIDo = [
  {
    title: "Full-Stack Web Development",
    description: "Building responsive, modern, and performant web applications using React.js, Node.js, Express, and REST APIs.",
    icon: FaLaptopCode
  },
  {
    title: "IoT & Real-Time Embedded Systems",
    description: "Engineering end-to-end connected hardware solutions using ESP32, Arduino, sensors, and cloud telemetry.",
    icon: MdOutlineSensors
  },
  {
    title: "AI & LLM Integration",
    description: "Developing intelligent platforms using OpenAI API, prompt engineering, automated parsing, and smart recommendation engines.",
    icon: BiBrain
  },
  {
    title: "Software & Database Engineering",
    description: "Designing reliable software systems with Java, Python, C++, MySQL, and MongoDB with clean OOP architecture.",
    icon: FaCode
  }
];

// ============================================
// 7. PROJECTS (Exact Highlights from Resume)
// ============================================
export const projectFilters = ["ALL", "WEB", "AI", "JAVA", "PYTHON", "IOT"];

export const featuredProject = {
  id: "ambulance-system",
  title: "SmartAmbulance Traffic Management System",
  subtitle: "Autonomous IoT & Automated Traffic-Light Preemption",
  category: "IOT",
  image: "/images/projects/lifelane.jpg", 
  description: "Engineered an end-to-end real-time IoT solution for ambulance traffic management using ESP32 microcontrollers and automated traffic-light preemption.",
  problem: "Emergency ambulances lose critical minutes caught in severe traffic bottlenecks at city junctions, severely impacting patient survival chances during transit.",
  idea: "Automatically detect approaching emergency vehicles via GPS tracking and clear traffic signals in real time without requiring manual dispatcher intervention.",
  technology: "ESP32 Microcontrollers, Firebase Cloud Database, Google Maps API, C++, Web Dashboard",
  solution: "Engineered an autonomous architecture supporting multi-intersection corridor routing without manual dispatcher intervention, integrating GPS tracking with Firebase cloud database for real-time signal coordination.",
  features: [
    "Engineered an end-to-end real-time IoT solution for ambulance traffic management using ESP32 microcontrollers and automated traffic-light preemption.",
    "Integrated GPS-based ambulance tracking with Firebase cloud database for real-time signal coordination.",
    "Built a live web dashboard for traffic control centres with route visualization using Google Maps API.",
    "Designed an autonomous architecture supporting multi-intersection corridor routing without manual dispatcher intervention."
  ],
  technologies: ["ESP32", "IoT", "Firebase", "C++", "Google Maps API", "Real-Time Systems"],
  github: "https://github.com/shubhammore5145/LifeLane",
  liveDemo: null,
  isFeatured: true
};

export const projectsData = [
  {
    id: "ambulance-system",
    title: "SmartAmbulance Traffic Management System",
    subtitle: "Real-time IoT & Automated Traffic-Light Preemption",
    category: "IOT",
    image: "/images/projects/lifelane.jpg",
    description: "Engineered an end-to-end real-time IoT solution for ambulance traffic management using ESP32 microcontrollers and automated traffic-light preemption.",
    problem: "Ambulances lose vital minutes at congested traffic intersections, threatening critical patient survival.",
    idea: "Automate traffic signal clearance based on real-time vehicle GPS proximity and edge ESP32 triggers.",
    technology: "ESP32, Firebase Cloud DB, Google Maps API, C++, Web Dashboard",
    solution: "Designed an autonomous architecture supporting multi-intersection corridor routing without manual dispatcher intervention.",
    features: [
      "Engineered an end-to-end real-time IoT solution for ambulance traffic management using ESP32 microcontrollers and automated traffic-light preemption.",
      "Integrated GPS-based ambulance tracking with Firebase cloud database for real-time signal coordination.",
      "Built a live web dashboard for traffic control centres with route visualization using Google Maps API.",
      "Designed an autonomous architecture supporting multi-intersection corridor routing without manual dispatcher intervention."
    ],
    technologies: ["ESP32", "IoT", "Firebase", "C++", "Google Maps API", "Real-Time Systems"],
    github: "https://github.com/shubhammore5145/LifeLane",
    liveDemo: null,
    isFeatured: true
  },
  {
    id: "agro-nova",
    title: "Agro Nova",
    subtitle: "Crop Management, Weather Forecasting & Market Price Tracking",
    category: "WEB",
    image: "/images/projects/agro-nova.jpg",
    description: "Developed a full-stack platform for crop management, real-time weather forecasting, and live market price tracking.",
    problem: "Farmers lack unified access to localized weather alerts, scientific crop suitability advisories, and updated market prices.",
    idea: "Provide a comprehensive agricultural platform combining meteorological APIs, soil parameters, and mandi market prices.",
    technology: "React.js, Node.js, Express.js, MongoDB, REST APIs, Weather API",
    solution: "Built a crop recommendation engine using soil type, rainfall, and temperature parameters with scalable farm-profile MongoDB schemas.",
    features: [
      "Developed a full-stack platform for crop management, real-time weather forecasting, and live market price tracking.",
      "Built a crop recommendation engine using soil type, rainfall, and temperature parameters.",
      "Implemented REST APIs for weather data aggregation and MongoDB schemas for scalable farm-profile management."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Weather API"],
    github: "https://github.com/shubhammore5145/agro-nova",
    liveDemo: null,
    isFeatured: true
  },
  {
    id: "ai-career-trackr",
    title: "AI Career Trackr",
    subtitle: "AI-Powered Career Guidance & Personalized Roadmaps",
    category: "AI",
    image: "/images/projects/ai-career-trackr.jpg",
    description: "Created an AI-powered career guidance platform that analyzes user skill sets and generates personalized career roadmaps.",
    problem: "Students and professionals face ambiguity in identifying career skill gaps and finding structured tech learning paths.",
    idea: "Leverage generative AI to parse resumes, benchmark industry requirements, and output personalized learning pathways.",
    technology: "React.js, OpenAI API, Prompt Engineering, Node.js, REST APIs",
    solution: "Integrated resume parsing, automated skill-gap analysis, and contextual career coaching conversations using OpenAI API.",
    features: [
      "Created an AI-powered career guidance platform that analyzes user skill sets and generates personalized career roadmaps.",
      "Integrated resume parsing and automated skill-gap analysis to generate targeted learning recommendations.",
      "Integrated OpenAI API for context-aware career coaching conversations."
    ],
    technologies: ["React.js", "OpenAI API", "Prompt Engineering", "Node.js", "REST APIs"],
    github: "https://github.com/shubhammore5145/ai-career-trackr",
    liveDemo: "https://aicareertrackr.netlify.app/",
    isFeatured: true
  },
  {
    id: "mess-management",
    title: "Mess Management System",
    subtitle: "Hostel Operations, Student Billing & Inventory Management",
    category: "JAVA",
    image: "/images/projects/mess-management.jpg",
    description: "Developed a desktop application to digitize hostel mess operations, including billing, attendance, and inventory management.",
    problem: "Manual paper-based register keeping leads to billing discrepancies, missed meal counts, and unmonitored grocery wastage.",
    idea: "Digitize student records, daily meals, inventory stocks, and billing calculations in an offline-capable, robust desktop software.",
    technology: "Java, MySQL, JDBC, OOP, Desktop UI",
    solution: "Designed a normalized MySQL database supporting 500+ student records with JDBC connection pooling, automated billing, and low-stock alerts.",
    features: [
      "Developed a desktop application to digitize hostel mess operations, including billing, attendance, and inventory management.",
      "Automated monthly student billing, daily attendance tracking, low-stock alerts, and email notifications.",
      "Designed a normalized MySQL database supporting 500+ student records with JDBC connection pooling."
    ],
    technologies: ["Java", "MySQL", "JDBC", "OOP", "Desktop Application", "System Design"],
    github: "https://github.com/shubhammore5145/mess-management-system",
    liveDemo: null,
    isFeatured: false
  },
  {
    id: "personal-finance",
    title: "Personal Finance Manager",
    subtitle: "Expense Tracking, Spending Categorization & Budget Alerts",
    category: "PYTHON",
    image: "/images/projects/personal-finance.jpg",
    description: "Built a local finance management tool for expense tracking, spending categorization, trend visualization, CSV import/export, and budgeting alerts.",
    problem: "Users require secure, offline-first personal financial management without compromising privacy or sharing bank credentials.",
    idea: "Create a local Python analytics client that parses transaction statements, visualizes trends, and monitors thresholds.",
    technology: "Python, Data Visualization, CSV Parser, Matplotlib, Tkinter",
    solution: "Delivered a lightweight financial dashboard offering categorized expenditure breakdowns, interactive budgeting graphs, and alerts.",
    features: [
      "Built a local finance management tool for expense tracking, spending categorization, and budget alerts.",
      "Interactive trend visualization and expenditure category breakdown charts.",
      "Automated bank statement CSV import/export with intelligent expense grouping."
    ],
    technologies: ["Python", "Data Analytics", "CSV Processing", "Matplotlib", "Tkinter"],
    github: "https://github.com/shubhammore5145/personal-finance-manager",
    liveDemo: null,
    isFeatured: false
  },
  {
    id: "cafe-booking",
    title: "Cafe Digital Presence & Booking",
    subtitle: "Responsive Café Website, Digital Menus & Razorpay Payment",
    category: "WEB",
    image: "/images/projects/nisarg-cafe.jpg",
    description: "Designed and deployed a responsive café website with digital menus, gallery, and online table reservation integrated with Razorpay.",
    problem: "Dine-in cafés suffer from table overbooking, phone queue delays, and lack of real-time digital menus.",
    idea: "Deploy an elegant, mobile-friendly digital storefront with instant table booking and online payment processing.",
    technology: "HTML5, CSS3, JavaScript, Razorpay Payment Gateway, Responsive Design",
    solution: "Engineered a responsive website enabling customers to view dynamic menus, reserve tables in advance, and pay securely via Razorpay.",
    features: [
      "Designed and deployed a responsive café website with digital menus, gallery, and online table reservation.",
      "Integrated Razorpay Payment Gateway for secure online payment processing.",
      "Smooth mobile-first browsing experience with dynamic menu categories and reservation status."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Razorpay API", "Responsive Design"],
    github: "https://github.com/shubhammore5145/cafe-website-",
    liveDemo: "https://crispa.netlify.app/",
    isFeatured: false
  },
  {
    id: "martgpt",
    title: "MartGPT — AI Smart Retail POS & ERP",
    subtitle: "AI Barcode & OCR Scanner, Cloud Invoicing & WhatsApp Billing",
    category: "AI",
    image: "/images/projects/martgpt.jpg",
    description: "A comprehensive AI-driven retail management and POS platform featuring OCR receipt scanning, camera barcode detection, real-time inventory ERP, WhatsApp automated billing, and a multi-tenant Super Admin console.",
    problem: "Local kirana stores and retail supermarkets suffer from slow manual billing queues, inaccurate inventory stock, and high software subscription costs.",
    idea: "Combine computer vision barcode/OCR scanning with cloud-synced POS billing and automated customer WhatsApp receipt dispatch.",
    technology: "React, TypeScript, Node.js, Tesseract.js OCR, ZXing Barcode, Firebase, MySQL, Tailwind CSS",
    solution: "Engineered a rapid offline-first PWA POS system that captures barcodes instantly via camera, generates itemized GST bills, and syncs across devices.",
    features: [
      "AI-driven OCR and high-speed camera barcode scanning with ZXing",
      "Instant WhatsApp automated billing and digital invoice dispatch",
      "Real-time inventory ERP with automated low-stock warnings",
      "Dedicated Super Admin console with multi-tier subscription control"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AI / OCR", "Firebase", "MySQL", "Tailwind CSS"],
    github: "https://github.com/shubhammore5145/MartGPT",
    liveDemo: "https://martx.onrender.com/login",
    isFeatured: true
  },
  {
    id: "truetone",
    title: "TrueTone — AI Voice Cloning Detection",
    subtitle: "Real-time Voice Impersonation & Audio Deepfake Analysis",
    category: "AI",
    image: "/images/projects/truetone.jpg",
    description: "An AI-powered voice cloning impersonation detection system with voice authenticity analysis, fraud detection, multilingual support, and explainable risk scoring.",
    problem: "Rising voice cloning scams and synthetic audio impersonations deceive victims in fraud and social engineering attacks.",
    idea: "Analyze acoustic artifacts, spectral pitch consistency, and synthetic neural signatures in speech audio to flag clones.",
    technology: "JavaScript, Python, Web Audio API, AI / ML, Frequency Analysis",
    solution: "Built a real-time voice verification engine that scans incoming audio snippets and returns deepfake confidence metrics.",
    features: [
      "Real-time audio spectral and acoustic authenticity analysis",
      "Synthetic voice clone impersonation risk scoring",
      "Multilingual voice fraud detection with explainable visual telemetry"
    ],
    technologies: ["JavaScript", "Python", "AI / ML", "Web Audio API", "Signal Processing"],
    github: "https://github.com/shubhammore5145/truetone",
    liveDemo: "https://truetone.vercel.app/",
    isFeatured: false
  },
  {
    id: "kizashi-ai",
    title: "KIZASHi AI Platform",
    subtitle: "Next-Gen Interactive AI Intelligence Interface",
    category: "AI",
    image: "/images/projects/kizashi-ai.jpg",
    description: "A next-generation AI web platform built with Vite and modern React, offering high-speed interactive intelligence, responsive conversational assistance, and contextual reasoning.",
    problem: "Traditional AI interfaces have sluggish load times and bulky UI that hinder fluid human-AI collaboration.",
    idea: "Architect an ultra-fast, minimal AI interaction interface with instant client-side rendering and streaming responses.",
    technology: "React, Vite, JavaScript, AI APIs, Tailwind CSS",
    solution: "Built a responsive, zero-latency AI platform delivering streamlined conversational workflows.",
    features: [
      "Instant server-start and optimized build with Vite",
      "Streaming real-time AI responses and conversational memory",
      "Minimalist modern glass UI tailored for distraction-free workflows"
    ],
    technologies: ["React", "Vite", "JavaScript", "AI APIs", "Tailwind CSS"],
    github: "https://github.com/shubhammore5145/kizashi-ai",
    liveDemo: "https://kizashi-ai.vercel.app/",
    isFeatured: false
  },
  {
    id: "student-management",
    title: "Student Academic Management System",
    subtitle: "Enterprise Academic Records & Grading Portal in Java",
    category: "JAVA",
    image: "/images/projects/student-management.jpg",
    description: "An administrative software application engineered in Java to securely manage student enrollments, course catalogs, semester grades, and academic transcript exports.",
    problem: "Educational institutions require safe, efficient, and offline-capable student credential and performance archives.",
    idea: "Build a structured Java application leveraging relational database schemas and clean MVC design.",
    technology: "Java, JavaFX, MySQL, JDBC",
    solution: "Engineered a reliable academic record manager with instant search, GPA computation, and PDF report printing.",
    features: [
      "Secure faculty login and granular authorization levels",
      "Automated grade point average (GPA) and ranking computation",
      "Dynamic record search, filtering, and bulk data export"
    ],
    technologies: ["Java", "JavaFX", "MySQL", "OOP", "Database Design"],
    github: "https://github.com/shubhammore5145/student-management-system",
    liveDemo: null,
    isFeatured: false
  },
  {
    id: "sahyadri-honey",
    title: "Sahyadri Honey E-Commerce",
    subtitle: "Direct-to-Consumer Organic Agro Storefront",
    category: "WEB",
    image: "/images/projects/sahyadri-honey.jpg",
    description: "A modern Next.js direct-to-consumer e-commerce portal showcasing 100% natural, ethically sourced Sahyadri forest honey with transparent origin traceability and streamlined shopping cart.",
    problem: "Adulterated commercial honey markets make it difficult for authentic local beekeepers to reach health-conscious consumers.",
    idea: "Connect consumers directly to forest beekeepers through a beautifully crafted digital marketplace.",
    technology: "Next.js, TypeScript, Tailwind CSS, React",
    solution: "Engineered an e-commerce platform with product catalogs, origin verification, and intuitive cart checkout.",
    features: [
      "Product catalog with nutritional highlights and batch origins",
      "Persistent cart state and rapid checkout workflow",
      "Mobile-first responsive design with clean animations"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    github: "https://github.com/shubhammore5145/SAHYADRI-HONEY",
    liveDemo: "https://sahyadri-honey.vercel.app/",
    isFeatured: false
  },
  {
    id: "parivattan-mission-foundation",
    title: "Parivattan Mission Foundation",
    subtitle: "Community Empowerment & Social Outreach Web Portal",
    category: "WEB",
    image: "/images/projects/parivattan.jpg",
    description: "An inspiring non-profit organizational portal designed to drive community transformation across education, healthcare accessibility, environmental stewardship, and women empowerment initiatives.",
    problem: "Non-profit foundations need transparent, modern digital platforms to showcase impact, mobilize volunteers, and accept contributions.",
    idea: "Create a fast, accessible web portal with story sections, donation campaigns, and program showcase.",
    technology: "React, Vite, TypeScript, Tailwind CSS",
    solution: "Designed a high-performance modern web application communicating foundation vision with maximum clarity.",
    features: [
      "Dynamic initiative showcase (Education, Healthcare, Environment, Women Empowerment)",
      "Interactive volunteer onboarding and outreach inquiries",
      "Fully responsive and optimized for low-bandwidth rural connections"
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/shubhammore5145/parivattan-mission-foundation",
    liveDemo: "https://parivattan.netlify.app/",
    isFeatured: false
  },
  {
    id: "ts-gaming-cafe",
    title: "TS Gaming Café Platform",
    subtitle: "Esports Lounge Rig Booking & Station Controller",
    category: "WEB",
    image: "/images/projects/ts-gaming-cafe.jpg",
    description: "A dedicated esports lounge web portal allowing gamers to browse gaming rigs, check real-time PC availability, book gaming sessions, and access café food & drink combos.",
    problem: "Gaming cafés struggle with slot overbooking, walk-in disputes, and manual station time tracking.",
    idea: "Build a real-time reservation platform with Firebase backend for live station state management.",
    technology: "React, Firebase, Tailwind CSS, WebSockets",
    solution: "Delivered a gaming lounge platform where players reserve high-spec PC rigs with real-time slot synchronization.",
    features: [
      "Live gaming rig availability matrix (RTX 4090 / 4080 stations)",
      "Automated time slot reservations and user profile history",
      "Admin station control dashboard with live session timers"
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/shubhammore5145/TSGamign-cafe",
    liveDemo: null,
    isFeatured: false
  },
  {
    id: "headphone-3d-viz",
    title: "Exploded 3D Gaming Headset",
    subtitle: "Interactive WebGL 3D Product Visualization",
    category: "WEB",
    image: "/images/projects/headphone-3d.jpg",
    description: "High-end interactive 3D exploded-view product visualization of a matte-black gaming headset showcasing acoustic drivers, ergonomic headband mechanics, and internal wiring.",
    problem: "Traditional 2D product photos fail to communicate internal premium engineering and acoustic build quality.",
    idea: "Render an interactive 3D model in the browser with exploded disassembly on scroll.",
    technology: "Three.js, WebGL, Next.js, TypeScript",
    solution: "Created a smooth 60fps 3D canvas with dynamic lighting, material shaders, and scroll-driven exploded assembly.",
    features: [
      "Smooth 3D orbit controls and interactive component inspection",
      "Exploded view disassembly showing titanium drivers and internal magnets",
      "Optimized 60fps WebGL rendering across desktop and mobile devices"
    ],
    technologies: ["Three.js", "WebGL", "Next.js", "TypeScript", "3D Graphics"],
    github: "https://github.com/shubhammore5145/Premium-Headphone-3D-Visualization",
    liveDemo: null,
    isFeatured: false
  }
];

// ============================================
// 8. MY JOURNEY & EDUCATION TIMELINE (Per Resume)
// ============================================
export const journeyData = [
  {
    id: "btech",
    category: "Education",
    title: "B.Tech — Information Technology",
    organization: "MGM University, Chhatrapati Sambhajinagar (Aurangabad)",
    date: "Jun 2024 – 2028",
    description: "Pursuing bachelor's degree in Information Technology. Core Coursework: Data Structures & Algorithms, OOP, Database Management Systems, Computer Networks, IoT Systems, and Software Engineering."
  },
  {
    id: "hsc",
    category: "Education",
    title: "Higher Secondary Certificate (HSC) — 82.17%",
    organization: "Maharashtra State Board of Secondary and Higher Secondary Education",
    date: "Mar 2024",
    description: "Achieved 82.17% with Distinction, building strong analytical and scientific foundations in Mathematics, Physics, and Computer Science."
  },
  {
    id: "ssc",
    category: "Education",
    title: "Secondary School Certificate (SSC) — 82.80%",
    organization: "A. K. Waghmare High School, Chhatrapati Sambhajinagar (Aurangabad)",
    date: "Mar 2022",
    description: "Completed secondary school with 82.80% distinction, establishing disciplined problem-solving and academic excellence."
  },
  {
    id: "sih-hackathon",
    category: "Hackathon",
    title: "Smart India Hackathon Finalist",
    organization: "Ministry of Education / SIH National Finals",
    date: "2024",
    description: "Selected as national finalist in the hardware/software hackathon for engineering an end-to-end real-time emergency vehicle corridor preemption system."
  },
  {
    id: "deployments",
    category: "Engineering",
    title: "10+ Real-World Deployed Applications",
    organization: "IoT, AI, Agriculture, Healthcare, Finance & Hospitality",
    date: "2023 – Present",
    description: "Architected, built, and deployed production-grade applications including LifeLane (IoT traffic preemption), Agro Nova (smart agriculture), AI Career Trackr, and enterprise management tools."
  }
];

// ============================================
// 9. CERTIFICATES
// ============================================
export const certificatesData = [
  {
    id: 1,
    title: "Full-Stack Web Development & Modern JavaScript",
    issuer: "Industry Certification",
    date: "2024",
    image: "/images/certificates/cert1.jpeg",
    description: "Mastery in component-based architectures, REST APIs, and responsive design systems."
  },
  {
    id: 2,
    title: "IoT Systems & Microcontroller Programming",
    issuer: "Embedded Engineering",
    date: "2024",
    image: "/images/certificates/cert2.jpeg",
    description: "Hands-on certification in ESP32, sensor integration, and cloud telemetry protocols."
  },
  {
    id: 3,
    title: "AI/ML Fundamentals & LLM Integration",
    issuer: "AI Platform",
    date: "2024",
    image: "/images/certificates/cert3.jpeg",
    description: "Applied prompt engineering, OpenAI APIs, and context-driven conversational systems."
  }
];

// ============================================
// 10. ACHIEVEMENTS & CERTIFICATIONS (Exact from Resume)
// ============================================
export const achievementsData = [
  {
    id: 1,
    category: "Hackathons",
    title: "Smart India Hackathon Finalist",
    description: "Reached the national final of the hardware/software hackathon for innovative emergency response IoT engineering."
  },
  {
    id: 2,
    category: "Engineering",
    title: "10+ Real-World Applications",
    description: "Architected, built, and deployed projects across IoT, AI, agriculture, healthcare, and fintech domains."
  },
  {
    id: 3,
    category: "Certifications",
    title: "5+ Professional Certifications",
    description: "Completed courses in modern web technologies, cloud platforms, and AI/ML fundamentals."
  },
  {
    id: 4,
    category: "Community",
    title: "Open Source Contributor",
    description: "Participated in developer communities, collaborative coding challenges, and GitHub open-source repositories."
  }
];

// ============================================
// 11. LIVE WORK / WORKSPACE
// ============================================
export const liveWorkData = [
  {
    id: 1,
    title: "ESP32 Traffic Signal Automation",
    date: "Current Project",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    description: "Testing real-time traffic coordination on ESP32 microcontrollers with sub-50ms latency."
  },
  {
    id: 2,
    title: "Hackathon Prototyping",
    date: "SIH '24 Finalist",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    description: "National finals prototyping session with the team."
  },
  {
    id: 3,
    title: "AI Career Trackr & NLP",
    date: "AI Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    description: "Fine-tuning prompt flows and skill-gap recommendations powered by OpenAI API."
  }
];
