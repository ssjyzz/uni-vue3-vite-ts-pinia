/*
 * @Author: Betty.Gao
 * @Date: 2022-08-09 16:25:38
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-25 17:24:12
 * @Description: eslint配置
 */
module.exports = {
  globals: {
    uni: true,
    UniApp: true,
    plus: true,
    wx: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 一定要放在最后一项
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 0,
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        printWidth: 100,
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        endOfLine: 'auto'
      }
    ],
    // 解决vite+airbnb导致eslint报错import/extensions
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
