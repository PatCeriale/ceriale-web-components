// Mock Lit imports for testing

// Mock LitElement base class
class MockLitElement extends HTMLElement {
  constructor() {
    super();
    this.updateComplete = Promise.resolve();
  }

  // Basic lifecycle methods
  connectedCallback() {}
  disconnectedCallback() {}
  render() {
    return '';
  }
  requestUpdate() {
    return this.updateComplete;
  }

  // Mock property handling
  static get properties() {
    return {};
  }
}

// Mock html template function
function html(strings, ...values) {
  return {
    strings,
    values,
    __litHtml: true,
  };
}

// Mock css function
function css(strings, ...values) {
  return {
    strings,
    values,
    __litCSS: true,
  };
}

// Mock nothing directive
const nothing = Symbol('lit-nothing');

module.exports = {
  LitElement: MockLitElement,
  html,
  css,
  nothing,
};
