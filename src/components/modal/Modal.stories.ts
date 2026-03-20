import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './modal.js';
import '../code-box/code-box';
import '../button/button';
import '../icons/action-icons';

const meta: Meta = {
  title: 'Components/Modal',
  parameters: {
    docs: {
      description: {
        component: `
## Modal Component

A flexible modal dialogs component that provides overlay functionality for forms, confirmations, and detailed content views.

### Features

- **Accessibility**: ARIA attributes, focus management, keyboard navigation
- **Customizable**: Multiple slots for header, body, and footer content
- **Interactive**: Backdrop click and escape key to close
- **Animated**: Smooth open/close transitions
- **Responsive**: Adapts to different screen sizes

### Usage

\`\`\`html
<custom-modal title="Modal Title" open>
  <p>Modal content goes here</p>
  <div slot="footer">
    <button>Cancel</button>
    <button>Confirm</button>
  </div>
</custom-modal>
\`\`\`

### Programmatic Control

\`\`\`javascript
const modal = document.querySelector('custom-modal');
modal.openModal(); // Open the modal
modal.close(); // Close the modal
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the modal is visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Title displayed in the modal header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    open: false,
    title: 'Modal Title',
    closeOnBackdrop: true,
    closeOnEscape: true,
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
            style="padding: 20px; background: var(--color-grey-50); border-radius: 8px;"
          >
            <mwc-button
              variant="contained"
              color="primary"
              @click="${() => {
                const modal = document.querySelector('#basic-modal');
                if (modal) (modal as any).openModal();
              }}"
            >
              Open Basic Modal
            </mwc-button>

            <custom-modal
              id="basic-modal"
              title="Welcome"
              closeOnBackdrop
              closeOnEscape
            >
              <p>This is a basic modal with default settings.</p>
              <p>
                You can include any content here - text, forms, images, or other
                components.
              </p>
              <p>Click outside the modal or press Escape to close it.</p>
            </custom-modal>
          </div>
        </div>
        <mwc-code-box
          title="Basic modal setup"
          code='<!-- Trigger button -->
<mwc-button onclick="openModal()">Open Modal</mwc-button>

<!-- Modal component -->
<custom-modal
  id="my-modal"
  title="Welcome"
  closeOnBackdrop
  closeOnEscape
>
  <p>This is a basic modal with default settings.</p>
  <p>You can include any content here - text, forms, images, or other components.</p>
</custom-modal>

<script>
function openModal() {
  const modal = document.querySelector("#my-modal");
  modal.openModal();
}
</script>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Confirmation Dialog Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Confirmation Dialog
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="padding: 20px; background: var(--color-grey-50); border-radius: 8px;"
          >
            <mwc-button
              variant="outlined"
              color="error"
              @click="${() => {
                const modal = document.querySelector('#confirm-modal');
                if (modal) (modal as any).openModal();
              }}"
            >
              Delete Item
            </mwc-button>

            <custom-modal
              id="confirm-modal"
              title="Confirm Deletion"
              closeOnBackdrop
              closeOnEscape
            >
              <p>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>

              <div
                slot="footer"
                style="display: flex; gap: 12px; justify-content: flex-end;"
              >
                <mwc-button
                  variant="outlined"
                  @click="${(e: Event) => {
                    const modal = (e.target as Element).closest('custom-modal');
                    if (modal) (modal as any).close();
                  }}"
                >
                  Cancel
                </mwc-button>
                <mwc-button
                  variant="contained"
                  color="error"
                  @click="${(e: Event) => {
                    alert('Item deleted!');
                    const modal = (e.target as Element).closest('custom-modal');
                    if (modal) (modal as any).close();
                  }}"
                >
                  Delete
                </mwc-button>
              </div>
            </custom-modal>
          </div>
        </div>
        <mwc-code-box
          title="Modal with footer actions"
          code='<custom-modal
  id="confirm-modal"
  title="Confirm Deletion"
  closeOnBackdrop
  closeOnEscape
>
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>

  <!-- Footer slot for actions -->
  <div slot="footer" style="display: flex; gap: 12px; justify-content: flex-end;">
    <mwc-button variant="outlined" onclick="closeModal()">Cancel</mwc-button>
    <mwc-button variant="contained" color="error" onclick="deleteItem()">Delete</mwc-button>
  </div>
</custom-modal>

<script>
function deleteItem() {
  // Handle deletion logic
  closeModal();
}

function closeModal() {
  document.querySelector("#confirm-modal").close();
}
</script>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Form Modal Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Form Modal
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="padding: 20px; background: var(--color-grey-50); border-radius: 8px;"
          >
            <mwc-button
              variant="contained"
              @click="${() => {
                const modal = document.querySelector('#form-modal');
                if (modal) (modal as any).openModal();
              }}"
            >
              Open Contact Form
            </mwc-button>

            <custom-modal
              id="form-modal"
              title="Contact Us"
              ?closeOnBackdrop="${false}"
              closeOnEscape
            >
              <form
                style="display: flex; flex-direction: column; gap: 16px;"
                @submit="${(e: Event) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  console.log('Form data:', Object.fromEntries(formData));
                  alert('Message sent! Check console for form data.');
                  const modal = (e.target as Element).closest('custom-modal');
                  if (modal) (modal as any).close();
                }}"
              >
                <div>
                  <label
                    for="name"
                    style="display: block; margin-bottom: 4px; font-weight: 500;"
                    >Name</label
                  >
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    style="width: 100%; padding: 8px 12px; border: 1px solid var(--color-grey-400, #ccc); border-radius: 4px;"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    style="display: block; margin-bottom: 4px; font-weight: 500;"
                    >Email</label
                  >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    style="width: 100%; padding: 8px 12px; border: 1px solid var(--color-grey-400, #ccc); border-radius: 4px;"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    style="display: block; margin-bottom: 4px; font-weight: 500;"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    style="width: 100%; padding: 8px 12px; border: 1px solid var(--color-grey-400, #ccc); border-radius: 4px; resize: vertical;"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div
                  slot="footer"
                  style="display: flex; gap: 12px; justify-content: flex-end;"
                >
                  <mwc-button
                    type="button"
                    variant="outlined"
                    @click="${(e: Event) => {
                      const modal = (e.target as Element).closest(
                        'custom-modal',
                      );
                      if (modal) (modal as any).close();
                    }}"
                  >
                    Cancel
                  </mwc-button>
                  <mwc-button type="submit" variant="contained" color="primary">
                    Send Message
                  </mwc-button>
                </div>
              </form>
            </custom-modal>
          </div>
        </div>
        <mwc-code-box
          title="Modal with form"
          code='<custom-modal
  id="form-modal"
  title="Contact Us"
  closeOnBackdrop="false"
  closeOnEscape
>
  <form onsubmit="handleSubmit(event)">
    <div>
      <label for="name">Name</label>
      <input id="name" name="name" type="text" required placeholder="Enter your name" />
    </div>

    <div>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required placeholder="Enter your email" />
    </div>

    <div>
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required placeholder="Enter your message"></textarea>
    </div>

    <div slot="footer" style="display: flex; gap: 12px; justify-content: flex-end;">
      <mwc-button type="button" variant="outlined" onclick="closeModal()">Cancel</mwc-button>
      <mwc-button type="submit" variant="contained" color="primary">Send Message</mwc-button>
    </div>
  </form>
</custom-modal>

<script>
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log("Form data:", Object.fromEntries(formData));
  // Send form data to server
  closeModal();
}
</script>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Large Content Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Large Content
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="padding: 20px; background: var(--color-grey-50); border-radius: 8px;"
          >
            <mwc-button
              variant="outlined"
              @click="${() => {
                const modal = document.querySelector('#content-modal');
                if (modal) (modal as any).openModal();
              }}"
            >
              View Terms of Service
            </mwc-button>

            <custom-modal
              id="content-modal"
              title="Terms of Service"
              closeOnBackdrop
              closeOnEscape
            >
              <div
                style="max-height: 400px; overflow-y: auto; padding-right: 8px;"
              >
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using this service, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>

                <h3>2. Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials on Company's web site for personal, non-commercial
                  transitory viewing only.
                </p>

                <h3>3. Disclaimer</h3>
                <p>
                  The materials on Company's web site are provided on an 'as is'
                  basis. Company makes no warranties, expressed or implied.
                </p>

                <h3>4. Limitations</h3>
                <p>
                  In no event shall Company or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit).
                </p>

                <h3>5. Privacy Policy</h3>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains
                  how we collect, use, and protect your information when you use
                  our service.
                </p>

                <h3>6. Changes to Terms</h3>
                <p>
                  Company may revise these terms of service for its web site at
                  any time without notice.
                </p>

                <h3>7. Contact Information</h3>
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us at legal@company.com.
                </p>
              </div>

              <div
                slot="footer"
                style="display: flex; justify-content: center;"
              >
                <mwc-button
                  variant="contained"
                  @click="${(e: Event) => {
                    const modal = (e.target as Element).closest('custom-modal');
                    if (modal) (modal as any).close();
                  }}"
                >
                  I Agree
                </mwc-button>
              </div>
            </custom-modal>
          </div>
        </div>
        <mwc-code-box
          title="Modal with scrollable content"
          code='<custom-modal
  id="content-modal"
  title="Terms of Service"
  closeOnBackdrop
  closeOnEscape
>
  <!-- Scrollable content area -->
  <div style="max-height: 400px; overflow-y: auto;">
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.</p>

    <h3>2. Use License</h3>
    <p>Permission is granted to temporarily download one copy of the materials...</p>

    <!-- More content sections -->
  </div>

  <div slot="footer" style="display: flex; justify-content: center;">
    <mwc-button variant="contained" onclick="agreeToTerms()">I Agree</mwc-button>
  </div>
</custom-modal>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Programmatic Control Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Programmatic Control
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="padding: 20px; background: var(--color-grey-50); border-radius: 8px;"
          >
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <mwc-button
                variant="contained"
                @click="${() => {
                  const modal = document.querySelector('#controlled-modal');
                  if (modal) (modal as any).openModal();
                }}"
              >
                Open Modal
              </mwc-button>

              <mwc-button
                variant="outlined"
                @click="${() => {
                  const modal = document.querySelector('#controlled-modal');
                  if (modal) (modal as any).close();
                }}"
              >
                Close Modal
              </mwc-button>
            </div>

            <custom-modal
              id="controlled-modal"
              title="Controlled Modal"
              closeOnBackdrop
              closeOnEscape
              @modal-open="${() => console.log('Modal opened!')}"
              @modal-close="${() => console.log('Modal closed!')}"
            >
              <p>
                This modal is controlled programmatically using the
                <code>openModal()</code> and <code>close()</code> methods.
              </p>
              <p>
                Check the browser console to see the modal events being
                dispatched.
              </p>

              <div slot="footer" style="text-align: center;">
                <mwc-button
                  variant="outlined"
                  @click="${(e: Event) => {
                    const modal = (e.target as Element).closest('custom-modal');
                    if (modal) (modal as any).close();
                  }}"
                >
                  Close from Inside
                </mwc-button>
              </div>
            </custom-modal>
          </div>
        </div>
        <mwc-code-box
          title="Programmatic modal control"
          code='<!-- Control buttons -->
<mwc-button onclick="openModal()">Open Modal</mwc-button>
<mwc-button onclick="closeModal()">Close Modal</mwc-button>

<!-- Modal with event listeners -->
<custom-modal
  id="controlled-modal"
  title="Controlled Modal"
  onmodal-open="console.log(&rsquo;Modal opened!&rsquo;)"
  onmodal-close="console.log(&rsquo;Modal closed!&rsquo;)"
>
  <p>This modal is controlled programmatically using the openModal() and close() methods.</p>
  
  <div slot="footer">
    <mwc-button onclick="closeFromInside()">Close from Inside</mwc-button>
  </div>
</custom-modal>

<script>
const modal = document.querySelector("#controlled-modal");

function openModal() {
  modal.openModal();
}

function closeModal() {
  modal.close();
}

function closeFromInside() {
  modal.close();
}

// Listen for modal events
modal.addEventListener("modal-open", () => {
  console.log("Modal opened!");
});

modal.addEventListener("modal-close", () => {
  console.log("Modal closed!");
});
</script>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Advanced Usage Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Advanced Usage
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="padding: 20px; background: var(--color-grey-50); border-radius: 8px;"
          >
            <mwc-button
              variant="contained"
              color="secondary"
              @click="${() => {
                const modal = document.querySelector('#advanced-modal');
                if (modal) (modal as any).openModal();
              }}"
            >
              Open Advanced Modal
            </mwc-button>

            <custom-modal
              id="advanced-modal"
              title="Advanced Modal Features"
              closeOnBackdrop
              closeOnEscape
            >
              <div style="margin-bottom: 16px;">
                <h4>Modal Configuration:</h4>
                <ul>
                  <li>
                    <strong>closeOnBackdrop:</strong> Close when clicking
                    outside the modal
                  </li>
                  <li>
                    <strong>closeOnEscape:</strong> Close when pressing the
                    Escape key
                  </li>
                  <li>
                    <strong>Custom Events:</strong> Listen for modal-open and
                    modal-close events
                  </li>
                  <li>
                    <strong>Slots:</strong> Header, content (default), and
                    footer slots available
                  </li>
                </ul>
              </div>

              <div
                style="padding: 12px; background: var(--color-blue-50); border-left: 4px solid var(--color-blue-500); margin-bottom: 16px;"
              >
                <strong>Tip:</strong> For forms, set closeOnBackdrop="false" to
                prevent accidental data loss.
              </div>

              <icon-detail-viewer></icon-detail-viewer>

              <div
                slot="footer"
                style="display: flex; gap: 12px; justify-content: space-between;"
              >
                <mwc-button
                  variant="text"
                  @click="${() => alert('Help clicked!')}"
                >
                  Help
                </mwc-button>
                <mwc-button
                  variant="contained"
                  @click="${(e: Event) => {
                    const modal = (e.target as Element).closest('custom-modal');
                    if (modal) (modal as any).close();
                  }}"
                >
                  Done
                </mwc-button>
              </div>
            </custom-modal>
          </div>
        </div>
        <mwc-code-box
          title="Advanced modal with nested components"
          code='<custom-modal
  id="advanced-modal"
  title="Advanced Modal Features"
  closeOnBackdrop
  closeOnEscape
  onmodal-open="handleModalOpen"
  onmodal-close="handleModalClose"
>
  <!-- Main content -->
  <div>
    <h4>Modal Configuration:</h4>
    <ul>
      <li>closeOnBackdrop: Close when clicking outside</li>
      <li>closeOnEscape: Close when pressing Escape</li>
      <li>Custom Events: Listen for open/close events</li>
      <li>Slots: Header, content, and footer available</li>
    </ul>
  </div>

  <!-- Nested component -->
  <icon-detail-viewer></icon-detail-viewer>

  <!-- Footer with multiple actions -->
  <div slot="footer" style="display: flex; gap: 12px; justify-content: space-between;">
    <mwc-button variant="text" onclick="showHelp()">Help</mwc-button>
    <mwc-button variant="contained" onclick="closeModal()">Done</mwc-button>
  </div>
</custom-modal>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
