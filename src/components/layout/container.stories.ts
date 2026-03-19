import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './container';

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
- **Material Design 3**: Integrated theming and elevation support
- **Accessibility**: Full semantic HTML support with proper roles
- **Responsive Padding**: Adjusts padding based on screen size and content
- **Flexible Content**: Works with any content type and other layout components

## Design Tokens

The component uses Material Design 3 design tokens:
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

// Basic usage examples
export const Default: Story = {
  render: () => html`
    <mwc-container>
      <p>Default container with automatic responsive sizing and padding.</p>
      <p>
        The container automatically centers content and applies appropriate
        max-width based on the screen size.
      </p>
    </mwc-container>
  `,
};

export const SizeVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Extra Small (xs) - 480px max</h4>
        <mwc-container size="xs" style="border: 1px dashed #e0e0e0;">
          <p>
            This is an extra small container perfect for narrow content like
            forms or small widgets.
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
            Medium container ideal for most content types and standard page
            layouts.
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
            Extra large container for wide layouts, complex applications, and
            multi-column content.
          </p>
        </mwc-container>
      </div>

      <div>
        <h4>Fluid - No max-width</h4>
        <mwc-container size="fluid" style="border: 1px dashed #e0e0e0;">
          <p>
            Fluid container takes the full width of its parent. Use sparingly
            for special layouts.
          </p>
        </mwc-container>
      </div>
    </div>
  `,
};

export const SemanticHTML: Story = {
  render: () => html`
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
          This is the main content area using semantic HTML. It provides better
          accessibility and SEO.
        </p>
        <p>
          The container automatically provides appropriate spacing and max-width
          for comfortable reading.
        </p>
      </mwc-container>

      <mwc-container as="aside" variant="secondary" size="sm">
        <h3>Sidebar Content</h3>
        <p>Complementary content in an aside element with secondary styling.</p>
      </mwc-container>

      <mwc-container as="footer" variant="success" size="lg">
        <p style="margin: 0; text-align: center;">
          Footer content with success variant styling
        </p>
      </mwc-container>
    </div>
  `,
};

export const ColorVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <mwc-container variant="primary" size="md">
        <h4 style="margin-top: 0;">Primary Container</h4>
        <p style="margin-bottom: 0;">Container with primary color theming.</p>
      </mwc-container>

      <mwc-container variant="secondary" size="md">
        <h4 style="margin-top: 0;">Secondary Container</h4>
        <p style="margin-bottom: 0;">Container with secondary color theming.</p>
      </mwc-container>

      <mwc-container variant="success" size="md">
        <h4 style="margin-top: 0;">Success Container</h4>
        <p style="margin-bottom: 0;">Container with success color theming.</p>
      </mwc-container>

      <mwc-container variant="warning" size="md">
        <h4 style="margin-top: 0;">Warning Container</h4>
        <p style="margin-bottom: 0;">Container with warning color theming.</p>
      </mwc-container>

      <mwc-container variant="error" size="md">
        <h4 style="margin-top: 0;">Error Container</h4>
        <p style="margin-bottom: 0;">Container with error color theming.</p>
      </mwc-container>
    </div>
  `,
};

export const ElevatedContainers: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 24px; background: #f5f5f5; padding: 24px;"
    >
      <mwc-container elevated size="sm">
        <h4 style="margin-top: 0;">Small Elevated Container</h4>
        <p>
          This container has elevation shadow, perfect for cards and raised
          content.
        </p>
        <p style="margin-bottom: 0;">
          The elevation follows Material Design principles.
        </p>
      </mwc-container>

      <mwc-container elevated variant="primary" size="md">
        <h4 style="margin-top: 0;">Primary Elevated Container</h4>
        <p>
          Combination of elevation and color variant for emphasized content.
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
  `,
};

export const ResponsiveDesign: Story = {
  render: () => html`
    <div>
      <h3>Responsive Container Behavior</h3>
      <p>
        Resize your viewport to see how the container adapts to different screen
        sizes.
      </p>

      <mwc-container
        size="lg"
        style="border: 1px dashed #e0e0e0; margin-bottom: 24px;"
      >
        <h4>Large Container</h4>
        <p>This container demonstrates responsive behavior:</p>
        <ul>
          <li><strong>Mobile:</strong> Full width with comfortable padding</li>
          <li>
            <strong>Tablet:</strong> Constrained width with increased padding
          </li>
          <li>
            <strong>Desktop:</strong> Max-width of 1024px with generous padding
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
  `,
};

export const NestedContainers: Story = {
  render: () => html`
    <mwc-container size="xl" elevated style="background: #fafafa;">
      <h3 style="margin-top: 0;">Outer Container (XL)</h3>
      <p>This is the outer container providing the main layout structure.</p>

      <mwc-container size="lg" variant="primary" style="margin: 16px 0;">
        <h4 style="margin-top: 0;">Nested Container (LG)</h4>
        <p>
          Containers can be nested to create complex layouts with different
          constraints.
        </p>

        <mwc-container size="md" variant="secondary">
          <h5 style="margin-top: 0;">Inner Container (MD)</h5>
          <p style="margin-bottom: 0;">
            Each level provides its own sizing and styling context.
          </p>
        </mwc-container>
      </mwc-container>

      <p style="margin-bottom: 0;">
        This pattern is useful for creating focused content areas within larger
        layouts.
      </p>
    </mwc-container>
  `,
};

export const ComplexLayout: Story = {
  render: () => html`
    <div
      style="min-height: 100vh; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);"
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
          <a
            href="#"
            style="text-decoration: none; color: #333; padding: 8px 16px;"
            >Contact</a
          >
        </div>
      </mwc-container>

      <!-- Main Content Area -->
      <div style="padding: 32px 0;">
        <mwc-container as="main" size="lg">
          <h2>Welcome to Our Application</h2>
          <p>
            This example demonstrates how to use Container components to build a
            complete page layout with proper semantic structure.
          </p>

          <!-- Feature Cards -->
          <div
            style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); margin: 32px 0;"
          >
            <mwc-container size="sm" elevated interactive>
              <h4 style="margin-top: 0;">Feature 1</h4>
              <p>
                Each feature card is contained within a small container that
                provides consistent spacing and elevation.
              </p>
              <p style="margin-bottom: 0;">
                The interactive property makes them respond to hover.
              </p>
            </mwc-container>

            <mwc-container size="sm" elevated interactive>
              <h4 style="margin-top: 0;">Feature 2</h4>
              <p>
                Containers automatically handle responsive behavior, ensuring
                optimal layout on all device sizes.
              </p>
              <p style="margin-bottom: 0;">Perfect for card-based designs.</p>
            </mwc-container>

            <mwc-container size="sm" elevated interactive>
              <h4 style="margin-top: 0;">Feature 3</h4>
              <p>
                The combination of elevation, variants, and semantic HTML
                creates accessible and visually appealing layouts.
              </p>
              <p style="margin-bottom: 0;">Material Design 3 compliant.</p>
            </mwc-container>
          </div>

          <!-- Call-to-Action Section -->
          <mwc-container
            size="md"
            variant="secondary"
            elevated
            style="text-align: center; margin-top: 32px;"
          >
            <h3 style="margin-top: 0;">Ready to Get Started?</h3>
            <p>Join thousands of users who trust our platform.</p>
            <button
              style="
              background: var(--color-primary-600, #1976d2);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 500;
              cursor: pointer;
              margin-bottom: 0;
            "
              onmouseover="this.style.background='var(--color-primary-700, #1565c0)'"
              onmouseout="this.style.background='var(--color-primary-600, #1976d2)'"
            >
              Get Started Now
            </button>
          </mwc-container>
        </mwc-container>
      </div>

      <!-- Footer -->
      <mwc-container
        as="footer"
        size="xl"
        variant="success"
        style="border-top: 1px solid #e0e0e0; margin-top: 48px;"
      >
        <div style="text-align: center;">
          <p style="margin: 0;">
            © 2024 Your Company. Built with Material Design 3 Layout Components.
          </p>
        </div>
      </mwc-container>
    </div>
  `,
};
