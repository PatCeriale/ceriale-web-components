import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

@customElement('icon-menu')
export class MenuIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    `;
  }
}

@customElement('icon-close')
export class CloseIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    `;
  }
}

@customElement('icon-arrow-left')
export class ArrowLeftIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-arrow-right')
export class ArrowRightIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M4 11v2h12.17l-5.59 5.59L12 20l8-8-8-8-1.41 1.41L16.17 11H4z"
        />
      </svg>
    `;
  }
}

@customElement('icon-arrow-up')
export class ArrowUpIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z"
        />
      </svg>
    `;
  }
}

@customElement('icon-arrow-down')
export class ArrowDownIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M11 4h2v12l5.5-5.5 1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5 11 16V4z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-menu': MenuIcon;
    'icon-close': CloseIcon;
    'icon-arrow-left': ArrowLeftIcon;
    'icon-arrow-right': ArrowRightIcon;
    'icon-arrow-up': ArrowUpIcon;
    'icon-arrow-down': ArrowDownIcon;
  }
}
