import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ResponsiveValue, SpacingValue, getSpacingValue } from './types.js';

// Size variants following Material Design 3
export type BoxSize = 'small' | 'medium' | 'large';

// Color variants following design token system
export type BoxVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

// State variants for interactive boxes
export type BoxState =
  | 'default'
  | 'hover'
  | 'focus'
  | 'active'
  | 'disabled'
  | 'loading';

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

// Flex direction
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

// Flex wrap
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

// Align items
export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';

// Justify content
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

// Position variants
export type BoxPosition =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';

// Elevation levels following Material Design 3
export type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 5;

// Border radius variants
export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

/**
 * Box Component - Material Design 3 Implementation
 *
 * A versatile container component that follows Material Design 3 specifications.
 * Provides comprehensive layout utilities, theming, and accessibility features.
 *
 * @element mwc-box
 * @slot - Default slot for content
 * @fires box-focus - Fired when box receives focus (when interactive)
 * @fires box-blur - Fired when box loses focus (when interactive)
 * @fires box-click - Fired when box is clicked (when interactive)
 * @fires box-hover - Fired when box is hovered (when interactive)
 * @fires box-state-change - Fired when interactive state changes
 *
 * @cssprop --box-color - Text color override
 * @cssprop --box-background-color - Background color override
 * @cssprop --box-border-color - Border color override
 * @cssprop --box-border-radius - Border radius override
 * @cssprop --box-elevation - Box shadow override
 * @cssprop --box-transition-duration - Animation duration override (default: 280ms)
 * @cssprop --box-transition-easing - Animation easing override (default: cubic-bezier(0.4, 0.0, 0.2, 1))
 */
@customElement('mwc-box')
export class Box extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      display: contents;
      box-sizing: border-box;
    }

    .box {
      /* Base styles */
      position: relative;
      box-sizing: border-box;
      outline: none;
      border: none;
      font-family: var(--font-family-base, 'Roboto', sans-serif);

      /* Material Design 3 motion */
      transition-property: background-color, color, border-color, box-shadow,
        transform;
      transition-duration: var(--box-transition-duration, 280ms);
      transition-timing-function: var(
        --box-transition-easing,
        cubic-bezier(0.4, 0, 0.2, 1)
      );

      /* Respect reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }

    /* Size variants */
    .box--size-small {
      min-height: var(--spacing-6, 24px);
      padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
    }

    .box--size-medium {
      min-height: var(--spacing-11, 44px); /* Touch-friendly minimum */
      padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
    }

    .box--size-large {
      min-height: var(--spacing-14, 56px);
      padding: var(--spacing-3, 12px) var(--spacing-4, 16px);
    }

    /* Color variants */
    .box--variant-default {
      background-color: var(
        --box-background-color,
        var(--color-surface, #fefbff)
      );
      color: var(--box-color, var(--color-on-surface, #1c1b1f));
      border: 1px solid var(--box-border-color, var(--color-outline, #79747e));
    }

    .box--variant-primary {
      background-color: var(
        --box-background-color,
        var(--color-primary, #6750a4)
      );
      color: var(--box-color, var(--color-on-primary, #ffffff));
      border: 1px solid var(--box-border-color, var(--color-primary, #6750a4));
    }

    .box--variant-secondary {
      background-color: var(
        --box-background-color,
        var(--color-secondary, #625b71)
      );
      color: var(--box-color, var(--color-on-secondary, #ffffff));
      border: 1px solid var(--box-border-color, var(--color-secondary, #625b71));
    }

    .box--variant-success {
      background-color: var(
        --box-background-color,
        var(--color-success, #006d3b)
      );
      color: var(--box-color, var(--color-on-success, #ffffff));
      border: 1px solid var(--box-border-color, var(--color-success, #006d3b));
    }

    .box--variant-warning {
      background-color: var(
        --box-background-color,
        var(--color-warning, #8b5a2b)
      );
      color: var(--box-color, var(--color-on-warning, #ffffff));
      border: 1px solid var(--box-border-color, var(--color-warning, #8b5a2b));
    }

    .box--variant-error {
      background-color: var(
        --box-background-color,
        var(--color-error, #ba1a1a)
      );
      color: var(--box-color, var(--color-on-error, #ffffff));
      border: 1px solid var(--box-border-color, var(--color-error, #ba1a1a));
    }

    /* Interactive states */
    .box--interactive {
      cursor: pointer;
      user-select: none;

      /* Touch feedback */
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
    }

    .box--interactive:hover:not(.box--disabled) {
      transform: var(--box-hover-transform, translateY(-1px));
    }

    .box--interactive:focus-visible {
      outline: 2px solid var(--color-primary, #6750a4);
      outline-offset: 2px;
    }

    .box--interactive:active:not(.box--disabled) {
      transform: var(--box-active-transform, translateY(0px));
    }

    /* Disabled state */
    .box--disabled {
      opacity: 0.38;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Loading state */
    .box--loading {
      position: relative;
      pointer-events: none;
    }

    .box--loading::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Elevation levels */
    .box--elevation-0 {
      box-shadow: var(--box-elevation, none);
    }

    .box--elevation-1 {
      box-shadow: var(
        --box-elevation,
        var(
          --elevation-1,
          0px 1px 3px rgba(0, 0, 0, 0.12),
          0px 1px 2px rgba(0, 0, 0, 0.24)
        )
      );
    }

    .box--elevation-2 {
      box-shadow: var(
        --box-elevation,
        var(
          --elevation-2,
          0px 3px 6px rgba(0, 0, 0, 0.16),
          0px 3px 6px rgba(0, 0, 0, 0.23)
        )
      );
    }

    .box--elevation-3 {
      box-shadow: var(
        --box-elevation,
        var(
          --elevation-3,
          0px 10px 20px rgba(0, 0, 0, 0.19),
          0px 6px 6px rgba(0, 0, 0, 0.23)
        )
      );
    }

    .box--elevation-4 {
      box-shadow: var(
        --box-elevation,
        var(
          --elevation-4,
          0px 14px 28px rgba(0, 0, 0, 0.25),
          0px 10px 10px rgba(0, 0, 0, 0.22)
        )
      );
    }

    .box--elevation-5 {
      box-shadow: var(
        --box-elevation,
        var(
          --elevation-5,
          0px 19px 38px rgba(0, 0, 0, 0.3),
          0px 15px 12px rgba(0, 0, 0, 0.22)
        )
      );
    }

    /* Border radius variants */
    .box--radius-none {
      border-radius: 0;
    }

    .box--radius-small {
      border-radius: var(--box-border-radius, var(--border-radius-small, 4px));
    }

    .box--radius-medium {
      border-radius: var(--box-border-radius, var(--border-radius-medium, 8px));
    }

    .box--radius-large {
      border-radius: var(--box-border-radius, var(--border-radius-large, 16px));
    }

    .box--radius-full {
      border-radius: var(--box-border-radius, 9999px);
    }

    /* RTL support */
    :host([dir='rtl']) .box {
      direction: rtl;
    }

    /* Dark theme support */
    @media (prefers-color-scheme: dark) {
      .box--variant-default {
        background-color: var(
          --box-background-color,
          var(--color-surface-dark, #1c1b1f)
        );
        color: var(--box-color, var(--color-on-surface-dark, #e6e1e5));
        border-color: var(
          --box-border-color,
          var(--color-outline-dark, #938f99)
        );
      }
    }

    /* High contrast support */
    @media (prefers-contrast: high) {
      .box {
        border-width: 2px;
      }
    }

    /* Focus enhancement for keyboard navigation */
    .box--interactive:focus-visible {
      outline-width: 3px;
    }

    /* Touch target enhancement */
    @media (pointer: coarse) {
      .box--interactive {
        min-height: var(--touch-target-size, 44px);
        min-width: var(--touch-target-size, 44px);
      }
    }
  `;

  // Core properties
  @property({ reflect: true }) size: BoxSize = 'medium';
  @property({ reflect: true }) variant: BoxVariant = 'default';
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: Number, reflect: true }) elevation: ElevationLevel = 0;
  @property({ reflect: true }) borderRadius: BorderRadius = 'medium';

  // Layout properties
  @property() display?: ResponsiveValue<BoxDisplay>;
  @property() position?: ResponsiveValue<BoxPosition>;
  @property() top?: ResponsiveValue<string>;
  @property() right?: ResponsiveValue<string>;
  @property() bottom?: ResponsiveValue<string>;
  @property() left?: ResponsiveValue<string>;
  @property() zIndex?: ResponsiveValue<number>;

  // Flexbox properties
  @property() flexDirection?: ResponsiveValue<FlexDirection>;
  @property() flexWrap?: ResponsiveValue<FlexWrap>;
  @property() alignItems?: ResponsiveValue<AlignItems>;
  @property() justifyContent?: ResponsiveValue<JustifyContent>;
  @property() gap?: ResponsiveValue<SpacingValue>;

  // Spacing properties (margin)
  @property() m?: ResponsiveValue<SpacingValue>;
  @property() mt?: ResponsiveValue<SpacingValue>;
  @property() mr?: ResponsiveValue<SpacingValue>;
  @property() mb?: ResponsiveValue<SpacingValue>;
  @property() ml?: ResponsiveValue<SpacingValue>;
  @property() mx?: ResponsiveValue<SpacingValue>;
  @property() my?: ResponsiveValue<SpacingValue>;

  // Spacing properties (padding)
  @property() p?: ResponsiveValue<SpacingValue>;
  @property() pt?: ResponsiveValue<SpacingValue>;
  @property() pr?: ResponsiveValue<SpacingValue>;
  @property() pb?: ResponsiveValue<SpacingValue>;
  @property() pl?: ResponsiveValue<SpacingValue>;
  @property() px?: ResponsiveValue<SpacingValue>;
  @property() py?: ResponsiveValue<SpacingValue>;

  // Size properties
  @property() width?: ResponsiveValue<string>;
  @property() height?: ResponsiveValue<string>;
  @property() minWidth?: ResponsiveValue<string>;
  @property() minHeight?: ResponsiveValue<string>;
  @property() maxWidth?: ResponsiveValue<string>;
  @property() maxHeight?: ResponsiveValue<string>;

  // Visual properties
  @property() bgcolor?: ResponsiveValue<string>;
  @property() color?: ResponsiveValue<string>;
  @property() border?: ResponsiveValue<string>;
  @property() customBorderRadius?: ResponsiveValue<string>;
  @property() boxShadow?: ResponsiveValue<string>;
  @property() overflow?: ResponsiveValue<string>;

  // Accessibility
  @property() role: string | null = null;
  @property() ariaLabel: string | null = null;
  @property() ariaLabelledby: string | null = null;
  @property() ariaDescribedby: string | null = null;
  @property({ type: Number }) tabIndex: number = -1;

  // Form integration
  @property() name?: string;
  @property() value?: string;

  // Internal state
  @state() private _currentState: BoxState = 'default';
  @state() private _hasFocus = false;

  // Form data support
  static formAssociated = true;
  private _internals: ElementInternals;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  // Lifecycle methods
  connectedCallback() {
    super.connectedCallback();
    this._setupEventListeners();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanupEventListeners();
  }

  // Event handling setup
  private _setupEventListeners() {
    if (this.interactive) {
      this.addEventListener('focus', this._onFocus);
      this.addEventListener('blur', this._onBlur);
      this.addEventListener('click', this._onClick);
      this.addEventListener('mouseenter', this._onMouseEnter);
      this.addEventListener('mouseleave', this._onMouseLeave);
      this.addEventListener('keydown', this._onKeyDown);
    }
  }

  private _cleanupEventListeners() {
    this.removeEventListener('focus', this._onFocus);
    this.removeEventListener('blur', this._onBlur);
    this.removeEventListener('click', this._onClick);
    this.removeEventListener('mouseenter', this._onMouseEnter);
    this.removeEventListener('mouseleave', this._onMouseLeave);
    this.removeEventListener('keydown', this._onKeyDown);
  }

  // Event handlers
  private _onFocus = (event: FocusEvent) => {
    if (this.disabled || !this.interactive) return;
    this._hasFocus = true;
    this._updateState('focus');
    this._dispatchCustomEvent('box-focus', { originalEvent: event });
  };

  private _onBlur = (event: FocusEvent) => {
    if (this.disabled || !this.interactive) return;
    this._hasFocus = false;
    this._updateState('default');
    this._dispatchCustomEvent('box-blur', { originalEvent: event });
  };

  private _onClick = (event: MouseEvent) => {
    if (this.disabled || !this.interactive) return;
    this._updateState('active');
    this._dispatchCustomEvent('box-click', { originalEvent: event });

    // Reset to focus state after click
    setTimeout(() => {
      if (this._hasFocus) {
        this._updateState('focus');
      } else {
        this._updateState('default');
      }
    }, 150);
  };

  private _onMouseEnter = (event: MouseEvent) => {
    if (this.disabled || !this.interactive) return;
    if (!this._hasFocus) {
      this._updateState('hover');
    }
    this._dispatchCustomEvent('box-hover', {
      originalEvent: event,
      type: 'enter',
    });
  };

  private _onMouseLeave = (event: MouseEvent) => {
    if (this.disabled || !this.interactive) return;
    if (!this._hasFocus) {
      this._updateState('default');
    }
    this._dispatchCustomEvent('box-hover', {
      originalEvent: event,
      type: 'leave',
    });
  };

  private _onKeyDown = (event: KeyboardEvent) => {
    if (this.disabled || !this.interactive) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._onClick(event as any);
    }
  };

  // State management
  private _updateState(newState: BoxState) {
    const oldState = this._currentState;
    this._currentState = newState;

    if (oldState !== newState) {
      this._dispatchCustomEvent('box-state-change', {
        previousState: oldState,
        currentState: newState,
      });
    }
  }

  // Custom event dispatcher
  private _dispatchCustomEvent(type: string, detail: any) {
    this.dispatchEvent(
      new CustomEvent(type, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }

  // Style computation helpers
  private _getResponsiveStyle(value: ResponsiveValue<any> | undefined): any {
    if (value === undefined) return undefined;

    if (typeof value === 'object' && value !== null) {
      // For responsive objects, return the first available value
      // In a real implementation, you'd use media queries or container queries
      const values = Object.values(value);
      return values[0];
    }

    return value;
  }

  private _getSpacingStyle(
    value: ResponsiveValue<SpacingValue> | undefined,
  ): string | undefined {
    if (value === undefined) return undefined;

    const resolved = this._getResponsiveStyle(value);
    return resolved !== undefined ? getSpacingValue(resolved) : undefined;
  }

  private _buildDynamicStyles(): Record<string, string> {
    const styles: Record<string, string> = {};

    // Display and positioning
    const display = this._getResponsiveStyle(this.display);
    if (display) styles.display = display;

    const position = this._getResponsiveStyle(this.position);
    if (position) styles.position = position;

    const top = this._getResponsiveStyle(this.top);
    if (top) styles.top = top;

    const right = this._getResponsiveStyle(this.right);
    if (right) styles.right = right;

    const bottom = this._getResponsiveStyle(this.bottom);
    if (bottom) styles.bottom = bottom;

    const left = this._getResponsiveStyle(this.left);
    if (left) styles.left = left;

    const zIndex = this._getResponsiveStyle(this.zIndex);
    if (zIndex !== undefined) styles.zIndex = String(zIndex);

    // Auto-set display: flex when flex properties are used
    const hasFlexProps =
      this.flexDirection ||
      this.flexWrap ||
      this.alignItems ||
      this.justifyContent ||
      this.gap;
    if (hasFlexProps && !this.display) {
      styles.display = 'flex';
    }

    // Flexbox properties
    const flexDirection = this._getResponsiveStyle(this.flexDirection);
    if (flexDirection) styles.flexDirection = flexDirection;

    const flexWrap = this._getResponsiveStyle(this.flexWrap);
    if (flexWrap) styles.flexWrap = flexWrap;

    const alignItems = this._getResponsiveStyle(this.alignItems);
    if (alignItems) styles.alignItems = alignItems;

    const justifyContent = this._getResponsiveStyle(this.justifyContent);
    if (justifyContent) styles.justifyContent = justifyContent;

    const gap = this._getSpacingStyle(this.gap);
    if (gap) styles.gap = gap;

    // Margin properties
    const m = this._getSpacingStyle(this.m);
    if (m) styles.margin = m;

    const mt = this._getSpacingStyle(this.mt);
    if (mt) styles.marginTop = mt;

    const mr = this._getSpacingStyle(this.mr);
    if (mr) styles.marginRight = mr;

    const mb = this._getSpacingStyle(this.mb);
    if (mb) styles.marginBottom = mb;

    const ml = this._getSpacingStyle(this.ml);
    if (ml) styles.marginLeft = ml;

    const mx = this._getSpacingStyle(this.mx);
    if (mx) {
      styles.marginLeft = mx;
      styles.marginRight = mx;
    }

    const my = this._getSpacingStyle(this.my);
    if (my) {
      styles.marginTop = my;
      styles.marginBottom = my;
    }

    // Padding properties (only if not using size variants)
    if (
      !this.p &&
      !this.pt &&
      !this.pr &&
      !this.pb &&
      !this.pl &&
      !this.px &&
      !this.py
    ) {
      // Let CSS classes handle padding via size variants
    } else {
      // Override with custom padding
      const p = this._getSpacingStyle(this.p);
      if (p) styles.padding = p;

      const pt = this._getSpacingStyle(this.pt);
      if (pt) styles.paddingTop = pt;

      const pr = this._getSpacingStyle(this.pr);
      if (pr) styles.paddingRight = pr;

      const pb = this._getSpacingStyle(this.pb);
      if (pb) styles.paddingBottom = pb;

      const pl = this._getSpacingStyle(this.pl);
      if (pl) styles.paddingLeft = pl;

      const px = this._getSpacingStyle(this.px);
      if (px) {
        styles.paddingLeft = px;
        styles.paddingRight = px;
      }

      const py = this._getSpacingStyle(this.py);
      if (py) {
        styles.paddingTop = py;
        styles.paddingBottom = py;
      }
    }

    // Size properties
    const width = this._getResponsiveStyle(this.width);
    if (width) styles.width = width;

    const height = this._getResponsiveStyle(this.height);
    if (height) styles.height = height;

    const minWidth = this._getResponsiveStyle(this.minWidth);
    if (minWidth) styles.minWidth = minWidth;

    const minHeight = this._getResponsiveStyle(this.minHeight);
    if (minHeight) styles.minHeight = minHeight;

    const maxWidth = this._getResponsiveStyle(this.maxWidth);
    if (maxWidth) styles.maxWidth = maxWidth;

    const maxHeight = this._getResponsiveStyle(this.maxHeight);
    if (maxHeight) styles.maxHeight = maxHeight;

    // Visual properties (override theme defaults)
    const bgcolor = this._getResponsiveStyle(this.bgcolor);
    if (bgcolor) styles.backgroundColor = bgcolor;

    const color = this._getResponsiveStyle(this.color);
    if (color) styles.color = color;

    const border = this._getResponsiveStyle(this.border);
    if (border) styles.border = border;

    const customBorderRadius = this._getResponsiveStyle(
      this.customBorderRadius,
    );
    if (customBorderRadius) styles.borderRadius = customBorderRadius;

    const boxShadow = this._getResponsiveStyle(this.boxShadow);
    if (boxShadow) styles.boxShadow = boxShadow;

    const overflow = this._getResponsiveStyle(this.overflow);
    if (overflow) styles.overflow = overflow;

    return styles;
  }

  // Form integration methods
  get form() {
    return this._internals.form;
  }

  get validity() {
    return this._internals.validity;
  }

  get validationMessage() {
    return this._internals.validationMessage;
  }

  checkValidity() {
    return this._internals.checkValidity();
  }

  reportValidity() {
    return this._internals.reportValidity();
  }

  // Public methods
  focus(options?: FocusOptions) {
    if (this.interactive) {
      (this.shadowRoot?.querySelector('.box') as HTMLElement)?.focus(options);
    }
  }

  blur() {
    if (this.interactive) {
      (this.shadowRoot?.querySelector('.box') as HTMLElement)?.blur();
    }
  }

  protected render() {
    const dynamicStyles = this._buildDynamicStyles();

    const classes = {
      box: true,
      [`box--size-${this.size}`]: true,
      [`box--variant-${this.variant}`]: true,
      [`box--elevation-${this.elevation}`]: true,
      [`box--radius-${this.borderRadius}`]: true,
      'box--interactive': this.interactive,
      'box--disabled': this.disabled,
      'box--loading': this.loading,
      [`box--state-${this._currentState}`]: this.interactive,
    };

    return html`
      <div
        class=${classMap(classes)}
        style=${styleMap(dynamicStyles)}
        role=${ifDefined(
          this.role || (this.interactive ? 'button' : undefined),
        )}
        aria-label=${ifDefined(this.ariaLabel)}
        aria-labelledby=${ifDefined(this.ariaLabelledby)}
        aria-describedby=${ifDefined(this.ariaDescribedby)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        tabindex=${ifDefined(
          this.interactive
            ? this.tabIndex >= 0
              ? this.tabIndex
              : 0
            : undefined,
        )}
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
