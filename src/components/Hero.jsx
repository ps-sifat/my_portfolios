import React from "react";
import ComputersCanvas from "../components/canvas/Computers";
import { motion } from "framer-motion";
import { github } from "../assets";
import { FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import resume from "../assets/cv/SifatResume.pdf";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center container pt-[100px] pb-10 md:pb-0" aria-label="Hero section">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-5">
        {/* Left side vertical accent line */}
        <div className="hidden md:flex flex-col justify-center items-center mt-[12px]">
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-20 sm:h-32 md:h-48 lg:h-64 violet-gradient" />
        </div>

        {/* Left text content */}
        <div className="flex-1 px-4 w-full">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 text-secondary text-[13px] mb-3 tracking-wide"
          >
            <FaMapMarkerAlt className="text-[#915eff] text-[12px]" />
            <span>Dhaka, Bangladesh</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
          >
            Md. Sifatul Islam
          </motion.h1>

          {/* Animated Role Titles */}
          <h2 className="relative text-gray-200 font-bold text-xl sm:text-xl md:text-2xl lg:text-[28px] mt-8 w-full h-[1.8em]">
            <span className="text-secondary font-normal">I'm&nbsp;</span>
            <span
              style={{ "--i": 0 }}
              data-text="Full Stack Developer"
              className="hore_heading"
              aria-hidden="true"
            >
              Full Stack Developer
            </span>
            <span
              style={{ "--i": 1 }}
              data-text="MERN Stack Developer"
              className="hore_heading"
              aria-hidden="true"
            >
              MERN Stack Developer
            </span>
            <span
              style={{ "--i": 2 }}
              data-text="Frontend Developer"
              className="hore_heading"
              aria-hidden="true"
            >
              Frontend Developer
            </span>
            <span
              style={{ "--i": 3 }}
              data-text="Problem Solver"
              className="hore_heading"
              aria-hidden="true"
            >
              Problem Solver
            </span>
          </h2>

          {/* Short bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="sm:text-base text-[15px] text-secondary tracking-wide mt-4 max-w-[460px] leading-relaxed"
          >
            BSc CSE student at{" "}
            <span className="text-white font-semibold">University of Asia Pacific</span>,
            trained at{" "}
            <span className="text-white font-semibold">Creative IT Institute</span> in MERN
            Stack development. I build modern, scalable web apps and love solving
            real-world problems with clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            {/* GitHub button */}
            <a
              href="https://github.com/ps-sifat"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-btn"
              className="group relative animated-button w-[160px] flex items-center justify-center"
              aria-label="View my work on GitHub"
            >
              <img
                className="arr-2 w-6 h-6 absolute z-3 left-3"
                src={github}
                alt="github icon"
              />
              <span className="text block group-hover:hidden">My Work</span>
              <span className="text hidden group-hover:block">GitHub</span>
              <span className="circle" />
              <svg
                viewBox="0 0 24 24"
                className="arr-1 absolute right-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </a>

            {/* Hire Me / Download resume button */}
            <a
              href={resume}
              download="Md_Sifatul_Islam_Resume.pdf"
              id="hero-resume-btn"
              className="flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-[#915eff]/20 border border-[#915eff]/40 hover:border-[#915eff]/70 text-white font-semibold text-[15px] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(145,94,255,0.3)] cursor-pointer"
              aria-label="Download Resume"
            >
              <span>Hire Me</span>
              <FaDownload className="text-[#915eff] text-xs" />
            </a>
          </motion.div>
        </div>

        {/* Right 3D Model */}
        <div className="flex-2 w-full md:w-[700px] h-[300px] md:h-[500px] lg:h-[600px] relative">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile / small devices to avoid visual clutter */}
      <div className="absolute bottom-5 w-full flex justify-center items-center hidden sm:flex">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[35px] h-[60px] rounded-3xl border-3 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
