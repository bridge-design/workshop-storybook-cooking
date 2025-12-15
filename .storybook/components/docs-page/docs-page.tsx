import React from 'react';

import {
  Controls,
  Subtitle,
  Primary
} from '@storybook/addon-docs/blocks';

import { ComponentDescription } from '../component-description/component-description';
import { ComponentImport } from '../component-import/component-import';
import { ComponentStories } from '../component-stories/component-stories';
import { ComponentTitle } from '../component-title/component-title';
import { SectionHeading } from '../section-heading/section-heading';
import { StyledArgTypes } from '../styled-arg-types/styled-arg-types';
import { StyledStoryToolbar } from '../styled-story-toolbar/styled-story-toolbar';

export const DocsPage = () => {

  return (
    <>
      <ComponentTitle />
      <Subtitle />
      <SectionHeading>Overview</SectionHeading>
      <ComponentDescription />
      <ComponentImport />
      <StyledStoryToolbar>
        <Primary />
      </StyledStoryToolbar>
      <SectionHeading>Props</SectionHeading>
      <Controls />
      <SectionHeading>Variants</SectionHeading>
      <ComponentStories />
    </>
  );
};

