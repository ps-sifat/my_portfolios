import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
const testimonials = [
  {
    testimonial:
      "Sifat demonstrated exceptional problem-solving ability and attention to detail during the MERN Stack Development program. His Food Panda project and hotel booking app showed a strong grasp of modern React component design and responsive architecture.",
    name: "Shafiul Islam",
    designation: "Senior Lead Instructor",
    company: "Creative IT Institute",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    testimonial:
      "Collaborating with Sifat on our Food Panda web contest project was a great experience. His mastery over UI layout, CSS grid/flexbox, and modern frontend styling helped our team build an impressive landing page.",
    name: "Tanvir Ahmed",
    designation: "Web Developer & Teammate",
    company: "Creative IT Web Contest",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    testimonial:
      "Sifat brings intense passion and focus to hackathons. During the SUST CSE Carnival 2026 AI Hackathon, his fast prototyping skills in React and smooth component integrations enabled Team ASOFT to build a solid solution.",
    name: "Rahim Uddin",
    designation: "Team Lead @ ASOFT",
    company: "SUST AI Hackathon 2026",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 5,
  },
];

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  rating = 5,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className="glass-card p-8 rounded-3xl sm:w-[360px] w-full flex flex-col justify-between hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(145,94,255,0.15)] transition-all duration-300 select-none border border-white/10 group"
  >
    <div>
      {/* Top row: Quote icon and star ratings */}
      <div className="flex justify-between items-center mb-6">
        <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-[#915eff]">
          <FaQuoteLeft className="text-2xl group-hover:scale-110 transition-transform filter drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]" />
        </div>
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <FaStar
              key={i}
              className="text-amber-400 text-sm filter drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]"
            />
          ))}
        </div>
      </div>

      {/* Testimonial body text */}
      <p className="text-[var(--text-primary)] font-medium text-[16px] leading-[26px] tracking-wide mb-6 italic">
        "{testimonial}"
      </p>
    </div>

    {/* User profile footer */}
    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
      <div className="flex-1 min-w-0">
        <h4 className="text-[var(--text-primary)] font-bold text-[16px] truncate">
          <span className="text-[#915eff]">@</span> {name}
        </h4>
        <p className="mt-0.5 text-secondary text-[12px] font-medium truncate">
          {designation} of{" "}
          <span className="text-purple-300 font-semibold">{company}</span>
        </p>
      </div>

      <img
        src={image}
        alt={`feedback-by-${name}`}
        className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/40 shadow-md group-hover:border-[#915eff] transition-colors"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section
      id="feedbacks"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="bg-gradient-to-r from-purple-950/40 via-indigo-950/20 to-purple-950/40 border border-purple-500/20 rounded-[30px] p-8 sm:p-12 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-7 justify-center items-stretch">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
