import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // three.js is only reached through lazy chunks (stars, globe, desk), so it
    // never blocks first paint; its size alone is expected.
    chunkSizeWarningLimit: 1200,
  },
});
