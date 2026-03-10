import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './input';

const meta: Meta = {
  title: 'Components/Input',
  component: 'mwc-input',
  parameters: {
    docs: {
      description: {
        component:
          'Text input field with floating labels, validation, and multiple variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'standard'],
      description: 'Visual style variant of the input',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the input field',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'HTML input type',
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    value: {
      control: { type: 'text' },
      description: 'Current value of the input',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text displayed below the input',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error text displayed when in error state',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Whether the input is read-only',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the input is in error state',
    },
  },
  args: {
    variant: 'outlined',
    size: 'medium',
    type: 'text',
    label: 'Label',
    placeholder: 'Enter text...',
    value: '',
    required: false,
    disabled: false,
    readonly: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
  render: (args) => html`
    <mwc-input
      variant="${args.variant}"
      size="${args.size}"
      type="${args.type}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      helper-text="${args.helperText || ''}"
      error-text="${args.errorText || ''}"
      ?required="${args.required}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?error="${args.error}"
    ></mwc-input>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: grid; gap: 24px; max-width: 400px;">
      <mwc-input
        variant="outlined"
        label="Outlined Input"
        placeholder="Enter text..."
        helper-text="This is an outlined input variant"
      ></mwc-input>

      <mwc-input
        variant="filled"
        label="Filled Input"
        placeholder="Enter text..."
        helper-text="This is a filled input variant"
      ></mwc-input>

      <mwc-input
        variant="standard"
        label="Standard Input"
        placeholder="Enter text..."
        helper-text="This is a standard input variant"
      ></mwc-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different visual variants of the input component.',
      },
    },
  },
};

export const InputTypes: Story = {
  render: () => html`
    <div style="display: grid; gap: 16px; max-width: 400px;">
      <mwc-input
        type="text"
        label="Text Input"
        placeholder="Enter any text"
        helper-text="Standard text input"
      ></mwc-input>

      <mwc-input
        type="email"
        label="Email"
        placeholder="your.email@example.com"
        helper-text="Email validation will be applied"
      ></mwc-input>

      <mwc-input
        type="password"
        label="Password"
        placeholder="Enter secure password"
        helper-text="Password will be masked"
      ></mwc-input>

      <mwc-input
        type="number"
        label="Number"
        placeholder="123"
        helper-text="Only numeric values allowed"
      ></mwc-input>

      <mwc-input
        type="tel"
        label="Phone"
        placeholder="+1 (555) 123-4567"
        helper-text="Phone number input"
      ></mwc-input>

      <mwc-input
        type="url"
        label="Website"
        placeholder="https://example.com"
        helper-text="URL validation will be applied"
      ></mwc-input>

      <mwc-input
        type="search"
        label="Search"
        placeholder="Search for something..."
        helper-text="Search input with special styling"
      ></mwc-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different HTML input types supported by the component.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: grid; gap: 16px; max-width: 400px;">
      <mwc-input
        size="small"
        label="Small Input"
        placeholder="Small size input"
        helper-text="Compact input for tight spaces"
      ></mwc-input>

      <mwc-input
        size="medium"
        label="Medium Input"
        placeholder="Medium size input"
        helper-text="Standard size for most use cases"
      ></mwc-input>

      <mwc-input
        size="large"
        label="Large Input"
        placeholder="Large size input"
        helper-text="Larger input for emphasis and mobile"
      ></mwc-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of input fields for various use cases.',
      },
    },
  },
};

export const States: Story = {
  render: () => html`
    <div style="display: grid; gap: 16px; max-width: 400px;">
      <mwc-input
        label="Normal State"
        placeholder="Regular input"
        helper-text="This is a normal input field"
      ></mwc-input>

      <mwc-input
        label="Required Field"
        placeholder="This field is required"
        required
        helper-text="This field is required"
      ></mwc-input>

      <mwc-input
        label="Disabled Input"
        placeholder="Cannot edit this"
        value="Disabled value"
        disabled
        helper-text="This input is disabled"
      ></mwc-input>

      <mwc-input
        label="Read-only Input"
        placeholder="Cannot edit this"
        value="Read-only value"
        readonly
        helper-text="This input is read-only"
      ></mwc-input>

      <mwc-input
        label="Error State"
        placeholder="Enter valid email"
        value="invalid-email"
        error
        error-text="Please enter a valid email address"
      ></mwc-input>

      <mwc-input
        label="With Value"
        value="Pre-filled value"
        helper-text="Input with existing value"
      ></mwc-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Different states including required, disabled, read-only, and error states.',
      },
    },
  },
};

export const Validation: Story = {
  render: () => html`
    <form
      style="display: grid; gap: 16px; max-width: 400px;"
      @submit="${(e: Event) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log('Form data:', Object.fromEntries(formData));
        alert('Form submitted! Check console for data.');
      }}"
    >
      <mwc-input
        name="username"
        label="Username"
        placeholder="Enter username"
        required
        helper-text="Must be at least 3 characters"
      ></mwc-input>

      <mwc-input
        name="email"
        type="email"
        label="Email Address"
        placeholder="your.email@example.com"
        required
        helper-text="We'll never share your email"
      ></mwc-input>

      <mwc-input
        name="phone"
        type="tel"
        label="Phone Number"
        placeholder="+1 (555) 123-4567"
        helper-text="Optional field"
      ></mwc-input>

      <mwc-input
        name="website"
        type="url"
        label="Website"
        placeholder="https://yoursite.com"
        helper-text="Your personal or company website"
      ></mwc-input>

      <button
        type="submit"
        style="padding: 12px; margin-top: 8px; border: none; border-radius: 4px; background: var(--color-primary-500); color: white; cursor: pointer;"
      >
        Submit Form
      </button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Form validation example with required fields and different input types.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => html`
    <div style="display: grid; gap: 16px; max-width: 400px;">
      <mwc-input
        label="Real-time Feedback"
        placeholder="Type something..."
        helper-text="Character count will appear as you type"
        @mwc-input="${(e: CustomEvent) => {
          const input = e.target as any;
          const length = e.detail.value.length;
          if (input?.setAttribute) {
            input.setAttribute('helper-text', `${length} characters entered`);
          }
        }}"
      ></mwc-input>

      <mwc-input
        label="Focus/Blur Events"
        placeholder="Focus and blur this input"
        helper-text="Watch the console for focus events"
        @mwc-focus="${() => console.log('Input focused')}"
        @mwc-blur="${() => console.log('Input blurred')}"
      ></mwc-input>

      <mwc-input
        label="Enter Key Handler"
        placeholder="Press Enter to submit"
        helper-text="Press Enter to see alert"
        @mwc-enter="${(e: CustomEvent) => {
          alert(`You entered: ${e.detail.value}`);
        }}"
      ></mwc-input>

      <mwc-input
        label="Email Validation"
        type="email"
        placeholder="Enter email address"
        helper-text="Email format validation"
        @mwc-input="${(e: CustomEvent) => {
          const input = e.target as any;
          const value = e.detail.value;
          const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

          if (input && value && !isValid) {
            input.error = true;
            input.setAttribute(
              'error-text',
              'Please enter a valid email address',
            );
          } else if (input) {
            input.error = false;
            input.setAttribute('error-text', '');
          }
        }}"
      ></mwc-input>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive examples showing event handling and real-time validation.',
      },
    },
  },
};
