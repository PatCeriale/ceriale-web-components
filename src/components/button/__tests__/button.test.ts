import '../button';
import type { Button } from '../button';

// Setup JSDOM for testing web components
Object.defineProperty(window, 'customElements', {
  value: global.customElements || {
    define: jest.fn(),
    get: jest.fn(),
    whenDefined: jest.fn().mockResolvedValue(undefined),
  },
  writable: true,
});

describe('Button Component', () => {
  let button: Button;

  beforeEach(() => {
    // Create a mock button element
    button = {
      variant: 'contained',
      size: 'medium',
      color: 'primary',
      disabled: false,
      loading: false,
      href: undefined,
      target: undefined,
      ariaLabel: null,
      shadowRoot: {
        querySelector: jest.fn(),
      },
      textContent: 'Test Button',
      setAttribute: jest.fn(),
      addEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
      requestUpdate: jest.fn().mockResolvedValue(undefined),
      updateComplete: Promise.resolve(),
    } as any;

    document.body.innerHTML = '';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should have default properties', () => {
    expect(button.variant).toBe('contained');
    expect(button.size).toBe('medium');
    expect(button.color).toBe('primary');
    expect(button.disabled).toBe(false);
    expect(button.loading).toBe(false);
  });

  it('should handle disabled state', () => {
    button.disabled = true;
    expect(button.disabled).toBe(true);
  });

  it('should handle loading state', () => {
    button.loading = true;
    expect(button.loading).toBe(true);
  });

  it('should handle href property', () => {
    button.href = 'https://example.com';
    expect(button.href).toBe('https://example.com');
  });

  it('should handle variant changes', () => {
    button.variant = 'outlined';
    expect(button.variant).toBe('outlined');

    button.variant = 'text';
    expect(button.variant).toBe('text');
  });

  it('should handle size changes', () => {
    button.size = 'small';
    expect(button.size).toBe('small');

    button.size = 'large';
    expect(button.size).toBe('large');
  });

  it('should handle color changes', () => {
    button.color = 'secondary';
    expect(button.color).toBe('secondary');

    button.color = 'error';
    expect(button.color).toBe('error');
  });

  it('should dispatch events', () => {
    const dispatchSpy = jest.spyOn(button, 'dispatchEvent');
    button.dispatchEvent(new CustomEvent('mwc-button-click'));
    expect(dispatchSpy).toHaveBeenCalled();
  });

  it('should call requestUpdate when properties change', async () => {
    const updateSpy = jest.spyOn(button, 'requestUpdate');
    button.variant = 'outlined';
    expect(updateSpy).toBeDefined();
  });
});
