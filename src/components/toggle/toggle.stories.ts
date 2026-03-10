import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './toggle';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'mwc-toggle',
  parameters: {
    docs: {
      description: {
        component:
          'Toggle switch component for on/off states with multiple variants and full accessibility support.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle switch',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color theme of the toggle',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is checked (on)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the toggle is disabled',
    },
    name: {
      control: { type: 'text' },
      description: 'Name for form integration',
    },
    value: {
      control: { type: 'text' },
      description: 'Value for form integration',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Accessible label for the toggle',
    },
  },
  args: {
    size: 'medium',
    color: 'primary',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
  render: (args) => html`
    <mwc-toggle
      size="${args.size}"
      color="${args.color}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      name="${args.name || ''}"
      value="${args.value || ''}"
      aria-label="${args.ariaLabel || ''}"
    >
      Toggle
    </mwc-toggle>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <mwc-toggle size="small">Small Toggle</mwc-toggle>
      <mwc-toggle size="medium">Medium Toggle</mwc-toggle>
      <mwc-toggle size="large">Large Toggle</mwc-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of toggle switches for various use cases.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div
        style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
      >
        <mwc-toggle color="primary" checked>Primary</mwc-toggle>
        <mwc-toggle color="secondary" checked>Secondary</mwc-toggle>
        <mwc-toggle color="success" checked>Success</mwc-toggle>
        <mwc-toggle color="warning" checked>Warning</mwc-toggle>
        <mwc-toggle color="error" checked>Error</mwc-toggle>
      </div>
      <div
        style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
      >
        <mwc-toggle color="primary">Primary</mwc-toggle>
        <mwc-toggle color="secondary">Secondary</mwc-toggle>
        <mwc-toggle color="success">Success</mwc-toggle>
        <mwc-toggle color="warning">Warning</mwc-toggle>
        <mwc-toggle color="error">Error</mwc-toggle>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Toggle switches in different semantic colors, shown in both checked and unchecked states.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <mwc-toggle>Default State</mwc-toggle>
      <mwc-toggle checked>Checked State</mwc-toggle>
      <mwc-toggle disabled>Disabled State</mwc-toggle>
      <mwc-toggle checked disabled>Checked & Disabled</mwc-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Different states of the toggle component including checked and disabled states.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <mwc-toggle checked>
        <span slot="start-icon">🌙</span>
        Dark Mode
        <span slot="end-icon">☀️</span>
      </mwc-toggle>

      <mwc-toggle color="success">
        <span slot="start-icon">📴</span>
        Notifications
        <span slot="end-icon">🔔</span>
      </mwc-toggle>

      <mwc-toggle color="warning" checked>
        <span slot="start-icon">🔇</span>
        Sound
        <span slot="end-icon">🔊</span>
      </mwc-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Toggle switches with start and end icons for enhanced visual context.',
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => html`
    <form
      @submit="${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        console.log('Form data:', data);
        alert('Form submitted! Check console for data.');
      }}"
      style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;"
    >
      <mwc-toggle name="notifications" value="enabled">
        Enable Notifications
      </mwc-toggle>

      <mwc-toggle name="darkMode" value="on" color="secondary">
        Dark Mode
      </mwc-toggle>

      <mwc-toggle name="analytics" value="allow" color="warning" checked>
        Analytics Tracking
      </mwc-toggle>

      <mwc-toggle name="marketing" value="subscribed" color="success">
        Marketing Emails
      </mwc-toggle>

      <button
        type="submit"
        style="margin-top: 16px; padding: 12px; border: none; border-radius: 4px; background: var(--color-primary-500); color: white; cursor: pointer;"
      >
        Save Settings
      </button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Toggle switches integrated with form submission for settings panels and preferences.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => html`
    <div
      style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;"
    >
      <mwc-toggle
        @mwc-toggle-change="${(e: CustomEvent) => {
          const toggle = e.target as any;
          console.log('Toggle changed:', e.detail);

          // Update some UI based on toggle state
          const status = toggle.nextElementSibling;
          if (status) {
            status.textContent = e.detail.checked ? 'ON' : 'OFF';
            status.style.color = e.detail.checked ? 'green' : 'red';
          }
        }}"
        color="primary"
      >
        Feature Toggle
      </mwc-toggle>
      <span style="font-weight: bold; color: red;">OFF</span>

      <mwc-toggle
        @mwc-toggle-change="${(e: CustomEvent) => {
          console.log('Sync toggle changed:', e.detail);
          if (e.detail.checked) {
            alert('Sync enabled! Data will be synchronized automatically.');
          }
        }}"
        color="success"
      >
        Auto Sync
      </mwc-toggle>

      <mwc-toggle
        @change="${(e: Event) => {
          const toggle = e.target as any;
          console.log('Native change event:', toggle.checked);
        }}"
        color="warning"
        name="native-toggle"
      >
        Native Events
      </mwc-toggle>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive examples showing event handling and real-time updates.',
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <mwc-toggle aria-label="Toggle notifications">
        <!-- No visible text, relies on aria-label -->
      </mwc-toggle>

      <div>
        <h3 id="privacy-heading">Privacy Settings</h3>
        <mwc-toggle
          aria-labelledby="privacy-heading"
          aria-describedby="privacy-description"
          color="secondary"
        >
          Data Collection
        </mwc-toggle>
        <p
          id="privacy-description"
          style="font-size: 12px; color: var(--color-grey-600);"
        >
          Allow us to collect anonymous usage data to improve the service.
        </p>
      </div>

      <div>
        <mwc-toggle color="success" checked> Keyboard Accessible </mwc-toggle>
        <p style="font-size: 12px; color: var(--color-grey-600);">
          Try using Tab to focus and Space/Enter to toggle.
        </p>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Accessibility features including ARIA labels, descriptions, and keyboard navigation.',
      },
    },
  },
};
