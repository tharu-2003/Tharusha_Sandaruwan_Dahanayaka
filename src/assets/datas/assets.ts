// ----------- IMPORTS -----------

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

import javaIcon from "../images/java-icon.svg";
import springIcon from "../images/spring-icon.svg";
import nodeIcon from "../images/nodejs-icon.svg";
import expressIcon from "../images/express-icon.svg";
import pythonIcon from "../images/python-icon.svg";
import mongodbIcon from "../images/mongodb-icon.svg";
import mysqlIcon from "../images/mysql-icon.svg";
import dockerIcon from "../images/docker-icon.svg";
import postmanIcon from "../images/postman-icon.svg";

import ideaIcon from "../images/idea-icon.svg";
import vscodeIcon from "../images/vscode-icon.svg";
import figmaIcon from "../images/figma-icon.svg";
import gitIcon from "../images/git-icon.svg";
import githubIcon from "../images/github-icon.svg";
import canvaIcon from "../images/canva-icon.svg";

// ---------- TYPES ----------

export interface Content {
    _id: string; // Content ekata unique identifier ekak damma
    title: string;
    description: string;
    date: string;
    category: "Video" | "Post"; // Category eka me deken ekak pamanak wenna limit kalaa
    link: string;
    watchingTime?: string; // Optional field (Video wala pamanak thiyena nisa)
    readTime?: string;     // Optional field (Post wala pamanak thiyena nisa)
}

export interface Experience {
    _id: string; // Experience ekata unique identifier ekak damma
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[]; // Oya use karapu technologies list ekak widiyata
    location: string;
    industry: string; // e.g. "Software Development", "Education", "Finance", etc.
    mode: "Work" | "Education"; // Experience eka work experience da education experience da kiyala pennanna
    workModeStatements: string; // Work experience nam work mode ekata adala statements, education nam education mode ekata adala statements
    links: string; // Company website, LinkedIn page, etc.
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



export const projectCategories = [
  "All", // index 0

  // Mobile Development
  "Mobile", // index 1                        ////
  "Cross Platform App", // index 2
  "Android", // index 3
  "iOS", // index 4

  // Web Development
  "Web", // index 5                         ////
  "Frontend", // index 6
  "Full Stack", // index 7
  "Progressive Web App (PWA)", // index 8

  // Backend / Server
  "Backend", // index 9
  "REST API Service", // index 10
  "Microservices Project", // index 11
  "Cloud Backend", // index 12

  // Desktop / Software
  "Desktop", // index 13                        ////
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
  {
    _id: "1",
    title: "RapidRide",
    category: projectCategories[1],
    description: "A real-time taxi booking application built with React Native and Firebase.",
    image: project_image1,
    tags: ["React Native", "Firebase", "Tailwind CSS"],
    timeline: "2 Months (2024)",
    role: "Fullstack Developer",
    platform: "Cross-Platform Mobile App",
    links: {
      github: "https://github.com/your-username/RapidRide",
      live: "https://rapidride-demo.vercel.app"
    }
  },

  {
    _id: "2",
    title: "Queue Management System",
    category: projectCategories[9],
    description: "A robust Java-based application designed to manage customer flow.",
    image: project_image2,
    tags: ["Java", "MySQL", "Data Structures"],
    timeline: "3 Months (2024)",
    role: "Backend Developer / Student Project",
    platform: "Desktop Application",
    links: {
      github: "https://github.com/your-username/queue-manager"
    }
  },

  {
    _id: "3",
    title: "Modern Calculator",
    category: projectCategories[1],
    description: "A clean and functional calculator web app focused on modern UI/UX.",
    image: project_image3,
    tags: ["React", "JavaScript", "CSS3"],
    timeline: "1 Month (2024)",
    role: "Frontend Developer",
    platform: "Web Application",
    links: {
      github: "https://github.com/your-username/IT-Assignment-06-Calculator",
      live: "https://my-calculator.vercel.app"
    }
  }
];


export const experiencesData: Experience[] = [
  {
    _id: "1",
    role: "Software Engineering Student",
    company: "IJSE - Institute of Software Engineering",
    period: "2024 - Present",
    description: "Focusing on Full-Stack Development, Architecture, and industry-level coding standards. Currently in the second year of the GDSE program.",
    skills: ["Java", "MySQL", "Architecture"],
    location: "Colombo, Sri Lanka",
    industry: "Education",
    mode: "Education",
    workModeStatements: "Learning core software engineering concepts and full-stack development.",
    links: "https://ijse.lk/"
  },
  {
    _id: "2",
    role: "Full-Stack Developer (Self-Employed/Projects)",
    company: "Personal Projects",
    period: "2025 - 2026",
    description: "Developed various applications including 'RapidRide' (Taxi Booking App) and data analysis tools using modern tech stacks.",
    skills: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    location: "Remote",
    industry: "Software Development",
    mode: "Work",
    workModeStatements: "Designing and implementing scalable software solutions.",
    links: "https://github.com/tharusha/rapidride"
  },
  {
    _id: "3",
    role: "Mobile App Developer",
    company: "Open Source / Freelance",
    period: "2025 - Present",
    description: "Specializing in building cross-platform mobile applications with React Native and Expo, focusing on performance and UI/UX.",
    skills: ["React Native", "Expo", "TypeScript"],
    location: "Remote",
    industry: "Software Development",
    mode: "Work",
    workModeStatements: "Leading technical implementation and system architecture.",
    links: "https://github.com/tharusha/mobile-projects"
  },
  {
    _id: "4",
    role: "Frontend Developer Intern",
    company: "Tech Solutions Lanka",
    period: "2023 - 2024",
    description: "Worked on responsive UI development using React and Tailwind CSS. Collaborated with backend teams to integrate REST APIs.",
    skills: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    location: "Colombo, Sri Lanka",
    industry: "Software Development",
    mode: "Work",
    workModeStatements: "Implementing responsive UI components.",
    links: "https://techsolutions.lk/"
  },
  {
    _id: "5",
    role: "Backend Developer Trainee",
    company: "CodeLab Academy",
    period: "2023",
    description: "Built RESTful APIs using Spring Boot and handled database design using MySQL.",
    skills: ["Java", "Spring Boot", "MySQL", "Hibernate"],
    location: "Colombo, Sri Lanka",
    industry: "Software Development",
    mode: "Work",
    workModeStatements: "Developing backend APIs.",
    links: "https://codelab.lk/"
  },
  // ... Continue similarly for all remaining experiences
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

