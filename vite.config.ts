import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// One config for the app build (Vite) and unit tests (Vitest).
export default defineConfig({
  plugins: [react()],
  server: {
    // Keep port 1234 so Playwright (webServer) can find the app.
    port: 1234,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    // Playwright tests in e2e/ also end in .spec.ts –
    // exclude them here so Vitest does not pick them up.
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
});
