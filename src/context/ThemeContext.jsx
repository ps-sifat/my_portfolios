import React, { createContext, useContext, useEffect, useState } from "react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  getSystemTheme,
  readStoredTheme,
} from "./theme";

const ThemeContext = createContext(null);

// The inline script in index.html already put the right class on <html>
// before first paint; read it back so React starts in sync with the page.
const getInitialIsDark = () => {
  if (typeof document !== "undefined") {
    const cls = document.documentElement.classList;
    if (cls.contains("dark")) return true;
    if (cls.contains("light")) return false;
  }
  return (readStoredTheme() ?? getSystemTheme()) === "dark";
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);
  // true once the visitor has picked a theme with the toggle.
  const [hasUserChoice, setHasUserChoice] = useState(
    () => readStoredTheme() !== null,
  );

  useEffect(() => {
    applyTheme(isDark ? "dark" : "light");
  }, [isDark]);

  // Follow the device setting live until the visitor makes their own choice.
  useEffect(() => {
    if (hasUserChoice || !window.matchMedia) return undefined;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setIsDark(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [hasUserChoice]);

  const setTheme = (nextIsDark) => {
    setIsDark(nextIsDark);
    setHasUserChoice(true);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
    } catch {
      /* storage blocked (private mode) — the choice lasts for this visit */
    }
  };

  const toggleTheme = () => setTheme(!isDark);

  /**
   * Circular clip-path reveal using the View Transitions API.
   * Falls back to an instant switch when unsupported or reduced motion is set.
   */
  const handleThemeClick = (event) => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!document.startViewTransition || prefersReduced) {
      toggleTheme();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy),
    );

    const root = document.documentElement;
    root.style.setProperty("--theme-cx", `${cx}px`);
    root.style.setProperty("--theme-cy", `${cy}px`);
    root.style.setProperty("--theme-r", `${radius}px`);

    document.startViewTransition(() => toggleTheme());
  };

  return (
    <ThemeContext.Provider value={{ isDark, handleThemeClick }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
