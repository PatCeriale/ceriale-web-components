import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeStatic, html as staticHtml } from 'lit/static-html.js';
import type { IconSize, IconVariant } from '../icons/index.js';

interface IconData {
  name: string;
  tagName: string;
  category: string;
  description?: string;
}

@customElement('icon-detail-viewer')
export class IconDetailViewer extends LitElement {
  @property({ type: Object }) iconData: IconData | null = null;
  @state() private _selectedSize: IconSize = 'medium';
  @state() private _selectedVariant: IconVariant = 'default';

  static styles = css`
    :host {
      display: block;
      font-family: var(--font-family-primary, 'Roboto', sans-serif);
    }

    .viewer-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .icon-preview {
      text-align: center;
      padding: 32px;
      background: var(--surface-surface-variant, #f7f2fa);
      border-radius: var(--border-radius-medium, 12px);
      border: 1px solid var(--color-grey-300, #e0e0e0);
    }

    .preview-icon {
      margin-bottom: 16px;
    }

    .icon-info {
      margin-bottom: 16px;
    }

    .icon-name {
      font-size: var(--font-size-large, 1.25rem);
      font-weight: var(--font-weight-medium, 500);
      color: var(--surface-on-surface, #1c1b1f);
      margin: 0 0 4px 0;
    }

    .icon-category {
      font-size: var(--font-size-medium, 0.875rem);
      color: var(--color-primary-600, #6750a4);
      font-weight: 500;
      margin: 0;
    }

    .icon-tag {
      font-family: var(
        --font-family-monospace,
        'Monaco',
        'Consolas',
        'Courier New',
        monospace
      );
      background: var(--surface-surface, #fef7ff);
      padding: 8px 12px;
      border-radius: var(--border-radius-small, 6px);
      border: 1px solid var(--color-grey-300, #e0e0e0);
      font-size: 0.875rem;
      color: var(--color-grey-600, #49454f);
      display: inline-block;
      margin-top: 8px;
    }

    .controls-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .control-label {
      font-size: var(--font-size-medium, 0.875rem);
      font-weight: 500;
      color: var(--surface-on-surface, #1c1b1f);
    }

    .control-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      gap: 8px;
    }

    .control-button {
      padding: 8px 12px;
      border: 1px solid var(--color-grey-500, #79747e);
      background: var(--surface-surface, #fef7ff);
      color: var(--surface-on-surface, #1c1b1f);
      border-radius: var(--border-radius-small, 6px);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.75rem;
      text-transform: capitalize;
    }

    .control-button:hover {
      background: var(--surface-surface-variant, #f7f2fa);
    }

    .control-button.selected {
      background: var(--color-primary-600, #6750a4);
      color: var(--surface-background, #fff);
      border-color: var(--color-primary-600, #6750a4);
    }

    .copy-button {
      margin-top: 16px;
      padding: 12px 24px;
      background: var(--color-primary-600, #6750a4);
      color: var(--surface-background, #fff);
      border: none;
      border-radius: var(--border-radius-small, 6px);
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }

    .copy-button:hover {
      background: var(--color-primary-400, #eaddff);
      color: var(--color-primary-900, #21005d);
    }

    .section-title {
      font-size: var(--font-size-large, 1rem);
      font-weight: var(--font-weight-medium, 500);
      color: var(--surface-on-surface, #1c1b1f);
      margin: 0 0 16px 0;
    }
  `;

  private _sizes: IconSize[] = ['small', 'medium', 'large', 'xl'];
  private _variants: IconVariant[] = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'muted',
  ];

  private _createIconElement(
    tagName: string,
    size: IconSize,
    variant: IconVariant,
  ) {
    const tag = unsafeStatic(tagName);
    return staticHtml`<${tag} size="${size}" variant="${variant}"></${tag}>`;
  }

  private _copyToClipboard() {
    if (!this.iconData) return;

    const code = `<${this.iconData.tagName} size="${this._selectedSize}" variant="${this._selectedVariant}"></${this.iconData.tagName}>`;

    navigator.clipboard.writeText(code).then(() => {
      // Could dispatch an event here for toast notification
      this.dispatchEvent(
        new CustomEvent('code-copied', {
          detail: { code },
          bubbles: true,
        }),
      );
    });
  }

  protected render() {
    if (!this.iconData) {
      return html`<p>No icon selected</p>`;
    }

    const mainIcon = this._createIconElement(
      this.iconData.tagName,
      this._selectedSize,
      this._selectedVariant,
    );

    return html`
      <div class="viewer-content">
        <div class="icon-preview">
          <div class="preview-icon">${mainIcon}</div>

          <div class="icon-info">
            <h3 class="icon-name">${this.iconData.name}</h3>
            <code class="icon-tag">&lt;${this.iconData.tagName}&gt;</code>
          </div>

          <button class="copy-button" @click=${this._copyToClipboard}>
            Copy Code
          </button>
        </div>

        <div class="controls-section">
          <div class="control-group">
            <div class="control-label">Size</div>
            <div class="control-options">
              ${this._sizes.map(
                (size) => html`
                  <button
                    class="control-button ${size === this._selectedSize
                      ? 'selected'
                      : ''}"
                    @click=${() => (this._selectedSize = size)}
                  >
                    ${size}
                  </button>
                `,
              )}
            </div>
          </div>

          <div class="control-group">
            <div class="control-label">Variant</div>
            <div class="control-options">
              ${this._variants.map(
                (variant) => html`
                  <button
                    class="control-button ${variant === this._selectedVariant
                      ? 'selected'
                      : ''}"
                    @click=${() => (this._selectedVariant = variant)}
                  >
                    ${variant}
                  </button>
                `,
              )}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-detail-viewer': IconDetailViewer;
  }
}
