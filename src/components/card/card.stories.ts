import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './card';
import '../button/button';
import '../code-box/code-box';
import '../icons/action-icons';

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
          <mwc-card variant="elevated" style="max-width: 400px;">
            <h3>Card Title</h3>
            <p>
              This is the main content of the card. It can contain any HTML
              content including text, images, forms, or other components.
            </p>
            <div slot="actions">
              <mwc-button variant="text" color="primary">Action</mwc-button>
              <mwc-button variant="outlined">Secondary</mwc-button>
            </div>
          </mwc-card>
        </div>
        <mwc-code-box
          title="Simple card with actions"
          code='<mwc-card variant="elevated" style="max-width: 400px;">
  <h3>Card Title</h3>
  <p>This is the main content of the card. It can contain any HTML content including text, images, forms, or other components.</p>
  <div slot="actions">
    <mwc-button variant="text" color="primary">Action</mwc-button>
    <mwc-button variant="outlined">Secondary</mwc-button>
  </div>
</mwc-card>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Variants Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Variants
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));"
          >
            <mwc-card variant="elevated" style="max-width: 350px;">
              <div slot="header">
                <h3>Elevated Card</h3>
              </div>
              <p>
                This card uses shadow elevation to appear raised above the
                surface. Perfect for highlighting important content.
              </p>
              <div slot="actions">
                <mwc-button variant="text" color="primary"
                  >Learn More</mwc-button
                >
              </div>
            </mwc-card>

            <mwc-card variant="outlined" style="max-width: 350px;">
              <div slot="header">
                <h3>Outlined Card</h3>
              </div>
              <p>
                This card uses a border for definition instead of shadow. Great
                for subtle separation without emphasis.
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
                This card has a filled background with subtle contrast. Useful
                for grouping related content.
              </p>
              <div slot="actions">
                <mwc-button variant="contained" color="success"
                  >Complete</mwc-button
                >
              </div>
            </mwc-card>
          </div>
        </div>
        <mwc-code-box
          title="Card variants"
          code='<!-- Elevated card -->
<mwc-card variant="elevated">
  <div slot="header">
    <h3>Elevated Card</h3>
  </div>
  <p>This card uses shadow elevation...</p>
  <div slot="actions">
    <mwc-button variant="text" color="primary">Learn More</mwc-button>
  </div>
</mwc-card>

<!-- Outlined card -->
<mwc-card variant="outlined">
  <div slot="header">
    <h3>Outlined Card</h3>
  </div>
  <p>This card uses a border for definition...</p>
  <div slot="actions">
    <mwc-button variant="outlined" color="secondary">View Details</mwc-button>
  </div>
</mwc-card>

<!-- Filled card -->
<mwc-card variant="filled">
  <div slot="header">
    <h3>Filled Card</h3>
  </div>
  <p>This card has a filled background...</p>
  <div slot="actions">
    <mwc-button variant="contained" color="success">Complete</mwc-button>
  </div>
</mwc-card>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- With Slots Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Using Slots
        </h2>
        <div style="margin-bottom: 24px;">
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
                This card demonstrates all available slots: header, media,
                default content, and actions. Each slot can contain any HTML
                content.
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
        </div>
        <mwc-code-box
          title="Card with all slots"
          code='<mwc-card variant="elevated">
  <!-- Header slot -->
  <div slot="header">
    <h2>Article Title</h2>
    <p>Published 2 hours ago</p>
  </div>

  <!-- Media slot -->
  <div slot="media" style="height: 200px; background: gradient...">
    📸 Featured Image
  </div>

  <!-- Default content -->
  <div>
    <p>This card demonstrates all available slots...</p>
  </div>

  <!-- Actions slot -->
  <div slot="actions">
    <mwc-button variant="text" color="primary">Read More</mwc-button>
    <mwc-button variant="text">Share</mwc-button>
    <mwc-button variant="text" color="error">Delete</mwc-button>
  </div>
</mwc-card>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Action Layouts Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Action Layouts
        </h2>
        <div style="margin-bottom: 24px;">
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
                <mwc-button variant="contained" color="primary"
                  >Primary</mwc-button
                >
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
                <mwc-button variant="contained" color="primary"
                  >Primary</mwc-button
                >
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
                <mwc-button variant="contained" color="primary"
                  >Primary</mwc-button
                >
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
                <mwc-button variant="contained" color="primary"
                  >Save</mwc-button
                >
              </div>
            </mwc-card>
          </div>
        </div>
        <mwc-code-box
          title="Action layout options"
          code='<!-- Start layout -->
<mwc-card variant="outlined" actions-layout="start">
  <h4>Start Layout</h4>
  <p>Actions aligned to the start (left).</p>
  <div slot="actions">
    <mwc-button variant="contained" color="primary">Primary</mwc-button>
    <mwc-button variant="outlined">Secondary</mwc-button>
  </div>
</mwc-card>

<!-- Other layouts: end, center, space-between -->
<mwc-card actions-layout="end">...</mwc-card>
<mwc-card actions-layout="center">...</mwc-card>
<mwc-card actions-layout="space-between">...</mwc-card>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Clickable Cards Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Clickable Cards
        </h2>
        <div style="margin-bottom: 24px;">
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
        </div>
        <mwc-code-box
          title="Clickable cards with events"
          code='<mwc-card 
  variant="outlined" 
  clickable
  @mwc-card-click="handleCardClick"
  style="cursor: pointer;"
>
  <h4>📊 Analytics Dashboard</h4>
  <p>Click to view detailed analytics and insights.</p>
</mwc-card>

<script>
function handleCardClick(event) {
  console.log("Card clicked:", event.detail);
  // Navigate to dashboard
  window.location.href = "/dashboard";
}
</script>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- States Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          States
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
          >
            <mwc-card variant="elevated" style="max-width: 300px;">
              <h4>Normal State</h4>
              <p>Regular interactive card with hover effects.</p>
              <div slot="actions">
                <mwc-button variant="contained" color="primary"
                  >Action</mwc-button
                >
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
        </div>
        <mwc-code-box
          title="Card states"
          code='<!-- Normal state -->
<mwc-card variant="elevated">
  <h4>Normal State</h4>
  <p>Regular interactive card with hover effects.</p>
  <div slot="actions">
    <mwc-button variant="contained" color="primary">Action</mwc-button>
  </div>
</mwc-card>

<!-- Disabled state -->
<mwc-card variant="elevated" disabled>
  <h4>Disabled State</h4>
  <p>Card is disabled and not interactive.</p>
  <div slot="actions">
    <mwc-button variant="contained" disabled>Action</mwc-button>
  </div>
</mwc-card>

<!-- Clickable state -->
<mwc-card variant="elevated" clickable>
  <h4>Clickable State</h4>
  <p>Entire card responds to clicks with focus outline.</p>
</mwc-card>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
