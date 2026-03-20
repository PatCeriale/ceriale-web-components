import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './code-box';
import '../icons/action-icons';

const meta: Meta = {
  title: 'Components/CodeBox',
  component: 'mwc-code-box',
  parameters: {
    docs: {
      description: {
        component:
          'CodeBox component for displaying code examples with syntax highlighting and copy functionality.',
      },
    },
  },
  argTypes: {
    code: {
      control: { type: 'text' },
      description: 'The code content to display',
    },
    title: {
      control: { type: 'text' },
      description: 'Optional title for the code block',
    },
    language: {
      control: { type: 'select' },
      options: ['html', 'javascript', 'typescript', 'css', 'json'],
      description: 'Programming language for syntax highlighting',
    },
    theme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Color theme',
    },
    lineNumbers: {
      control: { type: 'boolean' },
      description: 'Whether to show line numbers',
    },
  },
  args: {
    code: '<mwc-button variant="contained">Click Me</mwc-button>',
    title: '',
    language: 'html',
    theme: 'light',
    lineNumbers: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3
          style="margin-bottom: 16px; color: var(--color-neutral-800, #424242);"
        >
          With Title
        </h3>
        <mwc-code-box
          title="Code display with title"
          code="${`<mwc-code-box
  title="Contained Button"
  code='<mwc-button variant="contained">Click Me</mwc-button>'
  language="html"
></mwc-code-box>`}"
          language="html"
        ></mwc-code-box>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Complete usage guide showing how to implement and use the code-box component in your project. Each example includes installation, import, and implementation details with copyable code.',
      },
    },
  },
};
