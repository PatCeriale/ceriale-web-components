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
  GridTemplateColumns,
  GridTemplateRows,
  GridAutoFlow,
  getSpacingValue,
  breakpoints,
} from './types.js';

// Grid system variants
export type GridSystem = 'css-grid' | 'flexbox';

// Grid direction for flexbox-based grids
export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

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
  | 'auto'
  | 'none';

// Grid item responsive sizing
export type GridItemSize = ResponsiveValue<GridColumns>;

/**
 * Material Design 3 Grid Component
 *
 * A flexible grid system supporting both CSS Grid and Flexbox layouts.
 * Provides responsive column systems, spacing control, and alignment options.
 *
 * @element mwc-grid
 * @slot - Default slot for grid items
 *
 * @cssprop --grid-gap - Custom gap between grid items
 * @cssprop --grid-columns - Custom column template
 * @cssprop --grid-rows - Custom row template
 * @cssprop --grid-background - Custom background color
 */
@customElement('mwc-grid')
export class Grid extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      --_grid-transition: all 250ms cubic-bezier(0.2, 0, 0, 1);

      display: block;
      width: 100%;
      background: var(--grid-background, transparent);
      transition: var(--_grid-transition);
      box-sizing: border-box;

      /* Respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        --_grid-transition: none;
      }

      /* RTL support */
      direction: var(--text-direction, ltr);
    }

    .grid-container {
      display: var(--_display, grid);
      width: 100%;
      height: 100%;
    }

    /* CSS Grid system */
    :host([system='css-grid']) .grid-container {
      display: grid;
      grid-template-columns: var(--grid-columns, repeat(12, 1fr));
      grid-template-rows: var(--grid-rows, auto);
      grid-auto-flow: var(--_grid-auto-flow, row);
      gap: var(--grid-gap, var(--spacing-3, 16px));
    }

    /* Flexbox grid system */
    :host([system='flexbox']) .grid-container {
      display: flex;
      flex-wrap: var(--_flex-wrap, wrap);
      flex-direction: var(--_flex-direction, row);
      gap: var(--grid-gap, var(--spacing-3, 16px));
      align-items: var(--_align-items, stretch);
      justify-content: var(--_justify-content, flex-start);
    }

    /* Grid column presets for CSS Grid */
    :host([columns='1']) {
      --grid-columns: repeat(1, 1fr);
    }

    :host([columns='2']) {
      --grid-columns: repeat(2, 1fr);
    }

    :host([columns='3']) {
      --grid-columns: repeat(3, 1fr);
    }

    :host([columns='4']) {
      --grid-columns: repeat(4, 1fr);
    }

    :host([columns='6']) {
      --grid-columns: repeat(6, 1fr);
    }

    :host([columns='12']) {
      --grid-columns: repeat(12, 1fr);
    }

    :host([columns='auto']) {
      --grid-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    :host([columns='none']) {
      --grid-columns: none;
    }

    /* Gap/spacing variants */
    :host([gap='none']) {
      --grid-gap: 0;
    }

    :host([gap='xs']) {
      --grid-gap: var(--spacing-1, 4px);
    }

    :host([gap='sm']) {
      --grid-gap: var(--spacing-2, 8px);
    }

    :host([gap='md']) {
      --grid-gap: var(--spacing-3, 16px);
    }

    :host([gap='lg']) {
      --grid-gap: var(--spacing-4, 24px);
    }

    :host([gap='xl']) {
      --grid-gap: var(--spacing-5, 32px);
    }

    /* Alignment variants for flexbox */
    :host([align-items='flex-start']) {
      --_align-items: flex-start;
    }

    :host([align-items='flex-end']) {
      --_align-items: flex-end;
    }

    :host([align-items='center']) {
      --_align-items: center;
    }

    :host([align-items='stretch']) {
      --_align-items: stretch;
    }

    :host([align-items='baseline']) {
      --_align-items: baseline;
    }

    :host([justify-content='flex-start']) {
      --_justify-content: flex-start;
    }

    :host([justify-content='flex-end']) {
      --_justify-content: flex-end;
    }

    :host([justify-content='center']) {
      --_justify-content: center;
    }

    :host([justify-content='space-between']) {
      --_justify-content: space-between;
    }

    :host([justify-content='space-around']) {
      --_justify-content: space-around;
    }

    :host([justify-content='space-evenly']) {
      --_justify-content: space-evenly;
    }

    /* Direction variants for flexbox */
    :host([direction='row']) {
      --_flex-direction: row;
    }

    :host([direction='row-reverse']) {
      --_flex-direction: row-reverse;
    }

    :host([direction='column']) {
      --_flex-direction: column;
    }

    :host([direction='column-reverse']) {
      --_flex-direction: column-reverse;
    }

    /* Auto flow for CSS Grid */
    :host([auto-flow='row']) {
      --_grid-auto-flow: row;
    }

    :host([auto-flow='column']) {
      --_grid-auto-flow: column;
    }

    :host([auto-flow='row dense']) {
      --_grid-auto-flow: row dense;
    }

    :host([auto-flow='column dense']) {
      --_grid-auto-flow: column dense;
    }

    /* Responsive column adjustments */
    @media (max-width: 599px) {
      /* Mobile: Stack most grids */
      :host([responsive]:not([columns='1'])) {
        --grid-columns: 1fr;
        --_flex-direction: column;
      }

      :host([mobile-columns='1']) {
        --grid-columns: repeat(1, 1fr);
      }

      :host([mobile-columns='2']) {
        --grid-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 600px) and (max-width: 899px) {
      /* Tablet: Reduce column count */
      :host([tablet-columns='1']) {
        --grid-columns: repeat(1, 1fr);
      }

      :host([tablet-columns='2']) {
        --grid-columns: repeat(2, 1fr);
      }

      :host([tablet-columns='3']) {
        --grid-columns: repeat(3, 1fr);
      }

      :host([tablet-columns='4']) {
        --grid-columns: repeat(4, 1fr);
      }
    }

    @media (min-width: 900px) {
      /* Desktop: Full column support */
      :host([desktop-columns='auto']) {
        --grid-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    }

    /* Color variants for semantic grids */
    :host([variant='primary']) {
      background: var(--color-primary-50, #e3f2fd);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--spacing-3, 16px);
    }

    :host([variant='secondary']) {
      background: var(--color-secondary-50, #fce4ec);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--spacing-3, 16px);
    }

    :host([variant='success']) {
      background: var(--color-success-50, #e8f5e8);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--spacing-3, 16px);
    }

    :host([variant='warning']) {
      background: var(--color-warning-50, #fff3e0);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--spacing-3, 16px);
    }

    :host([variant='error']) {
      background: var(--color-error-50, #ffebee);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--spacing-3, 16px);
    }

    /* Elevated grid containers */
    :host([elevated]) {
      background: var(--surface-surface, #ffffff);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--spacing-4, 24px);
      border: 1px solid var(--color-grey-200, #e0e0e0);
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        background: var(--color-primary-900, #0d47a1);
        border: 1px solid var(--color-primary-700, #1976d2);
      }

      :host([variant='secondary']) {
        background: var(--color-secondary-900, #880e4f);
        border: 1px solid var(--color-secondary-700, #c2185b);
      }

      :host([variant='success']) {
        background: var(--color-success-900, #1b5e20);
        border: 1px solid var(--color-success-700, #388e3c);
      }

      :host([variant='warning']) {
        background: var(--color-warning-900, #e65100);
        border: 1px solid var(--color-warning-700, #f57c00);
      }

      :host([variant='error']) {
        background: var(--color-error-900, #b71c1c);
        border: 1px solid var(--color-error-700, #d32f2f);
      }

      :host([elevated]) {
        background: var(--surface-surface, #1e1e1e);
        border-color: var(--color-grey-700, #616161);
      }
    }

    /* Interactive states */
    :host([interactive]) {
      cursor: pointer;
    }

    :host([interactive]:hover) {
      transform: translateY(-1px);
      box-shadow: var(--elevation-2-shadow, 0 2px 6px rgba(0, 0, 0, 0.15));
    }

    :host([interactive]:focus-visible) {
      outline: 2px solid var(--color-primary-600, #1976d2);
      outline-offset: 2px;
    }

    :host([interactive]:active) {
      transform: translateY(0);
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
      user-select: none;
    }

    /* Dense and comfortable spacing */
    :host([density='dense']) {
      --grid-gap: var(--spacing-1, 4px);
    }

    :host([density='comfortable']) {
      --grid-gap: var(--spacing-5, 32px);
    }

    /* Print styles */
    @media print {
      :host {
        box-shadow: none !important;
        background: transparent !important;
        --grid-gap: var(--spacing-1, 4px);
      }
    }
  `;

  // Grid system properties
  @property({ reflect: true }) system: GridSystem = 'css-grid';
  @property({ reflect: true }) columns?: GridColumns;
  @property({ reflect: true }) rows?: GridTemplateRows;
  @property({ reflect: true }) gap?: ResponsiveValue<SpacingValue>;

  // Layout flow properties
  @property({ reflect: true, attribute: 'auto-flow' }) autoFlow?: GridAutoFlow;
  @property({ reflect: true }) direction?: GridDirection;

  // Alignment properties (for flexbox system)
  @property({ reflect: true, attribute: 'align-items' })
  alignItems?: AlignItems;
  @property({ reflect: true, attribute: 'justify-content' })
  justifyContent?: JustifyContent;

  // Responsive properties
  @property({ type: Boolean, reflect: true }) responsive = true;
  @property({ reflect: true, attribute: 'mobile-columns' })
  mobileColumns?: GridColumns;
  @property({ reflect: true, attribute: 'tablet-columns' })
  tabletColumns?: GridColumns;
  @property({ reflect: true, attribute: 'desktop-columns' })
  desktopColumns?: GridColumns;

  // Appearance properties
  @property({ reflect: true }) variant?: LayoutColor;
  @property({ type: Boolean, reflect: true }) elevated = false;
  @property({ reflect: true }) density?: 'dense' | 'default' | 'comfortable';

  // Interaction properties
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  // Custom spacing overrides
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
      new CustomEvent('grid-click', {
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
      new CustomEvent('grid-keydown', {
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
        class="grid-container ${classMap(classes)}"
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
    'mwc-grid': Grid;
  }
}
