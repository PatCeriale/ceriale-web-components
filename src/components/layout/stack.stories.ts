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
Built with Material Design 3 principles, full accessibility support, and comprehensive theme integration.

## Features

- **Flexible Direction**: Vertical (column) or horizontal (row) stacking with reverse options
- **Material Design 3**: Follows latest MD3 specifications with design tokens integration
- **Comprehensive Spacing**: Built-in gap management with responsive variants
- **Responsive Design**: Direction and behavior adapt to different screen sizes  
- **Content Alignment**: Control alignment and justification of child items
- **Equal Sizing**: Options for equal-width or equal-height children
- **Visual Enhancements**: Color variants, elevation, and interactive states
- **Animation Support**: Material Motion principles with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Form Integration**: Works with FormData and validation systems

## Direction Options

- **column** (default): Vertical stacking, items flow top to bottom
- **row**: Horizontal stacking, items flow left to right  
- **column-reverse**: Vertical stacking, items flow bottom to top
- **row-reverse**: Horizontal stacking, items flow right to left

## Spacing System

Built-in spacing variants using Material Design tokens:
- **none**: No gap between items
- **xs**: 4px gap (extra small) 
- **small**: 8px gap
- **medium**: 16px gap (default)
- **large**: 24px gap
- **xl**: 32px gap
- **xxl**: 48px gap (extra extra large)

## Responsive Behavior

Stack adapts to different screen sizes:
- **Mobile**: Touch-friendly 44px minimum targets, automatic column stacking
- **Tablet**: Balanced layouts with moderate spacing
- **Desktop**: Full layouts with generous spacing

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
    wrap: {
      control: 'select', 
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      description: 'Align items across the cross axis',
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'Justify content along the main axis',
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'small', 'medium', 'large', 'xl', 'xxl'],
      description: 'Gap between stack items',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant affecting padding and spacing',
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
      description: 'Enable interactive hover and focus states',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the stack',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state with shimmer animation',
    },
    responsive: {
      control: 'boolean',
      description: 'Enable responsive behavior for mobile devices', 
    },
    distribute: {
      control: 'boolean',
      description: 'Distribute available space equally among children',
    },
    equalWidth: {
      control: 'boolean',
      description: 'Make all children equal width (for row direction)',
    },
    equalHeight: {
      control: 'boolean', 
      description: 'Make all children equal height (for column direction)',
    },
    centerChildren: {
      control: 'boolean',
      description: 'Center content within each stack item',
    },
    dividers: {
      control: 'boolean',
      description: 'Show dividers between stack items',
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
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
  "
  >
    ${content}
  </div>
`;

// Code box helper for HTML examples
const codeBox = (title: string, code: string) => html`
  <div style="margin: 24px 0;">
    <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #1976d2;">${title}</h4>
    <pre style="background: #f5f5f5; padding: 12px; border-radius: 8px; margin: 0; overflow-x: auto; font-size: 13px; line-height: 1.4; border: 1px solid #e0e0e0;"><code>${code}</code></pre>
  </div>
`;

export const Default: Story = {
  args: {
    direction: 'column',
    spacing: 'medium',
    align: 'stretch',
    justify: 'start',
    wrap: 'nowrap',
    size: 'medium',
    elevated: false,
    interactive: false,
    disabled: false,
    loading: false,
    responsive: false,
    distribute: false,
    equalWidth: false,
    equalHeight: false,
    centerChildren: false,
    dividers: false,
  },
  render: (args) => html`
    <div style="max-width: 1200px; padding: 24px;">
      <h2 style="margin: 0 0 32px 0; color: #1976d2; border-bottom: 2px solid #e3f2fd; padding-bottom: 8px;">
        Stack Component - Material Design 3
      </h2>
      
      <!-- Interactive Controls -->
      <section style="margin-bottom: 48px; padding: 24px; background: #f8f9fa; border-radius: 12px; border: 1px solid #e0e0e0;">
        <h3 style="margin: 0 0 16px 0; color: #1976d2;">Interactive Demo</h3>
        <p style="margin: 0 0 16px 0; color: #666; line-height: 1.5;">
          Use the controls below to explore different stack configurations:
        </p>
        <mwc-stack
          direction="${args.direction}"
          spacing="${args.spacing}" 
          align="${args.align}"
          justify="${args.justify}"
          wrap="${args.wrap}"
          size="${args.size}"
          variant="${args.variant || ''}"
          ?elevated="${args.elevated}"
          ?interactive="${args.interactive}"
          ?disabled="${args.disabled}"
          ?loading="${args.loading}"
          ?responsive="${args.responsive}"
          ?distribute="${args.distribute}"
          ?equal-width="${args.equalWidth}"
          ?equal-height="${args.equalHeight}"
          ?center-children="${args.centerChildren}"
          ?dividers="${args.dividers}"
          style="border: 2px dashed #1976d2; padding: 16px; border-radius: 8px; min-height: 120px;"
        >
          ${createStackItem('Interactive Item 1')}
          ${createStackItem('Interactive Item 2')}
          ${createStackItem('Interactive Item 3')}
        </mwc-stack>
      </section>

      <!-- 1. Basic Usage -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">1. Basic Usage</h3>
        
        <div style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
          <div>
            <h4>Column Direction (Default)</h4>
            <mwc-stack spacing="medium" style="max-width: 250px;">
              ${createStackItem('First Item')}
              ${createStackItem('Second Item')}
              ${createStackItem('Third Item')}
            </mwc-stack>
            ${codeBox('HTML', `<mwc-stack>
  <div>First Item</div>
  <div>Second Item</div>
  <div>Third Item</div>
</mwc-stack>`)}
          </div>

          <div>
            <h4>Row Direction</h4>
            <mwc-stack direction="row" spacing="medium">
              ${createStackItem('Left')}
              ${createStackItem('Center')}
              ${createStackItem('Right')}
            </mwc-stack>
            ${codeBox('HTML', `<mwc-stack direction="row">
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</mwc-stack>`)}
          </div>
        </div>
      </section>

      <!-- 2. Direction Variants -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">2. Direction Variants</h3>
        
        <div style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
          <div>
            <h4>Column</h4>
            <mwc-stack direction="column" spacing="small" style="max-width: 200px;">
              ${createStackItem('First', '#e3f2fd')}
              ${createStackItem('Second', '#e8f5e8')}
              ${createStackItem('Third', '#fff3e0')}
            </mwc-stack>
          </div>

          <div>
            <h4>Row</h4>
            <mwc-stack direction="row" spacing="small">
              ${createStackItem('First', '#e3f2fd')}
              ${createStackItem('Second', '#e8f5e8')}
              ${createStackItem('Third', '#fff3e0')}
            </mwc-stack>
          </div>

          <div>
            <h4>Column Reverse</h4>
            <mwc-stack direction="column-reverse" spacing="small" style="max-width: 200px;">
              ${createStackItem('First (last)', '#e3f2fd')}
              ${createStackItem('Second', '#e8f5e8')}
              ${createStackItem('Third (first)', '#fff3e0')}
            </mwc-stack>
          </div>

          <div>
            <h4>Row Reverse</h4>
            <mwc-stack direction="row-reverse" spacing="small">
              ${createStackItem('First (last)', '#e3f2fd')}
              ${createStackItem('Second', '#e8f5e8')}
              ${createStackItem('Third (first)', '#fff3e0')}
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- 3. Spacing Options -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">3. Spacing Options</h3>
        
        <div style="display: grid; gap: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <div>
              <h4>None (0px)</h4>
              <mwc-stack spacing="none" style="max-width: 150px;">
                ${createStackItem('A')}
                ${createStackItem('B')}
                ${createStackItem('C')}
              </mwc-stack>
            </div>

            <div>
              <h4>XS (4px)</h4>
              <mwc-stack spacing="xs" style="max-width: 150px;">
                ${createStackItem('A')}
                ${createStackItem('B')}
                ${createStackItem('C')}
              </mwc-stack>
            </div>

            <div>
              <h4>Small (8px)</h4>
              <mwc-stack spacing="small" style="max-width: 150px;">
                ${createStackItem('A')}
                ${createStackItem('B')}
                ${createStackItem('C')}
              </mwc-stack>
            </div>

            <div>
              <h4>Medium (16px)</h4>
              <mwc-stack spacing="medium" style="max-width: 150px;">
                ${createStackItem('A')}
                ${createStackItem('B')}
                ${createStackItem('C')}
              </mwc-stack>
            </div>

            <div>
              <h4>Large (24px)</h4>
              <mwc-stack spacing="large" style="max-width: 150px;">
                ${createStackItem('A')}
                ${createStackItem('B')}
                ${createStackItem('C')}
              </mwc-stack>
            </div>

            <div>
              <h4>XL (32px)</h4>
              <mwc-stack spacing="xl" style="max-width: 150px;">
                ${createStackItem('A')}
                ${createStackItem('B')}
                ${createStackItem('C')}
              </mwc-stack>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Alignment & Justification -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">4. Alignment & Justification</h3>
        
        <div style="display: grid; gap: 24px;">
          <div>
            <h4>Center Alignment</h4>
            <mwc-stack
              direction="row"
              align="center"
              spacing="medium"
              style="min-height: 100px; border: 1px dashed #e0e0e0; padding: 16px;"
            >
              ${createStackItem('Short')}
              <div style="padding: 32px; background: #f8bbd9; color: #880e4f; border-radius: 8px; text-align: center;">
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
              ${createStackItem('Left')}
              ${createStackItem('Center')}
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
              ${createStackItem('Centered 1')}
              ${createStackItem('Centered 2')}
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- 5. Color Variants & Elevation -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">5. Color Variants & Elevation</h3>
        
        <div style="display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          <div>
            <h4>Primary</h4>
            <mwc-stack variant="primary" spacing="small" style="padding: 16px; border-radius: 8px; min-width: 180px;">
              ${createStackItem('Primary Item', '#ffffff', '#1976d2')}
              ${createStackItem('Primary Item', '#ffffff', '#1976d2')}
            </mwc-stack>
          </div>

          <div>
            <h4>Secondary</h4>
            <mwc-stack variant="secondary" spacing="small" style="padding: 16px; border-radius: 8px; min-width: 180px;">
              ${createStackItem('Secondary Item', '#ffffff', '#c2185b')}
              ${createStackItem('Secondary Item', '#ffffff', '#c2185b')}
            </mwc-stack>
          </div>

          <div>
            <h4>Success</h4>
            <mwc-stack variant="success" spacing="small" style="padding: 16px; border-radius: 8px; min-width: 180px;">
              ${createStackItem('Success Item', '#ffffff', '#388e3c')}
              ${createStackItem('Success Item', '#ffffff', '#388e3c')}
            </mwc-stack>
          </div>

          <div>
            <h4>Elevated</h4>
            <mwc-stack elevated spacing="medium" style="padding: 24px; border-radius: 12px; min-width: 180px;">
              ${createStackItem('Elevated Item')}
              ${createStackItem('Elevated Item')}
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- 6. Interactive States -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">6. Interactive States</h3>
        
        <div style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
          <div>
            <h4>Interactive (Hover/Click)</h4>
            <mwc-stack interactive spacing="medium" style="padding: 16px; border-radius: 8px; max-width: 200px;">
              ${createStackItem('Hover me!')}
              ${createStackItem('Click me!')}
            </mwc-stack>
          </div>

          <div>
            <h4>Loading State</h4>
            <mwc-stack loading spacing="medium" style="padding: 16px; border-radius: 8px; max-width: 200px;">
              ${createStackItem('Loading...')}
              ${createStackItem('Please wait')}
            </mwc-stack>
          </div>

          <div>
            <h4>Disabled State</h4>
            <mwc-stack disabled spacing="medium" style="padding: 16px; border-radius: 8px; max-width: 200px;">
              ${createStackItem('Disabled')}
              ${createStackItem('Cannot interact')}
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- 7. Advanced Features -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">7. Advanced Features</h3>
        
        <div style="display: grid; gap: 24px;">
          <div>
            <h4>Equal Width Items (Row)</h4>
            <mwc-stack direction="row" equal-width spacing="medium">
              ${createStackItem('Short')}
              ${createStackItem('Much longer content here')}
              ${createStackItem('Medium')}
            </mwc-stack>
            ${codeBox('HTML', `<mwc-stack direction="row" equal-width>
  <div>Short</div>
  <div>Much longer content here</div>
  <div>Medium</div>
</mwc-stack>`)}
          </div>

          <div>
            <h4>Equal Height Items (Column)</h4>
            <mwc-stack equal-height spacing="medium" style="max-width: 300px; min-height: 200px;">
              ${createStackItem('Normal')}
              <div style="padding: 24px; background: #f8bbd9; color: #880e4f; border-radius: 8px; text-align: center; display: flex; align-items: center; justify-content: center;">
                Taller content with more text that spans multiple lines
              </div>
              ${createStackItem('Normal')}
            </mwc-stack>
          </div>

          <div>
            <h4>Stack with Dividers</h4>
            <mwc-stack dividers spacing="large" style="max-width: 300px;">
              ${createStackItem('Item with divider')}
              ${createStackItem('Item with divider')}
              ${createStackItem('Last item')}
            </mwc-stack>
          </div>

          <div>
            <h4>Distributed Items (Equal Space)</h4>
            <mwc-stack
              direction="row"
              distribute
              spacing="medium"
              style="border: 1px dashed #e0e0e0; padding: 16px; min-height: 60px;"
            >
              ${createStackItem('Distributed 1')}
              ${createStackItem('Distributed 2')}
              ${createStackItem('Distributed 3')}
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- 8. Responsive Design -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">8. Responsive Design</h3>
        
        <div style="display: grid; gap: 24px;">
          <div>
            <h4>Responsive Stack (Resize window to see effect)</h4>
            <p style="color: #666; margin: 0 0 16px 0; font-size: 14px;">
              This stack changes from row (desktop) to column (mobile) automatically.
            </p>
            <mwc-stack
              responsive
              direction="row"
              spacing="medium"
              style="border: 1px dashed #1976d2; padding: 16px; border-radius: 8px;"
            >
              ${createStackItem('Responsive 1')}
              ${createStackItem('Responsive 2')}
              ${createStackItem('Responsive 3')}
              ${createStackItem('Responsive 4')}
            </mwc-stack>
            ${codeBox('HTML', `<mwc-stack responsive direction="row">
  <div>Responsive 1</div>
  <div>Responsive 2</div>
  <div>Responsive 3</div>
  <div>Responsive 4</div>
</mwc-stack>`)}
          </div>

          <div>
            <h4>Mobile-First Design Example</h4>
            <p style="color: #666; margin: 0 0 16px 0; font-size: 14px;">
              Best practices: Design for mobile first, then enhance for larger screens.
            </p>
            <mwc-stack spacing="medium" style="border: 1px solid #e0e0e0; padding: 16px; border-radius: 8px; max-width: 400px;">
              <div style="padding: 12px; background: #e3f2fd; border-radius: 6px; text-align: center;">
                📱 Mobile: Column layout
              </div>
              <div style="padding: 12px; background: #e8f5e8; border-radius: 6px; text-align: center;">
                💻 Desktop: Row layout (with responsive prop)
              </div>
              <div style="padding: 12px; background: #fff3e0; border-radius: 6px; text-align: center;">
                🎯 44px min touch targets on mobile
              </div>
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- 9. Accessibility Features -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">9. Accessibility Features</h3>
        
        <div style="display: grid; gap: 24px;">
          <div>
            <h4>Keyboard Navigation (Interactive Stack)</h4>
            <p style="color: #666; margin: 0 0 16px 0; font-size: 14px;">
              Tab to focus, Enter/Space to activate, Arrow keys to navigate children.
            </p>
            <mwc-stack
              interactive
              spacing="medium"
              aria-label="Navigation menu"
              style="max-width: 300px; border: 2px solid #1976d2; border-radius: 8px; padding: 16px;"
            >
              <button style="padding: 12px; border: 1px solid #1976d2; background: #e3f2fd; border-radius: 6px; cursor: pointer;">
                Home
              </button>
              <button style="padding: 12px; border: 1px solid #1976d2; background: #e3f2fd; border-radius: 6px; cursor: pointer;">
                About
              </button>
              <button style="padding: 12px; border: 1px solid #1976d2; background: #e3f2fd; border-radius: 6px; cursor: pointer;">
                Contact
              </button>
            </mwc-stack>
          </div>

          <div>
            <h4>ARIA Support</h4>
            <mwc-stack
              role="region"
              aria-label="Product features"
              spacing="medium"
              style="max-width: 400px; border: 1px solid #e0e0e0; padding: 16px; border-radius: 8px;"
            >
              <div style="padding: 12px; background: #f5f5f5; border-radius: 6px;">
                <strong>Semantic HTML:</strong> Proper ARIA roles and labels
              </div>
              <div style="padding: 12px; background: #f5f5f5; border-radius: 6px;">
                <strong>Focus Management:</strong> Logical tab order
              </div>
              <div style="padding: 12px; background: #f5f5f5; border-radius: 6px;">
                <strong>Screen Readers:</strong> Meaningful announcements
              </div>
            </mwc-stack>
            ${codeBox('HTML', `<mwc-stack role="region" aria-label="Product features">
  <div>Feature 1</div>
  <div>Feature 2</div>
  <div>Feature 3</div>
</mwc-stack>`)}
          </div>
        </div>
      </section>

      <!-- 10. Form Integration -->
      <section style="margin-bottom: 48px;">
        <h3 style="margin: 0 0 24px 0; color: #1976d2; font-size: 20px;">10. Form Integration</h3>
        
        <div style="display: grid; gap: 24px;">
          <div>
            <h4>Form Layout with Stack</h4>
            <form style="max-width: 400px; border: 1px solid #e0e0e0; padding: 24px; border-radius: 12px;">
              <mwc-stack spacing="large">
                <div>
                  <label for="name" style="display: block; margin-bottom: 4px; font-weight: 500;">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 6px; box-sizing: border-box;"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label for="email" style="display: block; margin-bottom: 4px; font-weight: 500;">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    style="width: 100%; padding: 12px; border: 1px solid #e0e0e0; border-radius: 6px; box-sizing: border-box;"
                    placeholder="Enter your email"
                  />
                </div>

                <mwc-stack direction="row" spacing="medium" justify="space-between">
                  <button 
                    type="submit"
                    style="flex: 1; padding: 12px 24px; background: #1976d2; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;"
                  >
                    Submit
                  </button>
                  <button 
                    type="button"
                    style="flex: 1; padding: 12px 24px; background: transparent; color: #1976d2; border: 1px solid #1976d2; border-radius: 6px; cursor: pointer; font-weight: 500;"
                  >
                    Cancel
                  </button>
                </mwc-stack>
              </mwc-stack>
            </form>
            ${codeBox('HTML', `<form>
  <mwc-stack spacing="large">
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <mwc-stack direction="row" spacing="medium">
      <button type="submit">Submit</button>
      <button type="button">Cancel</button>
    </mwc-stack>
  </mwc-stack>
</form>`)}
          </div>

          <div>
            <h4>FormData Integration</h4>
            <p style="color: #666; margin: 0 0 16px 0; font-size: 14px;">
              Stack components can participate in form submissions with name/value attributes.
            </p>
            <mwc-stack 
              name="preferences"
              value="notifications-enabled"
              spacing="small"
              style="max-width: 300px; border: 1px dashed #e0e0e0; padding: 16px; border-radius: 8px;"
            >
              <div style="padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 14px;">
                Form field: preferences = "notifications-enabled"
              </div>
            </mwc-stack>
          </div>
        </div>
      </section>

      <!-- Best Practices Summary -->
      <section style="margin-bottom: 48px; padding: 24px; background: #f8f9fa; border-radius: 12px; border-left: 4px solid #1976d2;">
        <h3 style="margin: 0 0 16px 0; color: #1976d2; font-size: 20px;">💡 Best Practices</h3>
        <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: #333;">
          <li><strong>Mobile First:</strong> Design for mobile, then enhance for desktop</li>
          <li><strong>Consistent Spacing:</strong> Use the built-in spacing scale for consistency</li>
          <li><strong>Semantic Structure:</strong> Include proper ARIA labels for accessibility</li>
          <li><strong>Touch Targets:</strong> Ensure 44px minimum for interactive elements</li>
          <li><strong>Performance:</strong> Use CSS gap when available for better performance</li>
          <li><strong>Responsive Design:</strong> Test on multiple screen sizes</li>
          <li><strong>Color Contrast:</strong> Maintain 4.5:1 contrast ratio for text</li>
          <li><strong>Focus Management:</strong> Provide clear focus indicators</li>
        </ul>
      </section>
    </div>
  `,
};
