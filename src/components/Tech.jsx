import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { FaCss3Alt, FaBrain, FaDatabase, FaMicrosoft } from "react-icons/fa";
import { TbApi, TbBinaryTree, TbBrandVscode, TbPhoto, TbVector, TbAdjustments } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import LogoLoop from "./LogoLoop";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500", glow: "hover:shadow-orange-500/30" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", glow: "hover:shadow-blue-500/30" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", glow: "hover:shadow-yellow-400/30" },
      { name: "React.js", icon: SiReact, color: "text-blue-400", glow: "hover:shadow-blue-400/30" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", glow: "hover:shadow-cyan-400/30" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600", glow: "hover:shadow-purple-600/30" },
    ],
  },
  {
    category: "Backend & API",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", glow: "hover:shadow-green-500/30" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300", glow: "hover:shadow-gray-300/30" },
      { name: "REST API", icon: TbApi, color: "text-purple-400", glow: "hover:shadow-purple-400/30" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600", glow: "hover:shadow-green-600/30" },
      { name: "Oracle SQL", icon: FaDatabase, color: "text-red-400", glow: "hover:shadow-red-400/30" },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", icon: SiGit, color: "text-orange-600", glow: "hover:shadow-orange-600/30" },
      { name: "GitHub", icon: SiGithub, color: "text-white", glow: "hover:shadow-white/20" },
      { name: "VS Code", icon: TbBrandVscode, color: "text-blue-500", glow: "hover:shadow-blue-500/30" },
      { name: "Figma", icon: SiFigma, color: "text-pink-500", glow: "hover:shadow-pink-500/30" },
      { name: "Photoshop", icon: TbPhoto, color: "text-blue-400", glow: "hover:shadow-blue-400/30" },
      { name: "Illustrator", icon: TbVector, color: "text-orange-400", glow: "hover:shadow-orange-400/30" },
      { name: "Lightroom", icon: TbAdjustments, color: "text-blue-300", glow: "hover:shadow-blue-300/30" },
      { name: "MS Office", icon: FaMicrosoft, color: "text-red-400", glow: "hover:shadow-red-400/30" },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "AI Integration", icon: FaBrain, color: "text-purple-400", glow: "hover:shadow-purple-400/30" },
      { name: "System Design", icon: MdOutlineDesignServices, color: "text-cyan-400", glow: "hover:shadow-cyan-400/30" },
      { name: "Data Structures", icon: TbBinaryTree, color: "text-green-400", glow: "hover:shadow-green-400/30" },
    ],
  },
];

const Tech = () => {
  return (
    <section
      id="skills"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Skills &amp; Technologies.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col gap-14">
        {skills.map((cat, catIdx) => {
          // Map skills to nodes inside LogoLoop
          const mappedLogos = cat.items.map((skill) => {
            const Icon = skill.icon;
            return {
              node: (
                <div className={`flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-white/8 hover:border-purple-500/30 transition-all duration-300 select-none cursor-default group/item min-w-[170px] justify-center hover:shadow-[0_0_20px_rgba(145,94,255,0.15)]`}>
                  <div className={`text-3xl ${skill.color} filter drop-shadow-[0_0_6px_currentColor] group-hover/item:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  <span className="text-white font-medium text-[14px] tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ),
              title: skill.name,
            };
          });

          return (
            <div key={cat.category} className="flex flex-col gap-5">
              {/* Category header */}
              <motion.div
                variants={fadeIn("right", "tween", 0.1, 0.5)}
                className="flex items-center gap-3"
              >
                <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#915eff] to-[#0ff]" />
                <h3 className="text-white font-bold text-[20px] tracking-wide">
                  {cat.category}
                </h3>
                {cat.category === "Currently Learning" && (
                  <span className="ml-2 text-[11px] font-semibold text-[#915eff] bg-[#915eff]/10 border border-[#915eff]/20 px-2 py-0.5 rounded-full tracking-wider">
                    IN PROGRESS
                  </span>
                )}
              </motion.div>

              {/* Logo Loop Carousel for each category */}
              <motion.div
                variants={fadeIn("up", "spring", catIdx * 0.1, 0.75)}
                className="w-full relative"
              >
                <LogoLoop
                  logos={mappedLogos}
                  speed={40 + catIdx * 8} // Alternate speed to make the layout feel organic
                  direction={catIdx % 2 === 0 ? "left" : "right"} // Alternate scroll direction!
                  logoHeight={48}
                  gap={24}
                  fadeOut={true}
                  fadeOutColor="#050816"
                  scaleOnHover={true}
                  pauseOnHover={true}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tech;