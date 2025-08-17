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
        className={`w-full flex items-center justify-center  fixed bg-transparent top-0 left-0  z-20  sm:px-16 px-6${
          isScrolled
            ? "py-3 md:py-3 !bg-primary shadow-md backdrop-blur-lg  "
            : "py-4 md:py-5 "
        }`}
      >
        <div className="w-full flex justify-between items-center container !py-5  ">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img className="w-6 h-9 object-contain" src={logo} alt="logo" />
            <p className="text-white text-[20px] font-bold font-poppins">
              Sifat
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] cursor-pointer font-medium `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[130px] min-h-[140px] z-10 rounded-xl  ${
                !toggle ? "hidden" : "flex justify-center py-1.5 items-center"
              }`}
            >
              <ul className="list-none flex justify-end items-start flex-col gap-4  ">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
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
