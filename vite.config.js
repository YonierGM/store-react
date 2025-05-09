import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    visualizer({
      open: true, // Abre el reporte automáticamente
    }),
    react(),
  ],
});
