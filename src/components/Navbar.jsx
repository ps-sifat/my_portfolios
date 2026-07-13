import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

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
          <ul className="list-none hidden sm:flex flex-row gap-2 items-center">
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

          <div className="sm:hidden flex flex-1 justify-end items-center">
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
