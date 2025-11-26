import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/src/components';
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Standard button type is used for general actions.
 * Use cases:
 * - General UI actions
 * - Navigation triggers
 * - Modal actions
 */
export declare const Default: Story;
/**
 * Submit button type is used for form submissions.
 * Use cases:
 * - Form submit actions
 * - Data submission
 * - Form wizards
 */
export declare const Submit: Story;
/**
 * Reset button type is used to reset form fields.
 * Use cases:
 * - Form reset actions
 * - Clearing form data
 */
export declare const Reset: Story;
/**
 * Disabled button state is used when an action is not available.
 * Use cases:
 * - Form validation (disable submit until form is valid)
 * - Loading states
 * - Permission-based actions
 * - Temporarily unavailable features
 */
export declare const Disabled: Story;
//# sourceMappingURL=button.stories.d.ts.map