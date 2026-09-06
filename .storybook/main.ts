import type { StorybookConfig } from '@storybook/react-vite';
import { markdownGeneratorPlugin } from './plugins/markdown-generator';

const config: StorybookConfig = {
  "stories": [
    "../docs/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-mcp",
    "storybook-addon-tag-badges",
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }

    // Add markdown generator plugin for dev mode
    if (config.plugins) {
      config.plugins.push(markdownGeneratorPlugin());
    } else {
      config.plugins = [markdownGeneratorPlugin()];
    }
    return config;
  },
};
export default config;