import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const professionalEducation = [
  {
    title: "MERN Stack Web Development",
    institution: "Creative It Institute",
    year: "2023",
    details: "Completed intensive training on HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, REST API design, and deployment.",
    icon: FaCertificate,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Frontend Engineering & UI/UX Design",
    institution: "Self-paced / Interactive Labs",
    year: "2022 - Present",
    details: "Mastered responsive layouts, performance optimization, CSS 3D transforms, Three.js integrations, Framer Motion animations, and modern accessibility standards (WCAG).",
    icon: FaCertificate,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development & Systems Knowledge",
    institution: "Advanced Dev Seminars & Labs",
    year: "2023 - 2024",
    details: "Acquired depth in Server architecture, MongoDB indexing, secure JWT-based authentication flows, CORS policy handling, and RESTful API engineering.",
    icon: FaCertificate,
    color: "from-pink-500 to-purple-500",
  },
];

const academicEducation = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Port City International University",
    year: "2021 - 2025",
    grade: "CGPA: 3.82 / 4.00",
    details: "Core focus on Algorithms, Data Structures, Database Management Systems, Software Engineering, Web Technologies, and Machine Learning concepts.",
    icon: FaGraduationCap,
    color: "from-violet-600 to-purple-800",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chittagong Government College",
    year: "2018 - 2020",
    grade: "GPA: 5.00 / 5.00",
    details: "Science Group. Concentrated on Mathematics, Physics, Chemistry, and basic Computer Studies.",
    icon: FaGraduationCap,
    color: "from-blue-600 to-indigo-800",
  },
];

const EducationCard = ({ title, degree, institution, year, grade, details, Icon, color, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative pl-8 pb-10 border-l border-white/10 last:pb-0"
    >
      {/* Icon node on timeline line */}
      <div className={`absolute -left-[20px] top-0 w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-lg shadow-[0_0_15px_currentColor] z-10 border-3 border-[#050816]`}>
        <Icon />
      </div>

      {/* Content Card */}
      <div className="glass-card p-6 rounded-2xl hover:border-purple-500/20 hover:shadow-purple-500/5 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
          <div>
            <h3 className="text-white font-bold text-[19px] tracking-wide">
              {title || degree}
            </h3>
            <p className="text-purple-400 font-semibold text-[14px] mt-0.5">
              {institution}
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-secondary text-[12px] font-medium w-fit">
            <FaCalendarAlt className="text-[11px]" />
            <span>{year}</span>
          </div>
        </div>

        {grade && (
          <div className="flex items-center gap-1.5 text-green-400 text-[13px] font-semibold mb-3">
            <FaAward />
            <span>{grade}</span>
          </div>
        )}

        <p className="text-secondary text-[14px] leading-relaxed">
          {details}
        </p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Learning Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Professional / Skill Education Column */}
        <div>
          <motion.h3
            variants={fadeIn("right", "tween", 0.1, 0.5)}
            className="text-white font-bold text-[24px] mb-8 flex items-center gap-3"
          >
            <FaCertificate className="text-purple-500 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <span>Professional & Skill Training</span>
          </motion.h3>

          <div className="relative border-l border-white/5 pl-2 ml-4">
            {professionalEducation.map((edu, index) => (
              <EducationCard
                key={`prof-${index}`}
                index={index}
                title={edu.title}
                institution={edu.institution}
                year={edu.year}
                details={edu.details}
                Icon={edu.icon}
                color={edu.color}
              />
            ))}
          </div>
        </div>

        {/* Academic Education Column */}
        <div>
          <motion.h3
            variants={fadeIn("left", "tween", 0.1, 0.5)}
            className="text-white font-bold text-[24px] mb-8 flex items-center gap-3"
          >
            <FaGraduationCap className="text-blue-500 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span>Academic Education</span>
          </motion.h3>

          <div className="relative border-l border-white/5 pl-2 ml-4">
            {academicEducation.map((edu, index) => (
              <EducationCard
                key={`acad-${index}`}
                index={index}
                degree={edu.degree}
                institution={edu.institution}
                year={edu.year}
                grade={edu.grade}
                details={edu.details}
                Icon={edu.icon}
                color={edu.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
