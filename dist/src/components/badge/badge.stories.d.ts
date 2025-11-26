import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/src/components';
declare const meta: Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Controls: Story;
/**
 * Planned status badge indicates items that are scheduled or queued.
 * Use cases:
 * - Task management systems
 * - Project planning boards
 * - Feature roadmaps
 * - Work item tracking
 */
export declare const Planned: Story;
/**
 * In progress status badge indicates items currently being worked on.
 * Use cases:
 * - Active task indicators
 * - Work-in-progress items
 * - Current sprint items
 * - Ongoing projects
 */
export declare const InProgress: Story;
/**
 * Done status badge indicates completed items.
 * Use cases:
 * - Completed tasks
 * - Finished features
 * - Resolved issues
 * - Delivered milestones
 */
export declare const Done: Story;
/**
 * Badge text is automatically derived from the status.
 * The component displays predefined text based on the status value.
 */
export declare const AllStatuses: Story;
/**
 * Badge component supports custom text through the `children` prop.
 * When children are provided, status is ignored and no status icons are shown.
 * Use cases:
 * - Custom status labels
 * - Task names or identifiers
 * - Feature tags with specific names
 * - Any custom badge text
 */
export declare const CustomText: Story;
//# sourceMappingURL=badge.stories.d.ts.map