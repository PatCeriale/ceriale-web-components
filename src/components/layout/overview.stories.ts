import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './box';
import './container';
import './grid';
import './grid-item';
import './stack';

const meta: Meta = {
  title: 'Layout/Overview',
  parameters: {
    docs: {
      description: {
        component: `
# Layout Components Overview

A comprehensive set of Material Design 3 layout components for building responsive, accessible, and themeable user interfaces.
This overview showcases how all layout components work together to create complex, real-world applications.

## Component Library

### 🧱 Box Component
- **Purpose**: Flexible container with spacing, positioning, and flexbox utilities
- **Use Cases**: General-purpose wrapper, spacing control, simple layouts
- **Key Features**: Responsive properties, spacing shortcuts (mx, my, pt, pr), semantic HTML

### 📦 Container Component  
- **Purpose**: Responsive container with max-width constraints
- **Use Cases**: Page layout wrapper, content sections, centered content
- **Key Features**: Breakpoint-based sizing, semantic HTML elements, elevation support

### 🔳 Grid Component
- **Purpose**: 12-column responsive grid system with CSS Grid and Flexbox support
- **Use Cases**: Complex layouts, dashboards, card grids, responsive designs
- **Key Features**: Dual grid systems, responsive columns, advanced alignment

### 📋 Grid Item Component
- **Purpose**: Individual grid items with column/row spanning capabilities
- **Use Cases**: Precise grid positioning, responsive column spans, card layouts
- **Key Features**: Column spanning, responsive sizing, interactive states

### 📚 Stack Component
- **Purpose**: Vertical/horizontal stacking with consistent spacing
- **Use Cases**: Form layouts, navigation, content sections, button groups
- **Key Features**: Multiple directions, responsive behavior, equal sizing options

## Design System Integration

All components follow Material Design 3 principles:

- **Color System**: Integrated theme colors with light/dark mode support
- **Typography**: Consistent text hierarchy and readability
- **Spacing**: 8px base grid system for consistent rhythm
- **Elevation**: Shadow depth system for visual hierarchy
- **Motion**: Material Motion animations for smooth interactions
- **Accessibility**: WCAG 2.1 AA compliance with semantic HTML

## Responsive Design Strategy

### Mobile-First Approach
1. Start with single-column layouts
2. Add complexity as screen size increases  
3. Use responsive props for breakpoint-specific behavior

### Breakpoint System
- **xs**: 0px+ (mobile phones)
- **sm**: 600px+ (small tablets)
- **md**: 900px+ (large tablets, small desktops)
- **lg**: 1200px+ (desktops)
- **xl**: 1536px+ (large desktops)

### Best Practices
- Use Container for page-level layout structure
- Use Grid for complex multi-column layouts
- Use Stack for simple linear layouts
- Use Box for general spacing and positioning
- Combine components for sophisticated designs
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const ComponentComparison: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 48px;">
      <div>
        <h2>Layout Components Comparison</h2>
        <p>
          Each component serves a specific purpose in building layouts. Here's
          how they compare:
        </p>
      </div>

      <!-- Box Component Demo -->
      <div>
        <h3>🧱 Box Component</h3>
        <p>
          <strong>Best for:</strong> General spacing, positioning, and simple
          flexbox layouts
        </p>
        <mwc-box
          display="flex"
          direction="row"
          gap="16px"
          padding="24px"
          style="border: 2px solid #e3f2fd; border-radius: 12px; background: #f8f9fa;"
        >
          <mwc-box
            padding="16px"
            variant="primary"
            style="flex: 1; border-radius: 8px;"
          >
            Flexible Item 1
          </mwc-box>
          <mwc-box
            padding="16px"
            variant="secondary"
            style="flex: 2; border-radius: 8px;"
          >
            Flexible Item 2 (2x width)
          </mwc-box>
          <mwc-box
            padding="16px"
            variant="success"
            style="flex: 1; border-radius: 8px;"
          >
            Flexible Item 3
          </mwc-box>
        </mwc-box>
      </div>

      <!-- Container Component Demo -->
      <div>
        <h3>📦 Container Component</h3>
        <p>
          <strong>Best for:</strong> Page-level layout with responsive max-width
          constraints
        </p>
        <div style="background: #f0f0f0; padding: 24px; border-radius: 12px;">
          <mwc-container size="md" elevated style="text-align: center;">
            <h4 style="margin-top: 0;">Centered Content Container</h4>
            <p>
              This container automatically centers content and applies
              responsive max-width.
            </p>
            <p style="margin-bottom: 0;">
              Perfect for articles, forms, and focused content areas.
            </p>
          </mwc-container>
        </div>
      </div>

      <!-- Grid Component Demo -->
      <div>
        <h3>🔳 Grid Component</h3>
        <p>
          <strong>Best for:</strong> Complex layouts with precise column control
        </p>
        <mwc-grid
          columns="12"
          gap="16px"
          style="border: 2px solid #f8bbd9; border-radius: 12px; padding: 16px;"
        >
          <mwc-grid-item
            cols="12"
            variant="primary"
            style="padding: 12px; text-align: center; border-radius: 6px;"
          >
            Header (12 columns)
          </mwc-grid-item>
          <mwc-grid-item
            cols="8"
            variant="secondary"
            style="padding: 12px; text-align: center; border-radius: 6px;"
          >
            Main Content (8 columns)
          </mwc-grid-item>
          <mwc-grid-item
            cols="4"
            variant="success"
            style="padding: 12px; text-align: center; border-radius: 6px;"
          >
            Sidebar (4 columns)
          </mwc-grid-item>
          <mwc-grid-item
            cols="6"
            variant="warning"
            style="padding: 12px; text-align: center; border-radius: 6px;"
          >
            Feature 1 (6 columns)
          </mwc-grid-item>
          <mwc-grid-item
            cols="6"
            variant="error"
            style="padding: 12px; text-align: center; border-radius: 6px;"
          >
            Feature 2 (6 columns)
          </mwc-grid-item>
        </mwc-grid>
      </div>

      <!-- Stack Component Demo -->
      <div>
        <h3>📚 Stack Component</h3>
        <p><strong>Best for:</strong> Linear layouts with consistent spacing</p>
        <div style="display: flex; gap: 24px;">
          <div style="flex: 1;">
            <h5>Vertical Stack</h5>
            <mwc-stack
              spacing="medium"
              style="border: 2px solid #c8e6c9; border-radius: 12px; padding: 16px;"
            >
              <div
                style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center;"
              >
                Item 1
              </div>
              <div
                style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center;"
              >
                Item 2
              </div>
              <div
                style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center;"
              >
                Item 3
              </div>
            </mwc-stack>
          </div>
          <div style="flex: 1;">
            <h5>Horizontal Stack</h5>
            <mwc-stack
              direction="row"
              spacing="medium"
              style="border: 2px solid #c8e6c9; border-radius: 12px; padding: 16px;"
            >
              <div
                style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center; flex: 1;"
              >
                Item 1
              </div>
              <div
                style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center; flex: 1;"
              >
                Item 2
              </div>
              <div
                style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center; flex: 1;"
              >
                Item 3
              </div>
            </mwc-stack>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const ResponsiveShowcase: Story = {
  render: () => html`
    <div>
      <h2>Responsive Design Showcase</h2>
      <p>
        All layout components adapt to different screen sizes. Resize your
        viewport to see the responsive behavior.
      </p>

      <!-- Responsive Grid Layout -->
      <mwc-container size="xl" style="margin: 32px 0;">
        <h3>Responsive Dashboard Layout</h3>

        <!-- Header -->
        <mwc-grid columns="1" gap="16px" style="margin-bottom: 24px;">
          <mwc-grid-item
            variant="primary"
            elevated
            style="padding: 20px; text-align: center; border-radius: 12px;"
          >
            <h4 style="margin: 0; color: white;">Responsive Header</h4>
          </mwc-grid-item>
        </mwc-grid>

        <!-- Main Content Area -->
        <mwc-grid
          mobile-columns="1"
          tablet-columns="2"
          desktop-columns="12"
          gap="16px"
          style="margin-bottom: 24px;"
        >
          <!-- Main Content -->
          <mwc-grid-item
            mobile-cols="1"
            tablet-cols="2"
            desktop-cols="8"
            elevated
            style="padding: 24px; border-radius: 12px; background: white;"
          >
            <h4 style="margin-top: 0;">Main Content Area</h4>
            <p>This area adapts its width based on screen size:</p>
            <ul>
              <li><strong>Mobile:</strong> Full width (12/12)</li>
              <li><strong>Tablet:</strong> Full width (2/2)</li>
              <li><strong>Desktop:</strong> 8 columns (8/12)</li>
            </ul>

            <mwc-stack
              direction="row"
              mobile-direction="column"
              spacing="medium"
              style="margin-top: 16px;"
            >
              <mwc-box
                variant="primary"
                padding="12px"
                style="flex: 1; border-radius: 6px; text-align: center;"
              >
                Feature 1
              </mwc-box>
              <mwc-box
                variant="secondary"
                padding="12px"
                style="flex: 1; border-radius: 6px; text-align: center;"
              >
                Feature 2
              </mwc-box>
              <mwc-box
                variant="success"
                padding="12px"
                style="flex: 1; border-radius: 6px; text-align: center;"
              >
                Feature 3
              </mwc-box>
            </mwc-stack>
          </mwc-grid-item>

          <!-- Sidebar -->
          <mwc-grid-item
            mobile-cols="1"
            tablet-cols="2"
            desktop-cols="4"
            style="display: flex; flex-direction: column; gap: 16px;"
          >
            <mwc-container elevated size="fluid" style="flex: 1;">
              <h5 style="margin-top: 0;">Responsive Sidebar</h5>
              <p>
                This sidebar stacks below main content on mobile and tablet, but
                appears alongside on desktop.
              </p>
            </mwc-container>

            <mwc-container variant="warning" elevated size="fluid">
              <h6 style="margin-top: 0;">Quick Stats</h6>
              <mwc-stack spacing="small">
                <div>📊 Total Users: 1,234</div>
                <div>📈 Growth: +12.5%</div>
                <div>💰 Revenue: $45,678</div>
              </mwc-stack>
            </mwc-container>
          </mwc-grid-item>
        </mwc-grid>

        <!-- Footer -->
        <mwc-grid columns="1" gap="16px">
          <mwc-grid-item
            variant="success"
            style="padding: 16px; text-align: center; border-radius: 12px;"
          >
            Responsive Footer Area
          </mwc-grid-item>
        </mwc-grid>
      </mwc-container>
    </div>
  `,
};

export const RealWorldApplication: Story = {
  render: () => html`
    <div
      style="min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
    >
      <!-- App Header -->
      <mwc-container as="header" size="xl" style="padding: 16px 0;">
        <mwc-stack
          direction="row"
          align="center"
          justify="space-between"
          mobile-direction="column"
          mobile-wrap
          spacing="medium"
          style="background: rgba(255,255,255,0.95); padding: 16px 24px; border-radius: 12px; backdrop-filter: blur(10px);"
        >
          <!-- Logo -->
          <div style="font-size: 24px; font-weight: bold; color: #1976d2;">
            LayoutApp
          </div>

          <!-- Navigation -->
          <mwc-stack
            direction="row"
            spacing="large"
            mobile-direction="column"
            mobile-spacing="medium"
          >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500; padding: 8px 16px; border-radius: 6px; transition: background 0.2s;"
              onmouseover="this.style.background='rgba(25, 118, 210, 0.1)'"
              onmouseout="this.style.background='transparent'"
              >Home</a
            >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500; padding: 8px 16px; border-radius: 6px; transition: background 0.2s;"
              onmouseover="this.style.background='rgba(25, 118, 210, 0.1)'"
              onmouseout="this.style.background='transparent'"
              >Features</a
            >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500; padding: 8px 16px; border-radius: 6px; transition: background 0.2s;"
              onmouseover="this.style.background='rgba(25, 118, 210, 0.1)'"
              onmouseout="this.style.background='transparent'"
              >Pricing</a
            >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500; padding: 8px 16px; border-radius: 6px; transition: background 0.2s;"
              onmouseover="this.style.background='rgba(25, 118, 210, 0.1)'"
              onmouseout="this.style.background='transparent'"
              >About</a
            >
          </mwc-stack>

          <!-- Actions -->
          <mwc-stack direction="row" spacing="medium">
            <button
              style="
              padding: 10px 20px;
              background: transparent;
              color: #1976d2;
              border: 2px solid #1976d2;
              border-radius: 8px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
            "
              onmouseover="this.style.background='#1976d2'; this.style.color='white'"
              onmouseout="this.style.background='transparent'; this.style.color='#1976d2'"
            >
              Log In
            </button>
            <button
              style="
              padding: 10px 20px;
              background: #1976d2;
              color: white;
              border: 2px solid #1976d2;
              border-radius: 8px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
            "
              onmouseover="this.style.background='#1565c0'"
              onmouseout="this.style.background='#1976d2'"
            >
              Sign Up
            </button>
          </mwc-stack>
        </mwc-stack>
      </mwc-container>

      <!-- Hero Section -->
      <mwc-container size="lg" style="padding: 48px 0;">
        <mwc-stack
          spacing="xl"
          align="center"
          style="text-align: center; color: white;"
        >
          <h1
            style="margin: 0; font-size: 3rem; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);"
          >
            Beautiful Layouts Made Simple
          </h1>
          <p
            style="margin: 0; font-size: 1.2rem; max-width: 600px; opacity: 0.9;"
          >
            Create responsive, accessible, and stunning user interfaces with our
            Material Design 3 layout components.
          </p>
          <button
            style="
            padding: 16px 32px;
            background: white;
            color: #1976d2;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: transform 0.2s, box-shadow 0.2s;
          "
            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.3)'"
            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'"
          >
            Get Started Free
          </button>
        </mwc-stack>
      </mwc-container>

      <!-- Features Section -->
      <mwc-container size="lg" style="padding: 48px 0;">
        <mwc-stack spacing="xl">
          <h2
            style="text-align: center; color: white; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);"
          >
            Powerful Layout Components
          </h2>

          <mwc-grid
            mobile-columns="1"
            tablet-columns="2"
            desktop-columns="3"
            gap="24px"
          >
            <mwc-grid-item
              elevated
              interactive
              style="padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); text-align: center;"
            >
              <div style="font-size: 48px; margin-bottom: 16px;">🧱</div>
              <h4 style="margin: 0 0 12px; color: #1976d2;">Box Component</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">
                Flexible container with powerful spacing and positioning
                utilities. Perfect for general layout needs.
              </p>
            </mwc-grid-item>

            <mwc-grid-item
              elevated
              interactive
              style="padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); text-align: center;"
            >
              <div style="font-size: 48px; margin-bottom: 16px;">🔳</div>
              <h4 style="margin: 0 0 12px; color: #1976d2;">Grid System</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">
                12-column responsive grid with CSS Grid and Flexbox support.
                Handle any layout complexity.
              </p>
            </mwc-grid-item>

            <mwc-grid-item
              elevated
              interactive
              style="padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); text-align: center;"
            >
              <div style="font-size: 48px; margin-bottom: 16px;">📚</div>
              <h4 style="margin: 0 0 12px; color: #1976d2;">Stack Layouts</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">
                Vertical and horizontal stacking with consistent spacing. Ideal
                for forms and navigation.
              </p>
            </mwc-grid-item>

            <mwc-grid-item
              elevated
              interactive
              style="padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); text-align: center;"
            >
              <div style="font-size: 48px; margin-bottom: 16px;">📦</div>
              <h4 style="margin: 0 0 12px; color: #1976d2;">Containers</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">
                Responsive containers with max-width constraints. Perfect for
                page-level structure.
              </p>
            </mwc-grid-item>

            <mwc-grid-item
              elevated
              interactive
              style="padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); text-align: center;"
            >
              <div style="font-size: 48px; margin-bottom: 16px;">🎨</div>
              <h4 style="margin: 0 0 12px; color: #1976d2;">Material Design</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">
                Built with Material Design 3 principles. Consistent theming and
                accessibility.
              </p>
            </mwc-grid-item>

            <mwc-grid-item
              elevated
              interactive
              style="padding: 32px; border-radius: 16px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); text-align: center;"
            >
              <div style="font-size: 48px; margin-bottom: 16px;">📱</div>
              <h4 style="margin: 0 0 12px; color: #1976d2;">Responsive</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">
                Mobile-first responsive design. Looks great on all devices and
                screen sizes.
              </p>
            </mwc-grid-item>
          </mwc-grid>
        </mwc-stack>
      </mwc-container>

      <!-- CTA Section -->
      <mwc-container size="md" style="padding: 48px 0;">
        <mwc-box
          elevated
          style="
            padding: 48px;
            background: rgba(255,255,255,0.95);
            border-radius: 24px;
            text-align: center;
            backdrop-filter: blur(10px);
          "
        >
          <mwc-stack spacing="large">
            <h3 style="margin: 0; color: #1976d2;">
              Ready to Build Amazing Layouts?
            </h3>
            <p style="margin: 0; color: #666; font-size: 18px;">
              Join thousands of developers creating beautiful, accessible user
              interfaces.
            </p>
            <mwc-stack
              direction="row"
              spacing="medium"
              justify="center"
              mobile-direction="column"
            >
              <button
                style="
                padding: 16px 32px;
                background: #1976d2;
                color: white;
                border: none;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                min-width: 160px;
                transition: background 0.2s;
              "
                onmouseover="this.style.background='#1565c0'"
                onmouseout="this.style.background='#1976d2'"
              >
                Start Building
              </button>
              <button
                style="
                padding: 16px 32px;
                background: transparent;
                color: #1976d2;
                border: 2px solid #1976d2;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                min-width: 160px;
                transition: all 0.2s;
              "
                onmouseover="this.style.background='#1976d2'; this.style.color='white'"
                onmouseout="this.style.background='transparent'; this.style.color='#1976d2'"
              >
                View Documentation
              </button>
            </mwc-stack>
          </mwc-stack>
        </mwc-box>
      </mwc-container>

      <!-- Footer -->
      <mwc-container as="footer" size="xl" style="padding: 32px 0;">
        <mwc-box
          style="
            background: rgba(255,255,255,0.1);
            padding: 24px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            color: white;
            text-align: center;
          "
        >
          <p style="margin: 0; opacity: 0.8;">
            © 2024 LayoutApp. Built with Material Design 3 Layout Components.
          </p>
        </mwc-box>
      </mwc-container>
    </div>
  `,
};

export const ComponentInteroperability: Story = {
  render: () => html`
    <div>
      <h2>Component Interoperability</h2>
      <p>
        Layout components are designed to work seamlessly together. Here are
        common combination patterns:
      </p>

      <mwc-stack spacing="xl">
        <!-- Pattern 1: Container + Grid + Stack -->
        <div>
          <h3>Pattern 1: Container → Grid → Stack</h3>
          <p>
            Container provides page structure, Grid handles columns, Stack
            manages vertical spacing.
          </p>

          <mwc-container
            size="lg"
            elevated
            style="padding: 0; overflow: hidden; border-radius: 12px;"
          >
            <mwc-grid columns="12" gap="0">
              <!-- Header -->
              <mwc-grid-item cols="12" variant="primary" style="padding: 20px;">
                <h4 style="margin: 0; color: white; text-align: center;">
                  Application Header
                </h4>
              </mwc-grid-item>

              <!-- Main Content -->
              <mwc-grid-item cols="8" style="padding: 24px; background: white;">
                <mwc-stack spacing="medium">
                  <h5 style="margin: 0;">Main Content Area</h5>
                  <p style="margin: 0;">
                    This demonstrates how Container, Grid, and Stack work
                    together for complex layouts.
                  </p>

                  <mwc-stack direction="row" spacing="small">
                    <button
                      style="padding: 8px 16px; background: #1976d2; color: white; border: none; border-radius: 6px; cursor: pointer;"
                    >
                      Action 1
                    </button>
                    <button
                      style="padding: 8px 16px; background: #2e7d32; color: white; border: none; border-radius: 6px; cursor: pointer;"
                    >
                      Action 2
                    </button>
                  </mwc-stack>
                </mwc-stack>
              </mwc-grid-item>

              <!-- Sidebar -->
              <mwc-grid-item
                cols="4"
                style="padding: 24px; background: #f5f5f5;"
              >
                <mwc-stack spacing="medium">
                  <h6 style="margin: 0;">Sidebar Content</h6>
                  <div
                    style="padding: 12px; background: white; border-radius: 6px; font-size: 14px;"
                  >
                    Widget 1
                  </div>
                  <div
                    style="padding: 12px; background: white; border-radius: 6px; font-size: 14px;"
                  >
                    Widget 2
                  </div>
                </mwc-stack>
              </mwc-grid-item>
            </mwc-grid>
          </mwc-container>
        </div>

        <!-- Pattern 2: Stack + Box + Grid -->
        <div>
          <h3>Pattern 2: Stack → Box → Grid</h3>
          <p>
            Stack organizes sections, Box handles spacing, Grid arranges content
            cards.
          </p>

          <mwc-stack
            spacing="large"
            style="border: 1px dashed #e0e0e0; padding: 24px; border-radius: 12px;"
          >
            <!-- Section Header -->
            <mwc-box style="text-align: center;">
              <h5 style="margin: 0 0 8px;">Product Features</h5>
              <p style="margin: 0; color: #666;">
                Discover what makes our product special
              </p>
            </mwc-box>

            <!-- Feature Grid -->
            <mwc-grid
              mobile-columns="1"
              tablet-columns="2"
              desktop-columns="3"
              gap="16px"
            >
              <mwc-grid-item
                elevated
                interactive
                style="padding: 20px; border-radius: 8px; background: white; text-align: center;"
              >
                <div style="font-size: 32px; margin-bottom: 12px;">⚡</div>
                <h6 style="margin: 0 0 8px;">Fast Performance</h6>
                <p style="margin: 0; font-size: 14px; color: #666;">
                  Lightning-fast rendering and smooth animations
                </p>
              </mwc-grid-item>

              <mwc-grid-item
                elevated
                interactive
                style="padding: 20px; border-radius: 8px; background: white; text-align: center;"
              >
                <div style="font-size: 32px; margin-bottom: 12px;">🎯</div>
                <h6 style="margin: 0 0 8px;">Precise Control</h6>
                <p style="margin: 0; font-size: 14px; color: #666;">
                  Fine-grained control over layout and spacing
                </p>
              </mwc-grid-item>

              <mwc-grid-item
                elevated
                interactive
                style="padding: 20px; border-radius: 8px; background: white; text-align: center;"
              >
                <div style="font-size: 32px; margin-bottom: 12px;">📱</div>
                <h6 style="margin: 0 0 8px;">Responsive Design</h6>
                <p style="margin: 0; font-size: 14px; color: #666;">
                  Works perfectly on all devices and screen sizes
                </p>
              </mwc-grid-item>
            </mwc-grid>

            <!-- Action Bar -->
            <mwc-box display="flex" justify="center">
              <button
                style="
                padding: 12px 24px;
                background: #1976d2;
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.2s;
              "
                onmouseover="this.style.background='#1565c0'"
                onmouseout="this.style.background='#1976d2'"
              >
                Learn More About Features
              </button>
            </mwc-box>
          </mwc-stack>
        </div>

        <!-- Pattern 3: Complex Nesting -->
        <div>
          <h3>Pattern 3: Complex Component Nesting</h3>
          <p>
            Advanced example showing deep component composition for
            sophisticated layouts.
          </p>

          <mwc-container
            size="lg"
            elevated
            style="border-radius: 16px; overflow: hidden;"
          >
            <mwc-stack spacing="none">
              <!-- Header -->
              <mwc-box variant="primary" padding="20px">
                <mwc-stack
                  direction="row"
                  align="center"
                  justify="space-between"
                >
                  <h4 style="margin: 0; color: white;">Dashboard Overview</h4>
                  <div style="color: rgba(255,255,255,0.8); font-size: 14px;">
                    Updated 2 minutes ago
                  </div>
                </mwc-stack>
              </mwc-box>

              <!-- Content Area -->
              <mwc-box padding="24px" style="background: white;">
                <mwc-grid columns="12" gap="20px">
                  <!-- KPI Cards -->
                  <mwc-grid-item cols="12">
                    <mwc-grid mobile-columns="2" desktop-columns="4" gap="16px">
                      <mwc-grid-item
                        elevated
                        style="padding: 16px; border-radius: 8px; text-align: center; background: #f8f9fa;"
                      >
                        <div
                          style="font-size: 24px; font-weight: bold; color: #2e7d32;"
                        >
                          $24.1k
                        </div>
                        <div
                          style="font-size: 12px; color: #666; margin-top: 4px;"
                        >
                          Revenue
                        </div>
                      </mwc-grid-item>
                      <mwc-grid-item
                        elevated
                        style="padding: 16px; border-radius: 8px; text-align: center; background: #f8f9fa;"
                      >
                        <div
                          style="font-size: 24px; font-weight: bold; color: #1976d2;"
                        >
                          1,432
                        </div>
                        <div
                          style="font-size: 12px; color: #666; margin-top: 4px;"
                        >
                          Users
                        </div>
                      </mwc-grid-item>
                      <mwc-grid-item
                        elevated
                        style="padding: 16px; border-radius: 8px; text-align: center; background: #f8f9fa;"
                      >
                        <div
                          style="font-size: 24px; font-weight: bold; color: #ed6c02;"
                        >
                          89.2%
                        </div>
                        <div
                          style="font-size: 12px; color: #666; margin-top: 4px;"
                        >
                          Satisfaction
                        </div>
                      </mwc-grid-item>
                      <mwc-grid-item
                        elevated
                        style="padding: 16px; border-radius: 8px; text-align: center; background: #f8f9fa;"
                      >
                        <div
                          style="font-size: 24px; font-weight: bold; color: #9c27b0;"
                        >
                          12.5%
                        </div>
                        <div
                          style="font-size: 12px; color: #666; margin-top: 4px;"
                        >
                          Conversion
                        </div>
                      </mwc-grid-item>
                    </mwc-grid>
                  </mwc-grid-item>

                  <!-- Chart and Activity -->
                  <mwc-grid-item
                    cols="8"
                    elevated
                    style="padding: 20px; border-radius: 12px; background: white;"
                  >
                    <h6 style="margin: 0 0 16px;">Analytics Overview</h6>
                    <div
                      style="
                      height: 200px;
                      background: linear-gradient(45deg, #667eea, #764ba2);
                      border-radius: 8px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: white;
                      font-weight: bold;
                    "
                    >
                      Chart Area Placeholder
                    </div>
                  </mwc-grid-item>

                  <mwc-grid-item
                    cols="4"
                    style="display: flex; flex-direction: column; gap: 16px;"
                  >
                    <mwc-container
                      elevated
                      size="fluid"
                      style="flex: 1; padding: 20px;"
                    >
                      <h6 style="margin: 0 0 12px;">Recent Activity</h6>
                      <mwc-stack spacing="small">
                        <div style="font-size: 14px; color: #666;">
                          • New user registered
                        </div>
                        <div style="font-size: 14px; color: #666;">
                          • Payment received
                        </div>
                        <div style="font-size: 14px; color: #666;">
                          • Report generated
                        </div>
                        <div style="font-size: 14px; color: #666;">
                          • Database updated
                        </div>
                      </mwc-stack>
                    </mwc-container>

                    <mwc-container
                      variant="warning"
                      size="fluid"
                      style="padding: 16px;"
                    >
                      <h6 style="margin: 0 0 8px;">System Alert</h6>
                      <p style="margin: 0; font-size: 14px;">
                        Backup completed successfully at 2:30 AM
                      </p>
                    </mwc-container>
                  </mwc-grid-item>
                </mwc-grid>
              </mwc-box>
            </mwc-stack>
          </mwc-container>
        </div>
      </mwc-stack>
    </div>
  `,
};
