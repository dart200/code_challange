/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rule sets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    env: {node: true, es6: true},
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    ignorePatterns: ["/*.*", "/test/*.*"], // needed for: https://stackoverflow.com/questions/61956555/why-is-typescript-eslint-parser-including-files-outside-of-those-configured-in
    plugins: [
        'eslint-plugin-import',
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/no-for-in-array': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-floating-promises': 'error',
        'no-param-reassign': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { "args": "none" }],
        '@typescript-eslint/no-use-before-define': 'error',
            // Expressions must always return a value. Avoids common errors like const myValue = functionReturningVoid();
            // unimplemented: "no-void-expression": [true, "ignore-arrow-function-shorthand"],
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unified-signatures': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'constructor-super': 'error',
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unassigned-import': 'warn',
        'no-cond-assign': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': ['error', {'allowEmptyCatch': true}],
        'no-new-wrappers': 'error',
            // Do not allow a variable to be declared more than once in the same block. Consider function parameters in this
            // rule.
            // 'no-redeclare': 'error', ... does not allow namespace merging.
        'no-sequences': 'error',
        'no-shadow': ['error', {'hoist': 'all'}],
        'no-throw-literal': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-void': ['error', { "allowAsStatement": true }],
        'eqeqeq': ['warn','always'],
        // can be switched to error once: https://github.com/typescript-eslint/typescript-eslint/pull/2685
        'no-invalid-this': 'warn',
        'prefer-const': 'warn',
        'no-var': 'warn',
    }
};
