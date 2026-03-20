import { css } from 'lit';

/**
 * Theme-aware utilities for components
 * Use these mixins and helpers to ensure all components follow the design system
 */

/**
 * Base theme mixin that provides consistent theming structure
 * Apply this to all new components for consistent theme support
 */
export const themeMixin = css`
  /* Automatically inherit theme from document or parent */
  :host {
    /* Surface colors */
    --component-surface: var(--surface-surface, #ffffff);
    --component-surface-variant: var(--surface-surface-variant, #f5f5f5);
    --component-on-surface: var(--surface-on-surface, #212121);
    --component-on-surface-variant: var(--surface-on-surface-variant, #757575);

    /* Interactive states */
    --component-hover-surface: var(--color-primary-50, #e3f2fd);
    --component-focus-outline: var(--color-primary-500, #2196f3);
    --component-disabled-opacity: 0.38;

    /* Borders and shadows */
    --component-border: var(--color-grey-300, #e0e0e0);
    --component-border-radius: var(--border-radius-sm, 0.25rem);
    --component-shadow: var(--elevation-1-shadow);

    /* Typography */
    --component-font-family: var(--font-family-primary);
    --component-font-family-mono: var(--font-family-monospace);
    --component-font-size: var(--font-size-base, 1rem);
    --component-font-size-sm: var(--font-size-sm, 0.875rem);
    --component-font-weight: var(--font-weight-regular, 400);
    --component-font-weight-medium: var(--font-weight-medium, 500);

    /* Spacing */
    --component-spacing: var(--spacing-4, 1rem);
    --component-spacing-sm: var(--spacing-2, 0.5rem);
    --component-spacing-lg: var(--spacing-6, 1.5rem);
  }

  /* Dark theme overrides using data-theme attribute on document */
  :host-context([data-theme='dark']) {
    /* Surface colors for dark theme */
    --component-surface: var(--surface-surface, #1e1e1e);
    --component-surface-variant: var(--surface-surface-variant, #2d2d2d);
    --component-on-surface: var(--surface-on-surface, #ffffff);
    --component-on-surface-variant: var(--surface-on-surface-variant, #b0b0b0);

    /* Interactive states for dark theme */
    --component-hover-surface: var(--color-primary-900, #0d47a1);
    --component-border: var(--color-grey-600, #757575);
  }

  /* Alternative: Support for theme attribute directly on component */
  :host([theme='dark']) {
    --component-surface: var(--surface-surface, #1e1e1e);
    --component-surface-variant: var(--surface-surface-variant, #2d2d2d);
    --component-on-surface: var(--surface-on-surface, #ffffff);
    --component-on-surface-variant: var(--surface-on-surface-variant, #b0b0b0);
    --component-hover-surface: var(--color-primary-900, #0d47a1);
    --component-border: var(--color-grey-600, #757575);
  }
`;

/**
 * Interactive state mixin for buttons, inputs, and other interactive elements
 */
export const interactiveMixin = css`
  /* Base interactive styles */
  .interactive {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .interactive:hover:not(:disabled) {
    background-color: var(--component-hover-surface);
  }

  .interactive:focus-visible {
    outline: 2px solid var(--component-focus-outline);
    outline-offset: 2px;
  }

  .interactive:disabled {
    opacity: var(--component-disabled-opacity);
    cursor: not-allowed;
  }
`;

/**
 * Shadow elevation utilities
 */
export const elevationMixin = css`
  .elevation-0 {
    box-shadow: var(--elevation-0-shadow, none);
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
`;

/**
 * Common spacing utilities
 */
export const spacingMixin = css`
  .p-0 {
    padding: var(--spacing-0, 0);
  }
  .p-1 {
    padding: var(--spacing-1, 0.25rem);
  }
  .p-2 {
    padding: var(--spacing-2, 0.5rem);
  }
  .p-3 {
    padding: var(--spacing-3, 0.75rem);
  }
  .p-4 {
    padding: var(--spacing-4, 1rem);
  }
  .p-6 {
    padding: var(--spacing-6, 1.5rem);
  }
  .p-8 {
    padding: var(--spacing-8, 2rem);
  }

  .m-0 {
    margin: var(--spacing-0, 0);
  }
  .m-1 {
    margin: var(--spacing-1, 0.25rem);
  }
  .m-2 {
    margin: var(--spacing-2, 0.5rem);
  }
  .m-3 {
    margin: var(--spacing-3, 0.75rem);
  }
  .m-4 {
    margin: var(--spacing-4, 1rem);
  }
  .m-6 {
    margin: var(--spacing-6, 1.5rem);
  }
  .m-8 {
    margin: var(--spacing-8, 2rem);
  }
`;

/**
 * Typography scale utilities
 */
export const typographyMixin = css`
  .text-xs {
    font-size: var(--font-size-xs, 0.75rem);
  }
  .text-sm {
    font-size: var(--font-size-sm, 0.875rem);
  }
  .text-base {
    font-size: var(--font-size-base, 1rem);
  }
  .text-lg {
    font-size: var(--font-size-lg, 1.125rem);
  }
  .text-xl {
    font-size: var(--font-size-xl, 1.25rem);
  }
  .text-2xl {
    font-size: var(--font-size-2xl, 1.5rem);
  }

  .font-light {
    font-weight: var(--font-weight-light, 300);
  }
  .font-regular {
    font-weight: var(--font-weight-regular, 400);
  }
  .font-medium {
    font-weight: var(--font-weight-medium, 500);
  }
  .font-semibold {
    font-weight: var(--font-weight-semiBold, 600);
  }
  .font-bold {
    font-weight: var(--font-weight-bold, 700);
  }

  .font-mono {
    font-family: var(--component-font-family-mono);
  }
`;

/**
 * Color utilities for semantic colors
 */
export const colorMixin = css`
  .text-primary {
    color: var(--color-primary-600, #1e88e5);
  }
  .text-secondary {
    color: var(--color-secondary-600, #d81b60);
  }
  .text-success {
    color: var(--color-success-600, #43a047);
  }
  .text-warning {
    color: var(--color-warning-600, #fb8c00);
  }
  .text-error {
    color: var(--color-error-600, #e53935);
  }

  .bg-primary {
    background-color: var(--color-primary-600, #1e88e5);
  }
  .bg-secondary {
    background-color: var(--color-secondary-600, #d81b60);
  }
  .bg-success {
    background-color: var(--color-success-600, #43a047);
  }
  .bg-warning {
    background-color: var(--color-warning-600, #fb8c00);
  }
  .bg-error {
    background-color: var(--color-error-600, #e53935);
  }
`;

/**
 * Complete theme styles bundle - includes all common utilities
 * Use this for components that need comprehensive theming support
 */
export const completeThemeMixin = css`
  ${themeMixin}
  ${interactiveMixin}
  ${elevationMixin}
  ${spacingMixin}
  ${typographyMixin}
  ${colorMixin}
`;

/**
 * Helper function to create theme-aware component styles
 * @param componentStyles - Additional component-specific styles
 * @returns Combined styles with theme support
 */
export function createThemedStyles(componentStyles: any) {
  return [themeMixin, interactiveMixin, componentStyles];
}

/**
 * Common patterns for component state variants
 */
export const stateVariants = {
  primary: css`
    --variant-color: var(--color-primary-600, #1e88e5);
  `,
  secondary: css`
    --variant-color: var(--color-secondary-600, #d81b60);
  `,
  success: css`
    --variant-color: var(--color-success-600, #43a047);
  `,
  warning: css`
    --variant-color: var(--color-warning-600, #fb8c00);
  `,
  error: css`
    --variant-color: var(--color-error-600, #e53935);
  `,
};

/**
 * Component size variants
 */
export const sizeVariants = {
  small: css`
    --variant-padding: var(--spacing-2, 0.5rem) var(--spacing-3, 0.75rem);
    --variant-font-size: var(--font-size-sm, 0.875rem);
    --variant-height: 2rem;
  `,
  medium: css`
    --variant-padding: var(--spacing-3, 0.75rem) var(--spacing-4, 1rem);
    --variant-font-size: var(--font-size-base, 1rem);
    --variant-height: 2.5rem;
  `,
  large: css`
    --variant-padding: var(--spacing-4, 1rem) var(--spacing-6, 1.5rem);
    --variant-font-size: var(--font-size-lg, 1.125rem);
    --variant-height: 3rem;
  `,
};
