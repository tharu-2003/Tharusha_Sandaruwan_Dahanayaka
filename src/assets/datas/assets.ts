// ----------- IMPORTS -----------

// Frontend Icons
import reactIcon from "../images/react-icon.svg";
import expoIcon from "../images/expo-icon.png";
import typescriptIcon from "../images/typescript-icon.svg";
import javascriptIcon from "../images/javascript-icon.svg";
import tailwindIcon from "../images/tailwind-icon.svg";
import bootstrapIcon from "../images/bootstrap-icon.svg";
import htmlIcon from "../images/html-icon.svg";
import cssIcon from "../images/css-icon.svg";
import reduxIcon from "../images/redux-icon.svg";
import jqueryIcon from "../images/jquery-icon.svg";

// Backend Icons
import javaIcon from "../images/java-icon.svg";
import springIcon from "../images/spring-icon.svg";
import nodeIcon from "../images/nodejs-icon.svg";
import expressIcon from "../images/express-icon.svg";
import pythonIcon from "../images/python-icon.svg";
import mongodbIcon from "../images/mongodb-icon.svg";
import mysqlIcon from "../images/mysql-icon.svg";
import dockerIcon from "../images/docker-icon.svg";
import postmanIcon from "../images/postman-icon.svg";

// Tools Icons
import ideaIcon from "../images/idea-icon.svg";
import vscodeIcon from "../images/vscode-icon.svg";
import figmaIcon from "../images/figma-icon.svg";
import gitIcon from "../images/git-icon.svg";
import githubIcon from "../images/github-icon.svg";
import canvaIcon from "../images/canva-icon.svg";



// Project Images
import project_image1 from "../projectImages/project_image1.png";
import project_image2 from "../projectImages/project_image2.png";
import project_image3 from "../projectImages/project_image3.png";
import project_image4 from "../projectImages/project_image4.png";
import project_image5 from "../projectImages/project_image5.png";
import project_image6 from "../projectImages/project_image6.png";
import project_image7 from "../projectImages/project_image7.png";
import project_image8 from "../projectImages/project_image8.png";
import project_image9 from "../projectImages/project_image9.png";
import project_image10 from "../projectImages/project_image10.png";
import project_image11 from "../projectImages/project_image11.png";
import project_image12 from "../projectImages/project_image12.png";
import project_image13 from "../projectImages/project_image13.png";
import project_image14 from "../projectImages/project_image14.png";
import project_image15 from "../projectImages/project_image15.png";
import project_image16 from "../projectImages/project_image16.png";
import project_image17 from "../projectImages/project_image17.png";



// Experience Images
import experience_image1 from "../experienceImages/experience_image1.png";
// import experience_image2 from "../experienceImages/experience_image2.png";
// import experience_image3 from "../experienceImages/experience_image3.png";

//Content Images
import content_image1 from "../contentImages/content_images1.webp";



// ---------- TYPES ----------

export interface Content {
    _id: string; 
    title: string;
    description: string;
    date: string;
    category: "Video" | "Post"; 
    link: string;
    noteImage?: string;
    watchingTime?: string; 
    readTime?: string;    
}

export interface Experience {
    _id: string; 
    role: string;
    company: string;
    period: string;
    description: string;
    image: string;
    skills: string[];
    location: string;
    industry: string;
    mode: "Work" | "Education";
    priority: "High" | "Medium" | "Low"; 
    workModeStatements: string; 
    links: string; 
}

export interface Project {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  timeline: string;   // NEW
  role: string;       // NEW
  platform: string;   // NEW
  links: {
    github?: string;
    live?: string;
  };
}


export interface ToolItem {
  name: string;
  description: string;
  link: string;
  icon: string;
}

export interface ToolsDataType {
  frontend: ToolItem[];
  backend: ToolItem[];
  tools: ToolItem[];
}

export interface DashboardData {
  yearsOfExperience: number;
  projectsCount: number;
  technologiesCount: number;
}


// ---------- DATA ----------

export const projectCategories = [
  "All", // index 0

  // Mobile Development
  "Mobile", // index 1                      ////
  "Cross Platform App", // index 2
  "Android", // index 3
  "iOS", // index 4

  // Web Development
  "Web", // index 5                         ////
  "Frontend", // index 6                    ////
  "Full Stack", // index 7                  ////
  "Progressive Web App (PWA)", // index 8

  // Backend / Server
  "Backend", // index 9                     ////
  "REST API Service", // index 10
  "Microservices Project", // index 11
  "Cloud Backend", // index 12

  // Desktop / Software
  "Desktop", // index 13                    ////
  "Java", // index 14
  "Enterprise System", // index 15

  // AI / Data
  "AI", // index 16
  "Machine Learning Project", // index 17
  "Data Science Project", // index 18                        ////

  // Modern Tech Areas
  "Game", // index 19                        ////
  "IoT Application", // index 20
  "Blockchain Project", // index 21
  "DevOps Tool" // index 22
];


export const assets = {    
  // Project Images
  project_image1,
  project_image2,
  project_image3,
  project_image4,
  project_image5,
  project_image6,
  project_image7,
  project_image8,
  project_image9,
  project_image10,
  project_image11,
  project_image12,
  project_image13,
  project_image14,
  project_image15,
  project_image16,
  project_image17,


  // Experience Images
  experience_image1,
  // experience_image2,
  // experience_image3,


  // Content Images
  content_image1,


  // Frontend Icons
  reactIcon,
  expoIcon,
  typescriptIcon,
  javascriptIcon,
  tailwindIcon,
  bootstrapIcon,
  htmlIcon,
  cssIcon,
  reduxIcon,
  jqueryIcon,

  // Backend Icons
  javaIcon,
  springIcon,
  nodeIcon,
  expressIcon,
  pythonIcon,
  mongodbIcon,
  mysqlIcon,
  dockerIcon,
  postmanIcon,

  // Tools Icons
  ideaIcon,
  vscodeIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  canvaIcon,
};



// ----------- DUMMY DATA -----------

export const toolsData: ToolsDataType = {
  frontend: [
    { name: "React", description: "Frontend Library", link: "#", icon: reactIcon },
    { name: "Expo", description: "React Native Platform", link: "#", icon: expoIcon },
    { name: "TypeScript", description: "Programming Language", link: "#", icon: typescriptIcon },
    { name: "JavaScript", description: "Programming Language", link: "#", icon: javascriptIcon },
    { name: "Tailwind CSS", description: "CSS Framework", link: "#", icon: tailwindIcon },
    { name: "Bootstrap", description: "CSS Framework", link: "#", icon: bootstrapIcon },
    { name: "HTML", description: "Markup Language", link: "#", icon: htmlIcon },
    { name: "CSS", description: "Styling Language", link: "#", icon: cssIcon },
    { name: "Redux", description: "State Management", link: "#", icon: reduxIcon },
    { name: "jQuery", description: "JavaScript Library", link: "#", icon: jqueryIcon },
  ],

  backend: [
    { name: "Java", description: "Programming Language", link: "#", icon: javaIcon },
    { name: "Spring", description: "Java Framework", link: "#", icon: springIcon },
    { name: "Node.js", description: "Runtime Environment", link: "#", icon: nodeIcon },
    { name: "Express", description: "Node.js Framework", link: "#", icon: expressIcon },
    { name: "Python", description: "Programming Language", link: "#", icon: pythonIcon },
    { name: "MongoDB", description: "NoSQL Database", link: "#", icon: mongodbIcon },
    { name: "MySQL", description: "SQL Database", link: "#", icon: mysqlIcon },
    { name: "Docker", description: "Containerization", link: "#", icon: dockerIcon },
    { name: "Postman", description: "API Testing Tool", link: "#", icon: postmanIcon },
  ],

  tools: [
    { name: "IntelliJ IDEA", description: "Java IDE", link: "#", icon: ideaIcon },
    { name: "VS Code", description: "Code Editor", link: "#", icon: vscodeIcon },
    { name: "Figma", description: "Design Tool", link: "#", icon: figmaIcon },
    { name: "Git", description: "Version Control", link: "#", icon: gitIcon },
    { name: "GitHub", description: "Code Hosting", link: "#", icon: githubIcon },
    { name: "Canva", description: "Design Platform", link: "#", icon: canvaIcon },
  ],
};


export const projectsData: Project[] = [
  // Tic-Tac-Toe Game
  {
    _id: "1",
    title: "Tic-Tac-Toe Game",
    category: projectCategories[19],
    description: "I’m excited to share a project I’ve been working on—a \"Tic-Tac-Toe Game\" built using \"JavaFX\". While it may look like a simple game, the logic under the hood was a fantastic challenge to implement!",
    image: project_image1,
    tags: [
            "#Java",
            "#JavaFX",
            "#MinimaxAlgorithm",
            "#MVCArchitecture",
          ],
    timeline: "2 Months (2024)",
    role: "Student at IJSE",
    platform: "OOP",
    links: {
      github: "https://github.com/tharu-2003/TicTacToy-Game.git"
    }
  },

  // Rapid Ride
  {
    _id: "2",
    title: "Rapid Ride",
    category: projectCategories[13],
    description: "I've developed RapidRide, a comprehensive desktop application designed to streamline cab service operations from booking to billing. This project showcases full-stack development principles applied to real-world business automation.",
    image: project_image2,
    tags: [
          "#Java",
          "#JavaFX",
          "#MySQL",
          "#LayeredArchitecture",
        ],
    timeline: "3 Months (2024)",
    role: "Student at IJSE",
    platform: "Layered",
    links: {
      github: "https://github.com/tharu-2003/RapidRide.git"
    }
  },

  // Therapy Center
  {
    _id: "3",
    title: "Therapy Center",
    category: projectCategories[13],
    description: "A comprehensive management system designed for therapy centers to handle patient appointments, therapist schedules, and treatment records efficiently. This system streamlines the administrative workflow and improves patient management.",
    image: project_image3,
    tags: [
          "#Java",
          "#JavaFX",
          "#MySQL",
          "#Layered",
          "#Maven",
          "#Hibernate",
          "#jBCrypt"
        ],
    timeline: "2 Month (2024)",
    role: "Student at IJSE",
    platform: "ORM",
    links: {
      github: "https://github.com/tharu-2003/Therapy-Center.git"
    }
  },

  // Complaint System
  {
    _id: "4",
    title: "Complaint System",
    category: projectCategories[5],
    description: "A web-based application developed to manage and track employee complaints within a municipal IT division. It supports role-based access for Employees and Admins, allowing efficient complaint submission, status tracking, and resolution management.",
    image: project_image4,
    tags: [
      "#Jakarta EE", 
      "#JSP", 
      "#Servlets", 
      "#MySQL", 
      "Html",
      "CSS",
      "#Apache Tomcat", 
      "#MVC", 
      "#Maven", 
      "#Java"
    ],
    timeline: "1 Month (2024)",
    role: "Student at IJSE",
    platform: "Jakarta EE",
    links: {
      github: "https://github.com/tharu-2003/Complaint-Management-System.git",
      live: "https://www.youtube.com/watch?v=7zMqkyEsu80"
    }
  },

  // Internet Technologies Lessons Site
  {
    _id: "5",
    title: "Internet Technologies Lessons Site",
    category: projectCategories[5],
    description: "An educational platform designed to provide structured lessons on Internet Technologies. It features a clean, responsive interface to help students and developers learn web concepts, protocols, and modern development practices effectively.",
    image: project_image5,
    tags: [
      "#HTML", 
      "#CSS", 
      "#JavaScript", 
      "#Web Development", 
      "#Education", 
      "#Responsive Design",
      "#Firebase"
    ],
    timeline: "2024 - 2025",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/Internet-Technologies-Lessons-Site.git",
      live: "https://internet-technologies-72.firebaseapp.com/"
    }
  },

  // Interactive Web Calculator
  {
    _id: "6",
    title: "Interactive Web Calculator",
    category: projectCategories[5],
    description: "A functional and responsive web-based calculator built to handle basic arithmetic operations. This project focuses on DOM manipulation, event handling in JavaScript, and sleek UI design using CSS.",
    image: project_image6,
    tags: [
      "#HTML", 
      "#CSS", 
      "#JavaScript", 
      "#DOM Manipulation",  
      "#Responsive Design",
      "#Frontend",
      "#Firebase"
    ],
    timeline: "1 Week (2024)",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/IT-Assignment-06-Calculator.git?authuser=0",
      live: "https://assignment-06-calculator.web.app/?authuser=0"
    }
  },

  // Web-Based POS System
  {
    _id: "7",
    title: "Web-Based POS System",
    category: projectCategories[5],
    description: "A comprehensive Point of Sale system developed to manage inventory, customer details, and sales transactions. This project demonstrates CRUD operations using jQuery AJAX, JavaScript, and local storage/database integration with a professional user interface.",
    image: project_image7,
    tags: [
      "#HTML", 
      "#CSS", 
      "#JavaScript",
      "#MVC", 
      "#DOM Manipulation",  
      "#Responsive Design",
      "#SPA",
      "#Frontend",
      "$CRUD Operations",
      "#Firebase"
    ],
    timeline: "1 Months (2024)",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/Assignment-08-POS.git?authuser=0",
      live: "https://assignment-08--pos.web.app/?authuser=0"
    }
  },

  // 2D Highway Racer Game
  {
    _id: "8",
    title: "2D Highway Racer Game",
    category: projectCategories[19],
    description: "A fast-paced 2D arcade-style racing game developed using pure JavaScript. The game features collision detection, score tracking, and increasing difficulty levels, providing an engaging user experience with smooth animations.",
    image: project_image8,
    tags: [
      "#JavaScript",
      "#HTML", 
      "#CSS", 
      "#Game Logic",  
      "#Responsive Design",
      "#Frontend",
      "#Firebase"
    ],
    timeline: "2 Months (2025)",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/CarGame.git",
      live: "https://assignment-09-c43f8.web.app/?authuser=0"
    }
  },

  // Sri Lankan Foods Exploration Site
  {
    _id: "9",
    title: "Sri Lankan Foods Exploration Site",
    category: projectCategories[6],
    description: "A visually appealing website dedicated to showcasing the rich culinary heritage of Sri Lanka. It features various traditional recipes and food categories, emphasizing responsive design and interactive elements to provide a smooth user experience.",
    image: project_image9,
    tags: [
      "#HTML", 
      "#CSS", 
      "#JavaScript",
      "#UI/UX",  
      "#Responsive Design",
      "#Frontend",
      "#Firebase",
      "#Food Exploration"
    ],
    timeline: "1 Months (2025)",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/Sri-Lankan-Foods.git?authuser=0",
      live: "https://recipe-website-a3813.web.app/?authuser=0"
    }
  },

  // Cinnamon Life Luxury Apartments Clone
  {
    _id: "10",
    title: "Cinnamon Life Luxury Apartments Clone",
    category: projectCategories[6],
    description: "A visually stunning web project that replicates the premium and luxury aesthetic of the Cinnamon Life website. This project focuses on high-quality image presentation, elegant typography, and smooth layouts to showcase luxury real estate and lifestyle services.",
    image: project_image10,
    tags: [
      "#Bootstrap",
      "#HTML", 
      "#CSS", 
      "#JavaScript",
      "#UI/UX",  
      "#Responsive Design",
      "#Frontend",
      "#Luxury Aesthetic",
      "#Firebase"
    ],
    timeline: "1 Months (2025)",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/Cinnamon-Life.git?authuser=0",
      live: "https://cinnamon-life.web.app/?authuser=0"
    }
  },

  // Discover Sri Lanka
  {
    _id: "11",
    title: "Discover Sri Lanka",
    category: projectCategories[6],
    description: "A comprehensive travel platform designed to promote Sri Lankan tourism. This project features high-quality destination showcases, optimized SEO meta tags for better search visibility, and a fully responsive interface to provide travelers with a seamless experience across all devices.",
    image: project_image11,
    tags: [
      "#HTML", 
      "#CSS", 
      "#JavaScript",
      "#UI/UX",  
      "#Responsive Design",
      "#Frontend",
      "#Firebase",
      "#SEO Optimization",
      "#Travel Platform"
    ],
    timeline: "1 Months (2025)",
    role: "Student at IJSE",
    platform: "IT",
    links: {
      github: "https://github.com/tharu-2003/Discover-Sri-Lanka.git",
      live: "https://discover-sri-lanka-30fcc.web.app"
    }
  },

  // Multi-Client Terminal Chat Application
  {
    _id: "12",
    title: "Multi-Client Terminal Chat Application",
    category: projectCategories[9],
    description: "A real-time terminal-based chat application developed using Java Socket Programming. It enables multiple clients to connect to a central server and exchange messages simultaneously, demonstrating key concepts in multi-threading and network communication.",
    image: project_image12,
    tags: [
      "#Java", 
      "#Socket Programming", 
      "#Multi-threading", 
      "#Client-Server Architecture", 
      "#Terminal UI",
      "#Networking",
      "#Chat Application"
    ],
    timeline: "1 Week (2025)",
    role: "Student at IJSE",
    platform: "INP",
    links: {
      github: "https://github.com/tharu-2003/MultiClient-Terminal-Project-.git"
    }
  },

  // Real-Time Group Chat Application
  {
    _id: "13",
    title: "Real-Time Group Chat Application",
    category: projectCategories[13],
    description: "A feature-rich group chat application developed using Java Sockets and JavaFX. It allows multiple users to join a common chat room, send real-time text messages, and share images. The application utilizes multi-threading to handle concurrent client connections seamlessly.",
    image: project_image13,
    tags: [
      "#Java", 
      "JavaFX",
      "#Socket Programming", 
      "#Multi-threading", 
      "#Client-Server Architecture", 
      "#Networking",
      "#Chat Application",
      "#Desktop App"
    ],
    timeline: "2 Week (2025)",
    role: "Student at IJSE",
    platform: "INP",
    links: {
      github: "https://github.com/tharu-2003/Group-Chat.git"
    }
  },

  // Learn Loop
  {
    _id: "14",
    title: "Learn Loop",
    category: projectCategories[7],
    description: "A comprehensive Learning Management System (LMS) designed to streamline education delivery. It features specialized modules for course management, student enrollment, and progress tracking, providing a robust digital environment for both educators and learners.",
    image: project_image14,
    tags: [
      "#Java", 
      "#Mevan",
      "#Html",
      "#CSS",
      "#MySQL",
      "#Cloudinary",
      "#Gmail API",
      "#Socket Programming", 
      "#Multi-threading", 
      "#Web Application",
    ],
    timeline: "January 2025",
    role: "Student at IJSE",
    platform: "AAD",
    links: {
      github: "https://github.com/tharu-2003/LearnLoop.git",
      live: "https://youtu.be/-dFuGJIvC0s?si=znLzZmyFDLKbOQsC"
    }
  },

  // Car Rental Management System
  {
    _id: "15",
    title: "Car Rental Management System",
    category: projectCategories[7],
    description: "A professional and user-centric frontend for a Car Rental System. This platform allows users to browse available vehicles, view detailed specifications, and make reservations. It features a modern dashboard for managing fleet status and booking history with a focus on seamless user experience.",
    image: project_image15,
    tags: [
      "MERN Stack",
      "#MongoDB",
      "#Express.js",
      "#React",
      "#Node.js",
      "#Typescript",
      "#JWT Authentication",
      "#Refresh Token",
      "#Password Encryption", 
      "#AI Chatbot",
      "#Redux",
      "#Context API", 
      "#Axios", 
      "#Cloudinary", 
      "#Tailwind CSS", 
      "#Vercel",
      "#Modern UI",
      "#Vite",
      "#MVC",
      "#Motion Design", 
    ],
    timeline: "January - February 2026",
    role: "Student at IJSE",
    platform: "React",
    links: {
      github: "https://github.com/tharu-2003/CarRental-fe.git",
      live: "https://car-rental-fe-steel.vercel.app/"
    }
  },

  // Queue Management System
  {
    _id: "16",
    title: "Queue Management System",
    category: projectCategories[1],
    description: "A mobile solution designed to manage and monitor service queues in real time.This application enables service providers to efficiently organize customer flow.Users can join queues remotely without physically waiting in line.The app allows users to track their queue status from anywhere.",
    image: project_image16,
    tags: [
      "React Native",
      "Expo",
      "#MongoDB Atlas",
      "#Firebase",
      "#Firebase Authentication",
      "#Firebase Database",
      "#Firestore",
      "#Expo Camera",
      "#GraphQL",
      "#Typescript",
      "#Cloudinary", 
      "#Tailwind CSS", 
      "#Axios", 
      "#Node.js",
      "#Push Notifications",
      "#Real-Time Updates",
      "#Mobile App",
    ],
    timeline: "February - March 2026",
    role: "Student at IJSE",
    platform: "AMD",
    links: {
      github: "https://github.com/tharu-2003/Queue-Management-App.git"
    }
  },

  // Vitality Health Network
  {
    _id: "17",
    title: "Vitality Health Network",
    category: projectCategories[18],

    description: "A Health Informatics solution for Vitality Health Network (VHN) to identify high-risk diabetic patients using the custom Vitality Complexity Index (VCI) and automated ICD-9 enrichment via web scraping.",

    image: project_image17,
    tags: [
      "#Python", 
      "#Pandas", 
      "#BeautifulSoup", 
      "#Data Analytics", 
      "#Healthcare"
    ],
    timeline: "January 2026",
    role: "Student at IJSE",
    platform: "Python",
    links: {
      github: "https://github.com/tharu-2003/Vitality-Health-Network.git"
    }
  },

];


export const experiencesData: Experience[] = [
  {
    _id: "1",
    role: "GCE Ordinary Level",
    company: "Department of Examinations, Sri Lanka",
    period: "2020 - 2021",
    description:
      "Achieved 9A passes including Mathematics and English.",
    image: experience_image1,
    skills: ["Mathematics", "English", "Science", "General Knowledge"],
    location: "Sri Lanka",
    industry: "General Education",
    mode: "Education",
    priority: "Medium",
    workModeStatements: "Full-time secondary education",
    links: ""
  },
  {
    _id: "2",
    role: "GCE Advanced Level – Mathematics Stream",
    company: "Department of Examinations, Sri Lanka",
    period: "2022 - 2024",
    description:
      "Completed Advanced Level in Mathematics stream.",
    image: experience_image1,
    skills: ["Mathematics", "Physics", "ICT", "Problem Solving"],
    location: "Sri Lanka",
    industry: "General Education",
    mode: "Education",
    priority: "Low",
    workModeStatements: "Full-time secondary education",
    links: ""
  },
  {
    _id: "3",
    role: "Higher National Diploma in Software Engineering",
    company: "Institute of Java & Software Engineering (IJSE)",
    period: "2024 - Present",
    description:
      "Specializing in full-stack development, OOP principles, enterprise application architecture, and database systems.",
    image: experience_image1,
    skills: ["Java", "Spring Boot", "MySQL", "Hibernate", "JavaFX", "Architecture"],
    location: "Colombo, Sri Lanka",
    industry: "Software Engineering Education",
    mode: "Education",
    priority: "High",
    workModeStatements: "Full-time on-campus academic program",
    links: "https://ijse.lk"
  },
];



export const contentData: Content[] = [
  
    {
        _id: "1",
        title: "Mastering Spring Security with JWT",
        description:
        "Spring Security and JWT provide a powerful way to protect modern Spring Boot applications by ensuring only authorized users can access system resources. By implementing secure authentication and token-based authorization, developers can prevent data breaches, protect user data, and build reliable, production-ready systems that maintain user trust.",
        date: "Sep 29, 2025",
        category: "Post",
        watchingTime: "60min read",
        link: "https://medium.com/@sandaruwantharusha968/mastering-spring-security-with-jwt-your-ultimate-guide-to-bulletproof-authentication-4c6f36ac9877",
        noteImage: content_image1
    },
    {
        _id: "2",
        title: "How to Talk to a Computer",
        description:
        "Complete beginner wondering where to start your journey in tech? This video is designed for you. We break down the core Programming Fundamentals that every developer needs to know before diving into complex projects.",
        date: "Feb 10, 2026",
        category: "Video",
        readTime: "7min watch",
        link: "https://youtu.be/zr1Bdqjglhk?si=EeoPJaYMsJF1WpRT",
    },
    {
        _id: "3",
        title: "A Guide to MySQL Databases (Part 1)",
        description:
        "Are you a student starting your journey in Software Engineering, or just curious about how data is stored in the apps you use every day? In this video, I break down the core concepts of Databases in the simplest way possible!",
        date: "Feb 11, 2026",
        category: "Video",
        readTime: "7min watch",
        link: "https://youtu.be/JWkMz1ea5QU?si=r8XkBqIRkcDHWj4W",
    },
    {
        _id: "4",
        title: "Demystifying Databases (Part 2)",
        description:
        "Welcome back to Part 2 of my Database series! In the first video, we covered the  \"what\" and \"why\" of databases. Now, it’s time to get our hands dirty with MySQL Queries.",
        date: "Feb 12, 2026",
        category: "Video",
        readTime: "8min watch",
        link: "https://youtu.be/rTyLz8O6dmg?si=iDrkq7UKOycY797F",
    },

];

const JOURNEY_START_DATE = new Date("2024-01-01");
const currentDate = new Date();
const yearsOfExperience = currentDate.getFullYear() - JOURNEY_START_DATE.getFullYear();
const projectsCount = projectsData.length;

const technologiesCount =
  toolsData.frontend.length +
  toolsData.backend.length +
  toolsData.tools.length;

export const DashboardData: DashboardData = {
  yearsOfExperience,
  projectsCount,
  technologiesCount,
};

export const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return "";

  let videoId = "";

  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  } else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1].split("?")[0];
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
};

