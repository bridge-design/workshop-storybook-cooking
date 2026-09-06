import { Meta, StoryObj } from '@storybook/react';
import { Logo } from '..';
declare const meta: Meta<typeof Logo>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Default logo size displays the brand logo at standard size.
 * Use cases:
 * - Navigation bars
 * - Headers
 * - Brand identity
 * - Application branding
 */
export declare const Default: Story;
/**
 * Logo with custom size.
 * Use cases:
 * - Different layout contexts
 * - Responsive designs
 * - Footer logos
 * - Mobile navigation
 */
export declare const CustomSize: Story;
/**
 * Logo with blank variant uses the blank color token.
 * Use cases:
 * - Light backgrounds
 * - Header components with gradient backgrounds
 * - High contrast contexts
 */
export declare const BlankVariant: Story;
//# sourceMappingURL=logo.stories.d.ts.map