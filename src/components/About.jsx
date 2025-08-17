import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { services } from "../constants/index";
// import { motion } from "framer-motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
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
    <>
      <div className="container">
        <motion.div>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview
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

        <div className="mt-20 flex flex-wrap gap-10 !w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
