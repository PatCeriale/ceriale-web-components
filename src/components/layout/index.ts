/**
 *  Layout Component Library
 *
 * This module exports a comprehensive set of layout components for building
 * responsive, accessible, and themeable user interfaces with .
 *
 * Components:
 * - Box: Flexible container with spacing, positioning, and flexbox utilities
 * - Container: Responsive container with max-width constraints
 * - Grid: Comprehensive grid system supporting CSS Grid and Flexbox
 * - GridItem: Individual grid items with column/row spanning
 * - Stack: Vertical/horizontal stacking container with consistent spacing
 *
 * Features:
 * -  compliant
 * - Fully responsive with mobile-first breakpoint system
 * - Accessible (WCAG 2.1 AA compliant)
 * - Themeable with CSS custom properties
 * - Material Motion animations
 * - TypeScript support with comprehensive type definitions
 */

// Type definitions and utilities
export * from './types.js';

// Core layout components
export { Box } from './box.js';
export { Container } from './container.js';
export { Grid } from './grid.js';
export { GridItem } from './grid-item.js';
export { Stack } from './stack.js';

// Re-export commonly used types for convenience
export type {
  ResponsiveValue,
  SpacingValue,
  LayoutSize,
  LayoutColor,
  GridColumns,
  AlignItems,
  JustifyContent,
  FlexDirection,
  FlexWrap,
  Position,
  Display,
} from './types.js';
