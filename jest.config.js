module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/public/**',
    '!**/src/reportWebVitals.js',
  ],
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
