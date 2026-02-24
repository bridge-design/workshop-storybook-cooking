import React, { useContext }  from 'react';

import {
  Controls,
  Stories,
  DocsContext,
  Subtitle,
  Primary
} from '@storybook/addon-docs/blocks';

import { ComponentDescription } from '../component-description/component-description';
import { ComponentTitle } from '../component-title/component-title';
import { SectionHeading } from '../section-heading/section-heading';
import { StyledStoryToolbar } from '../styled-story-toolbar/styled-story-toolbar';

export const DocsPage = () => {

  const context = useContext(DocsContext);

  const componentStories = context.componentStories();

  const stories = componentStories
    .filter((story) => !story.parameters?.['docs']?.disable)
    .slice(1);

  const isSingleStory = Object.keys(stories).length === 1;

  return (
    <>
      <ComponentTitle />
      <Subtitle />
      <SectionHeading>Overview</SectionHeading>
      <ComponentDescription />
      <StyledStoryToolbar>
        <Primary />
      </StyledStoryToolbar>
      <SectionHeading>Props</SectionHeading>
      <Controls />
      {isSingleStory ? null : (
        <>
          <SectionHeading>Variants</SectionHeading>
          <Stories />
        </>
      )}
    </>
  );
};

