const year = new Date().getFullYear();
module.exports = {
    extends: ['eslint:recommended', 'prettier', 'prettier/unicorn'],
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['compat', 'header', 'jquery', 'import', 'unicorn'],
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
                functions: 'ignore',
            },
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
                before: true,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'object-shorthand': ['error', 'always'],
        'one-var': ['error', 'never'],
        'max-len': ['warn', 80, 4],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-empty': 'error',
        'no-fallthrough': 'error',
        'no-multi-spaces': 'error',
        'no-useless-rename': 'error',
        'no-unneeded-ternary': 'error',
        'no-var': 'error',
        'operator-assignment': ['error', 'always'],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: { multiline: true, minProperties: 2 },
                ObjectPattern: 'never',
                ImportDeclaration: 'never',
                ExportDeclaration: { multiline: true, minProperties: 2 },
            },
        ],
        'padded-blocks': ['error', 'never'],
        'prefer-const': 'error',
        'prefer-destructuring': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'error',
        'prefer-regex-literals': 'error',
        quotes: ['error', 'single'],
        semi: [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true,
            },
        ],
        'semi-style': 'error',
        'sort-vars': 'error',
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false,
            },
        ],
        'template-curly-spacing': ['error', 'never'],
        'valid-jsdoc': 'warn',
        yoda: 'error',
        'header/header': ['error', 'block', ['! 🧮🧩 ' + year]],
        'import/dynamic-import-chunkname': [
            'error',
            {
                importFunctions: ['dynamicImport'],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.\\[\\]]+',
            },
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
                'newlines-between': 'always',
            },
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
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/import-index': 'error',
        'unicorn/better-regex': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'warn',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-node-remove': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prevent-abbreviations': 'warn',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-trim-start-end': 'error',
        'unicorn/no-null': 'warn',
        'unicorn/prefer-set-has': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/no-useless-undefined': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-ternary': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
    },
};