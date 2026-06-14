import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Eine Config für App-Build (Vite) und Unit-Tests (Vitest).
export default defineConfig({
  plugins: [react()],
  server: {
    // Port 1234 beibehalten, damit `test:e2e` (start-server-and-test) greift.
    port: 1234,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
  },
});
