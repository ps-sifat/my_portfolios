import React from "react";
import { motion } from "motion/react";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div className="container">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction{" "}
        </p>
        <h2>Oberview</h2>
      </motion.div>
    </>
  );
};

export default About;
