import { Meta, StoryObj } from '@storybook/react';
import { Menubar } from '..';
declare const meta: Meta<typeof Menubar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Basic menubar with items.
 * Use cases:
 * - Application navigation
 * - Menu systems
 * - Toolbar menus
 */
export declare const Default: Story;
/**
 * Transparent menubar variant with no border and transparent background.
 * Font color is inherited from parent component.
 * Use cases:
 * - Overlay navigation
 * - Dark themed interfaces
 * - Hero sections with navigation
 */
export declare const Transparent: Story;
//# sourceMappingURL=menubar.stories.d.ts.map