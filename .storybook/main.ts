import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

const config: StorybookConfig = {
  "stories": [
    "../docs/**/*.mdx",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook-addon-code-editor"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
};
export default config;