import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

@customElement('icon-check')
export class CheckIcon extends IconBase {
  protected render() {
    return html`
      <svg
        viewBox="0 0 24 24"
        part="svg"
        aria-hidden="${this.ariaLabel ? 'false' : 'true'}"
        aria-label="${this.ariaLabel || ''}"
        role="${this.ariaLabel ? 'img' : 'presentation'}"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    `;
  }
}

@customElement('icon-error')
export class ErrorIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path d="M11 7h2v7h-2zm0 9h2v2h-2z" fill="white" />
      </svg>
    `;
  }
}

@customElement('icon-warning')
export class WarningIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    `;
  }
}

@customElement('icon-info')
export class InfoIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-loading')
export class LoadingIcon extends IconBase {
  static styles = [
    ...IconBase.styles,
    css`
      svg {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        svg {
          animation: none;
        }
      }
    `,
  ];

  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-check': CheckIcon;
    'icon-error': ErrorIcon;
    'icon-warning': WarningIcon;
    'icon-info': InfoIcon;
    'icon-loading': LoadingIcon;
  }
}
