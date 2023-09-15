module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue'
  ],
  plugins: ['stylelint-order'],
  overrides: [
    // {
    //   files: ['**/*.scss'],
    //   customSyntax: 'postcss-scss'
    // }
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'declaration-block-trailing-semicolon': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'use'
        ]
      }
    ],
    'property-no-vendor-prefix': null,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      { type: 'at-rule', name: 'include' },
      { type: 'at-rule', name: 'include', hasBlock: true },
      { type: 'at-rule', hasBlock: true },
      { type: 'at-rule' },
      'rules'
    ]
  }
}
