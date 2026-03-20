import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  LayoutSize,
  LayoutColor,
  SpacingValue,
  ResponsiveValue,
  getSpacingValue,
} from './types.js';

// Stack direction options - Material Design 3 compliant
export type StackDirection =
  | 'column'
  | 'row'
  | 'column-reverse'
  | 'row-reverse';

// Stack wrapping options
export type StackWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

// Stack alignment options
export type StackAlign = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

// Stack justification options
export type StackJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

// Stack spacing presets
export type StackSpacing =
  | 'none'
  | 'xs'
  | 'small'
  | 'medium'
  | 'large'
  | 'xl'
  | 'xxl';

/**
 * Material Design 3 Stack Component
 *
 * A flexible container that distributes children in a single direction with consistent spacing.
 * Built with Material Design 3 principles, full accessibility support, and seamless theme integration.
 *
 * @element mwc-stack
 * @slot - Default slot for stack items
 *
 * @fires stack-change - Fired when stack configuration changes
 * @fires stack-click - Fired when interactive stack is clicked
 * @fires stack-focus - Fired when stack receives focus
 * @fires stack-blur - Fired when stack loses focus
 *
 * @cssprop --stack-background-color - Custom background color
 * @cssprop --stack-border-color - Custom border color
 * @cssprop --stack-border-radius - Custom border radius
 * @cssprop --stack-gap - Custom gap between stack items
 * @cssprop --stack-padding - Custom internal padding
 * @cssprop --stack-transition-duration - Custom transition duration
 * @cssprop --stack-hover-transform - Custom hover transform
 * @cssprop --stack-focus-outline - Custom focus outline
 *
 * @csspart container - The main stack container
 * @csspart item - Individual stack item wrapper
 */
@customElement('mwc-stack')
export class Stack extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      /* Material Design 3 Design Tokens */
      --_stack-transition-duration: var(--stack-transition-duration, 250ms);
      --_stack-transition-easing: cubic-bezier(0.4, 0, 0.2, 1);
      --_stack-border-radius: var(
        --stack-border-radius,
        var(--border-radius-medium, 12px)
      );
      --_stack-background-color: var(--stack-background-color, transparent);
      --_stack-border-color: var(--stack-border-color, transparent);
      --_stack-gap: var(--stack-gap, var(--spacing-3, 16px));
      --_stack-padding: var(--stack-padding, 0);
      --_stack-focus-outline: var(
        --stack-focus-outline,
        2px solid var(--color-primary-600, #1976d2)
      );
      --_stack-hover-transform: var(--stack-hover-transform, translateY(-1px));

      display: block;
      width: 100%;
      box-sizing: border-box;

      background-color: var(--_stack-background-color);
      border: 1px solid var(--_stack-border-color);
      border-radius: var(--_stack-border-radius);
      padding: var(--_stack-padding);

      transition: transform var(--_stack-transition-duration)
          var(--_stack-transition-easing),
        box-shadow var(--_stack-transition-duration)
          var(--_stack-transition-easing),
        background-color var(--_stack-transition-duration)
          var(--_stack-transition-easing);

      /* Accessibility */
      outline: none;

      /* RTL Support */
      direction: inherit;

      /* Reduced Motion Support */
      @media (prefers-reduced-motion: reduce) {
        --_stack-transition-duration: 0ms;
        --_stack-hover-transform: none;
      }
    }

    /* Container Styles */
    .stack-container {
      display: flex;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    /* Direction Variants */
    :host([direction='column']) .stack-container {
      flex-direction: column;
    }
    :host([direction='row']) .stack-container {
      flex-direction: row;
    }
    :host([direction='column-reverse']) .stack-container {
      flex-direction: column-reverse;
    }
    :host([direction='row-reverse']) .stack-container {
      flex-direction: row-reverse;
    }

    /* Wrap Variants */
    :host([wrap='nowrap']) .stack-container {
      flex-wrap: nowrap;
    }
    :host([wrap='wrap']) .stack-container {
      flex-wrap: wrap;
    }
    :host([wrap='wrap-reverse']) .stack-container {
      flex-wrap: wrap-reverse;
    }

    /* Alignment Options */
    :host([align='start']) .stack-container {
      align-items: flex-start;
    }
    :host([align='end']) .stack-container {
      align-items: flex-end;
    }
    :host([align='center']) .stack-container {
      align-items: center;
    }
    :host([align='stretch']) .stack-container {
      align-items: stretch;
    }
    :host([align='baseline']) .stack-container {
      align-items: baseline;
    }

    /* Justification Options */
    :host([justify='start']) .stack-container {
      justify-content: flex-start;
    }
    :host([justify='end']) .stack-container {
      justify-content: flex-end;
    }
    :host([justify='center']) .stack-container {
      justify-content: center;
    }
    :host([justify='space-between']) .stack-container {
      justify-content: space-between;
    }
    :host([justify='space-around']) .stack-container {
      justify-content: space-around;
    }
    :host([justify='space-evenly']) .stack-container {
      justify-content: space-evenly;
    }

    /* Spacing Presets */
    :host([spacing='none']) .stack-container {
      gap: 0;
    }
    :host([spacing='xs']) .stack-container {
      gap: var(--spacing-1, 4px);
    }
    :host([spacing='small']) .stack-container {
      gap: var(--spacing-2, 8px);
    }
    :host([spacing='medium']) .stack-container {
      gap: var(--spacing-3, 16px);
    }
    :host([spacing='large']) .stack-container {
      gap: var(--spacing-4, 24px);
    }
    :host([spacing='xl']) .stack-container {
      gap: var(--spacing-5, 32px);
    }
    :host([spacing='xxl']) .stack-container {
      gap: var(--spacing-6, 48px);
    }

    /* Size Variants - Material Design 3 Density Scale */
    :host([size='small']) {
      --_stack-gap: var(--spacing-2, 8px);
      --_stack-padding: var(--spacing-2, 8px);
      --_stack-border-radius: var(--border-radius-small, 8px);
    }

    :host([size='medium']) {
      --_stack-gap: var(--spacing-3, 16px);
      --_stack-padding: var(--spacing-3, 16px);
      --_stack-border-radius: var(--border-radius-medium, 12px);
    }

    :host([size='large']) {
      --_stack-gap: var(--spacing-4, 24px);
      --_stack-padding: var(--spacing-4, 24px);
      --_stack-border-radius: var(--border-radius-large, 16px);
    }

    /* Color Variants - Material Design 3 */
    :host([variant='primary']) {
      --_stack-background-color: var(--color-primary-100, #bbdefb);
      --_stack-border-color: var(--color-primary-300, #64b5f6);
      color: var(--color-primary-900, #0d47a1);
    }

    :host([variant='secondary']) {
      --_stack-background-color: var(--color-secondary-100, #f8bbd9);
      --_stack-border-color: var(--color-secondary-300, #f06292);
      color: var(--color-secondary-900, #880e4f);
    }

    :host([variant='success']) {
      --_stack-background-color: var(--color-success-100, #c8e6c9);
      --_stack-border-color: var(--color-success-300, #81c784);
      color: var(--color-success-900, #1b5e20);
    }

    :host([variant='warning']) {
      --_stack-background-color: var(--color-warning-100, #ffe0b2);
      --_stack-border-color: var(--color-warning-300, #ffb74d);
      color: var(--color-warning-900, #e65100);
    }

    :host([variant='error']) {
      --_stack-background-color: var(--color-error-100, #ffcdd2);
      --_stack-border-color: var(--color-error-300, #e57373);
      color: var(--color-error-900, #b71c1c);
    }

    /* Elevation Support */
    :host([elevated]) {
      --_stack-background-color: var(--surface-surface, #ffffff);
      --_stack-border-color: var(--color-grey-200, #e0e0e0);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
    }

    /* Interactive States */
    :host([interactive]) {
      cursor: pointer;
      user-select: none;
    }

    :host([interactive]:hover:not([disabled])) {
      transform: var(--_stack-hover-transform);
      box-shadow: var(--elevation-2-shadow, 0 3px 6px rgba(0, 0, 0, 0.16));
    }

    :host([interactive]:focus-visible) {
      outline: var(--_stack-focus-outline);
      outline-offset: 2px;
    }

    :host([interactive]:active:not([disabled])) {
      transform: translateY(0px);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
    }

    /* Loading State */
    :host([loading]) {
      position: relative;
      overflow: hidden;
    }

    :host([loading])::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        transparent,
        var(--color-primary-600, #1976d2),
        transparent
      );
      animation: loading-shimmer 1.5s infinite;
    }

    @keyframes loading-shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }

    /* Disabled State */
    :host([disabled]) {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
      user-select: none;
    }

    /* Responsive Behavior - Mobile First */
    @media (max-width: 599px) {
      :host([responsive]) .stack-container {
        flex-direction: column;
      }
      :host([interactive]) {
        min-height: 44px;
      }
      :host {
        --_stack-gap: max(var(--spacing-3, 16px), 12px);
      }
    }

    @media (min-width: 600px) and (max-width: 899px) {
      :host([responsive][direction='row']) .stack-container {
        flex-direction: row;
      }
    }

    @media (min-width: 900px) {
      :host([responsive][direction='row']) .stack-container {
        flex-direction: row;
      }
    }

    /* Children Behavior Modifiers */
    :host([distribute]) .stack-container {
      align-items: stretch;
    }
    :host([distribute]) ::slotted(*) {
      flex: 1 1 auto;
    }

    :host([equal-width][direction='row']) ::slotted(*),
    :host([equal-width]:not([direction])) ::slotted(*) {
      flex: 1 1 0;
      min-width: 0;
    }

    :host([equal-height][direction='column']) ::slotted(*),
    :host([equal-height][direction='column-reverse']) ::slotted(*) {
      flex: 1 1 0;
      min-height: 0;
    }

    :host([center-children]) ::slotted(*) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Dividers Between Items */
    :host([dividers]) {
      position: relative;
    }
    :host([dividers]) .stack-container::before {
      content: '';
      position: absolute;
      background: var(--color-grey-300, #e0e0e0);
    }

    /* Column dividers */
    :host([dividers][direction='column']) .stack-container::before,
    :host([dividers]:not([direction])) .stack-container::before {
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      transform: translateX(-50%);
    }

    /* Row dividers */
    :host([dividers][direction='row']) .stack-container::before,
    :host([dividers][direction='row-reverse']) .stack-container::before {
      left: 0;
      right: 0;
      top: 50%;
      height: 1px;
      transform: translateY(-50%);
    }

    /* Dark Mode Support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        --_stack-background-color: var(--color-primary-800, #1565c0);
        --_stack-border-color: var(--color-primary-600, #1976d2);
        color: var(--color-primary-100, #bbdefb);
      }

      :host([variant='secondary']) {
        --_stack-background-color: var(--color-secondary-800, #ad1457);
        --_stack-border-color: var(--color-secondary-600, #c2185b);
        color: var(--color-secondary-100, #f8bbd9);
      }

      :host([variant='success']) {
        --_stack-background-color: var(--color-success-800, #2e7d32);
        --_stack-border-color: var(--color-success-600, #43a047);
        color: var(--color-success-100, #c8e6c9);
      }

      :host([variant='warning']) {
        --_stack-background-color: var(--color-warning-800, #ef6c00);
        --_stack-border-color: var(--color-warning-600, #ff9800);
        color: var(--color-warning-100, #ffe0b2);
      }

      :host([variant='error']) {
        --_stack-background-color: var(--color-error-800, #c62828);
        --_stack-border-color: var(--color-error-600, #e53935);
        color: var(--color-error-100, #ffcdd2);
      }

      :host([elevated]) {
        --_stack-background-color: var(--surface-surface, #1e1e1e);
        --_stack-border-color: var(--color-grey-700, #616161);
      }
    }

    /* Print Styles */
    @media print {
      :host {
        box-shadow: none !important;
        background: transparent !important;
        border: 1px solid #ccc !important;
        --_stack-transition-duration: 0ms;
      }
    }

    /* High Contrast Mode Support */
    @media (prefers-contrast: high) {
      :host {
        --_stack-border-color: CanvasText;
        border-width: 2px;
      }
    }

    /* Content Styling */
    ::slotted(*) {
      box-sizing: border-box;
    }

    /* Stack item spacing - use gap when supported */
    @supports (gap: 1px) {
      .stack-container {
        gap: var(--_stack-gap);
      }
    }

    @supports not (gap: 1px) {
      /* Column direction - margin-top for spacing */
      :host([direction='column']) ::slotted(*:not(:first-child)),
      :host(:not([direction])) ::slotted(*:not(:first-child)) {
        margin-top: var(--_stack-gap);
      }

      /* Row direction - margin-left for spacing */
      :host([direction='row']) ::slotted(*:not(:first-child)),
      :host([direction='row-reverse']) ::slotted(*:not(:first-child)) {
        margin-left: var(--_stack-gap);
      }
    }
  `;

  // Core Properties
  @property({ reflect: true }) direction: StackDirection = 'column';
  @property({ reflect: true }) wrap: StackWrap = 'nowrap';
  @property({ reflect: true }) align: StackAlign = 'stretch';
  @property({ reflect: true }) justify: StackJustify = 'start';
  @property({ reflect: true }) spacing: StackSpacing = 'medium';
  @property({ reflect: true }) size: LayoutSize = 'medium';
  @property({ reflect: true }) variant?: LayoutColor;

  // State Properties
  @property({ type: Boolean, reflect: true }) elevated = false;
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property({ type: Boolean, reflect: true }) responsive = false;

  // Children Behavior Properties
  @property({ type: Boolean, reflect: true }) distribute = false;
  @property({ type: Boolean, reflect: true, attribute: 'equal-width' })
  equalWidth = false;
  @property({ type: Boolean, reflect: true, attribute: 'equal-height' })
  equalHeight = false;
  @property({ type: Boolean, reflect: true, attribute: 'center-children' })
  centerChildren = false;
  @property({ type: Boolean, reflect: true }) dividers = false;

  // Spacing Properties
  @property({ type: String }) gap?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) padding?: ResponsiveValue<SpacingValue>;
  @property({ type: String }) margin?: ResponsiveValue<SpacingValue>;

  // Accessibility Properties
  @property({ type: String }) role: string | null = null;
  @property({ type: String, attribute: 'aria-label' }) ariaLabel:
    | string
    | null = null;
  @property({ type: String, attribute: 'aria-labelledby' }) ariaLabelledBy:
    | string
    | null = null;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedBy:
    | string
    | null = null;
  @property({ type: String, attribute: 'aria-orientation' }) ariaOrientation:
    | string
    | null = null;

  // Form Properties
  @property({ type: String }) name?: string;
  @property({ type: String }) value?: string;

  // Internal State
  @state() private _computedStyles: Record<string, string> = {};
  @state() private _isKeyboardFocused = false;

  // Lifecycle Methods
  protected willUpdate() {
    this._computeStyles();
  }

  protected firstUpdated() {
    this._updateAccessibility();
  }

  // Private Methods
  private _computeStyles() {
    const styles: Record<string, string> = {};

    // Custom gap spacing
    if (this.gap) {
      styles.gap = this._getSpacingStyle(this.gap);
    }

    // Custom padding
    if (this.padding) {
      styles.padding = this._getSpacingStyle(this.padding);
    }

    // Custom margin
    if (this.margin) {
      styles.margin = this._getSpacingStyle(this.margin);
    }

    this._computedStyles = styles;
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

  private _updateAccessibility() {
    // Set default ARIA attributes based on interactivity
    if (this.interactive) {
      this.setAttribute('tabindex', '0');
      if (!this.role) {
        this.setAttribute('role', 'button');
      }
    } else {
      this.setAttribute('role', this.role || 'group');
    }

    // Set orientation based on direction
    const orientation = this.direction.includes('row')
      ? 'horizontal'
      : 'vertical';
    this.setAttribute('aria-orientation', this.ariaOrientation || orientation);

    // Update ARIA labels
    if (this.ariaLabel) {
      this.setAttribute('aria-label', this.ariaLabel);
    }
    if (this.ariaLabelledBy) {
      this.setAttribute('aria-labelledby', this.ariaLabelledBy);
    }
    if (this.ariaDescribedBy) {
      this.setAttribute('aria-describedby', this.ariaDescribedBy);
    }

    // Set disabled state
    if (this.disabled) {
      this.setAttribute('aria-disabled', 'true');
      this.removeAttribute('tabindex');
    }
  }

  // Event Handlers
  private _handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchEvent(
      new CustomEvent('stack-click', {
        detail: {
          originalEvent: event,
          direction: this.direction,
          spacing: this.spacing,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    // Handle interactive stack keyboard navigation
    if (this.interactive) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this._handleClick(event as any);
      }
    }

    // Allow arrow key navigation within stack
    if (
      ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
    ) {
      this._handleArrowNavigation(event);
    }
  }

  private _handleArrowNavigation(event: KeyboardEvent) {
    const stackItems = this.querySelectorAll('[tabindex]');
    const currentIndex = Array.from(stackItems).findIndex(
      (item) => item === document.activeElement,
    );

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    const isHorizontal = this.direction.includes('row');

    switch (event.key) {
      case 'ArrowDown':
        if (!isHorizontal) {
          nextIndex = Math.min(currentIndex + 1, stackItems.length - 1);
        }
        break;
      case 'ArrowUp':
        if (!isHorizontal) {
          nextIndex = Math.max(currentIndex - 1, 0);
        }
        break;
      case 'ArrowRight':
        if (isHorizontal) {
          nextIndex = Math.min(currentIndex + 1, stackItems.length - 1);
        }
        break;
      case 'ArrowLeft':
        if (isHorizontal) {
          nextIndex = Math.max(currentIndex - 1, 0);
        }
        break;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      (stackItems[nextIndex] as HTMLElement)?.focus();
    }
  }

  private _handleFocus(event: FocusEvent) {
    this._isKeyboardFocused = event.detail === 0; // 0 indicates keyboard focus

    this.dispatchEvent(
      new CustomEvent('stack-focus', {
        detail: {
          originalEvent: event,
          isKeyboardFocus: this._isKeyboardFocused,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleBlur(event: FocusEvent) {
    this._isKeyboardFocused = false;

    this.dispatchEvent(
      new CustomEvent('stack-blur', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // Form Integration Methods
  private _handleFormData(event: Event) {
    if (this.name && this.value !== undefined) {
      const formData = (event as any).formData as FormData;
      formData.append(this.name, String(this.value));
    }
  }

  private _handleFormReset() {
    this.value = undefined;
    this.dispatchEvent(
      new CustomEvent('stack-reset', { bubbles: true, composed: true }),
    );
  }

  // Public Methods
  /**
   * Focuses the stack element
   */
  public focus(options?: FocusOptions) {
    super.focus(options);
  }

  /**
   * Blurs the stack element
   */
  public blur() {
    super.blur();
  }

  /**
   * Scrolls to a specific stack item by index
   */
  public scrollToItem(index: number) {
    const items = this.children;
    if (items[index]) {
      (items[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }

  /**
   * Returns current stack configuration
   */
  public getStackInfo() {
    return {
      direction: this.direction,
      wrap: this.wrap,
      align: this.align,
      justify: this.justify,
      spacing: this.spacing,
      size: this.size,
      variant: this.variant,
      interactive: this.interactive,
      disabled: this.disabled,
      elevated: this.elevated,
      responsive: this.responsive,
    };
  }

  protected render() {
    const containerClasses = {
      'stack-container': true,
      interactive: this.interactive && !this.disabled,
      disabled: this.disabled,
      loading: this.loading,
      'keyboard-focused': this._isKeyboardFocused,
    };

    return html`
      <div
        part="container"
        class=${classMap(containerClasses)}
        style=${styleMap(this._computedStyles)}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        @formdata=${this._handleFormData}
        @formreset=${this._handleFormReset}
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
