import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './toggle';
import '../code-box/code-box';
import '../icons/status-icons';
import '../icons/theme-icons';
import '../icons/action-icons';

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
          <div
            style="display: flex; flex-direction: column; gap: 12px; max-width: 300px;"
          >
            <mwc-toggle>Enable notifications</mwc-toggle>
            <mwc-toggle checked color="primary">Dark mode</mwc-toggle>
            <mwc-toggle color="success">Auto-save</mwc-toggle>
          </div>
        </div>
        <mwc-code-box
          title="Simple toggle switches"
          code='<!-- Basic toggle -->
<mwc-toggle>Enable notifications</mwc-toggle>

<!-- Pre-checked toggle with color -->
<mwc-toggle checked color="primary">Dark mode</mwc-toggle>

<!-- Success colored toggle -->
<mwc-toggle color="success">Auto-save</mwc-toggle>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Sizes Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Sizes
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;"
          >
            <mwc-toggle size="small"
              >Small toggle for compact interfaces</mwc-toggle
            >
            <mwc-toggle size="medium" checked
              >Medium toggle for standard use</mwc-toggle
            >
            <mwc-toggle size="large">Large toggle for emphasis</mwc-toggle>
          </div>
        </div>
        <mwc-code-box
          title="Toggle sizes"
          code='<!-- Small size -->
<mwc-toggle size="small">Small toggle for compact interfaces</mwc-toggle>

<!-- Medium size (default) -->
<mwc-toggle size="medium">Medium toggle for standard use</mwc-toggle>

<!-- Large size -->
<mwc-toggle size="large">Large toggle for emphasis</mwc-toggle>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Colors Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Colors
        </h2>
        <div style="margin-bottom: 24px;">
          <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 12px; color: var(--color-neutral-700);">
              Checked State
            </h4>
            <div
              style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;"
            >
              <mwc-toggle color="primary" checked>Primary</mwc-toggle>
              <mwc-toggle color="secondary" checked>Secondary</mwc-toggle>
              <mwc-toggle color="success" checked>Success</mwc-toggle>
              <mwc-toggle color="warning" checked>Warning</mwc-toggle>
              <mwc-toggle color="error" checked>Error</mwc-toggle>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; color: var(--color-neutral-700);">
              Unchecked State
            </h4>
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
        </div>
        <mwc-code-box
          title="Semantic colors"
          code='<!-- Primary color (default) -->
<mwc-toggle color="primary" checked>Primary</mwc-toggle>

<!-- Secondary color -->
<mwc-toggle color="secondary" checked>Secondary</mwc-toggle>

<!-- Success color -->
<mwc-toggle color="success" checked>Success</mwc-toggle>

<!-- Warning color -->
<mwc-toggle color="warning" checked>Warning</mwc-toggle>

<!-- Error color -->
<mwc-toggle color="error" checked>Error</mwc-toggle>'
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
            style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;"
          >
            <mwc-toggle>Default state (unchecked)</mwc-toggle>
            <mwc-toggle checked>Checked state</mwc-toggle>
            <mwc-toggle disabled>Disabled state</mwc-toggle>
            <mwc-toggle checked disabled>Checked and disabled</mwc-toggle>
          </div>
        </div>
        <mwc-code-box
          title="Toggle states"
          code="<!-- Default unchecked state -->
<mwc-toggle>Default state</mwc-toggle>

<!-- Checked state -->
<mwc-toggle checked>Checked state</mwc-toggle>

<!-- Disabled state -->
<mwc-toggle disabled>Disabled state</mwc-toggle>

<!-- Checked and disabled -->
<mwc-toggle checked disabled>Checked and disabled</mwc-toggle>"
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Interactive Examples Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Interactive Examples
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: flex; flex-direction: column; gap: 20px; max-width: 500px;"
          >
            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Real-time Status Updates
              </h4>
              <div style="display: flex; align-items: center; gap: 12px;">
                <mwc-toggle
                  id="status-toggle"
                  @mwc-toggle-change="${(e: CustomEvent) => {
                    console.log('Toggle changed:', e.detail);
                    const status = document.querySelector(
                      '#status-display',
                    ) as HTMLElement;
                    if (status) {
                      status.textContent = e.detail.checked
                        ? 'ONLINE'
                        : 'OFFLINE';
                      status.style.color = e.detail.checked
                        ? 'var(--color-success-600)'
                        : 'var(--color-error-600)';
                    }
                  }}"
                  color="primary"
                >
                  System Status
                </mwc-toggle>
                <span
                  id="status-display"
                  style="font-weight: bold; color: var(--color-error-600);"
                  >OFFLINE</span
                >
              </div>
            </div>

            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Confirmation Dialog
              </h4>
              <mwc-toggle
                @mwc-toggle-change="${(e: CustomEvent) => {
                  if (e.detail.checked) {
                    const confirmed = confirm(
                      'Are you sure you want to enable auto-sync? This will upload data automatically.',
                    );
                    if (!confirmed) {
                      (e.target as any).checked = false;
                    } else {
                      alert(
                        'Auto-sync enabled! Data will be synchronized automatically.',
                      );
                    }
                  }
                }}"
                color="warning"
              >
                Auto Sync (with confirmation)
              </mwc-toggle>
            </div>

            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Native Events
              </h4>
              <mwc-toggle
                @change="${(e: Event) => {
                  const toggle = e.target as any;
                  console.log('Native change event - checked:', toggle.checked);
                  console.log('Form element name:', toggle.name);
                }}"
                color="secondary"
                name="native-toggle"
              >
                Toggle with native events
              </mwc-toggle>
              <p
                style="margin: 8px 0 0; font-size: 14px; color: var(--color-neutral-600);"
              >
                Check console for native change events
              </p>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Interactive event handling"
          code='<!-- Real-time status updates -->
<mwc-toggle 
  id="status-toggle"
  onmwc-toggle-change="updateStatus"
  color="primary"
>
  System Status
</mwc-toggle>
<span id="status-display">OFFLINE</span>

<!-- Confirmation dialog -->
<mwc-toggle 
  onmwc-toggle-change="confirmAutoSync"
  color="warning"
>
  Auto Sync (with confirmation)
</mwc-toggle>

<!-- Native events -->
<mwc-toggle 
  onchange="handleNativeChange"
  color="secondary"
  name="native-toggle"
>
  Toggle with native events
</mwc-toggle>

<script>
function updateStatus(e) {
  const status = document.querySelector("#status-display");
  status.textContent = e.detail.checked ? "ONLINE" : "OFFLINE";
  status.style.color = e.detail.checked ? "green" : "red";
}

function confirmAutoSync(e) {
  if (e.detail.checked) {
    const confirmed = confirm("Enable auto-sync?");
    if (!confirmed) {
      e.target.checked = false;
    } else {
      alert("Auto-sync enabled!");
    }
  }
}

function handleNativeChange(e) {
  console.log("Native change - checked:", e.target.checked);
}
</script>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
