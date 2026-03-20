import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './textinput';
import '../code-box/code-box';
import '../icons/status-icons';

const meta: Meta = {
  title: 'Components/TextInput',
  component: 'mwc-textinput',
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
          <mwc-textinput
            variant="outlined"
            label="Email Address"
            placeholder="your.email@example.com"
            helper-text="We'll never share your email with anyone else"
          ></mwc-textinput>
        </div>
        <mwc-code-box
          title="Simple input field"
          code='<mwc-textinput
  variant="outlined"
  label="Email Address"
  placeholder="your.email@example.com"
  helper-text="We&rsquo;ll never share your email with anyone else"
></mwc-textinput>'
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
            <mwc-textinput
              variant="outlined"
              label="Outlined Input"
              placeholder="Enter text..."
              helper-text="Clear border definition with floating label"
            ></mwc-textinput>

            <mwc-textinput
              variant="filled"
              label="Filled Input"
              placeholder="Enter text..."
              helper-text="Subtle background fill for form grouping"
            ></mwc-textinput>

            <mwc-textinput
              variant="standard"
              label="Standard Input"
              placeholder="Enter text..."
              helper-text="Minimal underline design for clean interfaces"
            ></mwc-textinput>
          </div>
        </div>
        <mwc-code-box
          title="Input variants"
          code='<!-- Outlined variant (default) -->
<mwc-textinput
  variant="outlined"
  label="Outlined Input"
  placeholder="Enter text..."
  helper-text="Clear border definition with floating label"
></mwc-textinput>

<!-- Filled variant -->
<mwc-textinput
  variant="filled"
  label="Filled Input"
  placeholder="Enter text..."
  helper-text="Subtle background fill for form grouping"
></mwc-textinput>

<!-- Standard variant -->
<mwc-textinput
  variant="standard"
  label="Standard Input"
  placeholder="Enter text..."
  helper-text="Minimal underline design for clean interfaces"
></mwc-textinput>'
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
            <mwc-textinput
              type="text"
              label="Text"
              placeholder="Any text"
              helper-text="Standard text input"
            ></mwc-textinput>

            <mwc-textinput
              type="email"
              label="Email"
              placeholder="user@example.com"
              helper-text="Email validation"
            ></mwc-textinput>

            <mwc-textinput
              type="password"
              label="Password"
              placeholder="Secure password"
              helper-text="Masked input"
            ></mwc-textinput>

            <mwc-textinput
              type="number"
              label="Number"
              placeholder="123"
              helper-text="Numeric only"
            ></mwc-textinput>

            <mwc-textinput
              type="tel"
              label="Phone"
              placeholder="+1 (555) 123-4567"
              helper-text="Phone number"
            ></mwc-textinput>

            <mwc-textinput
              type="url"
              label="Website"
              placeholder="https://example.com"
              helper-text="URL validation"
            ></mwc-textinput>
          </div>
        </div>
        <mwc-code-box
          title="Different HTML input types"
          code='<!-- Text input -->
<mwc-textinput type="text" label="Text" placeholder="Any text"></mwc-textinput>

<!-- Email with validation -->
<mwc-textinput type="email" label="Email" placeholder="user@example.com"></mwc-textinput>

<!-- Password with masking -->
<mwc-textinput type="password" label="Password" placeholder="Secure password"></mwc-textinput>

<!-- Number input -->
<mwc-textinput type="number" label="Number" placeholder="123"></mwc-textinput>

<!-- Phone number -->
<mwc-textinput type="tel" label="Phone" placeholder="+1 (555) 123-4567"></mwc-textinput>

<!-- URL with validation -->
<mwc-textinput type="url" label="Website" placeholder="https://example.com"></mwc-textinput>'
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
            <mwc-textinput
              size="small"
              label="Small Input"
              placeholder="Compact input"
              helper-text="For tight spaces and dense layouts"
            ></mwc-textinput>

            <mwc-textinput
              size="medium"
              label="Medium Input"
              placeholder="Standard input"
              helper-text="Default size for most use cases"
            ></mwc-textinput>

            <mwc-textinput
              size="large"
              label="Large Input"
              placeholder="Prominent input"
              helper-text="For emphasis and mobile interfaces"
            ></mwc-textinput>
          </div>
        </div>
        <mwc-code-box
          title="Input sizes"
          code='<!-- Small size -->
<mwc-textinput
  size="small"
  label="Small Input"
  placeholder="Compact input"
  helper-text="For tight spaces and dense layouts"
></mwc-textinput>

<!-- Medium size (default) -->
<mwc-textinput
  size="medium"
  label="Medium Input"
  placeholder="Standard input"
  helper-text="Default size for most use cases"
></mwc-textinput>

<!-- Large size -->
<mwc-textinput
  size="large"
  label="Large Input"
  placeholder="Prominent input"
  helper-text="For emphasis and mobile interfaces"
></mwc-textinput>'
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
            <mwc-textinput
              label="Normal State"
              placeholder="Regular input"
              helper-text="Standard interactive input"
            ></mwc-textinput>

            <mwc-textinput
              label="Required Field"
              placeholder="Required input"
              required
              helper-text="This field is required"
            ></mwc-textinput>

            <mwc-textinput
              label="Disabled Input"
              placeholder="Cannot edit"
              value="Disabled value"
              disabled
              helper-text="Input is disabled"
            ></mwc-textinput>

            <mwc-textinput
              label="Read-only Input"
              value="Read-only value"
              readonly
              helper-text="Input is read-only"
            ></mwc-textinput>

            <mwc-textinput
              label="Error State"
              placeholder="Enter valid email"
              value="invalid-email"
              error
              error-text="Please enter a valid email address"
            ></mwc-textinput>

            <mwc-textinput
              label="With Value"
              value="Pre-filled value"
              helper-text="Input with existing value"
            ></mwc-textinput>
          </div>
        </div>
        <mwc-code-box
          title="Input states"
          code='<!-- Normal state -->
<mwc-textinput label="Normal State" placeholder="Regular input"></mwc-textinput>

<!-- Required field -->
<mwc-textinput label="Required Field" required helper-text="This field is required"></mwc-textinput>

<!-- Disabled state -->
<mwc-textinput label="Disabled Input" value="Disabled value" disabled></mwc-textinput>

<!-- Read-only state -->
<mwc-textinput label="Read-only Input" value="Read-only value" readonly></mwc-textinput>

<!-- Error state -->
<mwc-textinput 
  label="Error State" 
  value="invalid-email" 
  error 
  error-text="Please enter a valid email address"
></mwc-textinput>'
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

            <mwc-textinput
              name="username"
              label="Username"
              placeholder="Choose username"
              required
              helper-text="Must be at least 3 characters"
            ></mwc-textinput>

            <mwc-textinput
              name="email"
              type="email"
              label="Email Address"
              placeholder="your.email@example.com"
              required
              helper-text="We'll never share your email"
            ></mwc-textinput>

            <mwc-textinput
              name="phone"
              type="tel"
              label="Phone Number"
              placeholder="+1 (555) 123-4567"
              helper-text="Optional field for account recovery"
            ></mwc-textinput>

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
  <mwc-textinput
    name="username"
    label="Username"
    placeholder="Choose username"
    required
    helper-text="Must be at least 3 characters"
  ></mwc-textinput>

  <mwc-textinput
    name="email"
    type="email"
    label="Email Address"
    placeholder="your.email@example.com"
    required
    helper-text="We&rsquo;ll never share your email"
  ></mwc-textinput>

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
              <mwc-textinput
                label="Character Counter"
                placeholder="Type to see count..."
                helper-text="0 characters entered"
                @mwc-textinput-input="${(e: CustomEvent) => {
                  const input = e.target as any;
                  const length = e.detail.value.length;
                  if (input?.setAttribute) {
                    input.setAttribute(
                      'helper-text',
                      `${length} characters entered`,
                    );
                  }
                }}"
              ></mwc-textinput>
            </div>

            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Live Email Validation
              </h4>
              <mwc-textinput
                label="Email Validation"
                type="email"
                placeholder="Enter email address"
                helper-text="Email format will be validated as you type"
                @mwc-textinput-input="${(e: CustomEvent) => {
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
              ></mwc-textinput>
            </div>

            <div
              style="padding: 16px; background: var(--color-grey-50); border-radius: 8px;"
            >
              <h4 style="margin: 0 0 12px; color: var(--color-neutral-700);">
                Enter Key Handler
              </h4>
              <mwc-textinput
                label="Quick Submit"
                placeholder="Press Enter to submit"
                helper-text="Press Enter key to trigger action"
                @mwc-textinput-enter="${(e: CustomEvent) => {
                  if (e.detail.value.trim()) {
                    alert(`You entered: ${e.detail.value}`);
                  }
                }}"
              ></mwc-textinput>
            </div>
          </div>
        </div>
        <mwc-code-box
          title="Interactive event handling"
          code='<!-- Character counter -->
<mwc-textinput
  label="Character Counter"
  placeholder="Type to see count..."
  @mwc-textinput-input="handleInput"
></mwc-textinput>

<!-- Email validation -->
<mwc-textinput
  label="Email Validation"
  type="email"
  placeholder="Enter email address"
  @mwc-textinput-input="validateEmail"
></mwc-textinput>

<!-- Enter key handler -->
<mwc-textinput
  label="Quick Submit"
  placeholder="Press Enter to submit"
  @mwc-textinput-enter="handleEnterKey"
></mwc-textinput>

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