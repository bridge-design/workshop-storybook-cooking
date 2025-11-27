import React from 'react';

import {
  Controls,
  Subtitle,
  Primary
} from '@storybook/addon-docs/blocks';

import { ComponentDescription } from '../component-description/component-description';
import { ComponentStories } from '../component-stories/component-stories';
import { ComponentTitle } from '../component-title/component-title';
import { SectionHeading } from '../section-heading/section-heading';


export const DocsPage = () => {

  return (
    <>
      <ComponentTitle />
      <Subtitle />
      <SectionHeading>Overview</SectionHeading>
      <ComponentDescription />
      <Primary />
      <SectionHeading>Props</SectionHeading>
      <Controls />
      <SectionHeading>Variants</SectionHeading>
      <ComponentStories />
    </>
  );
};

