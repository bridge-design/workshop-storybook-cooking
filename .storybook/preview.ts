import type { Preview } from '@storybook/react-vite'
import React, { useEffect } from 'react';
import { addons } from 'storybook/preview-api';

import '@/src/tokens/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

  },
  decorators: [
    (Story, context) => {
      const DirectionWrapper = () => {
        const direction = (context.globals.direction as 'ltr' | 'rtl') || 'ltr';
        
        useEffect(() => {
          // Apply direction to the document
          document.documentElement.setAttribute('dir', direction);
          
          // Also apply to the preview iframe if it exists
          const iframe = document.querySelector('#storybook-preview-iframe') as HTMLIFrameElement;
          if (iframe?.contentDocument) {
            iframe.contentDocument.documentElement.setAttribute('dir', direction);
          }
        }, [direction]);

        // Listen for global updates
        useEffect(() => {
          const channel = addons.getChannel();
          const handleGlobalsUpdate = (update: { globals?: Record<string, unknown> }) => {
            if (update.globals?.direction) {
              const newDir = update.globals.direction as 'ltr' | 'rtl';
              document.documentElement.setAttribute('dir', newDir);
              const iframe = document.querySelector('#storybook-preview-iframe') as HTMLIFrameElement;
              if (iframe?.contentDocument) {
                iframe.contentDocument.documentElement.setAttribute('dir', newDir);
              }
            }
          };

          channel.on('updateGlobals', handleGlobalsUpdate);
          return () => {
            channel.off('updateGlobals', handleGlobalsUpdate);
          };
        }, []);

        return React.createElement(Story);
      };

      return React.createElement(DirectionWrapper);
    },
  ],
};

export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Text direction',
    defaultValue: 'ltr',
    toolbar: {
      icon: 'paragraph',
      items: [
        { value: 'ltr', title: 'Left to Right' },
        { value: 'rtl', title: 'Right to Left' },
      ],
      showName: false,
    },
  },
};

export default preview;