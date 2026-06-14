/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // In Storybook 9/10 sind die früheren "essentials" (Controls, Actions,
  // Viewport, ...) und Interactions im Core integriert. addon-docs liefert die
  // Docs-Tabs, addon-links die Story-Verlinkung.
  addons: ["@storybook/addon-links", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
