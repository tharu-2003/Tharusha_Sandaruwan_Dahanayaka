// ----------- IMPORTS -----------

import project_image1 from "../projectImages/project_image1.png";
import project_image2 from "../projectImages/project_image2.png";
import project_image3 from "../projectImages/project_image3.png";

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
        _id: "1", // Navigate karanna ID ekak damma
        role: "Software Engineering Student",
        company: "IJSE - Institute of Software Engineering",
        period: "2024 - Present",
        description: "Focusing on Full-Stack Development, Architecture, and industry-level coding standards. Currently in the second year of the GDSE program.",
        skills: ["Java", "MySQL", "Architecture"],
    },
    {
        _id: "2",
        role: "Full-Stack Developer (Self-Employed/Projects)",
        company: "Personal Projects",
        period: "2025 - 2026",
        description: "Developed various applications including 'RapidRide' (Taxi Booking App) and data analysis tools using modern tech stacks.",
        skills: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    },
    {
        _id: "3",
        role: "Mobile App Developer",
        company: "Open Source / Freelance",
        period: "2025 - Present",
        description: "Specializing in building cross-platform mobile applications with React Native and Expo, focusing on performance and UI/UX.",
        skills: ["React Native", "Expo", "TypeScript"],
    },
    {
    _id: "4",
    role: "Frontend Developer Intern",
    company: "Tech Solutions Lanka",
    period: "2023 - 2024",
    description: "Worked on responsive UI development using React and Tailwind CSS. Collaborated with backend teams to integrate REST APIs.",
    skills: ["React", "Tailwind CSS", "JavaScript", "REST API"],
  },
  {
    _id: "5",
    role: "Backend Developer Trainee",
    company: "CodeLab Academy",
    period: "2023",
    description: "Built RESTful APIs using Spring Boot and handled database design using MySQL.",
    skills: ["Java", "Spring Boot", "MySQL", "Hibernate"],
  },
  {
    _id: "6",
    role: "Freelance Web Developer",
    company: "Fiverr / Upwork",
    period: "2024 - Present",
    description: "Developing custom websites and dashboards for clients worldwide using modern frontend frameworks.",
    skills: ["React", "Next.js", "Firebase", "CSS"],
  },
  {
    _id: "7",
    role: "UI/UX Developer",
    company: "Creative Software",
    period: "2024",
    description: "Designed and implemented modern UI components with focus on accessibility and performance.",
    skills: ["Figma", "Tailwind CSS", "React", "UX Research"],
  },
  {
    _id: "8",
    role: "Software Developer Intern",
    company: "InnovateX",
    period: "2024",
    description: "Contributed to enterprise software modules and fixed production bugs in Java-based applications.",
    skills: ["Java", "Spring", "Git", "Debugging"],
  },
  {
    _id: "9",
    role: "Cloud Application Developer",
    company: "Self Learning / Projects",
    period: "2025",
    description: "Built cloud-connected apps using Firebase and integrated authentication, storage, and hosting.",
    skills: ["Firebase", "Cloud Functions", "Authentication", "Hosting"],
  },
  {
    _id: "10",
    role: "Data Analysis Developer",
    company: "Academic Projects",
    period: "2025",
    description: "Developed data visualization dashboards and analysis tools using modern JS libraries.",
    skills: ["JavaScript", "Chart.js", "Data Analysis", "API Integration"],
  },
  {
    _id: "11",
    role: "React Native Developer Intern",
    company: "MobileTech Lanka",
    period: "2025",
    description: "Built mobile app screens and integrated APIs while maintaining clean architecture practices.",
    skills: ["React Native", "Expo", "Axios", "TypeScript"],
  },
  {
    _id: "12",
    role: "Full Stack Developer Intern",
    company: "Startup Hub",
    period: "2025",
    description: "Worked across frontend and backend to build startup MVP products with agile methodology.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    _id: "13",
    role: "Open Source Contributor",
    company: "GitHub Community",
    period: "2024 - Present",
    description: "Contributed to open-source projects, fixed bugs, and improved documentation.",
    skills: ["Git", "GitHub", "Collaboration", "Code Review"],
  },
];

export const contentData: Content[] = [
    {
        _id: "1", // Content ekata unique identifier ekak damma
        title: "How to Build a Real-time Chat App",
        description:
        "Me video eken mama kiyala denawa React saha Firebase use karala real-time chat application ekak hadana widiya step-by-step.",
        date: "Feb 11, 2026",
        category: "Video",
        watchingTime: "18min watch",
        link: "https://youtube.com/your-video-link",
    },
    {
        _id: "2",
        title: "My Experience with Java and Spring Boot",
        description:
        "Software engineering igena ganna kenekuta Java backend development kiyanne godak watina skill ekak. Me mage experience eka.",
        date: "Feb 08, 2026",
        category: "Post",
        readTime: "6min read",
        link: "/blog/java-experience",
    },
    {
        _id: "3",
        title: "React Native Debugging Tips",
        description:
        "React Native apps develop karaddi ena common errors saha ewa solve karaganna lesima widi me video eken balanna puluwan.",
        date: "Jan 30, 2026",
        category: "Video",
        watchingTime: "12min watch",
        link: "https://youtube.com/debugging-video",
    },
    {
        _id: "4", // Content ekata unique identifier ekak damma
        title: "How to Build a Real-time Chat Appaaaaaaaaaa aaaaaaaaaaaaa",
        description:
        "Me video eken mama kiyala denawa React saha Firebase use karala real-time chat application ekak hadana widiya step-by-step.",
        date: "Feb 11, 2026",
        category: "Video",
        watchingTime: "18min watch",
        link: "https://youtube.com/your-video-link",
    },
    {
        _id: "5",
        title: "My Experience with Java and Spring Boot bbbbbbbbbb bbbbbbbb",
        description:
        "Software engineering igena ganna kenekuta Java backend development kiyanne godak watina skill ekak. Me mage experience eka.",
        date: "Feb 08, 2026",
        category: "Post",
        readTime: "6min read",
        link: "/blog/java-experience",
    },
    {
        _id: "6",
        title: "React Native Debugging Tips cccccc ccccccccc",
        description:
        "React Native apps develop karaddi ena common errors saha ewa solve karaganna lesima widi me video eken balanna puluwan.",
        date: "Jan 30, 2026",
        category: "Video",
        watchingTime: "12min watch",
        link: "https://youtube.com/debugging-video",
    },
    {
        _id: "7",
        title: "My Experience with Java and Spring Boot dddd ddddddddddd dd",
        description:
        "Software engineering igena ganna kenekuta Java backend development kiyanne godak watina skill ekak. Me mage experience eka.",
        date: "Feb 08, 2026",
        category: "Post",
        readTime: "6min read",
        link: "/blog/java-experience",
    },
    {
        _id: "8",
        title: "React Native Debugging Tips eeeee eeeeeeee ",
        description:
        "React Native apps develop karaddi ena common errors saha ewa solve karaganna lesima widi me video eken balanna puluwan.",
        date: "Jan 30, 2026",
        category: "Video",
        watchingTime: "12min watch",
        link: "https://youtube.com/debugging-video",
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
