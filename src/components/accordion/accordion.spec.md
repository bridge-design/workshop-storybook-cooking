# Accordion Component Specification

## 1. Component Description

The Accordion component is a vertically stacked set of interactive sections that allow users to expand and collapse content panels. Each accordion item consists of a header (trigger) and a collapsible content panel. When a user clicks on a header, the corresponding content panel expands or collapses, providing an efficient way to organize and display hierarchical or grouped information.


**Purpose in the design system:**
- Organize content into collapsible sections to save vertical space
- Enable progressive disclosure of information
- Provide a consistent pattern for FAQ sections, settings panels, and content organization
- Maintain visual hierarchy while allowing users to focus on specific sections

**Design references:**
- Follows patterns from [Jokul Accordion](https://jokul.fremtind.no/komponenter/accordion/)
- Inspired by [Chakra UI Accordion](https://chakra-ui.com/docs/components/accordion) and [Carbon Design System Accordion](https://react.carbondesignsystem.com/?path=/docs/components-accordion--overview)
- Uses Radix UI Accordion primitives for accessibility and behavior

## 2. Parameters

### Accordion Root Component

#### Controlled State

**`value`** (optional)
- **Type:** `string | string[]`
- **Required:** No
- **Default:** `undefined` (uncontrolled mode)
- **Description:** Controlled value(s) of the expanded accordion item(s). When provided as a string, only one item can be expanded at a time. When provided as an array, multiple items can be expanded simultaneously (requires `multiple={true}`).
- **Valid values:** Any string value(s) matching the `value` prop of `Accordion.Item` components

**`defaultValue`** (optional)
- **Type:** `string | string[]`
- **Required:** No
- **Default:** `undefined`
- **Description:** Uncontrolled initial value(s) of the expanded accordion item(s). When provided as a string, only one item can be expanded initially. When provided as an array, multiple items can be expanded initially (requires `multiple={true}`).
- **Valid values:** Any string value(s) matching the `value` prop of `Accordion.Item` components

**`onValueChange`** (optional)
- **Type:** `(value: string | string[]) => void`
- **Required:** No
- **Default:** `undefined`
- **Description:** Callback fired when the expanded state of accordion items changes. Receives the new value(s) as a parameter.
- **Triggered when:** User expands or collapses an accordion item

**`multiple`** (optional)
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When `true`, allows multiple accordion items to be expanded simultaneously. When `false`, only one item can be expanded at a time (collapses others when a new one is opened).
- **Valid values:** `true` | `false`

**`collapsible`** (optional)
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When `true`, allows the currently expanded item to be collapsed by clicking it again. When `false`, at least one item must remain expanded (only applies when `multiple={false}`).
- **Valid values:** `true` | `false`

#### Display and Content

**`children`** (required)
- **Type:** `React.ReactNode`
- **Required:** Yes
- **Description:** Accordion content, typically consisting of one or more `Accordion.Item` components.

#### Styling and Customization

**`className`** (optional)
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** Optional className for adding custom CSS classes to the Accordion root element. Will be composed with the default accordion styles.

**`id`** (optional)
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** Unique identifier for the accordion element.

#### Events

**`onFocusChange`** (optional)
- **Type:** `(details: { value: string | null }) => void`
- **Required:** No
- **Default:** `undefined`
- **Description:** Callback fired when the focused accordion item changes. Receives an object with the `value` of the focused item, or `null` if no item is focused.
- **Triggered when:** Focus moves between accordion items via keyboard navigation

### Accordion.Item Subcomponent

#### Controlled State

**`value`** (required)
- **Type:** `string`
- **Required:** Yes
- **Description:** Unique identifier for this accordion item. Must match a value in the parent `Accordion`'s `value` or `defaultValue` prop when expanded.
- **Valid values:** Any unique string value

**`disabled`** (optional)
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When `true`, prevents the accordion item from being expanded or collapsed. The item will appear visually disabled and will not respond to user interactions.
- **Valid values:** `true` | `false`

#### Styling and Customization

**`className`** (optional)
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** Optional className for adding custom CSS classes to the Accordion.Item element.

**`children`** (required)
- **Type:** `React.ReactNode`
- **Required:** Yes
- **Description:** Accordion item content, typically consisting of `Accordion.Trigger` and `Accordion.Content` components.

### Accordion.Trigger Subcomponent

#### Display and Content

**`children`** (required)
- **Type:** `React.ReactNode`
- **Required:** Yes
- **Description:** Content displayed in the accordion trigger/header. Can include text, icons, or other React elements.

#### Styling and Customization

**`className`** (optional)
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** Optional className for adding custom CSS classes to the Accordion.Trigger element.

**`asChild`** (optional)
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When `true`, merges props with the child element instead of rendering a button. Useful for composition patterns.
- **Valid values:** `true` | `false`

#### Events

**`onClick`** (optional)
- **Type:** `(event: React.MouseEvent<HTMLButtonElement>) => void`
- **Required:** No
- **Default:** `undefined`
- **Description:** Standard React click handler. Note: The accordion's expand/collapse behavior is handled internally, but this allows for additional click handling.

### Accordion.Content Subcomponent

#### Display and Content

**`children`** (required)
- **Type:** `React.ReactNode`
- **Required:** Yes
- **Description:** Content displayed in the collapsible accordion panel. Can include any React elements, text, or components.

#### Styling and Customization

**`className`** (optional)
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** Optional className for adding custom CSS classes to the Accordion.Content element.

**`forceMount`** (optional)
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When `true`, the content is always mounted in the DOM, even when collapsed. Useful for animations or when content needs to be accessible to screen readers when hidden.
- **Valid values:** `true` | `false`

### Accordion.Indicator Subcomponent (Optional)

**`className`** (optional)
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** Optional className for adding custom CSS classes to the Accordion.Indicator element (typically an icon showing expand/collapse state).

**`asChild`** (optional)
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When `true`, merges props with the child element instead of rendering a default indicator.
- **Valid values:** `true` | `false`

## 3. Accessibility

### ARIA Roles and Attributes

- **Root element:** Uses `role="region"` or appropriate semantic HTML
- **Item elements:** Each accordion item uses proper ARIA attributes:
  - `aria-expanded`: Automatically set to `true` when expanded, `false` when collapsed
  - `aria-controls`: References the ID of the associated content panel
  - `aria-disabled`: Set to `true` when the item is disabled
- **Trigger elements:** Use `role="button"` and proper button semantics
- **Content elements:** Use `role="region"` with `aria-labelledby` referencing the trigger ID

### Keyboard Navigation

- **Enter/Space:** Expands or collapses the focused accordion item
- **Arrow Down:** Moves focus to the next accordion item (if multiple items exist)
- **Arrow Up:** Moves focus to the previous accordion item (if multiple items exist)
- **Home:** Moves focus to the first accordion item
- **End:** Moves focus to the last accordion item
- **Tab:** Moves focus out of the accordion to the next focusable element
- **Shift+Tab:** Moves focus to the previous focusable element

### Screen Reader Support

- Screen readers announce the expanded/collapsed state of each item
- Screen readers announce the item label/header text
- When an item is expanded, screen readers announce the content
- Disabled items are properly announced as disabled
- The relationship between triggers and content panels is programmatically established

### Focus Management

- Focus is managed automatically when items expand/collapse
- Focus remains on the trigger button when toggling
- Focus does not jump unexpectedly when items are expanded/collapsed
- Focus indicators are clearly visible (following design system focus styles)

### WCAG Compliance

- **WCAG 2.1 Level AA compliance:**
  - Keyboard accessible (2.1.1)
  - Focus visible (2.4.7)
  - Name, role, value (4.1.2)
  - Status changes are announced (4.1.3)

## 4. Subcomponents

The Accordion component is composed of the following subcomponents:

### Accordion (Root)
- **Purpose:** Container component that manages the state and behavior of all accordion items
- **Props:** `value`, `defaultValue`, `onValueChange`, `multiple`, `collapsible`, `className`, `children`
- **Renders:** A container element that wraps all accordion items

### Accordion.Item
- **Purpose:** Represents a single collapsible section within the accordion
- **Props:** `value` (required), `disabled`, `className`, `children`
- **Renders:** A container for a trigger and content pair
- **Relationship:** Must contain exactly one `Accordion.Trigger` and one `Accordion.Content`

### Accordion.Trigger
- **Purpose:** Clickable header that toggles the visibility of the associated content panel
- **Props:** `className`, `asChild`, `children`, `onClick`
- **Renders:** A button element (or merged with child if `asChild={true}`)
- **Relationship:** Must be a direct child of `Accordion.Item`

### Accordion.Content
- **Purpose:** Collapsible content panel that shows/hides based on the trigger state
- **Props:** `className`, `forceMount`, `children`
- **Renders:** A collapsible panel with smooth expand/collapse animation
- **Relationship:** Must be a direct child of `Accordion.Item`, paired with `Accordion.Trigger`

### Accordion.Indicator (Optional)
- **Purpose:** Visual indicator (typically an icon) that shows the expand/collapse state
- **Props:** `className`, `asChild`
- **Renders:** An icon or custom element that rotates or changes based on state
- **Relationship:** Typically placed inside `Accordion.Trigger` to show state

## 5. Example Usage

### Basic Usage

```tsx
import { Accordion } from '@/src/components';

function BasicAccordion() {
  return (
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is an accordion?</Accordion.Trigger>
        <Accordion.Content>
          An accordion is a vertically stacked set of interactive sections.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>How does it work?</Accordion.Trigger>
        <Accordion.Content>
          Click on a header to expand or collapse its content panel.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

### Controlled Accordion

```tsx
import { Accordion } from '@/src/components';
import { useState } from 'react';

function ControlledAccordion() {
  const [value, setValue] = useState<string>('item-1');

  return (
    <Accordion value={value} onValueChange={setValue}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First Item</Accordion.Trigger>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second Item</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

### Multiple Items Expanded

```tsx
import { Accordion } from '@/src/components';

function MultipleAccordion() {
  return (
    <Accordion multiple defaultValue={['item-1', 'item-2']}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First Item</Accordion.Trigger>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second Item</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Third Item</Accordion.Trigger>
        <Accordion.Content>Content 3</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

### With Custom Styling

```tsx
import { Accordion } from '@/src/components';

function StyledAccordion() {
  return (
    <Accordion className="custom-accordion">
      <Accordion.Item value="item-1" className="custom-item">
        <Accordion.Trigger className="custom-trigger">
          Custom Styled Item
        </Accordion.Trigger>
        <Accordion.Content className="custom-content">
          This accordion has custom styling applied.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

### With Disabled Item

```tsx
import { Accordion } from '@/src/components';

function DisabledAccordion() {
  return (
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Enabled Item</Accordion.Trigger>
        <Accordion.Content>This item can be toggled.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>Disabled Item</Accordion.Trigger>
        <Accordion.Content>This item cannot be toggled.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

### With Indicator Icon

```tsx
import { Accordion } from '@/src/components';

function AccordionWithIndicator() {
  return (
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          Item with Indicator
          <Accordion.Indicator />
        </Accordion.Trigger>
        <Accordion.Content>
          The indicator icon shows the expand/collapse state.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

### Collapsible Single Item

```tsx
import { Accordion } from '@/src/components';

function CollapsibleAccordion() {
  return (
    <Accordion collapsible defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First Item</Accordion.Trigger>
        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second Item</Accordion.Trigger>
        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
```

## 6. Focus and Interaction Accessibility Checks

The following keyboard and interaction behaviors must be tested:

### Keyboard Navigation Tests

1. **Enter Key:** Pressing Enter on a focused trigger should expand/collapse the item
2. **Space Key:** Pressing Space on a focused trigger should expand/collapse the item
3. **Arrow Down:** Should move focus to the next accordion item (wraps to first if on last)
4. **Arrow Up:** Should move focus to the previous accordion item (wraps to last if on first)
5. **Home Key:** Should move focus to the first accordion item
6. **End Key:** Should move focus to the last accordion item
7. **Tab Navigation:** Tab should move focus out of the accordion to the next focusable element
8. **Shift+Tab:** Should move focus to the previous focusable element before the accordion
9. **Disabled Items:** Arrow keys should skip over disabled items when navigating
10. **Focus Indicator:** Focus should be clearly visible on all trigger elements

### Screen Reader Tests

1. **State Announcement:** Screen reader should announce "expanded" or "collapsed" when state changes
2. **Item Labels:** Screen reader should read the trigger text as the item label
3. **Content Access:** When expanded, screen reader should be able to read the content
4. **Disabled State:** Screen reader should announce "disabled" for disabled items
5. **Relationship:** Screen reader should understand the relationship between trigger and content

### Interaction Tests

1. **Click Behavior:** Clicking a trigger should toggle the associated content panel
2. **Multiple Mode:** When `multiple={true}`, clicking should not collapse other items
3. **Single Mode:** When `multiple={false}`, clicking should collapse the previously expanded item
4. **Collapsible Mode:** When `collapsible={true}`, clicking an expanded item should collapse it
5. **Non-Collapsible Mode:** When `collapsible={false}` and `multiple={false}`, at least one item must remain expanded
6. **Disabled Interaction:** Disabled items should not respond to clicks or keyboard input
7. **Focus Management:** Focus should remain on the trigger after toggling
8. **Animation:** Content should animate smoothly when expanding/collapsing

## 7. Testing

The following test scenarios should be implemented to ensure comprehensive coverage:

### Basic Rendering Tests

1. **Renders Accordion Root:** Accordion component renders without errors
2. **Renders Multiple Items:** Accordion renders multiple items correctly
3. **Renders Trigger Content:** Each trigger displays its children content
4. **Renders Content:** Each content panel displays its children content
5. **Default State:** Accordion items are collapsed by default (unless `defaultValue` is set)

### Controlled State Tests

6. **Controlled Value:** Accordion respects the `value` prop and updates when it changes
7. **onValueChange Callback:** `onValueChange` is called with correct value when item is toggled
8. **Uncontrolled defaultValue:** Accordion uses `defaultValue` for initial state
9. **Multiple Items Expanded:** When `multiple={true}`, multiple items can be expanded simultaneously
10. **Single Item Expanded:** When `multiple={false}`, only one item can be expanded at a time
11. **Collapsible Behavior:** When `collapsible={true}`, expanded item can be collapsed
12. **Non-Collapsible Behavior:** When `collapsible={false}` and `multiple={false}`, at least one item remains expanded

### Interaction Tests

13. **Click to Expand:** Clicking a collapsed trigger expands the content
14. **Click to Collapse:** Clicking an expanded trigger collapses the content
15. **Multiple Expansion:** With `multiple={true}`, clicking doesn't collapse other items
16. **Single Expansion:** With `multiple={false}`, clicking collapses the previously expanded item
17. **Disabled Item:** Disabled items do not respond to clicks
18. **Keyboard Enter:** Pressing Enter on trigger toggles the item
19. **Keyboard Space:** Pressing Space on trigger toggles the item
20. **Arrow Navigation:** Arrow keys navigate between items correctly
21. **Home/End Keys:** Home and End keys navigate to first/last items

### Accessibility Tests

22. **ARIA Attributes:** All required ARIA attributes are present and correct
23. **aria-expanded:** `aria-expanded` attribute updates correctly on state change
24. **aria-disabled:** `aria-disabled` is set correctly for disabled items
25. **Keyboard Focus:** All items are keyboard accessible
26. **Focus Indicator:** Focus indicators are visible and meet contrast requirements
27. **Screen Reader:** State changes are announced to screen readers
28. **Focus Management:** Focus remains on trigger after toggling

### Edge Cases

29. **Empty Content:** Accordion handles items with empty content gracefully
30. **No Items:** Accordion renders correctly with no items
31. **Single Item:** Accordion works correctly with only one item
32. **Invalid Value:** Accordion handles invalid `value` props gracefully
33. **Rapid Clicks:** Accordion handles rapid successive clicks without errors
34. **Dynamic Items:** Accordion handles dynamically added/removed items
35. **Nested Content:** Accordion handles complex nested content in panels
36. **Long Content:** Accordion handles very long content without layout issues

### Styling Tests

37. **Custom className:** Custom className is applied correctly to root element
38. **Item className:** Custom className is applied correctly to items
39. **Trigger className:** Custom className is applied correctly to triggers
40. **Content className:** Custom className is applied correctly to content panels
40. **CSS Variables:** Design system CSS variables are used correctly
41. **Responsive Design:** Accordion works correctly at different screen sizes

### Integration Tests

42. **With Forms:** Accordion works correctly when used inside forms
43. **With Other Components:** Accordion works correctly when composed with other design system components
44. **Animation Performance:** Expand/collapse animations are smooth and performant
45. **Force Mount:** When `forceMount={true}`, content remains in DOM when collapsed

## Implementation Notes

- The component should use Radix UI's Accordion primitives (`@radix-ui/react-accordion`) as the foundation for accessibility and behavior
- CSS modules should be used for styling (`accordion.module.css`)
- Design system tokens (colors, spacing, typography, radii) should be used via CSS variables
- The component should follow the same patterns as other components in the design system (e.g., Tabs component)
- TypeScript interfaces should extend the Radix UI primitive props where applicable
- All subcomponents should have `displayName` set for better debugging
- The component should support both controlled and uncontrolled usage patterns

