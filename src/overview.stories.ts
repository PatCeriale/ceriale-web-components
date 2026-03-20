import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Application/Overview',
  parameters: {
    docs: {
      description: {
        component: `
# Ceriale Web Components

A modern, accessible, and comprehensive web component library built with Lit and TypeScript, following Material Design 3 principles.

## 🚀 Features

- **Modern Web Standards**: Built with Lit 3 and TypeScript for type safety and performance
- **Material Design 3**: Follows Google's latest design system guidelines
- **Accessibility First**: WCAG 2.1 AA compliant with comprehensive ARIA support  
- **Framework Agnostic**: Use with any frontend framework or vanilla JavaScript
- **Responsive Design**: Mobile-first responsive components that work on all screen sizes
- **Theme Support**: Built-in light/dark modes with customizable design tokens
- **Tree Shakeable**: Import only what you need for optimal bundle size
- **TypeScript Support**: Full TypeScript definitions and IntelliSense support

## 📦 Component Categories

### Layout Components
- **Box**: Flexible container with spacing, positioning, and flexbox utilities
- **Container**: Responsive container with max-width constraints  
- **Grid**: 12-column responsive grid system with CSS Grid and Flexbox support
- **Grid Item**: Individual grid items with column/row spanning capabilities
- **Stack**: Vertical/horizontal stacking with consistent spacing

### Interactive Components  
- **Button**: Material Design buttons with ripple effects and variants
- **Input**: Form input fields with validation and accessibility features
- **Toggle**: Switch/toggle components for boolean selections
- **Modal**: Dialog and modal overlays with focus management

### Content Components
- **Card**: Content containers with elevation and interactive states
- **Icons**: Comprehensive icon library with consistent styling

### Utility Components
- **Code Box**: Syntax-highlighted code display for documentation

## 🎨 Design System

Built on Material Design 3 foundations:

- **Color System**: Dynamic color theming with light/dark mode support
- **Typography**: Consistent text hierarchy and readability scales  
- **Spacing**: 8px base grid system for consistent rhythm
- **Elevation**: Shadow depth system for visual hierarchy
- **Motion**: Material Motion principles for smooth animations
- **Shape**: Consistent border radius and corner styling

## 🌐 Browser Support

- Chrome 63+
- Firefox 63+  
- Safari 13+
- Edge 79+

All modern browsers that support Web Components and ES Modules.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Getting_Started: Story = {
  render: () => html`
    <div
      style="max-width: 800px; margin: 0 auto; padding: 24px; line-height: 1.6;"
    >
      <h1 style="margin-top: 0; color: #1976d2;">🚀 Getting Started</h1>

      <section style="margin-bottom: 48px;">
        <h2>📦 Installation</h2>

        <h3>NPM</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;"
        >
          <code>npm install ceriale-web-components</code>
        </div>

        <h3>Yarn</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;"
        >
          <code>yarn add ceriale-web-components</code>
        </div>

        <h3>CDN (ES Modules)</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >&lt;script type="module"&gt;<br />
            &nbsp;&nbsp;import
            'https://unpkg.com/ceriale-web-components/dist/index.js';<br />
            &lt;/script&gt;</code
          >
        </div>
      </section>

      <section style="margin-bottom: 48px;">
        <h2>🎯 Basic Usage</h2>

        <h3>Import All Components</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;"
        >
          <code>import 'ceriale-web-components';</code>
        </div>

        <h3>Import Individual Components (Recommended)</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;"
        >
          <code
            >import 'ceriale-web-components/components/button';<br />
            import 'ceriale-web-components/components/layout/grid';</code
          >
        </div>

        <h3>HTML Usage</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >&lt;mwc-button variant="primary"&gt;Click me!&lt;/mwc-button&gt;<br /><br />
            &lt;mwc-grid columns="12" gap="16px"&gt;<br />
            &nbsp;&nbsp;&lt;mwc-grid-item cols="6"&gt;Content
            1&lt;/mwc-grid-item&gt;<br />
            &nbsp;&nbsp;&lt;mwc-grid-item cols="6"&gt;Content
            2&lt;/mwc-grid-item&gt;<br />
            &lt;/mwc-grid&gt;</code
          >
        </div>
      </section>

      <section style="margin-bottom: 48px;">
        <h2>⚛️ Framework Integration</h2>

        <h3>React</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >import 'ceriale-web-components/components/button';<br /><br />
            function App() {<br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mwc-button
            variant="primary"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React Button<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/mwc-button&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;);<br />
            }</code
          >
        </div>

        <h3>Vue</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >&lt;template&gt;<br />
            &nbsp;&nbsp;&lt;mwc-button variant="primary"&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Vue Button<br />
            &nbsp;&nbsp;&lt;/mwc-button&gt;<br />
            &lt;/template&gt;<br /><br />
            &lt;script&gt;<br />
            import 'ceriale-web-components/components/button';<br />
            &lt;/script&gt;</code
          >
        </div>

        <h3>Angular</h3>
        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >// app.module.ts<br />
            import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';<br />
            import 'ceriale-web-components/components/button';<br /><br />
            @NgModule({<br />
            &nbsp;&nbsp;schemas: [CUSTOM_ELEMENTS_SCHEMA]<br />
            })</code
          >
        </div>
      </section>

      <section style="margin-bottom: 48px;">
        <h2>🎨 Theming</h2>
        <p>Customize the appearance using CSS custom properties:</p>

        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >:root {<br />
            &nbsp;&nbsp;/* Primary colors */<br />
            &nbsp;&nbsp;--color-primary: #1976d2;<br />
            &nbsp;&nbsp;--color-primary-hover: #1565c0;<br />
            &nbsp;&nbsp;--color-on-primary: #ffffff;<br /><br />
            &nbsp;&nbsp;/* Spacing */<br />
            &nbsp;&nbsp;--spacing-xs: 4px;<br />
            &nbsp;&nbsp;--spacing-sm: 8px;<br />
            &nbsp;&nbsp;--spacing-md: 16px;<br />
            &nbsp;&nbsp;--spacing-lg: 24px;<br />
            &nbsp;&nbsp;--spacing-xl: 32px;<br /><br />
            &nbsp;&nbsp;/* Typography */<br />
            &nbsp;&nbsp;--font-family: 'Roboto', sans-serif;<br />
            &nbsp;&nbsp;--font-size-sm: 0.875rem;<br />
            &nbsp;&nbsp;--font-size-md: 1rem;<br />
            &nbsp;&nbsp;--font-size-lg: 1.125rem;<br />
            }</code
          >
        </div>
      </section>

      <section style="margin-bottom: 48px;">
        <h2>♿ Accessibility</h2>
        <p>All components follow WCAG 2.1 AA guidelines and include:</p>
        <ul style="margin-left: 24px;">
          <li>
            <strong>Semantic HTML</strong> - Proper element roles and structure
          </li>
          <li>
            <strong>ARIA Labels</strong> - Screen reader compatible descriptions
          </li>
          <li>
            <strong>Keyboard Navigation</strong> - Full keyboard accessibility
          </li>
          <li>
            <strong>Focus Management</strong> - Visible focus indicators and
            logical tab order
          </li>
          <li>
            <strong>Color Contrast</strong> - Meeting minimum contrast ratios
          </li>
          <li>
            <strong>Touch Targets</strong> - 44px minimum touch target sizes
          </li>
        </ul>
      </section>

      <section style="margin-bottom: 48px;">
        <h2>📱 Responsive Design</h2>
        <p>
          Built with a mobile-first approach using a consistent breakpoint
          system:
        </p>

        <div style="margin: 16px 0;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <div
              style="flex: 1; min-width: 200px; padding: 12px; background: #e3f2fd; border-radius: 6px; text-align: center;"
            >
              <strong>xs</strong><br />
              0px+<br />
              <small>Mobile phones</small>
            </div>
            <div
              style="flex: 1; min-width: 200px; padding: 12px; background: #f3e5f5; border-radius: 6px; text-align: center;"
            >
              <strong>sm</strong><br />
              600px+<br />
              <small>Small tablets</small>
            </div>
            <div
              style="flex: 1; min-width: 200px; padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center;"
            >
              <strong>md</strong><br />
              900px+<br />
              <small>Large tablets</small>
            </div>
            <div
              style="flex: 1; min-width: 200px; padding: 12px; background: #fff3e0; border-radius: 6px; text-align: center;"
            >
              <strong>lg</strong><br />
              1200px+<br />
              <small>Desktops</small>
            </div>
            <div
              style="flex: 1; min-width: 200px; padding: 12px; background: #fce4ec; border-radius: 6px; text-align: center;"
            >
              <strong>xl</strong><br />
              1536px+<br />
              <small>Large desktops</small>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>🔧 TypeScript Support</h2>
        <p>
          Full TypeScript definitions are included for enhanced development
          experience:
        </p>

        <div
          style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; overflow-x: auto;"
        >
          <code
            >import { MwcButton } from 'ceriale-web-components';<br /><br />
            // Type-safe component references<br />
            const button: MwcButton = document.querySelector('mwc-button')!;<br />
            button.variant = 'primary'; // IntelliSense support<br />
            button.disabled = false;</code
          >
        </div>

        <p style="margin-top: 16px;">
          <strong>Ready to explore?</strong> Check out the individual component
          stories to see detailed examples, API documentation, and interactive
          demos!
        </p>
      </section>
    </div>
  `,
};
