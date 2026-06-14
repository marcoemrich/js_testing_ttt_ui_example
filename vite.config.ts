import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// Eine Config für App-Build (Vite) und Unit-Tests (Vitest).
export default defineConfig({
  plugins: [react()],
  server: {
    // Port 1234 beibehalten, damit Playwright (webServer) die App findet.
    port: 1234,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    // Playwright-Tests in e2e/ enden ebenfalls auf .spec.ts –
    // hier ausschließen, damit Vitest sie nicht aufsammelt.
    exclude: [...configDefaults.exclude, "e2e/**"],
  },
});
