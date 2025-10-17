import {defineConfig} from 'vite'
import {resolve} from 'path';

export default defineConfig({
    base: '/phonedo-landing/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                price: resolve(__dirname, 'pages/pricing.html'),
                about: resolve(__dirname, 'pages/about.html'),
                contact: resolve(__dirname, 'pages/contact.html'),
                features: resolve(__dirname, 'pages/features.html'),
                agents: resolve(__dirname, 'pages/agents.html'),
                working: resolve(__dirname, 'pages/how-work.html'),
            },
        },
    },
});