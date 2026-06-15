import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // In Storybook 9/10 the former "essentials" (Controls, Actions,
  // Viewport, ...) and Interactions are integrated into the core. addon-docs
  // provides the Docs tabs, addon-links the story linking.
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
