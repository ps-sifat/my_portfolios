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
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
                LIVE
              </span>
            </div>
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
