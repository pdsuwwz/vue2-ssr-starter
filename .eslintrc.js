module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'no-undef': 1,
    'quote-props': ['error', 'as-needed'], // 要求对象字面量属性名称使用引号 (quote-props)
    semi: ['error', 'never'],
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',
    // https://cn.eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2, // 禁用行尾空白
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': 1, // 函数括号前空格
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': ['warn', { int32Hint: false }], // 运算符周围的空格

    // https://cn.eslint.org/docs/rules/key-spacing
    'key-spacing': ['warn', { mode: 'strict' }], // 强制在对象字面量的键和值之间使用一致的空格 (key-spacing)

    // https://cn.eslint.org/docs/rules/space-in-parens
    'space-in-parens': ['error', 'never'], // 禁止或强制圆括号内的空格

    // https://stackoverflow.com/questions/32937672/enforce-space-before-curly-brace-in-functions
    'space-before-blocks': [
      'warn',
      {
        functions: 'always',
        keywords: 'never',
        classes: 'always'
      }
    ], // 要求或禁止语句块之前的空格

    'no-irregular-whitespace': 2,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': [
      2,
      {
        max: 2
      }
    ],
    // https://cn.eslint.org/docs/rules/eol-last
    'eol-last': 2,
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,
    camelcase: ['error', { properties: 'never' }],
    indent: ['error', 2, { SwitchCase: 1 }]
  }
}
