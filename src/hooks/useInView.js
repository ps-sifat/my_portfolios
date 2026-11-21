import { useEffect, useState } from "react";

/**
 * Tracks whether `ref` is near the viewport.
 * - `once: true`  → flips to true the first time and stays true (use for lazy mounting).
 * - `once: false` → follows visibility (use for pausing animation loops).
 */
export const useInView = (ref, { rootMargin = "200px", once = false } = {}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin, once]);

  return inView;
};
