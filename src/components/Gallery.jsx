import React, { useRef } from "react";
import { styles } from "../style";
import { useTheme } from "../context/ThemeContext";
import SphereGallery3D from "./SphereGallery3D";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import darkAboutPhoto from "../assets/about/dark-mode-about-photo.webp";
import lightAboutPhoto from "../assets/about/white-mood-about-photo.webp";

// Put your photos in src/assets/gallery. Vite loads supported image files here
// automatically, so no new import is needed when you add another photo.
const galleryFolderImages = Object.entries(
  import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    query: "?url",
    import: "default",
  }),
)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([, image]) => image);

const galleryImages = galleryFolderImages.length
  ? galleryFolderImages
  : [lightAboutPhoto, darkAboutPhoto];

const galleryItems = galleryImages.map((image) => ({
  image,
  link: "",
}));

const Gallery = () => {
  const { isDark } = useTheme();
  const frameRef = useRef(null);
  // Photos and the WebGL context are only created once the gallery is near.
  const shouldMount = useInView(frameRef, { once: true, rootMargin: "400px" });
  const reducedMotion = usePrefersReducedMotion();

  const coreColor = isDark ? "#915effcc" : "#7c3aedcc";
  const lineColor = isDark ? "#915eff66" : "#7c3aed66";

  return (
    <section
      id="gallery"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,65fr)_minmax(0,35fr)]">
        <div className="order-1 min-w-0">
          <div
            ref={frameRef}
            role="img"
            aria-label={`Interactive 3D sphere of ${galleryItems.length} photos`}
            className="gallery-canvas-frame h-[420px] w-full overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[var(--glass-shadow)] sm:h-[540px]"
          >
            {shouldMount && (
            <SphereGallery3D
              images={galleryItems}
              branches={galleryItems.length}
              background="transparent"
              scale={58}
              size={80}
              scatter={5}
              speed={reducedMotion ? 0 : 18}
              hover={180}
              rounded={22}
              core={{
                coreSize: 24,
                coreColor,
                lineColor,
              }}
              className="h-full w-full"
              style={{ minWidth: 0, minHeight: 0 }}
            />
            )}
          </div>
        </div>

        <div className="order-2 min-w-0 lg:px-2">
          <p className={`${styles.sectionSubText} text-secondary`}>My Photos</p>
          <h2 className="text-[var(--text-primary)] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Gallery.
          </h2>
          <p className="mt-4 text-secondary text-[16px] leading-relaxed">
            A small collection of my work, learning journey, and favorite
            moments. Drag to rotate, scroll to zoom.
          </p>
          <div className="mt-6 inline-flex items-center rounded-full bg-[var(--bg-card)] px-4 py-2 text-[13px] font-semibold text-[var(--accent)] shadow-[var(--neo-raised-small)]">
            {galleryItems.length} photos in this collection
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
