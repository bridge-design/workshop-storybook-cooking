---
title: Space Tokens
kind: Tokens
category: Foundation
lastUpdated: 2024-12-08
---

## Overview

Spacing tokens provide a consistent scale for margins, padding, and gaps throughout the design system. The spacing system uses a two-tier structure built on an 8px base unit, ensuring visual rhythm and alignment.

## Two-Tier Architecture

### Tier 1: Global Space
Foundation values that define specific spacing sizes based on an 8px grid system.

**Purpose:** Establish the core spacing scale using multiples and fractions of 8px.

### Tier 2: Semantic Space
Context-aware tokens that map global values to specific use cases like padding sizes.

**Purpose:** Provide meaningful names for common spacing patterns.

---

## Tier 1: Global Space

Global space tokens define the base scale for spacing values using an 8px grid system.

| Token | Value | Multiplier | Description |
|-------|-------|------------|-------------|
| `--ds-space-global-x0` | `0px` | 0 | No space |
| `--ds-space-global-atom` | `1px` | 0.125 | Minimal space (hairline) |
| `--ds-space-global-xhalf` | `4px` | 0.5 | Half unit |
| `--ds-space-global-x1` | `8px` | 1 | Base unit |
| `--ds-space-global-x2` | `16px` | 2 | Double unit |
| `--ds-space-global-x3` | `24px` | 3 | Triple unit |
| `--ds-space-global-x4` | `32px` | 4 | Quadruple unit |
| `--ds-space-global-x5` | `48px` | 6 | Large unit |

### The 8px Grid System

The spacing scale is based on multiples of 8px, which:
- Aligns with common screen resolutions
- Creates visual rhythm and consistency
- Simplifies math and calculations
- Works well across different devices and pixel densities

---

## Tier 2: Semantic Space (Padding)

Semantic padding tokens provide meaningful names for common spacing patterns.

| Token | Maps To | Value | Use Case |
|-------|---------|-------|----------|
| `--ds-space-padding-s` | `--ds-space-global-xhalf` | `4px` | Compact padding for small elements |
| `--ds-space-padding-m` | `--ds-space-global-x1` | `8px` | Standard padding for buttons, badges |
| `--ds-space-padding-l` | `--ds-space-global-x2` | `16px` | Comfortable padding for cards, panels |
| `--ds-space-padding-xl` | `--ds-space-global-x3` | `24px` | Generous padding for sections, containers |

---

## Usage Guidelines

### Best Practices

1. **Use consistent spacing for similar elements**
   ```css
   /* Good - using tokens */
   .button {
     padding: var(--ds-space-padding-m) var(--ds-space-padding-l);
   }

   /* Bad - hardcoded values */
   .button {
     padding: 8px 16px;
   }
   ```

2. **Follow the 8px grid for alignment**
   - Most spacing should use multiples of 8px (x1, x2, x3, x4, x5)
   - Use `xhalf` (4px) for tight spacing
   - Use `atom` (1px) only for borders or hairlines

3. **Choose spacing based on content hierarchy**
   - Smaller spacing (x0, xhalf, x1) → Related items, tight layouts
   - Medium spacing (x2, x3) → Standard separation, cards
   - Larger spacing (x4, x5) → Section breaks, major divisions

### Component Examples

```css
/* Button padding */
.button {
  padding: var(--ds-space-padding-m) var(--ds-space-padding-l);
}

/* Card padding */
.card {
  padding: var(--ds-space-padding-l);
}

/* Form field spacing */
.form-field {
  margin-bottom: var(--ds-space-global-x2);
}

/* Section spacing */
.section {
  padding: var(--ds-space-global-x4) var(--ds-space-global-x2);
  margin-bottom: var(--ds-space-global-x5);
}

/* Flex gap */
.flex-container {
  display: flex;
  gap: var(--ds-space-global-x2);
}

/* List item spacing */
.list-item {
  padding: var(--ds-space-padding-m);
  margin-bottom: var(--ds-space-global-xhalf);
}

/* Compact badge */
.badge {
  padding: var(--ds-space-padding-s) var(--ds-space-padding-m);
}
```

### Common Spacing Patterns

| Pattern | Tokens | Use Case |
|---------|--------|----------|
| Tight spacing | `xhalf` (4px) | List items, navigation links |
| Standard spacing | `x1` (8px) | Button padding, small gaps |
| Comfortable spacing | `x2` (16px) | Card padding, form fields |
| Generous spacing | `x3` (24px) | Section padding, large cards |
| Section breaks | `x4` (32px) | Between major sections |
| Page sections | `x5` (48px) | Large content blocks |

---

## Visual Scale Reference

The spacing scale provides a consistent rhythm:

```
x0:    |
atom:  |•
xhalf: |••
x1:    |••••
x2:    |••••••••
x3:    |••••••••••••
x4:    |••••••••••••••••
x5:    |••••••••••••••••••••••••
```

---

## Margin vs Padding Guidelines

### When to use Padding
- Internal spacing within a component
- Space between content and component boundaries
- Creating visual weight and clickable areas

### When to use Margin
- External spacing between components
- Separation of sibling elements
- Layout spacing and gaps

```css
/* Component internal spacing (padding) */
.card {
  padding: var(--ds-space-padding-l);
}

/* Component external spacing (margin) */
.card + .card {
  margin-top: var(--ds-space-global-x3);
}
```

---

## Responsive Spacing

Consider adjusting spacing for different screen sizes:

```css
/* Mobile */
.section {
  padding: var(--ds-space-global-x2);
}

/* Desktop */
@media (min-width: 768px) {
  .section {
    padding: var(--ds-space-global-x4);
  }
}
```

---

## Token Naming Convention

All spacing tokens follow this pattern:

```
--ds-space-{tier}-{identifier}
```

- **ds**: Design system prefix
- **space**: Token type
- **tier**: `global` or semantic category (e.g., `padding`)
- **identifier**: Size descriptor (x0-x5, atom, xhalf) or semantic name (s, m, l, xl)

---

## Accessibility Considerations

- Adequate spacing improves readability and reduces cognitive load
- Touch targets should have minimum 44x44px size (use appropriate padding)
- Spacing helps create clear visual hierarchy for screen reader users
- Consistent spacing patterns help users with cognitive disabilities navigate interfaces
