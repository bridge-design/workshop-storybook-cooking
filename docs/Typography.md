---
title: Typography Tokens
kind: Tokens
category: Foundation
lastUpdated: 2024-12-08
---

## Overview

Typography tokens provide a consistent system for text styling throughout the design system. The typography system uses a two-tier structure to define font families, sizes, line heights, and weights.

## Two-Tier Architecture

### Tier 1: Global Typography
Foundation values that define base typography properties like font family, sizes, line heights, and weights.

**Purpose:** Establish the core typographic scale and properties.

### Tier 2: Semantic Typography
Context-aware tokens that combine multiple properties for specific use cases (e.g., labels).

**Purpose:** Provide ready-to-use typography combinations for common patterns.

---

## Tier 1: Global Typography

### Font Family

| Token | Value |
|-------|-------|
| `--ds-typography-global-fontFamily` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif` |

**System Font Stack:** Uses native system fonts for optimal performance and familiarity across platforms.

### Font Sizes

| Token | Value | Pixels (at base 16px) | Use Case |
|-------|-------|----------------------|----------|
| `--ds-typography-global-fontSize-small` | `0.75rem` | 12px | Small text, captions, meta info |
| `--ds-typography-global-fontSize-base` | `1rem` | 16px | Body text, standard content |
| `--ds-typography-global-fontSize-large` | `1.25rem` | 20px | Subheadings, emphasized text |
| `--ds-typography-global-fontSize-xl` | `1.5rem` | 24px | Headings, titles |

### Line Heights

| Token | Value | Description |
|-------|-------|-------------|
| `--ds-typography-global-lineHeight-tight` | `1.25` | Compact line spacing for headings |
| `--ds-typography-global-lineHeight-normal` | `1.5` | Standard line spacing for body text |
| `--ds-typography-global-lineHeight-relaxed` | `1.75` | Generous line spacing for readability |

### Font Weights

| Token | Value | Description |
|-------|-------|-------------|
| `--ds-typography-global-fontWeight-normal` | `400` | Regular text weight |
| `--ds-typography-global-fontWeight-bold` | `600` | Bold text for emphasis |

---

## Tier 2: Semantic Typography

### Label Typography

Labels combine multiple typography properties for consistent text styling.

| Token | Maps To | Value |
|-------|---------|-------|
| `--ds-typography-label-fontSize` | `--ds-typography-global-fontSize-small` | `0.75rem` (12px) |
| `--ds-typography-label-lineHeight` | `--ds-typography-global-lineHeight-normal` | `1.5` |
| `--ds-typography-label-fontWeight` | `--ds-typography-global-fontWeight-normal` | `400` |

---

## Usage Guidelines

### Best Practices

1. **Use relative units (rem) for font sizes**
   ```css
   /* Good - uses token with rem */
   font-size: var(--ds-typography-global-fontSize-base);

   /* Bad - hardcoded pixels */
   font-size: 16px;
   ```

2. **Pair font sizes with appropriate line heights**
   - Small text → tight or normal line height
   - Body text → normal line height
   - Large text/headings → tight line height

3. **Use semantic tokens when available**
   ```css
   /* Good - semantic combination */
   .label {
     font-size: var(--ds-typography-label-fontSize);
     line-height: var(--ds-typography-label-lineHeight);
     font-weight: var(--ds-typography-label-fontWeight);
   }
   ```

### Component Examples

```css
/* Body text */
.body {
  font-family: var(--ds-typography-global-fontFamily);
  font-size: var(--ds-typography-global-fontSize-base);
  line-height: var(--ds-typography-global-lineHeight-normal);
  font-weight: var(--ds-typography-global-fontWeight-normal);
}

/* Heading */
.heading {
  font-family: var(--ds-typography-global-fontFamily);
  font-size: var(--ds-typography-global-fontSize-xl);
  line-height: var(--ds-typography-global-lineHeight-tight);
  font-weight: var(--ds-typography-global-fontWeight-bold);
}

/* Subheading */
.subheading {
  font-family: var(--ds-typography-global-fontFamily);
  font-size: var(--ds-typography-global-fontSize-large);
  line-height: var(--ds-typography-global-lineHeight-normal);
  font-weight: var(--ds-typography-global-fontWeight-bold);
}

/* Small text / caption */
.caption {
  font-family: var(--ds-typography-global-fontFamily);
  font-size: var(--ds-typography-global-fontSize-small);
  line-height: var(--ds-typography-global-lineHeight-normal);
  font-weight: var(--ds-typography-global-fontWeight-normal);
}

/* Label (using semantic tokens) */
.label {
  font-family: var(--ds-typography-global-fontFamily);
  font-size: var(--ds-typography-label-fontSize);
  line-height: var(--ds-typography-label-lineHeight);
  font-weight: var(--ds-typography-label-fontWeight);
}

/* Bold text */
.bold {
  font-weight: var(--ds-typography-global-fontWeight-bold);
}
```

---

## Typography Scale Reference

| Scale | Size | Example Use |
|-------|------|-------------|
| **XL** | 1.5rem (24px) | Page titles, main headings (H1, H2) |
| **Large** | 1.25rem (20px) | Section headings (H3), emphasized content |
| **Base** | 1rem (16px) | Body text, paragraphs, standard content |
| **Small** | 0.75rem (12px) | Labels, captions, metadata, helper text |

---

## Line Height Guidelines

### Tight (1.25)
- **Use for:** Headings, titles, display text
- **Why:** Reduces vertical space, creates visual impact

### Normal (1.5)
- **Use for:** Body text, paragraphs, most content
- **Why:** Optimal for readability, WCAG recommended minimum

### Relaxed (1.75)
- **Use for:** Long-form content, articles, documentation
- **Why:** Maximum readability, comfortable for extended reading

---

## Font Weight Guidelines

### Normal (400)
- **Use for:** Body text, standard content
- **Why:** Optimal for readability in paragraphs

### Bold (600)
- **Use for:** Headings, emphasis, important information
- **Why:** Creates hierarchy without being too heavy

**Note:** Avoid using font-weight 700 or higher, as 600 provides sufficient emphasis while maintaining readability.

---

## Responsive Typography

Consider adjusting font sizes for different screen sizes:

```css
/* Mobile - base sizes */
.heading {
  font-size: var(--ds-typography-global-fontSize-large);
}

/* Desktop - larger sizes */
@media (min-width: 768px) {
  .heading {
    font-size: var(--ds-typography-global-fontSize-xl);
  }
}
```

---

## Accessibility Considerations

### Font Size
- Minimum body text size: 16px (1rem)
- Allow users to scale text up to 200%
- Use relative units (rem/em) not pixels

### Line Height
- Minimum line height for body text: 1.5 (WCAG 2.1 AA)
- Headings can use tighter line heights (1.25)
- Generous line heights improve readability for dyslexic users

### Font Weight
- Ensure sufficient contrast between regular and bold weights
- Avoid very thin weights (below 400) for body text
- Bold text should remain readable at small sizes

### Contrast
- Always pair typography tokens with appropriate color tokens
- Ensure minimum 4.5:1 contrast ratio for normal text
- Ensure minimum 3:1 contrast ratio for large text (18px+ or 14px+ bold)

```css
/* Good - sufficient contrast */
.text {
  color: var(--ds-color-semantic-foreground-primary);
  background: var(--ds-color-semantic-background-primary);
}
```

---

## System Font Benefits

The system font stack (`-apple-system, BlinkMacSystemFont, etc.`) provides:

1. **Performance:** No font downloads, instant rendering
2. **Familiarity:** Users see their platform's native font
3. **Accessibility:** System fonts are optimized for screen reading
4. **Cross-platform:** Graceful fallbacks across all devices

### Platform Fonts
- **macOS/iOS:** San Francisco
- **Windows:** Segoe UI
- **Android:** Roboto
- **Linux:** Oxygen, Ubuntu, Cantarell
- **Fallback:** Sans-serif

---

## Token Naming Convention

All typography tokens follow this pattern:

```
--ds-typography-{tier}-{property}-{variant}
```

- **ds**: Design system prefix
- **typography**: Token type
- **tier**: `global` or semantic context (e.g., `label`)
- **property**: `fontFamily`, `fontSize`, `lineHeight`, `fontWeight`
- **variant**: Size or weight descriptor (e.g., `small`, `base`, `large`, `normal`, `bold`)

---

## Common Typography Patterns

| Pattern | Font Size | Line Height | Weight | Use Case |
|---------|-----------|-------------|--------|----------|
| **Display heading** | xl | tight | bold | Hero titles, page headers |
| **Section heading** | large | tight | bold | Section titles, H3 |
| **Body text** | base | normal | normal | Paragraphs, content |
| **Small text** | small | normal | normal | Metadata, captions |
| **Button text** | base | tight | bold | Interactive elements |
| **Label** | small | normal | normal | Form labels, tags |
