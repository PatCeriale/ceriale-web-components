// Jest setup for web components testing
require('jest-environment-jsdom');

// Mock CSS imports since Jest doesn't handle them
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'block',
      appearance: 'button',
      getPropertyValue: () => '',
    };
  },
});

// Mock customElements for testing
global.customElements = global.customElements || {
  define: jest.fn(),
  get: jest.fn(),
  whenDefined: jest.fn().mockResolvedValue(undefined),
};

// Extend Jest matchers
expect.extend({
  toBeTruthy(received) {
    const pass = Boolean(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be truthy`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be truthy`,
        pass: false,
      };
    }
  },
});

// Setup DOM cleanup
afterEach(() => {
  document.body.innerHTML = '';
});
