import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRocket,
  FaLayerGroup,
  FaCss3Alt,
  FaBrain,
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
import { useTheme } from "../context/ThemeContext";

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

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const CaseSection = ({ icon: Icon, label, color, text }) => (
  <div className="flex gap-4">
    <div
      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5"
      style={{ background: `${color}18`, border: `1px solid ${color}35` }}
      aria-hidden="true"
    >
      <Icon style={{ color }} className="text-base" />
    </div>
    <div>
      <h3
        className="text-[11px] font-bold uppercase tracking-widest mb-1"
        style={{ color }}
      >
        {label}
      </h3>
      <p className="text-secondary text-[14px] leading-relaxed">{text}</p>
    </div>
  </div>
);

// Rendered inside <AnimatePresence> in Works.jsx so the exit animation plays.
// Portaled to <body> so light-mode `#projects ...` rules do not leak into it.
const ProjectModal = ({ project, onClose }) => {
  const { isDark } = useTheme();
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Lock body scroll, move focus into the dialog, restore it on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, []);

  // Escape closes; Tab stays inside the dialog.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll(FOCUSABLE);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
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

  const titleId = "project-modal-title";

  return createPortal(
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: "var(--bg-modal-overlay)",
        backdropFilter: "blur(10px)",
      }}
      onClick={onClose}
    >
      <motion.div
        key="panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", damping: 24, stiffness: 260 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          background: "var(--bg-modal)",
          border: "1px solid rgba(145,94,255,0.25)",
          boxShadow: isDark
            ? "0 0 60px rgba(145,94,255,0.15), 0 25px 60px rgba(0,0,0,0.6)"
            : "0 25px 60px rgba(76, 60, 130, 0.25)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, #915eff, #00cea8, transparent)",
          }}
          aria-hidden="true"
        />

        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          style={{
            background: "var(--bg-badge)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <FaTimes className="text-[#fff] text-sm" aria-hidden="true" />
        </button>

        <div className="relative w-full h-52 overflow-hidden rounded-t-3xl">
          <img
            src={image}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, var(--bg-modal-gradient-bottom) 100%)",
            }}
            aria-hidden="true"
          />
          {showLiveBadge && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
              <span className="flex h-2 w-2 relative" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
                LIVE
              </span>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 -mt-2 flex flex-col gap-6">
          <div>
            <h2
              id={titleId}
              className="text-[var(--text-primary)] font-black text-[24px] md:text-[28px] leading-tight mb-1"
            >
              {name}
            </h2>
            <p className="text-secondary text-[14px] leading-relaxed mt-2">
              {description}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaLayerGroup className="text-[var(--accent)] text-sm" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent)]">
                Tech Stack
              </span>
            </div>
            <ul className="flex flex-wrap gap-2 list-none">
              {tags.map((tag) => {
                const cfg = tagIconMap[tag.name.toLowerCase()];
                const Icon = cfg?.icon;
                return (
                  <li
                    key={tag.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold"
                    style={{
                      background: cfg ? `${cfg.color}15` : "var(--bg-overlay-light)",
                      border: `1px solid ${cfg ? cfg.color + "30" : "var(--border-subtle)"}`,
                      // brand colours like JS yellow are unreadable as text on light surfaces
                      color: isDark ? cfg?.color ?? "#aaa6c3" : "var(--text-primary)",
                    }}
                  >
                    {Icon && (
                      <Icon
                        className="text-base"
                        style={{ color: cfg.color }}
                        aria-hidden="true"
                      />
                    )}
                    <span>
                      {tag.name.charAt(0).toUpperCase() + tag.name.slice(1)}
                    </span>
                    <span className="opacity-60 text-[10px]">
                      {tag.percent}%
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t border-[var(--border-subtle)]" aria-hidden="true" />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--accent)] mb-4">
              <span aria-hidden="true">📋 </span>Case Study
            </p>
            <div className="flex flex-col gap-5">
              {problem && (
                <CaseSection icon={FaLightbulb} label="Problem" color="#d97706" text={problem} />
              )}
              {challenge && (
                <CaseSection icon={FaExclamationTriangle} label="Challenge" color="#ef4444" text={challenge} />
              )}
              {solution && (
                <CaseSection icon={FaCheckCircle} label="Solution" color="#16a34a" text={solution} />
              )}
              {outcome && (
                <CaseSection icon={FaRocket} label="Outcome" color="#915eff" text={outcome} />
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-[14px] text-[#fff] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #915eff)",
                boxShadow: "0 4px 20px rgba(145,94,255,0.35)",
              }}
            >
              <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              View Live
            </a>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-[14px] text-[var(--text-primary)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{
                background: "var(--bg-overlay-light)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <FaGithub className="text-base" aria-hidden="true" />
              GitHub Repo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
};

export default ProjectModal;
