import * as path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const DIRNAME = import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(DIRNAME, './src'),
            '@app': path.resolve(DIRNAME, './src/app'),
            '@pages': path.resolve(DIRNAME, './src/pages'),
            '@widgets': path.resolve(DIRNAME, './src/widgets'),
            '@features': path.resolve(DIRNAME, './src/features'),
            '@entities': path.resolve(DIRNAME, './src/entities'),
            '@shared': path.resolve(DIRNAME, './src/shared'),
        },
    },
})
