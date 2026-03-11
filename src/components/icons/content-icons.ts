import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

// Media Icons
@customElement('icon-image')
export class ImageIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
        />
      </svg>
    `;
  }
}

@customElement('icon-video')
export class VideoIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-play-circle')
export class PlayCircleIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
        />
      </svg>
    `;
  }
}

@customElement('icon-audio')
export class AudioIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
        />
      </svg>
    `;
  }
}

// Code/Development Icons
@customElement('icon-code')
export class CodeIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
        />
      </svg>
    `;
  }
}

// Document/File Icons
@customElement('icon-document')
export class DocumentIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
        />
      </svg>
    `;
  }
}

@customElement('icon-folder')
export class FolderIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-pdf')
export class PdfIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.818.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"
        />
        <path
          d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 01-.308-.018v1.426H7v-3.936A7.558 7.558 0 018.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0111.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-image': ImageIcon;
    'icon-video': VideoIcon;
    'icon-play-circle': PlayCircleIcon;
    'icon-audio': AudioIcon;
    'icon-code': CodeIcon;
    'icon-document': DocumentIcon;
    'icon-folder': FolderIcon;
    'icon-pdf': PdfIcon;
  }
}
