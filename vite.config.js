import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages:
// repository: https://github.com/YOUR_USERNAME/portfolio
// website:    https://YOUR_USERNAME.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});