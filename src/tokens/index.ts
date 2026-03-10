import { colors, surface } from './colors.js';
import { typography, typeScale } from './typography.js';
import { spacing, elevation, borderRadius } from './spacing.js';

export interface Theme {
  colors: typeof colors;
  surface: typeof surface.light | typeof surface.dark;
  typography: typeof typography;
  typeScale: typeof typeScale;
  spacing: typeof spacing;
  elevation: typeof elevation;
  borderRadius: typeof borderRadius;
  mode: 'light' | 'dark';
}

export const lightTheme: Theme = {
  colors,
  surface: surface.light,
  typography,
  typeScale,
  spacing,
  elevation,
  borderRadius,
  mode: 'light',
};

export const darkTheme: Theme = {
  colors,
  surface: surface.dark,
  typography,
  typeScale,
  spacing,
  elevation,
  borderRadius,
  mode: 'dark',
};

// CSS Custom Properties generator
export function generateCSSCustomProperties(theme: Theme): string {
  const cssVars: string[] = [];

  // Colors
  Object.entries(theme.colors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      cssVars.push(`  --color-${colorName}-${shade}: ${value};`);
    });
  });

  // Surface colors
  Object.entries(theme.surface).forEach(([key, value]) => {
    cssVars.push(`  --surface-${key}: ${value};`);
  });

  // Typography
  cssVars.push(
    `  --font-family-primary: ${theme.typography.fontFamily.primary};`,
  );
  cssVars.push(
    `  --font-family-monospace: ${theme.typography.fontFamily.monospace};`,
  );

  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    cssVars.push(`  --font-weight-${key}: ${value};`);
  });

  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    cssVars.push(`  --font-size-${key}: ${value};`);
  });

  // Type scale
  Object.entries(theme.typeScale).forEach(([key, values]) => {
    Object.entries(values).forEach(([prop, value]) => {
      cssVars.push(
        `  --type-${key}-${prop
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()}: ${value};`,
      );
    });
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    cssVars.push(`  --spacing-${key}: ${value};`);
  });

  // Elevation
  Object.entries(theme.elevation).forEach(([key, values]) => {
    cssVars.push(`  --elevation-${key}-shadow: ${values.boxShadow};`);
    cssVars.push(`  --elevation-${key}-z-index: ${values.zIndex};`);
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    cssVars.push(`  --border-radius-${key}: ${value};`);
  });

  return `:root {\n${cssVars.join('\n')}\n}`;
}

// Utility to apply theme to document
export function applyTheme(theme: Theme): void {
  const style =
    document.getElementById('theme-vars') || document.createElement('style');
  style.id = 'theme-vars';
  style.textContent = generateCSSCustomProperties(theme);

  if (!style.parentNode) {
    document.head.appendChild(style);
  }

  document.documentElement.setAttribute('data-theme', theme.mode);
}

export * from './colors.js';
export * from './typography.js';
export * from './spacing.js';
