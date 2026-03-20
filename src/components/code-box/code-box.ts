import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { baseStyles } from '../../styles/base.js';

export type CodeBoxTheme = 'light' | 'dark';
export type CodeBoxLanguage =
  | 'html'
  | 'javascript'
  | 'typescript'
  | 'css'
  | 'json';

/**
 * CodeBox Component
 *
 * A component for displaying code examples with syntax highlighting and copy functionality
 *
 * @slot - Default slot (not used, use code property instead)
 *
 * @csspart container - The main container
 * @csspart header - The header containing title and copy button
 * @csspart title - The code title
 * @csspart copy-button - The copy button
 * @csspart code-container - The code display container
 * @csspart code - The code element
 */
@customElement('mwc-code-box')
export class CodeBox extends LitElement {
  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        /* Use design tokens for consistent theming */
        --code-box-border-radius: var(--border-radius-sm, 0.25rem);
        --code-box-border-color: var(--color-grey-300, #e0e0e0);
        --code-box-background: var(--surface-surface, #ffffff);
        --code-box-code-background: var(--surface-surface-variant, #f5f5f5);
        --code-box-text-color: var(--surface-on-surface, #212121);
        --code-box-text-color-variant: var(
          --surface-on-surface-variant,
          #757575
        );
        --code-box-shadow: var(--elevation-1-shadow);
        --code-box-copy-button-hover: var(--color-primary-50, #e3f2fd);
        --code-box-font-family: var(
          --font-family-monospace,
          'Segoe UI Mono',
          'Roboto Mono',
          monospace
        );
        --code-box-padding: var(--spacing-4, 1rem);
        --code-box-padding-sm: var(--spacing-3, 0.75rem);
      }

      /* Dark theme support using data-theme attribute */
      :host-context([data-theme='dark']) {
        --code-box-border-color: var(--color-grey-600, #757575);
        --code-box-background: var(--surface-surface, #1e1e1e);
        --code-box-code-background: var(--surface-surface-variant, #2d2d2d);
        --code-box-text-color: var(--surface-on-surface, #ffffff);
        --code-box-text-color-variant: var(
          --surface-on-surface-variant,
          #b0b0b0
        );
        --code-box-copy-button-hover: var(--color-primary-900, #0d47a1);
      }

      /* Alternative: Support for theme attribute on component */
      :host([theme='dark']) {
        --code-box-border-color: var(--color-grey-600, #757575);
        --code-box-background: var(--surface-surface, #1e1e1e);
        --code-box-code-background: var(--surface-surface-variant, #2d2d2d);
        --code-box-text-color: var(--surface-on-surface, #ffffff);
        --code-box-text-color-variant: var(
          --surface-on-surface-variant,
          #b0b0b0
        );
        --code-box-copy-button-hover: var(--color-primary-900, #0d47a1);
      }

      .container {
        border: 1px solid var(--code-box-border-color);
        border-radius: var(--code-box-border-radius);
        background: var(--code-box-background);
        box-shadow: var(--code-box-shadow);
        overflow: hidden;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--code-box-padding-sm) var(--code-box-padding);
        border-bottom: 1px solid var(--code-box-border-color);
        background: var(--code-box-background);
      }

      .title {
        margin: 0;
        font-size: var(--font-size-sm, 0.875rem);
        font-weight: var(--font-weight-medium, 500);
        color: var(--code-box-text-color-variant);
        font-family: var(--font-family-primary);
      }

      .copy-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--spacing-2, 0.5rem);
        background: none;
        border: none;
        border-radius: var(--border-radius-sm, 0.25rem);
        cursor: pointer;
        color: var(--code-box-text-color-variant);
        transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      .copy-button:hover {
        color: var(--color-primary-600, #1e88e5);
        background: var(--code-box-copy-button-hover);
      }

      .copy-button:focus-visible {
        outline: 2px solid var(--color-primary-500, #2196f3);
        outline-offset: 1px;
      }

      .copy-button.copied {
        color: var(--color-success-600, #43a047);
      }

      .code-container {
        background: var(--code-box-code-background);
        overflow-x: auto;
      }

      .code {
        display: block;
        padding: var(--code-box-padding);
        margin: 0;
        font-family: var(--code-box-font-family);
        font-size: var(--font-size-sm, 0.875rem);
        line-height: var(--type-body-medium-line-height, 1.5);
        color: var(--code-box-text-color);
        white-space: pre;
        overflow-x: auto;
      }
    `,
  ];

  /**
   * The code content to display
   */
  @property({ type: String })
  code = '';

  /**
   * Optional title for the code block
   */
  @property({ type: String })
  title = '';

  /**
   * The programming language for syntax highlighting
   */
  @property({ type: String })
  language: CodeBoxLanguage = 'html';

  /**
   * Theme variant
   */
  @property({ type: String, reflect: true })
  theme: CodeBoxTheme = 'light';

  /**
   * Whether to show line numbers
   */
  @property({ type: Boolean, attribute: 'line-numbers' })
  lineNumbers = false;

  @state()
  private _copied = false;

  /**
   * Copy the code to clipboard
   */
  private async _handleCopy() {
    try {
      await navigator.clipboard.writeText(this.code);
      this._copied = true;

      // Reset copied state after 2 seconds
      setTimeout(() => {
        this._copied = false;
      }, 2000);

      // Dispatch copy event
      this.dispatchEvent(
        new CustomEvent('mwc-code-copied', {
          detail: { code: this.code },
          bubbles: true,
        }),
      );
    } catch (err) {
      console.error('Failed to copy code:', err);
      // Fallback for older browsers
      this._fallbackCopy();
    }
  }

  /**
   * Fallback copy method for older browsers
   */
  private _fallbackCopy() {
    const textArea = document.createElement('textarea');
    textArea.value = this.code;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      this._copied = true;
      setTimeout(() => {
        this._copied = false;
      }, 2000);
    } catch (err) {
      console.error('Fallback copy failed:', err);
    } finally {
      document.body.removeChild(textArea);
    }
  }

  /**
   * Apply basic syntax highlighting for HTML
   */
  private _highlightHtml(code: string): string {
    return (
      code
        // First, handle HTML comments
        .replace(/(&lt;!--.*?--&gt;)/g, '<span class="html-comment">$1</span>')
        // Handle opening and closing tags with attributes
        .replace(
          /(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[a-zA-Z][a-zA-Z0-9-]*(?:=(?:"[^"]*"|'[^']*'))?)*\s*)(\/?&gt;)/g,
          (match, openBracket, tagName, attributes, closeBracket) => {
            // Highlight the tag brackets and name
            let result = `<span class="html-tag">${openBracket}${tagName}</span>`;

            // Highlight attributes if they exist
            if (attributes.trim()) {
              const highlightedAttrs = attributes
                .replace(
                  /(\s+)([a-zA-Z][a-zA-Z0-9-]*)(=)(".*?"|'.*?')/g,
                  '$1<span class="html-attribute">$2$3</span><span class="html-string">$4</span>',
                )
                .replace(
                  /(\s+)([a-zA-Z][a-zA-Z0-9-]*)/g,
                  '$1<span class="html-attribute">$2</span>',
                );
              result += highlightedAttrs;
            }

            // Highlight closing bracket
            result += `<span class="html-tag">${closeBracket}</span>`;
            return result;
          },
        )
    );
  }

  /**
   * Format the code for display without syntax highlighting
   */
  private _formatCode(): string {
    if (!this.code) return '';

    // Escape HTML entities
    let escapedCode = this.code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    // Skip syntax highlighting to keep all code the same color
    // if (this.language === 'html') {
    //   escapedCode = this._highlightHtml(escapedCode);
    // }

    // Add line numbers if enabled
    if (this.lineNumbers) {
      const lines = escapedCode.split('\n');
      const numberedLines = lines.map((line, index) => {
        const lineNumber = String(index + 1).padStart(2, ' ');
        return `${lineNumber} | ${line}`;
      });
      return numberedLines.join('\n');
    }

    return escapedCode;
  }

  render() {
    if (!this.code) {
      return html`
        <div class="container">
          <div class="code-container">
            <pre class="code">No code provided</pre>
          </div>
        </div>
      `;
    }

    return html`
      <div class="container" part="container">
        ${this.title
          ? html`
              <div class="header" part="header">
                <h3 class="title" part="title">${this.title}</h3>
                <button
                  class="copy-button ${this._copied ? 'copied' : ''}"
                  part="copy-button"
                  @click=${this._handleCopy}
                  title="${this._copied ? 'Copied!' : 'Copy code'}"
                >
                  <icon-copy></icon-copy>
                </button>
              </div>
            `
          : html`
              <div class="header" part="header">
                <span></span>
                <button
                  class="copy-button ${this._copied ? 'copied' : ''}"
                  part="copy-button"
                  @click=${this._handleCopy}
                  title="${this._copied ? 'Copied!' : 'Copy code'}"
                >
                  <icon-copy></icon-copy>
                </button>
              </div>
            `}
        <div class="code-container" part="code-container">
          <pre class="code" part="code">${unsafeHTML(this._formatCode())}</pre>
        </div>
      </div>
    `;
  }
}
