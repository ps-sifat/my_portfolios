import React, { useEffect, useState } from "react";
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
  Loader,
  Gallery,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Optimized loader timing: 1s for smooth transition
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
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
        <SectionWrapper id="achievements">
          <Hackathons />
        </SectionWrapper>
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="gallery">
          <Gallery />
        </SectionWrapper>
        <SectionWrapper id="contact" showStars={true}>
          <Contact />
        </SectionWrapper>
      </div>
    </>
  );
};

export default App;
