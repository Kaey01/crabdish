module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": "off",
    // quotes: ["error", "single"],
    "vue/max-len": [
      "error",
      {
        code: 150, // 强制最大行长度。默认80
        template: 150, // 强制<template>的最大行长度。默认值为code
        tabWidth: 2, // 指定制表符的字符宽度。默认值2
        comments: 150 // 强制注释的最大行长度。默认值为code
      }
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 4
        },
        multiline: {
          max: 1
        }
      }
    ],
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ], // html 对齐
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: []
      }
    ], // js 括号对齐
    "object-curly-spacing": ["error", "always"], // 对象两侧空格
    "vue/singleline-html-element-content-newline": ["off"],
    "comma-dangle": ["error", "never"], // 逗号结尾
    "semi": ["error", "never"], //分号
    "no-unused-vars": ["warn"]
  }
}
