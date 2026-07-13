import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  creative_it,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Training",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "hackathons",
    title: "Hackathons",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

// Real training & certifications
const experiences = [
  {
    title: "Professional MERN Stack Development",
    company_name: "Creative IT Institute",
    icon: creative_it,
    iconBg: "#383E56",
    date: "Nov 2023 – Nov 2024",
    points: [
      "Completed intensive full-stack training covering React.js, Node.js, Express.js, and MongoDB.",
      "Built production-ready REST APIs with JWT authentication and secure CORS handling.",
      "Developed multiple full-stack projects including hotel booking, library, and food ordering systems.",
      "Learned deployment strategies using Vercel and modern CI/CD workflows.",
    ],
  },
  {
    title: "Professional Web Design",
    company_name: "Creative IT Institute",
    icon: creative_it,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Nov 2023",
    points: [
      "Mastered modern UI/UX principles, typography, color theory, and responsive layouts.",
      "Practiced advanced CSS techniques including Flexbox, Grid, and CSS animations.",
      "Worked with design tools like Figma, Adobe Photoshop, and Adobe Illustrator.",
      "Built pixel-perfect, mobile-first interfaces with exceptional cross-browser compatibility.",
    ],
  },
  {
    title: "Software Application Course",
    company_name: "Postal Academy",
    icon: creator,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Covered fundamentals of software development lifecycle and application design.",
      "Practiced MS Office Suite, database basics, and computer networking fundamentals.",
      "Gained hands-on experience with software tools used in professional environments.",
    ],
  },
];

const testimonials = [];

// Real projects
const projects = [
  {
    name: "Hotel Booking System",
    description:
      "A full-featured hotel booking platform where users can browse rooms, check availability, make reservations, and manage bookings. Admins can manage rooms, pricing, and reservations through a dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ps-sifat",
    live_link: "https://github.com/ps-sifat",
  },
  {
    name: "Library Management System",
    description:
      "A comprehensive library management application allowing users to search, borrow, and return books. Features admin panel for managing inventory, member records, and transaction history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ps-sifat",
    live_link: "https://github.com/ps-sifat",
  },
  {
    name: "Online Food Ordering System",
    description:
      "A full-stack food ordering platform featuring a restaurant menu, cart management, order tracking, and user authentication. Built with MERN stack for real-time order management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ps-sifat",
    live_link: "https://github.com/ps-sifat",
  },
  {
    name: "QR Code Generator",
    description:
      "A responsive web app that generates customizable QR codes from any text or URL. Users can select colors, download the QR code as PNG, and preview results in real time.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ps-sifat",
    live_link: "https://github.com/ps-sifat",
  },
  {
    name: "AI & Hackathon Projects",
    description:
      "A collection of AI-powered micro-projects and hackathon solutions. Includes an AI-assisted FinTech prototype built during the SUST CSE Carnival 2026 hackathon with team ASOFT.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ps-sifat",
    live_link: "https://github.com/ps-sifat",
  },
];

// Hackathons & Activities
const hackathons = [
  {
    event: "SUST CSE Carnival 2026 AI Hackathon",
    team: "ASOFT",
    role: "Participant",
    date: "2026",
    description:
      "Participated in one of Bangladesh's largest university AI hackathons at SUST. Collaborated with team ASOFT to design and build an AI-assisted FinTech solution — featuring smart budget analytics and financial insights — under strict time constraints.",
    tags: ["AI", "FinTech", "Hackathon", "Team Work"],
    result: "Participated",
  },
];

// Achievements
const achievements = [
  {
    title: "President Scout Award",
    year: "2018",
    description: "Received the prestigious President Scout Award — the highest recognition in the Bangladesh Scout movement.",
    icon: "🏆",
  },
  {
    title: "MERN Stack Training Completed",
    year: "2024",
    description: "Successfully completed Professional MERN Stack Development at Creative IT Institute.",
    icon: "🎓",
  },
  {
    title: "Web Design Training Completed",
    year: "2023",
    description: "Completed Professional Web Design training with a focus on UI/UX and modern CSS.",
    icon: "🎨",
  },
  {
    title: "Built Multiple Full Stack Projects",
    year: "2023–2026",
    description: "Independently designed and developed 5+ full-stack web applications from concept to deployment.",
    icon: "🚀",
  },
  {
    title: "Hackathon Participant",
    year: "2026",
    description: "Competed in the SUST CSE Carnival 2026 AI Hackathon with team ASOFT.",
    icon: "⚡",
  },
];

export { services, technologies, experiences, testimonials, projects, hackathons, achievements };
