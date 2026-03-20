# Ceriale Web Components

A modern web component library built with Lit and common design principles. This library provides a set of reusable, accessible components that work in any web framework or vanilla HTML.

## ⚠️ Development Package

This is a personal testing package. Use at your own risk in production.

## Features

- 🌗 **Dark/Light Theme** - Built-in theming support with CSS custom properties
- ♿ **Accessible** - ARIA compliant and keyboard navigation support
- 🚀 **Modern Stack** - Built with TypeScript, Lit, and Vite
- 📦 **Framework Agnostic** - Works with React, Vue, Angular, or vanilla HTML
- 🎯 **Tree Shakeable** - Import only what you need
- 📱 **Responsive** - Mobile-first design approach

## Quick Start

### Installation

```bash
npm install ceriale-web-components
```

### Basic Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      src="node_modules/ceriale-web-components/dist/index.js"
    ></script>
  </head>
  <body>
    <!-- Buttons -->
    <mwc-button variant="contained" color="primary">Click Me</mwc-button>
    <mwc-button variant="outlined">Outlined</mwc-button>
    <mwc-button variant="text">Text Button</mwc-button>

    <!-- Card -->
    <mwc-card>
      <h3>Card Title</h3>
      <p>Card content goes here.</p>
      <div slot="actions">
        <mwc-button variant="text">Action</mwc-button>
      </div>
    </mwc-card>

    <!-- Input -->
    <mwc-input
      label="Email"
      type="email"
      placeholder="Enter your email"
      helper-text="We'll never share your email"
    ></mwc-input>
  </body>
</html>
```

### ES Modules

```javascript
import { Button, Card, TextInput } from 'ceriale-web-components';
import { applyTheme, darkTheme } from 'ceriale-web-components';

// Apply dark theme
applyTheme(darkTheme);
```

## Components

### Button (`mwc-button`)

Button with ripple effects and multiple variants.

**Properties:**

- `variant` - `"contained" | "outlined" | "text"`
- `size` - `"small" | "medium" | "large"`
- `color` - `"primary" | "secondary" | "success" | "warning" | "error"`
- `disabled` - Boolean
- `loading` - Boolean
- `href` - String (renders as anchor)

**Slots:**

- Default slot for button text
- `start-icon` - Icon at the beginning
- `end-icon` - Icon at the end

**Events:**

- `mwc-button-click` - Fired when button is clicked

### Card (`mwc-card`)

Flexible container for displaying related content.

**Properties:**

- `variant` - `"elevated" | "outlined" | "filled"`
- `clickable` - Boolean
- `disabled` - Boolean
- `actions-layout` - `"start" | "end" | "center" | "space-between"`

**Slots:**

- Default slot for main content
- `header` - Card header content
- `media` - Images, videos, etc.
- `actions` - Action buttons

**Events:**

- `mwc-card-click` - Fired when clickable card is clicked

### TextInput (`mwc-textinput`)

Text input field with styling.

**Properties:**

- `variant` - `"outlined" | "filled" | "standard"`
- `size` - `"small" | "medium" | "large"`
- `type` - `"text" | "email" | "password" | "number" | "tel" | "url" | "search"`
- `value` - String
- `label` - String
- `placeholder` - String
- `helper-text` - String
- `error-text` - String
- `disabled` - Boolean
- `readonly` - Boolean
- `required` - Boolean
- `error` - Boolean

**Slots:**

- `start-adornment` - Content at the start of input
- `end-adornment` - Content at the end of input
- `helper-text` - Helper text below input

**Events:**

- `mwc-textinput-input` - Fired when input value changes
- `mwc-textinput-focus` - Fired when input receives focus
- `mwc-textinput-blur` - Fired when input loses focus
- `mwc-textinput-enter` - Fired when Enter key is pressed

## Theming

The library includes a comprehensive theming system based on CSS custom properties.

```javascript
import {
  applyTheme,
  lightTheme,
  darkTheme,
  generateCSSCustomProperties,
} from 'ceriale-web-components';

// Switch themes
applyTheme(darkTheme);
applyTheme(lightTheme);

// Create custom theme
const customTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    primary: {
      ...lightTheme.colors.primary,
      500: '#9c27b0', // Custom primary color
    },
  },
};

applyTheme(customTheme);
```

### CSS Custom Properties

All design tokens are available as CSS custom properties:

```css
/* Colors */
--color-primary-500
--color-secondary-500
--surface-background
--surface-on-surface

/* Typography */
--font-family-primary
--type-headline-large-font-size

/* Spacing */
--spacing-4
--spacing-8

/* Elevation */
--elevation-2-shadow
--elevation-4-shadow
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd ceriale-web-components

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for production

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
