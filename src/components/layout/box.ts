import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  LayoutSize,
  LayoutColor,
  LayoutState,
  SpacingValue,
  ResponsiveValue,
  AlignItems,
  JustifyContent,
  FlexDirection,
  FlexWrap,
  getSpacingValue,
  getResponsiveValue,
} from './types.js';

// Display variants
export type BoxDisplay =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none';

// Position variants
export type BoxPosition =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';

// Box elevation levels following Material Design
export type BoxElevation = 0 | 1 | 2 | 3 | 4 | 5;

// Overflow behaviors
export type BoxOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

/**
 * Material Design 3 Box Component
 *
 * A flexible container component that serves as a building block for layouts.
 * Supports spacing, colors, positioning, flex/grid layouts, and responsive design.
 *
 * @element mwc-box
 * @slot - Default slot for content
 *
 * @cssprop --box-background - Custom background color
 * @cssprop --box-color - Custom text color
 * @cssprop --box-border-color - Custom border color
 * @cssprop --box-border-radius - Custom border radius
 * @cssprop --box-shadow - Custom box shadow
 * @cssprop --box-transition - Custom transition timing
 */
@customElement('mwc-box')
export class Box extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      --_box-transition: all 250ms cubic-bezier(0.2, 0, 0, 1);

      /* CSS custom properties for theming */
      --_background: transparent;
      --_color: inherit;
      --_border-color: transparent;
      --_border-radius: 0;
      --_shadow: none;

      display: var(--_display, block);
      position: var(--_position, static);
      background: var(--box-background, var(--_background));
      color: var(--box-color, var(--_color));
      border: var(--_border-width, 0) var(--_border-style, solid)
        var(--box-border-color, var(--_border-color));
      border-radius: var(--box-border-radius, var(--_border-radius));
      box-shadow: var(--box-shadow, var(--_shadow));
      transition: var(--box-transition, var(--_box-transition));
      box-sizing: border-box;
      min-width: 0;

      /* Respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        --_box-transition: none;
      }

      /* RTL support */
      direction: var(--text-direction, ltr);
    }

    /* Size variants */
    :host([size='small']) {
      --_min-height: var(--size-small, 32px);
      min-height: var(--_min-height);
    }

    :host([size='medium']) {
      --_min-height: var(--size-medium, 44px);
      min-height: var(--_min-height);
    }

    :host([size='large']) {
      --_min-height: var(--size-large, 56px);
      min-height: var(--_min-height);
    }

    /* Color variants */
    :host([variant='primary']) {
      --_background: var(--color-primary-50, #e3f2fd);
      --_color: var(--color-primary-900, #0d47a1);
      --_border-color: var(--color-primary-200, #90caf9);
    }

    :host([variant='secondary']) {
      --_background: var(--color-secondary-50, #fce4ec);
      --_color: var(--color-secondary-900, #880e4f);
      --_border-color: var(--color-secondary-200, #f48fb1);
    }

    :host([variant='success']) {
      --_background: var(--color-success-50, #e8f5e8);
      --_color: var(--color-success-900, #1b5e20);
      --_border-color: var(--color-success-200, #a5d6a7);
    }

    :host([variant='warning']) {
      --_background: var(--color-warning-50, #fff3e0);
      --_color: var(--color-warning-900, #e65100);
      --_border-color: var(--color-warning-200, #ffcc80);
    }

    :host([variant='error']) {
      --_background: var(--color-error-50, #ffebee);
      --_color: var(--color-error-900, #b71c1c);
      --_border-color: var(--color-error-200, #ef9a9a);
    }

    /* State variants */
    :host([state='hover']:hover),
    :host(.hover) {
      --_shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
      transform: translateY(-1px);
    }

    :host([state='focus']:focus-visible),
    :host(.focus) {
      outline: 2px solid var(--color-primary-600, #1976d2);
      outline-offset: 2px;
    }

    :host([state='active']:active),
    :host(.active) {
      --_shadow: var(--elevation-2-shadow, 0 1px 5px rgba(0, 0, 0, 0.2));
      transform: translateY(1px);
    }

    :host([state='disabled']),
    :host([disabled]),
    :host(.disabled) {
      opacity: 0.6;
      pointer-events: none;
      user-select: none;
    }

    :host([state='loading']),
    :host(.loading) {
      position: relative;
      overflow: hidden;
    }

    :host([state='loading'])::before,
    :host(.loading)::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      animation: loading 1.5s infinite;
    }

    @keyframes loading {
      to {
        left: 100%;
      }
    }

    /* Elevation styles */
    :host([elevation='1']) {
      --_shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
    }

    :host([elevation='2']) {
      --_shadow: var(--elevation-2-shadow, 0 1px 5px rgba(0, 0, 0, 0.2));
    }

    :host([elevation='3']) {
      --_shadow: var(--elevation-3-shadow, 0 1px 8px rgba(0, 0, 0, 0.2));
    }

    :host([elevation='4']) {
      --_shadow: var(--elevation-4-shadow, 0 1px 10px rgba(0, 0, 0, 0.2));
    }

    :host([elevation='5']) {
      --_shadow: var(--elevation-5-shadow, 0 1px 14px rgba(0, 0, 0, 0.2));
    }

    /* Display variants */
    :host([display='flex']) {
      --_display: flex;
    }

    :host([display='inline-flex']) {
      --_display: inline-flex;
    }

    :host([display='grid']) {
      --_display: grid;
    }

    :host([display='inline-grid']) {
      --_display: inline-grid;
    }

    :host([display='inline']) {
      --_display: inline;
    }

    :host([display='inline-block']) {
      --_display: inline-block;
    }

    :host([display='none']) {
      --_display: none;
    }

    /* Position variants */
    :host([position='relative']) {
      --_position: relative;
    }

    :host([position='absolute']) {
      --_position: absolute;
    }

    :host([position='fixed']) {
      --_position: fixed;
    }

    :host([position='sticky']) {
      --_position: sticky;
    }

    /* Focus management for interactive elements */
    :host([tabindex]) {
      cursor: pointer;
    }

    :host([tabindex]:focus-visible) {
      outline: 2px solid var(--color-primary-600, #1976d2);
      outline-offset: 2px;
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        --_background: var(--color-primary-900, #0d47a1);
        --_color: var(--color-primary-50, #e3f2fd);
      }

      :host([variant='secondary']) {
        --_background: var(--color-secondary-900, #880e4f);
        --_color: var(--color-secondary-50, #fce4ec);
      }

      :host([variant='success']) {
        --_background: var(--color-success-900, #1b5e20);
        --_color: var(--color-success-50, #e8f5e8);
      }

      :host([variant='warning']) {
        --_background: var(--color-warning-900, #e65100);
        --_color: var(--color-warning-50, #fff3e0);
      }

      :host([variant='error']) {
        --_background: var(--color-error-900, #b71c1c);
        --_color: var(--color-error-50, #ffebee);
      }
    }

    /* Responsive breakpoints */
    @media (max-width: 599px) {
      :host(.mobile-hide) {
        display: none !important;
      }
    }

    @media (min-width: 600px) and (max-width: 899px) {
      :host(.tablet-hide) {
        display: none !important;
      }
    }

    @media (min-width: 900px) {
      :host(.desktop-hide) {
        display: none !important;
      }
    }

    .content {
      width: 100%;
      height: 100%;
    }
  `;

  // Layout properties
  @property({ reflect: true }) display: BoxDisplay = 'block';
  @property({ reflect: true }) position: BoxPosition = 'static';

  // Spacing properties
  @property({ type: String }) margin?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) padding?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) mt?: ResponsiveValue<SpacingValue>; // margin-top
  @property({ type: String }) mr?: ResponsiveValue<SpacingValue>; // margin-right
  @property({ type: String }) mb?: ResponsiveValue<SpacingValue>; // margin-bottom
  @property({ type: String }) ml?: ResponsiveValue<SpacingValue>; // margin-left
  @property({ type: String }) mx?: ResponsiveValue<SpacingValue>; // margin-horizontal
  @property({ type: String }) my?: ResponsiveValue<SpacingValue>; // margin-vertical
  @property({ type: String }) pt?: ResponsiveValue<SpacingValue>; // padding-top
  @property({ type: String }) pr?: ResponsiveValue<SpacingValue>; // padding-right
  @property({ type: String }) pb?: ResponsiveValue<SpacingValue>; // padding-bottom
  @property({ type: String }) pl?: ResponsiveValue<SpacingValue>; // padding-left
  @property({ type: String }) px?: ResponsiveValue<SpacingValue>; // padding-horizontal
  @property({ type: String }) py?: ResponsiveValue<SpacingValue>; // padding-vertical

  // Flexbox properties
  @property({ type: String }) alignItems?: AlignItems;
  @property({ type: String }) justifyContent?: JustifyContent;
  @property({ type: String }) flexDirection?: FlexDirection;
  @property({ type: String }) flexWrap?: FlexWrap;
  @property({ type: String }) gap?: ResponsiveValue<SpacingValue>;

  // Size and dimensions
  @property({ reflect: true }) size?: LayoutSize;
  @property({ type: String }) width?: ResponsiveValue<string>;
  @property({ type: String }) height?: ResponsiveValue<string>;
  @property({ type: String }) minWidth?: ResponsiveValue<string>;
  @property({ type: String }) minHeight?: ResponsiveValue<string>;
  @property({ type: String }) maxWidth?: ResponsiveValue<string>;
  @property({ type: String }) maxHeight?: ResponsiveValue<string>;

  // Appearance properties
  @property({ reflect: true }) variant?: LayoutColor;
  @property({ reflect: true }) state?: LayoutState;
  @property({ type: Number, reflect: true }) elevation?: BoxElevation;
  @property({ type: String }) overflow?: BoxOverflow;

  // Border properties
  @property({ type: String }) borderRadius?: ResponsiveValue<string>;
  @property({ type: String }) border?: string;
  @property({ type: String }) borderTop?: string;
  @property({ type: String }) borderRight?: string;
  @property({ type: String }) borderBottom?: string;
  @property({ type: String }) borderLeft?: string;

  // Interaction properties
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) interactive = false;

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

    // Spacing styles
    if (this.margin) styles.margin = this._getSpacingStyle(this.margin);
    if (this.padding) styles.padding = this._getSpacingStyle(this.padding);
    if (this.mt) styles.marginTop = this._getSpacingStyle(this.mt);
    if (this.mr) styles.marginRight = this._getSpacingStyle(this.mr);
    if (this.mb) styles.marginBottom = this._getSpacingStyle(this.mb);
    if (this.ml) styles.marginLeft = this._getSpacingStyle(this.ml);
    if (this.mx) {
      styles.marginLeft = this._getSpacingStyle(this.mx);
      styles.marginRight = this._getSpacingStyle(this.mx);
    }
    if (this.my) {
      styles.marginTop = this._getSpacingStyle(this.my);
      styles.marginBottom = this._getSpacingStyle(this.my);
    }
    if (this.pt) styles.paddingTop = this._getSpacingStyle(this.pt);
    if (this.pr) styles.paddingRight = this._getSpacingStyle(this.pr);
    if (this.pb) styles.paddingBottom = this._getSpacingStyle(this.pb);
    if (this.pl) styles.paddingLeft = this._getSpacingStyle(this.pl);
    if (this.px) {
      styles.paddingLeft = this._getSpacingStyle(this.px);
      styles.paddingRight = this._getSpacingStyle(this.px);
    }
    if (this.py) {
      styles.paddingTop = this._getSpacingStyle(this.py);
      styles.paddingBottom = this._getSpacingStyle(this.py);
    }

    // Flexbox styles
    if (this.alignItems) styles.alignItems = this.alignItems;
    if (this.justifyContent) styles.justifyContent = this.justifyContent;
    if (this.flexDirection) styles.flexDirection = this.flexDirection;
    if (this.flexWrap) styles.flexWrap = this.flexWrap;
    if (this.gap) styles.gap = this._getSpacingStyle(this.gap);

    // Size styles
    if (this.width) styles.width = this._getDimensionStyle(this.width);
    if (this.height) styles.height = this._getDimensionStyle(this.height);
    if (this.minWidth) styles.minWidth = this._getDimensionStyle(this.minWidth);
    if (this.minHeight)
      styles.minHeight = this._getDimensionStyle(this.minHeight);
    if (this.maxWidth) styles.maxWidth = this._getDimensionStyle(this.maxWidth);
    if (this.maxHeight)
      styles.maxHeight = this._getDimensionStyle(this.maxHeight);

    // Border styles
    if (this.borderRadius)
      styles.borderRadius = this._getDimensionStyle(this.borderRadius);
    if (this.border) styles.border = this.border;
    if (this.borderTop) styles.borderTop = this.borderTop;
    if (this.borderRight) styles.borderRight = this.borderRight;
    if (this.borderBottom) styles.borderBottom = this.borderBottom;
    if (this.borderLeft) styles.borderLeft = this.borderLeft;

    // Other styles
    if (this.overflow) styles.overflow = this.overflow;

    this._computedStyles = styles;
  }

  private _getSpacingStyle(value: ResponsiveValue<SpacingValue>): string {
    if (typeof value === 'object' && value !== null) {
      // Handle responsive values
      const responsiveValue = value as Record<string, SpacingValue>;
      return Object.entries(responsiveValue)
        .map(([key, val]) => getSpacingValue(val))
        .join(' ');
    }
    return getSpacingValue(value as SpacingValue);
  }

  private _getDimensionStyle(value: ResponsiveValue<string>): string {
    if (typeof value === 'object' && value !== null) {
      const responsiveValue = value as Record<string, string>;
      return Object.values(responsiveValue)[0] || '';
    }
    return value as string;
  }

  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('box-click', {
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
      new CustomEvent('box-keydown', {
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
        class="content ${classMap(classes)}"
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
    'mwc-box': Box;
  }
}
