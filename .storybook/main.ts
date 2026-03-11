import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    // Ensure Vite can resolve our source files
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '/src',
    };

    return config;
  },
};

export default config;
