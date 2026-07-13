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
    name: "Food Panda Landing Page",
    description:
      "While learning web design at \"Creative IT Institute\", the institute organized a web contest for us. There from our group we design \"Food Panda\" app landing page for web Contest. We are 2 people who make the whole web page.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ps-sifat/Food-Panda-app-landing-page-for-Web-Contest-Creative-IT-Institute-.git",
    live_link: "https://food-panda-app-landing-page-for-web.vercel.app/",
  },
  {
    name: "Hotel Booking App",
    description:
      "Developed a responsive Hotel Booking web application as a practice clone to improve my React, Tailwind CSS, and responsive design skills. Focused on reusable components, clean UI, and modern frontend development practices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ps-sifat/Hotel-Booking-App.git",
    live_link: "https://hotel-booking-app-jet-two.vercel.app/",
  },
  {
    name: "QR Code Generator",
    description:
      "A modern and stylish QR code generator built with React and Vite. This project allows users to generate QR codes from text or URLs, customize colors, adjust size, copy the content, and download the QR code as a PNG image.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ps-sifat/QR-code-generator.git",
    live_link: "https://qr-code-generator-lilac-gamma.vercel.app/",
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
