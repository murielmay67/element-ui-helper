/* 
  https://github.com/unplugin/unplugin-vue-components/blob/main/src/core/resolvers/element-ui.ts
*/

import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    vue2Jsx(),
    dts({
      include: ['src/components/**/*'],
      tsconfigPath: path.resolve(__dirname, 'tsconfig.app.json'),
      // root: path.resolve(__dirname),
      // entryRoot: path.resolve(__dirname, 'src/components'),
      // staticImport: true,
      logLevel: 'info',
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      name: 'element-ui-helper',
      entry: path.resolve(__dirname, 'src/components/index.ts'),
    },
    rollupOptions: {
      external: ['vue', 'element-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'element-ui': 'ELEMENT',
        },
      },
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
