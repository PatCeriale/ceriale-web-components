import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './card';
import '../button/button';

const meta: Meta = {
  title: 'Components/Card',
  component: 'mwc-card',
  parameters: {
    docs: {
      description: {
        component:
          'Flexible container component for displaying related content with optional header, media, and actions.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'filled'],
      description: 'Visual style variant of the card',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Whether the entire card is clickable',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the card is disabled',
    },
    actionsLayout: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'space-between'],
      description: 'Layout of action buttons',
    },
  },
  args: {
    variant: 'elevated',
    clickable: false,
    disabled: false,
    actionsLayout: 'end',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
  render: (args) => html`
    <mwc-card
      variant="${args.variant}"
      ?clickable="${args.clickable}"
      ?disabled="${args.disabled}"
      actions-layout="${args.actionsLayout}"
      style="max-width: 400px;"
    >
      <h3>Card Title</h3>
      <p>
        This is the main content of the card. It can contain any HTML content
        including text, images, forms, or other components.
      </p>
      <div slot="actions">
        <mwc-button variant="text" color="primary">Action</mwc-button>
        <mwc-button variant="outlined">Secondary</mwc-button>
      </div>
    </mwc-card>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div
      style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
    >
      <mwc-card variant="elevated" style="max-width: 350px;">
        <div slot="header">
          <h3>Elevated Card</h3>
        </div>
        <p>
          This card uses shadow elevation to appear raised above the surface.
          Perfect for highlighting important content.
        </p>
        <div slot="actions">
          <mwc-button variant="text" color="primary">Learn More</mwc-button>
        </div>
      </mwc-card>

      <mwc-card variant="outlined" style="max-width: 350px;">
        <div slot="header">
          <h3>Outlined Card</h3>
        </div>
        <p>
          This card uses a border for definition instead of shadow. Great for
          subtle separation without emphasis.
        </p>
        <div slot="actions">
          <mwc-button variant="outlined" color="secondary"
            >View Details</mwc-button
          >
        </div>
      </mwc-card>

      <mwc-card variant="filled" style="max-width: 350px;">
        <div slot="header">
          <h3>Filled Card</h3>
        </div>
        <p>
          This card has a filled background with subtle contrast. Useful for
          grouping related content.
        </p>
        <div slot="actions">
          <mwc-button variant="contained" color="success">Complete</mwc-button>
        </div>
      </mwc-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the card component.',
      },
    },
  },
};

export const WithSlots: Story = {
  render: () => html`
    <mwc-card variant="elevated" style="max-width: 400px;">
      <div
        slot="header"
        style="padding: 16px; border-bottom: 1px solid var(--color-grey-200);"
      >
        <h2 style="margin: 0; color: var(--color-primary-600);">
          Article Title
        </h2>
        <p
          style="margin: 4px 0 0; color: var(--color-grey-600); font-size: 14px;"
        >
          Published 2 hours ago
        </p>
      </div>

      <div
        slot="media"
        style="height: 200px; background: linear-gradient(45deg, var(--color-primary-500), var(--color-secondary-500)); display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;"
      >
        📸 Featured Image
      </div>

      <div style="padding: 16px;">
        <p>
          This card demonstrates all available slots: header, media, default
          content, and actions. Each slot can contain any HTML content.
        </p>
        <p>
          The media slot is perfect for images, videos, or rich visual content.
        </p>
      </div>

      <div
        slot="actions"
        style="padding: 8px 16px 16px; border-top: 1px solid var(--color-grey-100);"
      >
        <mwc-button variant="text" color="primary">Read More</mwc-button>
        <mwc-button variant="text">Share</mwc-button>
        <mwc-button variant="text" color="error">Delete</mwc-button>
      </div>
    </mwc-card>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Card with all slots populated: header, media, content, and actions.',
      },
    },
  },
};

export const ActionLayouts: Story = {
  render: () => html`
    <div
      style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
    >
      <mwc-card
        variant="outlined"
        actions-layout="start"
        style="max-width: 350px;"
      >
        <h4>Start Layout</h4>
        <p>Actions aligned to the start (left).</p>
        <div slot="actions">
          <mwc-button variant="contained" color="primary">Primary</mwc-button>
          <mwc-button variant="outlined">Secondary</mwc-button>
        </div>
      </mwc-card>

      <mwc-card
        variant="outlined"
        actions-layout="end"
        style="max-width: 350px;"
      >
        <h4>End Layout</h4>
        <p>Actions aligned to the end (right).</p>
        <div slot="actions">
          <mwc-button variant="contained" color="primary">Primary</mwc-button>
          <mwc-button variant="outlined">Secondary</mwc-button>
        </div>
      </mwc-card>

      <mwc-card
        variant="outlined"
        actions-layout="center"
        style="max-width: 350px;"
      >
        <h4>Center Layout</h4>
        <p>Actions centered horizontally.</p>
        <div slot="actions">
          <mwc-button variant="contained" color="primary">Primary</mwc-button>
          <mwc-button variant="outlined">Secondary</mwc-button>
        </div>
      </mwc-card>

      <mwc-card
        variant="outlined"
        actions-layout="space-between"
        style="max-width: 350px;"
      >
        <h4>Space Between Layout</h4>
        <p>Actions spaced evenly apart.</p>
        <div slot="actions">
          <mwc-button variant="text" color="error">Delete</mwc-button>
          <mwc-button variant="contained" color="primary">Save</mwc-button>
        </div>
      </mwc-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different layout options for card actions.',
      },
    },
  },
};

export const Clickable: Story = {
  render: () => html`
    <div
      style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
    >
      <mwc-card
        variant="outlined"
        clickable
        @mwc-card-click="${() => alert('Navigation card clicked!')}"
        style="max-width: 300px; cursor: pointer;"
      >
        <h4>📊 Analytics Dashboard</h4>
        <p>Click to view detailed analytics and insights.</p>
      </mwc-card>

      <mwc-card
        variant="outlined"
        clickable
        @mwc-card-click="${() => alert('Settings card clicked!')}"
        style="max-width: 300px; cursor: pointer;"
      >
        <h4>⚙️ Settings</h4>
        <p>Configure your application preferences.</p>
      </mwc-card>

      <mwc-card
        variant="outlined"
        clickable
        @mwc-card-click="${() => alert('Profile card clicked!')}"
        style="max-width: 300px; cursor: pointer;"
      >
        <h4>👤 Profile</h4>
        <p>Manage your user profile and account.</p>
      </mwc-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Clickable cards that respond to user interaction, perfect for navigation.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div
      style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
    >
      <mwc-card variant="elevated" style="max-width: 300px;">
        <h4>Normal State</h4>
        <p>Regular interactive card with hover effects.</p>
        <div slot="actions">
          <mwc-button variant="contained" color="primary">Action</mwc-button>
        </div>
      </mwc-card>

      <mwc-card variant="elevated" disabled style="max-width: 300px;">
        <h4>Disabled State</h4>
        <p>Card is disabled and not interactive.</p>
        <div slot="actions">
          <mwc-button variant="contained" disabled>Action</mwc-button>
        </div>
      </mwc-card>

      <mwc-card variant="elevated" clickable style="max-width: 300px;">
        <h4>Clickable State</h4>
        <p>Entire card responds to clicks with focus outline.</p>
      </mwc-card>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different interaction states of the card component.',
      },
    },
  },
};
