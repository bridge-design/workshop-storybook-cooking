import { markdownIndexer } from "./markdown-indexer";
import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "node:url";
import { rollupMdToCsfPlugin } from "./markdown-to-csf";

const __filename = fileURLToPath(import.meta.url);

const config: StorybookConfig = {
  stories: [
    "../CONTRIBUTING.md",
    "../CHANGELOG.md",
    "../docs/**/*.md",
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "storybook-addon-code-editor",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  experimental_indexers: async (existingIndexers) => {
    return [markdownIndexer, ...(existingIndexers ?? [])];
  },

  async viteFinal(config) {
    // Dynamic import is the recommended, see here: https://storybook.js.org/docs/builders/vite#configuration
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, { plugins: [rollupMdToCsfPlugin()] });
  },
  previewHead: (head) => `
    ${head}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/obsidian.min.css"
    />
    <script
      crossorigin
      src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
    ></script>`,
};
export default config;