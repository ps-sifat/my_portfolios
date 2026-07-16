import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Education,
  Hackathons,
  Hero,
  Navbar,
  Tech,
  Works,
  SectionWrapper,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        <SectionWrapper id="tech">
          <Tech />
        </SectionWrapper>
        <SectionWrapper id="works">
          <Works />
        </SectionWrapper>
        <SectionWrapper id="hackathons">
          <Hackathons />
        </SectionWrapper>
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="contact" showStars={true}>
          <Contact />
        </SectionWrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;
