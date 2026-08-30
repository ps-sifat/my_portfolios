import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { creative_it, creator } from "../assets";

const experiences = [
  {
    title: "Professional MERN Stack Development",
    company_name: "Creative IT Institute",
    icon: creative_it,
    iconBg: "#383E56",
    date: "Nov 2023 – Nov 2024",
    points: [
      "Completed intensive full-stack training covering React.js, Node.js, Express.js, and MongoDB.",
      "Built production-ready REST APIs with JWT authentication and secure CORS handling.",
      "Developed multiple full-stack projects including hotel booking, library, and food ordering systems.",
      "Learned deployment strategies using Vercel and modern CI/CD workflows.",
    ],
  },
  {
    title: "Professional Web Design",
    company_name: "Creative IT Institute",
    icon: creative_it,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Nov 2023",
    points: [
      "Mastered modern UI/UX principles, typography, color theory, and responsive layouts.",
      "Practiced advanced CSS techniques including Flexbox, Grid, and CSS animations.",
      "Worked with design tools like Figma, Adobe Photoshop, and Adobe Illustrator.",
      "Built pixel-perfect, mobile-first interfaces with exceptional cross-browser compatibility.",
    ],
  },
  {
    title: "Software Application Course",
    company_name: "Postal Academy",
    icon: creator,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "Covered fundamentals of software development lifecycle and application design.",
      "Practiced MS Office Suite, database basics, and computer networking fundamentals.",
      "Gained hands-on experience with software tools used in professional environments.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
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
          {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #915eff, inset 0 2px 0 rgba(0,0,0,0.06)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[var(--text-primary)] text-[20px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p
          className="text-[#915eff] text-[15px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[14px] pl-1 tracking-wide flex items-start gap-2 leading-relaxed"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#915eff] shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-secondary`}>
          My Professional Training
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center text-[var(--text-primary)]`}
        >
          Training &amp; Certifications.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(145,94,255,0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
