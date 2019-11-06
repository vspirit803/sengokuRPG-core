module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['standard', 'typescript'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': 'off',
        'space-before-function-paren': 'off',
        // 'block-spacing': 'off',
        'spaced-comment': 'off',
        'comma-dangle': 'off',
        // 'no-eval': 'off',
        // 'computed-property-even-spacing': 'off',
        // 'standard/computed-property-even-spacing': 'off'
    }
};
