# Theme-Aware Component Development Guide

This guide shows how to create components that automatically adapt to your design system's light and dark themes using the design tokens.

## Quick Start

### 1. Import Theme Utilities

```typescript
import {
  themeMixin,
  interactiveMixin,
  createThemedStyles,
} from '../../styles/theme.js';
```

### 2. Basic Theme-Aware Component

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { themeMixin, interactiveMixin } from '../../styles/theme.js';
import { baseStyles } from '../../styles/base.js';

@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = [
    baseStyles,
    themeMixin,
    interactiveMixin,
    css`
      :host {
        display: block;
        background: var(--component-surface);
        color: var(--component-on-surface);
        border: 1px solid var(--component-border);
        border-radius: var(--component-border-radius);
        padding: var(--component-spacing);
      }

      button {
        background: var(--component-surface-variant);
        color: var(--component-on-surface-variant);
        border: 1px solid var(--component-border);
        padding: var(--component-spacing-sm);
        border-radius: var(--component-border-radius);
      }

      button.interactive:hover {
        background: var(--component-hover-surface);
      }
    `,
  ];

  render() {
    return html` <button class="interactive">Click me</button> `;
  }
}
```

## Theme System Overview

### Available CSS Custom Properties

The `themeMixin` provides these automatically available properties:

#### Surface Colors

- `--component-surface` - Main component background
- `--component-surface-variant` - Secondary surface (subtle variations)
- `--component-on-surface` - Text on main surface
- `--component-on-surface-variant` - Secondary text color

#### Interactive States

- `--component-hover-surface` - Background on hover
- `--component-focus-outline` - Focus outline color
- `--component-disabled-opacity` - Opacity for disabled state

#### Layout & Structure

- `--component-border` - Default border color
- `--component-border-radius` - Default border radius
- `--component-shadow` - Default shadow
- `--component-spacing` - Standard spacing (1rem)
- `--component-spacing-sm` - Small spacing (0.5rem)
- `--component-spacing-lg` - Large spacing (1.5rem)

#### Typography

- `--component-font-family` - Primary font family
- `--component-font-family-mono` - Monospace font family
- `--component-font-size` - Base font size
- `--component-font-size-sm` - Small font size
- `--component-font-weight` - Regular weight
- `--component-font-weight-medium` - Medium weight

## Automatic Theme Switching

### Method 1: Document-Level Theme (Recommended)

Components automatically adapt when the document has `data-theme="dark"`:

```typescript
// In your app initialization
import { applyTheme, darkTheme, lightTheme } from 'ceriale-web-components';

// Apply theme globally
function setTheme(isDark: boolean) {
  applyTheme(isDark ? darkTheme : lightTheme);
}
```

### Method 2: Component-Level Theme

Alternatively, set theme directly on components:

```html
<my-component theme="dark"></my-component>
```

## Advanced Patterns

### 1. Using State Variants

```typescript
import { stateVariants, sizeVariants } from '../../styles/theme.js';

export class ThemedButton extends LitElement {
  @property({ type: String }) variant: 'primary' | 'secondary' | 'success' =
    'primary';
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';

  static styles = [
    baseStyles,
    themeMixin,
    interactiveMixin,
    stateVariants.primary,
    sizeVariants.medium,
    css`
      :host([variant='primary']) {
        ${stateVariants.primary}
      }
      :host([variant='secondary']) {
        ${stateVariants.secondary}
      }
      :host([variant='success']) {
        ${stateVariants.success}
      }

      :host([size='small']) {
        ${sizeVariants.small}
      }
      :host([size='medium']) {
        ${sizeVariants.medium}
      }
      :host([size='large']) {
        ${sizeVariants.large}
      }

      button {
        background: var(--variant-color, var(--color-primary-600));
        padding: var(--variant-padding);
        font-size: var(--variant-font-size);
        height: var(--variant-height);
      }
    `,
  ];
}
```

### 2. Complete Theme Bundle

For components needing comprehensive theming utilities:

```typescript
import { completeThemeMixin } from '../../styles/theme.js';

export class ComplexComponent extends LitElement {
  static styles = [
    baseStyles,
    completeThemeMixin,
    css`
      .title {
        @apply text-lg font-medium;
      }
      .subtle {
        @apply text-sm;
      }
      .elevated {
        @apply elevation-2 p-4;
      }
    `,
  ];
}
```

### 3. Custom Component-Specific Tokens

Add your own tokens while maintaining theme compatibility:

```typescript
css`
  :host {
    /* Inherit base theme tokens */
    ${themeMixin}

    /* Add component-specific tokens */
    --my-component-special-color: var(--color-warning-500, #ff9800);
    --my-component-border-width: 2px;
  }

  /* Use in dark theme */
  :host-context([data-theme='dark']) {
    --my-component-special-color: var(--color-warning-300, #ffb74d);
  }
`;
```

## Code-Box Component Example

The code-box component demonstrates full theme integration:

```typescript
// Uses design tokens throughout
css`
  :host {
    --code-box-border-radius: var(--border-radius-sm, 0.25rem);
    --code-box-background: var(--surface-surface, #ffffff);
    --code-box-text-color: var(--surface-on-surface, #212121);
    --code-box-font-family: var(--font-family-monospace);
    --code-box-padding: var(--spacing-4, 1rem);
    --code-box-shadow: var(--elevation-1-shadow);
  }

  /* Auto dark theme support */
  :host-context([data-theme='dark']) {
    --code-box-background: var(--surface-surface, #1e1e1e);
    --code-box-text-color: var(--surface-on-surface, #ffffff);
  }
`;
```

## Best Practices

### ✅ Do

- Always import and use `themeMixin` for new components
- Use semantic design tokens (`--component-surface`) over direct colors
- Support both global theme switching and component-level themes
- Test components in both light and dark themes
- Use the `interactiveMixin` for any clickable elements

### ❌ Don't

- Hardcode colors, spacing, or typography values
- Ignore dark theme support
- Use fixed pixel values instead of design tokens
- Override theme tokens without fallbacks
- Create custom color schemes outside the design system

## Integration with Storybook

Add theme switching to your stories:

```typescript
// In .storybook/preview.js
import { applyTheme, lightTheme, darkTheme } from '../src/tokens/index.js';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark'],
      showName: true,
    },
  },
};

export const decorators = [
  (story, context) => {
    const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
    applyTheme(theme);
    return story();
  },
];
```

This setup ensures all components automatically respect the design system and provide consistent theming across light and dark modes.
