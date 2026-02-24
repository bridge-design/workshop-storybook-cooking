import React from 'react';
import { fn } from 'storybook/test';
import { Accordion } from '@/src/components';
const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'padded',
    },
    tags: ["autodocs"],
};
export default meta;
export const Controls = {
    render: () => (<Accordion onValueChange={fn()}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          What is an accordion?
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          An accordion is a vertically stacked set of interactive sections that allow users to expand and collapse content panels.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          How does it work?
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          Click on a header to expand or collapse its content panel. Only one item can be expanded at a time by default.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>
          Is it accessible?
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          Yes! The accordion supports full keyboard navigation and screen reader announcements.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
/**
 * Basic accordion with multiple items.
 * Use cases:
 * - FAQ sections
 * - Settings panels
 * - Content organization
 * - Progressive disclosure
 */
export const Default = {
    render: () => (<Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          First Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This is the content for the first accordion item. It can contain any React elements, text, or components.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          Second Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This is the content for the second accordion item. You can include complex nested structures here.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>
          Third Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This is the content for the third accordion item. The accordion provides smooth animations when expanding and collapsing.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
/**
 * Controlled accordion where the expanded state is managed externally.
 * Use cases:
 * - When you need to sync accordion state with other UI elements
 * - When you need to programmatically control which items are open
 * - When integrating with form state management
 */
export const Controlled = {
    render: () => {
        const [value, setValue] = React.useState('item-1');
        return (<Accordion value={value} onValueChange={setValue}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            First Item (Controlled)
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            This accordion is controlled. The expanded state is managed by React state.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Second Item (Controlled)
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            You can programmatically change which item is expanded by updating the value prop.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>);
    },
};
/**
 * Accordion with multiple items expanded simultaneously.
 * Use cases:
 * - When users need to compare content across multiple sections
 * - When all sections should be independently expandable
 * - Settings panels where multiple options need to be visible
 */
export const Multiple = {
    render: () => (<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          First Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          With multiple mode enabled, multiple items can be expanded at the same time.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          Second Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This item is also expanded by default. Both items can remain open simultaneously.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>
          Third Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          You can expand this item without collapsing the others.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
/**
 * Accordion with collapsible behavior - allows the currently expanded item to be collapsed.
 * Use cases:
 * - When you want to allow users to collapse all items
 * - When the accordion state should be completely user-controlled
 * - FAQ sections where all questions can be collapsed
 */
export const Collapsible = {
    render: () => (<Accordion collapsible defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          First Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          With collapsible enabled, you can click this item again to collapse it, leaving no items expanded.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          Second Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This allows for a more flexible user experience where users can hide all content if needed.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
/**
 * Accordion with disabled items that cannot be expanded or collapsed.
 * Use cases:
 * - When certain sections are not yet available
 * - When content is conditionally accessible
 * - When you need to show unavailable options
 */
export const WithDisabledItem = {
    render: () => (<Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          Enabled Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This item can be toggled normally.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>
          Disabled Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This item is disabled and cannot be expanded or collapsed.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>
          Another Enabled Item
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          This item can also be toggled normally.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
/**
 * Accordion without indicator icons for a minimal design.
 * Use cases:
 * - Minimal design requirements
 * - When the expand/collapse state is clear from context
 * - Space-constrained layouts
 */
export const WithoutIndicator = {
    render: () => (<Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          Item without Indicator
        </Accordion.Trigger>
        <Accordion.Content>
          This accordion item doesn't have an indicator icon. The state is still clearly communicated through the content visibility.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          Another Item
        </Accordion.Trigger>
        <Accordion.Content>
          The accordion still functions perfectly without the visual indicator.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
/**
 * Accordion with complex nested content in the panels.
 * Use cases:
 * - Rich content display
 * - Forms within accordion panels
 * - Lists and structured data
 * - Multi-element layouts
 */
export const WithComplexContent = {
    render: () => (<Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          Product Information
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Product Details</h3>
            <p style={{ marginBottom: '0.5rem' }}>
              This accordion panel can contain complex nested content including headings, paragraphs, lists, and other components.
            </p>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>
          Specifications
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          <div>
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Technical Specs</h3>
            <dl style={{ margin: 0 }}>
              <dt style={{ fontWeight: 'bold' }}>Dimensions:</dt>
              <dd style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>10 x 5 x 3 inches</dd>
              <dt style={{ fontWeight: 'bold' }}>Weight:</dt>
              <dd style={{ marginLeft: '1rem' }}>2.5 lbs</dd>
            </dl>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>),
};
