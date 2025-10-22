// Mock data for assigned bounties
export const assignedBountiesData = [
  {
    id: "123",
    title: "Convert Yolo World model to TFLite",
    status: "in-progress",
    milestone: "Milestone Name",
    role: "Machine Learning Engineer",
    earnings: "$4000",
    daysRemaining: 5,
    image: "https://images.unsplash.com/photo-1520975922284-4cfa88f0ff5b?q=80&w=1600&auto=format&fit=crop",
    description: "We are currently working on integrating libonnxruntime into our Unreal Engine 5.4 project targeting iOS.",
    requirements: [
      "Unreal Engine plugin development for iOS",
      "ONNX Runtime or native libraries integration",
      "iOS build pipelines and crash debugging"
    ],
    languages: ["Python", "C++", "Objective-C", "Swift"],
    skills: [
      "Crash Debugging",
      "Xcode", 
      "Model Conversion",
      "TFLite",
      "Static Libraries",
      "Ultralytics",
      "ONNX Runtime",
      "Swift"
    ],
    github: "https://github.com/microsoft/onnxruntime",
    email: "susan@gmail.com",
    postedDate: "14 June, 2025",
    expireDate: "14 July, 2025",
    category: "Back-end",
    price: "$50k-80k",
    applicants: 120
  },
  {
    id: "456",
    title: "Build React Dashboard with Real-time Analytics",
    status: "awaiting-review",
    milestone: "Dashboard Milestone",
    role: "Frontend Developer", 
    earnings: "$3000",
    daysRemaining: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    description: "Create a comprehensive dashboard with real-time data visualization and analytics.",
    requirements: [
      "React.js development",
      "Real-time data integration",
      "Chart.js implementation"
    ],
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    skills: ["React", "Chart.js", "WebSocket", "API Integration"],
    github: "https://github.com/example/dashboard",
    email: "john@example.com",
    postedDate: "10 June, 2025",
    expireDate: "10 July, 2025", 
    category: "Front-end",
    price: "$30k-50k",
    applicants: 85
  },
  {
    id: "789",
    title: "Mobile App Backend API Development",
    status: "rejected",
    milestone: "API Milestone",
    role: "Backend Developer",
    earnings: "$2500", 
    daysRemaining: 1,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    description: "Develop a robust backend API for a mobile application with user authentication and data management.",
    requirements: [
      "Node.js and Express.js",
      "MongoDB database design",
      "JWT authentication"
    ],
    languages: ["JavaScript", "Node.js", "MongoDB"],
    skills: ["Express.js", "JWT", "MongoDB", "REST API"],
    github: "https://github.com/example/backend-api",
    email: "sarah@example.com", 
    postedDate: "5 June, 2025",
    expireDate: "5 July, 2025",
    category: "Back-end",
    price: "$25k-40k",
    applicants: 65
  }
];

// Initialize assigned bounties in localStorage if not exists
export const initializeAssignedBounties = () => {
  if (!localStorage.getItem("assignedBounties")) {
    localStorage.setItem("assignedBounties", JSON.stringify(assignedBountiesData));
  }
};
