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
} from "../assets";

export const navLinks = [
  { id: "hero-section", title: "Home" },
  { id: "experience", title: "Training" },
  { id: "tech", title: "Skills" },
  { id: "works", title: "Projects" },
  { id: "achievements", title: "Achievement" },
  { id: "education", title: "Education" },
  { id: "gallery", title: "Gallery" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "MERN Stack Developer", icon: mobile },
  { title: "Frontend Developer", icon: backend },
  { title: "Problem Solver", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

// Shared data like `experiences`, `testimonials`, `hackathons`, and `achievements`
// have been moved into their respective component files to keep constants minimal.

// Projects moved to `src/components/ProjectModal.jsx` per developer preference.

// Hackathons and achievements are kept inside `src/components/Hackathons.jsx`.

export { services, technologies };
