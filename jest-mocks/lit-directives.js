// Mock Lit directives for testing

// Mock ifDefined directive
function ifDefined(value) {
  return value !== undefined ? value : '';
}

// Mock classMap directive
function classMap(classInfo) {
  const classes = [];
  for (const [className, include] of Object.entries(classInfo)) {
    if (include) {
      classes.push(className);
    }
  }
  return classes.join(' ');
}

module.exports = {
  ifDefined,
  classMap,
};
