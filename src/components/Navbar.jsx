import React, { useEffect, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

const navbarLinks = navLinks;

const ThemeToggle = ({ id }) => {
  const { isDark, handleThemeClick } = useTheme();

  return (
    <button
      id={id}
      onClick={handleThemeClick}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
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
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        aria-hidden="true"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark
            ? "rotate(-90deg) scale(0.5)"
            : "rotate(0deg) scale(1)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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

      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        aria-hidden="true"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark
            ? "rotate(0deg) scale(1)"
            : "rotate(90deg) scale(0.5)",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#a78bfa"
          stroke="#a78bfa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
    let frameId = null;

    const updateScrolledState = () => {
      frameId = null;
      const nextIsScrolled = window.scrollY > 10;

      setIsScrolled((currentIsScrolled) =>
        currentIsScrolled === nextIsScrolled
          ? currentIsScrolled
          : nextIsScrolled,
      );
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrolledState);
      }
    };

    updateScrolledState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!toggle) return undefined;
    const onKey = (e) => e.key === "Escape" && setToggle(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <>
      <nav
        aria-label="Main"
        className={`w-full flex items-center justify-center fixed bg-transparent top-0 left-0 z-20 sm:px-16 px-6 transition-all duration-300 ${isScrolled ? "py-2.5 md:py-3 glass-navbar shadow-lg" : "py-4 md:py-5"
          }`}
      >
        <div className="w-full flex justify-between items-center site-container !py-4">
          <a
            href="#hero-section"
            className="flex items-center gap-2"
            aria-label="Sifat.dev — back to top"
            onClick={() => setActive("")}
          >
            <img className="w-6 h-9 object-contain" src={logo} alt="" aria-hidden="true" />
            <p className="text-[var(--text-primary)] text-[20px] font-bold font-poppins tracking-wider">
              Sifat.dev
            </p>
          </a>

          <div className="hidden sm:flex flex-row gap-2 items-center">
            <ul className="list-none flex flex-row gap-2 items-center">
              {navbarLinks.map((link) => (
                <li
                  key={link.id}
                  className={`navbar-link relative px-4 py-1.5 rounded-full cursor-pointer text-[15px] font-medium tracking-wide transition-all duration-300 overflow-hidden group flex items-center justify-center ${active === link.title
                    ? "text-white bg-[#915eff]"
                    : "text-secondary hover:text-white"
                    }`}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActive(link.title)}
                    aria-current={active === link.title ? "true" : undefined}
                    className="relative z-10 block w-full h-full text-center"
                  >
                    {link.title}
                  </a>
                  {active !== link.title && (
                    <span className="absolute inset-0 w-0 h-0 m-auto rounded-full bg-[#915eff] group-hover:w-32 group-hover:h-32 transition-all duration-500 ease-out z-0 opacity-0 group-hover:opacity-100" />
                  )}
                </li>
              ))}
            </ul>
            <ThemeToggle id="theme-toggle-btn" />
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
            <ThemeToggle id="theme-toggle-btn-mobile" />
            <button
              type="button"
              onClick={() => setToggle((isOpen) => !isOpen)}
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              aria-controls="mobile-menu"
              className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <img
                src={toggle ? close : menu}
                alt=""
                aria-hidden="true"
                className="w-[28px] h-[28px] object-contain menu-icon"
              />
            </button>
            <div
              id="mobile-menu"
              style={{
                // near-opaque so page text does not show through the links
                background: "color-mix(in srgb, var(--bg-primary) 94%, transparent)",
              }}
              className={`p-6 glass-card backdrop-blur-xl absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-2xl border border-[var(--border-subtle)] ${!toggle
                ? "hidden"
                : "flex justify-center py-4 items-center animate-fade-in"
                }`}
            >
              <ul className="list-none flex justify-end items-stretch flex-col gap-3 w-full">
                {navbarLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`navbar-link relative px-4 py-2 rounded-xl cursor-pointer text-[14px] font-medium tracking-wide transition-all duration-300 overflow-hidden group flex items-center justify-center ${active === link.title
                      ? "text-white bg-[#915eff]"
                      : "text-secondary hover:text-white"
                      }`}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                      aria-current={active === link.title ? "true" : undefined}
                      className="relative z-10 block w-full h-full text-center"
                    >
                      {link.title}
                    </a>
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
