import React from 'react';
import type { Preview } from '@storybook/react-vite'
import { DocsPage } from './components/docs-page/docs-page'
import { TocTitle } from './components/toc-title/toc-title';

import '@/src/tokens/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    versions: {
      current: 'v1.17.3',
      previous: [
        { name: 'v1.17.2', url: 'https://example.com/v1.17.2' },
        { name: 'v1.17.1', url: 'https://example.com/v1.17.1' },
        { name: 'v1.17.0', url: 'https://example.com/v1.17.0' },
      ],
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    docs: {
      toc: {
        headingSelector: 'h2, [data-include-toc]',
        title: React.createElement(TocTitle),
        ignoreSelector: '[data-skip-toc]',
      },
      page: DocsPage,
    },
  },
};

export default preview;