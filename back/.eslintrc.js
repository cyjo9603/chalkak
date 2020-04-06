module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/eslint-recommended'],
  rules: {
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
