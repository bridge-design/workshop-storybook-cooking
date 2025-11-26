import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@/src/components';
declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Info variant is used for informational messages.
 * Use cases:
 * - General information
 * - Tips and hints
 * - System updates
 * - Feature announcements
 */
export declare const Info: Story;
/**
 * Warning variant is used for cautionary messages.
 * Use cases:
 * - Important notices
 * - Upcoming changes
 * - Action required warnings
 * - Deprecation notices
 */
export declare const Warning: Story;
/**
 * Success variant is used for positive confirmation messages.
 * Use cases:
 * - Successful operations
 * - Completion confirmations
 * - Achievement notifications
 * - Positive feedback
 */
export declare const Success: Story;
/**
 * Danger variant is used for critical error messages.
 * Use cases:
 * - Error notifications
 * - Critical warnings
 * - System failures
 * - Security alerts
 */
export declare const Danger: Story;
/**
 * Alert without icon.
 * Use cases:
 * - Minimal design requirements
 * - Space-constrained layouts
 * - When icon is redundant
 */
export declare const WithoutIcon: Story;
/**
 * Alert without link.
 * Use cases:
 * - Simple notifications
 * - When no action is needed
 * - Standalone messages
 */
export declare const WithoutLink: Story;
/**
 * Non-dismissible alert.
 * Use cases:
 * - Critical system messages
 * - Required acknowledgments
 * - Persistent notifications
 */
export declare const NonDismissible: Story;
/**
 * Alert with custom content using children prop.
 * When children are provided, text and linkLabel are ignored.
 */
export declare const CustomContent: Story;
/**
 * All alert variants displayed together.
 */
export declare const AllVariants: Story;
//# sourceMappingURL=alert.stories.d.ts.map