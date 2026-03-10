import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button';

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
  args: {},
  render: (args) => html`
    <mwc-button
      variant="${args.variant}"
      size="${args.size}"
      color="${args.color}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      href="${args.href || ''}"
      target="${args.target || ''}"
    >
      ${args.loading ? 'Loading...' : 'Click Me'}
    </mwc-button>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <mwc-button variant="contained">Contained</mwc-button>
      <mwc-button variant="outlined">Outlined</mwc-button>
      <mwc-button variant="text">Text</mwc-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the button component.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;"
    >
      <mwc-button variant="contained" color="primary">Primary</mwc-button>
      <mwc-button variant="contained" color="secondary">Secondary</mwc-button>
      <mwc-button variant="contained" color="success">Success</mwc-button>
      <mwc-button variant="contained" color="warning">Warning</mwc-button>
      <mwc-button variant="contained" color="error">Error</mwc-button>
    </div>
    <div
      style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;"
    >
      <mwc-button variant="outlined" color="primary">Primary</mwc-button>
      <mwc-button variant="outlined" color="secondary">Secondary</mwc-button>
      <mwc-button variant="outlined" color="success">Success</mwc-button>
      <mwc-button variant="outlined" color="warning">Warning</mwc-button>
      <mwc-button variant="outlined" color="error">Error</mwc-button>
    </div>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <mwc-button variant="text" color="primary">Primary</mwc-button>
      <mwc-button variant="text" color="secondary">Secondary</mwc-button>
      <mwc-button variant="text" color="success">Success</mwc-button>
      <mwc-button variant="text" color="warning">Warning</mwc-button>
      <mwc-button variant="text" color="error">Error</mwc-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Buttons in different semantic colors across all variants.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
    >
      <mwc-button size="small" variant="contained">Small</mwc-button>
      <mwc-button size="medium" variant="contained">Medium</mwc-button>
      <mwc-button size="large" variant="contained">Large</mwc-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of buttons for various use cases.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div
      style="display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 16px;"
    >
      <mwc-button variant="contained">Default</mwc-button>
      <mwc-button variant="contained" disabled>Disabled</mwc-button>
      <mwc-button variant="contained" loading>Loading</mwc-button>
    </div>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <mwc-button variant="outlined">Default</mwc-button>
      <mwc-button variant="outlined" disabled>Disabled</mwc-button>
      <mwc-button variant="outlined" loading>Loading</mwc-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different states including disabled and loading.',
      },
    },
  },
};

export const AsLink: Story = {
  args: {
    href: 'https://google.com',
    target: '_blank',
  },
  render: (args) => html`
    <mwc-button
      variant="${args.variant}"
      color="${args.color}"
      href="${args.href}"
      target="${args.target}"
    >
      Visit Google
    </mwc-button>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as an anchor link when href prop is provided.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <mwc-button
        variant="contained"
        @mwc-button-click="${() => alert('Button clicked!')}"
      >
        Alert on Click
      </mwc-button>
      <mwc-button
        variant="outlined"
        @mwc-button-click="${(e: Event) => console.log('Button event:', e)}"
      >
        Log to Console
      </mwc-button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Interactive examples showing event handling.',
      },
    },
  },
};
