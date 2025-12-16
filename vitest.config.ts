import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    // Conditionally include storybookTest plugin only for story tests
    ...(process.env.TEST_MODE !== 'unit' ? [
      storybookTest({
        configDir: '.storybook',
        storybookUrl: 'http://localhost:6006',
        storybookScript: 'npm run storybook',
      })
    ] : []),
  ],
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
    // Include test files when running in unit test mode
    ...(process.env.TEST_MODE === 'unit' ? {
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      exclude: ['src/**/*.stories.{ts,tsx}', 'node_modules/**'],
    } : {}),
    setupFiles: ['./.storybook/vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.stories.tsx',
        'src/**/*.test.tsx',
        'src/**/*.d.ts',
        'src/**/index.ts',
      ],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },

  optimizeDeps: {
    include: ['@testing-library/react', '@testing-library/user-event', 'radix-ui', '@radix-ui/react-accordion'],
  },
});
