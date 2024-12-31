import { defineConfig } from 'vite';

export default defineConfig({
    base: "/random-page-color/",
    root: 'src',
    build: {
        outDir: '../dist',
    }
})