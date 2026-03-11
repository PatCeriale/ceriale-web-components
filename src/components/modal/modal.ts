import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('custom-modal')
export class Modal extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = '';
  @property({ type: Boolean }) closeOnBackdrop = true;
  @property({ type: Boolean }) closeOnEscape = true;

  @state() private _isAnimating = false;

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease;
    }

    :host([open]) {
      visibility: visible;
      opacity: 1;
    }

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-content {
      position: relative;
      background: var(--sys-color-surface, #fff);
      border-radius: var(--sys-shape-corner-large, 16px);
      box-shadow: var(--sys-elevation-level5, 0 8px 32px rgba(0, 0, 0, 0.2));
      max-width: 90vw;
      max-height: 80vh;
      width: 100%;
      max-width: 600px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: scale(0.9) translateY(20px);
      transition: transform 0.3s ease;
    }

    :host([open]) .modal-content {
      transform: scale(1) translateY(0);
    }

    .modal-header {
      padding: 24px 24px 16px;
      border-bottom: 1px solid var(--sys-color-outline-variant, #e0e0e0);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .modal-title {
      font-size: var(--sys-typescale-headline-medium-font-size, 1.5rem);
      font-weight: var(--sys-typescale-headline-medium-font-weight, 500);
      color: var(--sys-color-on-surface, #1c1b1f);
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      padding: 8px;
      border-radius: var(--sys-shape-corner-small, 8px);
      cursor: pointer;
      color: var(--sys-color-on-surface-variant, #49454f);
      transition: background-color 0.2s ease;
    }

    .close-button:hover {
      background: var(--sys-color-surface-variant, #f7f2fa);
    }

    .close-button svg {
      width: 24px;
      height: 24px;
    }

    .modal-body {
      padding: 24px;
      flex: 1;
      overflow-y: auto;
    }

    .modal-footer {
      padding: 16px 24px 24px;
      border-top: 1px solid var(--sys-color-outline-variant, #e0e0e0);
    }
  `;

  protected firstUpdated() {
    if (this.closeOnEscape) {
      document.addEventListener('keydown', this._handleKeydown.bind(this));
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeydown.bind(this));
  }

  private _handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      this.close();
    }
  }

  private _handleBackdropClick(event: Event) {
    if (this.closeOnBackdrop && event.target === event.currentTarget) {
      this.close();
    }
  }

  public openModal() {
    this.open = true;
    this.dispatchEvent(new CustomEvent('modal-open', { bubbles: true }));
  }

  public close() {
    this._isAnimating = true;
    this.open = false;

    setTimeout(() => {
      this._isAnimating = false;
      this.dispatchEvent(new CustomEvent('modal-close', { bubbles: true }));
    }, 300);
  }

  protected render() {
    return html`
      <div class="backdrop" @click="${this._handleBackdropClick}">
        <div
          class="modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          ${this.title || this.querySelector('[slot="header"]')
            ? html`
                <div class="modal-header">
                  <h2 id="modal-title" class="modal-title">${this.title}</h2>
                  <slot name="header"></slot>
                  <button
                    class="close-button"
                    @click="${this.close}"
                    aria-label="Close modal"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      />
                    </svg>
                  </button>
                </div>
              `
            : ''}

          <div class="modal-body">
            <slot></slot>
          </div>

          ${this.querySelector('[slot="footer"]')
            ? html`
                <div class="modal-footer">
                  <slot name="footer"></slot>
                </div>
              `
            : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-modal': Modal;
  }
}
