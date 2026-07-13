import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants/index";
import { styles } from "../style";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
      >
        <div
          className="glass-card rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] hover:border-purple-500/35 transition-all duration-300"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section id="about" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* Bio paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am <span className="text-white font-semibold">Md. Sifatul Islam</span>,
        a passionate Full Stack Developer currently pursuing a{" "}
        <span className="text-white font-semibold">
          Bachelor of Science in Computer Science &amp; Engineering
        </span>{" "}
        at the{" "}
        <span className="text-white font-semibold">University of Asia Pacific</span>,
        Dhaka, Bangladesh.
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
        <span className="text-white font-semibold">Professional Web Design</span>{" "}
        training at{" "}
        <span className="text-white font-semibold">Creative IT Institute</span>. I
        enjoy building modern web applications, solving real-world problems,
        participating in hackathons, and continuously learning about AI and
        software engineering. I am actively seeking internship and junior developer
        opportunities to contribute and grow.
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
