import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx(),
    UnoCSS(),
    AutoImport({
      resolvers: [TDesignResolver()],
    }),
    Components({
      resolvers: [TDesignResolver()],
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
  },
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1',
      },
    ],
  },
})
