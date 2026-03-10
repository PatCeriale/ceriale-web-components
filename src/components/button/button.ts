import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';
import { createRipple } from '../../utils/index.js';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

/**
 * Button Component
 *
 * @slot - Default slot for button content
 * @slot start-icon - Icon to display at the start of the button
 * @slot end-icon - Icon to display at the end of the button
 *
 * @csspart button - The button element
 * @csspart label - The button label
 * @csspart start-icon - The start icon container
 * @csspart end-icon - The end icon container
 */
@customElement('mwc-button')
export class Button extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        position: relative;
        --button-height: 36px;
        --button-padding: 0 16px;
        --button-font-size: 14px;
        --button-font-weight: 500;
        --button-border-radius: 4px;
        --button-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      :host([disabled]) {
        pointer-events: none;
      }

      .button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 64px;
        height: var(--button-height);
        padding: var(--button-padding);
        border: none;
        border-radius: var(--button-border-radius);
        font-family: var(--font-family-primary);
        font-size: var(--button-font-size);
        font-weight: var(--button-font-weight);
        line-height: 1.75;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        user-select: none;
        transition: var(--button-transition);
        gap: 8px;
        background: transparent;
        color: inherit;
      }

      /* Variants */
      .button--contained {
        background-color: var(--color-primary-500);
        color: white;
        box-shadow: var(--elevation-2-shadow);
      }

      .button--contained:hover:not(:disabled) {
        background-color: var(--color-primary-600);
        box-shadow: var(--elevation-4-shadow);
      }

      .button--contained:active:not(:disabled) {
        background-color: var(--color-primary-700);
        box-shadow: var(--elevation-8-shadow);
      }

      .button--outlined {
        border: 1px solid var(--color-primary-500);
        color: var(--color-primary-500);
      }

      .button--outlined:hover:not(:disabled) {
        background-color: rgba(33, 150, 243, 0.04);
        border-color: var(--color-primary-600);
      }

      .button--outlined:active:not(:disabled) {
        background-color: rgba(33, 150, 243, 0.12);
      }

      .button--text {
        color: var(--color-primary-500);
      }

      .button--text:hover:not(:disabled) {
        background-color: rgba(33, 150, 243, 0.04);
      }

      .button--text:active:not(:disabled) {
        background-color: rgba(33, 150, 243, 0.12);
      }

      /* Colors */
      .button--secondary.button--contained {
        background-color: var(--color-secondary-500);
      }
      .button--secondary.button--contained:hover:not(:disabled) {
        background-color: var(--color-secondary-600);
      }
      .button--secondary.button--outlined,
      .button--secondary.button--text {
        color: var(--color-secondary-500);
        border-color: var(--color-secondary-500);
      }

      .button--success.button--contained {
        background-color: var(--color-success-500);
      }
      .button--success.button--contained:hover:not(:disabled) {
        background-color: var(--color-success-600);
      }
      .button--success.button--outlined,
      .button--success.button--text {
        color: var(--color-success-500);
        border-color: var(--color-success-500);
      }

      .button--warning.button--contained {
        background-color: var(--color-warning-500);
        color: var(--surface-on-background);
      }
      .button--warning.button--contained:hover:not(:disabled) {
        background-color: var(--color-warning-600);
      }
      .button--warning.button--outlined,
      .button--warning.button--text {
        color: var(--color-warning-700);
        border-color: var(--color-warning-500);
      }

      .button--error.button--contained {
        background-color: var(--color-error-500);
      }
      .button--error.button--contained:hover:not(:disabled) {
        background-color: var(--color-error-600);
      }
      .button--error.button--outlined,
      .button--error.button--text {
        color: var(--color-error-500);
        border-color: var(--color-error-500);
      }

      /* Sizes */
      .button--small {
        --button-height: 30px;
        --button-padding: 0 12px;
        --button-font-size: 13px;
        min-width: 54px;
      }

      .button--large {
        --button-height: 42px;
        --button-padding: 0 22px;
        --button-font-size: 15px;
        min-width: 74px;
      }

      /* Disabled state */
      .button:disabled {
        background-color: var(--color-grey-300) !important;
        color: var(--color-grey-500) !important;
        box-shadow: none !important;
        border-color: var(--color-grey-300) !important;
        cursor: not-allowed;
      }

      .button--outlined:disabled,
      .button--text:disabled {
        background-color: transparent !important;
      }

      /* Loading state */
      .button--loading {
        color: transparent !important;
      }

      .loading-spinner {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid currentColor;
        border-radius: 50%;
        border-top-color: transparent;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      /* Icon slots */
      ::slotted([slot='start-icon']),
      ::slotted([slot='end-icon']) {
        display: inline-flex;
        width: 18px;
        height: 18px;
      }

      .button--small ::slotted([slot='start-icon']),
      .button--small ::slotted([slot='end-icon']) {
        width: 16px;
        height: 16px;
      }

      .button--large ::slotted([slot='start-icon']),
      .button--large ::slotted([slot='end-icon']) {
        width: 20px;
        height: 20px;
      }
    `,
  ];

  @property({ reflect: true }) variant: ButtonVariant = 'contained';
  @property({ reflect: true }) size: ButtonSize = 'medium';
  @property({ reflect: true }) color: ButtonColor = 'primary';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property() type: 'button' | 'submit' | 'reset' = 'button';
  @property() href?: string;
  @property() target?: string;
  @property() download?: string;
  @property({ attribute: 'aria-label' }) declare ariaLabel: string | null;

  @query('.button') private button!: HTMLElement;
  @state() private hasStartIcon = false;
  @state() private hasEndIcon = false;

  handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Create ripple effect
    if (this.button) {
      createRipple(event, this.button);
    }

    // Dispatch custom event
    this.dispatchEvent(
      new CustomEvent('mwc-button-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const slotName = slot.name;

    if (slotName === 'start-icon') {
      this.hasStartIcon = slot.assignedElements().length > 0;
    } else if (slotName === 'end-icon') {
      this.hasEndIcon = slot.assignedElements().length > 0;
    }
  }

  render() {
    const classes = {
      button: true,
      'ripple-container': true,
      [`button--${this.variant}`]: true,
      [`button--${this.size}`]: true,
      [`button--${this.color}`]: true,
      'button--loading': this.loading,
    };

    const isAnchor = Boolean(this.href);

    return html`
      ${isAnchor
        ? html`
            <a
              part="button"
              class=${classMap(classes)}
              href=${ifDefined(this.href)}
              target=${ifDefined(this.target)}
              download=${ifDefined(this.download)}
              aria-label=${ifDefined(this.ariaLabel)}
              aria-disabled=${this.disabled ? 'true' : nothing}
              @click=${this.handleClick}
            >
              ${this.renderContent()}
            </a>
          `
        : html`
            <button
              part="button"
              class=${classMap(classes)}
              type=${this.type}
              ?disabled=${this.disabled}
              aria-label=${ifDefined(this.ariaLabel)}
              @click=${this.handleClick}
            >
              ${this.renderContent()}
            </button>
          `}
    `;
  }

  private renderContent() {
    return html`
      ${this.hasStartIcon
        ? html`
            <span part="start-icon">
              <slot
                name="start-icon"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </span>
          `
        : nothing}

      <span part="label">
        <slot></slot>
      </span>

      ${this.hasEndIcon
        ? html`
            <span part="end-icon">
              <slot name="end-icon" @slotchange=${this.handleSlotChange}></slot>
            </span>
          `
        : nothing}
      ${this.loading
        ? html`
            <div class="loading-spinner">
              <div class="spinner"></div>
            </div>
          `
        : nothing}

      <slot
        name="start-icon"
        @slotchange=${this.handleSlotChange}
        style="display: none;"
      ></slot>
      <slot
        name="end-icon"
        @slotchange=${this.handleSlotChange}
        style="display: none;"
      ></slot>
    `;
  }
}
