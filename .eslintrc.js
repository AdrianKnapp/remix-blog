/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:node/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'ignore',
        warnOnUnassignedImports: true,
        groups: ['builtin', 'external', 'internal', 'parent', ['index', 'sibling'], 'object', 'type'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react/jsx-props-no-spreading': [
      2,
      {
        html: 'ignore',
        exceptions: [],
      },
    ],
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
  },
};
