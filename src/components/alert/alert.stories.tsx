import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { PropsCategory } from '@/.storybook/constants';

import { Alert } from '@/src/components';


const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['Info', 'Warning', 'Success', 'Danger'],
      table: {
        category: PropsCategory.ACCESSIBILITY,
      },
    },
    icon: {
      control: 'boolean',
      table: {
        category: PropsCategory.APPEARANCE,
      },
    },
    link: {
      control: 'boolean',
      table: {
        category: PropsCategory.APPEARANCE,
      },
    },
    dismissible: {
      control: 'boolean',
      table: {
        category: PropsCategory.APPEARANCE,
      },
    },
    text: {
      control: 'text',
      table: {
        category: PropsCategory.CONTENT,
      },
    },
    linkLabel: {
      control: 'text',
      table: {
        category: PropsCategory.CONTENT,
      },
    },
    onDismiss: {
      action: 'dismissed',
      table: {
        category: PropsCategory.EVENTS,
      },
    },
  },
  tags: ["autodocs", "beta"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  variant: 'Info' as const,
  icon: true,
  link: true,
  dismissible: true,
  text: 'Emphasized description.',
  linkLabel: 'Link',
  onDismiss: fn(),
}

export const Controls: Story = {
  args: defaultArgs,
}

/**
 * Info variant is used for informational messages.
 * Use cases:
 * - General information
 * - Tips and hints
 * - System updates
 * - Feature announcements
 */
export const Info: Story = {
  args: {
    ...defaultArgs,
    variant: 'Info',
  },
}

/**
 * Warning variant is used for cautionary messages.
 * Use cases:
 * - Important notices
 * - Upcoming changes
 * - Action required warnings
 * - Deprecation notices
 */
export const Warning: Story = {
  args: {
    ...defaultArgs,
    variant: 'Warning',
  },
}

/**
 * Success variant is used for positive confirmation messages.
 * Use cases:
 * - Successful operations
 * - Completion confirmations
 * - Achievement notifications
 * - Positive feedback
 */
export const Success: Story = {
  args: {
    ...defaultArgs,
    variant: 'Success',
  },
}

/**
 * Danger variant is used for critical error messages.
 * Use cases:
 * - Error notifications
 * - Critical warnings
 * - System failures
 * - Security alerts
 */
export const Danger: Story = {
  args: {
    ...defaultArgs,
    variant: 'Danger',
  },
}

/**
 * Alert without icon.
 * Use cases:
 * - Minimal design requirements
 * - Space-constrained layouts
 * - When icon is redundant
 */
export const WithoutIcon: Story = {
  args: {
    ...defaultArgs,
    icon: false,
  },
}

/**
 * Alert without link.
 * Use cases:
 * - Simple notifications
 * - When no action is needed
 * - Standalone messages
 */
export const WithoutLink: Story = {
  args: {
    ...defaultArgs,
    link: false,
  },
}

/**
 * Non-dismissible alert.
 * Use cases:
 * - Critical system messages
 * - Required acknowledgments
 * - Persistent notifications
 */
export const NonDismissible: Story = {
  args: {
    ...defaultArgs,
    dismissible: false,
  },
}

/**
 * Alert with custom content using children prop.
 * When children are provided, text and linkLabel are ignored.
 */
export const CustomContent: Story = {
  args: {
    ...defaultArgs,
    children: (
      <>
        <span>Custom alert message with <strong>bold text</strong>.</span>
        <a href="#" onClick={(e) => e.preventDefault()}>Learn more</a>
      </>
    ),
  },
}

/**
 * All alert variants displayed together.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Alert variant="Info" text="This is an info alert" />
      <Alert variant="Warning" text="This is a warning alert" />
      <Alert variant="Success" text="This is a success alert" />
      <Alert variant="Danger" text="This is a danger alert" />
    </div>
  ),
}


