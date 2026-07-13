import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaCalendarAlt, FaAward, FaLightbulb } from "react-icons/fa";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { hackathons, achievements } from "../constants";

const HackathonCard = ({ event, team, role, date, description, tags, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-[#915eff] text-2xl">
            <FaTrophy className="filter drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]" />
          </div>
          <span className="flex items-center gap-1 text-[12px] text-secondary font-medium bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            <FaCalendarAlt className="text-[10px]" />
            {date}
          </span>
        </div>

        <h3 className="text-white font-bold text-[20px] tracking-wide mb-1">
          {event}
        </h3>
        <p className="text-purple-400 font-semibold text-[14px] mb-3">
          Role: {role}
        </p>

        <div className="flex flex-wrap gap-4 text-secondary text-[13px] mb-4 bg-white/5 p-3 rounded-lg border border-white/5">
          <div className="flex items-center gap-1.5">
            <FaUsers className="text-[#915eff]" />
            <span>Team: <b className="text-white font-medium">{team}</b></span>
          </div>
        </div>

        <p className="text-secondary text-[14px] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[11px] font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const AchievementItem = ({ title, year, description, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", index * 0.2, 0.75)}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
    >
      <div className="text-2xl p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="text-white font-bold text-[16px] tracking-wide">
            {title}
          </h4>
          <span className="text-[11px] font-semibold text-secondary bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
            {year}
          </span>
        </div>
        <p className="text-secondary text-[13px] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Hackathons = () => {
  return (
    <section id="hackathons" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Competitive Coding & Achievements</p>
        <h2 className={styles.sectionHeadText}>Hackathons &amp; Activities.</h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Hackathons & Challenges Column */}
        <div className="flex flex-col gap-6">
          <motion.h3
            variants={fadeIn("right", "tween", 0.1, 0.5)}
            className="text-white font-bold text-[22px] tracking-wide flex items-center gap-2"
          >
            <FaLightbulb className="text-[#915eff] filter drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]" />
            <span>Hackathons</span>
          </motion.h3>

          <div className="grid grid-cols-1 gap-6">
            {hackathons.map((hack, index) => (
              <HackathonCard key={`hack-${index}`} index={index} {...hack} />
            ))}
          </div>
        </div>

        {/* Key Achievements Column */}
        <div className="flex flex-col gap-6">
          <motion.h3
            variants={fadeIn("left", "tween", 0.1, 0.5)}
            className="text-white font-bold text-[22px] tracking-wide flex items-center gap-2"
          >
            <FaAward className="text-[#915eff] filter drop-shadow-[0_0_8px_rgba(145,94,255,0.5)]" />
            <span>Honors &amp; Achievements</span>
          </motion.h3>

          <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
            {achievements.map((ach, index) => (
              <AchievementItem
                key={`ach-${index}`}
                index={index}
                title={ach.title}
                year={ach.year}
                description={ach.description}
                icon={ach.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
