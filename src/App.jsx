import React, { Suspense, lazy, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
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

// Background star field: loaded after the main UI so three.js never blocks first paint.
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Loader fades out at LOADER_FADE_MS and is removed once the fade has finished.
const LOADER_FADE_MS = 800;
const LOADER_REMOVE_MS = LOADER_FADE_MS + 300;

const App = () => {
  const [loaderState, setLoaderState] = useState("visible");

  useEffect(() => {
    const fade = window.setTimeout(() => setLoaderState("fading"), LOADER_FADE_MS);
    const remove = window.setTimeout(() => setLoaderState("gone"), LOADER_REMOVE_MS);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {loaderState !== "gone" && <Loader fading={loaderState === "fading"} />}
      <div className="relative z-0 bg-primary">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
        <Navbar />
        <main id="main">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Hero />
          </div>
          <SectionWrapper>
            <About />
          </SectionWrapper>
          <SectionWrapper>
            <Experience />
          </SectionWrapper>
          <SectionWrapper>
            <Tech />
          </SectionWrapper>
          <SectionWrapper>
            <Works />
          </SectionWrapper>
          <SectionWrapper>
            <Hackathons />
          </SectionWrapper>
          <SectionWrapper>
            <Education />
          </SectionWrapper>
          <SectionWrapper>
            <Gallery />
          </SectionWrapper>
          <SectionWrapper>
            <Contact />
          </SectionWrapper>
        </main>
      </div>
    </MotionConfig>
  );
};

export default App;
