// Design tokens
export * from './tokens/index.js';

// Components
export { Button } from './components/button/button.js';
export { Card } from './components/card/card.js';
export { CodeBox } from './components/code-box/code-box.js';
export { Input } from './components/input/input.js';
export { Toggle } from './components/toggle/toggle.js';

// Icons
export * from './components/icons/index.js';

// Utilities
export * from './utils/index.js';
export * from './styles/base.js';
export * from './styles/theme.js';

// Theme utilities
import { lightTheme, darkTheme, applyTheme } from './tokens/index.js';

// Auto-apply light theme on module load
applyTheme(lightTheme);

// Export themes for manual control
export { lightTheme, darkTheme, applyTheme };
