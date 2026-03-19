import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './stack';

const meta: Meta = {
  title: 'Layout/Stack',
  component: 'mwc-stack',
  parameters: {
    docs: {
      description: {
        component: `
# Stack Component

A flexible container that distributes children in a single direction (row or column) with consistent spacing.
The Stack component simplifies Flexbox layouts with intuitive props and responsive behavior.

## Features

- **Flexible Direction**: Vertical (column) or horizontal (row) stacking with reverse options
- **Consistent Spacing**: Built-in gap management with size variants and custom spacing
- **Responsive Design**: Direction and wrapping can change based on screen size
- **Content Alignment**: Control alignment and justification of child items
- **Equal Sizing**: Options for equal-width or equal-height children
- **Visual Enhancements**: Color variants, elevation, and interactive states
- **Child Behavior**: Automatic distribution, centering, and divider support
- **Material Design 3**: Integrated theming and animation support
- **Accessibility**: Semantic HTML support with proper ARIA attributes

## Direction Options

- **column** (default): Vertical stacking, items flow top to bottom
- **row**: Horizontal stacking, items flow left to right  
- **column-reverse**: Vertical stacking, items flow bottom to top
- **row-reverse**: Horizontal stacking, items flow right to left

## Spacing System

Built-in spacing variants that use Material Design tokens:
- **none**: No gap between items
- **xs**: 4px gap (extra small)
- **small**: 8px gap (default)
- **medium**: 16px gap
- **large**: 24px gap  
- **xl**: 32px gap (extra large)

## Responsive Behavior

Stack adapts to different screen sizes:
- **Mobile**: Often switches to column direction for better mobile UX
- **Tablet**: Balanced layouts with moderate spacing
- **Desktop**: Full horizontal layouts with generous spacing

## Best Practices

1. Use column direction for form layouts and content sections
2. Use row direction for toolbars, navigation, and action buttons
3. Apply consistent spacing throughout your design system
4. Use responsive direction changes for mobile optimization
5. Leverage equal sizing for uniform layouts
6. Apply dividers sparingly for visual separation
7. Use elevation for card-like containers
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['column', 'row', 'column-reverse', 'row-reverse'],
      description: 'Stacking direction',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      description: 'Align items across the main axis',
    },
    justify: {
      control: 'select',
      options: [
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content along the main axis',
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'small', 'medium', 'large', 'xl'],
      description: 'Gap between stack items',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant affecting padding and spacing',
    },
    elevated: {
      control: 'boolean',
      description: 'Apply elevation shadow',
    },
    dividers: {
      control: 'boolean',
      description: 'Show dividers between stack items',
    },
    equalWidth: {
      control: 'boolean',
      description: 'Make all children equal width (for row direction)',
    },
    equalHeight: {
      control: 'boolean',
      description: 'Make all children equal height (for column direction)',
    },
  },
};

export default meta;
type Story = StoryObj;

// Helper function to create stack items
const createStackItem = (
  content: string,
  color: string = '#e3f2fd',
  textColor: string = '#0d47a1',
) => html`
  <div
    style="
    padding: 16px; 
    background: ${color}; 
    color: ${textColor};
    border-radius: 8px; 
    text-align: center;
    border: 1px solid ${color === '#e3f2fd' ? '#90caf9' : 'rgba(0,0,0,0.1)'};
  "
  >
    ${content}
  </div>
`;

// Basic usage examples
export const Default: Story = {
  render: () => html`
    <mwc-stack>
      ${createStackItem('Item 1')} ${createStackItem('Item 2')}
      ${createStackItem('Item 3')}
    </mwc-stack>
  `,
};

export const Directions: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Column Direction (Default)</h4>
        <mwc-stack
          direction="column"
          spacing="medium"
          style="max-width: 300px;"
        >
          ${createStackItem('First Item')} ${createStackItem('Second Item')}
          ${createStackItem('Third Item')}
        </mwc-stack>
      </div>

      <div>
        <h4>Row Direction</h4>
        <mwc-stack direction="row" spacing="medium">
          ${createStackItem('Left')} ${createStackItem('Center')}
          ${createStackItem('Right')}
        </mwc-stack>
      </div>

      <div>
        <h4>Column Reverse</h4>
        <mwc-stack
          direction="column-reverse"
          spacing="medium"
          style="max-width: 300px;"
        >
          ${createStackItem('Third (appears first)')}
          ${createStackItem('Second')}
          ${createStackItem('First (appears last)')}
        </mwc-stack>
      </div>

      <div>
        <h4>Row Reverse</h4>
        <mwc-stack direction="row-reverse" spacing="medium">
          ${createStackItem('Right (appears first)')}
          ${createStackItem('Center')} ${createStackItem('Left (appears last)')}
        </mwc-stack>
      </div>
    </div>
  `,
};

export const SpacingVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>No Spacing</h4>
        <mwc-stack spacing="none" style="max-width: 300px;">
          ${createStackItem('No Gap 1')} ${createStackItem('No Gap 2')}
          ${createStackItem('No Gap 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Extra Small Spacing (4px)</h4>
        <mwc-stack spacing="xs" style="max-width: 300px;">
          ${createStackItem('XS Gap 1')} ${createStackItem('XS Gap 2')}
          ${createStackItem('XS Gap 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Small Spacing (8px)</h4>
        <mwc-stack spacing="small" style="max-width: 300px;">
          ${createStackItem('Small Gap 1')} ${createStackItem('Small Gap 2')}
          ${createStackItem('Small Gap 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Medium Spacing (16px)</h4>
        <mwc-stack spacing="medium" style="max-width: 300px;">
          ${createStackItem('Medium Gap 1')} ${createStackItem('Medium Gap 2')}
          ${createStackItem('Medium Gap 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Large Spacing (24px)</h4>
        <mwc-stack spacing="large" style="max-width: 300px;">
          ${createStackItem('Large Gap 1')} ${createStackItem('Large Gap 2')}
          ${createStackItem('Large Gap 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Extra Large Spacing (32px)</h4>
        <mwc-stack spacing="xl" style="max-width: 300px;">
          ${createStackItem('XL Gap 1')} ${createStackItem('XL Gap 2')}
          ${createStackItem('XL Gap 3')}
        </mwc-stack>
      </div>
    </div>
  `,
};

export const AlignmentAndJustification: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Center Alignment</h4>
        <mwc-stack
          direction="row"
          align="center"
          spacing="medium"
          style="min-height: 120px; border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Short')}
          <div
            style="padding: 24px; background: #f8bbd9; color: #880e4f; border-radius: 8px; text-align: center;"
          >
            Tall Content
          </div>
          ${createStackItem('Short')}
        </mwc-stack>
      </div>

      <div>
        <h4>Space Between Justification</h4>
        <mwc-stack
          direction="row"
          justify="space-between"
          spacing="none"
          style="border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Left')} ${createStackItem('Center')}
          ${createStackItem('Right')}
        </mwc-stack>
      </div>

      <div>
        <h4>Center Justification</h4>
        <mwc-stack
          direction="row"
          justify="center"
          spacing="medium"
          style="border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Centered 1')} ${createStackItem('Centered 2')}
        </mwc-stack>
      </div>

      <div>
        <h4>Stretched Items</h4>
        <mwc-stack
          direction="row"
          align="stretch"
          spacing="medium"
          style="min-height: 100px; border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Stretched 1')} ${createStackItem('Stretched 2')}
          ${createStackItem('Stretched 3')}
        </mwc-stack>
      </div>
    </div>
  `,
};

export const ResponsiveDesign: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Responsive Direction</h4>
        <p>
          This stack changes from column (mobile) to row (desktop). Resize your
          viewport to see the effect.
        </p>
        <mwc-stack
          mobile-direction="column"
          desktop-direction="row"
          spacing="medium"
          style="border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Item 1')} ${createStackItem('Item 2')}
          ${createStackItem('Item 3')} ${createStackItem('Item 4')}
        </mwc-stack>
      </div>

      <div>
        <h4>Responsive Wrapping</h4>
        <p>Items wrap on smaller screens but stay inline on larger screens.</p>
        <mwc-stack
          direction="row"
          mobile-wrap
          spacing="medium"
          style="border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Wrapping Item 1')}
          ${createStackItem('Wrapping Item 2')}
          ${createStackItem('Wrapping Item 3')}
          ${createStackItem('Wrapping Item 4')}
          ${createStackItem('Wrapping Item 5')}
        </mwc-stack>
      </div>
    </div>
  `,
};

export const ColorVariantsAndElevation: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Color Variants</h4>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <mwc-stack
            variant="primary"
            spacing="small"
            style="padding: 16px; border-radius: 8px; min-width: 200px;"
          >
            ${createStackItem('Primary Stack', '#ffffff', '#1976d2')}
            ${createStackItem('Item 2', '#ffffff', '#1976d2')}
            ${createStackItem('Item 3', '#ffffff', '#1976d2')}
          </mwc-stack>

          <mwc-stack
            variant="secondary"
            spacing="small"
            style="padding: 16px; border-radius: 8px; min-width: 200px;"
          >
            ${createStackItem('Secondary Stack', '#ffffff', '#c2185b')}
            ${createStackItem('Item 2', '#ffffff', '#c2185b')}
            ${createStackItem('Item 3', '#ffffff', '#c2185b')}
          </mwc-stack>

          <mwc-stack
            variant="success"
            spacing="small"
            style="padding: 16px; border-radius: 8px; min-width: 200px;"
          >
            ${createStackItem('Success Stack', '#ffffff', '#388e3c')}
            ${createStackItem('Item 2', '#ffffff', '#388e3c')}
            ${createStackItem('Item 3', '#ffffff', '#388e3c')}
          </mwc-stack>
        </div>
      </div>

      <div>
        <h4>Elevated Stacks</h4>
        <div style="background: #f5f5f5; padding: 24px; border-radius: 8px;">
          <mwc-stack
            elevated
            spacing="medium"
            style="padding: 24px; border-radius: 12px; max-width: 300px;"
          >
            ${createStackItem('Elevated Item 1')}
            ${createStackItem('Elevated Item 2')}
            ${createStackItem('Elevated Item 3')}
          </mwc-stack>
        </div>
      </div>
    </div>
  `,
};

export const AdvancedFeatures: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Equal Width Items (Row)</h4>
        <mwc-stack direction="row" equal-width spacing="medium">
          ${createStackItem('Equal Width 1')}
          ${createStackItem('Equal Width 2 with longer content')}
          ${createStackItem('Equal Width 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Equal Height Items (Column)</h4>
        <mwc-stack
          equal-height
          spacing="medium"
          style="max-width: 300px; min-height: 200px;"
        >
          ${createStackItem('Equal Height 1')}
          <div
            style="padding: 16px; background: #f8bbd9; color: #880e4f; border-radius: 8px; text-align: center;"
          >
            Equal Height 2<br />with more content
          </div>
          ${createStackItem('Equal Height 3')}
        </mwc-stack>
      </div>

      <div>
        <h4>Stack with Dividers</h4>
        <mwc-stack dividers spacing="large" style="max-width: 400px;">
          ${createStackItem('Item with divider')}
          ${createStackItem('Item with divider')}
          ${createStackItem('Last item (no divider)')}
        </mwc-stack>
      </div>

      <div>
        <h4>Distributed Items</h4>
        <mwc-stack
          direction="row"
          distribute
          spacing="medium"
          style="border: 1px dashed #e0e0e0; padding: 16px;"
        >
          ${createStackItem('Distributed 1')}
          ${createStackItem('Distributed 2')}
          ${createStackItem('Distributed 3')}
        </mwc-stack>
      </div>
    </div>
  `,
};

export const InteractiveStacks: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Interactive Stack</h4>
        <mwc-stack
          interactive
          elevated
          spacing="medium"
          style="padding: 20px; border-radius: 12px; max-width: 300px; cursor: pointer;"
        >
          <h5 style="margin: 0;">Click me!</h5>
          <p style="margin: 8px 0 0;">
            This entire stack is interactive and responds to hover and focus.
          </p>
        </mwc-stack>
      </div>

      <div>
        <h4>Disabled Stack</h4>
        <mwc-stack
          interactive
          disabled
          elevated
          spacing="medium"
          style="padding: 20px; border-radius: 12px; max-width: 300px;"
        >
          <h5 style="margin: 0;">Disabled Stack</h5>
          <p style="margin: 8px 0 0;">
            This stack is disabled and cannot be interacted with.
          </p>
        </mwc-stack>
      </div>
    </div>
  `,
};

export const FormLayout: Story = {
  render: () => html`
    <div style="max-width: 400px; margin: 0 auto;">
      <h3>User Registration Form</h3>
      <p>Example form layout using Stack for consistent vertical spacing.</p>

      <mwc-stack
        spacing="large"
        elevated
        style="padding: 32px; border-radius: 12px; background: white;"
      >
        <!-- Form Header -->
        <mwc-stack spacing="xs" style="text-align: center;">
          <h4 style="margin: 0; color: #1976d2;">Create Account</h4>
          <p style="margin: 0; color: #666; font-size: 14px;">
            Please fill in your details
          </p>
        </mwc-stack>

        <!-- Form Fields -->
        <mwc-stack spacing="medium">
          <div>
            <label style="display: block; margin-bottom: 4px; font-weight: 500;"
              >Full Name</label
            >
            <input
              type="text"
              placeholder="John Doe"
              style="
              width: 100%; 
              padding: 12px; 
              border: 1px solid #e0e0e0; 
              border-radius: 6px; 
              font-size: 14px;
              box-sizing: border-box;
            "
            />
          </div>

          <div>
            <label style="display: block; margin-bottom: 4px; font-weight: 500;"
              >Email Address</label
            >
            <input
              type="email"
              placeholder="john@example.com"
              style="
              width: 100%; 
              padding: 12px; 
              border: 1px solid #e0e0e0; 
              border-radius: 6px; 
              font-size: 14px;
              box-sizing: border-box;
            "
            />
          </div>

          <div>
            <label style="display: block; margin-bottom: 4px; font-weight: 500;"
              >Password</label
            >
            <input
              type="password"
              placeholder="••••••••"
              style="
              width: 100%; 
              padding: 12px; 
              border: 1px solid #e0e0e0; 
              border-radius: 6px; 
              font-size: 14px;
              box-sizing: border-box;
            "
            />
          </div>
        </mwc-stack>

        <!-- Form Actions -->
        <mwc-stack direction="row" spacing="medium" justify="space-between">
          <button
            style="
            flex: 1;
            padding: 12px;
            background: transparent;
            color: #666;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
          "
          >
            Cancel
          </button>
          <button
            style="
            flex: 1;
            padding: 12px;
            background: #1976d2;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          "
          >
            Sign Up
          </button>
        </mwc-stack>

        <!-- Form Footer -->
        <div
          style="text-align: center; color: #666; font-size: 12px; border-top: 1px solid #f0f0f0; padding-top: 16px;"
        >
          Already have an account?
          <a href="#" style="color: #1976d2; text-decoration: none;">Sign in</a>
        </div>
      </mwc-stack>
    </div>
  `,
};

export const NavigationExample: Story = {
  render: () => html`
    <div>
      <h3>Navigation Examples</h3>

      <!-- Horizontal Navigation -->
      <div style="margin-bottom: 32px;">
        <h4>Horizontal Navigation</h4>
        <mwc-stack
          direction="row"
          align="center"
          justify="space-between"
          spacing="none"
          elevated
          style="padding: 16px 24px; border-radius: 8px; background: white;"
        >
          <!-- Logo / Brand -->
          <div style="font-size: 20px; font-weight: bold; color: #1976d2;">
            Brand
          </div>

          <!-- Navigation Links -->
          <mwc-stack direction="row" spacing="large">
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500;"
              >Home</a
            >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500;"
              >Products</a
            >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500;"
              >About</a
            >
            <a
              href="#"
              style="text-decoration: none; color: #333; font-weight: 500;"
              >Contact</a
            >
          </mwc-stack>

          <!-- Actions -->
          <mwc-stack direction="row" spacing="medium">
            <button
              style="
              padding: 8px 16px;
              background: transparent;
              color: #1976d2;
              border: 1px solid #1976d2;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
            "
            >
              Login
            </button>
            <button
              style="
              padding: 8px 16px;
              background: #1976d2;
              color: white;
              border: none;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
            "
            >
              Sign Up
            </button>
          </mwc-stack>
        </mwc-stack>
      </div>

      <!-- Vertical Navigation -->
      <div>
        <h4>Vertical Sidebar Navigation</h4>
        <div style="display: flex; gap: 24px;">
          <mwc-stack
            spacing="small"
            elevated
            style="
              min-width: 200px; 
              padding: 24px; 
              border-radius: 12px; 
              background: white;
              height: fit-content;
            "
          >
            <h5 style="margin: 0 0 16px; color: #333;">Dashboard</h5>
            <a
              href="#"
              style="
              display: block;
              padding: 12px;
              text-decoration: none;
              color: white;
              background: #1976d2;
              border-radius: 6px;
              font-weight: 500;
            "
              >📊 Overview</a
            >
            <a
              href="#"
              style="
              display: block;
              padding: 12px;
              text-decoration: none;
              color: #666;
              border-radius: 6px;
              transition: background 0.2s;
            "
              onmouseover="this.style.background='#f5f5f5'"
              onmouseout="this.style.background='transparent'"
              >📈 Analytics</a
            >
            <a
              href="#"
              style="
              display: block;
              padding: 12px;
              text-decoration: none;
              color: #666;
              border-radius: 6px;
              transition: background 0.2s;
            "
              onmouseover="this.style.background='#f5f5f5'"
              onmouseout="this.style.background='transparent'"
              >👥 Users</a
            >
            <a
              href="#"
              style="
              display: block;
              padding: 12px;
              text-decoration: none;
              color: #666;
              border-radius: 6px;
              transition: background 0.2s;
            "
              onmouseover="this.style.background='#f5f5f5'"
              onmouseout="this.style.background='transparent'"
              >⚙️ Settings</a
            >
          </mwc-stack>

          <div
            style="flex: 1; padding: 24px; background: #f8f9fa; border-radius: 12px;"
          >
            <h4 style="margin-top: 0;">Main Content Area</h4>
            <p>
              This is where the main content would be displayed when navigation
              items are selected.
            </p>
            <p>
              The sidebar navigation provides clear visual hierarchy and easy
              access to different sections.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
};
