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

// Grid system variants following Material Design 3
export type GridSystem = 'css-grid' | 'flexbox';

// Grid layout density variants
export type GridDensity = 'compact' | 'comfortable' | 'spacious';

// Grid responsive column counts (12-column system + auto)
export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto';

// Alignment options
export type AlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

// Grid auto-flow directions
export type GridAutoFlow = 'row' | 'column' | 'row-dense' | 'column-dense';

/**
 * Material Design 3 Grid Component
 *
 * A comprehensive responsive grid system that supports both CSS Grid and Flexbox layouts.
 * Built with Material Design 3 principles, full accessibility support, and seamless theme integration.
 *
 * @element mwc-grid
 * @slot - Default slot for grid items (mwc-grid-item components)
 *
 * @fires grid-change - Fired when grid configuration changes
 * @fires grid-click - Fired when interactive grid is clicked
 * @fires grid-focus - Fired when grid receives focus
 * @fires grid-blur - Fired when grid loses focus
 *
 * @cssprop --grid-background-color - Custom background color
 * @cssprop --grid-border-color - Custom border color
 * @cssprop --grid-border-radius - Custom border radius
 * @cssprop --grid-gap - Custom gap between grid items
 * @cssprop --grid-padding - Custom internal padding
 * @cssprop --grid-transition-duration - Custom transition duration
 * @cssprop --grid-hover-transform - Custom hover transform
 * @cssprop --grid-focus-outline - Custom focus outline
 *
 * @csspart container - The main grid container
 * @csspart item - Individual grid item wrapper
 */
@customElement('mwc-grid')
export class Grid extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      /* Material Design 3 Design Tokens */
      --_grid-transition-duration: var(--grid-transition-duration, 250ms);
      --_grid-transition-easing: cubic-bezier(0.4, 0, 0.2, 1);
      --_grid-border-radius: var(
        --grid-border-radius,
        var(--border-radius-medium, 12px)
      );
      --_grid-background-color: var(--grid-background-color, transparent);
      --_grid-border-color: var(--grid-border-color, transparent);
      --_grid-gap: var(--grid-gap, var(--spacing-3, 16px));
      --_grid-padding: var(--grid-padding, 0);
      --_grid-focus-outline: var(
        --grid-focus-outline,
        2px solid var(--color-primary-600, #1976d2)
      );
      --_grid-hover-transform: var(--grid-hover-transform, translateY(-2px));

      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;

      background-color: var(--_grid-background-color);
      border: 1px solid var(--_grid-border-color);
      border-radius: var(--_grid-border-radius);
      padding: var(--_grid-padding);

      transition: transform var(--_grid-transition-duration)
          var(--_grid-transition-easing),
        box-shadow var(--_grid-transition-duration)
          var(--_grid-transition-easing),
        background-color var(--_grid-transition-duration)
          var(--_grid-transition-easing);

      /* Accessibility */
      outline: none;

      /* RTL Support */
      direction: inherit;

      /* Reduced Motion Support */
      @media (prefers-reduced-motion: reduce) {
        --_grid-transition-duration: 0ms;
        --_grid-hover-transform: none;
      }
    }

    /* Container Styles */
    .grid-container {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: var(--_display, grid);
    }

    /* CSS Grid System */
    :host([system='css-grid']) .grid-container {
      display: grid;
      grid-template-columns: var(--_grid-columns, repeat(12, 1fr));
      grid-auto-rows: var(--_grid-rows, auto);
      grid-auto-flow: var(--_grid-auto-flow, row);
      gap: var(--_grid-gap);
      align-items: var(--_align-items, stretch);
      justify-content: var(--_justify-content, stretch);
    }

    /* Flexbox System */
    :host([system='flexbox']) .grid-container {
      display: flex;
      flex-wrap: wrap;
      gap: var(--_grid-gap);
      align-items: var(--_align-items, stretch);
      justify-content: var(--_justify-content, flex-start);
    }

    /* Column Presets */
    :host([columns='1']) {
      --_grid-columns: repeat(1, 1fr);
    }
    :host([columns='2']) {
      --_grid-columns: repeat(2, 1fr);
    }
    :host([columns='3']) {
      --_grid-columns: repeat(3, 1fr);
    }
    :host([columns='4']) {
      --_grid-columns: repeat(4, 1fr);
    }
    :host([columns='5']) {
      --_grid-columns: repeat(5, 1fr);
    }
    :host([columns='6']) {
      --_grid-columns: repeat(6, 1fr);
    }
    :host([columns='7']) {
      --_grid-columns: repeat(7, 1fr);
    }
    :host([columns='8']) {
      --_grid-columns: repeat(8, 1fr);
    }
    :host([columns='9']) {
      --_grid-columns: repeat(9, 1fr);
    }
    :host([columns='10']) {
      --_grid-columns: repeat(10, 1fr);
    }
    :host([columns='11']) {
      --_grid-columns: repeat(11, 1fr);
    }
    :host([columns='12']) {
      --_grid-columns: repeat(12, 1fr);
    }
    :host([columns='auto']) {
      --_grid-columns: repeat(
        auto-fit,
        minmax(var(--min-column-width, 250px), 1fr)
      );
    }

    /* Size Variants - Material Design 3 Density Scale */
    :host([size='small']) {
      --_grid-gap: var(--spacing-2, 8px);
      --_grid-padding: var(--spacing-2, 8px);
      --_grid-border-radius: var(--border-radius-small, 8px);
    }

    :host([size='medium']) {
      --_grid-gap: var(--spacing-3, 16px);
      --_grid-padding: var(--spacing-3, 16px);
      --_grid-border-radius: var(--border-radius-medium, 12px);
    }

    :host([size='large']) {
      --_grid-gap: var(--spacing-4, 24px);
      --_grid-padding: var(--spacing-4, 24px);
      --_grid-border-radius: var(--border-radius-large, 16px);
    }

    /* Density Variants */
    :host([density='compact']) {
      --_grid-gap: var(--spacing-1, 4px);
      --_grid-padding: var(--spacing-1, 4px);
    }

    :host([density='comfortable']) {
      --_grid-gap: var(--spacing-3, 16px);
      --_grid-padding: var(--spacing-3, 16px);
    }

    :host([density='spacious']) {
      --_grid-gap: var(--spacing-5, 32px);
      --_grid-padding: var(--spacing-4, 24px);
    }

    /* Color Variants - Material Design 3 */
    :host([variant='primary']) {
      --_grid-background-color: var(--color-primary-100, #bbdefb);
      --_grid-border-color: var(--color-primary-300, #64b5f6);
      color: var(--color-primary-900, #0d47a1);
    }

    :host([variant='secondary']) {
      --_grid-background-color: var(--color-secondary-100, #f8bbd9);
      --_grid-border-color: var(--color-secondary-300, #f06292);
      color: var(--color-secondary-900, #880e4f);
    }

    :host([variant='success']) {
      --_grid-background-color: var(--color-success-100, #c8e6c9);
      --_grid-border-color: var(--color-success-300, #81c784);
      color: var(--color-success-900, #1b5e20);
    }

    :host([variant='warning']) {
      --_grid-background-color: var(--color-warning-100, #ffe0b2);
      --_grid-border-color: var(--color-warning-300, #ffb74d);
      color: var(--color-warning-900, #e65100);
    }

    :host([variant='error']) {
      --_grid-background-color: var(--color-error-100, #ffcdd2);
      --_grid-border-color: var(--color-error-300, #e57373);
      color: var(--color-error-900, #b71c1c);
    }

    /* Elevation Support */
    :host([elevated]) {
      --_grid-background-color: var(--surface-surface, #ffffff);
      --_grid-border-color: var(--color-grey-200, #e0e0e0);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
    }

    /* Interactive States */
    :host([interactive]) {
      cursor: pointer;
      user-select: none;
    }

    :host([interactive]:hover:not([disabled])) {
      transform: var(--_grid-hover-transform);
      box-shadow: var(--elevation-2-shadow, 0 3px 6px rgba(0, 0, 0, 0.16));
    }

    :host([interactive]:focus-visible) {
      outline: var(--_grid-focus-outline);
      outline-offset: 2px;
    }

    :host([interactive]:active:not([disabled])) {
      transform: translateY(-1px);
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

    /* Alignment Options */
    :host([align='start']) {
      --_align-items: flex-start;
    }
    :host([align='end']) {
      --_align-items: flex-end;
    }
    :host([align='center']) {
      --_align-items: center;
    }
    :host([align='stretch']) {
      --_align-items: stretch;
    }
    :host([align='baseline']) {
      --_align-items: baseline;
    }

    :host([justify='start']) {
      --_justify-content: flex-start;
    }
    :host([justify='end']) {
      --_justify-content: flex-end;
    }
    :host([justify='center']) {
      --_justify-content: center;
    }
    :host([justify='space-between']) {
      --_justify-content: space-between;
    }
    :host([justify='space-around']) {
      --_justify-content: space-around;
    }
    :host([justify='space-evenly']) {
      --_justify-content: space-evenly;
    }

    /* Auto Flow for CSS Grid */
    :host([auto-flow='row']) {
      --_grid-auto-flow: row;
    }
    :host([auto-flow='column']) {
      --_grid-auto-flow: column;
    }
    :host([auto-flow='row-dense']) {
      --_grid-auto-flow: row dense;
    }
    :host([auto-flow='column-dense']) {
      --_grid-auto-flow: column dense;
    }

    /* Responsive Breakpoints - Mobile First Approach */
    /* Mobile (0-599px) - Touch-friendly 44px minimum targets */
    @media (max-width: 599px) {
      :host([mobile-columns='1']) {
        --_grid-columns: repeat(1, 1fr);
      }
      :host([mobile-columns='2']) {
        --_grid-columns: repeat(2, 1fr);
      }
      :host([responsive]:not([mobile-columns])) {
        --_grid-columns: 1fr;
      }

      /* Ensure touch targets are at least 44px */
      :host {
        --_grid-gap: max(var(--spacing-3, 16px), 8px);
      }
    }

    /* Tablet (600-899px) */
    @media (min-width: 600px) and (max-width: 899px) {
      :host([tablet-columns='1']) {
        --_grid-columns: repeat(1, 1fr);
      }
      :host([tablet-columns='2']) {
        --_grid-columns: repeat(2, 1fr);
      }
      :host([tablet-columns='3']) {
        --_grid-columns: repeat(3, 1fr);
      }
      :host([tablet-columns='4']) {
        --_grid-columns: repeat(4, 1fr);
      }
      :host([tablet-columns='6']) {
        --_grid-columns: repeat(6, 1fr);
      }
      :host([tablet-columns='auto']) {
        --_grid-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    }

    /* Desktop (900px+) */
    @media (min-width: 900px) {
      :host([desktop-columns='1']) {
        --_grid-columns: repeat(1, 1fr);
      }
      :host([desktop-columns='2']) {
        --_grid-columns: repeat(2, 1fr);
      }
      :host([desktop-columns='3']) {
        --_grid-columns: repeat(3, 1fr);
      }
      :host([desktop-columns='4']) {
        --_grid-columns: repeat(4, 1fr);
      }
      :host([desktop-columns='5']) {
        --_grid-columns: repeat(5, 1fr);
      }
      :host([desktop-columns='6']) {
        --_grid-columns: repeat(6, 1fr);
      }
      :host([desktop-columns='7']) {
        --_grid-columns: repeat(7, 1fr);
      }
      :host([desktop-columns='8']) {
        --_grid-columns: repeat(8, 1fr);
      }
      :host([desktop-columns='9']) {
        --_grid-columns: repeat(9, 1fr);
      }
      :host([desktop-columns='10']) {
        --_grid-columns: repeat(10, 1fr);
      }
      :host([desktop-columns='11']) {
        --_grid-columns: repeat(11, 1fr);
      }
      :host([desktop-columns='12']) {
        --_grid-columns: repeat(12, 1fr);
      }
      :host([desktop-columns='auto']) {
        --_grid-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    }

    /* Dark Mode Support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        --_grid-background-color: var(--color-primary-800, #1565c0);
        --_grid-border-color: var(--color-primary-600, #1976d2);
        color: var(--color-primary-100, #bbdefb);
      }

      :host([variant='secondary']) {
        --_grid-background-color: var(--color-secondary-800, #ad1457);
        --_grid-border-color: var(--color-secondary-600, #c2185b);
        color: var(--color-secondary-100, #f8bbd9);
      }

      :host([variant='success']) {
        --_grid-background-color: var(--color-success-800, #2e7d32);
        --_grid-border-color: var(--color-success-600, #43a047);
        color: var(--color-success-100, #c8e6c9);
      }

      :host([variant='warning']) {
        --_grid-background-color: var(--color-warning-800, #ef6c00);
        --_grid-border-color: var(--color-warning-600, #ff9800);
        color: var(--color-warning-100, #ffe0b2);
      }

      :host([variant='error']) {
        --_grid-background-color: var(--color-error-800, #c62828);
        --_grid-border-color: var(--color-error-600, #e53935);
        color: var(--color-error-100, #ffcdd2);
      }

      :host([elevated]) {
        --_grid-background-color: var(--surface-surface, #1e1e1e);
        --_grid-border-color: var(--color-grey-700, #616161);
      }
    }

    /* Print Styles */
    @media print {
      :host {
        box-shadow: none !important;
        background: transparent !important;
        border: 1px solid #ccc !important;
        --_grid-transition-duration: 0ms;
        --_grid-gap: var(--spacing-2, 8px);
      }
    }

    /* High Contrast Mode Support */
    @media (prefers-contrast: high) {
      :host {
        --_grid-border-color: CanvasText;
        border-width: 2px;
      }
    }

    /* Content Styling */
    ::slotted(*) {
      box-sizing: border-box;
    }
  `;

  // Core Properties
  @property({ reflect: true }) system: GridSystem = 'css-grid';
  @property({ reflect: true, type: Number }) columns: GridColumns = 12;
  @property({ reflect: true }) size: LayoutSize = 'medium';
  @property({ reflect: true }) variant?: LayoutColor;
  @property({ reflect: true }) density: GridDensity = 'comfortable';

  // Layout Properties
  @property({ reflect: true }) align: AlignItems = 'stretch';
  @property({ reflect: true }) justify: JustifyContent = 'start';
  @property({ reflect: true, attribute: 'auto-flow' }) autoFlow: GridAutoFlow =
    'row';

  // Responsive Properties - Mobile First
  @property({ type: Number, reflect: true, attribute: 'mobile-columns' })
  mobileColumns?: GridColumns;
  @property({ type: Number, reflect: true, attribute: 'tablet-columns' })
  tabletColumns?: GridColumns;
  @property({ type: Number, reflect: true, attribute: 'desktop-columns' })
  desktopColumns?: GridColumns;
  @property({ type: Boolean, reflect: true }) responsive = true;

  // State Properties
  @property({ type: Boolean, reflect: true }) elevated = false;
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;

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
  @property({ type: String, attribute: 'aria-expanded' }) ariaExpanded:
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
    // Set up accessibility attributes
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
    if (this.ariaExpanded) {
      this.setAttribute('aria-expanded', this.ariaExpanded);
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
      new CustomEvent('grid-click', {
        detail: {
          originalEvent: event,
          system: this.system,
          columns: this.columns,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    // Handle interactive grid keyboard navigation
    if (this.interactive) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this._handleClick(event as any);
      }
    }

    // Allow arrow key navigation within grid
    if (
      ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
    ) {
      this._handleArrowNavigation(event);
    }

    this.dispatchEvent(
      new CustomEvent('grid-keydown', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleArrowNavigation(event: KeyboardEvent) {
    const gridItems = this.querySelectorAll('mwc-grid-item, [role="gridcell"]');
    const currentIndex = Array.from(gridItems).findIndex(
      (item) => item === document.activeElement,
    );

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    const columnsPerRow = typeof this.columns === 'number' ? this.columns : 12;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = Math.min(currentIndex + 1, gridItems.length - 1);
        break;
      case 'ArrowLeft':
        nextIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'ArrowDown':
        nextIndex = Math.min(
          currentIndex + columnsPerRow,
          gridItems.length - 1,
        );
        break;
      case 'ArrowUp':
        nextIndex = Math.max(currentIndex - columnsPerRow, 0);
        break;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      (gridItems[nextIndex] as HTMLElement)?.focus();
    }
  }

  private _handleFocus(event: FocusEvent) {
    this._isKeyboardFocused = event.detail === 0; // 0 indicates keyboard focus

    this.dispatchEvent(
      new CustomEvent('grid-focus', {
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
      new CustomEvent('grid-blur', {
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
    // Reset to default state if needed
    this.value = undefined;
    this.dispatchEvent(
      new CustomEvent('grid-reset', { bubbles: true, composed: true }),
    );
  }

  // Public Methods
  /**
   * Focuses the grid element
   */
  public focus(options?: FocusOptions) {
    super.focus(options);
  }

  /**
   * Blurs the grid element
   */
  public blur() {
    super.blur();
  }

  /**
   * Scrolls to a specific grid item by index
   */
  public scrollToItem(index: number) {
    const items = this.querySelectorAll('mwc-grid-item, [role="gridcell"]');
    if (items[index]) {
      (items[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }

  /**
   * Returns current grid configuration
   */
  public getGridInfo() {
    return {
      system: this.system,
      columns: this.columns,
      size: this.size,
      variant: this.variant,
      density: this.density,
      interactive: this.interactive,
      disabled: this.disabled,
      elevated: this.elevated,
    };
  }

  protected render() {
    const containerClasses = {
      'grid-container': true,
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
    'mwc-grid': Grid;
  }
}
