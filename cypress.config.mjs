import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Bildet das alte cypress.json (integrationFolder=".." + testFiles="**/*.cy-spec.js")
    // nach: es laufen nur die echten Tests (smoke + Board + Cell), die Cypress-
    // Default-Beispiele (*.spec.js) bleiben außen vor.
    specPattern: [
      "cypress/integration/**/*.cy-spec.js",
      "src/**/*.cy-spec.js",
    ],
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
