import React from 'react';

import {
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
import { CopyAsMarkdown } from '../copy-as-markdown/copy-as-markdown';
import styles from './docs-page.module.css';
import { Footer } from '../footer/footer';


export const DocsPage = () => {

  return (
    <>
      <div className={styles.header}>
        <ComponentTitle />
        <CopyAsMarkdown />
      </div>
      <Subtitle />
      <SectionHeading>Overview</SectionHeading>
      <ComponentDescription />
      <ComponentImport />
      <StyledStoryToolbar>
        <Primary />
      </StyledStoryToolbar>
      <SectionHeading>Props</SectionHeading>
      <StyledArgTypes />
      <SectionHeading>Variants</SectionHeading>
      <ComponentStories />
      <Footer />
    </>
  );
};

