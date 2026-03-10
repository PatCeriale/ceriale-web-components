// Mock Lit decorators for testing

// Mock customElement decorator
function customElement(tagName) {
  return function (clazz) {
    clazz.tagName = tagName;
    return clazz;
  };
}

// Mock property decorator
function property(options = {}) {
  return function (target, propertyKey) {
    // Basic property descriptor setup
    const descriptor = {
      get: function () {
        return this['_' + propertyKey];
      },
      set: function (value) {
        this['_' + propertyKey] = value;
        if (this.requestUpdate) this.requestUpdate();
      },
      enumerable: true,
      configurable: true,
    };

    Object.defineProperty(target, propertyKey, descriptor);
  };
}

// Mock query decorator
function query(selector) {
  return function (target, propertyKey) {
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this.shadowRoot ? this.shadowRoot.querySelector(selector) : null;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

// Mock state decorator
function state() {
  return property();
}

module.exports = {
  customElement,
  property,
  query,
  state,
};
