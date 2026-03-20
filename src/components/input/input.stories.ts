import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './input';
import '../code-box/code-box';
import '../icons/status-icons';

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
  render: () => html`
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      <!-- Basic Usage Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Basic Usage
        </h2>
        <div style="margin-bottom: 24px; max-width: 400px;">
          <mwc-input
            variant="outlined"
            label="Email Address"
            placeholder="your.email@example.com"
            helper-text="We'll never share your email with anyone else"
          ></mwc-input>
        </div>
        <mwc-code-box
          title="Simple input field"
          code='<mwc-input
  variant="outlined"
  label="Email Address"
  placeholder="your.email@example.com"
  helper-text="We&rsquo;ll never share your email with anyone else"
></mwc-input>'
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
          <div style="display: grid; gap: 24px; max-width: 600px;">
            <mwc-input
              variant="outlined"
              label="Outlined Input"
              placeholder="Enter text..."
              helper-text="Clear border definition with floating label"
            ></mwc-input>

            <mwc-input
              variant="filled"
              label="Filled Input"
              placeholder="Enter text..."
              helper-text="Subtle background fill for form grouping"
            ></mwc-input>

            <mwc-input
              variant="standard"
              label="Standard Input"
              placeholder="Enter text..."
              helper-text="Minimal underline design for clean interfaces"
            ></mwc-input>
          </div>
        </div>
        <mwc-code-box
          title="Input variants"
          code='<!-- Outlined variant (default) -->
<mwc-input
  variant="outlined"
  label="Outlined Input"
  placeholder="Enter text..."
  helper-text="Clear border definition with floating label"
></mwc-input>

<!-- Filled variant -->
<mwc-input
  variant="filled"
  label="Filled Input"
  placeholder="Enter text..."
  helper-text="Subtle background fill for form grouping"
></mwc-input>

<!-- Standard variant -->
<mwc-input
  variant="standard"
  label="Standard Input"
  placeholder="Enter text..."
  helper-text="Minimal underline design for clean interfaces"
></mwc-input>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Input Types Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Input Types
        </h2>
        <div style="margin-bottom: 24px;">
          <div
            style="display: grid; gap: 16px; max-width: 500px; grid-template-columns: 1fr 1fr;"
          >
            <mwc-input
              type="text"
              label="Text"
              placeholder="Any text"
              helper-text="Standard text input"
            ></mwc-input>

            <mwc-input
              type="email"
              label="Email"
              placeholder="user@example.com"
              helper-text="Email validation"
            ></mwc-input>

            <mwc-input
              type="password"
              label="Password"
              placeholder="Secure password"
              helper-text="Masked input"
            ></mwc-input>

            <mwc-input
              type="number"
              label="Number"
              placeholder="123"
              helper-text="Numeric only"
            ></mwc-input>

            <mwc-input
              type="tel"
              label="Phone"
              placeholder="+1 (555) 123-4567"
              helper-text="Phone number"
            ></mwc-input>

            <mwc-input
              type="url"
              label="Website"
              placeholder="https://example.com"
              helper-text="URL validation"
            ></mwc-input>
          </div>
        </div>
        <mwc-code-box
          title="Different HTML input types"
          code='<!-- Text input -->
<mwc-input type="text" label="Text" placeholder="Any text"></mwc-input>

<!-- Email with validation -->
<mwc-input type="email" label="Email" placeholder="user@example.com"></mwc-input>

<!-- Password with masking -->
<mwc-input type="password" label="Password" placeholder="Secure password"></mwc-input>

<!-- Number input -->
<mwc-input type="number" label="Number" placeholder="123"></mwc-input>

<!-- Phone number -->
<mwc-input type="tel" label="Phone" placeholder="+1 (555) 123-4567"></mwc-input>

<!-- URL with validation -->
<mwc-input type="url" label="Website" placeholder="https://example.com"></mwc-input>'
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
          <div style="display: grid; gap: 16px; max-width: 400px;">
            <mwc-input
              size="small"
              label="Small Input"
              placeholder="Compact input"
              helper-text="For tight spaces and dense layouts"
            ></mwc-input>

            <mwc-input
              size="medium"
              label="Medium Input"
              placeholder="Standard input"
              helper-text="Default size for most use cases"
            ></mwc-input>

            <mwc-input
              size="large"
              label="Large Input"
              placeholder="Prominent input"
              helper-text="For emphasis and mobile interfaces"
            ></mwc-input>
          </div>
        </div>
        <mwc-code-box
          title="Input sizes"
          code='<!-- Small size -->
<mwc-input
  size="small"
  label="Small Input"
  placeholder="Compact input"
  helper-text="For tight spaces and dense layouts"
></mwc-input>

<!-- Medium size (default) -->
<mwc-input
  size="medium"
  label="Medium Input"
  placeholder="Standard input"
  helper-text="Default size for most use cases"
></mwc-input>

<!-- Large size -->
<mwc-input
  size="large"
  label="Large Input"
  placeholder="Prominent input"
  helper-text="For emphasis and mobile interfaces"
></mwc-input>'
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
            style="display: grid; gap: 16px; max-width: 500px; grid-template-columns: 1fr 1fr;"
          >
            <mwc-input
              label="Normal State"
              placeholder="Regular input"
              helper-text="Standard interactive input"
            ></mwc-input>

            <mwc-input
              label="Required Field"
              placeholder="Required input"
              required
              helper-text="This field is required"
            ></mwc-input>

            <mwc-input
              label="Disabled Input"
              placeholder="Cannot edit"
              value="Disabled value"
              disabled
              helper-text="Input is disabled"
            ></mwc-input>

            <mwc-input
              label="Read-only Input"
              value="Read-only value"
              readonly
              helper-text="Input is read-only"
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
        </div>
        <mwc-code-box
          title="Input states"
          code='<!-- Normal state -->
<mwc-input label="Normal State" placeholder="Regular input"></mwc-input>

<!-- Required field -->
<mwc-input label="Required Field" required helper-text="This field is required"></mwc-input>

<!-- Disabled state -->
<mwc-input label="Disabled Input" value="Disabled value" disabled></mwc-input>

<!-- Read-only state -->
<mwc-input label="Read-only Input" value="Read-only value" readonly></mwc-input>

<!-- Error state -->
<mwc-input 
  label="Error State" 
  value="invalid-email" 
  error 
  error-text="Please enter a valid email address"
></mwc-input>'
          language="html"
        ></mwc-code-box>
      </section>

      <!-- Validation Section -->
      <section style="margin-bottom: 48px;">
        <h2
          style="color: var(--color-neutral-800, #424242); margin-bottom: 16px; font-size: 1.75rem; font-weight: 600;"
        >
          Form Validation
        </h2>
        <div style="margin-bottom: 24px;">
          <form
            style="display: grid; gap: 16px; max-width: 400px; padding: 24px; background: var(--color-grey-50); border-radius: 8px;"
            @submit="${(e: Event) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              console.log('Form data:', Object.fromEntries(formData));
              alert('Form submitted! Check console for data.');
            }}"
          >
            <h4 style="margin: 0 0 8px; color: var(--color-neutral-700);">
              User Registration
            </h4>

            <mwc-input
              name="username"
              label="Username"
              placeholder="Choose username"
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
              helper-text="Optional field for account recovery"
            ></mwc-input>

            <button
              type="submit"
              style="padding: 12px; border: none; border-radius: 4px; background: var(--color-primary-500); color: white; cursor: pointer; font-weight: 500;"
            >
              Create Account
            </button>
          </form>
        </div>
        <mwc-code-box
          title="Form with validation"
          code='<form @submit="handleSubmit">
  <mwc-input
    name="username"
    label="Username"
    placeholder="Choose username"
    required
    helper-text="Must be at least 3 characters"
  ></mwc-input>

  <mwc-input
    name="email"
    type="email"
    label="Email Address"
    placeholder="your.email@example.com"
    required
    helper-text="We&rsquo;ll never share your email"
  ></mwc-input>

  <button type="submit">Create Account</button>
</form>

<script>
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log("Form data:", Object.fromEntries(formData));
}
</script>'
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
          <div style="display: grid; gap: 20px; max-width: 500px;">
            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Real-time Character Count
              </h4>
              <mwc-input
                label="Character Counter"
                placeholder="Type to see count..."
                helper-text="0 characters entered"
                @mwc-input="${(e: CustomEvent) => {
                  const input = e.target as any;
                  const length = e.detail.value.length;
                  if (input?.setAttribute) {
                    input.setAttribute(
                      'helper-text',
                      `${length} characters entered`,
                    );
                  }
                }}"
              ></mwc-input>
            </div>

            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Live Email Validation
              </h4>
              <mwc-input
                label="Email Validation"
                type="email"
                placeholder="Enter email address"
                helper-text="Email format will be validated as you type"
                @mwc-input="${(e: CustomEvent) => {
                  const input = e.target as any;
                  const value = e.detail.value;
                  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);

                  if (input && value && !isValid) {
                    input.error = true;
                    input.setAttribute(
                      'error-text',
                      'Please enter a valid email address',
                    );
                  } else if (input) {
                    input.error = false;
                    input.setAttribute('error-text', '');
                    input.setAttribute(
                      'helper-text',
                      value && isValid
                        ? 'Valid email format! ✓'
                        : 'Email format will be validated as you type',
                    );
                  }
                }}"
              ></mwc-input>
            </div>

            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Enter Key Handler
              </h4>
              <mwc-input
                label="Quick Submit"
                placeholder="Press Enter to submit"
                helper-text="Press Enter key to trigger action"
                @mwc-enter="${(e: CustomEvent) => {
                  if (e.detail.value.trim()) {
                    alert(`You entered: ${e.detail.value}`);
                  }
                }}"
              ></mwc-input>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Interactive event handling"
          code='<!-- Character counter -->
<mwc-input
  label="Character Counter"
  placeholder="Type to see count..."
  @mwc-input="handleInput"
></mwc-input>

<!-- Email validation -->
<mwc-input
  label="Email Validation"
  type="email"
  placeholder="Enter email address"
  @mwc-input="validateEmail"
></mwc-input>

<!-- Enter key handler -->
<mwc-input
  label="Quick Submit"
  placeholder="Press Enter to submit"
  @mwc-enter="handleEnterKey"
></mwc-input>

<script>
function handleInput(e) {
  const length = e.detail.value.length;
  e.target.setAttribute("helper-text", length + " characters entered");
}

function validateEmail(e) {
  const isValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e.detail.value);
  e.target.error = !isValid && e.detail.value;
}

function handleEnterKey(e) {
  alert("You entered: " + e.detail.value);
}
</script>'
          language="html"
        ></mwc-code-box>
      </section>
    </div>
  `,
};
