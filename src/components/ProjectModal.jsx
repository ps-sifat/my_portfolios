import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaCss3Alt, FaBrain } from "react-icons/fa";

const tagIconMap = {
  react: { icon: SiReact, color: "#61DAFB" },
  mongodb: { icon: SiMongodb, color: "#4DB33D" },
  tailwind: { icon: SiTailwindcss, color: "#38BDF8" },
  nodejs: { icon: SiNodedotjs, color: "#68A063" },
  express: { icon: SiExpress, color: "#cccccc" },
  javascript: { icon: SiJavascript, color: "#F7DF1E" },
  css: { icon: FaCss3Alt, color: "#1572B6" },
  ai: { icon: FaBrain, color: "#c084fc" },
  html: { icon: SiHtml5, color: "#E34F26" },
};

// Projects data (moved here by user request).
import etrailglobal from "../assets/etrailglobal.png";
import { foodpanda, hotelapp, qrcode } from "../assets";

export const projects = [
  {
    name: "Etrail Global",
    description:
      "My first live project — an e-commerce website where I contributed to the frontend work and helped build the customer-facing shopping experience.",
    tags: [
      { name: "html", color: "orange-text-gradient", percent: 35 },
      { name: "css", color: "blue-text-gradient", percent: 35 },
      { name: "javascript", color: "green-text-gradient", percent: 30 },
    ],
    image: etrailglobal,
    source_code_link: "https://github.com/debodipto/Etrail_Global.git",
    live_link: "https://www.etrailglobal.com/",
    showLiveBadge: true,
    problem:
      "The project needed a polished, accessible frontend for a live e-commerce marketplace and its customer-facing shopping experience.",
    challenge:
      "Creating a responsive interface that feels clear and trustworthy across product discovery, shopping, and supporting marketplace content.",
    solution:
      "Contributed to the frontend implementation and UI refinement, focusing on responsive layouts, visual consistency, and a smooth browsing experience.",
    outcome:
      "Etrail Global is now live, and it became my first live project contribution as a frontend developer.",
  },
  {
    name: "Food Panda Landing Page",
    description:
      'While learning web design at "Creative IT Institute", the institute organized a web contest for us. From our group we designed "Food Panda" app landing page for the web contest. We were 2 people who built the whole web page.',
    tags: [
      { name: "html", color: "orange-text-gradient", percent: 60 },
      { name: "css", color: "blue-text-gradient", percent: 30 },
      { name: "javascript", color: "green-text-gradient", percent: 10 },
    ],
    image: foodpanda,
    source_code_link:
      "https://github.com/ps-sifat/Food-Panda-app-landing-page-for-Web-Contest-Creative-IT-Institute-.git",
    live_link: "https://food-panda-app-landing-page-for-web.vercel.app/",
    showLiveBadge: false,
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
      { name: "react", color: "blue-text-gradient", percent: 70 },
      { name: "tailwind", color: "green-text-gradient", percent: 20 },
      { name: "javascript", color: "pink-text-gradient", percent: 10 },
    ],
    image: hotelapp,
    source_code_link: "https://github.com/ps-sifat/Hotel-Booking-App.git",
    live_link: "https://hotel-booking-app-2opy.vercel.app/",
    showLiveBadge: false,
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
      { name: "react", color: "blue-text-gradient", percent: 80 },
      { name: "css", color: "pink-text-gradient", percent: 15 },
      { name: "javascript", color: "green-text-gradient", percent: 5 },
    ],
    image: qrcode,
    source_code_link: "https://github.com/ps-sifat/QR-code-generator.git",
    live_link: "https://qr-code-generator-lilac-gamma.vercel.app/",
    showLiveBadge: false,
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

const CaseSection = ({ icon: Icon, label, color, text }) => (
  <div className="flex gap-4">
    <div
      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
      style={{ background: `${color}18`, border: `1px solid ${color}35` }}
    >
      <Icon style={{ color }} className="text-base" />
    </div>
    <div>
      <p
        className="text-[11px] font-bold uppercase tracking-widest mb-1"
        style={{ color }}
      >
        {label}
      </p>
      <p className="text-secondary text-[14px] leading-relaxed">{text}</p>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  const {
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link,
    showLiveBadge,
    problem,
    challenge,
    solution,
    outcome,
  } = project;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: "rgba(2, 4, 15, 0.85)",
          backdropFilter: "blur(10px)",
        }}
        onClick={onClose}
      >
        {/* Modal Panel */}
        <motion.div
          key="panel"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", damping: 24, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
          style={{
            background: "linear-gradient(145deg, #0d0a24 0%, #130f30 100%)",
            border: "1px solid rgba(145,94,255,0.25)",
            boxShadow:
              "0 0 60px rgba(145,94,255,0.15), 0 25px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* ── Purple glow top accent ── */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
            style={{
              background:
                "linear-gradient(90deg, transparent, #915eff, #00cea8, transparent)",
            }}
          />

          {/* ── Close Button ── */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <FaTimes className="text-secondary text-sm" />
          </button>

          {/* ── Hero Image ── */}
          <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, #0d0a24 100%)",
              }}
            />
            {/* LIVE badge */}
            {showLiveBadge && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
                  LIVE
                </span>
              </div>
            )}
          </div>

          {/* ── Content ── */}
          <div className="p-6 md:p-8 -mt-2 flex flex-col gap-6">
            {/* Title & Description */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-1">
                <h2 className="text-[var(--text-primary)] font-black text-[24px] md:text-[28px] leading-tight">
                  {name}
                </h2>
              </div>
              <p className="text-secondary text-[14px] leading-relaxed mt-2">
                {description}
              </p>
            </div>

            {/* Tech Stack pills */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaLayerGroup className="text-[#915eff] text-sm" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#915eff]">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const cfg = tagIconMap[tag.name.toLowerCase()];
                  const Icon = cfg?.icon;
                  return (
                    <div
                      key={tag.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold"
                      style={{
                        background: cfg
                          ? `${cfg.color}15`
                          : "rgba(255,255,255,0.06)",
                        border: `1px solid ${cfg ? cfg.color + "30" : "rgba(255,255,255,0.1)"}`,
                        color: cfg?.color ?? "#aaa6c3",
                      }}
                    >
                      {Icon && <Icon className="text-base" />}
                      <span>
                        {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
                      </span>
                      <span className="opacity-60 text-[10px]">
                        {tag.percent}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* ── Case Study ── */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#915eff] mb-4">
                📋 Case Study
              </p>
              <div className="flex flex-col gap-5">
                {problem && (
                  <CaseSection
                    icon={FaLightbulb}
                    label="Problem"
                    color="#f59e0b"
                    text={problem}
                  />
                )}
                {challenge && (
                  <CaseSection
                    icon={FaExclamationTriangle}
                    label="Challenge"
                    color="#ef4444"
                    text={challenge}
                  />
                )}
                {solution && (
                  <CaseSection
                    icon={FaCheckCircle}
                    label="Solution"
                    color="#22c55e"
                    text={solution}
                  />
                )}
                {outcome && (
                  <CaseSection
                    icon={FaRocket}
                    label="Outcome"
                    color="#915eff"
                    text={outcome}
                  />
                )}
              </div>
            </div>

            {/* ── Action Buttons ── */}
            <div className="flex gap-3 pt-2">
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-[14px] text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #915eff)",
                  boxShadow: "0 4px 20px rgba(145,94,255,0.35)",
                }}
              >
                <FaExternalLinkAlt className="text-xs" />
                View Live
              </a>
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-[14px] text-white transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <FaGithub className="text-base" />
                GitHub Repo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
