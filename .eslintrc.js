module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
