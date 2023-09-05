/* 
  https://github.com/unplugin/unplugin-vue-components/blob/main/src/core/resolvers/element-ui.ts
*/

import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue2(), vue2Jsx()],
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      name: 'element-ui-helper',
      entry: path.resolve(__dirname, 'src/components/index.ts'),
    },
    rollupOptions: {
      external: ['vue', 'element-ui'],
    },
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
