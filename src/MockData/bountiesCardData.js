export const bountiesCardData = [
  {
    id: "1",
    name: "AI Vehicle Detection System",
    image: "https://mxface.ai/AssetsNew/images/home/vehicle_detect.png",
    milestones: 5,
    milestonesDone: 2,
    daysRemaining: 16,
    progress: 5,
    contributors: [
      { name: "E", color: "#87d068" },
      { name: "JH", color: "#ffad97" },
      { name: "A", color: "#c0e17d" },
      { name: "R", color: "#6c8dcf" },
      { name: "U", color: "#f56a00" },
    ],
    urgentDaysLeft: 6,
    description: `Build an AI-powered system capable of detecting and classifying vehicles in real-time using live video streams.`,
    technicalRequirements: [
      "Real-time object detection using YOLOv5",
      "Accuracy above 85%",
      "Dockerized app",
      "Live video stream integration"
    ],
    details: {
      postedDate: "2025-10-01",
      deadline: "2025-08-10",
      bountyReward: "$1200",
      teamSize: "3-7 Developers"
    },
    languages: ["Python", "JavaScript"],
    skills: ["Computer Vision", "Machine Learning", "YOLOv5", "OpenCV", "Docker"],
    milestoneDetails: [
      {
        name: "Data Collection & Labeling",
        description: "Collect traffic footage and annotate vehicle data.",
        assignedTo: "E",
        role: "Data Scientist",
        status: "completed"
      },
      {
        name: "Model Training",
        description: "Train YOLOv5 on labeled dataset.",
        assignedTo: "JH",
        role: "ML Engineer",
        status: "completed"
      },
      {
        name: "Live Video Integration",
        description: "Stream real-time footage into detection model.",
        assignedTo: "A",
        role: "Backend Developer",
        status: "in progress"
      },
      {
        name: "Dockerization",
        description: "Containerize the entire application.",
        assignedTo: "R",
        role: "DevOps Engineer",
        status: "back to queue"
      },
      {
        name: "Accuracy Validation & Tuning",
        description: "Ensure detection accuracy is above 85%.",
        assignedTo: "U",
        role: "QA Engineer",
        status: "awaiting review"
      }
    ]
  },
  {
    id: "2",
    name: "Blockchain Voting App",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*T_xMdszDW2R5chGNEkFV2g.png",
    milestones: 4,
    milestonesDone: 1,
    daysRemaining: 20,
    progress: 25,
    contributors: [
      { name: "KT", color: "#f56a00" },
      { name: "L", color: "#1890ff" },
      { name: "SR", color: "#ffc107" },
    ],
    urgentDaysLeft: 10,
    description: `Develop a decentralized voting application secured by Ethereum smart contracts with a mobile and web interface.`,
    technicalRequirements: [
      "Smart contract written in Solidity",
      "Frontend in React + Web3.js",
      "Voting history view",
      "Audit logging"
    ],
    details: {
      postedDate: "2025-07-10",
      deadline: "2025-08-15",
      bountyReward: "$1500",
      teamSize: "2-4 Developers"
    },
    languages: ["Solidity", "JavaScript"],
    skills: ["Blockchain", "Smart Contracts", "Ethereum", "React", "Web3.js"],
    milestoneDetails: [
      {
        name: "Smart Contract Drafting",
        description: "Design Ethereum-based voting contracts.",
        assignedTo: "KT",
        role: "Blockchain Developer",
        status: "completed"
      },
      {
        name: "Web Frontend Integration",
        description: "Develop React interface with Web3.js.",
        assignedTo: "L",
        role: "Frontend Developer",
        status: "in progress"
      },
      {
        name: "Audit Logging System",
        description: "Implement immutable logging features.",
        assignedTo: "SR",
        role: "Security Engineer",
        status: "back to queue"
      },
      {
        name: "Voting History Viewer",
        description: "Display historic voting data transparently.",
        assignedTo: "KT",
        role: "Blockchain Developer",
        status: "awaiting review"
      }
    ]
  },
  {
    id: "3",
    name: "AI-Powered Resume Ranker",
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--Vc4TRox2--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://res.cloudinary.com/practicaldev/image/fetch/s--rTMCnERs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/wRrJxk2/AI-resume-screening.png",
    milestones: 3,
    milestonesDone: 3,
    daysRemaining: 5,
    progress: 100,
    contributors: [
      { name: "JD", color: "#e91e63" },
      { name: "TK", color: "#00bcd4" },
    ],
    urgentDaysLeft: 2,
    description: `Create a resume parsing and ranking system that scores candidates based on job fit using AI.`,
    technicalRequirements: [
      "PDF resume parser",
      "TF-IDF or NLP-based matching",
      "Job description comparator",
      "Ranking dashboard"
    ],
    details: {
      postedDate: "2025-07-01",
      deadline: "2025-07-30",
      bountyReward: "$1000",
      teamSize: "1-3 Developers"
    },
    languages: ["Python"],
    skills: ["NLP", "Data Processing", "spaCy", "Pandas", "Flask"],
    milestoneDetails: [
      {
        name: "Resume Parsing",
        description: "Extract structured data from PDF resumes.",
        assignedTo: "JD",
        role: "Python Developer",
        status: "completed"
      },
      {
        name: "NLP Scoring",
        description: "Use TF-IDF to score candidate profiles.",
        assignedTo: "TK",
        role: "NLP Engineer",
        status: "completed"
      },
      {
        name: "Dashboard UI",
        description: "Build visual ranking and filtering dashboard.",
        assignedTo: "JD",
        role: "Full Stack Developer",
        status: "completed"
      }
    ]
  },
  {
    id: "4",
    name: "Eco-Friendly Trip Planner",
    image: "https://cdn.dribbble.com/users/151403/screenshots/15819524/media/5d9733be28fcb5d211c5c116f9820575.jpg",
    milestones: 6,
    milestonesDone: 3,
    daysRemaining: 30,
    progress: 50,
    contributors: [
      { name: "LJ", color: "#4caf50" },
      { name: "AD", color: "#9c27b0" },
      { name: "ME", color: "#2196f3" },
    ],
    urgentDaysLeft: 14,
    description: `Design a web and mobile app to help users plan the most eco-friendly travel routes with carbon footprint tracking.`,
    technicalRequirements: [
      "Google Maps API integration",
      "Carbon footprint calculation",
      "User profile and saved trips",
      "Mobile-first responsive design"
    ],
    details: {
      postedDate: "2025-07-20",
      deadline: "2025-08-30",
      bountyReward: "$1800",
      teamSize: "3-6 Developers"
    },
    languages: ["JavaScript", "TypeScript"],
    skills: ["Frontend", "API Integration", "React Native", "Next.js", "Firebase"],
    milestoneDetails: [
      {
        name: "UI/UX Design",
        description: "Create a mobile-first design prototype.",
        assignedTo: "LJ",
        role: "UI/UX Designer",
        status: "completed"
      },
      {
        name: "Maps Integration",
        description: "Integrate Google Maps for route planning.",
        assignedTo: "AD",
        role: "Frontend Developer",
        status: "in progress"
      },
      {
        name: "Carbon Calculator",
        description: "Build system to estimate trip emissions.",
        assignedTo: "ME",
        role: "Backend Developer",
        status: "completed"
      },
      {
        name: "Trip Saving Feature",
        description: "Allow users to bookmark past trips.",
        assignedTo: "LJ",
        role: "Full Stack Developer",
        status: "awaiting review"
      },
      {
        name: "Authentication",
        description: "Add login and secure session handling.",
        assignedTo: "AD",
        role: "Auth Engineer",
        status: "back to queue"
      },
      {
        name: "Deployment",
        description: "Deploy app to Firebase Hosting.",
        assignedTo: "ME",
        role: "DevOps",
        status: "back to queue"
      }
    ]
  },
  {
    id: "5",
    name: "Real-Time Chat Translation",
    image: "https://images.ctfassets.net/pdf29us7flmy/5GjQeKFo5KoaiMqgwUKuKC/e043f871948c8cf4e325b8b42083f1b4/Chat_Translation_Messages.png",
    milestones: 4,
    milestonesDone: 2,
    daysRemaining: 10,
    progress: 50,
    contributors: [
      { name: "SM", color: "#673ab7" },
      { name: "X", color: "#009688" },
      { name: "ZK", color: "#3f51b5" },
    ],
    urgentDaysLeft: 4,
    description: `Develop a real-time chat app that translates messages on-the-fly between multiple languages using AI.`,
    technicalRequirements: [
      "WebSocket-based real-time messaging",
      "Translation via Google Translate API",
      "Chat history and user login",
      "Support for 5+ languages"
    ],
    details: {
      postedDate: "2025-07-18",
      deadline: "2025-08-10",
      bountyReward: "$1400",
      teamSize: "2-5 Developers"
    },
    languages: ["JavaScript", "Python"],
    skills: ["WebSocket", "Translation APIs", "Frontend","Node.js", "Socket.IO", "React", "Google Cloud"],
    milestoneDetails: [
      {
        name: "Real-Time Messaging",
        description: "Set up WebSocket server with Socket.IO.",
        assignedTo: "SM",
        role: "Backend Engineer",
        status: "completed"
      },
      {
        name: "Language Translation",
        description: "Integrate Google Translate API for messages.",
        assignedTo: "X",
        role: "AI Engineer",
        status: "completed"
      },
      {
        name: "User Authentication",
        description: "Add login and session tracking.",
        assignedTo: "ZK",
        role: "Frontend Developer",
        status: "in progress"
      },
      {
        name: "Chat History",
        description: "Build UI for past message logs.",
        assignedTo: "SM",
        role: "Full Stack Developer",
        status: "awaiting review"
      }
    ]
  },
  {
    id: "6",
    name: "E-commerce Mobile App with React Native",
    image: "https://cdn.dribbble.com/userupload/3524106/file/original-6d59cf985f4a1a4e394c5b5e848e5e84.png",
    milestones: 5,
    milestonesDone: 0,
    daysRemaining: 45,
    progress: 0,
    contributors: [
      { name: "MK", color: "#ff6b6b" },
      { name: "AL", color: "#4ecdc4" },
    ],
    urgentDaysLeft: 25,
    description: `Build a complete e-commerce mobile application with payment integration, product catalog, and user authentication.`,
    technicalRequirements: [
      "React Native for mobile",
      "Payment gateway integration",
      "Product management system",
      "User authentication & profiles"
    ],
    details: {
      postedDate: "2025-10-05",
      deadline: "2025-11-20",
      bountyReward: "$3500",
      teamSize: "2-4 Developers"
    },
    languages: ["JavaScript", "TypeScript"],
    skills: ["React Native", "Mobile Development", "Payment APIs", "Firebase", "Redux"],
    milestoneDetails: []
  },
  {
    id: "7",
    name: "WordPress Theme Customization",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-themes-1.jpg",
    milestones: 3,
    milestonesDone: 1,
    daysRemaining: 8,
    progress: 33,
    contributors: [
      { name: "WD", color: "#95e1d3" },
    ],
    urgentDaysLeft: 3,
    description: `Customize a WordPress theme to match brand guidelines with custom post types and advanced features.`,
    technicalRequirements: [
      "Custom WordPress theme development",
      "WooCommerce integration",
      "Custom post types",
      "SEO optimization"
    ],
    details: {
      postedDate: "2025-10-04",
      deadline: "2025-10-15",
      bountyReward: "$650",
      teamSize: "1-2 Developers"
    },
    languages: ["PHP"],
    skills: ["WordPress", "WooCommerce", "Frontend", "CSS", "jQuery"],
    milestoneDetails: []
  },
  {
    id: "8",
    name: "Machine Learning Model for Stock Prediction",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*K8F6V6CkhHLb8dTLt_7atg.png",
    milestones: 4,
    milestonesDone: 1,
    daysRemaining: 60,
    progress: 25,
    contributors: [
      { name: "DS", color: "#f38181" },
      { name: "ML", color: "#aa96da" },
      { name: "QA", color: "#fcbad3" },
    ],
    urgentDaysLeft: 30,
    description: `Develop a machine learning model to predict stock prices using historical data and technical indicators.`,
    technicalRequirements: [
      "LSTM or Transformer models",
      "Technical indicators analysis",
      "Backtesting system",
      "API for predictions"
    ],
    details: {
      postedDate: "2025-09-25",
      deadline: "2025-11-25",
      bountyReward: "$5500",
      teamSize: "2-5 Developers"
    },
    languages: ["Python"],
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Pandas", "API Development"],
    milestoneDetails: []
  },
  {
    id: "9",
    name: "iOS Fitness Tracking App",
    image: "https://cdn.dribbble.com/users/2191403/screenshots/15818486/media/9b6fa0129e4ccee9f8a9f8c8c8d5f1c9.png",
    milestones: 6,
    milestonesDone: 2,
    daysRemaining: 35,
    progress: 33,
    contributors: [
      { name: "IO", color: "#ff9ff3" },
      { name: "SW", color: "#feca57" },
      { name: "DV", color: "#48dbfb" },
    ],
    urgentDaysLeft: 15,
    description: `Create a native iOS fitness app with workout tracking, calorie counting, and social sharing features.`,
    technicalRequirements: [
      "Native iOS development",
      "HealthKit integration",
      "Core Data for local storage",
      "Social media sharing"
    ],
    details: {
      postedDate: "2025-10-02",
      deadline: "2025-11-10",
      bountyReward: "$4200",
      teamSize: "2-4 Developers"
    },
    languages: ["Swift"],
    skills: ["iOS Development", "Swift", "HealthKit", "UI/UX", "Core Data"],
    milestoneDetails: []
  },
  {
    id: "10",
    name: "Admin Dashboard with Vue.js",
    image: "https://preview.cruip.com/mosaic/images/mosaic-og.jpg",
    milestones: 4,
    milestonesDone: 3,
    daysRemaining: 12,
    progress: 75,
    contributors: [
      { name: "VD", color: "#58b19f" },
      { name: "FE", color: "#f8b500" },
    ],
    urgentDaysLeft: 5,
    description: `Build a modern admin dashboard with charts, tables, user management, and real-time data visualization.`,
    technicalRequirements: [
      "Vue 3 Composition API",
      "Chart.js for visualizations",
      "REST API integration",
      "Responsive design"
    ],
    details: {
      postedDate: "2025-09-28",
      deadline: "2025-10-20",
      bountyReward: "$1800",
      teamSize: "1-3 Developers"
    },
    languages: ["JavaScript"],
    skills: ["Vue.js", "Frontend", "Chart.js", "API Integration", "Tailwind CSS"],
    milestoneDetails: []
  },
  {
    id: "11",
    name: "Restaurant Management System",
    image: "https://cdn.dribbble.com/userupload/4849063/file/original-8b2e7f5e5a8f5f5e5f5e5f5e5f5e5f5e.jpg",
    milestones: 7,
    milestonesDone: 1,
    daysRemaining: 50,
    progress: 14,
    contributors: [
      { name: "FS", color: "#eb4d4b" },
      { name: "BE", color: "#6ab04c" },
      { name: "DB", color: "#f9ca24" },
      { name: "UI", color: "#7ed6df" },
    ],
    urgentDaysLeft: 20,
    description: `Complete restaurant management system with POS, inventory, orders, reservations, and reporting.`,
    technicalRequirements: [
      "Full stack web application",
      "Real-time order management",
      "Inventory tracking",
      "Payment processing"
    ],
    details: {
      postedDate: "2025-09-30",
      deadline: "2025-11-30",
      bountyReward: "$7500",
      teamSize: "4-8 Developers"
    },
    languages: ["JavaScript", "TypeScript", "Python"],
    skills: ["Full Stack", "React", "Node.js", "PostgreSQL", "Payment APIs"],
    milestoneDetails: []
  },
  {
    id: "12",
    name: "Android Kotlin Chat Application",
    image: "https://cdn.dribbble.com/userupload/2890653/file/original-5b6c5c5c5c5c5c5c5c5c5c5c5c5c5c5c.png",
    milestones: 5,
    milestonesDone: 0,
    daysRemaining: 40,
    progress: 0,
    contributors: [
      { name: "AN", color: "#ff6348" },
      { name: "KT", color: "#2ed573" },
    ],
    urgentDaysLeft: 18,
    description: `Build a modern Android chat app with real-time messaging, media sharing, and end-to-end encryption.`,
    technicalRequirements: [
      "Kotlin for Android",
      "Firebase Realtime Database",
      "End-to-end encryption",
      "Media upload/download"
    ],
    details: {
      postedDate: "2025-10-03",
      deadline: "2025-11-15",
      bountyReward: "$3200",
      teamSize: "2-3 Developers"
    },
    languages: ["Kotlin"],
    skills: ["Android Development", "Kotlin", "Firebase", "Security", "UI/UX"],
    milestoneDetails: []
  },
  {
    id: "13",
    name: "Marketing Landing Page Design",
    image: "https://cdn.dribbble.com/userupload/3498234/file/original-f5b5e5e5e5e5e5e5e5e5e5e5e5e5e5e5.jpg",
    milestones: 3,
    milestonesDone: 2,
    daysRemaining: 5,
    progress: 67,
    contributors: [
      { name: "DG", color: "#ff7675" },
    ],
    urgentDaysLeft: 2,
    description: `Create a stunning marketing landing page with animations, responsive design, and conversion optimization.`,
    technicalRequirements: [
      "Modern UI/UX design",
      "Smooth animations",
      "Mobile-first approach",
      "SEO optimized"
    ],
    details: {
      postedDate: "2025-10-05",
      deadline: "2025-10-12",
      bountyReward: "$850",
      teamSize: "1-2 Developers"
    },
    languages: ["JavaScript"],
    skills: ["Frontend", "UI/UX", "Design", "HTML/CSS", "Animation"],
    milestoneDetails: []
  },
  {
    id: "14",
    name: "DevOps CI/CD Pipeline Setup",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*K9P9V9V9V9V9V9V9V9V9V9.png",
    milestones: 4,
    milestonesDone: 1,
    daysRemaining: 20,
    progress: 25,
    contributors: [
      { name: "DO", color: "#fd79a8" },
      { name: "OPS", color: "#fdcb6e" },
    ],
    urgentDaysLeft: 8,
    description: `Set up complete CI/CD pipeline with automated testing, deployment, and monitoring for microservices.`,
    technicalRequirements: [
      "Jenkins or GitLab CI",
      "Docker containers",
      "Kubernetes orchestration",
      "Monitoring tools"
    ],
    details: {
      postedDate: "2025-10-01",
      deadline: "2025-10-25",
      bountyReward: "$2800",
      teamSize: "2-3 Developers"
    },
    languages: ["Python", "JavaScript"],
    skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Jenkins"],
    milestoneDetails: []
  },
  {
    id: "15",
    name: "Game Development with Unity",
    image: "https://cdn.80.lv/api/upload/content/2e/images/61a8f8f8f8f8f8f8f8f8f8f8f8f8f8f8.jpg",
    milestones: 8,
    milestonesDone: 3,
    daysRemaining: 90,
    progress: 38,
    contributors: [
      { name: "GM", color: "#6c5ce7" },
      { name: "UN", color: "#00b894" },
      { name: "3D", color: "#ff7675" },
      { name: "SND", color: "#fab1a0" },
    ],
    urgentDaysLeft: 45,
    description: `Develop a 3D mobile game with Unity engine, including level design, character animation, and monetization.`,
    technicalRequirements: [
      "Unity 3D engine",
      "C# programming",
      "3D modeling and animation",
      "In-app purchases"
    ],
    details: {
      postedDate: "2025-09-15",
      deadline: "2025-12-15",
      bountyReward: "$9500",
      teamSize: "3-6 Developers"
    },
    languages: ["C++"],
    skills: ["Game Development", "Unity", "3D Modeling", "Animation", "Monetization"],
    milestoneDetails: []
  },
  {
    id: "16",
    name: "Data Visualization Dashboard",
    image: "https://cdn.dribbble.com/userupload/4398234/file/original-a5b5c5c5c5c5c5c5c5c5c5c5c5c5c5c5.png",
    milestones: 3,
    milestonesDone: 1,
    daysRemaining: 15,
    progress: 33,
    contributors: [
      { name: "DV", color: "#e17055" },
      { name: "BI", color: "#0984e3" },
    ],
    urgentDaysLeft: 7,
    description: `Create interactive data visualization dashboard with charts, graphs, and real-time data updates.`,
    technicalRequirements: [
      "D3.js or Chart.js",
      "Real-time data updates",
      "Export to PDF/Excel",
      "Responsive design"
    ],
    details: {
      postedDate: "2025-10-02",
      deadline: "2025-10-20",
      bountyReward: "$1650",
      teamSize: "1-2 Developers"
    },
    languages: ["JavaScript", "TypeScript"],
    skills: ["Data Visualization", "Frontend", "D3.js", "React", "API Integration"],
    milestoneDetails: []
  },
  {
    id: "17",
    name: "Social Media Management Tool",
    image: "https://cdn.dribbble.com/userupload/3845234/file/original-b6c6d6d6d6d6d6d6d6d6d6d6d6d6d6d6.jpg",
    milestones: 6,
    milestonesDone: 0,
    daysRemaining: 55,
    progress: 0,
    contributors: [
      { name: "SM", color: "#ff6b81" },
      { name: "MG", color: "#2ed573" },
      { name: "API", color: "#1e90ff" },
    ],
    urgentDaysLeft: 25,
    description: `Build a comprehensive social media management platform with scheduling, analytics, and multi-account support.`,
    technicalRequirements: [
      "Multi-platform integration",
      "Post scheduling",
      "Analytics dashboard",
      "Team collaboration"
    ],
    details: {
      postedDate: "2025-09-28",
      deadline: "2025-11-25",
      bountyReward: "$6200",
      teamSize: "3-5 Developers"
    },
    languages: ["JavaScript", "Python"],
    skills: ["Marketing", "Social Media", "API Integration", "Full Stack", "Analytics"],
    milestoneDetails: []
  },
  {
    id: "18",
    name: "Browser Extension for Productivity",
    image: "https://cdn.dribbble.com/userupload/2934523/file/original-c7d7e7e7e7e7e7e7e7e7e7e7e7e7e7e7.png",
    milestones: 3,
    milestonesDone: 2,
    daysRemaining: 7,
    progress: 67,
    contributors: [
      { name: "EX", color: "#74b9ff" },
    ],
    urgentDaysLeft: 3,
    description: `Develop a Chrome extension for productivity tracking with time management, website blocking, and reports.`,
    technicalRequirements: [
      "Chrome Extension API",
      "Local storage",
      "Time tracking",
      "Statistics dashboard"
    ],
    details: {
      postedDate: "2025-10-04",
      deadline: "2025-10-13",
      bountyReward: "$750",
      teamSize: "1-2 Developers"
    },
    languages: ["JavaScript"],
    skills: ["Browser Extensions", "Chrome API", "Frontend", "Data Visualization"],
    milestoneDetails: []
  },
  {
    id: "19",
    name: "API Development with FastAPI",
    image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    milestones: 4,
    milestonesDone: 1,
    daysRemaining: 25,
    progress: 25,
    contributors: [
      { name: "AP", color: "#55efc4" },
      { name: "PY", color: "#fdcb6e" },
    ],
    urgentDaysLeft: 10,
    description: `Build RESTful API with FastAPI including authentication, database integration, and comprehensive documentation.`,
    technicalRequirements: [
      "FastAPI framework",
      "JWT authentication",
      "PostgreSQL database",
      "OpenAPI documentation"
    ],
    details: {
      postedDate: "2025-10-01",
      deadline: "2025-10-30",
      bountyReward: "$2100",
      teamSize: "2-3 Developers"
    },
    languages: ["Python"],
    skills: ["Backend", "FastAPI", "API Development", "PostgreSQL", "Authentication"],
    milestoneDetails: []
  },
  {
    id: "20",
    name: "Logo Design and Branding Package",
    image: "https://cdn.dribbble.com/userupload/4298234/file/original-d8e8f8f8f8f8f8f8f8f8f8f8f8f8f8f8.jpg",
    milestones: 2,
    milestonesDone: 0,
    daysRemaining: 10,
    progress: 0,
    contributors: [
      { name: "LG", color: "#a29bfe" },
    ],
    urgentDaysLeft: 5,
    description: `Create complete branding package including logo design, color palette, typography, and brand guidelines.`,
    technicalRequirements: [
      "Logo in multiple formats",
      "Brand style guide",
      "Color palette",
      "Typography selection"
    ],
    details: {
      postedDate: "2025-10-05",
      deadline: "2025-10-18",
      bountyReward: "$580",
      teamSize: "1 Designer"
    },
    languages: ["JavaScript"],
    skills: ["Design", "UI/UX", "Branding", "Marketing", "Graphic Design"],
    milestoneDetails: []
  }
];
