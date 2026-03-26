import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  LayoutColor,
  SpacingValue,
  ResponsiveValue,
  getSpacingValue,
} from './types.js';

// Container size variants with max-widths
export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

// Container alignment options
export type ContainerAlign = 'left' | 'center' | 'right';

/**
 *  Container Component
 *
 * A responsive container that centers content and applies consistent max-widths
 * based on breakpoints. Perfect for page layouts and content sections.
 *
 * @element mwc-container
 * @slot - Default slot for content
 *
 * @cssprop --container-background - Custom background color
 * @cssprop --container-color - Custom text color
 * @cssprop --container-padding - Custom padding
 * @cssprop --container-margin - Custom margin
 * @cssprop --container-max-width - Custom max-width override
 */
@customElement('mwc-container')
export class Container extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      --_container-transition: all 250ms cubic-bezier(0.2, 0, 0, 1);

      /* Default container styles */
      display: block;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--container-padding-x, var(--spacing-3, 16px));
      padding-right: var(--container-padding-x, var(--spacing-3, 16px));
      background: var(--container-background, transparent);
      color: var(--container-color, inherit);
      transition: var(--_container-transition);
      box-sizing: border-box;

      /* Respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        --_container-transition: none;
      }

      /* RTL support */
      direction: var(--text-direction, ltr);
    }

    /* Container size variants with responsive max-widths */
    :host([size='xs']) {
      max-width: var(--container-max-width, 480px);
    }

    :host([size='sm']) {
      max-width: var(--container-max-width, 640px);
    }

    :host([size='md']) {
      max-width: var(--container-max-width, 768px);
    }

    :host([size='lg']) {
      max-width: var(--container-max-width, 1024px);
    }

    :host([size='xl']) {
      max-width: var(--container-max-width, 1280px);
    }

    :host([size='xxl']) {
      max-width: var(--container-max-width, 1536px);
    }

    :host([size='fluid']) {
      max-width: var(--container-max-width, 100%);
    }

    /* Default size (md) */
    :host(:not([size])) {
      max-width: var(--container-max-width, 768px);
    }

    /* Alignment variants */
    :host([align='left']) {
      margin-left: 0;
      margin-right: auto;
    }

    :host([align='right']) {
      margin-left: auto;
      margin-right: 0;
    }

    :host([align='center']) {
      margin-left: auto;
      margin-right: auto;
    }

    /* Color variants */
    :host([variant='primary']) {
      background: var(--color-primary-50, #e3f2fd);
      color: var(--color-primary-900, #0d47a1);
      border-left: 4px solid var(--color-primary-600, #1e88e5);
    }

    :host([variant='secondary']) {
      background: var(--color-secondary-50, #fce4ec);
      color: var(--color-secondary-900, #880e4f);
      border-left: 4px solid var(--color-secondary-600, #d81b60);
    }

    :host([variant='success']) {
      background: var(--color-success-50, #e8f5e8);
      color: var(--color-success-900, #1b5e20);
      border-left: 4px solid var(--color-success-600, #43a047);
    }

    :host([variant='warning']) {
      background: var(--color-warning-50, #fff3e0);
      color: var(--color-warning-900, #e65100);
      border-left: 4px solid var(--color-warning-600, #fb8c00);
    }

    :host([variant='error']) {
      background: var(--color-error-50, #ffebee);
      color: var(--color-error-900, #b71c1c);
      border-left: 4px solid var(--color-error-600, #e53935);
    }

    /* Spacing variants */
    :host([spacing='none']) {
      padding: 0;
    }

    :host([spacing='xs']) {
      padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
    }

    :host([spacing='sm']) {
      padding: var(--spacing-2, 8px) var(--spacing-3, 16px);
    }

    :host([spacing='md']) {
      padding: var(--spacing-3, 16px) var(--spacing-4, 24px);
    }

    :host([spacing='lg']) {
      padding: var(--spacing-4, 24px) var(--spacing-5, 32px);
    }

    :host([spacing='xl']) {
      padding: var(--spacing-5, 32px) var(--spacing-6, 48px);
    }

    /* Elevation for elevated containers */
    :host([elevated]) {
      background: var(--surface-surface, #ffffff);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
      border-radius: var(--border-radius-medium, 8px);
      border: 1px solid var(--color-grey-200, #e0e0e0);
    }

    :host([elevated][variant]) {
      border: none;
    }

    /* Responsive padding adjustments */
    @media (max-width: 599px) {
      :host {
        padding-left: var(--container-padding-x, var(--spacing-2, 8px));
        padding-right: var(--container-padding-x, var(--spacing-2, 8px));
      }

      :host([responsive-padding]) {
        padding-left: var(--spacing-2, 8px);
        padding-right: var(--spacing-2, 8px);
      }
    }

    @media (min-width: 600px) and (max-width: 899px) {
      :host([responsive-padding]) {
        padding-left: var(--spacing-3, 16px);
        padding-right: var(--spacing-3, 16px);
      }
    }

    @media (min-width: 900px) {
      :host([responsive-padding]) {
        padding-left: var(--spacing-4, 24px);
        padding-right: var(--spacing-4, 24px);
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        background: var(--color-primary-900, #0d47a1);
        color: var(--color-primary-50, #e3f2fd);
      }

      :host([variant='secondary']) {
        background: var(--color-secondary-900, #880e4f);
        color: var(--color-secondary-50, #fce4ec);
      }

      :host([variant='success']) {
        background: var(--color-success-900, #1b5e20);
        color: var(--color-success-50, #e8f5e8);
      }

      :host([variant='warning']) {
        background: var(--color-warning-900, #e65100);
        color: var(--color-warning-50, #fff3e0);
      }

      :host([variant='error']) {
        background: var(--color-error-900, #b71c1c);
        color: var(--color-error-50, #ffebee);
      }

      :host([elevated]) {
        background: var(--surface-surface, #1e1e1e);
        border-color: var(--color-grey-700, #616161);
      }
    }

    /* Interactive states for clickable containers */
    :host([interactive]) {
      cursor: pointer;
      transition: var(--_container-transition);
    }

    :host([interactive]:hover) {
      transform: translateY(-2px);
      box-shadow: var(--elevation-2-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
    }

    :host([interactive]:focus-visible) {
      outline: 2px solid var(--color-primary-600, #1976d2);
      outline-offset: 2px;
    }

    :host([interactive]:active) {
      transform: translateY(0);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
      user-select: none;
    }

    /* Content area */
    .content {
      width: 100%;
      height: 100%;
    }

    /* Section styling for semantic containers */
    :host([as-section]) {
      margin: var(--spacing-5, 32px) 0;
    }

    :host([as-header]) {
      border-bottom: 1px solid var(--color-grey-200, #e0e0e0);
      padding-bottom: var(--spacing-3, 16px);
      margin-bottom: var(--spacing-4, 24px);
    }

    :host([as-footer]) {
      border-top: 1px solid var(--color-grey-200, #e0e0e0);
      padding-top: var(--spacing-3, 16px);
      margin-top: var(--spacing-4, 24px);
    }

    /* Print styles */
    @media print {
      :host {
        max-width: 100% !important;
        box-shadow: none !important;
        border: none !important;
        background: transparent !important;
      }
    }
  `;

  // Container properties
  @property({ reflect: true }) size: ContainerSize = 'md';
  @property({ reflect: true }) align: ContainerAlign = 'center';
  @property({ reflect: true }) variant?: LayoutColor;
  @property({ reflect: true }) spacing?: SpacingValue;

  // Layout properties
  @property({ type: Boolean, reflect: true }) elevated = false;
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true, attribute: 'responsive-padding' })
  responsivePadding = true;

  // Semantic HTML properties
  @property({ type: Boolean, reflect: true, attribute: 'as-section' })
  asSection = false;
  @property({ type: Boolean, reflect: true, attribute: 'as-header' }) asHeader =
    false;
  @property({ type: Boolean, reflect: true, attribute: 'as-footer' }) asFooter =
    false;

  // Custom spacing overrides
  @property({ type: String }) paddingX?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) paddingY?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) marginX?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) marginY?: ResponsiveValue<SpacingValue>;

  // Accessibility properties
  @property({ type: String }) role: string | null = null;
  @property({ type: String }) ariaLabel: string | null = null;
  @property({ type: String }) ariaLabelledBy: string | null = null;
  @property({ type: String }) ariaDescribedBy: string | null = null;

  private _getCustomStyles(): Record<string, string> {
    const styles: Record<string, string> = {};

    if (this.paddingX) {
      const value = this._getSpacingStyle(this.paddingX);
      styles.paddingLeft = value;
      styles.paddingRight = value;
    }

    if (this.paddingY) {
      const value = this._getSpacingStyle(this.paddingY);
      styles.paddingTop = value;
      styles.paddingBottom = value;
    }

    if (this.marginX) {
      const value = this._getSpacingStyle(this.marginX);
      styles.marginLeft = value;
      styles.marginRight = value;
    }

    if (this.marginY) {
      const value = this._getSpacingStyle(this.marginY);
      styles.marginTop = value;
      styles.marginBottom = value;
    }

    return styles;
  }

  private _getSpacingStyle(value: ResponsiveValue<SpacingValue>): string {
    if (typeof value === 'object' && value !== null) {
      const responsiveValue = value as Record<string, SpacingValue>;
      return Object.entries(responsiveValue)
        .map(([, val]) => getSpacingValue(val))
        .join(' ');
    }
    return getSpacingValue(value as SpacingValue);
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('container-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    if (this.interactive && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this._handleClick(event as any);
    }

    this.dispatchEvent(
      new CustomEvent('container-keydown', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected render() {
    const customStyles = this._getCustomStyles();
    const classes = {
      interactive: this.interactive && !this.disabled,
      disabled: this.disabled,
    };

    return html`
      <div
        class="content ${classMap(classes)}"
        style=${styleMap(customStyles)}
        role=${this.role || (this.interactive ? 'button' : 'presentation')}
        aria-label=${this.ariaLabel || ''}
        aria-labelledby=${this.ariaLabelledBy || ''}
        aria-describedby=${this.ariaDescribedBy || ''}
        aria-disabled=${this.disabled}
        tabindex=${this.interactive ? '0' : '-1'}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mwc-container': Container;
  }
}
