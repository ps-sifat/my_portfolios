// 3D canvases are intentionally NOT re-exported here: importing them from this
// barrel would pull three.js and the desk model into the main bundle. Import
// them directly (lazily) from ./canvas/* where they are used.
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";
import Education from "./Education";
import Hackathons from "./Hackathons";
import SectionWrapper from "./SectionWrapper";
import Loader from "./Loader";
import Gallery from "./Gallery";

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  Education,
  Hackathons,
  SectionWrapper,
  Loader,
  Gallery,
};
