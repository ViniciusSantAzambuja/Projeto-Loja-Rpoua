import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import js from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  ...pluginVue.configs["flat/essential"],
  {rules: { 
    'no-duplicate-imports': 'error', 
    camelcase: ["warn", {"props": true, "ignoreDestructuring": true}], 
    'no-multi-assign': 'error', 
    'no-multi-str': 'error', 
    'no-var': 'error',
    'require-await': 'error' 
    }
  },
];