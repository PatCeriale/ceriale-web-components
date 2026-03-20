import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './container';
import '../code-box/code-box';

const meta: Meta = {
  title: 'Layout/Container',
  component: 'mwc-container',
  parameters: {
    docs: {
      description: {
        component: `
# Container Component

A responsive container component that provides consistent page layouts with max-width constraints.
The Container component centers content and provides responsive breakpoint-based sizing.

## Features

- **Responsive Layout**: Automatic max-width constraints based on screen size
- **Size Variants**: Multiple size options from xs to xxl plus fluid option
- **Centering**: Automatically centers content with horizontal margins
- **Semantic HTML**: Supports different HTML elements (section, header, footer, etc.)
- **Integrated theming and elevation support
- **Accessibility**: Full semantic HTML support with proper roles
- **Responsive Padding**: Adjusts padding based on screen size and content
- **Flexible Content**: Works with any content type and other layout components

## Design Tokens

The component uses  design tokens:
- **Max Widths**: Responsive breakpoint-based container sizes
- **Spacing**: \`--spacing-*\` tokens for consistent padding
- **Colors**: \`--color-*\` tokens for theme colors
- **Elevation**: \`--elevation-*\` tokens for raised containers

## Size Variants

- **xs**: 480px max-width (extra small content)
- **sm**: 640px max-width (small content) 
- **md**: 768px max-width (medium content)
- **lg**: 1024px max-width (large content)
- **xl**: 1280px max-width (extra large content)
- **xxl**: 1536px max-width (extra extra large content)
- **fluid**: No max-width constraint (full width)

## Responsive Behavior

Container automatically adjusts based on viewport:
- **Mobile**: Full width with padding
- **Tablet**: Constrained width with increased padding
- **Desktop**: Max-width applied with generous padding
- **Large screens**: Centered with appropriate max-width

## Best Practices

1. Use Container as the outer wrapper for page content
2. Choose appropriate size based on content density
3. Use semantic HTML elements (section, article, header, footer)
4. Combine with Grid and Box for complex layouts
5. Apply elevation for card-like containers
6. Use fluid size sparingly for full-width designs
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'fluid'],
      description: 'Container size variant',
    },
    as: {
      control: 'select',
      options: [
        'div',
        'section',
        'article',
        'header',
        'main',
        'footer',
        'aside',
      ],
      description: 'HTML element to render',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
    elevated: {
      control: 'boolean',
      description: 'Apply elevation shadow',
    },
    interactive: {
      control: 'boolean',
      description: 'Enable interactive hover/focus states',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interaction',
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
          <mwc-container>
            <p>
              Default container with automatic responsive sizing and padding.
            </p>
            <p>
              The container automatically centers content and applies
              appropriate max-width based on the screen size.
            </p>
          </mwc-container>
        </div>
        <mwc-code-box
          title="Simple container"
          code="<mwc-container>
  <p>Default container with automatic responsive sizing and padding.</p>
  <p>The container automatically centers content and applies appropriate max-width based on the screen size.</p>
</mwc-container>"
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
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <h4>Extra Small (xs) - 480px max</h4>
              <mwc-container size="xs" style="border: 1px dashed #e0e0e0;">
                <p>
                  This is an extra small container perfect for narrow content
                  like forms or small widgets.
                </p>
              </mwc-container>
            </div>
            <div>
              <h4>Small (sm) - 640px max</h4>
              <mwc-container size="sm" style="border: 1px dashed #e0e0e0;">
                <p>
                  Small container suitable for blog posts, articles, or compact
                  interfaces.
                </p>
              </mwc-container>
            </div>
            <div>
              <h4>Medium (md) - 768px max</h4>
              <mwc-container size="md" style="border: 1px dashed #e0e0e0;">
                <p>
                  Medium container ideal for most content types and standard
                  page layouts.
                </p>
              </mwc-container>
            </div>
            <div>
              <h4>Large (lg) - 1024px max</h4>
              <mwc-container size="lg" style="border: 1px dashed #e0e0e0;">
                <p>
                  Large container perfect for dashboards, data tables, and
                  content-rich layouts.
                </p>
              </mwc-container>
            </div>
            <div>
              <h4>Extra Large (xl) - 1280px max</h4>
              <mwc-container size="xl" style="border: 1px dashed #e0e0e0;">
                <p>
                  Extra large container for wide layouts, complex applications,
                  and multi-column content.
                </p>
              </mwc-container>
            </div>
            <div>
              <h4>Fluid - No max-width</h4>
              <mwc-container size="fluid" style="border: 1px dashed #e0e0e0;">
                <p>
                  Fluid container takes the full width of its parent. Use
                  sparingly for special layouts.
                </p>
              </mwc-container>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Container sizes"
          code='<!-- Size variants -->
<mwc-container size="xs">Extra small content</mwc-container>
<mwc-container size="sm">Small content</mwc-container>
<mwc-container size="md">Medium content</mwc-container>
<mwc-container size="lg">Large content</mwc-container>
<mwc-container size="xl">Extra large content</mwc-container>
<mwc-container size="fluid">Full width content</mwc-container>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Semantic HTML Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Semantic HTML Elements
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <mwc-container as="header" variant="primary" size="lg">
              <h1 style="margin: 0; text-align: center;">Page Header</h1>
              <p style="margin: 8px 0 0; text-align: center;">
                Semantic header element with primary styling
              </p>
            </mwc-container>

            <mwc-container as="main" size="md">
              <h2>Main Content</h2>
              <p>
                This is the main content area using semantic HTML. It provides
                better accessibility and SEO.
              </p>
              <p>
                The container automatically provides appropriate spacing and
                max-width for comfortable reading.
              </p>
            </mwc-container>

            <mwc-container as="aside" variant="secondary" size="sm">
              <h3>Sidebar Content</h3>
              <p>
                Complementary content in an aside element with secondary
                styling.
              </p>
            </mwc-container>

            <mwc-container as="footer" variant="success" size="lg">
              <p style="margin: 0; text-align: center;">
                Footer content with success variant styling
              </p>
            </mwc-container>
          </div>
        </div>
        <mwc-code-box
          title="Semantic HTML elements"
          code='<!-- Different HTML elements -->
<mwc-container as="header" variant="primary" size="lg">
  <h1>Page Header</h1>
</mwc-container>

<mwc-container as="main" size="md">
  <h2>Main Content</h2>
  <p>Main content area with proper semantics</p>
</mwc-container>

<mwc-container as="aside" variant="secondary" size="sm">
  <h3>Sidebar Content</h3>
  <p>Complementary content</p>
</mwc-container>

<mwc-container as="footer" variant="success" size="lg">
  <p>Footer content</p>
</mwc-container>'
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
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <mwc-container variant="primary" size="md">
              <h4 style="margin-top: 0;">Primary Container</h4>
              <p style="margin-bottom: 0;">
                Container with primary color theming.
              </p>
            </mwc-container>

            <mwc-container variant="secondary" size="md">
              <h4 style="margin-top: 0;">Secondary Container</h4>
              <p style="margin-bottom: 0;">
                Container with secondary color theming.
              </p>
            </mwc-container>

            <mwc-container variant="success" size="md">
              <h4 style="margin-top: 0;">Success Container</h4>
              <p style="margin-bottom: 0;">
                Container with success color theming.
              </p>
            </mwc-container>

            <mwc-container variant="warning" size="md">
              <h4 style="margin-top: 0;">Warning Container</h4>
              <p style="margin-bottom: 0;">
                Container with warning color theming.
              </p>
            </mwc-container>

            <mwc-container variant="error" size="md">
              <h4 style="margin-top: 0;">Error Container</h4>
              <p style="margin-bottom: 0;">
                Container with error color theming.
              </p>
            </mwc-container>
          </div>
        </div>
        <mwc-code-box
          title="Color variants"
          code='<!-- Color variants -->
<mwc-container variant="primary">Primary Container</mwc-container>
<mwc-container variant="secondary">Secondary Container</mwc-container>
<mwc-container variant="success">Success Container</mwc-container>
<mwc-container variant="warning">Warning Container</mwc-container>
<mwc-container variant="error">Error Container</mwc-container>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Elevated Containers Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Elevated Containers
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; flex-direction: column; gap: 24px; background: #f5f5f5; padding: 24px;"
          >
            <mwc-container elevated size="sm">
              <h4 style="margin-top: 0;">Small Elevated Container</h4>
              <p>
                This container has elevation shadow, perfect for cards and
                raised content.
              </p>
              <p style="margin-bottom: 0;">
                The elevation follows Material Design principles.
              </p>
            </mwc-container>

            <mwc-container elevated variant="primary" size="md">
              <h4 style="margin-top: 0;">Primary Elevated Container</h4>
              <p>
                Combination of elevation and color variant for emphasized
                content.
              </p>
              <p style="margin-bottom: 0;">
                Great for important announcements or featured content.
              </p>
            </mwc-container>

            <mwc-container elevated interactive size="md">
              <h4 style="margin-top: 0;">Interactive Container</h4>
              <p>This container responds to hover and focus interactions.</p>
              <p style="margin-bottom: 0;">Hover over it to see the effect!</p>
            </mwc-container>
          </div>
        </div>
        <mwc-code-box
          title="Elevated containers"
          code='<!-- Elevated containers -->
<mwc-container elevated size="sm">
  <h4>Small Elevated Container</h4>
  <p>Perfect for cards and raised content</p>
</mwc-container>

<mwc-container elevated variant="primary" size="md">
  <h4>Primary Elevated Container</h4>
  <p>Emphasized content with elevation and color</p>
</mwc-container>

<mwc-container elevated interactive size="md">
  <h4>Interactive Container</h4>
  <p>Responds to hover interactions</p>
</mwc-container>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Responsive Design Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Responsive Design
        </h2>
        <div style="margin-bottom: 24px;">
          <h3>Responsive Container Behavior</h3>
          <p>
            Resize your viewport to see how the container adapts to different
            screen sizes.
          </p>
          <mwc-container
            size="lg"
            style="border: 1px dashed #e0e0e0; margin-bottom: 24px;"
          >
            <h4>Large Container</h4>
            <p>This container demonstrates responsive behavior:</p>
            <ul>
              <li>
                <strong>Mobile:</strong> Full width with comfortable padding
              </li>
              <li>
                <strong>Tablet:</strong> Constrained width with increased
                padding
              </li>
              <li>
                <strong>Desktop:</strong> Max-width of 1024px with generous
                padding
              </li>
            </ul>
            <p>
              The padding also adjusts automatically based on screen size for
              optimal readability.
            </p>
          </mwc-container>

          <div
            style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
          >
            <mwc-container size="sm" elevated>
              <h5 style="margin-top: 0;">Card 1</h5>
              <p style="margin-bottom: 0;">
                Each card adapts to the grid layout while maintaining proper
                container behavior.
              </p>
            </mwc-container>

            <mwc-container size="sm" elevated>
              <h5 style="margin-top: 0;">Card 2</h5>
              <p style="margin-bottom: 0;">
                The container ensures content remains readable at all sizes.
              </p>
            </mwc-container>

            <mwc-container size="sm" elevated>
              <h5 style="margin-top: 0;">Card 3</h5>
              <p style="margin-bottom: 0;">
                Responsive padding maintains visual hierarchy.
              </p>
            </mwc-container>
          </div>
        </div>
        <mwc-code-box
          title="Responsive containers"
          code='<!-- Responsive container -->
<mwc-container size="lg">
  <h4>Large Container</h4>
  <p>Adapts to different screen sizes automatically</p>
  <ul>
    <li><strong>Mobile:</strong> Full width with padding</li>
    <li><strong>Tablet:</strong> Constrained width</li>
    <li><strong>Desktop:</strong> Max-width applied</li>
  </ul>
</mwc-container>

<!-- Grid of containers -->
<div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
  <mwc-container size="sm" elevated>Card 1</mwc-container>
  <mwc-container size="sm" elevated>Card 2</mwc-container>
  <mwc-container size="sm" elevated>Card 3</mwc-container>
</div>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Nested Containers Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Nested Containers
        </h2>
        <div style="margin-bottom: 24px;">
          <mwc-container size="xl" elevated style="background: #fafafa;">
            <h3 style="margin-top: 0;">Outer Container (XL)</h3>
            <p>
              This is the outer container providing the main layout structure.
            </p>

            <mwc-container size="lg" variant="primary" style="margin: 16px 0;">
              <h4 style="margin-top: 0;">Nested Container (LG)</h4>
              <p>
                Containers can be nested to create complex layouts with
                different constraints.
              </p>

              <mwc-container size="md" variant="secondary">
                <h5 style="margin-top: 0;">Inner Container (MD)</h5>
                <p style="margin-bottom: 0;">
                  Each level provides its own sizing and styling context.
                </p>
              </mwc-container>
            </mwc-container>

            <p style="margin-bottom: 0;">
              This pattern is useful for creating focused content areas within
              larger layouts.
            </p>
          </mwc-container>
        </div>
        <mwc-code-box
          title="Nested containers"
          code='<mwc-container size="xl" elevated>
  <h3>Outer Container (XL)</h3>
  <p>Main layout structure</p>
  
  <mwc-container size="lg" variant="primary">
    <h4>Nested Container (LG)</h4>
    <p>Complex layouts with different constraints</p>
    
    <mwc-container size="md" variant="secondary">
      <h5>Inner Container (MD)</h5>
      <p>Each level provides its own context</p>
    </mwc-container>
  </mwc-container>
  
  <p>Useful for focused content areas</p>
</mwc-container>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Complex Layout Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Complete Page Layout
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="min-height: 300px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 8px; overflow: hidden;"
          >
            <!-- Header -->
            <mwc-container as="header" size="xl" variant="primary">
              <h1 style="margin: 0; text-align: center; color: white;">
                Application Header
              </h1>
            </mwc-container>

            <!-- Navigation -->
            <mwc-container
              as="nav"
              size="xl"
              style="background: rgba(255, 255, 255, 0.9); border-bottom: 1px solid #e0e0e0;"
            >
              <div
                style="display: flex; gap: 24px; justify-content: center; padding: 8px 0;"
              >
                <a
                  href="#"
                  style="text-decoration: none; color: #333; padding: 8px 16px; border-radius: 4px; background: rgba(0, 0, 0, 0.05);"
                  >Home</a
                >
                <a
                  href="#"
                  style="text-decoration: none; color: #333; padding: 8px 16px;"
                  >Products</a
                >
                <a
                  href="#"
                  style="text-decoration: none; color: #333; padding: 8px 16px;"
                  >About</a
                >
              </div>
            </mwc-container>

            <!-- Main Content -->
            <div style="padding: 24px 0;">
              <mwc-container as="main" size="lg">
                <h2>Welcome to Our Application</h2>
                <p>
                  This example demonstrates how to use Container components to
                  build a complete page layout.
                </p>

                <!-- Feature Cards -->
                <div
                  style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin: 24px 0;"
                >
                  <mwc-container size="sm" elevated interactive>
                    <h4 style="margin-top: 0;">Feature 1</h4>
                    <p style="margin-bottom: 0;">
                      Interactive elevated containers
                    </p>
                  </mwc-container>
                  <mwc-container size="sm" elevated interactive>
                    <h4 style="margin-top: 0;">Feature 2</h4>
                    <p style="margin-bottom: 0;">Responsive grid layouts</p>
                  </mwc-container>
                </div>
              </mwc-container>
            </div>

            <!-- Footer -->
            <mwc-container
              as="footer"
              size="xl"
              variant="success"
              style="border-top: 1px solid #e0e0e0;"
            >
              <div style="text-align: center;">
                <p style="margin: 0;">
                  © 2024 Your Company. Built with Layout Components.
                </p>
              </div>
            </mwc-container>
          </div>
        </div>
        <mwc-code-box
          title="Complete page layout"
          code='<!-- Full page layout example -->
<div style="min-height: 100vh; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);">
  <!-- Header -->
  <mwc-container as="header" size="xl" variant="primary">
    <h1>Application Header</h1>
  </mwc-container>

  <!-- Navigation -->
  <mwc-container as="nav" size="xl">
    <div style="display: flex; gap: 24px; justify-content: center;">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">About</a>
    </div>
  </mwc-container>

  <!-- Main Content -->
  <mwc-container as="main" size="lg">
    <h2>Welcome to Our Application</h2>
    <p>Complete page layout with semantic structure</p>
    
    <!-- Feature Cards -->
    <div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
      <mwc-container size="sm" elevated interactive>
        <h4>Feature 1</h4>
        <p>Interactive containers</p>
      </mwc-container>
      <mwc-container size="sm" elevated interactive>
        <h4>Feature 2</h4>
        <p>Responsive layouts</p>
      </mwc-container>
    </div>
  </mwc-container>

  <!-- Footer -->
  <mwc-container as="footer" size="xl" variant="success">
    <p>© 2024 Your Company</p>
  </mwc-container>
</div>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
