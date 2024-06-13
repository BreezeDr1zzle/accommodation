import {fileURLToPath, URL} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import Components from 'unplugin-vue-components/vite';
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VantResolver()]
        }),
        Components({
            resolvers: [VantResolver()]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
