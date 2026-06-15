import { defineConfig, devices } from "@playwright/test";

// Replaces the old cypress.config.ts.
// - Project "app": E2E against the running Vite app (port 1234)
// - Project "storybook": component tests against the Storybook iframe (port 6006)
// Both dev servers are started automatically via `webServer`
// (replaces start-server-and-test).
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
