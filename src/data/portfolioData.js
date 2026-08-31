export const personalInfo = {
  name: "Vasanthakumar D",
  title: "AI & Data Science Student",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  institution: "Dr. Mahalingam College of Engineering and Technology (Anna University)",
  years: "2023 – 2027",
  cgpa: "8.2 / 10",
  email: "dvasanthakumarduraisamy@gmail.com",
  phone: "+91 93452 85202",
  location: "Pollachi, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/vasanthkumar083",
  github: "https://github.com/vasanthakumar2005",
  typewriterTitles: [
    "AI & Data Science Specialist",
    "Final-Year B.Tech Student @ Dr. MCET",
    "Machine Learning Developer",
    "Data Analytics & Power BI Engineer",
    "Full-Stack AI Product Builder"
  ],
  bio: "Final-year B.Tech student in Artificial Intelligence and Data Science at Dr. Mahalingam College of Engineering and Technology (CGPA 8.2/10). Passionate about machine learning algorithms, statistical data analytics, and building high-impact software applications. Proven hands-on experience in healthcare AI models, Power BI DAX dashboards, and role-based web systems.",
  stats: [
    { label: "Academic CGPA", value: "8.2 / 10" },
    { label: "AI & Web Projects", value: "3+" },
    { label: "Internships & Roles", value: "5 Roles" },
    { label: "Certifications", value: "3 Verified" }
  ]
};

export const pillars = [
  {
    id: "ml",
    title: "Machine Learning & Deep Learning",
    icon: "Brain",
    description: "Architecting CNN (ResNet50) image diagnostics, acoustic spectrogram classification using Librosa, and computer vision with OpenCV.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "analytics",
    title: "Data Analytics & Power BI",
    icon: "BarChart3",
    description: "Transforming multi-source spreadsheets into interactive Power BI DAX dashboards, vendor turnover metrics, and geographic market maps.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "web",
    title: "Full-Stack Web Systems",
    icon: "Code2",
    description: "Engineering responsive web interfaces, RESTful data flows, and secure role-based access control (RBAC) database management portals.",
    color: "from-purple-500 to-pink-600"
  }
];

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "data", label: "Data & Analytics" },
  { id: "web", label: "Web & Databases" },
  { id: "tools", label: "Tools & Languages" }
];

// Clean, unique list of skills (No duplicates)
export const skills = [
  { name: "Python", category: "tools", icon: "🐍", badge: "Primary Language", level: 90 },
  { name: "TensorFlow / Keras", category: "ai", icon: "🧠", badge: "Deep Learning", level: 85 },
  { name: "Scikit-learn", category: "ai", icon: "🤖", badge: "ML Models", level: 88 },
  { name: "OpenCV", category: "ai", icon: "👁️", badge: "Computer Vision", level: 82 },
  { name: "Librosa / Audio AI", category: "ai", icon: "🎵", badge: "Spectrogram Analysis", level: 80 },
  { name: "Power BI", category: "data", icon: "📊", badge: "DAX & Dashboards", level: 88 },
  { name: "SQL / MySQL", category: "web", icon: "🗄️", badge: "Relational DB", level: 85 },
  { name: "Pandas & NumPy", category: "data", icon: "🔢", badge: "Data Wrangling", level: 90 },
  { name: "Advanced Excel", category: "data", icon: "📈", badge: "Pivots & Modeling", level: 88 },
  { name: "JavaScript (ES6+)", category: "web", icon: "⚡", badge: "Frontend Logic", level: 85 },
  { name: "React.js", category: "web", icon: "⚛️", badge: "UI Framework", level: 82 },
  { name: "HTML5 & CSS3", category: "web", icon: "🎨", badge: "Web Design", level: 92 },
  { name: "Java", category: "tools", icon: "☕", badge: "Object-Oriented", level: 78 },
  { name: "Git & GitHub", category: "tools", icon: "🌿", badge: "Version Control", level: 86 },
  { name: "VS Code & Jupyter", category: "tools", icon: "💻", badge: "IDE & Analytics", level: 90 }
];

export const projects = [
  {
    id: "luna",
    title: "L.U.N.A. — Multi-Modal AI Lung Disease Detection",
    category: "ai",
    categoryLabel: "AI & Healthcare",
    shortDesc: "Deep learning diagnostic platform integrating chest X-ray ResNet50 CNN classification with acoustic stethoscopic sound spectrogram analysis.",
    fullDesc: "L.U.N.A. (Lung Unification & Diagnostic Analytics) is a multi-modal artificial intelligence framework built to improve diagnostic speed and accuracy for pulmonary conditions. It processes patient chest radiographs alongside digital stethoscope audio recordings.",
    metrics: [
      { label: "Diagnostic Accuracy", value: "94.2%" },
      { label: "Modalities", value: "X-Ray + Audio" },
      { label: "Model Backbones", value: "ResNet50 & CNN" }
    ],
    features: [
      "Grad-CAM visual saliency heatmaps for clinician radiological interpretability",
      "Mel-Spectrogram acoustic feature extraction using Librosa for respiratory crackles/wheezes",
      "TensorFlow/Keras ensemble classifier trained on curated diagnostic datasets",
      "Interactive diagnostic report generator interface"
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "Librosa", "ResNet50", "Scikit-Learn"],
    github: "https://github.com/vasanthakumar2005",
    architectureSpecs: {
      pipeline: "X-Ray DICOM/PNG -> ResNet50 Feature Extractor -> Grad-CAM Heatmap Generator + Audio WAV -> Mel-Spectrogram -> Audio CNN Classifier -> Fusion Layer -> Clinical Diagnostic Output",
      accuracyDetails: "Achieved 94.2% validation accuracy across 5,000+ radiology and sound recordings."
    }
  },
  {
    id: "mcet-portal",
    title: "MCET Document Management Portal",
    category: "web",
    categoryLabel: "Web Applications",
    shortDesc: "Centralized, role-based document management web system built for Dr. Mahalingam College of Engineering & Technology.",
    fullDesc: "A secure institutional portal created under the guidance of Dr. Arun Madhavan (Feb 2026). Designed to streamline document submission, approval workflows, and archival access for students, faculty, and administrative departments.",
    metrics: [
      { label: "Time Saved", value: "70% Faster" },
      { label: "User Roles", value: "Student / Faculty / Admin" },
      { label: "Security", value: "RBAC & Encryption" }
    ],
    features: [
      "Role-Based Access Control (RBAC) ensuring strict privacy boundary enforcement",
      "Encrypted PDF file preview, tagging, and multi-department search pipeline",
      "Automated document status tracking and faculty sign-off notifications",
      "Responsive clean user interface backed by MySQL database architecture"
    ],
    tech: ["React / JS", "HTML5/CSS3", "JavaScript", "MySQL", "Node.js", "RBAC Auth"],
    github: "https://github.com/vasanthakumar2005",
    architectureSpecs: {
      pipeline: "Client Request -> JWT Authentication Middleware -> Role-Based Route Handler -> Encrypted Document Stream -> MySQL Database Store",
      accuracyDetails: "Reduced average document retrieval time from 15 minutes to under 30 seconds."
    }
  },
  {
    id: "market-mapping",
    title: "Market Mapping & CCTV Sales Intelligence",
    category: "data",
    categoryLabel: "Data Analytics",
    shortDesc: "Comprehensive business analytics dashboard mapping competitor density, vendor turnover, and distribution channels across 100+ retail stores.",
    fullDesc: "Developed during data analytics internship at Netlush Technologies. Processed and structured raw commercial survey data from over 100 CCTV retail storefronts in Tamil Nadu, transforming unstructured spreadsheets into strategic Power BI visual intelligence.",
    metrics: [
      { label: "Retail Outlets", value: "100+ Stores" },
      { label: "Platform", value: "Power BI DAX" },
      { label: "Impact", value: "Route Optimization" }
    ],
    features: [
      "Custom DAX metrics calculating geographic sales velocity and market share",
      "Interactive map visualizer highlighting high-density competitor clusters",
      "Price tier categorization and hardware inventory turnover breakdown",
      "Executive summary reports enabling optimized regional distribution routes"
    ],
    tech: ["Power BI", "DAX", "Advanced Excel", "SQL", "Market Analytics"],
    github: "https://github.com/vasanthakumar2005",
    architectureSpecs: {
      pipeline: "Raw Retail Survey Data -> Excel Cleansing & Pivot Validation -> SQL Staging -> Power BI DAX Modeling -> Interactive Geospatial Dashboard",
      accuracyDetails: "Directly guided sales managers in reorganizing distribution routes for 100+ vendor locations."
    }
  }
];

// Complete, rich experiences list covering ALL corporate, institutional & leadership roles
export const experiences = [
  {
    id: "netlush",
    role: "Data Analyst Intern",
    company: "Netlush Technologies",
    period: "16.06.2025 – 30.06.2025",
    location: "Palani, Tamil Nadu",
    type: "Corporate Internship",
    category: "internship",
    highlights: [
      "Collected, cleaned, and validated commercial survey data from 100+ retail storefronts using Advanced Excel and Google Sheets.",
      "Designed interactive Power BI DAX dashboards mapping vendor turnover, competitor density, and geographic sales velocity.",
      "Presented executive visual analytics reports that empowered client marketing managers to optimize regional distribution channels."
    ],
    skills: ["Power BI", "DAX", "Excel", "Data Cleansing", "Geospatial Analysis"]
  },
  {
    id: "sorcee",
    role: "Digital Marketing & Analytics Intern",
    company: "Sorcee Clothing Brand",
    period: "01.05.2024 – 30.06.2024",
    location: "Pollachi, Tamil Nadu",
    type: "Corporate Internship",
    category: "internship",
    highlights: [
      "Analyzed social media campaign analytics, audience engagement demographics, and conversion metrics.",
      "Designed promotional brand poster collateral and edited short-form video assets for digital media channels.",
      "Achieved a 15% increase in online user engagement through data-driven content scheduling and targeted campaigns."
    ],
    skills: ["Digital Analytics", "Canva", "Video Editing", "Campaign Strategy", "Social Media Insights"]
  },
  {
    id: "mcet-lead",
    role: "Institutional System Developer & Research Lead",
    company: "Dr. Mahalingam College of Engineering and Technology",
    period: "Feb 2026",
    location: "Pollachi, Tamil Nadu",
    type: "Institutional Project",
    category: "project",
    highlights: [
      "Engineered the MCET Document Management Portal under the guidance of Dr. Arun Madhavan.",
      "Implemented Role-Based Access Control (RBAC) for students, faculty, and administrators.",
      "Reduced administrative document retrieval time by 70% with encrypted PDF processing and SQL database indexing."
    ],
    skills: ["React / JS", "MySQL", "RBAC Authentication", "Web Architecture"]
  },
  {
    id: "invictus-leader",
    role: "Core Association Leader & Event Coordinator",
    company: "INVICTUS Student Association @ Dr. MCET",
    period: "2024 – Present",
    location: "Dr. MCET Campus",
    type: "Leadership Role",
    category: "leadership",
    highlights: [
      "Served as core student leader managing departmental technical symposia, hackathons, and coding competitions.",
      "Coordinated guest workshops, industry expert lectures, and peer-to-peer technical mentoring sessions.",
      "Recognized for leadership excellence, team organization, and driving high student participation."
    ],
    skills: ["Event Leadership", "Public Speaking", "Team Coordination", "Technical Symposia"]
  },
  {
    id: "arasiyal-media",
    role: "Digital Media Manager & Video Content Specialist",
    company: "Arasiyal Seivom Media Channel",
    period: "2024 – Present",
    location: "Remote / Tamil Nadu",
    type: "Media & Analytics",
    category: "media",
    highlights: [
      "Managed end-to-end digital content strategy, audience analytics, and video post-production.",
      "Edited high-impact short-form videos and designed promotional graphics.",
      "Drove +15% audience reach growth through analytics-backed publishing schedules."
    ],
    skills: ["Video Editing", "Social Media Analytics", "Canva", "Audience Growth"]
  }
];

export const certifications = [
  {
    id: "tata",
    title: "Tata Data Visualization: Empowering Business with Insights",
    issuer: "Tata Group & Forage Virtual Internship",
    date: "Dec 2024",
    badge: "Verified Certification",
    description: "Mastered executive dashboard design, business metric selection, data storytelling, and presenting visual analytics to C-suite leadership."
  },
  {
    id: "bcg",
    title: "BCGX Data Science Job Simulation",
    issuer: "BCG Data Science Programme",
    date: "Dec 2024",
    badge: "Verified Simulation",
    description: "Executed customer churn exploratory data analysis, hypothesis testing, feature importance engineering, and predictive modeling."
  },
  {
    id: "nptel",
    title: "NPTEL Entrepreneurship Certification",
    issuer: "NPTEL / IIT Certification",
    date: "2024",
    score: "63%",
    badge: "Elite Classification",
    description: "Graduated with Elite classification, studying startup business models, market dynamics, venture financing, and product feasibility."
  }
];

export const achievements = [
  {
    id: "invictus",
    title: "INVICTUS Student Association Leader",
    icon: "Trophy",
    description: "Core association leader at Dr. MCET organizing technical symposia, coding hackathons, and departmental skill-building workshops."
  },
  {
    id: "police",
    title: "TN Police Cyber Security Poster Presentation",
    icon: "ShieldCheck",
    description: "Awardee in Tamil Nadu Police Cyber Security competition communicating digital safety & anti-phishing hygiene."
  },
  {
    id: "vault",
    title: "Competitive Pole Vault Athlete",
    icon: "Zap",
    description: "Active collegiate pole vault athlete representing high physical discipline, mental resilience, and technical execution."
  },
  {
    id: "media",
    title: "Social Media Management & Video Editing",
    icon: "Video",
    description: "Editor and manager for digital media channels including 'Arasiyal Seivom', driving +15% audience growth via video content."
  }
];
