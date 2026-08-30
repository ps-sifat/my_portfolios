import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaCertificate,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const academicEducation = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Asia Pacific",
    year: "2024 – Present",
    grade: "Pursuing",
    details:
      "Developing solid foundation in Algorithms, Data Structures, Database Systems, Software Engineering, and AI, applying core theoretical principles to modern technology challenges.",
    icon: FaGraduationCap,
    color: "from-violet-600 to-purple-800",
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Patuakhali Polytechnic Institute",
    year: "2019 – 2023",
    grade: "CGPA: 3.47 / 4.00",
    details:
      "Covered hardware, operating systems, structural programming, computer networks, database systems, and web technologies in a rigorous four-year polytechnic diploma framework.",
    icon: FaGraduationCap,
    color: "from-blue-600 to-indigo-800",
  },
  {
    degree: "SSC (Science)",
    institution: "Govt. Swarupkathi Pilot Secondary School",
    year: "2019",
    grade: "CGPA: 4.33 / 5.00",
    details:
      "Secondary School Certificate with a major in Science, studying Mathematics, Physics, Chemistry, and ICT.",
    icon: FaGraduationCap,
    color: "from-teal-600 to-emerald-800",
  },
];

const EducationCard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--bg-card)",
        backdropFilter: "blur(12px)",
        border: "1px solid var(--border-color)",
        color: "var(--text-primary)",
        boxShadow: "var(--glass-shadow)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid var(--border-color)" }}
      date={
        <span className="text-secondary font-medium text-[14px]">
          {edu.year}
        </span>
      }
      iconStyle={{
        display: "flex",
        
        background: "#915eff",
        boxShadow: "0 0 0 4px #915eff, inset 0 2px 0 rgba(0,0,0,0.06)",
      }}
      icon={<edu.icon size={20} color="#fff" />}
    >
      <div>
        <h3 className="text-[var(--text-primary)] text-[20px] font-bold leading-tight">
          {edu.degree}
        </h3>
        <p
          className="text-[#915eff] text-[15px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {edu.institution}
        </p>
      </div>

      {edu.grade && (
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 text-green-400 text-[13px] font-semibold">
            <FaAward />
            <span>{edu.grade}</span>
          </span>
        </div>
      )}

      <p className="mt-4 text-secondary text-[14px] leading-relaxed">
        {edu.details}
      </p>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="education"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-secondary`}>
          My Academic & Training History
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Education.</h2>
      </motion.div>

      <div className="mt-16">
        <div>
          <motion.h3
            variants={isMobile ? undefined : fadeIn("left", "tween", 0.1, 0.5)}
            className="text-white font-bold text-[24px] mb-8 flex items-center gap-3"
          >
            <FaGraduationCap className="text-blue-500 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <span>Academic Education</span>
          </motion.h3>

          <div className="mt-6 flex flex-col">
            <VerticalTimeline lineColor="rgba(145,94,255,0.2)">
              {academicEducation.map((edu, index) => (
                <EducationCard key={`acad-${index}`} edu={edu} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
