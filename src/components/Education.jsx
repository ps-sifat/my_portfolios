import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaAward } from "react-icons/fa";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const professionalEducation = [
  {
    title: "Professional MERN Stack Development",
    institution: "Creative IT Institute",
    year: "Nov 2023 – Nov 2024",
    details: "Completed extensive full-stack training covering HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, REST API development, and deployment.",
    icon: FaCertificate,
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "Professional Web Design",
    institution: "Creative IT Institute",
    year: "Aug 2023 – Nov 2023",
    details: "Learned core UI/UX concepts, responsive web design, interactive web elements, Bootstrap, Custom CSS, styling architectures, and Photoshop/Illustrator design layout conversions.",
    icon: FaCertificate,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Software Application Course",
    institution: "Postal Academy",
    year: "2022",
    details: "Learned standard software application development methodologies, basic programming logic, systems concepts, and fundamental tools for professional workflow automation.",
    icon: FaCertificate,
    color: "from-pink-500 to-purple-500",
  },
];

const academicEducation = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Asia Pacific",
    year: "2024 – Present",
    grade: "Pursuing",
    details: "Developing solid foundation in Algorithms, Data Structures, Database Systems, Software Engineering, and AI, applying core theoretical principles to modern technology challenges.",
    icon: FaGraduationCap,
    color: "from-violet-600 to-purple-800",
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Patuakhali Polytechnic Institute",
    year: "2019 – 2023",
    grade: "CGPA: 3.47 / 4.00",
    details: "Covered hardware, operating systems, structural programming, computer networks, database systems, and web technologies in a rigorous four-year polytechnic diploma framework.",
    icon: FaGraduationCap,
    color: "from-blue-600 to-indigo-800",
  },
  {
    degree: "SSC (Science)",
    institution: "Govt. Swarupkathi Pilot Secondary School",
    year: "2019",
    grade: "CGPA: 4.33 / 5.00",
    details: "Secondary School Certificate with a major in Science, studying Mathematics, Physics, Chemistry, and ICT.",
    icon: FaGraduationCap,
    color: "from-teal-600 to-emerald-800",
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
        <p className={styles.sectionSubText}>My Academic & Training History</p>
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
            <span>Training & Certifications</span>
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
