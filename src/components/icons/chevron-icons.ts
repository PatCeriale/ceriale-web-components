import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

@customElement('icon-chevron-left')
export class ChevronLeftIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    `;
  }
}

@customElement('icon-chevron-right')
export class ChevronRightIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
      </svg>
    `;
  }
}

@customElement('icon-chevron-up')
export class ChevronUpIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    `;
  }
}

@customElement('icon-chevron-down')
export class ChevronDownIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    `;
  }
}

@customElement('icon-double-chevron-left')
export class ChevronDoubleLeftIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        <path d="M11.41 7.41L10 6l-6 6 6 6 1.41-1.41L6.83 12z" />
      </svg>
    `;
  }
}

@customElement('icon-double-chevron-right')
export class ChevronDoubleRightIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        <path d="M12.59 16.59L14 18l6-6-6-6-1.41 1.41L17.17 12z" />
      </svg>
    `;
  }
}

@customElement('icon-home')
export class HomeIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    `;
  }
}

@customElement('icon-search')
export class SearchIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-chevron-left': ChevronLeftIcon;
    'icon-chevron-right': ChevronRightIcon;
    'icon-chevron-up': ChevronUpIcon;
    'icon-chevron-down': ChevronDownIcon;
    'icon-double-chevron-left': ChevronDoubleLeftIcon;
    'icon-double-chevron-right': ChevronDoubleRightIcon;
    'icon-home': HomeIcon;
    'icon-search': SearchIcon;
  }
}
