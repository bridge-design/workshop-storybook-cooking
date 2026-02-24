# Contribution Guidelines ✨

This document outlines project-specific coding standards for the UI
system. 

## 📁 File Structure

Each component should follow the structure below:

```
├─ src/components
│  ├─ ComponentName/
│  │  ├─ __snapshots__/                       // Snapshot tests
│  │    ├─ ComponentName.test.tsx.snap
│  │  ├─ index.ts                             // Component and types export
│  │  ├─ interfaces.ts                        // Props interfaces and shared types
│  │  ├─ ComponentName.tsx                    // Main component file
│  │  ├─ ComponentName.module.css             // Component-specific styles
│  │  ├─ ComponentName.stories.tsx            // Storybook stories (default + playground)
│  │  ├─ ComponentName.test.tsx               // Unit tests
```

## 🎨 Styling Conventions

The goal is to maintain a balance between flexibility and consistency.
Too little flexibility makes the system rigid; too much makes it hard to
maintain.

-   The `classname` prop should not override a component's internal
    layout and structural styles. If additional styling control is
    needed, propose it to the design system maintainers.
-   For multi-part components, `classname` is typically applied only to
    the root element. Avoid using selectors that break encapsulation;
    instead request additional styling hooks if required.
-   Use predefined utility classes available in the design system.
-   Avoid inline styles unless they are dynamically generated.
-   Define **CSS custom properties** in the default state first and
    override them for specific states.
-   Use camelCase naming for CSS classes.

## 🔌 Props Conventions

Prop names should be **consistent, clear, and aligned with common UI
patterns**.

-   **Variant:** Controls strictly visual appearance (e.g., `primary`,
    `secondary`, `danger`). Variants do not alter behavior.
-   **Type:** Describes the semantic or functional role (`error`,
    `warning`, `info`), independent of visuals.
-   **Sizes:** Use T-shirt sizing (`small`, `medium`, `large`) to
    maintain predictable scaling.
-   **Event Handlers:** Begin handler props with `on` (e.g., `onClick`,
    `onChange`).
-   **JSDoc Comments:** Every prop requires a brief explanation for
    clarity and maintainability.
-   **Default Values:** Provide reasonable defaults where applicable.
-   **`data-test-id`:** Include for automated test targeting.

## 🔥 Component API Design

-   Keep component APIs minimal---avoid unnecessary props.
-   Do not expose internal component state.
-   Ensure accessibility by exposing required ARIA-related props.
-   Prefer TypeScript union types instead of enums.
-   Deprecate components with a `@deprecated` JSDoc tag and reference
    their recommended alternative.

## 📖 Documentation & Storybook

Each component must include a Storybook entry with:

-   Default usage example\
-   Variants (sizes, states, themes)\
-   Edge cases (typography overflow, missing props)\
-   Auto-generated API documentation from TypeScript\
-   A link to the design reference (Figma or other)

## Component Patterns

Below is an example of a minimal component aligned with these
guidelines:

``` tsx
import React from 'react'
import cx from 'classnames'

import { ListItemProps } from './interfaces'
import cm from './ListItem.module.css'

export const ListGroupHeading = ({ children, label, leftContent }: ListItemProps) => {
  return (
    <li className={cx(cm.listGroupHeading)}>
      {leftContent && <div className={cm.leftContent}>{leftContent}</div>}
      {label ? <span className={cm.listItemContent}>{label}</span> : children}
    </li>
  )
}

ListGroupHeading.displayName = 'List.GroupHeading'
```

## 🔄 Git & PR Guidelines

Commit messages must follow this format:

    <type>(<scope>): <subject>

Where:

-   `<scope>` = component or module name\
-   `<type>` = one of the Conventional Commits types, such as:
    -   `feat` --- new feature\
    -   `fix` --- bug fix\
    -   `perf` --- performance improvement\
    -   `docs` --- documentation update\
    -   `chore` --- tooling or build-related updates\
    -   `refactor` --- code changes not adding features or fixing bugs

All commits affecting this workspace will be checked with `commitlint`
to ensure the correct format.