import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

// Eye Icons
@customElement('icon-eye')
export class EyeIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 4.5C7 4.5 2.73 6.61 1 12c1.73 5.39 6 7.5 11 7.5s9.27-2.11 11-7.5c-1.73-5.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        />
      </svg>
    `;
  }
}

@customElement('icon-eye-off')
export class EyeOffIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-5.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 5.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
        />
      </svg>
    `;
  }
}

// Favorite/Like Icons
@customElement('icon-heart')
export class HeartIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    `;
  }
}

@customElement('icon-heart-outline')
export class HeartOutlineIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        />
      </svg>
    `;
  }
}

// Thumbs Icons
@customElement('icon-thumb-up')
export class ThumbUpIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-thumb-down')
export class ThumbDownIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-eye': EyeIcon;
    'icon-eye-off': EyeOffIcon;
    'icon-heart': HeartIcon;
    'icon-heart-outline': HeartOutlineIcon;
    'icon-thumb-up': ThumbUpIcon;
    'icon-thumb-down': ThumbDownIcon;
  }
}
