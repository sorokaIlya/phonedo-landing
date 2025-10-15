import {defineConfig} from "vite";
import {resolve} from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                price: resolve(__dirname, 'price.html'),
                contact: resolve(__dirname, 'contact.html'),
                features: resolve(__dirname, 'features.html'),
                agents: resolve(__dirname, 'agents.html'),
                working:resolve(__dirname, 'how-work.html'),
            },
        },
    },
});