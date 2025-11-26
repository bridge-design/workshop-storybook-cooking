import { PropsCategory } from '@/.storybook/constants';
import { Button } from '@/src/components';
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            table: {
                category: PropsCategory.ACCESSIBILITY,
            },
        },
    },
    tags: ["autodocs"],
};
export default meta;
const defaultArgs = {
    children: "Button",
};
export const Controls = {
    args: defaultArgs,
};
/**
 * Standard button type is used for general actions.
 * Use cases:
 * - General UI actions
 * - Navigation triggers
 * - Modal actions
 */
export const Default = {
    args: {
        ...defaultArgs,
        type: 'button',
    },
};
/**
 * Submit button type is used for form submissions.
 * Use cases:
 * - Form submit actions
 * - Data submission
 * - Form wizards
 */
export const Submit = {
    args: {
        ...defaultArgs,
        type: 'submit',
        children: 'Submit',
    },
};
/**
 * Reset button type is used to reset form fields.
 * Use cases:
 * - Form reset actions
 * - Clearing form data
 */
export const Reset = {
    args: {
        ...defaultArgs,
        type: 'reset',
        children: 'Reset',
    },
};
/**
 * Disabled button state is used when an action is not available.
 * Use cases:
 * - Form validation (disable submit until form is valid)
 * - Loading states
 * - Permission-based actions
 * - Temporarily unavailable features
 */
export const Disabled = {
    args: {
        ...defaultArgs,
        disabled: true,
        children: 'Disabled Button',
    },
};
