import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { baseStyles } from '../../styles/base.js';
import { generateId } from '../../utils/index.js';

export type TextInputVariant = 'outlined' | 'filled' | 'standard';
export type TextInputSize = 'small' | 'medium' | 'large';
export type TextInputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search';

/**
 * Text Input Component
 *
 * @slot start-adornment - Content to display at the start of the input
 * @slot end-adornment - Content to display at the end of the input
 * @slot helper-text - Helper text below the input
 *
 * @csspart container - The input container
 * @csspart label - The input label
 * @csspart input - The input element
 * @csspart helper-text - The helper text
 * @csspart start-adornment - The start adornment container
 * @csspart end-adornment - The end adornment container
 */
@customElement('mwc-textinput')
export class TextInput extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        --input-height: 40px;
        --input-padding: 0 12px;
        --input-border-radius: var(--border-radius-base, 6px);
        --input-border-width: 1px;
        --input-font-size: 14px;
        --input-label-font-size: 12px;
        --input-gap: 8px;
      }

      .container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1, 0.25rem);
      }

      .input-wrapper {
        // position: relative;
        display: flex;
        align-items: center;
        min-height: var(--input-height);
        border-radius: var(--input-border-radius);
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
      }

      /* Variants */
      .input-wrapper--outlined {
        border: var(--input-border-width) solid var(--color-grey-400, #bdbdbd);
        background-color: transparent;
      }

      .input-wrapper--outlined:hover:not(.input-wrapper--disabled) {
        border-color: var(--color-grey-600, #757575);
      }

      .input-wrapper--outlined.input-wrapper--focused {
        border-color: var(--color-primary-500, #2196f3);
        border-width: 2px;
      }

      .input-wrapper--filled {
        background-color: var(--color-grey-100, #f5f5f5);
        border-bottom: var(--input-border-width) solid
          var(--color-grey-400, #bdbdbd);
        border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
      }

      .input-wrapper--filled:hover:not(.input-wrapper--disabled) {
        background-color: var(--color-grey-200, #eeeeee);
        border-bottom-color: var(--color-grey-600, #757575);
      }

      .input-wrapper--filled.input-wrapper--focused {
        border-bottom-color: var(--color-primary-500, #2196f3);
        border-bottom-width: 2px;
      }

      .input-wrapper--standard {
        border-bottom: var(--input-border-width) solid
          var(--color-grey-400, #bdbdbd);
      }

      .input-wrapper--standard:hover:not(.input-wrapper--disabled) {
        border-bottom-color: var(--color-grey-600, #757575);
      }

      .input-wrapper--standard.input-wrapper--focused {
        border-bottom-color: var(--color-primary-500, #2196f3);
        border-bottom-width: 2px;
      }

      /* Error state */
      .input-wrapper--error.input-wrapper--outlined {
        border-color: var(--color-error-500, #f44336);
      }

      .input-wrapper--error.input-wrapper--filled,
      .input-wrapper--error.input-wrapper--standard {
        border-bottom-color: var(--color-error-500, #f44336);
      }

      /* Disabled state */
      .input-wrapper--disabled {
        background-color: var(--color-grey-100, #f5f5f5);
        border-color: var(--color-grey-300, #e0e0e0);
        cursor: not-allowed;
      }

      /* Sizes */
      .input-wrapper--small {
        --input-height: 32px;
        --input-padding: 0 8px;
        --input-font-size: 12px;
        --input-label-font-size: 10px;
      }

      .input-wrapper--large {
        --input-height: 48px;
        --input-padding: 0 16px;
        --input-font-size: 16px;
        --input-label-font-size: 14px;
      }

      /* Label */
      .label {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: var(--input-font-size);
        color: var(--color-grey-600, #757575);
        pointer-events: none;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: var(--surface-background, white);
        padding: 0 4px;
        z-index: 1;
      }

      .input-wrapper--filled .label {
        background-color: transparent;
      }

      .input-wrapper--standard .label {
        background-color: transparent;
      }

      .label--floating {
        top: 0;
        transform: translateY(-50%);
        font-size: var(--input-label-font-size);
        color: var(--color-primary-500, #2196f3);
      }

      .label--error {
        color: var(--color-error-500, #f44336);
      }

      /* Input */
      .input {
        flex: 1;
        width: 100%;
        height: 100%;
        padding: var(--input-padding);
        border: none;
        outline: none;
        background: transparent;
        font-family: inherit;
        font-size: var(--input-font-size);
        color: var(--surface-on-surface, #212121);
      }

      .input::placeholder {
        color: var(--color-grey-500, #9e9e9e);
        opacity: 1;
      }

      .input:disabled {
        cursor: not-allowed;
        color: var(--color-grey-500, #9e9e9e);
      }

      /* Adornments */
      .start-adornment,
      .end-adornment {
        display: flex;
        align-items: center;
        padding: 0 var(--spacing-2, 0.5rem);
        color: var(--color-grey-600, #757575);
      }

      .start-adornment:empty,
      .end-adornment:empty {
        display: none;
      }

      /* Helper text */
      .helper-text {
        font-size: var(--input-label-font-size);
        color: var(--color-grey-600, #757575);
        margin-left: 12px;
        margin-top: var(--spacing-1, 0.25rem);
      }

      .helper-text--error {
        color: var(--color-error-500, #f44336);
      }

      .helper-text:empty {
        display: none;
      }

      /* Required indicator */
      .label--required::after {
        content: ' *';
        color: var(--color-error-500, #f44336);
      }
    `,
  ];

  @property({ reflect: true }) variant: TextInputVariant = 'outlined';
  @property({ reflect: true }) size: TextInputSize = 'medium';
  @property() type: TextInputType = 'text';
  @property() value = '';
  @property() placeholder = '';
  @property() label = '';
  @property({ attribute: 'helper-text' }) helperText = '';
  @property({ attribute: 'error-text' }) errorText = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property() autocomplete?: string;
  @property() name?: string;
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
  @property() pattern?: string;
  @property({ type: Number }) min?: number;
  @property({ type: Number }) max?: number;
  @property({ type: Number }) step?: number;

  @query('.input') private inputElement!: HTMLInputElement | null;
  @state() private focused = false;
  @state() private hasValue = false;
  @state() private inputId = generateId('textinput');

  connectedCallback() {
    super.connectedCallback();
    if (!this.id) {
      this.id = this.inputId;
    }
    this.updateHasValue();
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has('value')) {
      this.updateHasValue();
    }
  }

  private updateHasValue() {
    this.hasValue = Boolean(this.value && this.value.length > 0);
  }

  private handleInput = (event: InputEvent) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.updateHasValue();

    this.dispatchEvent(
      new CustomEvent('mwc-textinput-input', {
        detail: { value: this.value, originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private handleFocus = (event: FocusEvent) => {
    this.focused = true;
    this.dispatchEvent(
      new CustomEvent('mwc-textinput-focus', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private handleBlur = (event: FocusEvent) => {
    this.focused = false;
    this.dispatchEvent(
      new CustomEvent('mwc-textinput-blur', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.dispatchEvent(
        new CustomEvent('mwc-textinput-enter', {
          detail: { value: this.value, originalEvent: event },
          bubbles: true,
          composed: true,
        }),
      );
    }

    this.dispatchEvent(
      new CustomEvent('mwc-textinput-keydown', {
        detail: { key: event.key, originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  };

  focus() {
    this.inputElement?.focus();
  }

  blur() {
    this.inputElement?.blur();
  }

  select() {
    this.inputElement?.select();
  }

  render() {
    const wrapperClasses = {
      'input-wrapper': true,
      [`input-wrapper--${this.variant}`]: true,
      [`input-wrapper--${this.size}`]: true,
      'input-wrapper--focused': this.focused,
      'input-wrapper--error': this.error,
      'input-wrapper--disabled': this.disabled,
    };

    const labelClasses = {
      label: true,
      'label--floating': this.focused || this.hasValue || this.placeholder,
      'label--error': this.error,
      'label--required': this.required,
    };

    const helperTextClasses = {
      'helper-text': true,
      'helper-text--error': this.error,
    };

    const displayedHelperText =
      this.error && this.errorText ? this.errorText : this.helperText;

    return html`
      <div part="container" class="container">
        <div part="input-wrapper" class=${classMap(wrapperClasses)}>
          ${this.label
            ? html`
                <label
                  part="label"
                  class=${classMap(labelClasses)}
                  for=${this.inputId}
                >
                  ${this.label}
                </label>
              `
            : nothing}

          <div part="start-adornment" class="start-adornment">
            <slot name="start-adornment"></slot>
          </div>

          <input
            part="input"
            class="input"
            id=${this.inputId}
            type=${this.type}
            name=${ifDefined(this.name)}
            .value=${live(this.value)}
            placeholder=${ifDefined(this.placeholder)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            autocomplete=${ifDefined(this.autocomplete)}
            minlength=${ifDefined(this.minlength)}
            maxlength=${ifDefined(this.maxlength)}
            pattern=${ifDefined(this.pattern)}
            min=${ifDefined(this.min)}
            max=${ifDefined(this.max)}
            step=${ifDefined(this.step)}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
            @keydown=${this.handleKeyDown}
          />

          <div part="end-adornment" class="end-adornment">
            <slot name="end-adornment"></slot>
          </div>
        </div>

        ${displayedHelperText
          ? html`
              <div part="helper-text" class=${classMap(helperTextClasses)}>
                ${displayedHelperText}
              </div>
            `
          : nothing}

        <slot name="helper-text"></slot>
      </div>
    `;
  }
}
