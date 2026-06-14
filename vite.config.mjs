import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Eine Config für App-Build (Vite) und Unit-Tests (Vitest).
export default defineConfig({
  plugins: [react()],
  server: {
    // Port 1234 beibehalten, damit `test:e2e` (start-server-and-test) greift.
    port: 1234,
  },
  // Einige Stories und Storybook-Boilerplate-Komponenten enthalten JSX in
  // .js-Dateien (z.B. Cell.stories.js, Button.js). esbuild parst .js sonst ohne
  // JSX – Loader für Projekt-Dateien deshalb auf "jsx" stellen (Transform + Dep-Scan).
  esbuild: {
    loader: "jsx",
    include: [/src\/.*\.[jt]sx?$/],
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
  },
});
