import React from "react";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { github } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`sm:py-16 py-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}
      >
        {/* left side text */}
        <div className="hidden md:flex flex-col justify-center items-center mt-[95px]">
          {/* Circle */}
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#915eff]" />

          {/* Line below circle */}
          <div className="w-1 h-20 sm:h-32 md:h-48 lg:h-64 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className="text-white font-black text-xl sm:text-xl md:text-3xl lg:text-5xl">
            Md Sifatul Islam
          </h1>
          <h2 className="relative text-gray-200 font-bold text-2xl sm:text-xl md:text-2xl lg:text-[28px] mt-10 w-full">
            I'm a &nbsp;
            <span
              style={{ "--i": 0 }}
              data-text="Front-end Devloper"
              className="hore_heading"
            >
              Front-end Devloper
            </span>
            <span
              style={{ "--i": 1 }}
              data-text="Back-end Devloper"
              className="hore_heading"
            >
              Back-end Devloper
            </span>
            <span
              style={{ "--i": 2 }}
              data-text="MERN-Stack Devloper"
              className="hore_heading"
            >
              MERN-Stack Devloper
            </span>
            <span
              style={{ "--i": 3 }}
              data-text="Programmer"
              className="hore_heading"
            >
              Programmer
            </span>
          </h2>

          <p className="sm:text-base text-lg text-secondary tracking-wider mt-2 max-w-[450px]">
            I’m a developer who loves turning ideas into smooth, functional
            apps. For the past 3 years, I’ve been building with
            <b className="text-white"> React</b>,{" "}
            <b className="text-white">Node.js</b>, and AI tools to create
            experiences that feel modern and effortless.
          </p>

          <div className="mt-8">
            <a
              href="https://github.com/ps-sifat"
              target="_blank"
              className="group relative animated-button w-[160px] flex items-center justify-center"
            >
              <img
                className="arr-2 w-6 h-6 absolute z-3 left-3"
                src={github}
                alt="github"
              />

              {/* Default text */}
              <span className="text block group-hover:hidden">My work</span>

              {/* Hover text */}
              <span className="text hidden group-hover:block">Github</span>

              <span className="circle" />
              <svg
                viewBox="0 0 24 24"
                className="arr-1 absolute right-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* right side 3D Model */}
        <div className="flex-2 w-[700px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <ComputersCanvas />
        </div>
      </div>

      {/* scroll icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-3 border-secondary flex justify-center items-start p-2">
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
