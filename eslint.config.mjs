// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        'plugins': {
            '@stylistic/ts': stylisticTs,
        },
        'rules': {
            '@stylistic/ts/indent': ['warn', 4],
            '@stylistic/ts/brace-style': ['warn', 'allman'],
            '@stylistic/ts/comma-dangle': ['warn', 'always-multiline'],
            '@stylistic/ts/comma-spacing': ['warn'],
            '@stylistic/ts/lines-around-comment': ['warn'],
            '@stylistic/ts/lines-between-class-members': ['warn'],
            '@stylistic/ts/member-delimiter-style': ['warn'],
            '@stylistic/ts/no-extra-semi': ['warn'],
            '@stylistic/ts/object-curly-spacing': ['warn'],
            '@stylistic/ts/padding-line-between-statements': ['warn'],
            '@stylistic/ts/quote-props': ['warn'],
            '@stylistic/ts/quotes': ['warn', 'single'],
            '@stylistic/ts/semi': ['warn'],
            '@stylistic/ts/space-before-function-paren': ['warn'],
            '@stylistic/ts/space-infix-ops': ['warn'],
            '@stylistic/ts/type-annotation-spacing': ['warn'],
        },
    },
);
