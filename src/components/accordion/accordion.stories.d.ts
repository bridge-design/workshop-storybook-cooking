import { StoryObj } from '@storybook/react';
import { default as React } from '../../../node_modules/react';
declare const meta: {
    title: string;
    component: {
        ({ className, children, ...props }: import('..').AccordionProps): React.JSX.Element;
        displayName: string;
        Item: {
            ({ className, children, ...props }: import('..').AccordionItemProps): React.JSX.Element;
            displayName: string;
        };
        Trigger: {
            ({ className, children, ...props }: import('..').AccordionTriggerProps): React.JSX.Element;
            displayName: string;
        };
        Content: {
            ({ className, children, ...props }: import('..').AccordionContentProps): React.JSX.Element;
            displayName: string;
        };
        Indicator: {
            ({ className, ...props }: import('..').AccordionIndicatorProps): React.JSX.Element;
            displayName: string;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Basic accordion with multiple items.
 * Use cases:
 * - FAQ sections
 * - Settings panels
 * - Content organization
 * - Progressive disclosure
 */
export declare const Default: Story;
/**
 * Controlled accordion where the expanded state is managed externally.
 * Use cases:
 * - When you need to sync accordion state with other UI elements
 * - When you need to programmatically control which items are open
 * - When integrating with form state management
 */
export declare const Controlled: {
    render: () => React.JSX.Element;
};
/**
 * Accordion with multiple items expanded simultaneously.
 * Use cases:
 * - When users need to compare content across multiple sections
 * - When all sections should be independently expandable
 * - Settings panels where multiple options need to be visible
 */
export declare const Multiple: Story;
/**
 * Accordion with collapsible behavior - allows the currently expanded item to be collapsed.
 * Use cases:
 * - When you want to allow users to collapse all items
 * - When the accordion state should be completely user-controlled
 * - FAQ sections where all questions can be collapsed
 */
export declare const Collapsible: Story;
/**
 * Accordion with disabled items that cannot be expanded or collapsed.
 * Use cases:
 * - When certain sections are not yet available
 * - When content is conditionally accessible
 * - When you need to show unavailable options
 */
export declare const WithDisabledItem: Story;
/**
 * Accordion without indicator icons for a minimal design.
 * Use cases:
 * - Minimal design requirements
 * - When the expand/collapse state is clear from context
 * - Space-constrained layouts
 */
export declare const WithoutIndicator: Story;
/**
 * Accordion with complex nested content in the panels.
 * Use cases:
 * - Rich content display
 * - Forms within accordion panels
 * - Lists and structured data
 * - Multi-element layouts
 */
export declare const WithComplexContent: Story;
//# sourceMappingURL=accordion.stories.d.ts.map