module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off', // conflicts with prettier
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/named': 'off',
    'no-console': 'error',
    'react/prop-types': 'off',
    'import/first': 'warn',
    'import/namespace': ['error', { allowComputed: true }],
    'import/no-duplicates': 'error',
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
    'import/no-cycle': 'error',
    'import/no-self-import': 'warn',
    'import/extensions': ['off', 'never', { ts: 'never' }],
    '@typescript-eslint/camelcase': ['off', { ignoreDestructuring: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      'eslint-import-resolver-typescript': true,
    },
  },
};
