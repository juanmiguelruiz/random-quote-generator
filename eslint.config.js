import reactConfig from '@jmrp/lint-config/react';
import testingConfig from '@jmrp/lint-config/testing';

export default [
  ...reactConfig,
  ...testingConfig,
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },
  {
    files: ['*.config.{js,ts}', 'jest.setup.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
