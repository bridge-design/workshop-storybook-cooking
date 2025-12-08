---
title: Radii Tokens
kind: Tokens
category: Foundation
lastUpdated: 2024-12-08
---

## Overview

Border radius tokens control the roundness of corners in UI elements. The radii system uses a two-tier structure to provide both precise control and semantic meaning.

## Two-Tier Architecture

### Tier 1: Global Radii
Foundation values that define specific border radius sizes in pixels or percentages.

**Purpose:** Establish the core scale of border radius values.

### Tier 2: Concept Radii
Semantic tokens that map global values to meaningful size categories (s, m, l, xl, round).

**Purpose:** Provide intuitive, size-based naming for easier implementation.

---

## Tier 1: Global Radii

Global radii tokens define the base scale for border radius values.

| Token | Value | Description |
|-------|-------|-------------|
| `--ds-radii-global-x0` | `0px` | No border radius (sharp corners) |
| `--ds-radii-global-x1` | `2px` | Extra small radius |
| `--ds-radii-global-x2` | `4px` | Small radius |
| `--ds-radii-global-x3` | `8px` | Medium radius |
| `--ds-radii-global-x4` | `12px` | Large radius |
| `--ds-radii-global-x5` | `16px` | Extra large radius |
| `--ds-radii-global-xround` | `50%` | Fully rounded (circular/pill shape) |

---

## Tier 2: Concept Radii

Concept radii provide semantic, size-based naming for easier implementation.

| Token | Maps To | Value | Use Case |
|-------|---------|-------|----------|
| `--ds-radii-concept-none` | `--ds-radii-global-x0` | `0px` | Sharp corners, no rounding |
| `--ds-radii-concept-s` | `--ds-radii-global-x1` | `2px` | Subtle rounding for small elements |
| `--ds-radii-concept-m` | `--ds-radii-global-x2` | `4px` | Standard rounding for buttons, inputs |
| `--ds-radii-concept-l` | `--ds-radii-global-x3` | `8px` | Moderate rounding for cards, panels |
| `--ds-radii-concept-xl` | `--ds-radii-global-x4` | `12px` | Large rounding for prominent elements |
| `--ds-radii-concept-round` | `--ds-radii-global-xround` | `50%` | Fully rounded (avatars, badges, pills) |

---

## Usage Guidelines

### Best Practices

1. **Use Tier 2 (Concept) tokens in components**
   ```css
   /* Good - semantic and clear */
   border-radius: var(--ds-radii-concept-m);

   /* Acceptable - direct global reference */
   border-radius: var(--ds-radii-global-x2);

   /* Bad - hardcoded value */
   border-radius: 4px;
   ```

2. **Choose radius based on element size and prominence**
   - Small elements (badges, pills) → `s` or `m`
   - Standard elements (buttons, inputs) → `m` or `l`
   - Large elements (cards, panels) → `l` or `xl`
   - Circular elements (avatars, icon buttons) → `round`

3. **Maintain consistency across similar components**
   - All buttons should use the same radius
   - All cards should use the same radius
   - All form inputs should use the same radius

### Component Examples

```css
/* Button */
.button {
  border-radius: var(--ds-radii-concept-m);
}

/* Card */
.card {
  border-radius: var(--ds-radii-concept-l);
}

/* Badge */
.badge {
  border-radius: var(--ds-radii-concept-round);
}

/* Input field */
.input {
  border-radius: var(--ds-radii-concept-m);
}

/* Avatar */
.avatar {
  border-radius: var(--ds-radii-concept-round);
}

/* Modal or panel */
.modal {
  border-radius: var(--ds-radii-concept-xl);
}

/* Sharp corners (no radius) */
.alert-banner {
  border-radius: var(--ds-radii-concept-none);
}
```

### Visual Scale Reference

The radii scale progresses from sharp to fully rounded:

- **None (0px)**: ▭ Sharp corners
- **S (2px)**: ▭ Slightly softened corners
- **M (4px)**: ▭ Noticeable rounding
- **L (8px)**: ▭ Moderate rounding
- **XL (12px)**: ▭ Prominent rounding
- **Round (50%)**: ● Fully rounded (circular)

---

## Accessibility Considerations

- Border radius is primarily decorative and doesn't affect accessibility
- Ensure sufficient contrast between elements regardless of border radius
- Rounded corners can improve visual hierarchy and component recognition

---

## Token Naming Convention

All radii tokens follow this pattern:

```
--ds-radii-{tier}-{identifier}
```

- **ds**: Design system prefix
- **radii**: Token type
- **tier**: `global` or `concept`
- **identifier**: Size descriptor (x0-x5, xround) or semantic name (none, s, m, l, xl, round)
