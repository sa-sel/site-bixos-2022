module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended'
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', '**/migrations/*'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-extra-parens': [  'error', 'all' ],
        'no-unreachable-loop': 'error',
        'semi': [ 'error', 'never' ],
        'accessor-pairs': 'error',
        'array-callback-return': ['error', { checkForEach: true }],
        'block-scoped-var': 'error',
        'consistent-return': 'warn',
        'class-methods-use-this': 'warn',
        'curly': 'error',
        'default-case': 'warn',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': 'warn',
        'grouped-accessor-pairs': 'warn',
        'guard-for-in': 'error',
        'max-classes-per-file': 'error',
        'no-caller': 'error',
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-empty-function': [ 'warn', { 'allow': [ 'constructors' ] } ],
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-implicit-coercion': [ 'error', { 'allow': ['!!', '+'] } ],
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-use-before-define': 'error',
        'vars-on-top': 'error',
        'require-await': 'error',
        'prefer-regex-literals': 'error',
        'prefer-named-capture-group': 'warn',
        'no-with': 'error',
        'no-warning-comments': 'error',
        'no-void': 'error',
        'no-useless-return': 'error',
        'no-useless-concat': 'error',
        'no-unused-vars': [ 'off', { 'vars': 'local', 'args': 'none' } ],
        'no-unused-expressions': [
            "error",
            { "allowShortCircuit": true, "allowTernary": true }
        ],
        'array-bracket-newline': [
            "error",
            { "multiline": true, "minItems": 3 }
        ],
        'array-bracket-spacing': [
            'error', 'always',
            {
                'singleValue': false,
                'objectsInArrays': true,
                'arraysInArrays': true
            }
        ],
        'array-element-newline': [
            'error',
            { "multiline": true, "minItems": 3 }
        ],
        'block-spacing': 'error',
        'brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true } ],
        'camelcase': [ 'error', { 'ignoreGlobals': true } ],
        'function-paren-newline': [ 'error', 'consistent' ],
        'function-call-argument-newline': [ 'error', 'consistent' ],
        'func-style': [
            'error', 'declaration',
            { 'allowArrowFunctions': true }
        ],
        'func-call-spacing': 'error',
        'eol-last': 'error',
        'comma-style': 'error',
        'comma-spacing': 'error',
        'comma-dangle': [ 'error', 'always-multiline' ],
        'capitalized-comments': [
            'error',
            'never',
            { 'ignoreConsecutiveComments': true }
        ],
        'implicit-arrow-linebreak': [ 'error', 'beside' ],
        'indent': [ 'error', 4, { 'SwitchCase': 1 } ],
        'jsx-quotes': 'error',
        'key-spacing': [
            'error',
            {
                'align': {
                    'beforeColon': false,
                    'afterColon': true,
                    'on': 'value',
                    'mode': 'minimum'
                }
            }
        ],
        'lines-between-class-members': 'error',
        'max-len': [
            'error',
            {
                'code': 80,
                'ignoreUrls': true,
                'ignoreStrings': true,
                'ignoreRegExpLiterals': true
            }
        ],
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'no-lonely-if': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'prefer-exponentiation-operator': 'error',
        'spaced-comment': 'error',
        'space-in-parens': 'error',
        'space-before-function-paren': 'error',
        'semi-style': 'error',
        'semi-spacing': 'error',
        'quotes': [
            'error', 'single',
            { 'avoidEscape': true, 'allowTemplateLiterals': true }
        ],
        'quote-props': [ 'error', 'consistent-as-needed' ],
        'prefer-arrow-callback': 'error',
        'prefer-const': [ 'error', { 'destructuring': 'all' } ],
        'prefer-destructuring': [ 'error', { 'object': true, 'array': false } ],
        'object-shorthand': 'error',
        'no-var': 'error',
        'no-useless-rename': 'error',
        'no-duplicate-imports': 'error',
        'arrow-spacing': 'error',
        'arrow-parens': [ 'error', 'as-needed' ],
        'arrow-body-style': [ 'error', 'as-needed' ],
    },
}

