import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button';
import '../code-box/code-box';
import '../icons/action-icons';

const meta: Meta = {
  title: 'Components/Button',
  component: 'mwc-button',
  parameters: {
    docs: {
      description: {
        component:
          'Button component with ripple effects and multiple variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color theme of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button shows a loading state',
    },
    href: {
      control: { type: 'text' },
      description: 'URL to navigate to (renders as anchor)',
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Target for the anchor link',
    },
  },
  args: {
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    disabled: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">

      <!-- Basic Usage Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">Basic Usage</h2>
        <div style="margin-bottom: 24px;">
          <mwc-button variant="contained">Click Me</mwc-button>
        </div>
        <mwc-code-box
          title="Simple button"
          code='<mwc-button variant="contained">Click Me</mwc-button>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Variants Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">Variants</h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <mwc-button variant="contained">Contained</mwc-button>
            <mwc-button variant="outlined">Outlined</mwc-button>
            <mwc-button variant="text">Text</mwc-button>
          </div>
        </div>
        <mwc-code-box
          title="Button variants"
          code='<div style="display: flex; gap: 16px; flex-wrap: wrap;">
  <mwc-button variant="contained">Contained</mwc-button>
  <mwc-button variant="outlined">Outlined</mwc-button>
  <mwc-button variant="text">Text</mwc-button>
</div>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Colors Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">Colors</h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;">
            <mwc-button variant="contained" color="primary">Primary</mwc-button>
            <mwc-button variant="contained" color="secondary">Secondary</mwc-button>
            <mwc-button variant="contained" color="success">Success</mwc-button>
            <mwc-button variant="contained" color="warning">Warning</mwc-button>
            <mwc-button variant="contained" color="error">Error</mwc-button>
          </div>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <mwc-button variant="outlined" color="primary">Primary</mwc-button>
            <mwc-button variant="outlined" color="secondary">Secondary</mwc-button>
            <mwc-button variant="outlined" color="success">Success</mwc-button>
            <mwc-button variant="outlined" color="warning">Warning</mwc-button>
            <mwc-button variant="outlined" color="error">Error</mwc-button>
          </div>
        </div>
        <mwc-code-box
          title="Button colors"
          code='<!-- Contained buttons -->
<mwc-button variant="contained" color="primary">Primary</mwc-button>
<mwc-button variant="contained" color="secondary">Secondary</mwc-button>
<mwc-button variant="contained" color="success">Success</mwc-button>
<mwc-button variant="contained" color="warning">Warning</mwc-button>
<mwc-button variant="contained" color="error">Error</mwc-button>

<!-- Outlined buttons -->
<mwc-button variant="outlined" color="primary">Primary</mwc-button>
<mwc-button variant="outlined" color="secondary">Secondary</mwc-button>
<!-- ... other colors -->'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Sizes Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">Sizes</h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <mwc-button size="small" variant="contained">Small</mwc-button>
            <mwc-button size="medium" variant="contained">Medium</mwc-button>
            <mwc-button size="large" variant="contained">Large</mwc-button>
          </div>
        </div>
        <mwc-code-box
          title="Button sizes"
          code='<mwc-button size="small" variant="contained">Small</mwc-button>
<mwc-button size="medium" variant="contained">Medium</mwc-button>
<mwc-button size="large" variant="contained">Large</mwc-button>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- States Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">States</h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;">
            <mwc-button variant="contained">Default</mwc-button>
            <mwc-button variant="contained" disabled>Disabled</mwc-button>
            <mwc-button variant="contained" loading>Loading</mwc-button>
          </div>
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <mwc-button variant="outlined">Default</mwc-button>
            <mwc-button variant="outlined" disabled>Disabled</mwc-button>
            <mwc-button variant="outlined" loading>Loading</mwc-button>
          </div>
        </div>
        <mwc-code-box
          title="Button states"
          code='<!-- Default state -->
<mwc-button variant="contained">Default</mwc-button>

<!-- Disabled state -->
<mwc-button variant="contained" disabled>Disabled</mwc-button>

<!-- Loading state -->
<mwc-button variant="contained" loading>Loading</mwc-button>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Interactive Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">Event Handling</h2>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; gap: 16px; flex-wrap: wrap;">
            <mwc-button
              variant="contained"
              @mwc-button-click="${() => alert('Button clicked!')}"
            >
              Alert on Click
            </mwc-button>
            <mwc-button
              variant="outlined"
              @mwc-button-click="${(e: Event) =>
                console.log('Button event:', e)}"
            >
              Log to Console
            </mwc-button>
          </div>
        </div>
        <mwc-code-box
          title="Event handling"
          code='<!-- Using onclick -->
<mwc-button 
  variant="contained" 
  onclick="alert(\'Button clicked!\')"
>
  Alert on Click
</mwc-button>

<!-- Using event listener -->
<mwc-button id="my-button" variant="outlined">
  Log to Console
</mwc-button>

<script>
  document.getElementById("my-button")
    .addEventListener("mwc-button-click", (event) => {
      console.log("Button clicked!", event);
    });
</script>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- As Link Section -->
      <section style="margin-bottom: 48px;">
        <h2 style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;">As Link</h2>
        <div style="margin-bottom: 24px;">
          <mwc-button
            variant="outlined"
            href="https://example.com"
            target="_blank"
          >
            Visit Website
          </mwc-button>
        </div>
        <mwc-code-box
          title="Button as link"
          code='<mwc-button 
  variant="outlined" 
  href="https://example.com"
  target="_blank"
>
  Visit Website
</mwc-button>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
