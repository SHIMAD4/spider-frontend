import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
    ...fsd.configs.recommended,

    // TODO: Убрать когда на странице появятся еще компоненты
    {
        files: ['./src/features/tasks/**', './src/widgets/TaskBoard/**'],
        rules: {
            'fsd/insignificant-slice': 'off',
        },
    },

    {
        files: ['./src/**'],
        rules: {
            'fsd/import-locality': 'error',
        },
    },
])
