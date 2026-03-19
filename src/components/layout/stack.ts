import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  LayoutSize,
  LayoutColor,
  SpacingValue,
  ResponsiveValue,
  AlignItems,
  JustifyContent,
  getSpacingValue,
} from './types.js';

// Stack direction options
export type StackDirection =
  | 'column'
  | 'row'
  | 'column-reverse'
  | 'row-reverse';

// Stack wrapping options
export type StackWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/**
 * Material Design 3 Stack Component
 *
 * A flexible container that distributes children in a single direction (row or column)
 * with consistent spacing. Similar to CSS Flexbox but with simplified props.
 *
 * @element mwc-stack
 * @slot - Default slot for content
 *
 * @cssprop --stack-background - Custom background color
 * @cssprop --stack-color - Custom text color
 * @cssprop --stack-border - Custom border
 * @cssprop --stack-padding - Custom padding
 * @cssprop --stack-gap - Custom gap between children
 */
@customElement('mwc-stack')
export class Stack extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      --_stack-transition: all 250ms cubic-bezier(0.2, 0, 0, 1);
      --_stack-gap: var(--stack-gap, var(--spacing-2, 8px));

      display: flex;
      width: 100%;
      background: var(--stack-background, transparent);
      color: var(--stack-color, inherit);
      border: var(--stack-border, none);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--stack-padding, 0);
      gap: var(--_stack-gap);
      transition: var(--_stack-transition);
      box-sizing: border-box;
      min-width: 0;

      /* Default stacking direction */
      flex-direction: var(--_stack-direction, column);
      align-items: var(--_stack-align, stretch);
      justify-content: var(--_stack-justify, flex-start);
      flex-wrap: var(--_stack-wrap, nowrap);

      /* Respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        --_stack-transition: none;
      }

      /* RTL support */
      direction: var(--text-direction, ltr);
    }

    /* Direction variants */
    :host([direction='column']) {
      --_stack-direction: column;
    }
    :host([direction='row']) {
      --_stack-direction: row;
    }
    :host([direction='column-reverse']) {
      --_stack-direction: column-reverse;
    }
    :host([direction='row-reverse']) {
      --_stack-direction: row-reverse;
    }

    /* Alignment variants */
    :host([align='start']) {
      --_stack-align: flex-start;
    }
    :host([align='end']) {
      --_stack-align: flex-end;
    }
    :host([align='center']) {
      --_stack-align: center;
    }
    :host([align='stretch']) {
      --_stack-align: stretch;
    }
    :host([align='baseline']) {
      --_stack-align: baseline;
    }

    /* Justify variants */
    :host([justify='start']) {
      --_stack-justify: flex-start;
    }
    :host([justify='end']) {
      --_stack-justify: flex-end;
    }
    :host([justify='center']) {
      --_stack-justify: center;
    }
    :host([justify='space-between']) {
      --_stack-justify: space-between;
    }
    :host([justify='space-around']) {
      --_stack-justify: space-around;
    }
    :host([justify='space-evenly']) {
      --_stack-justify: space-evenly;
    }

    /* Wrap variants */
    :host([wrap='nowrap']) {
      --_stack-wrap: nowrap;
    }
    :host([wrap='wrap']) {
      --_stack-wrap: wrap;
    }
    :host([wrap='wrap-reverse']) {
      --_stack-wrap: wrap-reverse;
    }

    /* Spacing variants */
    :host([spacing='none']) {
      --_stack-gap: 0;
    }
    :host([spacing='xs']) {
      --_stack-gap: var(--spacing-1, 4px);
    }
    :host([spacing='small']) {
      --_stack-gap: var(--spacing-2, 8px);
    }
    :host([spacing='medium']) {
      --_stack-gap: var(--spacing-3, 16px);
    }
    :host([spacing='large']) {
      --_stack-gap: var(--spacing-4, 24px);
    }
    :host([spacing='xl']) {
      --_stack-gap: var(--spacing-5, 32px);
    }

    /* Color variants */
    :host([variant='primary']) {
      background: var(--color-primary-50, #e3f2fd);
      color: var(--color-primary-900, #0d47a1);
      border: 1px solid var(--color-primary-200, #90caf9);
    }

    :host([variant='secondary']) {
      background: var(--color-secondary-50, #fce4ec);
      color: var(--color-secondary-900, #880e4f);
      border: 1px solid var(--color-secondary-200, #f48fb1);
    }

    :host([variant='success']) {
      background: var(--color-success-50, #e8f5e8);
      color: var(--color-success-900, #1b5e20);
      border: 1px solid var(--color-success-200, #a5d6a7);
    }

    :host([variant='warning']) {
      background: var(--color-warning-50, #fff3e0);
      color: var(--color-warning-900, #e65100);
      border: 1px solid var(--color-warning-200, #ffcc02);
    }

    :host([variant='error']) {
      background: var(--color-error-50, #ffebee);
      color: var(--color-error-900, #b71c1c);
      border: 1px solid var(--color-error-200, #ef9a9a);
    }

    /* Size variants */
    :host([size='small']) {
      padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
      --_stack-gap: var(--spacing-1, 4px);
    }

    :host([size='medium']) {
      padding: var(--spacing-2, 8px) var(--spacing-3, 16px);
      --_stack-gap: var(--spacing-2, 8px);
    }

    :host([size='large']) {
      padding: var(--spacing-3, 16px) var(--spacing-4, 24px);
      --_stack-gap: var(--spacing-3, 16px);
    }

    /* Responsive direction changes */
    @media (max-width: 599px) {
      :host([mobile-direction='column']) {
        --_stack-direction: column;
      }
      :host([mobile-direction='row']) {
        --_stack-direction: row;
      }
      :host([mobile-direction='column-reverse']) {
        --_stack-direction: column-reverse;
      }
      :host([mobile-direction='row-reverse']) {
        --_stack-direction: row-reverse;
      }

      :host([mobile-wrap]) {
        --_stack-wrap: wrap;
      }
    }

    @media (min-width: 600px) and (max-width: 899px) {
      :host([tablet-direction='column']) {
        --_stack-direction: column;
      }
      :host([tablet-direction='row']) {
        --_stack-direction: row;
      }
      :host([tablet-direction='column-reverse']) {
        --_stack-direction: column-reverse;
      }
      :host([tablet-direction='row-reverse']) {
        --_stack-direction: row-reverse;
      }

      :host([tablet-wrap]) {
        --_stack-wrap: wrap;
      }
    }

    @media (min-width: 900px) {
      :host([desktop-direction='column']) {
        --_stack-direction: column;
      }
      :host([desktop-direction='row']) {
        --_stack-direction: row;
      }
      :host([desktop-direction='column-reverse']) {
        --_stack-direction: column-reverse;
      }
      :host([desktop-direction='row-reverse']) {
        --_stack-direction: row-reverse;
      }

      :host([desktop-wrap]) {
        --_stack-wrap: wrap;
      }
    }

    /* Elevated stack */
    :host([elevated]) {
      background: var(--surface-surface, #ffffff);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
      border: 1px solid var(--color-grey-200, #e0e0e0);
      padding: var(--spacing-3, 16px);
    }

    /* Full height variant */
    :host([full-height]) {
      height: 100%;
    }

    /* Full width variant */
    :host([full-width]) {
      width: 100%;
    }

    /* Interactive states */
    :host([interactive]) {
      cursor: pointer;
      transition: var(--_stack-transition);
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

    /* Stack item styles (when used as direct children) */
    ::slotted(*) {
      /* Ensure child elements don't overflow */
      min-width: 0;
      min-height: 0;
    }

    /* Auto-distributing children for space-between effects */
    :host([distribute]) ::slotted(*) {
      flex: 1 1 auto;
    }

    /* Centered children */
    :host([center-children]) ::slotted(*) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Equal width children (for row direction) */
    :host([equal-width][direction='row']) ::slotted(*),
    :host([equal-width]:not([direction])) ::slotted(*) {
      flex: 1 1 0;
    }

    /* Equal height children (for column direction) */
    :host([equal-height][direction='column']) ::slotted(*) {
      flex: 1 1 0;
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        background: var(--color-primary-900, #0d47a1);
        color: var(--color-primary-50, #e3f2fd);
        border-color: var(--color-primary-700, #1976d2);
      }

      :host([variant='secondary']) {
        background: var(--color-secondary-900, #880e4f);
        color: var(--color-secondary-50, #fce4ec);
        border-color: var(--color-secondary-700, #c2185b);
      }

      :host([variant='success']) {
        background: var(--color-success-900, #1b5e20);
        color: var(--color-success-50, #e8f5e8);
        border-color: var(--color-success-700, #388e3c);
      }

      :host([variant='warning']) {
        background: var(--color-warning-900, #e65100);
        color: var(--color-warning-50, #fff3e0);
        border-color: var(--color-warning-700, #f57c00);
      }

      :host([variant='error']) {
        background: var(--color-error-900, #b71c1c);
        color: var(--color-error-50, #ffebee);
        border-color: var(--color-error-700, #d32f2f);
      }

      :host([elevated]) {
        background: var(--surface-surface, #1e1e1e);
        border-color: var(--color-grey-700, #616161);
      }
    }

    /* Dividers between stack items */
    :host([dividers]) {
      position: relative;
    }

    :host([dividers]) ::slotted(*:not(:last-child)):after {
      content: '';
      position: absolute;
      background: var(--color-grey-300, #e0e0e0);
    }

    :host([dividers][direction='column']) ::slotted(*:not(:last-child)):after,
    :host([dividers]:not([direction])) ::slotted(*:not(:last-child)):after {
      bottom: calc(-1 * var(--_stack-gap) / 2);
      left: 0;
      right: 0;
      height: 1px;
    }

    :host([dividers][direction='row']) ::slotted(*:not(:last-child)):after {
      right: calc(-1 * var(--_stack-gap) / 2);
      top: 0;
      bottom: 0;
      width: 1px;
    }

    /* Print styles */
    @media print {
      :host {
        box-shadow: none !important;
        border: 1px solid var(--color-grey-400, #bdbdbd) !important;
        background: transparent !important;
      }

      :host([direction='row']) {
        flex-direction: column;
      }
    }
  `;

  // Layout properties
  @property({ reflect: true }) direction?: StackDirection;
  @property({ reflect: true }) align?: AlignItems;
  @property({ reflect: true }) justify?: JustifyContent;
  @property({ reflect: true }) wrap?: StackWrap;

  // Responsive direction
  @property({ reflect: true, attribute: 'mobile-direction' })
  mobileDirection?: StackDirection;
  @property({ reflect: true, attribute: 'tablet-direction' })
  tabletDirection?: StackDirection;
  @property({ reflect: true, attribute: 'desktop-direction' })
  desktopDirection?: StackDirection;

  // Responsive wrapping
  @property({ type: Boolean, reflect: true, attribute: 'mobile-wrap' })
  mobileWrap = false;
  @property({ type: Boolean, reflect: true, attribute: 'tablet-wrap' })
  tabletWrap = false;
  @property({ type: Boolean, reflect: true, attribute: 'desktop-wrap' })
  desktopWrap = false;

  // Spacing properties
  @property({ reflect: true }) spacing?:
    | 'none'
    | 'xs'
    | 'small'
    | 'medium'
    | 'large'
    | 'xl';
  @property({ type: String }) gap?: ResponsiveValue<SpacingValue>;

  // Container properties
  @property({ type: Boolean, reflect: true, attribute: 'full-height' })
  fullHeight = false;
  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  fullWidth = false;
  @property({ type: Boolean, reflect: true }) distribute = false;

  // Children behavior
  @property({ type: Boolean, reflect: true, attribute: 'equal-width' })
  equalWidth = false;
  @property({ type: Boolean, reflect: true, attribute: 'equal-height' })
  equalHeight = false;
  @property({ type: Boolean, reflect: true, attribute: 'center-children' })
  centerChildren = false;

  // Visual properties
  @property({ reflect: true }) variant?: LayoutColor;
  @property({ reflect: true }) size?: LayoutSize;
  @property({ type: Boolean, reflect: true }) elevated = false;
  @property({ type: Boolean, reflect: true }) dividers = false;

  // Interaction properties
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  // Spacing properties
  @property({ type: String }) padding?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) margin?: ResponsiveValue<SpacingValue>;

  // Accessibility properties
  @property({ type: String }) role: string | null = null;
  @property({ type: String }) ariaLabel: string | null = null;
  @property({ type: String }) ariaLabelledBy: string | null = null;
  @property({ type: String }) ariaDescribedBy: string | null = null;

  @state() private _computedStyles: Record<string, string> = {};

  protected willUpdate() {
    this._computeStyles();
  }

  private _computeStyles() {
    const styles: Record<string, string> = {};

    // Custom gap
    if (this.gap) {
      styles.gap = this._getSpacingStyle(this.gap);
    }

    // Custom spacing
    if (this.padding) {
      styles.padding = this._getSpacingStyle(this.padding);
    }

    if (this.margin) {
      styles.margin = this._getSpacingStyle(this.margin);
    }

    this._computedStyles = styles;
  }

  private _getSpacingStyle(value: ResponsiveValue<SpacingValue>): string {
    if (typeof value === 'object' && value !== null) {
      const responsiveValue = value as Record<string, SpacingValue>;
      return Object.entries(responsiveValue)
        .map(([key, val]) => getSpacingValue(val))
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
      new CustomEvent('stack-click', {
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
      new CustomEvent('stack-keydown', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected render() {
    const classes = {
      interactive: this.interactive && !this.disabled,
      disabled: this.disabled,
    };

    return html`
      <div
        style=${styleMap(this._computedStyles)}
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
    'mwc-stack': Stack;
  }
}
