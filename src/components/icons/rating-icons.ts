import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

// Star Rating Icons
@customElement('icon-star')
export class StarIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    `;
  }
}

@customElement('icon-star-outline')
export class StarOutlineIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        />
      </svg>
    `;
  }
}

@customElement('icon-star-half')
export class StarHalfIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-star': StarIcon;
    'icon-star-outline': StarOutlineIcon;
    'icon-star-half': StarHalfIcon;
  }
}
