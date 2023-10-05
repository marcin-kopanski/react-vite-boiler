import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        microDemo: {
          external: "http://localhost:5002/assets/microDemo.js",
          from: "vite",
          externalType: "url",
        },
      },
      shared: ["react", "react-router-dom"],
    }),
    tsconfigPaths(),
  ],
  server: {
    proxy: { "/api": { target: "http://localhost:3000", changeOrigin: true } },
  },
  preview: {
    host: "localhost",
    port: 5000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
