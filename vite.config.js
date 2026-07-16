import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    autoprefixer: {},
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom", "react-router-dom"],
                    three: ["three", "@react-three/fiber", "@react-three/drei"],
                    motion: ["framer-motion", "motion"],
                    icons: ["react-icons", "@react-icons/all-files"],
                    ui: ["react-parallax-tilt", "react-vertical-timeline-component"],
                },
            },
        },
    },
});