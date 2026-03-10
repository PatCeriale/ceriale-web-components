import { css } from 'lit';

/**
 * Base reset and typography styles for web components
 */
export const baseStyles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    font-family: var(--font-family-primary, 'Roboto', sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Focus styles */
  :focus {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid var(--color-primary-500, #2196f3);
    outline-offset: 2px;
  }

  /* Motion curves */
  .transition-standard {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .transition-decelerate {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  .transition-accelerate {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }

  .transition-sharp {
    transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }

  /* Elevation helpers */
  .elevation-0 {
    box-shadow: var(--elevation-0-shadow);
  }
  .elevation-1 {
    box-shadow: var(--elevation-1-shadow);
  }
  .elevation-2 {
    box-shadow: var(--elevation-2-shadow);
  }
  .elevation-3 {
    box-shadow: var(--elevation-3-shadow);
  }
  .elevation-4 {
    box-shadow: var(--elevation-4-shadow);
  }
  .elevation-6 {
    box-shadow: var(--elevation-6-shadow);
  }
  .elevation-8 {
    box-shadow: var(--elevation-8-shadow);
  }
  .elevation-12 {
    box-shadow: var(--elevation-12-shadow);
  }
  .elevation-16 {
    box-shadow: var(--elevation-16-shadow);
  }
  .elevation-24 {
    box-shadow: var(--elevation-24-shadow);
  }

  /* Ripple effect base */
  .ripple-container {
    position: relative;
    overflow: hidden;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0.3;
    transform: scale(0);
    animation: ripple-animation 600ms linear;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  /* Screen reader only content */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
