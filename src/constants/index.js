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
  foodpanda,
  hotelapp,
  qrcode,
  creative_it,
} from "../assets";

export const navLinks = [
  { id: "about",      title: "About"      },
  { id: "experience", title: "Training"   },
  { id: "skills",     title: "Skills"     },
  { id: "projects",   title: "Projects"   },
  { id: "hackathons", title: "Hackathons" },
  { id: "education",  title: "Education"  },
  { id: "contact",    title: "Contact"    },
];

const services = [
  { title: "Full Stack Developer",  icon: web     },
  { title: "MERN Stack Developer",  icon: mobile  },
  { title: "Frontend Developer",    icon: backend  },
  { title: "Problem Solver",        icon: creator  },
];

const technologies = [
  { name: "HTML 5",       icon: html       },
  { name: "CSS 3",        icon: css        },
  { name: "JavaScript",   icon: javascript },
  { name: "React JS",     icon: reactjs    },
  { name: "Tailwind CSS", icon: tailwind   },
  { name: "Node JS",      icon: nodejs     },
  { name: "MongoDB",      icon: mongodb    },
  { name: "git",          icon: git        },
  { name: "figma",        icon: figma      },
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

// ── Real Projects with Case Studies ──
const projects = [
  {
    name: "Food Panda Landing Page",
    description:
      'While learning web design at "Creative IT Institute", the institute organized a web contest for us. From our group we designed "Food Panda" app landing page for the web contest. We were 2 people who built the whole web page.',
    tags: [
      { name: "html",       color: "orange-text-gradient", percent: 60 },
      { name: "css",        color: "blue-text-gradient",   percent: 30 },
      { name: "javascript", color: "green-text-gradient",  percent: 10 },
    ],
    image: foodpanda,
    source_code_link: "https://github.com/ps-sifat/Food-Panda-app-landing-page-for-Web-Contest-Creative-IT-Institute-.git",
    live_link: "https://food-panda-app-landing-page-for-web.vercel.app/",
    // ── Case Study ──
    problem:
      "Creative IT Institute organized an internal web design contest. Our team of 2 needed to build a complete, production-quality landing page for the Food Panda brand from scratch — matching real brand aesthetics under competition pressure.",
    challenge:
      "Replicating an established brand's visual identity (colors, typography, layout hierarchy) using only vanilla HTML, CSS, and JavaScript — no frameworks. Coordinating two developers on a single codebase without version control conflicts was also challenging.",
    solution:
      "We divided the page into clear sections — I owned the Hero, Navbar, and animations, while my partner handled Features, Testimonials, and Footer. CSS variables enforced brand colors consistently, and JavaScript was minimal — used only for smooth scroll and a sticky nav.",
    outcome:
      "Delivered a pixel-perfect, fully responsive Food Panda landing page that received positive recognition in the institute competition. Deployed live on Vercel, demonstrating strong command of semantic HTML and CSS layout fundamentals.",
  },
  {
    name: "Hotel Booking App",
    description:
      "Developed a responsive Hotel Booking web application to strengthen my React, Tailwind CSS, and responsive design skills. Focused on reusable components, clean UI, and modern frontend development practices.",
    tags: [
      { name: "react",      color: "blue-text-gradient",  percent: 70 },
      { name: "tailwind",   color: "green-text-gradient", percent: 20 },
      { name: "javascript", color: "pink-text-gradient",  percent: 10 },
    ],
    image: hotelapp,
    source_code_link: "https://github.com/ps-sifat/Hotel-Booking-App.git",
    live_link: "https://hotel-booking-app-jet-two.vercel.app/",
    // ── Case Study ──
    problem:
      "After completing React training, I needed a real-world project to consolidate component architecture knowledge. Hotel booking — with its search filters, room listings, and booking flows — was the right level of complexity to challenge myself.",
    challenge:
      "Managing shared state across multiple components (search filters → room cards → booking form) without a state management library. Making the UI fully responsive across mobile, tablet, and desktop while keeping a premium visual quality.",
    solution:
      "Used React's Context API for lightweight global state sharing. Designed a component hierarchy where the search bar drives a central filter state, which reactively re-renders room cards. Tailwind's utility classes handled breakpoints with a mobile-first approach.",
    outcome:
      "Built a clean, fully responsive hotel booking interface with working filters and dynamic room listings. Deployed on Vercel. This project solidified my React component patterns and responsive Tailwind CSS architecture.",
  },
  {
    name: "QR Code Generator",
    description:
      "A modern QR code generator built with React and Vite. Users can generate QR codes from text or URLs, customize colors, adjust size, copy content, and download the QR code as a PNG image.",
    tags: [
      { name: "react",      color: "blue-text-gradient",  percent: 80 },
      { name: "css",        color: "pink-text-gradient",  percent: 15 },
      { name: "javascript", color: "green-text-gradient", percent: 5  },
    ],
    image: qrcode,
    source_code_link: "https://github.com/ps-sifat/QR-code-generator.git",
    live_link: "https://qr-code-generator-lilac-gamma.vercel.app/",
    // ── Case Study ──
    problem:
      "I wanted a practical browser-based tool to instantly convert any URL or text into a scannable QR code — with customization (color, size, PNG download) not available in basic online generators.",
    challenge:
      "Cross-browser PNG download from an HTML canvas is inconsistent. Safari handles canvas.toBlob() differently from Chrome. Also, preventing excessive re-renders while the user types required careful React state management.",
    solution:
      "Used the qrcode.react library to render QR codes. For download, implemented a canvas.toDataURL() fallback alongside toBlob() for Safari compatibility. Applied useEffect with debouncing to prevent render thrashing on each keystroke.",
    outcome:
      "A fast, cross-browser QR generator with live preview, color customization, size control, and one-click PNG download. Fully client-side — no backend required. Deployed on Vercel.",
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

// ── Achievements with credential links ──
// Set credentialUrl to your Google Drive shareable link when ready
const achievements = [
  {
    title: "President Scout Award",
    year: "2018",
    description:
      "Received the prestigious President Scout Award — the highest recognition in the Bangladesh Scout movement.",
    icon: "🏆",
    credentialUrl: null, // 🔗 Paste Google Drive link here
  },
  {
    title: "MERN Stack Training Completed",
    year: "2024",
    description:
      "Successfully completed Professional MERN Stack Development at Creative IT Institute.",
    icon: "🎓",
    credentialUrl: null, // 🔗 Paste Google Drive link here
  },
  {
    title: "Web Design Training Completed",
    year: "2023",
    description:
      "Completed Professional Web Design training with a focus on UI/UX and modern CSS.",
    icon: "🎨",
    credentialUrl: null, // 🔗 Paste Google Drive link here
  },
  {
    title: "Built Multiple Full Stack Projects",
    year: "2023–2026",
    description:
      "Independently designed and deployed 5+ full-stack web applications from concept to production.",
    icon: "🚀",
    credentialUrl: null,
  },
  {
    title: "Hackathon Participant",
    year: "2026",
    description:
      "Competed in the SUST CSE Carnival 2026 AI Hackathon with team ASOFT.",
    icon: "⚡",
    credentialUrl: null, // 🔗 Paste participation certificate link here
  },
];

export { services, technologies, experiences, testimonials, projects, hackathons, achievements };
