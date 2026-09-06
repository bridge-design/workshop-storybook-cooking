import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '..';
declare const meta: Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Small avatar size is ideal for compact UI elements where space is limited.
 * Use cases:
 * - User mentions in comments or chat messages
 * - Inline user tags in text content
 * - Activity logs or notification lists
 * - Compact user lists or tables
 */
export declare const Small: Story;
/**
 * Medium avatar size is the default and most commonly used size.
 * Use cases:
 * - Standard user profiles in lists
 * - Navigation bars and headers
 * - Comment sections and forums
 * - Social media feeds
 * - Team member directories
 */
export declare const Medium: Story;
/**
 * Large avatar size provides maximum visibility for user profiles.
 * Use cases:
 * - User profile pages and detailed views
 * - Account settings and preferences
 * - Contact cards and detailed user information
 * - Featured user displays or hero sections
 * - Authentication and welcome screens
 */
export declare const Large: Story;
//# sourceMappingURL=avatar.stories.d.ts.map