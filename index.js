import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import compat from 'eslint-plugin-compat';
import jquery from 'eslint-plugin-jquery';
import importPlugin from 'eslint-plugin-import-x';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  unicorn.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: { ...globals.browser },
      parser: typescriptParser
    },
    plugins: {
      compat,
      jquery,
      import: importPlugin
    },
    rules: {
      'arrow-parens': ['error', 'as-needed'],
      'array-bracket-spacing': ['error', 'never'],
      'brace-style': 'error',
      'comma-dangle': [
        'warn',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore'
        }
      ],
      'comma-spacing': 'error',
      'consistent-this': 'warn',
      'compat/compat': 'warn',
      'func-style': ['error', 'expression'],
      'function-paren-newline': ['error', 'never'],
      'implicit-arrow-linebreak': ['error', 'beside'],
      indent: ['error', 4],
      'keyword-spacing': [
        'error',
        {
          after: true,
          before: true
        }
      ],
      'linebreak-style': ['error', 'unix'],
      'object-shorthand': ['error', 'always'],
      'one-var': ['error', 'never'],
      'max-len': ['warn', 80, 4],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-multi-spaces': 'error',
      'no-useless-rename': 'error',
      'no-unneeded-ternary': 'error',
      'no-var': 'error',
      'operator-assignment': ['error', 'always'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2
          },
          ObjectPattern: 'never',
          ImportDeclaration: 'never',
          ExportDeclaration: {
            multiline: true,
            minProperties: 2
          }
        }
      ],
      'padded-blocks': ['error', 'never'],
      'prefer-const': 'error',
      'prefer-destructuring': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'error',
      'prefer-regex-literals': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'always', { omitLastInOneLineBlock: true }],
      'semi-style': 'error',
      'sort-vars': 'error',
      'switch-colon-spacing': [
        'error',
        {
          after: true,
          before: false
        }
      ],
      'template-curly-spacing': ['error', 'never'],
      yoda: 'error',
      'import/dynamic-import-chunkname': [
        'error',
        {
          importFunctions: ['dynamicImport'],
          webpackChunknameFormat: String.raw`[0-9a-zA-Z-_/.\[\]]+`
        }
      ],
      'import/no-absolute-path': 'error',
      'import/no-commonjs': 'error',
      'import/no-duplicates': 'error',
      'import/no-amd': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-self-import': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
          'newlines-between': 'always'
        }
      ],
      'jquery/no-ajax': 'error',
      'jquery/no-ajax-events': 'warn',
      'jquery/no-animate': 'error',
      'jquery/no-attr': 'warn',
      'jquery/no-bind': 'warn',
      'jquery/no-class': 'warn',
      'jquery/no-clone': 'warn',
      'jquery/no-closest': 'warn',
      'jquery/no-css': 'warn',
      'jquery/no-data': 'warn',
      'jquery/no-deferred': 'warn',
      'jquery/no-delegate': 'warn',
      'jquery/no-each': 'warn',
      'jquery/no-fade': 'error',
      'jquery/no-filter': 'warn',
      'jquery/no-find': 'warn',
      'jquery/no-global-eval': 'warn',
      'jquery/no-has': 'warn',
      'jquery/no-hide': 'error',
      'jquery/no-html': 'warn',
      'jquery/no-in-array': 'warn',
      'jquery/no-is': 'warn',
      'jquery/no-load': 'error',
      'jquery/no-map': 'warn',
      'jquery/no-merge': 'warn',
      'jquery/no-param': 'error',
      'jquery/no-parent': 'warn',
      'jquery/no-parents': 'warn',
      'jquery/no-parse-html': 'warn',
      'jquery/no-prop': 'warn',
      'jquery/no-proxy': 'warn',
      'jquery/no-ready': 'warn',
      'jquery/no-serialize': 'error',
      'jquery/no-show': 'error',
      'jquery/no-size': 'warn',
      'jquery/no-sizzle': 'warn',
      'jquery/no-slide': 'error',
      'jquery/no-submit': 'warn',
      'jquery/no-text': 'warn',
      'jquery/no-toggle': 'error',
      'jquery/no-trigger': 'warn',
      'jquery/no-trim': 'warn',
      'jquery/no-val': 'warn',
      'jquery/no-when': 'warn',
      'jquery/no-wrap': 'warn',
      // Unicorn rules not in unicorn.configs.recommended
      'unicorn/better-regex': 'error',
      'unicorn/no-array-push-push': 'warn',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-unused-properties': 'warn',
      'unicorn/prefer-json-parse-buffer': 'error',
      // Unicorn rules softened from recommended's 'error' to 'warn'
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/no-array-for-each': 'warn',
      'unicorn/no-document-cookie': 'warn',
      'unicorn/no-instanceof-builtins': 'warn',
      'unicorn/no-negated-condition': 'warn',
      'unicorn/no-null': 'warn',
      'unicorn/no-thenable': 'warn',
      'unicorn/no-typeof-undefined': 'warn',
      'unicorn/no-unreadable-iife': 'warn',
      'unicorn/no-useless-switch-case': 'warn',
      'unicorn/prefer-default-parameters': 'warn',
      'unicorn/prefer-logical-operator-over-ternary': 'warn',
      'unicorn/prefer-switch': 'warn',
      'unicorn/prevent-abbreviations': 'warn',
      'unicorn/template-indent': 'warn',
      'no-unused-private-class-members': 'warn',
      'prefer-object-has-own': 'error'
    }
  },
  prettier
];
