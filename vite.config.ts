import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "src/features"),
      "@design-system": path.resolve(__dirname, "src/shared/design-system"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
