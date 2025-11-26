import { makeLiveEditStory } from 'storybook-addon-code-editor';
import * as MyUi from '@/components';
export const createCodeDemo = ({ story, componentName, props, code, availableImports, }) => makeLiveEditStory(story, {
    availableImports: { '@manychat/manyui': MyUi, ...availableImports },
    code: code ||
        `import React from 'react'
import { ${componentName} } from '@manychat/manyui'

export default () => {
  return (
    <${componentName}
      ${Object.entries(props || {})
            .map(([key, value]) => {
            if (value === undefined)
                return '';
            if (typeof value === 'string')
                return `${key}="${value}"`;
            return `${key}={${JSON.stringify(value)}}`;
        })
            .filter(Boolean)
            .join('\n      ')}
    />
  )
}
  `,
});
export const CodeDemoStoryParams = {
    parameters: {
        docs: {
            excludeFromStoryGrid: true,
        },
        controls: { disable: true },
        liveCodeEditor: {
            disable: false,
        },
        actions: {
            disable: true,
        },
        a11y: { disable: true },
    },
};
