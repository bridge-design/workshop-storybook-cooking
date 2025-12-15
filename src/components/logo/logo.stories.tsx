import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '@/src/components';


const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: 'text',
      table: {
        type: { summary: 'number | string', detail: 'number → px; or CSS length string like "2rem", "50%"' },
      },
    },
    height: {
      control: 'text',
      table: {
        type: { summary: 'number | string', detail: 'number → px; or CSS length string like "2rem", "50%"' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'blank'],
      table: {
        type: { summary: "'default' | 'blank'" },
        defaultValue: { summary: 'default' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {};

export const Controls: Story = {
  args: defaultArgs,
}

/**
 * Default logo size displays the brand logo at standard size.
 * Use cases:
 * - Navigation bars
 * - Headers
 * - Brand identity
 * - Application branding
 */
export const Default: Story = {
  args: defaultArgs,
}

/**
 * Logo with custom size.
 * Use cases:
 * - Different layout contexts
 * - Responsive designs
 * - Footer logos
 * - Mobile navigation
 */
export const CustomSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Logo width={24} height={24} />
      <Logo width={32} height={32} />
      <Logo width={48} height={48} />
      <Logo width={64} height={64} />
    </div>
  ),
}

/**
 * Logo with blank variant uses the blank color token.
 * Use cases:
 * - Light backgrounds
 * - Header components with gradient backgrounds
 * - High contrast contexts
 */
export const BlankVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', background: 'var(--ds-color-semantic-background-accent)', padding: '16px', borderRadius: '8px' }}>
      <Logo variant="default" />
      <Logo variant="blank" />
    </div>
  ),
}
