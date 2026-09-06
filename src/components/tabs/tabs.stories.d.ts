import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '..';
declare const meta: Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Basic tabs with multiple tab panels.
 * Use cases:
 * - Content organization
 * - Settings panels
 * - Multi-section forms
 * - Tabbed interfaces
 */
export declare const Default: Story;
/**
 * Tabs with more content in each panel.
 * Use cases:
 * - Detailed information display
 * - Complex tabbed interfaces
 * - Multi-step workflows
 */
export declare const WithContent: Story;
/**
 * Interactive test that demonstrates tab switching behavior.
 * This story includes a play function that automatically tests tab interactions.
 */
export declare const InteractionTest: Story;
//# sourceMappingURL=tabs.stories.d.ts.map