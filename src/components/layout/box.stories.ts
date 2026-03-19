import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './box';

const meta: Meta = {
  title: 'Layout/Box',
  component: 'mwc-box',
  parameters: {
    docs: {
      description: {
        component: `
# Box Component

A flexible container component that provides powerful layout utilities similar to Material UI's Box component.
The Box component serves as a wrapper component for most styling utility needs.

## Features

- **Flexible Layout**: Supports flexbox properties like direction, align, justify, wrap
- **Spacing System**: Margin and padding with responsive support and shorthand props (mx, my, pt, pr, etc.)
- **Positioning**: Absolute, relative, fixed, sticky positioning with top/right/bottom/left
- **Visual Properties**: Background colors, borders, shadows, border radius
- **Responsive Design**: All properties support responsive values with breakpoint system
- **Accessibility**: Full WAI-ARIA support with semantic roles and labels
- **Material Design 3**: Integrated theming and color variants
- **Interactive States**: Hover, focus, active, disabled with smooth animations

## Design Tokens

The component uses Material Design 3 design tokens for consistent styling:
- Colors: \`--color-*\` tokens for theme colors 
- Spacing: \`--spacing-*\` tokens for consistent spacing scale
- Elevation: \`--elevation-*\` tokens for shadow depth
- Typography: \`--font-*\` tokens for text styling
- Border Radius: \`--border-radius-*\` tokens for rounded corners

## Responsive System

All layout properties support responsive values using the breakpoint system:
- **xs**: 0px and up (mobile)
- **sm**: 600px and up (tablet)
- **md**: 900px and up (desktop)  
- **lg**: 1200px and up (large desktop)
- **xl**: 1536px and up (extra large)

## Best Practices

1. Use Box for layout containers and spacing control
2. Prefer semantic HTML elements when appropriate (use \`as\` prop)
3. Use responsive props for mobile-first design
4. Leverage spacing shortcuts (mx, my, p, m) for cleaner code
5. Apply interactive states only when Box contains interactive content
        `,
      },
    },
  },
  argTypes: {
    // Layout properties
    display: {
      control: 'select',
      options: [
        'block',
        'inline-block',
        'flex',
        'inline-flex',
        'grid',
        'inline-grid',
        'none',
      ],
      description: 'CSS display property',
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction for flexbox layouts',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      description: 'Align items in flexbox',
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
      description: 'Justify content in flexbox',
    },

    // Spacing properties
    padding: {
      control: 'text',
      description: 'Padding (supports responsive values)',
    },
    margin: {
      control: 'text',
      description: 'Margin (supports responsive values)',
    },

    // Visual properties
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant',
    },

    // State properties
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
    <mwc-box padding="16px" style="border: 1px dashed #ccc;">
      Default Box with padding
    </mwc-box>
  `,
};

export const FlexboxLayouts: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4>Horizontal Layout (Row)</h4>
        <mwc-box
          display="flex"
          direction="row"
          gap="16px"
          padding="16px"
          style="border: 1px solid #e0e0e0; border-radius: 8px;"
        >
          <mwc-box padding="12px" variant="primary" style="flex: 1;"
            >Item 1</mwc-box
          >
          <mwc-box padding="12px" variant="secondary" style="flex: 1;"
            >Item 2</mwc-box
          >
          <mwc-box padding="12px" variant="success" style="flex: 1;"
            >Item 3</mwc-box
          >
        </mwc-box>
      </div>

      <div>
        <h4>Vertical Layout (Column)</h4>
        <mwc-box
          display="flex"
          direction="column"
          gap="12px"
          padding="16px"
          style="border: 1px solid #e0e0e0; border-radius: 8px;"
        >
          <mwc-box padding="12px" variant="warning">Item 1</mwc-box>
          <mwc-box padding="12px" variant="error">Item 2</mwc-box>
          <mwc-box padding="12px" variant="primary">Item 3</mwc-box>
        </mwc-box>
      </div>

      <div>
        <h4>Center Aligned</h4>
        <mwc-box
          display="flex"
          align="center"
          justify="center"
          style="height: 200px; border: 1px solid #e0e0e0; border-radius: 8px;"
        >
          <mwc-box padding="16px" variant="secondary" elevated>
            Centered Content
          </mwc-box>
        </mwc-box>
      </div>
    </div>
  `,
};

export const SpacingSystem: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4>Padding Variants</h4>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <mwc-box padding="8px" style="border: 1px solid #e0e0e0;"
            >Small Padding</mwc-box
          >
          <mwc-box padding="16px" style="border: 1px solid #e0e0e0;"
            >Medium Padding</mwc-box
          >
          <mwc-box padding="24px" style="border: 1px solid #e0e0e0;"
            >Large Padding</mwc-box
          >
        </div>
      </div>

      <div>
        <h4>Spacing Shortcuts</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <mwc-box
            mx="auto"
            padding="12px"
            style="max-width: 300px; border: 1px solid #e0e0e0;"
            >Centered with mx="auto"</mwc-box
          >
          <mwc-box py="16px" px="24px" style="border: 1px solid #e0e0e0;"
            >py="16px" px="24px"</mwc-box
          >
          <mwc-box
            pt="8px"
            pr="16px"
            pb="8px"
            pl="16px"
            style="border: 1px solid #e0e0e0;"
            >Individual sides</mwc-box
          >
        </div>
      </div>
    </div>
  `,
};

export const ColorVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <mwc-box variant="primary" padding="16px" style="border-radius: 8px;"
        >Primary</mwc-box
      >
      <mwc-box variant="secondary" padding="16px" style="border-radius: 8px;"
        >Secondary</mwc-box
      >
      <mwc-box variant="success" padding="16px" style="border-radius: 8px;"
        >Success</mwc-box
      >
      <mwc-box variant="warning" padding="16px" style="border-radius: 8px;"
        >Warning</mwc-box
      >
      <mwc-box variant="error" padding="16px" style="border-radius: 8px;"
        >Error</mwc-box
      >
    </div>
  `,
};

export const ElevationAndInteractive: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap;">
      <mwc-box padding="16px" elevated style="border-radius: 8px;">
        Elevated Box
      </mwc-box>

      <mwc-box
        padding="16px"
        interactive
        elevated
        variant="primary"
        style="border-radius: 8px; cursor: pointer;"
      >
        Interactive Box (hover me!)
      </mwc-box>

      <mwc-box
        padding="16px"
        interactive
        disabled
        style="border: 1px solid #e0e0e0; border-radius: 8px;"
      >
        Disabled Interactive Box
      </mwc-box>
    </div>
  `,
};

export const ResponsiveDesign: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4>Responsive Flexbox Direction</h4>
        <p>
          This box changes from column (mobile) to row (desktop). Resize your
          viewport to see the effect.
        </p>
        <mwc-box
          display="flex"
          mobile-direction="column"
          desktop-direction="row"
          gap="16px"
          padding="16px"
          style="border: 1px solid #e0e0e0; border-radius: 8px;"
        >
          <mwc-box padding="12px" variant="primary" style="flex: 1;"
            >First Item</mwc-box
          >
          <mwc-box padding="12px" variant="secondary" style="flex: 1;"
            >Second Item</mwc-box
          >
          <mwc-box padding="12px" variant="success" style="flex: 1;"
            >Third Item</mwc-box
          >
        </mwc-box>
      </div>

      <div>
        <h4>Responsive Spacing</h4>
        <p>
          Padding changes based on screen size: 8px on mobile, 16px on tablet,
          24px on desktop.
        </p>
        <mwc-box
          style="
            --mobile-padding: 8px;
            --tablet-padding: 16px; 
            --desktop-padding: 24px;
            padding: var(--mobile-padding);
            border: 1px solid #e0e0e0;
            border-radius: 8px;
          "
        >
          Responsive padding content
        </mwc-box>
      </div>
    </div>
  `,
};

export const SemanticHTML: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <mwc-box
        as="header"
        padding="16px"
        variant="primary"
        style="border-radius: 8px;"
      >
        Header Section
      </mwc-box>

      <mwc-box
        as="main"
        padding="16px"
        style="border: 1px solid #e0e0e0; border-radius: 8px;"
      >
        Main Content Area
      </mwc-box>

      <mwc-box
        as="aside"
        padding="16px"
        variant="secondary"
        style="border-radius: 8px;"
      >
        Sidebar Content
      </mwc-box>

      <mwc-box
        as="footer"
        padding="16px"
        variant="success"
        style="border-radius: 8px;"
      >
        Footer Section
      </mwc-box>
    </div>
  `,
};

export const CodeUsageExample: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Using Box Components in Code

Here's how to use the Box component programmatically in your TypeScript/JavaScript applications:

### Installation
\`\`\`bash
npm install @your-org/component-library
\`\`\`

### Basic Import and Usage
\`\`\`typescript
import { Box } from '@your-org/component-library/layout';
import { html, render } from 'lit';

// Create a simple container
const container = new Box();
container.padding = '16px';
container.variant = 'primary';
container.innerHTML = 'Hello World';
document.body.appendChild(container);
\`\`\`

### Using with Lit Templates
\`\`\`typescript
import { Box } from '@your-org/component-library/layout';
import { html, LitElement } from 'lit';

class MyApp extends LitElement {
  render() {
    return html\`
      <mwc-box display="flex" direction="column" gap="16px">
        <mwc-box padding="16px" variant="primary">Header</mwc-box>
        <mwc-box display="flex" gap="16px">
          <mwc-box padding="16px" style="flex: 1;">Main Content</mwc-box>
          <mwc-box padding="16px" variant="secondary">Sidebar</mwc-box>
        </mwc-box>
      </mwc-box>
    \`;
  }
}
\`\`\`

### Responsive Configuration
\`\`\`typescript
// Create responsive layout
const box = new Box();
box.display = 'flex';
box.setAttribute('mobile-direction', 'column');
box.setAttribute('desktop-direction', 'row');
box.gap = '16px';
box.padding = '24px';
\`\`\`

### Event Handling  
\`\`\`typescript
const interactiveBox = new Box();
interactiveBox.interactive = true;
interactiveBox.padding = '16px';
interactiveBox.innerHTML = 'Click me!';

interactiveBox.addEventListener('box-click', (event) => {
  console.log('Box clicked:', event.detail);
});
\`\`\`

### Building Complex Layouts
\`\`\`typescript
// Create a card component
function createCard(title: string, content: string) {
  const card = new Box();
  card.padding = '16px';
  card.elevated = true;
  card.style.borderRadius = '8px';
  
  card.innerHTML = \`
    <h3 style="margin-top: 0;">\${title}</h3>
    <p>\${content}</p>
  \`;
  
  return card;
}

// Create layout grid
const grid = new Box();
grid.display = 'flex';
grid.direction = 'column';
grid.gap = '16px';

const card1 = createCard('Card 1', 'First card content');
const card2 = createCard('Card 2', 'Second card content');

grid.appendChild(card1);
grid.appendChild(card2);
document.body.appendChild(grid);
\`\`\`
        `,
      },
    },
  },
  render: () => html`
    <div
      style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; background: #f9f9f9;"
    >
      <h3 style="margin-top: 0; color: #1976d2;">💻 Code Example Result</h3>
      <p style="margin-bottom: 16px; color: #666;">
        This demonstrates what the code examples above would produce:
      </p>

      <!-- Programmatically created layout -->
      <mwc-box
        display="flex"
        direction="column"
        gap="16px"
        padding="16px"
        style="border: 2px dashed #1976d2; border-radius: 4px;"
      >
        <mwc-box padding="12px" variant="primary" style="border-radius: 4px;">
          Box created with: padding="12px", variant="primary"
        </mwc-box>

        <mwc-box display="flex" gap="12px">
          <mwc-box
            padding="12px"
            style="flex: 1; border: 1px solid #ccc; border-radius: 4px;"
          >
            Main Content (flex: 1)
          </mwc-box>
          <mwc-box
            padding="12px"
            variant="secondary"
            style="border-radius: 4px;"
          >
            Sidebar
          </mwc-box>
        </mwc-box>

        <mwc-box
          padding="12px"
          interactive
          elevated
          style="border-radius: 4px; cursor: pointer;"
        >
          Interactive Box (hover/click me!)
        </mwc-box>
      </mwc-box>

      <p style="margin-top: 16px; font-style: italic; color: #666;">
        See the "Docs" tab above for complete code examples and API usage.
      </p>
    </div>
  `,
};

export const ComplexLayout: Story = {
  render: () => html`
    <mwc-box
      display="flex"
      direction="column"
      gap="16px"
      padding="24px"
      style="max-width: 800px; margin: 0 auto;"
    >
      <!-- Header -->
      <mwc-box
        as="header"
        display="flex"
        align="center"
        justify="space-between"
        padding="16px"
        variant="primary"
        style="border-radius: 8px;"
      >
        <h2 style="margin: 0;">Dashboard</h2>
        <mwc-box
          interactive
          padding="8px 16px"
          style="background: rgba(255,255,255,0.2); border-radius: 4px; cursor: pointer;"
        >
          Settings
        </mwc-box>
      </mwc-box>

      <!-- Content Grid -->
      <mwc-box
        display="flex"
        gap="16px"
        direction="column"
        mobile-direction="column"
        desktop-direction="row"
      >
        <!-- Main Content -->
        <mwc-box style="flex: 2;" display="flex" direction="column" gap="16px">
          <mwc-box padding="16px" elevated style="border-radius: 8px;">
            <h3 style="margin-top: 0;">Main Content</h3>
            <p>
              This is the primary content area that takes up more space on
              larger screens.
            </p>
          </mwc-box>

          <mwc-box padding="16px" elevated style="border-radius: 8px;">
            <h4 style="margin-top: 0;">Secondary Content</h4>
            <p>Additional content area with proper spacing.</p>
          </mwc-box>
        </mwc-box>

        <!-- Sidebar -->
        <mwc-box style="flex: 1;" display="flex" direction="column" gap="16px">
          <mwc-box
            padding="16px"
            variant="secondary"
            style="border-radius: 8px;"
          >
            <h4 style="margin-top: 0;">Sidebar</h4>
            <p>
              Complementary content that stacks below main content on mobile.
            </p>
          </mwc-box>

          <mwc-box padding="16px" variant="warning" style="border-radius: 8px;">
            <h5 style="margin-top: 0;">Quick Actions</h5>
            <mwc-box display="flex" direction="column" gap="8px">
              <mwc-box
                interactive
                padding="8px"
                style="background: rgba(255,255,255,0.3); border-radius: 4px; cursor: pointer;"
                >Action 1</mwc-box
              >
              <mwc-box
                interactive
                padding="8px"
                style="background: rgba(255,255,255,0.3); border-radius: 4px; cursor: pointer;"
                >Action 2</mwc-box
              >
            </mwc-box>
          </mwc-box>
        </mwc-box>
      </mwc-box>

      <!-- Footer -->
      <mwc-box
        as="footer"
        padding="16px"
        style="border-top: 1px solid #e0e0e0; text-align: center; color: #666;"
      >
        <p style="margin: 0;">Complex layout example using Box components</p>
      </mwc-box>
    </mwc-box>
  `,
};
