import React from "react";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`sm:py-16 py-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}
      >
        {/* left side text */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-90 h-40 violet-gradient" />
        </div>
        <div className="flex-1">
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-2xl text-4xl">
            Hi I'm <span className="text-[#915eff]">Sifat</span>
          </h1>
          <p className="sm:text-base text-lg text-secondary tracking-wider mt-2 max-w-[450px]">
            I’m a developer who loves turning ideas into smooth, functional
            apps. For the past 3 years, I’ve been building with React, Node.js,
            and AI tools to create experiences that feel modern and effortless.
          </p>
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
