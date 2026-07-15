import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

/* ─── Sun / Moon Toggle Button ─── */
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        borderColor: "var(--accent)",
        background: isDark
          ? "rgba(145, 94, 255, 0.1)"
          : "rgba(255, 200, 50, 0.12)",
        boxShadow: isDark
          ? "0 0 12px rgba(145, 94, 255, 0.25)"
          : "0 0 12px rgba(255, 200, 50, 0.35)",
      }}
    >
      {/* Sun icon */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </span>

      {/* Moon icon */}
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#a78bfa" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(true); // Always scrolled style on other pages
      }
    };

    handleScroll(); // Call immediately on mount or route change
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`w-full flex items-center justify-center fixed bg-transparent top-0 left-0 z-20 sm:px-16 px-6 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 md:py-3 glass-navbar shadow-lg"
            : "py-4 md:py-5"
        }`}
      >
        <div className="w-full flex justify-between items-center container !py-4">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img className="w-6 h-9 object-contain" src={logo} alt="logo" />
            <p className="text-white text-[20px] font-bold font-poppins tracking-wider">
              Sifat.dev
            </p>
          </Link>

          {/* Desktop nav links + theme toggle */}
          <div className="hidden sm:flex flex-row gap-2 items-center">
            <ul className="list-none flex flex-row gap-2 items-center">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`relative px-4 py-1.5 rounded-full cursor-pointer text-[15px] font-medium tracking-wide transition-all duration-300 overflow-hidden group flex items-center justify-center ${
                    active === link.title ? "text-white bg-[#915eff]" : "text-secondary hover:text-white"
                  }`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`} className="relative z-10 block w-full h-full text-center">
                    {link.title}
                  </a>
                  {/* Expanding background circle on hover */}
                  {active !== link.title && (
                    <span className="absolute inset-0 w-0 h-0 m-auto rounded-full bg-[#915eff] group-hover:w-32 group-hover:h-32 transition-all duration-500 ease-out z-0 opacity-0 group-hover:opacity-100" />
                  )}
                </li>
              ))}
            </ul>
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile: hamburger + theme toggle */}
          <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
            <ThemeToggle />
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-6 glass-card backdrop-blur-xl absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-2xl border border-white/10 ${
                !toggle ? "hidden" : "flex justify-center py-4 items-center animate-fade-in"
              }`}
            >
              <ul className="list-none flex justify-end items-stretch flex-col gap-3 w-full">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`relative px-4 py-2 rounded-xl cursor-pointer text-[14px] font-medium tracking-wide transition-all duration-300 overflow-hidden group flex items-center justify-center ${
                      active === link.title ? "text-white bg-[#915eff]" : "text-secondary hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`} className="relative z-10 block w-full h-full text-center">
                      {link.title}
                    </a>
                    {/* Expanding background circle on hover */}
                    {active !== link.title && (
                      <span className="absolute inset-0 w-0 h-0 m-auto rounded-full bg-[#915eff] group-hover:w-48 group-hover:h-48 transition-all duration-500 ease-out z-0 opacity-0 group-hover:opacity-100" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
