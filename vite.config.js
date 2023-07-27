import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                fetch: resolve(__dirname, 'fetch.html'),
                key: resolve(__dirname, 'filename.html'),

            }
        }
    },
    base: '/marvel-searcher/',
    plugins: [react()]
});