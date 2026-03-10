module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.stories.ts',
    '!src/**/*.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^lit$': '<rootDir>/jest-mocks/lit.js',
    '^lit/decorators.js$': '<rootDir>/jest-mocks/lit-decorators.js',
    '^lit/directives/(.*)$': '<rootDir>/jest-mocks/lit-directives.js',
    '^../../styles/base.js$': '<rootDir>/jest-mocks/styles.js',
    '^../../utils/index.js$': '<rootDir>/jest-mocks/utils.js',
    '^../../tokens/index.js$': '<rootDir>/jest-mocks/tokens.js',
  },
};
