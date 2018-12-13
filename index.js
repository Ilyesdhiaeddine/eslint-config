const plugin = require('.');

module.exports = {
  plugins: ['standard', 'prettier'],
  extends: ['eslint:recommended', 'standard', 'prettier', 'prettier/standard'],
  rules: {
    'block-scoped-var': 'error',
    'consistent-this': ['error', '_this'],
    'dot-notation': 'error',
    'global-require': 'error',
    'id-blacklist': ['error', 'callback'],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'max-depth': ['error', 2],
    // 'max-len': ['error', { code: 100, tabWidth: 2, ignoreComments: true }],
    'max-lines': ['error', 1000],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 5],
    'max-statements-per-line': ['error', { max: 2 }],
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-alert': 'error',
    'no-async-promise-executor': 'error',
    'no-bitwise': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-console': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-eq-null': 'error',
    'no-extra-label': 'error',
    'no-implicit-globals': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-misleading-character-class': 'error',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'error',
    'no-process-exit': 'error',
    'no-script-url': 'error',
    'no-unused-labels': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'object-shorthand': ['error', 'always'],
    'operator-assignment': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' }
    ],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-yield': 'error',
    'vars-on-top': 'error',
    radix: 'error',
    strict: 'error'
  }
};
