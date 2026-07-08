import React from "react";
import { StarsCanvas } from "./canvas";

const SectionWrapper = ({ children, id, showStars = true }) => {
  return (
    <section id={id} className="relative z-0">
      {showStars && <StarsCanvas />}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
