import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from './icon-base.js';

// Professional Social Icons
@customElement('icon-github')
export class GitHubIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.5-1.25-1.24-1.58-1.24-1.58-1-.68.08-.66.08-.66 1.11.08 1.69 1.11 1.69 1.11 1 1.65 2.57 1.17 3.2.9.1-.7.4-1.17.72-1.44-2.44-.27-5-1.19-5-5.32 0-1.18.42-2.15 1.11-2.91-.11-.27-.48-1.29.11-2.69 0 0 .9-.29 2.95 1.1A10.32 10.32 0 0112 6.84a10.32 10.32 0 012.69.37c2.04-1.39 2.95-1.1 2.95-1.1.59 1.4.22 2.42.11 2.69.69.76 1.11 1.73 1.11 2.91 0 4.14-2.57 5.04-5.02 5.31.4.34.76 1.04.76 2.08v3.09c0 .27.18.64.73.55A11 11 0 0012 1.27z"
        />
      </svg>
    `;
  }
}

@customElement('icon-linkedin')
export class LinkedInIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
        />
      </svg>
    `;
  }
}

@customElement('icon-twitter')
export class TwitterIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
        />
      </svg>
    `;
  }
}

@customElement('icon-email')
export class EmailIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-portfolio')
export class PortfolioIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
        />
      </svg>
    `;
  }
}

@customElement('icon-work')
export class WorkIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"
        />
      </svg>
    `;
  }
}

// Academic/Education Icons
@customElement('icon-school')
export class SchoolIcon extends IconBase {
  protected render() {
    return html`
      <svg viewBox="0 0 24 24" part="svg">
        <path
          d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
        />
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'icon-github': GitHubIcon;
    'icon-linkedin': LinkedInIcon;
    'icon-twitter': TwitterIcon;
    'icon-email': EmailIcon;
    'icon-portfolio': PortfolioIcon;
    'icon-work': WorkIcon;
    'icon-school': SchoolIcon;
  }
}
