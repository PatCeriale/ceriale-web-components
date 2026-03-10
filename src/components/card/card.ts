import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { baseStyles } from '../../styles/base.js';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

/**
 * Card Component
 *
 * @slot - Default slot for card content
 * @slot header - Card header content
 * @slot media - Card media content (images, videos)
 * @slot actions - Card action buttons
 *
 * @csspart card - The card container
 * @csspart header - The card header
 * @csspart media - The card media container
 * @csspart content - The card content
 * @csspart actions - The card actions container
 */
@customElement('mwc-card')
export class Card extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        --card-border-radius: var(--border-radius-md, 8px);
        --card-padding: var(--spacing-4, 1rem);
      }

      .card {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: var(--card-border-radius);
        background-color: var(--surface-surface, white);
        color: var(--surface-on-surface, #212121);
        overflow: hidden;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      /* Variants */
      .card--elevated {
        box-shadow: var(--elevation-1-shadow);
      }

      .card--elevated:hover {
        box-shadow: var(--elevation-2-shadow);
      }

      .card--outlined {
        border: 1px solid var(--color-grey-300, #e0e0e0);
      }

      .card--filled {
        background-color: var(--surface-surface-variant, #f5f5f5);
      }

      /* Clickable card */
      .card--clickable {
        cursor: pointer;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
          transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card--clickable:hover {
        transform: translateY(-1px);
      }

      .card--clickable.card--elevated:hover {
        box-shadow: var(--elevation-4-shadow);
      }

      .card--clickable.card--outlined:hover {
        border-color: var(--color-primary-300, #90caf9);
      }

      .card--clickable.card--filled:hover {
        background-color: var(--color-grey-200, #eeeeee);
      }

      /* Header */
      .header {
        padding: var(--card-padding);
        padding-bottom: calc(var(--card-padding) / 2);
      }

      .header:empty {
        display: none;
      }

      /* Media */
      .media {
        position: relative;
        overflow: hidden;
      }

      .media:empty {
        display: none;
      }

      ::slotted([slot='media']) {
        width: 100%;
        height: auto;
        display: block;
      }

      /* Content */
      .content {
        flex: 1;
        padding: var(--card-padding);
      }

      .content:empty {
        display: none;
      }

      /* Actions */
      .actions {
        display: flex;
        align-items: center;
        padding: calc(var(--card-padding) / 2) var(--card-padding);
        gap: var(--spacing-2, 0.5rem);
        border-top: 1px solid var(--color-grey-200, #eeeeee);
      }

      .actions:empty {
        display: none;
      }

      .actions--end {
        justify-content: flex-end;
      }

      .actions--space-between {
        justify-content: space-between;
      }

      .actions--center {
        justify-content: center;
      }

      /* No actions border when no content above */
      .content:empty + .actions {
        border-top: none;
      }

      /* Typography helpers */
      ::slotted(h1),
      ::slotted(h2),
      ::slotted(h3),
      ::slotted(h4),
      ::slotted(h5),
      ::slotted(h6) {
        margin: 0 0 0.5em 0;
        font-weight: var(--font-weight-medium, 500);
      }

      ::slotted(h1) {
        font-size: var(--type-headline-large-font-size, 2rem);
      }
      ::slotted(h2) {
        font-size: var(--type-headline-medium-font-size, 1.75rem);
      }
      ::slotted(h3) {
        font-size: var(--type-headline-small-font-size, 1.5rem);
      }
      ::slotted(h4) {
        font-size: var(--type-title-large-font-size, 1.375rem);
      }
      ::slotted(h5) {
        font-size: var(--type-title-medium-font-size, 1rem);
      }
      ::slotted(h6) {
        font-size: var(--type-title-small-font-size, 0.875rem);
      }

      ::slotted(p) {
        margin: 0 0 1em 0;
        font-size: var(--type-body-medium-font-size, 0.875rem);
        line-height: var(--type-body-medium-line-height, 1.43);
        color: var(--surface-on-surface-variant, #757575);
      }

      ::slotted(p:last-child) {
        margin-bottom: 0;
      }

      /* Card with image media adjustments */
      .header + .media {
        margin-top: calc(-1 * var(--card-padding) / 2);
      }

      .media + .content {
        padding-top: calc(var(--card-padding) / 2);
      }
    `,
  ];

  @property({ reflect: true }) variant: CardVariant = 'elevated';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) clickable = false;
  @property({ attribute: 'actions-layout' }) actionsLayout:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between' = 'end';

  handleClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.clickable) {
      this.dispatchEvent(
        new CustomEvent('mwc-card-click', {
          detail: { originalEvent: event },
          bubbles: true,
          composed: true,
        }),
      );
    }
  };

  render() {
    const classes = {
      card: true,
      [`card--${this.variant}`]: true,
      'card--clickable': this.clickable && !this.disabled,
      'card--disabled': this.disabled,
    };

    const actionsClasses = {
      actions: true,
      [`actions--${this.actionsLayout}`]: this.actionsLayout !== 'start',
    };

    return html`
      <div
        part="card"
        class=${classMap(classes)}
        @click=${this.handleClick}
        role=${this.clickable ? 'button' : nothing}
        tabindex=${this.clickable && !this.disabled ? '0' : nothing}
        aria-disabled=${this.disabled ? 'true' : nothing}
      >
        <div part="header" class="header">
          <slot name="header"></slot>
        </div>

        <div part="media" class="media">
          <slot name="media"></slot>
        </div>

        <div part="content" class="content">
          <slot></slot>
        </div>

        <div part="actions" class=${classMap(actionsClasses)}>
          <slot name="actions"></slot>
        </div>
      </div>
    `;
  }
}
