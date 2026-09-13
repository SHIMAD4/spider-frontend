import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import perfectionist from 'eslint-plugin-perfectionist'

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            perfectionist,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            'perfectionist/sort-imports': [
                'error',
                {
                    type: 'natural',
                    order: 'asc',
                    newlinesBetween: 0,
                    customGroups: [
                        {
                            groupName: 'app',
                            elementNamePattern: '^@app(?:/.*)?$',
                        },
                        {
                            groupName: 'pages',
                            elementNamePattern: '^@pages(?:/.*)?$',
                        },
                        {
                            groupName: 'widgets',
                            elementNamePattern: '^@widgets(?:/.*)?$',
                        },
                        {
                            groupName: 'features',
                            elementNamePattern: '^@features(?:/.*)?$',
                        },
                        {
                            groupName: 'entities',
                            elementNamePattern: '^@entities(?:/.*)?$',
                        },
                        {
                            groupName: 'shared',
                            elementNamePattern: '^@shared(?:/.*)?$',
                        },
                        {
                            groupName: 'root',
                            elementNamePattern: '^@/(?:.*)?$',
                        },
                    ],

                    groups: [
                        [
                            'value-builtin',
                            'type-builtin',
                            'value-external',
                            'type-external',
                        ],

                        { newlinesBetween: 1 },

                        'app',
                        'pages',
                        'widgets',
                        'features',
                        'entities',
                        'shared',
                        'root',

                        { newlinesBetween: 1 },

                        [
                            'value-parent',
                            'type-parent',
                            'value-sibling',
                            'type-sibling',
                            'value-index',
                            'type-index',
                        ],

                        { newlinesBetween: 1 },

                        'style',
                        'side-effect-style',
                        'side-effect',
                        'unknown',
                    ],
                },
            ],
        },
    },
])
