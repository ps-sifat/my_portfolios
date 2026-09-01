import React from "react";
import { styles } from "../style";
import { useTheme } from "../context/ThemeContext";
import SphereGallery3D from "./SphereGallery3D";
import darkAboutPhoto from "../assets/about/dark-mode-about-photo.png";
import lightAboutPhoto from "../assets/about/white-mood-about-photo.png";

// Put your photos in src/assets/gallery. Vite loads supported image files here
// automatically, so no new import is needed when you add another photo.
const galleryFolderImages = Object.values(
  import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);

// Keep the section populated until you add your own photos to the folder.
const galleryImages = galleryFolderImages.length
  ? galleryFolderImages
  : [lightAboutPhoto, darkAboutPhoto];

const galleryItems = galleryImages.map((image) => ({
  image,
  link: "",
}));

const Gallery = () => {
  const { isDark } = useTheme();

  const coreColor = isDark ? "#915effcc" : "#7c3aedcc";
  const lineColor = isDark ? "#915eff66" : "#7c3aed66";

  return (
    <section
      id="gallery"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div>
        <p className={`${styles.sectionSubText} text-secondary`}>My Photos</p>
        <h2 className="text-[var(--text-primary)] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Gallery.
        </h2>
        <p className="mt-4 max-w-2xl text-secondary text-[16px] leading-relaxed">
          A small collection of my work, learning journey, and favorite moments.
          Drag the sphere to explore it.
        </p>
      </div>

      <div className="mt-8 h-[420px] w-full overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[var(--glass-shadow)] sm:h-[540px]">
        <SphereGallery3D
          images={galleryItems}
          branches={12}
          background="transparent"
          scale={58}
          size={80}
          scatter={5}
          speed={18}
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
      </div>
    </section>
  );
};

export default Gallery;
