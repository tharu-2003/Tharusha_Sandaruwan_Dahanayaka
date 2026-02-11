// ----------- IMPORTS -----------

import project_image1 from "../projectImages/project_image1.png";
import project_image2 from "../projectImages/project_image2.png";
import project_image3 from "../projectImages/project_image3.png";


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
    _id: string; // Project ekata unique identifier ekak damma
    title: string;
    category: string; // e.g. "Mobile App", "Web App"
    description: string;
    image: string;    // Project thumbnail image link
    tags: string[];   // Tech stack (e.g. ["React Native", "Firebase"])
    links: {
        github: string;
        live?: string; // Optional (Live link ekak nethnam danna ona naha)
    };
}


export const technologyList: string[] = [
  "Java",
  "Spring Boot",
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Git & GitHub",
  "Vercel",
  "Expo"
];

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
    project_image1,
    project_image2,
    project_image3
};


// ----------- DUMMY DATA -----------

export const projectsData: Project[] = [
    {
        _id: "1",
        title: "RapidRide",
        category: projectCategories[1],
        description: "A real-time taxi booking application built with React Native and Firebase.",
        image: project_image1,
        tags: ["React Native", "Firebase", "Tailwind CSS"],
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
        links: {
            github: "https://github.com/your-username/IT-Assignment-06-Calculator",
            live: "https://my-calculator.vercel.app"
        }
    },
    {
        _id: "4",
        title: "Queue Management Systemaaaaaaaaaaaa",
        category: projectCategories[9],
        description: "A robust Java-based application designed to manage customer flow.",
        image: project_image2,
        tags: ["Java", "MySQL", "Data Structures"],
        links: {
            github: "https://github.com/your-username/queue-manager"
        }
    },
    {
        _id: "5",
        title: "Modern Calculatoraaaaaaaaaaaa",
        category: projectCategories[1],
        description: "A clean and functional calculator web app focused on modern UI/UX.",
        image: project_image3,
        tags: ["React", "JavaScript", "CSS3"],
        links: {
            github: "https://github.com/your-username/IT-Assignment-06-Calculator",
            live: "https://my-calculator.vercel.app"
        }
    },
    {
        _id: "6",
        title: "Modern Calculator",
        category: projectCategories[1],
        description: "A clean and functional calculator web app focused on modern UI/UX.",
        image: project_image3,
        tags: ["React", "JavaScript", "CSS3"],
        links: {
            github: "https://github.com/your-username/IT-Assignment-06-Calculator",
            live: "https://my-calculator.vercel.app"
        }
    },
    {
        _id: "7",
        title: "Queue Management Systemaaaaaaaaaaaa",
        category: projectCategories[9],
        description: "A robust Java-based application designed to manage customer flow.",
        image: project_image2,
        tags: ["Java", "MySQL", "Data Structures"],
        links: {
            github: "https://github.com/your-username/queue-manager"
        }
    },
    {
        _id: "8",
        title: "Modern Calculatoraaaaaaaaaaaa",
        category: projectCategories[1],
        description: "A clean and functional calculator web app focused on modern UI/UX.",
        image: project_image3,
        tags: ["React", "JavaScript", "CSS3"],
        links: {
            github: "https://github.com/your-username/IT-Assignment-06-Calculator",
            live: "https://my-calculator.vercel.app"
        }
    },
    {
        _id: "9",
        title: "Queue Management Systemaaaaaaaaaaaa",
        category: projectCategories[9],
        description: "A robust Java-based application designed to manage customer flow.",
        image: project_image2,
        tags: ["Java", "MySQL", "Data Structures"],
        links: {
            github: "https://github.com/your-username/queue-manager"
        }
    },
    {
        _id: "10",
        title: "Modern Calculatoraaaaaaaaaaaa",
        category: projectCategories[1],
        description: "A clean and functional calculator web app focused on modern UI/UX.",
        image: project_image3,
        tags: ["React", "JavaScript", "CSS3"],
        links: {
            github: "https://github.com/your-username/IT-Assignment-06-Calculator",
            live: "https://my-calculator.vercel.app"
        }
    },
    {
        _id: "11",
        title: "Modern Calculator",
        category: projectCategories[1],
        description: "A clean and functional calculator web app focused on modern UI/UX.",
        image: project_image3,
        tags: ["React", "JavaScript", "CSS3"],
        links: {
            github: "https://github.com/your-username/IT-Assignment-06-Calculator",
            live: "https://my-calculator.vercel.app"
        }
    },
    {
        _id: "12",
        title: "Queue Management Systemaaaaaaaaaaaa",
        category: projectCategories[9],
        description: "A robust Java-based application designed to manage customer flow.",
        image: project_image2,
        tags: ["Java", "MySQL", "Data Structures"],
        links: {
            github: "https://github.com/your-username/queue-manager"
        }
    },
    {
        _id: "13",
        title: "Modern Calculatoraaaaaaaaaaaa",
        category: projectCategories[1],
        description: "A clean and functional calculator web app focused on modern UI/UX.",
        image: project_image3,
        tags: ["React", "JavaScript", "CSS3"],
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
];


