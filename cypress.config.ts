import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Bildet das alte cypress.json (integrationFolder=".." + testFiles="**/*.cy-spec.js")
    // nach: es laufen nur die echten Tests (smoke + Board + Cell), die Cypress-
    // Default-Beispiele (*.spec.js) bleiben außen vor.
    specPattern: [
      "cypress/integration/**/*.cy-spec.{js,ts}",
      "src/**/*.cy-spec.{js,ts}",
    ],
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
