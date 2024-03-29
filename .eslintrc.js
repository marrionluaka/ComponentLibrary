module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended', '@vue/typescript', 'plugin:storybook/recommended'],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
      jest: true
    }
  }]
};