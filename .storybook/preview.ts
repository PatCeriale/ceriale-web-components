import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import { applyTheme, lightTheme, darkTheme } from '../src/index.js';
import './global.css';

// Apply default theme
applyTheme(lightTheme);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      extractComponentDescription: (
        _component: any,
        { notes }: { notes?: string | { markdown?: string; text?: string } },
      ) => {
        if (notes) {
          return typeof notes === 'string'
            ? notes
            : notes.markdown || notes.text;
        }
        return null;
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#121212',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light Theme', icon: 'sun' },
          { value: 'dark', title: 'Dark Theme', icon: 'moon' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light';

      // Apply theme
      applyTheme(theme === 'dark' ? darkTheme : lightTheme);

      // Update Storybook's background
      const backgrounds = context.parameters.backgrounds;
      if (backgrounds) {
        backgrounds.default = theme;
      }

      return story();
    },
  ],
};

export default preview;
