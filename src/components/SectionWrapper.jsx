import React from "react";
import { motion } from "framer-motion";

/**
 * Wraps a section so its children's `variants` (hidden → show) play once
 * when the section scrolls into view. The section component itself owns the
 * `<section id>` used by the navbar anchors.
 */
const SectionWrapper = ({ children }) => (
  <motion.div
    className="relative z-0"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.div>
);

export default SectionWrapper;
