import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './grid';
import './grid-item';
import '../code-box/code-box';
import './grid-item';

const meta: Meta = {
  title: 'Layout/Grid',
  component: 'mwc-grid',
  parameters: {
    docs: {
      description: {
        component: `
# Material Design 3 Grid Component

A comprehensive responsive grid system built with Material Design 3 principles.
Supports both CSS Grid and Flexbox layouts with full accessibility, theme integration, and responsive behavior.

## Key Features

- **Dual Grid Systems**: CSS Grid for 2D layouts, Flexbox for 1D layouts
- **12-Column Responsive System**: Mobile-first breakpoint system
- **Material Design 3**: Integrated theme support with design tokens
- **Full Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Touch-Friendly**: 44px minimum touch targets on mobile devices
- **Form Integration**: Works seamlessly with forms and validation
- **Dark Mode**: Automatic dark mode support via theme system
- **Performance Optimized**: Efficient rendering and animations
        `,
      },
    },
  },
  argTypes: {
    system: {
      control: { type: 'select' },
      options: ['css-grid', 'flexbox'],
      description: 'Grid system to use (CSS Grid or Flexbox)',
    },
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'],
      description: 'Number of columns in the grid',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Overall size scaling of the grid',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color variant following Material Design tokens',
    },
    density: {
      control: { type: 'select' },
      options: ['compact', 'comfortable', 'spacious'],
      description: 'Spacing density for the grid layout',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      description: 'Alignment of items within the grid',
    },
    justify: {
      control: { type: 'select' },
      options: [
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justification of content within the grid',
    },
    elevated: {
      control: { type: 'boolean' },
      description: 'Apply Material Design elevation shadow',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Make the grid interactive with hover/focus states',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable all grid interactions',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state with progress indicator',
    },
    responsive: {
      control: { type: 'boolean' },
      description: 'Enable responsive breakpoint behavior',
    },
  },
  args: {
    system: 'css-grid',
    columns: 4,
    size: 'medium',
    density: 'comfortable',
    align: 'stretch',
    justify: 'start',
    elevated: false,
    interactive: false,
    disabled: false,
    loading: false,
    responsive: true,
  },
};

export default meta;
type Story = StoryObj;

// Helper function to create grid items with Material Design styling
const createGridItem = (
  content: string,
  variant?: string,
  cols?: string | number,
  style?: string,
) => html`
  <mwc-grid-item
    cols=${cols || 'auto'}
    variant=${variant || 'primary'}
    style="
      padding: 16px; 
      text-align: center; 
      border-radius: 8px; 
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-${variant || 'primary'}-100, #e3f2fd);
      color: var(--color-${variant || 'primary'}-900, #0d47a1);
      border: 1px solid var(--color-${variant || 'primary'}-300, #64b5f6);
      ${style || ''}
    "
  >
    ${content}
  </mwc-grid-item>
`;

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
          <mwc-grid system="css-grid" columns="4">
            ${createGridItem('Grid Item 1', 'primary')}
            ${createGridItem('Grid Item 2', 'secondary')}
            ${createGridItem('Grid Item 3', 'success')}
            ${createGridItem('Grid Item 4', 'warning')}
          </mwc-grid>
        </div>
        <mwc-code-box
          title="Simple grid"
          code='<mwc-grid system="css-grid" columns="4">
  <mwc-grid-item>Grid Item 1</mwc-grid-item>
  <mwc-grid-item>Grid Item 2</mwc-grid-item>
  <mwc-grid-item>Grid Item 3</mwc-grid-item>
  <mwc-grid-item>Grid Item 4</mwc-grid-item>
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Grid Systems Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Grid Systems
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="margin-bottom: 32px;">
            <h4>CSS Grid System</h4>
            <p style="color: #666; margin-bottom: 16px;">
              True 2D layout with precise control over rows and columns
            </p>
            <mwc-grid system="css-grid" columns="4" size="medium">
              ${createGridItem('CSS Grid 1', 'primary')}
              ${createGridItem('CSS Grid 2', 'secondary')}
              ${createGridItem('CSS Grid 3', 'success')}
              ${createGridItem('CSS Grid 4', 'warning')}
              ${createGridItem('CSS Grid 5', 'error')}
              ${createGridItem('CSS Grid 6', 'primary')}
            </mwc-grid>
          </div>

          <div>
            <h4>Flexbox System</h4>
            <p style="color: #666; margin-bottom: 16px;">
              Flexible 1D layout that adapts to content and wraps naturally
            </p>
            <mwc-grid system="flexbox" columns="4" size="medium">
              ${createGridItem('Flexbox 1', 'primary')}
              ${createGridItem('Flexbox 2', 'secondary')}
              ${createGridItem('Flexbox 3', 'success')}
              ${createGridItem('Flexbox 4', 'warning')}
              ${createGridItem('Flexbox 5', 'error')}
              ${createGridItem('Flexbox 6', 'primary')}
            </mwc-grid>
          </div>
        </div>
        <mwc-code-box
          title="Grid systems"
          code='<!-- CSS Grid System -->
<mwc-grid system="css-grid" columns="4">
  <mwc-grid-item>CSS Grid Item</mwc-grid-item>
  <!-- More items... -->
</mwc-grid>

<!-- Flexbox System -->
<mwc-grid system="flexbox" columns="4">
  <mwc-grid-item>Flexbox Item</mwc-grid-item>
  <!-- More items... -->
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Column Layouts Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Column Layouts
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h4>12 Equal Columns</h4>
              <mwc-grid columns="12" size="small">
                ${Array.from({ length: 12 }, (_, i) =>
                  createGridItem(`${i + 1}`, 'primary'),
                )}
              </mwc-grid>
            </div>

            <div>
              <h4>6 Equal Columns</h4>
              <mwc-grid columns="6" size="medium">
                ${Array.from({ length: 6 }, (_, i) =>
                  createGridItem(`Col ${i + 1}`, 'secondary'),
                )}
              </mwc-grid>
            </div>

            <div>
              <h4>4 Equal Columns</h4>
              <mwc-grid columns="4" size="medium">
                ${Array.from({ length: 8 }, (_, i) =>
                  createGridItem(`Item ${i + 1}`, 'success'),
                )}
              </mwc-grid>
            </div>

            <div>
              <h4>Auto Columns</h4>
              <mwc-grid
                columns="auto"
                size="medium"
                style="--min-column-width: 200px;"
              >
                ${Array.from({ length: 6 }, (_, i) =>
                  createGridItem(`Auto ${i + 1}`, 'warning'),
                )}
              </mwc-grid>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Column layout options"
          code='<!-- 12 columns -->
<mwc-grid columns="12">
  <!-- 12 grid items -->
</mwc-grid>

<!-- 6 columns -->
<mwc-grid columns="6">
  <!-- 6 grid items -->
</mwc-grid>

<!-- 4 columns -->
<mwc-grid columns="4">
  <!-- grid items -->
</mwc-grid>

<!-- Auto columns with minimum width -->
<mwc-grid columns="auto" style="--min-column-width: 200px;">
  <!-- auto-sized items -->
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Responsive Columns Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Responsive Layouts
        </h2>
        <div style="margin-bottom: 24px;">
          <div>
            <h4>Mobile First Responsive (1 → 2 → 4 columns)</h4>
            <p style="color: #666; margin-bottom: 16px;">
              Resize your viewport to see the grid adapt: 1 column on mobile, 2
              on tablet, 4 on desktop
            </p>
            <mwc-grid
              mobile-columns="1"
              tablet-columns="2"
              desktop-columns="4"
              size="medium"
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
        </div>
        <mwc-code-box
          title="Responsive columns"
          code='<!-- Mobile-first responsive grid -->
<mwc-grid
  mobile-columns="1"
  tablet-columns="2" 
  desktop-columns="4"
>
  <mwc-grid-item>Responsive Item 1</mwc-grid-item>
  <mwc-grid-item>Responsive Item 2</mwc-grid-item>
  <mwc-grid-item>Responsive Item 3</mwc-grid-item>
  <mwc-grid-item>Responsive Item 4</mwc-grid-item>
  <!-- More items... -->
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Size & Density Variants Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Size & Density Variants
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h4>Size Variants</h4>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <h5>Small Size</h5>
                  <mwc-grid size="small" columns="4">
                    ${Array.from({ length: 4 }, (_, i) =>
                      createGridItem(`Small ${i + 1}`, 'primary'),
                    )}
                  </mwc-grid>
                </div>
                <div>
                  <h5>Medium Size</h5>
                  <mwc-grid size="medium" columns="4">
                    ${Array.from({ length: 4 }, (_, i) =>
                      createGridItem(`Medium ${i + 1}`, 'secondary'),
                    )}
                  </mwc-grid>
                </div>
                <div>
                  <h5>Large Size</h5>
                  <mwc-grid size="large" columns="4">
                    ${Array.from({ length: 4 }, (_, i) =>
                      createGridItem(`Large ${i + 1}`, 'success'),
                    )}
                  </mwc-grid>
                </div>
              </div>
            </div>

            <div>
              <h4>Density Variants</h4>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <h5>Compact Density</h5>
                  <mwc-grid density="compact" columns="4">
                    ${Array.from({ length: 4 }, (_, i) =>
                      createGridItem(`Compact ${i + 1}`, 'warning'),
                    )}
                  </mwc-grid>
                </div>
                <div>
                  <h5>Comfortable Density</h5>
                  <mwc-grid density="comfortable" columns="4">
                    ${Array.from({ length: 4 }, (_, i) =>
                      createGridItem(`Comfortable ${i + 1}`, 'error'),
                    )}
                  </mwc-grid>
                </div>
                <div>
                  <h5>Spacious Density</h5>
                  <mwc-grid density="spacious" columns="4">
                    ${Array.from({ length: 4 }, (_, i) =>
                      createGridItem(`Spacious ${i + 1}`, 'primary'),
                    )}
                  </mwc-grid>
                </div>
              </div>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Size and density variants"
          code='<!-- Size variants -->
<mwc-grid size="small" columns="4">
  <mwc-grid-item>Small grid item</mwc-grid-item>
</mwc-grid>

<mwc-grid size="medium" columns="4">
  <mwc-grid-item>Medium grid item</mwc-grid-item>
</mwc-grid>

<mwc-grid size="large" columns="4">
  <mwc-grid-item>Large grid item</mwc-grid-item>
</mwc-grid>

<!-- Density variants -->
<mwc-grid density="compact" columns="4">
  <mwc-grid-item>Compact spacing</mwc-grid-item>
</mwc-grid>

<mwc-grid density="comfortable" columns="4">
  <mwc-grid-item>Comfortable spacing</mwc-grid-item>
</mwc-grid>

<mwc-grid density="spacious" columns="4">
  <mwc-grid-item>Spacious layout</mwc-grid-item>
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Color Variants & Elevation Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Color Variants & Elevation
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="margin-bottom: 32px;">
            <h4>Color Variants</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <mwc-grid variant="primary" columns="4" size="medium">
                <h5 style="grid-column: 1 / -1; margin: 0; text-align: center;">
                  Primary Grid
                </h5>
                ${Array.from({ length: 4 }, (_, i) =>
                  createGridItem(`Primary ${i + 1}`, 'primary'),
                )}
              </mwc-grid>
              <mwc-grid variant="secondary" columns="4" size="medium">
                <h5 style="grid-column: 1 / -1; margin: 0; text-align: center;">
                  Secondary Grid
                </h5>
                ${Array.from({ length: 4 }, (_, i) =>
                  createGridItem(`Secondary ${i + 1}`, 'secondary'),
                )}
              </mwc-grid>
              <mwc-grid variant="success" columns="4" size="medium">
                <h5 style="grid-column: 1 / -1; margin: 0; text-align: center;">
                  Success Grid
                </h5>
                ${Array.from({ length: 4 }, (_, i) =>
                  createGridItem(`Success ${i + 1}`, 'success'),
                )}
              </mwc-grid>
            </div>
          </div>

          <div
            style="margin-bottom: 32px; background: #f5f5f5; padding: 24px; border-radius: 8px;"
          >
            <h4>Elevated Grids</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <mwc-grid elevated columns="3" size="medium">
                ${createGridItem('Elevated 1', 'primary')}
                ${createGridItem('Elevated 2', 'secondary')}
                ${createGridItem('Elevated 3', 'success')}
              </mwc-grid>

              <mwc-grid elevated variant="primary" columns="4" size="medium">
                ${Array.from({ length: 4 }, (_, i) =>
                  createGridItem(`Primary Elevated ${i + 1}`, 'secondary'),
                )}
              </mwc-grid>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Color variants and elevation"
          code='<!-- Color variants -->
<mwc-grid variant="primary" columns="4">
  <mwc-grid-item>Primary themed grid</mwc-grid-item>
</mwc-grid>

<mwc-grid variant="secondary" columns="4">
  <mwc-grid-item>Secondary themed grid</mwc-grid-item>
</mwc-grid>

<mwc-grid variant="success" columns="4">
  <mwc-grid-item>Success themed grid</mwc-grid-item>
</mwc-grid>

<!-- Elevated grids -->
<mwc-grid elevated columns="3">
  <mwc-grid-item>Elevated item</mwc-grid-item>
</mwc-grid>

<mwc-grid elevated variant="primary" columns="4">
  <mwc-grid-item>Elevated + themed</mwc-grid-item>
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Interactive & State Management Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Interactive States
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <h4>Interactive Grid (Hover & Focus)</h4>
              <mwc-grid
                interactive
                elevated
                columns="4"
                size="medium"
                aria-label="Interactive grid example"
              >
                ${createGridItem('Hover me!', 'primary')}
                ${createGridItem('Focus me!', 'secondary')}
                ${createGridItem('Click me!', 'success')}
                ${createGridItem('Interactive!', 'warning')}
              </mwc-grid>
            </div>

            <div>
              <h4>Loading State</h4>
              <mwc-grid loading columns="3" size="medium">
                ${createGridItem('Loading 1', 'primary')}
                ${createGridItem('Loading 2', 'secondary')}
                ${createGridItem('Loading 3', 'success')}
              </mwc-grid>
            </div>

            <div>
              <h4>Disabled State</h4>
              <mwc-grid disabled columns="3" size="medium">
                ${createGridItem('Disabled 1', 'warning')}
                ${createGridItem('Disabled 2', 'error')}
                ${createGridItem('Disabled 3', 'primary')}
              </mwc-grid>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Interactive states"
          code='<!-- Interactive grid -->
<mwc-grid 
  interactive 
  elevated 
  columns="4" 
  aria-label="Interactive grid example"
>
  <mwc-grid-item>Hover me!</mwc-grid-item>
  <mwc-grid-item>Focus me!</mwc-grid-item>
  <mwc-grid-item>Click me!</mwc-grid-item>
  <mwc-grid-item>Interactive!</mwc-grid-item>
</mwc-grid>

<!-- Loading state -->
<mwc-grid loading columns="3">
  <mwc-grid-item>Loading item 1</mwc-grid-item>
  <mwc-grid-item>Loading item 2</mwc-grid-item>
  <mwc-grid-item>Loading item 3</mwc-grid-item>
</mwc-grid>

<!-- Disabled state -->
<mwc-grid disabled columns="3">
  <mwc-grid-item>Disabled item 1</mwc-grid-item>
  <mwc-grid-item>Disabled item 2</mwc-grid-item>
  <mwc-grid-item>Disabled item 3</mwc-grid-item>
</mwc-grid>'
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
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h4>Form Layout Grid</h4>
              <form id="demo-form" style="max-width: 800px;">
                <mwc-grid
                  form-support
                  validation
                  columns="12"
                  size="medium"
                  style="background: white; padding: 24px; border-radius: 12px; border: 1px solid #e0e0e0;"
                >
                  <!-- Form Header -->
                  <div style="grid-column: 1 / -1; margin-bottom: 16px;">
                    <h3 style="margin: 0; color: #1976d2;">
                      Contact Information
                    </h3>
                    <p style="color: #666; margin: 8px 0 0;">
                      Please fill out your details below
                    </p>
                  </div>

                  <!-- Name Fields -->
                  <div style="grid-column: span 6;">
                    <label
                      style="display: block; margin-bottom: 6px; font-weight: 500;"
                      >First Name *</label
                    >
                    <input
                      type="text"
                      name="firstName"
                      required
                      style="
                        width: 100%; 
                        padding: 12px; 
                        border: 2px solid #e0e0e0; 
                        border-radius: 8px; 
                        font-size: 16px;
                        transition: border-color 0.2s ease;
                      "
                      onchange="this.style.borderColor = this.checkValidity() ? '#4caf50' : '#f44336'"
                    />
                  </div>
                  <div style="grid-column: span 6;">
                    <label
                      style="display: block; margin-bottom: 6px; font-weight: 500;"
                      >Last Name *</label
                    >
                    <input
                      type="text"
                      name="lastName"
                      required
                      style="
                        width: 100%; 
                        padding: 12px; 
                        border: 2px solid #e0e0e0; 
                        border-radius: 8px; 
                        font-size: 16px;
                        transition: border-color 0.2s ease;
                      "
                      onchange="this.style.borderColor = this.checkValidity() ? '#4caf50' : '#f44336'"
                    />
                  </div>

                  <!-- Contact Fields -->
                  <div style="grid-column: 1 / -1;">
                    <label
                      style="display: block; margin-bottom: 6px; font-weight: 500;"
                      >Email Address *</label
                    >
                    <input
                      type="email"
                      name="email"
                      required
                      style="
                        width: 100%; 
                        padding: 12px; 
                        border: 2px solid #e0e0e0; 
                        border-radius: 8px; 
                        font-size: 16px;
                        transition: border-color 0.2s ease;
                      "
                      onchange="this.style.borderColor = this.checkValidity() ? '#4caf50' : '#f44336'"
                    />
                  </div>
                  <div style="grid-column: span 8;">
                    <label
                      style="display: block; margin-bottom: 6px; font-weight: 500;"
                      >Phone Number</label
                    >
                    <input
                      type="tel"
                      name="phone"
                      style="
                        width: 100%; 
                        padding: 12px; 
                        border: 2px solid #e0e0e0; 
                        border-radius: 8px; 
                        font-size: 16px;
                        transition: border-color 0.2s ease;
                      "
                    />
                  </div>
                  <div style="grid-column: span 4;">
                    <label
                      style="display: block; margin-bottom: 6px; font-weight: 500;"
                      >Country</label
                    >
                    <select
                      name="country"
                      style="
                        width: 100%; 
                        padding: 12px; 
                        border: 2px solid #e0e0e0; 
                        border-radius: 8px; 
                        font-size: 16px;
                        background: white;
                      "
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>

                  <!-- Message Field -->
                  <div style="grid-column: 1 / -1;">
                    <label
                      style="display: block; margin-bottom: 6px; font-weight: 500;"
                      >Message</label
                    >
                    <textarea
                      name="message"
                      rows="4"
                      style="
                        width: 100%; 
                        padding: 12px; 
                        border: 2px solid #e0e0e0; 
                        border-radius: 8px; 
                        font-size: 16px; 
                        font-family: inherit;
                        resize: vertical;
                      "
                    ></textarea>
                  </div>

                  <!-- Form Actions -->
                  <div
                    style="grid-column: 1 / -1; margin-top: 16px; display: flex; gap: 12px; justify-content: flex-end;"
                  >
                    <button
                      type="reset"
                      style="
                        padding: 12px 24px; 
                        border: 2px solid #e0e0e0; 
                        background: white; 
                        border-radius: 8px; 
                        font-size: 16px; 
                        cursor: pointer;
                        transition: all 0.2s ease;
                      "
                      onmouseover="this.style.backgroundColor='#f5f5f5'"
                      onmouseout="this.style.backgroundColor='white'"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      style="
                        padding: 12px 24px; 
                        border: none; 
                        background: #1976d2; 
                        color: white; 
                        border-radius: 8px; 
                        font-size: 16px; 
                        cursor: pointer;
                        transition: all 0.2s ease;
                      "
                      onmouseover="this.style.backgroundColor='#1565c0'"
                      onmouseout="this.style.backgroundColor='#1976d2'"
                      onclick="event.preventDefault(); alert('Form submitted! (Demo only)');"
                    >
                      Submit
                    </button>
                  </div>
                </mwc-grid>
              </form>
            </div>

            <div>
              <h4>Validation States</h4>
              <mwc-grid
                columns="12"
                size="medium"
                style="background: white; padding: 20px; border-radius: 12px; border: 1px solid #e0e0e0;"
              >
                <div style="grid-column: span 4;">
                  <label
                    style="display: block; margin-bottom: 6px; font-weight: 500; color: #d32f2f;"
                    >Invalid Field</label
                  >
                  <input
                    type="email"
                    value="invalid-email"
                    style="
                      width: 100%; 
                      padding: 12px; 
                      border: 2px solid #f44336; 
                      border-radius: 8px; 
                      background: #fff5f5;
                      font-size: 16px;
                    "
                  />
                  <div
                    style="color: #f44336; font-size: 14px; margin-top: 4px;"
                  >
                    Invalid email format
                  </div>
                </div>

                <div style="grid-column: span 4;">
                  <label
                    style="display: block; margin-bottom: 6px; font-weight: 500; color: #2e7d32;"
                    >Valid Field</label
                  >
                  <input
                    type="email"
                    value="user@example.com"
                    style="
                      width: 100%; 
                      padding: 12px; 
                      border: 2px solid #4caf50; 
                      border-radius: 8px; 
                      background: #f1f8e9;
                      font-size: 16px;
                    "
                  />
                  <div
                    style="color: #4caf50; font-size: 14px; margin-top: 4px;"
                  >
                    ✓ Valid email
                  </div>
                </div>

                <div style="grid-column: span 4;">
                  <label
                    style="display: block; margin-bottom: 6px; font-weight: 500; color: #ed6c02;"
                    >Warning Field</label
                  >
                  <input
                    type="password"
                    value="weak"
                    style="
                      width: 100%; 
                      padding: 12px; 
                      border: 2px solid #ff9800; 
                      border-radius: 8px; 
                      background: #fffbf0;
                      font-size: 16px;
                    "
                  />
                  <div
                    style="color: #ff9800; font-size: 14px; margin-top: 4px;"
                  >
                    ⚠ Weak password
                  </div>
                </div>
              </mwc-grid>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Form integration"
          code='<!-- Form layout grid -->
<form>
  <mwc-grid 
    form-support
    validation 
    columns="12"
  >
    <!-- Full width header -->
    <div style="grid-column: 1 / -1;">
      <h3>Contact Information</h3>
    </div>
    
    <!-- Half-width fields -->
    <div style="grid-column: span 6;">
      <label>First Name *</label>
      <input type="text" name="firstName" required />
    </div>
    <div style="grid-column: span 6;">
      <label>Last Name *</label>
      <input type="text" name="lastName" required />
    </div>
    
    <!-- Full width field -->
    <div style="grid-column: 1 / -1;">
      <label>Email Address *</label>
      <input type="email" name="email" required />
    </div>
    
    <!-- Form actions -->
    <div style="grid-column: 1 / -1;">
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </mwc-grid>
</form>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Accessibility Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Accessibility Features
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h4>Keyboard Navigation</h4>
              <p style="color: #666; margin-bottom: 16px;">
                Use Tab, Arrow keys, Enter, and Space to navigate. Grid items
                support full keyboard interaction.
              </p>
              <mwc-grid
                interactive
                columns="4"
                size="medium"
                aria-label="Keyboard navigable grid of interactive cards"
                role="grid"
              >
                <mwc-grid-item
                  tabindex="0"
                  role="gridcell"
                  style="
                    padding: 16px; 
                    text-align: center; 
                    border-radius: 8px; 
                    cursor: pointer;
                    background: var(--color-primary-100, #e3f2fd);
                    color: var(--color-primary-900, #0d47a1);
                    border: 2px solid transparent;
                    transition: all 0.2s ease;
                  "
                  onfocus="this.style.borderColor = '#1976d2'; this.style.outline = '2px solid #1976d2'; this.style.outlineOffset = '2px'"
                  onblur="this.style.borderColor = 'transparent'; this.style.outline = 'none'"
                  onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); alert('Card 1 activated!'); }"
                  onclick="alert('Card 1 clicked!')"
                  aria-describedby="card1-desc"
                >
                  <div style="font-weight: bold;">Interactive Card 1</div>
                  <div
                    id="card1-desc"
                    style="font-size: 14px; color: #666; margin-top: 4px;"
                  >
                    Press Enter to activate
                  </div>
                </mwc-grid-item>

                <mwc-grid-item
                  tabindex="0"
                  role="gridcell"
                  style="
                    padding: 16px; 
                    text-align: center; 
                    border-radius: 8px; 
                    cursor: pointer;
                    background: var(--color-secondary-100, #f3e5f5);
                    color: var(--color-secondary-900, #4a148c);
                    border: 2px solid transparent;
                    transition: all 0.2s ease;
                  "
                  onfocus="this.style.borderColor = '#9c27b0'; this.style.outline = '2px solid #9c27b0'; this.style.outlineOffset = '2px'"
                  onblur="this.style.borderColor = 'transparent'; this.style.outline = 'none'"
                  onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); alert('Card 2 activated!'); }"
                  onclick="alert('Card 2 clicked!')"
                  aria-describedby="card2-desc"
                >
                  <div style="font-weight: bold;">Interactive Card 2</div>
                  <div
                    id="card2-desc"
                    style="font-size: 14px; color: #666; margin-top: 4px;"
                  >
                    Keyboard accessible
                  </div>
                </mwc-grid-item>

                <mwc-grid-item
                  tabindex="0"
                  role="gridcell"
                  style="
                    padding: 16px; 
                    text-align: center; 
                    border-radius: 8px; 
                    cursor: pointer;
                    background: var(--color-success-100, #e8f5e8);
                    color: var(--color-success-900, #1b5e20);
                    border: 2px solid transparent;
                    transition: all 0.2s ease;
                  "
                  onfocus="this.style.borderColor = '#4caf50'; this.style.outline = '2px solid #4caf50'; this.style.outlineOffset = '2px'"
                  onblur="this.style.borderColor = 'transparent'; this.style.outline = 'none'"
                  onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); alert('Card 3 activated!'); }"
                  onclick="alert('Card 3 clicked!')"
                  aria-describedby="card3-desc"
                >
                  <div style="font-weight: bold;">Interactive Card 3</div>
                  <div
                    id="card3-desc"
                    style="font-size: 14px; color: #666; margin-top: 4px;"
                  >
                    WCAG 2.1 AA compliant
                  </div>
                </mwc-grid-item>

                <mwc-grid-item
                  tabindex="0"
                  role="gridcell"
                  style="
                    padding: 16px; 
                    text-align: center; 
                    border-radius: 8px; 
                    cursor: pointer;
                    background: var(--color-warning-100, #fff3cd);
                    color: var(--color-warning-900, #e65100);
                    border: 2px solid transparent;
                    transition: all 0.2s ease;
                  "
                  onfocus="this.style.borderColor = '#ff9800'; this.style.outline = '2px solid #ff9800'; this.style.outlineOffset = '2px'"
                  onblur="this.style.borderColor = 'transparent'; this.style.outline = 'none'"
                  onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); alert('Card 4 activated!'); }"
                  onclick="alert('Card 4 clicked!')"
                  aria-describedby="card4-desc"
                >
                  <div style="font-weight: bold;">Interactive Card 4</div>
                  <div
                    id="card4-desc"
                    style="font-size: 14px; color: #666; margin-top: 4px;"
                  >
                    Screen reader friendly
                  </div>
                </mwc-grid-item>
              </mwc-grid>
            </div>

            <div>
              <h4>ARIA Labels & Descriptions</h4>
              <mwc-grid
                columns="3"
                size="medium"
                aria-label="Grid of data cards with status information"
                role="grid"
                aria-describedby="grid-desc"
              >
                <div
                  id="grid-desc"
                  style="grid-column: 1 / -1; color: #666; margin-bottom: 16px; font-style: italic;"
                >
                  Interactive data grid with status indicators and progress
                  information
                </div>

                ${createGridItem(
                  'Status: Active',
                  'success',
                  'auto',
                  'role="gridcell"; tabindex="0"; aria-label="Server status: Active and running normally"',
                )}
                ${createGridItem(
                  'Status: Warning',
                  'warning',
                  'auto',
                  'role="gridcell"; tabindex="0"; aria-label="Server status: Warning - high CPU usage detected"',
                )}
                ${createGridItem(
                  'Status: Error',
                  'error',
                  'auto',
                  'role="gridcell"; tabindex="0"; aria-label="Server status: Error - connection failed"',
                )}
              </mwc-grid>
            </div>

            <div>
              <h4>High Contrast Mode Support</h4>
              <p style="color: #666; margin-bottom: 16px;">
                Grid components automatically adapt to high contrast mode and
                respect user color preferences.
              </p>
              <mwc-grid
                columns="4"
                size="medium"
                style="
                  border: 2px solid; 
                  padding: 16px; 
                  border-radius: 8px;
                  background: Canvas;
                  color: CanvasText;
                  border-color: CanvasText;
                "
              >
                ${Array.from(
                  { length: 4 },
                  (_, i) => html`
                    <div
                      style="
                    padding: 16px; 
                    text-align: center; 
                    border: 1px solid CanvasText;
                    border-radius: 8px;
                    background: Canvas;
                    color: CanvasText;
                  "
                    >
                      HC Item ${i + 1}
                    </div>
                  `,
                )}
              </mwc-grid>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Accessibility features"
          code='<!-- Keyboard navigable interactive grid -->
<mwc-grid 
  interactive 
  columns="4"
  aria-label="Interactive card grid"
  role="grid"
>
  <mwc-grid-item 
    tabindex="0"
    role="gridcell"
    aria-describedby="description1"
  >
    Card Content
    <div id="description1">Additional context for screen readers</div>
  </mwc-grid-item>
  <!-- More items with proper ARIA attributes -->
</mwc-grid>

<!-- Grid with semantic labeling -->
<mwc-grid 
  columns="3"
  aria-label="Data status grid" 
  aria-describedby="grid-help"
>
  <div id="grid-help">Grid showing current system status</div>
  <mwc-grid-item aria-label="Server status: Active">
    Status: Active
  </mwc-grid-item>
  <!-- More semantically labeled items -->
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Advanced Spacing & Customization Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Advanced Spacing & Customization
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <div>
              <h4>Custom CSS Variables</h4>
              <mwc-grid
                columns="3"
                size="medium"
                style="
                  --grid-gap: 24px;
                  --grid-padding: 20px;
                  --grid-border-radius: 16px;
                  --grid-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  padding: var(--grid-padding);
                  border-radius: var(--grid-border-radius);
                  background: var(--grid-background);
                "
              >
                ${Array.from(
                  { length: 6 },
                  (_, i) => html`
                    <div
                      style="
                    padding: 16px; 
                    text-align: center; 
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.9);
                    color: #333;
                    backdrop-filter: blur(10px);
                  "
                    >
                      Custom ${i + 1}
                    </div>
                  `,
                )}
              </mwc-grid>
            </div>

            <div>
              <h4>Asymmetric Spacing</h4>
              <mwc-grid
                columns="4"
                style="
                  --column-gap: 32px;
                  --row-gap: 16px;
                  padding: 24px;
                  background: #f8f9fa;
                  border-radius: 12px;
                "
              >
                ${Array.from({ length: 8 }, (_, i) =>
                  createGridItem(
                    `Asymmetric ${i + 1}`,
                    i % 2 ? 'secondary' : 'primary',
                  ),
                )}
              </mwc-grid>
            </div>

            <div>
              <h4>Complex Custom Layout</h4>
              <mwc-grid
                system="css-grid"
                style="
                  grid-template-columns: 1fr 2fr 1fr;
                  grid-template-rows: auto auto 1fr auto;
                  gap: 20px;
                  min-height: 400px;
                  padding: 20px;
                  background: #fff;
                  border-radius: 16px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                "
              >
                <!-- Header spans all columns -->
                <div
                  style="
                  grid-column: 1 / -1;
                  padding: 16px;
                  background: linear-gradient(90deg, #1976d2, #42a5f5);
                  color: white;
                  border-radius: 8px;
                  text-align: center;
                  font-weight: bold;
                "
                >
                  Custom Layout Header
                </div>

                <!-- Sidebar -->
                <div
                  style="
                  grid-row: 2 / 4;
                  padding: 16px;
                  background: #e3f2fd;
                  border-radius: 8px;
                  border-left: 4px solid #1976d2;
                "
                >
                  <h5 style="margin: 0 0 12px; color: #1976d2;">Navigation</h5>
                  <div style="color: #666; font-size: 14px;">
                    <div style="margin-bottom: 8px;">• Dashboard</div>
                    <div style="margin-bottom: 8px;">• Analytics</div>
                    <div style="margin-bottom: 8px;">• Settings</div>
                    <div>• Profile</div>
                  </div>
                </div>

                <!-- Main content area -->
                <div
                  style="
                  grid-row: 2 / 4;
                  padding: 20px;
                  background: #fafafa;
                  border-radius: 8px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                "
                >
                  <h5 style="margin: 0; color: #333;">Main Content Area</h5>
                  <div
                    style="
                    flex: 1;
                    background: white;
                    border-radius: 8px;
                    padding: 16px;
                    border: 1px solid #e0e0e0;
                  "
                  >
                    <p style="margin: 0; color: #666;">
                      This demonstrates complex custom grid layouts with CSS
                      Grid template areas, spanning multiple rows and columns
                      with flexible content areas.
                    </p>
                  </div>
                </div>

                <!-- Secondary sidebar -->
                <div
                  style="
                  grid-row: 2 / 4;
                  padding: 16px;
                  background: #f1f8e9;
                  border-radius: 8px;
                  border-right: 4px solid #4caf50;
                "
                >
                  <h5 style="margin: 0 0 12px; color: #4caf50;">Quick Info</h5>
                  <div style="color: #666; font-size: 14px;">
                    <div style="margin-bottom: 8px;">📊 Stats</div>
                    <div style="margin-bottom: 8px;">📈 Growth</div>
                    <div style="margin-bottom: 8px;">🔔 Alerts</div>
                    <div>⚙️ Tools</div>
                  </div>
                </div>

                <!-- Footer spans all columns -->
                <div
                  style="
                  grid-column: 1 / -1;
                  padding: 12px 16px;
                  background: #f5f5f5;
                  border-radius: 8px;
                  text-align: center;
                  color: #666;
                  font-size: 14px;
                "
                >
                  Custom Layout Footer - Grid Template Areas
                </div>
              </mwc-grid>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Advanced spacing and customization"
          code='<!-- Custom CSS variables -->
<mwc-grid 
  columns="3"
  style="
    --grid-gap: 24px;
    --grid-padding: 20px;
    --grid-border-radius: 16px;
    --grid-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: var(--grid-padding);
    border-radius: var(--grid-border-radius);
    background: var(--grid-background);
  "
>
  <mwc-grid-item>Customized item</mwc-grid-item>
</mwc-grid>

<!-- Complex custom layout -->
<mwc-grid 
  system="css-grid"
  style="
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto 1fr auto;
    gap: 20px;
    min-height: 400px;
  "
>
  <!-- Header spans all columns -->
  <div style="grid-column: 1 / -1;">Header</div>
  
  <!-- Sidebar spans rows 2-4 -->  
  <div style="grid-row: 2 / 4;">Sidebar</div>
  
  <!-- Main content -->
  <div style="grid-row: 2 / 4;">Main Content</div>
  
  <!-- Secondary sidebar -->
  <div style="grid-row: 2 / 4;">Secondary</div>
  
  <!-- Footer spans all columns -->
  <div style="grid-column: 1 / -1;">Footer</div>
</mwc-grid>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Performance & Best Practices Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Performance & Best Practices
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div
              style="background: #f8f9fa; padding: 24px; border-radius: 12px; border-left: 4px solid #1976d2;"
            >
              <h4 style="margin: 0 0 16px; color: #1976d2;">
                🚀 Grid System Performance Tips
              </h4>
              <div
                style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;"
              >
                <div>
                  <h5 style="color: #333; margin: 0 0 8px;">✅ Do</h5>
                  <ul style="margin: 0; padding-left: 20px; color: #666;">
                    <li>Use CSS Grid for 2D layouts with fixed structures</li>
                    <li>Use Flexbox for 1D layouts with flexible content</li>
                    <li>Set explicit column counts for predictable layouts</li>
                    <li>Use responsive breakpoints for mobile-first design</li>
                    <li>Leverage design tokens for consistent spacing</li>
                  </ul>
                </div>
                <div>
                  <h5 style="color: #d32f2f; margin: 0 0 8px;">❌ Avoid</h5>
                  <ul style="margin: 0; padding-left: 20px; color: #666;">
                    <li>Mixing grid systems within the same container</li>
                    <li>Using too many nested grids (max 2-3 levels)</li>
                    <li>Fixed pixel spacing that doesn't scale</li>
                    <li>Complex grid spans without semantic HTML</li>
                    <li>Ignoring accessibility markup</li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              style="background: #e8f5e8; padding: 20px; border-radius: 12px; border-left: 4px solid #4caf50;"
            >
              <h4 style="margin: 0 0 12px; color: #2e7d32;">
                💡 Accessibility Best Practices
              </h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li>
                  <strong>Semantic HTML:</strong> Use proper heading hierarchy
                  and landmarks
                </li>
                <li>
                  <strong>Keyboard Navigation:</strong> Ensure all interactive
                  elements are focusable
                </li>
                <li>
                  <strong>ARIA Labels:</strong> Provide context for screen
                  readers with aria-label and aria-describedby
                </li>
                <li>
                  <strong>Color Contrast:</strong> Maintain WCAG 2.1 AA contrast
                  ratios (4.5:1 minimum)
                </li>
                <li>
                  <strong>Focus Indicators:</strong> Use clear, visible focus
                  states for keyboard users
                </li>
                <li>
                  <strong>Touch Targets:</strong> Ensure minimum 44px touch
                  target size for interactive elements
                </li>
              </ul>
            </div>

            <div
              style="background: #fff3cd; padding: 20px; border-radius: 12px; border-left: 4px solid #ff9800;"
            >
              <h4 style="margin: 0 0 12px; color: #e65100;">
                ⚡ Performance Optimization
              </h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li>
                  <strong>CSS Grid vs Flexbox:</strong> Choose based on layout
                  needs (2D vs 1D)
                </li>
                <li>
                  <strong>Minimize Re-layouts:</strong> Use transforms for
                  animations instead of layout properties
                </li>
                <li>
                  <strong>Lazy Loading:</strong> Implement lazy loading for
                  grids with many items
                </li>
                <li>
                  <strong>Virtual Scrolling:</strong> For large datasets,
                  consider virtual scrolling libraries
                </li>
                <li>
                  <strong>CSS Custom Properties:</strong> Use for dynamic
                  theming without JavaScript
                </li>
                <li>
                  <strong>Container Queries:</strong> Use for responsive
                  component-level layouts when available
                </li>
              </ul>
            </div>

            <div
              style="background: #f3e5f5; padding: 20px; border-radius: 12px; border-left: 4px solid #9c27b0;"
            >
              <h4 style="margin: 0 0 12px; color: #7b1fa2;">
                🎨 Design System Integration
              </h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li>
                  <strong>Design Tokens:</strong> Use consistent spacing,
                  colors, and typography tokens
                </li>
                <li>
                  <strong>Component Variants:</strong> Create reusable grid
                  patterns for common layouts
                </li>
                <li>
                  <strong>Theme Support:</strong> Ensure grids adapt to
                  light/dark themes automatically
                </li>
                <li>
                  <strong>Responsive Design:</strong> Follow mobile-first
                  approach with progressive enhancement
                </li>
                <li>
                  <strong>Component Composition:</strong> Design grids to work
                  with other component library elements
                </li>
              </ul>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Performance recommendations"
          code='<!-- Optimal grid structure -->
<mwc-grid 
  system="css-grid" 
  columns="4"
  mobile-columns="1"
  tablet-columns="2"
  size="medium"
  aria-label="Product grid"
>
  <!-- Use semantic HTML structure -->
  <article role="gridcell" tabindex="0">
    <h3>Product Title</h3>
    <p>Product description</p>
    <button>Add to Cart</button>
  </article>
  <!-- More semantic grid items -->
</mwc-grid>

<!-- Efficient responsive breakpoints -->
<style>
  .custom-grid {
    /* Use CSS custom properties for dynamic values */
    --columns: 1;
    --gap: var(--spacing-medium, 16px);
  }
  
  @media (min-width: 768px) {
    .custom-grid { --columns: 2; }
  }
  
  @media (min-width: 1024px) {  
    .custom-grid { --columns: 4; }
  }
</style>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
