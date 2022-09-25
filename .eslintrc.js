/* global module */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'google',
    'prettier',
    'plugin:react/jsx-runtime'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-no-undef': [0, { allowGlobals: true }],
    'require-jsdoc': 0,
    'comma-dangle': 0,
    indent: 0,
    'object-curly-spacing': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
