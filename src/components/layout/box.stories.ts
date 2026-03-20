import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './box';
import '../code-box/code-box';
import '../icons/action-icons.js';
import '../icons/status-icons.js';

const meta: Meta = {
  title: 'Layout/Box',
  component: 'mwc-box',
  parameters: {
    docs: {
      description: {
        component: `
# Material Box Component

A comprehensive container component following Material Design 3 specifications. 
Provides powerful layout utilities, theming integration, accessibility features, and interactive states.

## Key Features

### 🎨 **Material Design 3 Compliance**
- Follows MD3 color system, elevation, and motion principles
- Integrated with design tokens (\`--color-*\`, \`--spacing-*\`, \`--elevation-*\`)
- Light and dark theme support with \`prefers-color-scheme\`
- High contrast support with \`prefers-contrast\`

### 📱 **Mobile-First & Responsive**
- Touch-friendly minimum target sizes (44px)
- Responsive design properties
- RTL (Right-to-Left) language support
- Container query support (future-ready)

### ♿ **Accessibility First (WCAG 2.1 AA)**
- Full ARIA support with roles, labels, and descriptions
- Keyboard navigation (Tab, Enter, Space)
- Focus management with visible indicators
- Screen reader optimization
- Color contrast compliance
- Reduced motion support

### ⚡ **Interactive States & Animation**
- Material Motion-compliant transitions (280ms, cubic-bezier easing)
- Hover, focus, active, disabled, loading states
- Custom events: \`box-focus\`, \`box-blur\`, \`box-click\`, \`box-hover\`, \`box-state-change\`
- Touch feedback and visual state indicators


### 🔧 **Comprehensive API**
- **Size variants**: small, medium, large
- **Color variants**: default, primary, secondary, success, warning, error  
- **Elevation levels**: 0-5 (Material Design shadows)
- **Border radius**: none, small, medium, large, full
- **Layout utilities**: Flexbox, Grid, positioning, spacing
- **Form integration**: FormData support, validation states

### 🎛️ **Customization**
- CSS custom properties for deep theming
- Slot-based content projection
- Override any style property
- Custom spacing and sizing systems

## Design Tokens Integration

The component automatically integrates with your design system:

\`\`\`css
/* Colors */
--color-primary: #6750a4;
--color-on-primary: #ffffff;
--color-surface: #fefbff;

/* Spacing */
--spacing-1: 4px;
--spacing-2: 8px; 
--spacing-3: 12px;

/* Elevation */
--elevation-1: 0px 1px 3px rgba(0, 0, 0, 0.12);
--elevation-2: 0px 3px 6px rgba(0, 0, 0, 0.16);

/* Typography */
--font-family-base: 'Roboto', sans-serif;
\`\`\`

## Best Practices

1. **Layout Containers**: Use \`display="flex"\` with alignment properties  
2. **Touch Targets**: Ensure interactive elements meet 44px minimum
3. **Color Contrast**: Use semantic color variants for meaning
4. **Animation**: Leverage built-in motion for smooth interactions
5. **Accessibility**: Always provide \`aria-label\` for interactive boxes
6. **Performance**: Use elevation sparingly for better rendering
7. **Responsive**: Test across different viewport sizes

## Common Patterns

### Card Container
\`\`\`html
<mwc-box variant="default" elevation="2" borderRadius="large" p="medium">
  Card content here
</mwc-box>
\`\`\`

### Interactive Button
\`\`\`html
<mwc-box interactive variant="primary" size="medium" aria-label="Click me">
  Button content
</mwc-box>
\`\`\`

### Flex Layout
\`\`\`html
<mwc-box display="flex" gap="medium" alignItems="center">
  <mwc-box>Item 1</mwc-box>  
  <mwc-box>Item 2</mwc-box>
</mwc-box>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    // Core properties
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant affecting padding and minimum dimensions',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ],
      description: 'Color variant using design token colors',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable interactive states and keyboard navigation',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interaction and apply visual disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner and disable interaction',
    },
    elevation: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5],
      description: 'Material Design elevation level (box shadow depth)',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
      description: 'Border radius variant',
    },

    // Layout properties
    display: {
      control: 'select',
      options: [
        'block',
        'inline',
        'inline-block',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'none',
      ],
      description: 'CSS display property',
    },
    flexDirection: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction for flexbox layouts',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
      description: 'Align items in flexbox',
    },
    justifyContent: {
      control: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content in flexbox',
    },
    gap: {
      control: 'text',
      description: 'Gap between flex/grid items (supports design tokens)',
    },

    // Spacing
    p: {
      control: 'text',
      description: 'Padding (all sides) - overrides size variant padding',
    },
    m: {
      control: 'text',
      description: 'Margin (all sides)',
    },

    // Visual overrides
    bgcolor: {
      control: 'color',
      description: 'Background color override',
    },
    color: {
      control: 'color',
      description: 'Text color override',
    },

    // Accessibility
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
    role: {
      control: 'select',
      options: [
        'button',
        'banner',
        'navigation',
        'main',
        'complementary',
        'contentinfo',
        null,
      ],
      description: 'ARIA role override',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      <!-- Basic Usage Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Basic Usage
        </h2>
        <div style="margin-bottom: 24px;">
          <mwc-box>Default Box - Clean and minimal</mwc-box>
        </div>
        <mwc-code-box
          title="Simple box"
          code="<mwc-box>Default Box - Clean and minimal</mwc-box>"
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Size Variants Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Size Variants
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;"
          >
            <mwc-box size="small" variant="default">Small Box</mwc-box>
            <mwc-box size="medium" variant="default">Medium Box</mwc-box>
            <mwc-box size="large" variant="default">Large Box</mwc-box>
          </div>
          <p style="margin-bottom: 16px; color: #666;">
            Interactive sizes automatically ensure minimum 44px touch targets:
          </p>
          <div style="display: flex; gap: 16px; align-items: center;">
            <mwc-box
              size="small"
              variant="primary"
              interactive
              aria-label="Small interactive box"
            >
              Small Interactive
            </mwc-box>
            <mwc-box
              size="medium"
              variant="secondary"
              interactive
              aria-label="Medium interactive box"
            >
              Medium Interactive
            </mwc-box>
            <mwc-box
              size="large"
              variant="success"
              interactive
              aria-label="Large interactive box"
            >
              Large Interactive
            </mwc-box>
          </div>
        </div>
        <mwc-code-box
          title="Size variants"
          code='<!-- Basic sizes -->
<mwc-box size="small">Small Box</mwc-box>
<mwc-box size="medium">Medium Box</mwc-box>
<mwc-box size="large">Large Box</mwc-box>

<!-- Interactive sizes -->
<mwc-box size="small" variant="primary" interactive aria-label="Small interactive box">
  Small Interactive
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Color Variants Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Color Variants
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;"
          >
            <mwc-box variant="default" size="medium">Default</mwc-box>
            <mwc-box variant="primary" size="medium">Primary</mwc-box>
            <mwc-box variant="secondary" size="medium">Secondary</mwc-box>
            <mwc-box variant="success" size="medium">Success</mwc-box>
            <mwc-box variant="warning" size="medium">Warning</mwc-box>
            <mwc-box variant="error" size="medium">Error</mwc-box>
          </div>
          <p style="margin-bottom: 16px; color: #666;">
            Interactive color variants with hover effects:
          </p>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <mwc-box
              variant="primary"
              interactive
              size="medium"
              aria-label="Primary interactive box"
            >
              Primary Interactive
            </mwc-box>
            <mwc-box
              variant="secondary"
              interactive
              size="medium"
              aria-label="Secondary interactive box"
            >
              Secondary Interactive
            </mwc-box>
            <mwc-box
              variant="success"
              interactive
              size="medium"
              aria-label="Success interactive box"
            >
              Success Interactive
            </mwc-box>
          </div>
        </div>
        <mwc-code-box
          title="Color variants"
          code='<!-- Basic colors -->
<mwc-box variant="default">Default</mwc-box>
<mwc-box variant="primary">Primary</mwc-box>
<mwc-box variant="secondary">Secondary</mwc-box>
<mwc-box variant="success">Success</mwc-box>
<mwc-box variant="warning">Warning</mwc-box>
<mwc-box variant="error">Error</mwc-box>

<!-- Interactive colors -->
<mwc-box variant="primary" interactive aria-label="Interactive box">
  Primary Interactive
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Elevation Levels Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Elevation Levels
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; gap: 24px; flex-wrap: wrap; padding: 16px; background: #f5f5f5; border-radius: 8px;"
          >
            <mwc-box elevation="0" size="medium" style="background: white;"
              >Elevation 0</mwc-box
            >
            <mwc-box elevation="1" size="medium" style="background: white;"
              >Elevation 1</mwc-box
            >
            <mwc-box elevation="2" size="medium" style="background: white;"
              >Elevation 2</mwc-box
            >
            <mwc-box elevation="3" size="medium" style="background: white;"
              >Elevation 3</mwc-box
            >
            <mwc-box elevation="4" size="medium" style="background: white;"
              >Elevation 4</mwc-box
            >
            <mwc-box elevation="5" size="medium" style="background: white;"
              >Elevation 5</mwc-box
            >
          </div>
        </div>
        <mwc-code-box
          title="Material Design elevation levels"
          code='<mwc-box elevation="0">Elevation 0</mwc-box>
<mwc-box elevation="1">Elevation 1</mwc-box>
<mwc-box elevation="2">Elevation 2</mwc-box>
<mwc-box elevation="3">Elevation 3</mwc-box>
<mwc-box elevation="4">Elevation 4</mwc-box>
<mwc-box elevation="5">Elevation 5</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Border Radius Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Border Radius
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <mwc-box variant="primary" borderRadius="none" size="medium"
              >None</mwc-box
            >
            <mwc-box variant="primary" borderRadius="small" size="medium"
              >Small</mwc-box
            >
            <mwc-box variant="primary" borderRadius="medium" size="medium"
              >Medium</mwc-box
            >
            <mwc-box variant="primary" borderRadius="large" size="medium"
              >Large</mwc-box
            >
            <mwc-box variant="primary" borderRadius="full" size="medium"
              >Full</mwc-box
            >
          </div>
        </div>
        <mwc-code-box
          title="Border radius variants"
          code='<mwc-box borderRadius="none">None</mwc-box>
<mwc-box borderRadius="small">Small</mwc-box>
<mwc-box borderRadius="medium">Medium</mwc-box>
<mwc-box borderRadius="large">Large</mwc-box>
<mwc-box borderRadius="full">Full</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Interactive States Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Interactive States
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-bottom: 16px;"
          >
            <mwc-box
              interactive
              variant="primary"
              aria-label="Normal interactive box"
            >
              Normal (Hover me)
            </mwc-box>
            <mwc-box
              interactive
              disabled
              variant="primary"
              aria-label="Disabled interactive box"
            >
              Disabled
            </mwc-box>
            <mwc-box
              interactive
              loading
              variant="secondary"
              aria-label="Loading interactive box"
            >
              Loading
            </mwc-box>
          </div>
          <p style="margin-bottom: 16px; color: #666;">
            Keyboard navigation (Tab, Enter, Space):
          </p>
          <div
            style="display: flex; gap: 16px; flex-direction: column; max-width: 300px;"
          >
            <mwc-box
              interactive
              variant="default"
              aria-label="First keyboard navigable box"
            >
              Button 1 (Try Tab → Enter)
            </mwc-box>
            <mwc-box
              interactive
              variant="secondary"
              aria-label="Second keyboard navigable box"
            >
              Button 2 (Try Tab → Space)
            </mwc-box>
          </div>
        </div>
        <mwc-code-box
          title="Interactive states"
          code='<!-- Basic interactive states -->
<mwc-box interactive variant="primary" aria-label="Interactive box">
  Normal (Hover me)
</mwc-box>
<mwc-box interactive disabled variant="primary">
  Disabled
</mwc-box>
<mwc-box interactive loading variant="secondary">
  Loading
</mwc-box>

<!-- Keyboard navigation -->
<mwc-box interactive aria-label="Keyboard navigable">
  Button (Try Tab → Enter)
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Layout Utilities Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Layout Utilities
        </h2>
        <div style="margin-bottom: 24px;">
          <p style="margin-bottom: 16px; color: #666;">
            Flexbox layouts (automatic flex display):
          </p>
          <mwc-box
            gap="16px"
            alignItems="center"
            p="16px"
            variant="default"
            style="margin-bottom: 16px;"
          >
            <mwc-box variant="primary" size="small">Item 1</mwc-box>
            <mwc-box variant="secondary" size="small">Item 2</mwc-box>
            <mwc-box variant="success" size="small">Item 3</mwc-box>
          </mwc-box>
          <p style="margin-bottom: 16px; color: #666;">Centered layout:</p>
          <mwc-box
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="default"
            style="height: 100px;"
          >
            <mwc-box variant="primary" elevation="2">Perfect Center</mwc-box>
          </mwc-box>
        </div>
        <mwc-code-box
          title="Layout utilities"
          code='<!-- Flexbox layout -->
<mwc-box gap="16px" alignItems="center" p="16px">
  <mwc-box variant="primary">Item 1</mwc-box>
  <mwc-box variant="secondary">Item 2</mwc-box>
  <mwc-box variant="success">Item 3</mwc-box>
</mwc-box>

<!-- Centered layout -->
<mwc-box 
  display="flex" 
  alignItems="center" 
  justifyContent="center"
  style="height: 100px;"
>
  <mwc-box variant="primary">Perfect Center</mwc-box>
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Accessibility Features Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Accessibility Features
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; gap: 16px; flex-direction: column; max-width: 400px;"
          >
            <mwc-box
              interactive
              variant="primary"
              role="banner"
              aria-label="Main navigation banner"
            >
              Navigation Banner (role="banner")
            </mwc-box>
            <mwc-box
              interactive
              variant="secondary"
              role="button"
              aria-label="Submit form data"
            >
              Submit Button (detailed description)
            </mwc-box>
            <mwc-box
              variant="warning"
              role="alert"
              aria-label="Important system warning"
            >
              System Warning (role="alert")
            </mwc-box>
          </div>
        </div>
        <mwc-code-box
          title="ARIA roles and labels"
          code='<mwc-box 
  interactive 
  role="banner" 
  aria-label="Main navigation banner"
>
  Navigation Banner
</mwc-box>

<mwc-box 
  interactive 
  role="button" 
  aria-label="Submit form data"
  aria-describedby="help-text"
>
  Submit Button
</mwc-box>

<mwc-box role="alert" aria-label="Important warning">
  System Warning
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Advanced Customization Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Advanced Customization
        </h2>
        <div style="margin-bottom: 24px;">
          <style>
            .custom-gradient-box {
              --box-background-color: linear-gradient(
                135deg,
                #667eea 0%,
                #764ba2 100%
              );
              --box-color: white;
              --box-border-radius: 20px;
              --box-transition-duration: 400ms;
            }
          </style>
          <div style="display: flex; gap: 16px; align-items: center;">
            <mwc-box
              interactive
              class="custom-gradient-box"
              aria-label="Customized box"
            >
              Custom Gradient Theme
            </mwc-box>
            <mwc-box
              interactive
              variant="secondary"
              style="--box-transition-duration: 600ms; --box-hover-transform: rotate(5deg) scale(1.1);"
              aria-label="Custom hover animation"
            >
              Custom Hover Effect
            </mwc-box>
          </div>
        </div>
        <mwc-code-box
          title="CSS custom properties"
          code='<style>
  .custom-gradient-box {
    --box-background-color: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --box-color: white;
    --box-border-radius: 20px;
    --box-transition-duration: 400ms;
  }
</style>

<mwc-box interactive class="custom-gradient-box">
  Custom Gradient Theme
</mwc-box>

<mwc-box 
  interactive 
  style="--box-hover-transform: rotate(5deg) scale(1.1);"
>
  Custom Hover Effect
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Real World Examples Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Real World Examples
        </h2>
        <div style="margin-bottom: 24px;">
          <p style="margin-bottom: 16px; color: #666;">Navigation Bar:</p>
          <mwc-box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="12px 24px"
            variant="primary"
            elevation="2"
            role="navigation"
            aria-label="Main navigation"
            style="margin-bottom: 24px;"
          >
            <mwc-box variant="primary" interactive aria-label="Home"
              >🏠 Home</mwc-box
            >
            <mwc-box display="flex" gap="16px">
              <mwc-box interactive variant="primary" aria-label="Products"
                >Products</mwc-box
              >
              <mwc-box interactive variant="primary" aria-label="About"
                >About</mwc-box
              >
            </mwc-box>
            <mwc-box
              interactive
              variant="primary"
              borderRadius="full"
              aria-label="User account"
              >👤</mwc-box
            >
          </mwc-box>
          <p style="margin-bottom: 16px; color: #666;">Dashboard Cards:</p>
          <mwc-box display="flex" gap="16px">
            <mwc-box
              elevation="2"
              borderRadius="large"
              p="20px"
              style="flex: 1; background: white; text-align: center;"
            >
              <div style="font-size: 24px; font-weight: bold; color: #2e7d32;">
                $24,500
              </div>
              <div style="color: #666;">Revenue</div>
            </mwc-box>
            <mwc-box
              elevation="2"
              borderRadius="large"
              p="20px"
              style="flex: 1; background: white; text-align: center;"
            >
              <div style="font-size: 24px; font-weight: bold; color: #1976d2;">
                1,432
              </div>
              <div style="color: #666;">Users</div>
            </mwc-box>
          </mwc-box>
        </div>
        <mwc-code-box
          title="Real world examples"
          code='<!-- Navigation Bar -->
<mwc-box 
  display="flex" 
  justifyContent="space-between" 
  alignItems="center"
  p="12px 24px"
  variant="primary"
  elevation="2"
  role="navigation"
>
  <mwc-box interactive>🏠 Home</mwc-box>
  <mwc-box display="flex" gap="16px">
    <mwc-box interactive>Products</mwc-box>
    <mwc-box interactive>About</mwc-box>
  </mwc-box>
  <mwc-box interactive borderRadius="full">👤</mwc-box>
</mwc-box>

<!-- Dashboard Cards -->
<mwc-box display="flex" gap="16px">
  <mwc-box 
    elevation="2" 
    borderRadius="large" 
    p="20px" 
    style="flex: 1; text-align: center;"
  >
    <div>$24,500</div>
    <div>Revenue</div>
  </mwc-box>
</mwc-box>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Form Integration Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Form Integration
        </h2>
        <div style="margin-bottom: 24px;">
          <form
            @submit=${(e: Event) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              alert(
                'Form submitted with: ' +
                  Array.from(formData.entries())
                    .map(([k, v]) => `${k}: ${v}`)
                    .join(', '),
              );
            }}
          >
            <div
              style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;"
            >
              <label><strong>Select an option:</strong></label>
              <mwc-box
                interactive
                variant="default"
                name="choice"
                value="option1"
                aria-label="Option 1"
              >
                Option 1
              </mwc-box>
              <mwc-box
                interactive
                variant="default"
                name="choice"
                value="option2"
                aria-label="Option 2"
              >
                Option 2
              </mwc-box>
              <mwc-box interactive variant="success" aria-label="Submit form">
                Submit Form
              </mwc-box>
            </div>
          </form>
        </div>
        <mwc-code-box
          title="Form integration"
          code='<form @submit=${(e: Event) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            console.log('Form data:', Array.from(formData.entries()));
          }}>
  <mwc-box 
    interactive 
    variant="default"
    name="choice"
    value="option1"
    aria-label="Option 1"
  >
    Option 1
  </mwc-box>
  
  <mwc-box 
    interactive 
    variant="success" 
    type="submit"
    aria-label="Submit form"
  >
    Submit Form
  </mwc-box>
</form>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
