import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../styles/base.js';

export type IconSize = 'small' | 'medium' | 'large' | 'xl';
export type IconVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'muted';

/**
 * Base Icon Component
 *
 * Provides common functionality for all icons including:
 * - Consistent sizing
 * - Theme awareness
 * - Accessibility
 * - Color inheritance
 */
@customElement('icon-base')
export class IconBase extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        user-select: none;
        color: inherit;
        fill: currentColor;
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      :host([size='small']) {
        width: 16px;
        height: 16px;
      }

      :host([size='medium']) {
        width: 24px;
        height: 24px;
      }

      :host([size='large']) {
        width: 32px;
        height: 32px;
      }

      :host([size='xl']) {
        width: 48px;
        height: 48px;
      }

      svg {
        width: 100%;
        height: 100%;
        fill: inherit;
        color: inherit;
        display: block;
      }

      /* Interactive states */
      :host([clickable]) {
        cursor: pointer;
        border-radius: 50%;
        padding: 4px;
        margin: -4px;
      }

      :host([clickable]:hover) {
        background: var(--color-grey-100);
      }

      :host([clickable]:focus) {
        outline: 2px solid var(--color-primary-500);
        outline-offset: 2px;
      }

      :host([clickable]:active) {
        background: var(--color-grey-200);
        transform: scale(0.95);
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        :host([clickable]:hover) {
          background: var(--color-grey-800);
        }

        :host([clickable]:active) {
          background: var(--color-grey-700);
        }
      }

      /* Disabled state */
      :host([disabled]) {
        opacity: 0.5;
        pointer-events: none;
      }

      /* Color variants */
      :host([variant='primary']) {
        color: var(--color-primary-600);
      }

      :host([variant='secondary']) {
        color: var(--color-secondary-600);
      }

      :host([variant='success']) {
        color: var(--color-success-600);
      }

      :host([variant='warning']) {
        color: var(--color-warning-600);
      }

      :host([variant='error']) {
        color: var(--color-error-600);
      }

      :host([variant='muted']) {
        color: var(--color-grey-500);
      }
    `,
  ];

  @property({ reflect: true }) size: IconSize = 'medium';
  @property({ reflect: true }) variant: IconVariant = 'default';
  @property({ type: Boolean, reflect: true }) clickable = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() ariaLabel: string | null = null;

  protected render() {
    return html`
      <svg
        viewBox="0 0 24 24"
        aria-hidden="${this.ariaLabel ? 'false' : 'true'}"
        aria-label="${this.ariaLabel || ''}"
        role="${this.ariaLabel ? 'img' : 'presentation'}"
        part="svg"
      >
        <slot></slot>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-base': IconBase;
  }
}
