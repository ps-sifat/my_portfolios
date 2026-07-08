import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCss3Alt } from "react-icons/fa";
import { 
  SiReact, 
  SiMongodb, 
  SiTailwindcss, 
  SiSass, 
  SiNextdotjs, 
  SiSupabase, 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Map tag names to React Icons
const tagIconMap = {
  react: { icon: SiReact, color: "text-blue-400" },
  mongodb: { icon: SiMongodb, color: "text-green-500" },
  tailwind: { icon: SiTailwindcss, color: "text-cyan-400" },
  restapi: { icon: TbApi, color: "text-purple-400" },
  scss: { icon: SiSass, color: "text-pink-400" },
  nextjs: { icon: SiNextdotjs, color: "text-white" },
  supabase: { icon: SiSupabase, color: "text-emerald-400" },
  css: { icon: FaCss3Alt, color: "text-blue-500" }
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / (rect.height / 2)) * 12; // limit to 12 degrees
    const rotateY = (x / (rect.width / 2)) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full flex justify-center"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full max-w-[370px] glass-card p-5 rounded-2xl hover:border-purple-500/20 hover:shadow-purple-500/10 transition-all duration-100 ease-out select-none flex flex-col justify-between"
      >
        {/* Project Thumbnail with Badges */}
        <div className="relative w-full h-[230px] rounded-xl overflow-hidden group/img">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500 ease-out"
          />

          {/* Green Pulse LIVE Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
              LIVE
            </span>
          </div>

          {/* Vercel Deployed Label */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-blue-500/30">
            <FaCheckCircle className="text-blue-400 text-[10px]" />
            <span className="text-[9px] font-medium text-gray-200 uppercase tracking-wide">
              Deployed on Vercel
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-5" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-white font-bold text-[24px] tracking-wide">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack and Buttons container */}
        <div className="mt-6" style={{ transform: "translateZ(40px)" }}>
          {/* Tech Stack Icons & Labels */}
          <div className="flex flex-wrap gap-4 items-center mb-5 border-t border-white/5 pt-4">
            <div className="flex gap-2">
              {tags.map((tag) => {
                const config = tagIconMap[tag.name.toLowerCase()] || {
                  icon: () => null,
                  color: "text-gray-400",
                };
                const Icon = config.icon;
                return (
                  <div
                    key={tag.name}
                    className={`text-lg ${config.color} p-1.5 rounded-lg bg-black/35 border border-white/5 flex items-center justify-center hover:scale-115 transition-all`}
                    title={tag.name}
                  >
                    <Icon />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[12px] font-medium ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Call To Actions */}
          <div className="flex gap-3">
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-[14px] transition-colors border border-purple-500/20"
            >
              <span>View Live</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 hover:bg-black/85 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-[14px] transition-all border border-white/10 hover:border-purple-500/30"
              title="GitHub Repository"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="projects" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects Showcase</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;