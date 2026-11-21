import { mobile, backend, creator, web } from "../assets";

// `id` must match the `<section id>` of each section component.
export const navLinks = [
  { id: "hero-section", title: "Home" },
  { id: "experience", title: "Training" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievement" },
  { id: "education", title: "Education" },
  { id: "gallery", title: "Gallery" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "MERN Stack Developer", icon: mobile },
  { title: "Frontend Developer", icon: backend },
  { title: "Problem Solver", icon: creator },
];
