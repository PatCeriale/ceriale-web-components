import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './grid';
import './grid-item';

const meta: Meta = {
  title: 'Layout/Grid',
  component: 'mwc-grid',
  parameters: {
    docs: {
      description: {
        component: `
# Grid Component

A powerful, responsive grid system that supports both CSS Grid and Flexbox layouts.
The Grid component provides a 12-column responsive grid system with flexible gap management and alignment options.

## Features

- **Dual Grid Systems**: Switch between CSS Grid and Flexbox with the \`system\` prop
- **12-Column Layout**: Standard responsive grid with column spanning support
- **Responsive Design**: Mobile-first breakpoint system with responsive columns
- **Flexible Gaps**: Customizable spacing between grid items
- **Advanced Alignment**: Control item alignment and content justification
- **Dense Layouts**: Automatic item placement for optimal space usage
- **Material Design 3**: Integrated theming and elevation support
- **Performance Optimized**: Efficient rendering for large grids
- **Accessibility**: Semantic HTML structure with proper ARIA attributes

## Grid Systems

### CSS Grid (\`system="css-grid"\`)
- True 2D layout with precise row and column control
- Automatic placement with grid auto-flow
- Perfect for complex layouts and alignment
- Supports explicit row sizing and placement

### Flexbox (\`system="flexbox"\`)
- 1D layout with flexible item sizing
- Natural wrapping behavior 
- Great for simple layouts and equal-height items
- Better browser support for older browsers

## Column System

The grid uses a 12-column system with responsive breakpoints:
- **Mobile (xs)**: 1-2 columns typically
- **Tablet (sm-md)**: 2-6 columns
- **Desktop (lg+)**: Full 12-column layout

## Responsive Breakpoints

- **xs**: 0px and up (mobile)
- **sm**: 600px and up (tablet)  
- **md**: 900px and up (desktop)
- **lg**: 1200px and up (large desktop)
- **xl**: 1536px and up (extra large)

## Best Practices

1. Use CSS Grid for complex 2D layouts
2. Use Flexbox for simpler 1D layouts  
3. Start with mobile layout and scale up
4. Use responsive column props for different screen sizes
5. Apply consistent gap spacing across your design
6. Leverage auto-flow for dynamic content
7. Use GridItem component for precise control
        `,
      },
    },
  },
  argTypes: {
    system: {
      control: 'select',
      options: ['css-grid', 'flexbox'],
      description: 'Grid system to use',
    },
    columns: {
      control: 'select',
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'auto',
      ],
      description: 'Number of columns',
    },
    gap: {
      control: 'text',
      description: 'Gap between grid items',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch'],
      description: 'Align items',
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
      description: 'Justify content',
    },
    density: {
      control: 'select',
      options: ['comfortable', 'compact', 'spacious'],
      description: 'Layout density',
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
  },
};

export default meta;
type Story = StoryObj;

// Helper function to create grid items
const createGridItem = (
  content: string,
  variant?: string,
  cols?: string,
) => html`
  <mwc-grid-item
    cols=${cols || '1'}
    variant=${variant || 'primary'}
    style="padding: 16px; text-align: center; border-radius: 8px;"
  >
    ${content}
  </mwc-grid-item>
`;

// Basic usage examples
export const Default: Story = {
  render: () => html`
    <mwc-grid>
      ${createGridItem('Item 1', 'primary', '3')}
      ${createGridItem('Item 2', 'secondary', '3')}
      ${createGridItem('Item 3', 'success', '3')}
      ${createGridItem('Item 4', 'warning', '3')}
    </mwc-grid>
  `,
};

export const GridSystems: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>CSS Grid System</h4>
        <p>True 2D layout with precise control over rows and columns.</p>
        <mwc-grid system="css-grid" columns="4" gap="16px">
          ${createGridItem('1', 'primary')} ${createGridItem('2', 'secondary')}
          ${createGridItem('3', 'success')} ${createGridItem('4', 'warning')}
          ${createGridItem('5', 'error')} ${createGridItem('6', 'primary')}
        </mwc-grid>
      </div>

      <div>
        <h4>Flexbox System</h4>
        <p>Flexible 1D layout that adapts to content and wraps naturally.</p>
        <mwc-grid system="flexbox" columns="4" gap="16px">
          ${createGridItem('1', 'primary')} ${createGridItem('2', 'secondary')}
          ${createGridItem('3', 'success')} ${createGridItem('4', 'warning')}
          ${createGridItem('5', 'error')} ${createGridItem('6', 'primary')}
        </mwc-grid>
      </div>
    </div>
  `,
};

export const ColumnLayouts: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>12 Equal Columns</h4>
        <mwc-grid columns="12" gap="8px">
          ${Array.from({ length: 12 }, (_, i) =>
            createGridItem(`${i + 1}`, 'primary'),
          )}
        </mwc-grid>
      </div>

      <div>
        <h4>6 Equal Columns</h4>
        <mwc-grid columns="6" gap="12px">
          ${Array.from({ length: 6 }, (_, i) =>
            createGridItem(`Col ${i + 1}`, 'secondary'),
          )}
        </mwc-grid>
      </div>

      <div>
        <h4>4 Equal Columns</h4>
        <mwc-grid columns="4" gap="16px">
          ${Array.from({ length: 8 }, (_, i) =>
            createGridItem(`Item ${i + 1}`, 'success'),
          )}
        </mwc-grid>
      </div>

      <div>
        <h4>3 Equal Columns</h4>
        <mwc-grid columns="3" gap="20px">
          ${Array.from({ length: 6 }, (_, i) =>
            createGridItem(`Card ${i + 1}`, 'warning'),
          )}
        </mwc-grid>
      </div>
    </div>
  `,
};

export const ResponsiveColumns: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4>Responsive Grid (1 → 2 → 4 columns)</h4>
        <p>
          Resize your viewport to see the grid adapt: 1 column on mobile, 2 on
          tablet, 4 on desktop.
        </p>
        <mwc-grid
          mobile-columns="1"
          tablet-columns="2"
          desktop-columns="4"
          gap="16px"
        >
          ${createGridItem('Responsive 1', 'primary')}
          ${createGridItem('Responsive 2', 'secondary')}
          ${createGridItem('Responsive 3', 'success')}
          ${createGridItem('Responsive 4', 'warning')}
          ${createGridItem('Responsive 5', 'error')}
          ${createGridItem('Responsive 6', 'primary')}
          ${createGridItem('Responsive 7', 'secondary')}
          ${createGridItem('Responsive 8', 'success')}
        </mwc-grid>
      </div>

      <div>
        <h4>Content-Responsive Grid (auto columns)</h4>
        <p>
          Automatically adjusts columns based on available space and content
          size.
        </p>
        <mwc-grid columns="auto" gap="16px" style="--min-column-width: 200px;">
          ${Array.from(
            { length: 8 },
            (_, i) => html`
              <mwc-grid-item
                variant=${[
                  'primary',
                  'secondary',
                  'success',
                  'warning',
                  'error',
                ][i % 5]}
                style="padding: 16px; text-align: center; border-radius: 8px;"
              >
                Auto Item ${i + 1}
              </mwc-grid-item>
            `,
          )}
        </mwc-grid>
      </div>
    </div>
  `,
};

export const AdvancedSpanning: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Column Spanning</h4>
        <p>Grid items can span multiple columns for flexible layouts.</p>
        <mwc-grid system="css-grid" columns="12" gap="16px">
          <mwc-grid-item
            cols="12"
            variant="primary"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Full Width Header (12 cols)
          </mwc-grid-item>
          <mwc-grid-item
            cols="8"
            variant="secondary"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Main Content (8 cols)
          </mwc-grid-item>
          <mwc-grid-item
            cols="4"
            variant="success"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Sidebar (4 cols)
          </mwc-grid-item>
          <mwc-grid-item
            cols="4"
            variant="warning"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Card 1 (4 cols)
          </mwc-grid-item>
          <mwc-grid-item
            cols="4"
            variant="error"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Card 2 (4 cols)
          </mwc-grid-item>
          <mwc-grid-item
            cols="4"
            variant="primary"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Card 3 (4 cols)
          </mwc-grid-item>
        </mwc-grid>
      </div>

      <div>
        <h4>Responsive Column Spanning</h4>
        <p>Column spans can change based on screen size for optimal layouts.</p>
        <mwc-grid system="css-grid" columns="12" gap="16px">
          <mwc-grid-item
            cols="12"
            tablet-cols="6"
            desktop-cols="4"
            variant="primary"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Responsive Item 1<br />
            <small>12 → 6 → 4 cols</small>
          </mwc-grid-item>
          <mwc-grid-item
            cols="12"
            tablet-cols="6"
            desktop-cols="4"
            variant="secondary"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Responsive Item 2<br />
            <small>12 → 6 → 4 cols</small>
          </mwc-grid-item>
          <mwc-grid-item
            cols="12"
            tablet-cols="12"
            desktop-cols="4"
            variant="success"
            style="padding: 16px; text-align: center; border-radius: 8px;"
          >
            Responsive Item 3<br />
            <small>12 → 12 → 4 cols</small>
          </mwc-grid-item>
        </mwc-grid>
      </div>
    </div>
  `,
};

export const DensityVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Compact Density</h4>
        <mwc-grid density="compact" columns="4" gap="8px">
          ${Array.from({ length: 8 }, (_, i) =>
            createGridItem(`Compact ${i + 1}`, 'primary'),
          )}
        </mwc-grid>
      </div>

      <div>
        <h4>Comfortable Density (Default)</h4>
        <mwc-grid density="comfortable" columns="4" gap="16px">
          ${Array.from({ length: 8 }, (_, i) =>
            createGridItem(`Comfortable ${i + 1}`, 'secondary'),
          )}
        </mwc-grid>
      </div>

      <div>
        <h4>Spacious Density</h4>
        <mwc-grid density="spacious" columns="4" gap="24px">
          ${Array.from({ length: 8 }, (_, i) =>
            createGridItem(`Spacious ${i + 1}`, 'success'),
          )}
        </mwc-grid>
      </div>
    </div>
  `,
};

export const AlignmentAndJustification: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4>Center Aligned Items</h4>
        <mwc-grid
          system="css-grid"
          columns="3"
          align="center"
          justify="center"
          gap="16px"
          style="min-height: 200px; border: 1px dashed #e0e0e0;"
        >
          ${createGridItem('Centered 1', 'primary')}
          ${createGridItem('Centered 2', 'secondary')}
          ${createGridItem('Centered 3', 'success')}
        </mwc-grid>
      </div>

      <div>
        <h4>Space Between Justification</h4>
        <mwc-grid
          system="flexbox"
          columns="3"
          justify="space-between"
          gap="0"
          style="padding: 16px; border: 1px dashed #e0e0e0;"
        >
          ${createGridItem('Left', 'warning')}
          ${createGridItem('Center', 'error')}
          ${createGridItem('Right', 'primary')}
        </mwc-grid>
      </div>

      <div>
        <h4>Stretched Items</h4>
        <mwc-grid
          system="css-grid"
          columns="3"
          align="stretch"
          gap="16px"
          style="min-height: 150px; border: 1px dashed #e0e0e0;"
        >
          ${createGridItem('Stretch 1', 'secondary')}
          ${createGridItem('Stretch 2', 'success')}
          ${createGridItem('Stretch 3', 'warning')}
        </mwc-grid>
      </div>
    </div>
  `,
};

export const ElevatedGrids: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 32px; background: #f5f5f5; padding: 24px; border-radius: 8px;"
    >
      <div>
        <h4>Elevated Grid Container</h4>
        <mwc-grid
          elevated
          columns="3"
          gap="16px"
          style="padding: 24px; border-radius: 12px;"
        >
          ${createGridItem('Card 1', 'primary')}
          ${createGridItem('Card 2', 'secondary')}
          ${createGridItem('Card 3', 'success')}
        </mwc-grid>
      </div>

      <div>
        <h4>Color Variant + Elevation</h4>
        <mwc-grid
          variant="primary"
          elevated
          columns="4"
          gap="16px"
          style="border-radius: 12px;"
        >
          ${Array.from(
            { length: 8 },
            (_, i) => html`
              <mwc-grid-item
                elevated
                variant="secondary"
                style="padding: 16px; text-align: center; border-radius: 8px;"
              >
                Nested Card ${i + 1}
              </mwc-grid-item>
            `,
          )}
        </mwc-grid>
      </div>
    </div>
  `,
};

export const ComplexDashboard: Story = {
  render: () => html`
    <div style="padding: 24px; background: #f8f9fa; min-height: 100vh;">
      <h2>Dashboard Layout Example</h2>
      <p>Complex grid layout demonstrating real-world usage patterns.</p>

      <!-- Header Section -->
      <mwc-grid
        system="css-grid"
        columns="12"
        gap="16px"
        style="margin-bottom: 24px;"
      >
        <mwc-grid-item
          cols="12"
          variant="primary"
          elevated
          style="padding: 24px; border-radius: 12px;"
        >
          <h3 style="margin: 0; text-align: center; color: white;">
            Dashboard Header
          </h3>
        </mwc-grid-item>
      </mwc-grid>

      <!-- KPI Section -->
      <mwc-grid
        system="css-grid"
        columns="12"
        mobile-columns="1"
        tablet-columns="2"
        desktop-columns="4"
        gap="16px"
        style="margin-bottom: 24px;"
      >
        <mwc-grid-item
          elevated
          interactive
          style="padding: 20px; text-align: center; border-radius: 8px; background: white;"
        >
          <h4 style="margin: 0 0 8px;">Revenue</h4>
          <div style="font-size: 24px; font-weight: bold; color: #2e7d32;">
            $125,430
          </div>
          <div style="font-size: 12px; color: #666;">
            +12.5% from last month
          </div>
        </mwc-grid-item>

        <mwc-grid-item
          elevated
          interactive
          style="padding: 20px; text-align: center; border-radius: 8px; background: white;"
        >
          <h4 style="margin: 0 0 8px;">Users</h4>
          <div style="font-size: 24px; font-weight: bold; color: #1976d2;">
            8,432
          </div>
          <div style="font-size: 12px; color: #666;">+3.2% from last month</div>
        </mwc-grid-item>

        <mwc-grid-item
          elevated
          interactive
          style="padding: 20px; text-align: center; border-radius: 8px; background: white;"
        >
          <h4 style="margin: 0 0 8px;">Orders</h4>
          <div style="font-size: 24px; font-weight: bold; color: #ed6c02;">
            1,234
          </div>
          <div style="font-size: 12px; color: #666;">+8.1% from last month</div>
        </mwc-grid-item>

        <mwc-grid-item
          elevated
          interactive
          style="padding: 20px; text-align: center; border-radius: 8px; background: white;"
        >
          <h4 style="margin: 0 0 8px;">Conversion</h4>
          <div style="font-size: 24px; font-weight: bold; color: #9c27b0;">
            14.6%
          </div>
          <div style="font-size: 12px; color: #666;">+1.9% from last month</div>
        </mwc-grid-item>
      </mwc-grid>

      <!-- Main Content Section -->
      <mwc-grid
        system="css-grid"
        columns="12"
        gap="16px"
        style="margin-bottom: 24px;"
      >
        <!-- Chart Area -->
        <mwc-grid-item
          cols="12"
          tablet-cols="8"
          desktop-cols="8"
          elevated
          style="padding: 24px; border-radius: 12px; background: white;"
        >
          <h4 style="margin: 0 0 16px;">Sales Analytics</h4>
          <div
            style="
            height: 200px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            border-radius: 8px; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            color: white;
            font-weight: bold;
          "
          >
            Chart Placeholder
          </div>
        </mwc-grid-item>

        <!-- Sidebar -->
        <mwc-grid-item
          cols="12"
          tablet-cols="4"
          desktop-cols="4"
          style="display: flex; flex-direction: column; gap: 16px;"
        >
          <mwc-grid-item
            elevated
            style="padding: 20px; border-radius: 8px; background: white; flex: 1;"
          >
            <h5 style="margin: 0 0 12px;">Recent Activity</h5>
            <div style="font-size: 14px; color: #666;">
              <div style="margin-bottom: 8px;">• User registration +15</div>
              <div style="margin-bottom: 8px;">• New orders +23</div>
              <div style="margin-bottom: 8px;">• Revenue update</div>
              <div>• System maintenance</div>
            </div>
          </mwc-grid-item>

          <mwc-grid-item
            elevated
            variant="warning"
            style="padding: 20px; border-radius: 8px;"
          >
            <h5 style="margin: 0 0 12px;">Alerts</h5>
            <div style="font-size: 14px;">
              <div style="margin-bottom: 8px;">⚠️ Server load high</div>
              <div>📊 Monthly report ready</div>
            </div>
          </mwc-grid-item>
        </mwc-grid-item>
      </mwc-grid>

      <!-- Footer Grid -->
      <mwc-grid system="flexbox" columns="3" gap="16px">
        <mwc-grid-item
          elevated
          interactive
          style="padding: 16px; text-align: center; border-radius: 8px; background: white;"
        >
          <div style="font-weight: bold;">Quick Action 1</div>
          <div style="font-size: 12px; color: #666; margin-top: 4px;">
            Manage users
          </div>
        </mwc-grid-item>

        <mwc-grid-item
          elevated
          interactive
          style="padding: 16px; text-align: center; border-radius: 8px; background: white;"
        >
          <div style="font-weight: bold;">Quick Action 2</div>
          <div style="font-size: 12px; color: #666; margin-top: 4px;">
            View reports
          </div>
        </mwc-grid-item>

        <mwc-grid-item
          elevated
          interactive
          style="padding: 16px; text-align: center; border-radius: 8px; background: white;"
        >
          <div style="font-weight: bold;">Quick Action 3</div>
          <div style="font-size: 12px; color: #666; margin-top: 4px;">
            Settings
          </div>
        </mwc-grid-item>
      </mwc-grid>
    </div>
  `,
};
