import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants/index";
import { styles } from "../style";
import { useTheme } from "../context/ThemeContext";
import darkAboutPhoto from "../assets/about/dark-mode-about-photo.png";
import lightAboutPhoto from "../assets/about/white-mood-about-photo.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import ElectricBorder from "./ElectricBorder";

const ServiceCard = ({ index, title, icon }) => {
  // Cycle through coordinate colors to make cards stand out individually
  const borderColors = ["#915eff", "#00cea8", "#ff007f", "#38ef7d"];
  const color = borderColors[index % borderColors.length];

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="w-full"
      >
        <ElectricBorder
          color={color}
          speed={1.2}
          chaos={0.08}
          borderRadius={20}
          className="w-full"
        >
          <div className="glass-card rounded-[20px] py-5 px-10 min-h-[280px] flex justify-evenly items-center flex-col hover:shadow-[0_0_20px_rgba(145,94,255,0.15)] transition-all duration-300 select-none">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-[var(--text-primary)] text-[20px] font-bold text-center leading-snug">
              {title}
            </h3>
          </div>
        </ElectricBorder>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
        <div className="min-w-0">
          <motion.div>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Md. Sifatul Islam
            </span>
            , a passionate Full Stack Developer currently pursuing a{" "}
            <span className="text-white font-semibold">
              Bachelor of Science in Computer Science &amp; Engineering
            </span>{" "}
            at the{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              University of Asia Pacific
            </span>
            , Dhaka, Bangladesh.
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I completed{" "}
            <span className="text-white font-semibold">
              Professional MERN Stack Development
            </span>{" "}
            and{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Professional Web Design
            </span>{" "}
            training at{" "}
            <span className="text-[var(--text-primary)] font-semibold">
              Creative IT Institute
            </span>
            . I enjoy building modern web applications, solving real-world problems,
            participating in hackathons, and continuously learning about AI and
            software engineering. I am actively seeking internship and junior
            developer opportunities to contribute and grow.
          </motion.p>

          {/* Quick contact line */}
          <motion.div
            variants={fadeIn("", "", 0.3, 1)}
            className="mt-6 flex flex-wrap gap-5"
          >
            <a
              href="mailto:mdsifatulislam2357@gmail.com"
              id="about-email-link"
              className="flex items-center gap-2 text-secondary hover:text-white text-[14px] transition-colors group"
              aria-label="Send email"
            >
              <FaEnvelope className="text-[#915eff] group-hover:scale-110 transition-transform" />
              <span>mdsifatulislam2357@gmail.com</span>
            </a>
            <a
              href="tel:+8801850499490"
              id="about-phone-link"
              className="flex items-center gap-2 text-secondary hover:text-white text-[14px] transition-colors group"
              aria-label="Call phone"
            >
              <FaPhone className="text-[#915eff] group-hover:scale-110 transition-transform" />
              <span>+880 1850-499490</span>
            </a>
            <span className="flex items-center gap-2 text-secondary text-[14px]">
              <FaMapMarkerAlt className="text-[#915eff]" />
              <span>Dhaka, Bangladesh</span>
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="flex w-full justify-center lg:justify-end"
        >
          <div className="w-full max-w-[480px] overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[var(--glass-shadow)] transition-transform duration-300 hover:-translate-y-1">
            <img
              src={isDark ? darkAboutPhoto : lightAboutPhoto}
              alt="Md. Sifatul Islam surrounded by software development visuals"
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="mt-20 w-full">
        <div className="w-full flex flex-wrap gap-[45px] justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
