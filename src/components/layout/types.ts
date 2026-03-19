// Common layout types and utilities

// Base size variants consistent with existing components
export type LayoutSize = 'small' | 'medium' | 'large';

// Color variants matching design tokens
export type LayoutColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

// State variants for interactive elements
export type LayoutState =
  | 'default'
  | 'hover'
  | 'focus'
  | 'active'
  | 'disabled'
  | 'loading';

// Spacing system values
export type SpacingValue =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | number
  | string;

// Responsive breakpoints following mobile-first design
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Responsive value type for adaptive properties
export type ResponsiveValue<T> =
  | T
  | {
      xs?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    };

// Flexbox alignment options
export type AlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

// Position and display types
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'none';

// Grid layout options
export type GridTemplateColumns = 'none' | 'subgrid' | number | string;
export type GridTemplateRows = 'none' | 'subgrid' | number | string;
export type GridAutoFlow = 'row' | 'column' | 'row dense' | 'column dense';

// Grid column spans (1-12 columns + auto)
export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'auto';

// Container variants
export type ContainerVariant = 'fluid' | 'fixed' | 'max-width';

// Common utility functions
export const breakpoints: Record<Breakpoint, string> = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

export const spacingMap: Record<SpacingValue, string> = {
  none: '0',
  xs: 'var(--spacing-1, 4px)',
  sm: 'var(--spacing-2, 8px)',
  md: 'var(--spacing-3, 16px)',
  lg: 'var(--spacing-4, 24px)',
  xl: 'var(--spacing-5, 32px)',
  '2xl': 'var(--spacing-6, 48px)',
  '3xl': 'var(--spacing-7, 64px)',
};

// Convert spacing value to CSS
export function getSpacingValue(value: SpacingValue): string {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  if (typeof value === 'string' && value in spacingMap) {
    return spacingMap[value as keyof typeof spacingMap];
  }
  return value as string;
}

// Generate responsive CSS for a property
export function getResponsiveValue<T>(
  property: string,
  value: ResponsiveValue<T>,
  converter?: (val: T) => string,
): string {
  if (typeof value === 'object' && value !== null) {
    const rules: string[] = [];
    const responsiveValue = value as Record<Breakpoint, T>;

    // Base value (xs)
    if (responsiveValue.xs !== undefined) {
      const cssValue = converter
        ? converter(responsiveValue.xs)
        : String(responsiveValue.xs);
      rules.push(`${property}: ${cssValue};`);
    }

    // Media queries for larger breakpoints
    (['sm', 'md', 'lg', 'xl'] as const).forEach((bp) => {
      if (responsiveValue[bp] !== undefined) {
        const cssValue = converter
          ? converter(responsiveValue[bp])
          : String(responsiveValue[bp]);
        rules.push(
          `@media (min-width: ${breakpoints[bp]}) { ${property}: ${cssValue}; }`,
        );
      }
    });

    return rules.join(' ');
  }

  const cssValue = converter ? converter(value as T) : String(value);
  return `${property}: ${cssValue};`;
}

// Material motion timing functions
export const materialMotion = {
  // Standard easing for most transitions
  standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  // Emphasis for important actions
  emphasized: 'cubic-bezier(0.2, 0.0, 0, 1)',
  // Decelerate for incoming elements
  decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  // Accelerate for outgoing elements
  accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
};

// Material motion durations (in ms)
export const materialDuration = {
  short1: 100,
  short2: 200,
  medium1: 250,
  medium2: 300,
  long1: 400,
  long2: 500,
};

// Generate consistent focus styles
export function getFocusStyles(color?: LayoutColor): string {
  const focusColor = color
    ? `var(--color-${color}-600, #6750a4)`
    : 'var(--color-primary-600, #6750a4)';
  return `
    outline: 2px solid ${focusColor};
    outline-offset: 2px;
    border-radius: var(--border-radius-small, 4px);
  `;
}
