import { defineConfig, devices } from "@playwright/test";

// Ersetzt die alte cypress.config.ts.
// - Projekt "app": E2E gegen die laufende Vite-App (Port 1234)
// - Projekt "storybook": Komponenten-Tests gegen die Storybook-iframe (Port 6006)
// Beide Dev-Server werden über `webServer` automatisch gestartet
// (ersetzt start-server-and-test).
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "app",
      testMatch: /smoke\.spec\.ts$/,
      use: { ...devices["Desktop Chrome"], baseURL: "http://localhost:1234" },
    },
    {
      name: "storybook",
      testMatch: /\.story\.spec\.ts$/,
      use: { ...devices["Desktop Chrome"], baseURL: "http://localhost:6006" },
    },
  ],
  webServer: [
    {
      command: "npm run start",
      url: "http://localhost:1234",
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    {
      command: "npm run storybook",
      url: "http://localhost:6006",
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  ],
});
