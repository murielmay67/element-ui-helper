import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import UnoCSS from 'unocss/vite'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2(), vue2Jsx(), UnoCSS()],
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
