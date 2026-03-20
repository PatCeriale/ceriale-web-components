import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  LayoutSize,
  LayoutColor,
  SpacingValue,
  ResponsiveValue,
  GridColumns,
  AlignItems,
  JustifyContent,
  getSpacingValue,
} from './types.js';

// Grid item placement options
export type GridItemPlacement = 'auto' | number | 'span' | string;

// Grid item alignment options
export type GridItemAlign = 'auto' | 'start' | 'end' | 'center' | 'stretch';
export type GridItemJustify = 'auto' | 'start' | 'end' | 'center' | 'stretch';

/**
 *  Grid Item Component
 *
 * A flexible grid item that works within mwc-grid containers.
 * Supports column/row spanning, positioning, and responsive sizing.
 *
 * @element mwc-grid-item
 * @slot - Default slot for content
 *
 * @cssprop --grid-item-background - Custom background color
 * @cssprop --grid-item-color - Custom text color
 * @cssprop --grid-item-border - Custom border
 * @cssprop --grid-item-padding - Custom padding
 */
@customElement('mwc-grid-item')
export class GridItem extends LitElement {
  static styles: CSSResultGroup = css`
    :host {
      --_grid-item-transition: all 250ms cubic-bezier(0.2, 0, 0, 1);

      display: block;
      width: 100%;
      background: var(--grid-item-background, transparent);
      color: var(--grid-item-color, inherit);
      border: var(--grid-item-border, none);
      border-radius: var(--border-radius-medium, 8px);
      padding: var(--grid-item-padding, 0);
      transition: var(--_grid-item-transition);
      box-sizing: border-box;
      min-width: 0;
      min-height: 0;

      /* Grid item properties */
      grid-column: var(--_grid-column, auto);
      grid-row: var(--_grid-row, auto);
      grid-area: var(--_grid-area, auto);
      align-self: var(--_align-self, auto);
      justify-self: var(--_justify-self, auto);

      /* Flexbox item properties when used with flexbox grid */
      flex: var(--_flex, 1 1 auto);
      flex-basis: var(--_flex-basis, auto);

      /* Respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        --_grid-item-transition: none;
      }

      /* RTL support */
      direction: var(--text-direction, ltr);
    }

    /* Column span variants */
    :host([cols='1']) {
      --_grid-column: span 1;
      --_flex-basis: calc(100% / 12 * 1 - var(--grid-gap, 16px));
    }
    :host([cols='2']) {
      --_grid-column: span 2;
      --_flex-basis: calc(100% / 12 * 2 - var(--grid-gap, 16px));
    }
    :host([cols='3']) {
      --_grid-column: span 3;
      --_flex-basis: calc(100% / 12 * 3 - var(--grid-gap, 16px));
    }
    :host([cols='4']) {
      --_grid-column: span 4;
      --_flex-basis: calc(100% / 12 * 4 - var(--grid-gap, 16px));
    }
    :host([cols='5']) {
      --_grid-column: span 5;
      --_flex-basis: calc(100% / 12 * 5 - var(--grid-gap, 16px));
    }
    :host([cols='6']) {
      --_grid-column: span 6;
      --_flex-basis: calc(100% / 12 * 6 - var(--grid-gap, 16px));
    }
    :host([cols='7']) {
      --_grid-column: span 7;
      --_flex-basis: calc(100% / 12 * 7 - var(--grid-gap, 16px));
    }
    :host([cols='8']) {
      --_grid-column: span 8;
      --_flex-basis: calc(100% / 12 * 8 - var(--grid-gap, 16px));
    }
    :host([cols='9']) {
      --_grid-column: span 9;
      --_flex-basis: calc(100% / 12 * 9 - var(--grid-gap, 16px));
    }
    :host([cols='10']) {
      --_grid-column: span 10;
      --_flex-basis: calc(100% / 12 * 10 - var(--grid-gap, 16px));
    }
    :host([cols='11']) {
      --_grid-column: span 11;
      --_flex-basis: calc(100% / 12 * 11 - var(--grid-gap, 16px));
    }
    :host([cols='12']) {
      --_grid-column: span 12;
      --_flex-basis: 100%;
    }
    :host([cols='auto']) {
      --_grid-column: auto;
      --_flex: 1 1 auto;
    }

    /* Row span variants */
    :host([rows='1']) {
      --_grid-row: span 1;
    }
    :host([rows='2']) {
      --_grid-row: span 2;
    }
    :host([rows='3']) {
      --_grid-row: span 3;
    }
    :host([rows='4']) {
      --_grid-row: span 4;
    }
    :host([rows='5']) {
      --_grid-row: span 5;
    }
    :host([rows='6']) {
      --_grid-row: span 6;
    }
    :host([rows='auto']) {
      --_grid-row: auto;
    }

    /* Alignment variants */
    :host([align-self='start']) {
      --_align-self: start;
    }
    :host([align-self='end']) {
      --_align-self: end;
    }
    :host([align-self='center']) {
      --_align-self: center;
    }
    :host([align-self='stretch']) {
      --_align-self: stretch;
    }

    :host([justify-self='start']) {
      --_justify-self: start;
    }
    :host([justify-self='end']) {
      --_justify-self: end;
    }
    :host([justify-self='center']) {
      --_justify-self: center;
    }
    :host([justify-self='stretch']) {
      --_justify-self: stretch;
    }

    /* Color variants */
    :host([variant='primary']) {
      background: var(--color-primary-100, #bbdefb);
      color: var(--color-primary-900, #0d47a1);
      border: 1px solid var(--color-primary-300, #64b5f6);
    }

    :host([variant='secondary']) {
      background: var(--color-secondary-100, #f8bbd9);
      color: var(--color-secondary-900, #880e4f);
      border: 1px solid var(--color-secondary-300, #f06292);
    }

    :host([variant='success']) {
      background: var(--color-success-100, #c8e6c9);
      color: var(--color-success-900, #1b5e20);
      border: 1px solid var(--color-success-300, #81c784);
    }

    :host([variant='warning']) {
      background: var(--color-warning-100, #ffe0b2);
      color: var(--color-warning-900, #e65100);
      border: 1px solid var(--color-warning-300, #ffb74d);
    }

    :host([variant='error']) {
      background: var(--color-error-100, #ffcdd2);
      color: var(--color-error-900, #b71c1c);
      border: 1px solid var(--color-error-300, #e57373);
    }

    /* Size variants */
    :host([size='small']) {
      min-height: var(--size-small, 32px);
      padding: var(--spacing-1, 4px) var(--spacing-2, 8px);
    }

    :host([size='medium']) {
      min-height: var(--size-medium, 44px);
      padding: var(--spacing-2, 8px) var(--spacing-3, 16px);
    }

    :host([size='large']) {
      min-height: var(--size-large, 56px);
      padding: var(--spacing-3, 16px) var(--spacing-4, 24px);
    }

    /* Responsive column adjustments */
    @media (max-width: 599px) {
      /* Mobile: Stack most items unless specified */
      :host([mobile-cols='1']) {
        --_grid-column: span 1;
        --_flex-basis: 100%;
      }
      :host([mobile-cols='2']) {
        --_grid-column: span 2;
        --_flex-basis: calc(50% - var(--grid-gap, 16px) / 2);
      }
      :host([mobile-cols='auto']) {
        --_grid-column: auto;
        --_flex: 1 1 auto;
      }

      :host(:not([mobile-cols]):not([cols='1'])) {
        --_grid-column: span 1;
        --_flex-basis: 100%;
      }
    }

    @media (min-width: 600px) and (max-width: 899px) {
      /* Tablet: Adjust column spans */
      :host([tablet-cols='1']) {
        --_grid-column: span 1;
        --_flex-basis: calc(100% / 12 * 1);
      }
      :host([tablet-cols='2']) {
        --_grid-column: span 2;
        --_flex-basis: calc(100% / 12 * 2);
      }
      :host([tablet-cols='3']) {
        --_grid-column: span 3;
        --_flex-basis: calc(100% / 12 * 3);
      }
      :host([tablet-cols='4']) {
        --_grid-column: span 4;
        --_flex-basis: calc(100% / 12 * 4);
      }
      :host([tablet-cols='6']) {
        --_grid-column: span 6;
        --_flex-basis: calc(100% / 12 * 6);
      }
      :host([tablet-cols='auto']) {
        --_grid-column: auto;
        --_flex: 1 1 auto;
      }
    }

    @media (min-width: 900px) {
      /* Desktop: Full control */
      :host([desktop-cols='1']) {
        --_grid-column: span 1;
      }
      :host([desktop-cols='2']) {
        --_grid-column: span 2;
      }
      :host([desktop-cols='3']) {
        --_grid-column: span 3;
      }
      :host([desktop-cols='4']) {
        --_grid-column: span 4;
      }
      :host([desktop-cols='5']) {
        --_grid-column: span 5;
      }
      :host([desktop-cols='6']) {
        --_grid-column: span 6;
      }
      :host([desktop-cols='7']) {
        --_grid-column: span 7;
      }
      :host([desktop-cols='8']) {
        --_grid-column: span 8;
      }
      :host([desktop-cols='9']) {
        --_grid-column: span 9;
      }
      :host([desktop-cols='10']) {
        --_grid-column: span 10;
      }
      :host([desktop-cols='11']) {
        --_grid-column: span 11;
      }
      :host([desktop-cols='12']) {
        --_grid-column: span 12;
      }
      :host([desktop-cols='auto']) {
        --_grid-column: auto;
      }
    }

    /* Elevated grid items */
    :host([elevated]) {
      background: var(--surface-surface, #ffffff);
      box-shadow: var(--elevation-1-shadow, 0 1px 3px rgba(0, 0, 0, 0.12));
      border: 1px solid var(--color-grey-200, #e0e0e0);
      padding: var(--spacing-3, 16px);
    }

    /* Interactive states */
    :host([interactive]) {
      cursor: pointer;
      transition: var(--_grid-item-transition);
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

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host([variant='primary']) {
        background: var(--color-primary-800, #1565c0);
        color: var(--color-primary-50, #e3f2fd);
      }

      :host([variant='secondary']) {
        background: var(--color-secondary-800, #ad1457);
        color: var(--color-secondary-50, #fce4ec);
      }

      :host([variant='success']) {
        background: var(--color-success-800, #2e7d32);
        color: var(--color-success-50, #e8f5e8);
      }

      :host([variant='warning']) {
        background: var(--color-warning-800, #ef6c00);
        color: var(--color-warning-50, #fff3e0);
      }

      :host([variant='error']) {
        background: var(--color-error-800, #c62828);
        color: var(--color-error-50, #ffebee);
      }

      :host([elevated]) {
        background: var(--surface-surface, #1e1e1e);
        border-color: var(--color-grey-700, #616161);
      }
    }

    /* Content area */
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: var(--_content-align, stretch);
      justify-content: var(--_content-justify, stretch);
      flex-direction: var(--_content-direction, column);
    }

    /* Content alignment variants */
    :host([content-align='start']) {
      --_content-align: flex-start;
    }
    :host([content-align='end']) {
      --_content-align: flex-end;
    }
    :host([content-align='center']) {
      --_content-align: center;
    }
    :host([content-align='stretch']) {
      --_content-align: stretch;
    }

    :host([content-justify='start']) {
      --_content-justify: flex-start;
    }
    :host([content-justify='end']) {
      --_content-justify: flex-end;
    }
    :host([content-justify='center']) {
      --_content-justify: center;
    }
    :host([content-justify='stretch']) {
      --_content-justify: stretch;
    }

    /* Print styles */
    @media print {
      :host {
        box-shadow: none !important;
        border: 1px solid var(--color-grey-400, #bdbdbd) !important;
        background: transparent !important;
      }
    }
  `;

  // Column and row spanning
  @property({ reflect: true }) cols?: GridColumns;
  @property({ reflect: true }) rows?: GridColumns;

  // Responsive column spans
  @property({ reflect: true, attribute: 'mobile-cols' })
  mobileCols?: GridColumns;
  @property({ reflect: true, attribute: 'tablet-cols' })
  tabletCols?: GridColumns;
  @property({ reflect: true, attribute: 'desktop-cols' })
  desktopCols?: GridColumns;

  // Grid positioning
  @property({ reflect: true, attribute: 'col-start' })
  colStart?: GridItemPlacement;
  @property({ reflect: true, attribute: 'col-end' }) colEnd?: GridItemPlacement;
  @property({ reflect: true, attribute: 'row-start' })
  rowStart?: GridItemPlacement;
  @property({ reflect: true, attribute: 'row-end' }) rowEnd?: GridItemPlacement;

  // Grid area shorthand
  @property({ type: String, attribute: 'grid-area' }) gridArea?: string;

  // Alignment within grid cell
  @property({ reflect: true, attribute: 'align-self' })
  alignSelf?: GridItemAlign;
  @property({ reflect: true, attribute: 'justify-self' })
  justifySelf?: GridItemJustify;

  // Content alignment within item
  @property({ reflect: true, attribute: 'content-align' })
  contentAlign?: AlignItems;
  @property({ reflect: true, attribute: 'content-justify' })
  contentJustify?: JustifyContent;

  // Appearance properties
  @property({ reflect: true }) variant?: LayoutColor;
  @property({ reflect: true }) size?: LayoutSize;
  @property({ type: Boolean, reflect: true }) elevated = false;

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

    // Grid positioning
    if (this.colStart) styles.gridColumnStart = String(this.colStart);
    if (this.colEnd) styles.gridColumnEnd = String(this.colEnd);
    if (this.rowStart) styles.gridRowStart = String(this.rowStart);
    if (this.rowEnd) styles.gridRowEnd = String(this.rowEnd);
    if (this.gridArea) styles.gridArea = this.gridArea;

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
      new CustomEvent('grid-item-click', {
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
      new CustomEvent('grid-item-keydown', {
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
    'mwc-grid-item': GridItem;
  }
}
