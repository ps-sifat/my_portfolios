import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants/index";
// import { motion } from "framer-motion";

import { styles } from "../style";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
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
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React, Node.js, and Three.js. I'm a quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>

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
