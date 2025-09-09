import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  "staticDirs": ["../node_modules/bootstrap/dist/css", "../node_modules/bootstrap-icons/font"]
};
export default config;