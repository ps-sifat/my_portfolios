import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={` sm:py-16 py-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row  items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-90 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-white  font-black md:text-[60px] sm:text-[50px] xs:text-2xl text-4xl">
            Hi I'm <span className="text-[#915eff]">Sifat</span>
          </h1>
          <p className="sm:text-base text-lg text-secondary tracking-wider mt-2 max-w-[450px]">
            I’m a developer who loves turning ideas into smooth, functional
            apps. For the past 3 years, I’ve been building with React, Node.js,
            and AI tools to create experiences that feel modern and effortless.
          </p>
        </div>
      </div>

      {/* desktop view */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
