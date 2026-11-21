// Keep in sync with the pre-paint script in index.html. New key on purpose:
// the old "theme" key was saved automatically and was not a real user choice.
export const THEME_STORAGE_KEY = "theme-preference";
const LEGACY_KEY = "theme";

const THEME_COLORS = { dark: "#050816", light: "#e7e9f1" };

export const readStoredTheme = () => {
  try {
    localStorage.removeItem(LEGACY_KEY);
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
};

export const getSystemTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

export const applyTheme = (theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
};
