import React from 'react';
import { Layout } from '@/src/components';
const meta = {
    title: 'Components/Layout',
    component: Layout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
const sampleChildren = (<>
    <div style={{ backgroundColor: 'pink' }}>Placeholder content</div>
  </>);
export const Default = {
    args: {
        children: sampleChildren,
        style: { 'backgroundColor': 'lightblue' },
    },
};
export const Wide = {
    args: {
        children: sampleChildren,
        style: { '--layout-max-width': '1200px', 'backgroundColor': 'lightblue' },
    },
};
