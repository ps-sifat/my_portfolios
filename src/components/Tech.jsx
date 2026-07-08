import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiBootstrap, 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-500", glow: "hover:shadow-orange-500/30" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", glow: "hover:shadow-blue-500/30" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600", glow: "hover:shadow-purple-600/30" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", glow: "hover:shadow-cyan-400/30" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", glow: "hover:shadow-yellow-400/30" },
      { name: "React.js", icon: SiReact, color: "text-blue-400", glow: "hover:shadow-blue-400/30" },
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
    ],
  },
];

const SkillCard = ({ name, Icon, color, glow, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="w-full"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor="#ffffff"
        glarePosition="all"
        scale={1.05}
        transitionSpeed={400}
        className={`w-full glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-purple-500/30 ${glow}`}
      >
        <div className={`text-5xl ${color} filter drop-shadow-[0_0_8px_currentColor]`}>
          <Icon />
        </div>
        <p className="text-white font-medium text-[16px] text-center tracking-wide">{name}</p>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section id="skills" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col gap-12">
        {skills.map((cat, catIdx) => (
          <div key={cat.category} className="flex flex-col gap-6">
            <motion.h3 
              variants={fadeIn("right", "tween", 0.1, 0.5)}
              className="text-purple-400 font-bold text-[22px] tracking-wider border-l-4 border-purple-500 pl-3"
            >
              {cat.category}
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {cat.items.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  Icon={skill.icon}
                  color={skill.color}
                  glow={skill.glow}
                  index={index + catIdx * 3}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;