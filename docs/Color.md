---
title: Color Tokens
kind: Tokens
category: Foundation
lastUpdated: 2024-12-08
---

## Overview

The color system is organized into three tiers, creating a structured approach to color usage throughout the design system. This hierarchical structure ensures consistency, maintainability, and semantic clarity.

## Three-Tier Architecture

### Tier 1: Primitive Colors
Base color values that define the raw color palette. These should **never be used directly** in components.

**Purpose:** Establish the foundational color palette with specific hex values.

### Tier 2: Global Colors
Semantic color scales that map primitive colors to meaningful categories like neutral, accent, success, warning, danger, and information.

**Purpose:** Create semantic meaning and ensure consistency across the system.

### Tier 3: Semantic Colors
Context-aware tokens that describe the intended use case (e.g., background-primary, foreground-accent).

**Purpose:** Guide developers to use colors correctly based on their functional context.

---

## Tier 1: Primitive Colors

### Gray Scale

| Token | Value |
|-------|-------|
| `--ds-color-primitive-gray-50` | `#f9fafb` |
| `--ds-color-primitive-gray-100` | `#f3f4f6` |
| `--ds-color-primitive-gray-200` | `#e5e7eb` |
| `--ds-color-primitive-gray-300` | `#d1d5db` |
| `--ds-color-primitive-gray-400` | `#9ca3af` |
| `--ds-color-primitive-gray-500` | `#6b7280` |
| `--ds-color-primitive-gray-600` | `#4b5563` |
| `--ds-color-primitive-gray-700` | `#374151` |
| `--ds-color-primitive-gray-800` | `#1f2937` |
| `--ds-color-primitive-gray-900` | `#111827` |
| `--ds-color-primitive-gray-950` | `#030712` |

### Teal Scale

| Token | Value |
|-------|-------|
| `--ds-color-primitive-teal-50` | `#f0fdf9` |
| `--ds-color-primitive-teal-100` | `#cbfbf1` |
| `--ds-color-primitive-teal-200` | `#96f7e4` |
| `--ds-color-primitive-teal-300` | `#46edd5` |
| `--ds-color-primitive-teal-400` | `#00d5be` |
| `--ds-color-primitive-teal-500` | `#00bba7` |
| `--ds-color-primitive-teal-600` | `#009689` |
| `--ds-color-primitive-teal-700` | `#00786f` |
| `--ds-color-primitive-teal-800` | `#005f5a` |
| `--ds-color-primitive-teal-900` | `#0b4e4b` |
| `--ds-color-primitive-teal-950` | `#022f2e` |

### Yellow Scale

| Token | Value |
|-------|-------|
| `--ds-color-primitive-yellow-50` | `#fefce8` |
| `--ds-color-primitive-yellow-100` | `#fef9c2` |
| `--ds-color-primitive-yellow-200` | `#fee020` |
| `--ds-color-primitive-yellow-300` | `#fee020` |
| `--ds-color-primitive-yellow-400` | `#fdc700` |
| `--ds-color-primitive-yellow-500` | `#f0b100` |
| `--ds-color-primitive-yellow-600` | `#d18700` |
| `--ds-color-primitive-yellow-700` | `#a65f00` |
| `--ds-color-primitive-yellow-800` | `#894b00` |
| `--ds-color-primitive-yellow-900` | `#733e0a` |
| `--ds-color-primitive-yellow-950` | `#431f04` |

### Red Scale

| Token | Value |
|-------|-------|
| `--ds-color-primitive-red-50` | `#fef2f2` |
| `--ds-color-primitive-red-100` | `#ffe2e2` |
| `--ds-color-primitive-red-200` | `#ffc9ca` |
| `--ds-color-primitive-red-300` | `#ffa2a2` |
| `--ds-color-primitive-red-400` | `#ff6467` |
| `--ds-color-primitive-red-500` | `#fa2c36` |
| `--ds-color-primitive-red-600` | `#e8000b` |
| `--ds-color-primitive-red-700` | `#c10007` |
| `--ds-color-primitive-red-800` | `#9f0712` |
| `--ds-color-primitive-red-900` | `#821819` |
| `--ds-color-primitive-red-950` | `#460809` |

### Blue Scale

| Token | Value |
|-------|-------|
| `--ds-color-primitive-blue-50` | `#eff6ff` |
| `--ds-color-primitive-blue-100` | `#dbeafe` |
| `--ds-color-primitive-blue-200` | `#bfdbfe` |
| `--ds-color-primitive-blue-300` | `#8ec5ff` |
| `--ds-color-primitive-blue-400` | `#51a2ff` |
| `--ds-color-primitive-blue-500` | `#2b7fff` |
| `--ds-color-primitive-blue-600` | `#155dfc` |
| `--ds-color-primitive-blue-700` | `#1447e6` |
| `--ds-color-primitive-blue-800` | `#193bb8` |
| `--ds-color-primitive-blue-900` | `#1c388e` |
| `--ds-color-primitive-blue-950` | `#162456` |

### Green Scale

| Token | Value |
|-------|-------|
| `--ds-color-primitive-green-50` | `#f0fdf4` |
| `--ds-color-primitive-green-100` | `#dcfce7` |
| `--ds-color-primitive-green-200` | `#b9f8cf` |
| `--ds-color-primitive-green-300` | `#7bf1a8` |
| `--ds-color-primitive-green-400` | `#05df72` |
| `--ds-color-primitive-green-500` | `#00c951` |
| `--ds-color-primitive-green-600` | `#00a63e` |
| `--ds-color-primitive-green-700` | `#008235` |
| `--ds-color-primitive-green-800` | `#01662f` |
| `--ds-color-primitive-green-900` | `#0d542b` |
| `--ds-color-primitive-green-950` | `#032e15` |

---

## Tier 2: Global Colors

Global colors map primitive colors to semantic categories.

### Neutral (Gray)

| Token | Maps To |
|-------|---------|
| `--ds-color-global-neutral-50` | `--ds-color-primitive-gray-50` |
| `--ds-color-global-neutral-100` | `--ds-color-primitive-gray-100` |
| `--ds-color-global-neutral-200` | `--ds-color-primitive-gray-200` |
| `--ds-color-global-neutral-300` | `--ds-color-primitive-gray-300` |
| `--ds-color-global-neutral-400` | `--ds-color-primitive-gray-400` |
| `--ds-color-global-neutral-500` | `--ds-color-primitive-gray-500` |
| `--ds-color-global-neutral-600` | `--ds-color-primitive-gray-600` |
| `--ds-color-global-neutral-700` | `--ds-color-primitive-gray-700` |
| `--ds-color-global-neutral-800` | `--ds-color-primitive-gray-800` |
| `--ds-color-global-neutral-900` | `--ds-color-primitive-gray-900` |
| `--ds-color-global-neutral-950` | `--ds-color-primitive-gray-950` |

### Accent (Teal)

| Token | Maps To |
|-------|---------|
| `--ds-color-global-accent-50` | `--ds-color-primitive-teal-50` |
| `--ds-color-global-accent-100` | `--ds-color-primitive-teal-100` |
| `--ds-color-global-accent-200` | `--ds-color-primitive-teal-200` |
| `--ds-color-global-accent-300` | `--ds-color-primitive-teal-300` |
| `--ds-color-global-accent-400` | `--ds-color-primitive-teal-400` |
| `--ds-color-global-accent-500` | `--ds-color-primitive-teal-500` |
| `--ds-color-global-accent-600` | `--ds-color-primitive-teal-600` |
| `--ds-color-global-accent-700` | `--ds-color-primitive-teal-700` |
| `--ds-color-global-accent-800` | `--ds-color-primitive-teal-800` |
| `--ds-color-global-accent-900` | `--ds-color-primitive-teal-900` |
| `--ds-color-global-accent-950` | `--ds-color-primitive-teal-950` |

### Success (Green)

| Token | Maps To |
|-------|---------|
| `--ds-color-global-success-50` | `--ds-color-primitive-green-50` |
| `--ds-color-global-success-100` | `--ds-color-primitive-green-100` |
| `--ds-color-global-success-200` | `--ds-color-primitive-green-200` |
| `--ds-color-global-success-300` | `--ds-color-primitive-green-300` |
| `--ds-color-global-success-400` | `--ds-color-primitive-green-400` |
| `--ds-color-global-success-500` | `--ds-color-primitive-green-500` |
| `--ds-color-global-success-600` | `--ds-color-primitive-green-600` |
| `--ds-color-global-success-700` | `--ds-color-primitive-green-700` |
| `--ds-color-global-success-800` | `--ds-color-primitive-green-800` |
| `--ds-color-global-success-900` | `--ds-color-primitive-green-800` |
| `--ds-color-global-success-950` | `--ds-color-primitive-green-950` |

### Warning (Yellow)

| Token | Maps To |
|-------|---------|
| `--ds-color-global-warning-50` | `--ds-color-primitive-yellow-50` |
| `--ds-color-global-warning-100` | `--ds-color-primitive-yellow-100` |
| `--ds-color-global-warning-200` | `--ds-color-primitive-yellow-200` |
| `--ds-color-global-warning-300` | `--ds-color-primitive-yellow-300` |
| `--ds-color-global-warning-400` | `--ds-color-primitive-yellow-400` |
| `--ds-color-global-warning-500` | `--ds-color-primitive-yellow-500` |
| `--ds-color-global-warning-600` | `--ds-color-primitive-yellow-600` |
| `--ds-color-global-warning-700` | `--ds-color-primitive-yellow-700` |
| `--ds-color-global-warning-800` | `--ds-color-primitive-yellow-800` |
| `--ds-color-global-warning-900` | `--ds-color-primitive-yellow-900` |
| `--ds-color-global-warning-950` | `--ds-color-primitive-yellow-950` |

### Danger (Red)

| Token | Maps To |
|-------|---------|
| `--ds-color-global-danger-50` | `--ds-color-primitive-red-50` |
| `--ds-color-global-danger-100` | `--ds-color-primitive-red-100` |
| `--ds-color-global-danger-200` | `--ds-color-primitive-red-200` |
| `--ds-color-global-danger-300` | `--ds-color-primitive-red-300` |
| `--ds-color-global-danger-400` | `--ds-color-primitive-red-400` |
| `--ds-color-global-danger-500` | `--ds-color-primitive-red-500` |
| `--ds-color-global-danger-600` | `--ds-color-primitive-red-600` |
| `--ds-color-global-danger-700` | `--ds-color-primitive-red-700` |
| `--ds-color-global-danger-800` | `--ds-color-primitive-red-800` |
| `--ds-color-global-danger-900` | `--ds-color-primitive-red-900` |
| `--ds-color-global-danger-950` | `--ds-color-primitive-red-950` |

### Information (Blue)

| Token | Maps To |
|-------|---------|
| `--ds-color-global-information-50` | `--ds-color-primitive-blue-50` |
| `--ds-color-global-information-100` | `--ds-color-primitive-blue-100` |
| `--ds-color-global-information-200` | `--ds-color-primitive-blue-200` |
| `--ds-color-global-information-300` | `--ds-color-primitive-blue-300` |
| `--ds-color-global-information-400` | `--ds-color-primitive-blue-300` |
| `--ds-color-global-information-500` | `--ds-color-primitive-blue-500` |
| `--ds-color-global-information-600` | `--ds-color-primitive-blue-600` |
| `--ds-color-global-information-700` | `--ds-color-primitive-blue-700` |
| `--ds-color-global-information-800` | `--ds-color-primitive-blue-800` |
| `--ds-color-global-information-900` | `--ds-color-primitive-blue-900` |
| `--ds-color-global-information-950` | `--ds-color-primitive-blue-950` |

---

## Tier 3: Semantic Colors

Semantic colors provide context-aware tokens for use in components.

### Background Tokens

| Token | Purpose | Maps To |
|-------|---------|---------|
| `--ds-color-semantic-background-primary` | Main background color | `--ds-color-global-neutral-50` |
| `--ds-color-semantic-background-secondary` | Secondary background | `--ds-color-global-neutral-100` |
| `--ds-color-semantic-background-muted` | Subtle background | `--ds-color-global-neutral-200` |
| `--ds-color-semantic-background-accent` | Accent background | `--ds-color-global-accent-500` |
| `--ds-color-semantic-background-info` | Info background | `--ds-color-global-information-100` |
| `--ds-color-semantic-background-success` | Success background | `--ds-color-global-success-100` |
| `--ds-color-semantic-background-warning` | Warning background | `--ds-color-global-warning-100` |
| `--ds-color-semantic-background-danger` | Danger background | `--ds-color-global-danger-100` |

### Foreground Tokens

| Token | Purpose | Maps To |
|-------|---------|---------|
| `--ds-color-semantic-foreground-primary` | Primary text color | `--ds-color-global-neutral-950` |
| `--ds-color-semantic-foreground-primary-inverted` | Inverted text (on dark) | `--ds-color-global-neutral-50` |
| `--ds-color-semantic-foreground-secondary` | Secondary text | `--ds-color-global-neutral-800` |
| `--ds-color-semantic-foreground-muted` | Subtle text | `--ds-color-global-neutral-700` |
| `--ds-color-semantic-foreground-accent` | Accent text | `--ds-color-global-accent-700` |
| `--ds-color-semantic-foreground-information` | Info text | `--ds-color-global-information-700` |
| `--ds-color-semantic-foreground-success` | Success text | `--ds-color-global-success-700` |
| `--ds-color-semantic-foreground-warning` | Warning text | `--ds-color-global-warning-700` |
| `--ds-color-semantic-foreground-danger` | Danger text | `--ds-color-global-danger-700` |

---

## Usage Guidelines

### Best Practices

1. **Always use Tier 3 (Semantic) tokens in components**
   ```css
   /* Good */
   color: var(--ds-color-semantic-foreground-primary);

   /* Bad */
   color: var(--ds-color-primitive-gray-950);
   ```

2. **Use Global tokens when creating new semantic tokens**
   ```css
   /* Good */
   --my-component-bg: var(--ds-color-global-neutral-100);

   /* Bad */
   --my-component-bg: #f3f4f6;
   ```

3. **Never use Primitive tokens directly**
   - They exist only as a foundation for the system

4. **Choose semantic tokens by context, not by appearance**
   - Think "what is this for?" not "what color do I want?"

### Component Examples

```css
/* Button with accent color */
.button-primary {
  background: var(--ds-color-semantic-background-accent);
  color: var(--ds-color-semantic-foreground-primary-inverted);
}

/* Success alert */
.alert-success {
  background: var(--ds-color-semantic-background-success);
  color: var(--ds-color-semantic-foreground-success);
  border: 1px solid var(--ds-color-global-success-400);
}

/* Muted text */
.text-muted {
  color: var(--ds-color-semantic-foreground-muted);
}
```

---

## Token Naming Convention

All color tokens follow this pattern:

```
--ds-color-{tier}-{category}-{shade}
```

- **ds**: Design system prefix
- **color**: Token type
- **tier**: `primitive`, `global`, or `semantic`
- **category**: Color category (e.g., `gray`, `accent`, `background`, `foreground`)
- **shade**: Shade number (50-950) or semantic name