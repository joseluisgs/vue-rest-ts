module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  // Electrón
  settings: {
    'import/core-modules': [
      'electron',
    ],
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [
      'error',
      {
        code: 120,
        comments: 120,
      },
    ],
    // Electrón
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
