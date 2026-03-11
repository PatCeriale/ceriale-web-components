import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './modal.js';

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

// Basic Modal
export const Default: Story = {
  args: {
    title: 'Default Modal',
    open: true,
  },
  render: (args: any) => html`
    <custom-modal
      ?open="${args.open}"
      title="${args.title}"
      ?closeOnBackdrop="${args.closeOnBackdrop}"
      ?closeOnEscape="${args.closeOnEscape}"
    >
      <p>This is a basic modal with default settings.</p>
      <p>
        You can include any content here - text, forms, images, or other
        components.
      </p>
    </custom-modal>
  `,
};

// Modal with Footer Actions
export const WithFooter: Story = {
  args: {
    title: 'Confirm Action',
    open: true,
  },
  render: (args: any) => html`
    <custom-modal
      ?open="${args.open}"
      title="${args.title}"
      ?closeOnBackdrop="${args.closeOnBackdrop}"
      ?closeOnEscape="${args.closeOnEscape}"
    >
      <p>
        Are you sure you want to delete this item? This action cannot be undone.
      </p>

      <div
        slot="footer"
        style="display: flex; gap: 12px; justify-content: flex-end;"
      >
        <button
          style="padding: 8px 16px; border: 1px solid var(--color-grey-400, #ccc); background: transparent; border-radius: 4px; cursor: pointer;"
          @click="${(e: Event) => {
            const modal = (e.target as Element).closest('custom-modal');
            if (modal) (modal as any).close();
          }}"
        >
          Cancel
        </button>
        <button
          style="padding: 8px 16px; border: none; background: var(--color-error-600, #f44336); color: white; border-radius: 4px; cursor: pointer;"
          @click="${(e: Event) => {
            const modal = (e.target as Element).closest('custom-modal');
            if (modal) (modal as any).close();
          }}"
        >
          Delete
        </button>
      </div>
    </custom-modal>
  `,
};

// Form Modal
export const FormModal: Story = {
  args: {
    title: 'Contact Form',
    open: true,
    closeOnBackdrop: false,
  },
  render: (args: any) => html`
    <custom-modal
      ?open="${args.open}"
      title="${args.title}"
      ?closeOnBackdrop="${args.closeOnBackdrop}"
      ?closeOnEscape="${args.closeOnEscape}"
    >
      <form style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label
            for="name"
            style="display: block; margin-bottom: 4px; font-weight: 500;"
            >Name</label
          >
          <input
            id="name"
            type="text"
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
            type="email"
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
            rows="4"
            style="width: 100%; padding: 8px 12px; border: 1px solid var(--color-grey-400, #ccc); border-radius: 4px; resize: vertical;"
            placeholder="Enter your message"
          ></textarea>
        </div>
      </form>

      <div
        slot="footer"
        style="display: flex; gap: 12px; justify-content: flex-end;"
      >
        <button
          style="padding: 8px 16px; border: 1px solid var(--color-grey-400, #ccc); background: transparent; border-radius: 4px; cursor: pointer;"
          @click="${(e: Event) => {
            const modal = (e.target as Element).closest('custom-modal');
            if (modal) (modal as any).close();
          }}"
        >
          Cancel
        </button>
        <button
          style="padding: 8px 16px; border: none; background: var(--color-primary-600, #6750a4); color: white; border-radius: 4px; cursor: pointer;"
          @click="${(e: Event) => {
            // Handle form submission here
            console.log('Form submitted!');
            const modal = (e.target as Element).closest('custom-modal');
            if (modal) (modal as any).close();
          }}"
        >
          Send Message
        </button>
      </div>
    </custom-modal>
  `,
};

// Large Content Modal
export const LargeContent: Story = {
  args: {
    title: 'Terms of Service',
    open: true,
  },
  render: (args: any) => html`
    <custom-modal
      ?open="${args.open}"
      title="${args.title}"
      ?closeOnBackdrop="${args.closeOnBackdrop}"
      ?closeOnEscape="${args.closeOnEscape}"
    >
      <div style="max-height: 400px; overflow-y: auto;">
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing and using this service, you accept and agree to be bound
          by the terms and provision of this agreement.
        </p>

        <h3>2. Use License</h3>
        <p>
          Permission is granted to temporarily download one copy of the
          materials on Company's web site for personal, non-commercial
          transitory viewing only.
        </p>

        <h3>3. Disclaimer</h3>
        <p>
          The materials on Company's web site are provided on an 'as is' basis.
          Company makes no warranties, expressed or implied.
        </p>

        <h3>4. Limitations</h3>
        <p>
          In no event shall Company or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit).
        </p>

        <h3>5. Privacy Policy</h3>
        <p>
          Your privacy is important to us. Our Privacy Policy explains how we
          collect, use, and protect your information when you use our service.
        </p>

        <h3>6. Changes to Terms</h3>
        <p>
          Company may revise these terms of service for its web site at any time
          without notice.
        </p>

        <h3>7. Contact Information</h3>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at legal@company.com.
        </p>
      </div>

      <div slot="footer" style="display: flex; justify-content: center;">
        <button
          style="padding: 12px 24px; border: none; background: var(--color-primary-600, #6750a4); color: white; border-radius: 4px; cursor: pointer;"
          @click="${(e: Event) => {
            const modal = (e.target as Element).closest('custom-modal');
            if (modal) (modal as any).close();
          }}"
        >
          I Agree
        </button>
      </div>
    </custom-modal>
  `,
};

// Programmatic Control Demo
export const ProgrammaticControl: Story = {
  args: {
    title: 'Controlled Modal',
    open: false,
  },
  render: (args: any) => html`
    <div style="padding: 20px;">
      <button
        style="padding: 12px 24px; border: none; background: var(--color-primary-600, #6750a4); color: white; border-radius: 4px; cursor: pointer; margin-right: 12px;"
        @click="${() => {
          const modal = document.querySelector('#controlled-modal');
          if (modal) (modal as any).openModal();
        }}"
      >
        Open Modal
      </button>

      <button
        style="padding: 12px 24px; border: 1px solid var(--color-grey-400, #ccc); background: transparent; border-radius: 4px; cursor: pointer;"
        @click="${() => {
          const modal = document.querySelector('#controlled-modal');
          if (modal) (modal as any).close();
        }}"
      >
        Close Modal
      </button>

      <custom-modal
        id="controlled-modal"
        ?open="${args.open}"
        title="${args.title}"
        ?closeOnBackdrop="${args.closeOnBackdrop}"
        ?closeOnEscape="${args.closeOnEscape}"
        @modal-open="${() => console.log('Modal opened!')}"
        @modal-close="${() => console.log('Modal closed!')}"
      >
        <p>
          This modal is controlled programmatically using the
          <code>openModal()</code> and <code>close()</code> methods.
        </p>
        <p>Check the console to see the modal events being dispatched.</p>

        <div slot="footer" style="text-align: center;">
          <button
            style="padding: 8px 16px; border: 1px solid var(--color-grey-400, #ccc); background: transparent; border-radius: 4px; cursor: pointer;"
            @click="${(e: Event) => {
              const modal = (e.target as Element).closest('custom-modal');
              if (modal) (modal as any).close();
            }}"
          >
            Close from Inside
          </button>
        </div>
      </custom-modal>
    </div>
  `,
};

// Interactive Demo with Icon Detail Viewer
export const IconDetailDemo: Story = {
  args: {
    title: 'Icon Details',
    open: true,
  },
  render: (args: any) => html`
    <custom-modal
      ?open="${args.open}"
      title="${args.title}"
      ?closeOnBackdrop="${args.closeOnBackdrop}"
      ?closeOnEscape="${args.closeOnEscape}"
    >
      <icon-detail-viewer></icon-detail-viewer>
    </custom-modal>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Example showing the modal being used with the icon detail viewer component, demonstrating real-world usage.',
      },
    },
  },
};
