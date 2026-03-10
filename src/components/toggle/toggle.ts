import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import { generateId } from '../../utils/index.js';

export type ToggleSize = 'small' | 'medium' | 'large';
export type ToggleColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

/**
 *  Toggle Switch Component
 *
 * @slot - Default slot for toggle label
 * @slot start-icon - Icon to display at the start of the toggle
 * @slot end-icon - Icon to display at the end of the toggle
 *
 * @csspart container - The toggle container
 * @csspart track - The toggle track
 * @csspart thumb - The toggle thumb
 * @csspart label - The toggle label
 * @csspart input - The hidden input element
 */
@customElement('mwc-toggle')
export class Toggle extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        --toggle-width: 52px;
        --toggle-height: 32px;
        --toggle-thumb-size: 20px;
        --toggle-track-padding: 6px;
        --toggle-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .container {
        display: inline-flex;
        align-items: center;
        gap: var(--spacing-2, 0.5rem);
        cursor: pointer;
        user-select: none;
      }

      .container--disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      .toggle {
        position: relative;
        display: inline-flex;
        align-items: center;
        width: var(--toggle-width);
        height: var(--toggle-height);
        border-radius: calc(var(--toggle-height) / 2);
        background-color: var(--color-grey-400, #bdbdbd);
        transition: var(--toggle-transition);
        cursor: inherit;
        outline: none;
        border: none;
        padding: 0;
      }

      .toggle:focus-visible {
        box-shadow: 0 0 0 2px var(--color-primary-200, #e3f2fd);
      }

      /* Track states */
      .toggle--checked {
        background-color: var(--color-primary-500, #2196f3);
      }

      .toggle--disabled {
        background-color: var(--color-grey-300, #e0e0e0) !important;
        cursor: not-allowed;
      }

      /* Color variants */
      .toggle--secondary.toggle--checked {
        background-color: var(--color-secondary-500, #e91e63);
      }

      .toggle--success.toggle--checked {
        background-color: var(--color-success-500, #4caf50);
      }

      .toggle--warning.toggle--checked {
        background-color: var(--color-warning-500, #ff9800);
      }

      .toggle--error.toggle--checked {
        background-color: var(--color-error-500, #f44336);
      }

      /* Size variants */
      .container--small {
        --toggle-width: 44px;
        --toggle-height: 24px;
        --toggle-thumb-size: 16px;
        --toggle-track-padding: 4px;
      }

      .container--large {
        --toggle-width: 60px;
        --toggle-height: 36px;
        --toggle-thumb-size: 24px;
        --toggle-track-padding: 6px;
      }

      /* Thumb */
      .thumb {
        position: absolute;
        top: var(--toggle-track-padding);
        left: var(--toggle-track-padding);
        width: var(--toggle-thumb-size);
        height: var(--toggle-thumb-size);
        border-radius: 50%;
        background-color: white;
        box-shadow: var(--elevation-2-shadow, 0 2px 4px rgba(0, 0, 0, 0.2));
        transition: var(--toggle-transition);
        transform: translateX(0);
      }

      .toggle--checked .thumb {
        transform: translateX(
          calc(
            var(--toggle-width) - var(--toggle-thumb-size) -
              (2 * var(--toggle-track-padding))
          )
        );
      }

      .toggle--disabled .thumb {
        background-color: var(--color-grey-100, #f5f5f5);
        box-shadow: none;
      }

      /* Hidden input */
      .input {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        pointer-events: none;
      }

      /* Label */
      .label {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-base, 14px);
        font-weight: var(--font-weight-normal, 400);
        color: var(--surface-on-surface, #212121);
        cursor: inherit;
      }

      .label--disabled {
        color: var(--color-grey-500, #9e9e9e);
      }

      /* Hover effects */
      .toggle:hover:not(.toggle--disabled) {
        box-shadow: 0 0 0 8px rgba(var(--rgb-primary, 33, 150, 243), 0.1);
      }

      .toggle--secondary:hover:not(.toggle--disabled) {
        box-shadow: 0 0 0 8px rgba(var(--rgb-secondary, 233, 30, 99), 0.1);
      }

      .toggle--success:hover:not(.toggle--disabled) {
        box-shadow: 0 0 0 8px rgba(var(--rgb-success, 76, 175, 80), 0.1);
      }

      .toggle--warning:hover:not(.toggle--disabled) {
        box-shadow: 0 0 0 8px rgba(var(--rgb-warning, 255, 152, 0), 0.1);
      }

      .toggle--error:hover:not(.toggle--disabled) {
        box-shadow: 0 0 0 8px rgba(var(--rgb-error, 244, 67, 54), 0.1);
      }

      /* Active state */
      .toggle:active:not(.toggle--disabled) .thumb {
        transform: scale(1.1)
          translateX(
            calc(
              var(--toggle-width) - var(--toggle-thumb-size) -
                (2 * var(--toggle-track-padding))
            )
          );
      }

      .toggle:not(.toggle--checked):active:not(.toggle--disabled) .thumb {
        transform: scale(1.1) translateX(0);
      }

      /* Icon slots */
      ::slotted([slot='start-icon']),
      ::slotted([slot='end-icon']) {
        display: inline-flex;
        width: 18px;
        height: 18px;
        color: var(--color-grey-600, #757575);
      }

      .container--small ::slotted([slot='start-icon']),
      .container--small ::slotted([slot='end-icon']) {
        width: 16px;
        height: 16px;
      }

      .container--large ::slotted([slot='start-icon']),
      .container--large ::slotted([slot='end-icon']) {
        width: 20px;
        height: 20px;
      }

      /* Focus styles for keyboard navigation */
      .toggle:focus-visible::before {
        content: '';
        position: absolute;
        inset: -8px;
        border-radius: calc((var(--toggle-height) / 2) + 8px);
        border: 2px solid var(--color-primary-500, #2196f3);
        pointer-events: none;
      }
    `,
  ];

  @property({ reflect: true }) size: ToggleSize = 'medium';
  @property({ reflect: true }) color: ToggleColor = 'primary';
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() name?: string;
  @property() value?: string;
  @property({ attribute: 'aria-label' }) ariaLabel: string | null = null;
  @property({ attribute: 'aria-labelledby' }) ariaLabelledBy?: string;
  @property({ attribute: 'aria-describedby' }) ariaDescribedBy?: string;

  @query('input') private inputElement!: HTMLInputElement;
  @state() private toggleId = generateId('toggle');

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
    this.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeydown);
  }

  private handleClick = (event: Event) => {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.toggle();
  };

  private handleKeydown = (event: KeyboardEvent) => {
    if (this.disabled) return;

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle();
    }
  };

  private toggle() {
    if (this.disabled) return;

    const oldValue = this.checked;
    this.checked = !this.checked;

    // Update the hidden input for form integration
    if (this.inputElement) {
      this.inputElement.checked = this.checked;
    }

    // Dispatch change event for form integration
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true,
      }),
    );

    // Dispatch custom event
    this.dispatchEvent(
      new CustomEvent('mwc-toggle-change', {
        detail: {
          checked: this.checked,
          oldValue,
          value: this.value,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  focus() {
    this.inputElement?.focus();
  }

  blur() {
    this.inputElement?.blur();
  }

  render() {
    const containerClasses = {
      container: true,
      [`container--${this.size}`]: true,
      'container--disabled': this.disabled,
    };

    const toggleClasses = {
      toggle: true,
      [`toggle--${this.color}`]: true,
      'toggle--checked': this.checked,
      'toggle--disabled': this.disabled,
    };

    const labelClasses = {
      label: true,
      'label--disabled': this.disabled,
    };

    return html`
      <div class=${classMap(containerClasses)} part="container">
        <slot name="start-icon"></slot>

        <button
          part="track"
          class=${classMap(toggleClasses)}
          type="button"
          role="switch"
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-disabled=${this.disabled ? 'true' : 'false'}
          aria-label=${ifDefined(this.ariaLabel)}
          aria-labelledby=${ifDefined(this.ariaLabelledBy)}
          aria-describedby=${ifDefined(this.ariaDescribedBy)}
          ?disabled=${this.disabled}
        >
          <div part="thumb" class="thumb"></div>
        </button>

        <!-- Hidden input for form integration -->
        <input
          part="input"
          class="input"
          type="checkbox"
          id=${this.toggleId}
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          tabindex="-1"
        />

        <label
          part="label"
          class=${classMap(labelClasses)}
          for=${this.toggleId}
        >
          <slot></slot>
        </label>

        <slot name="end-icon"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mwc-toggle': Toggle;
  }
}
