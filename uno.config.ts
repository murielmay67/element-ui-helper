import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  rules: [['custom-rule', { color: 'red' }]],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
  },
  presets: [
    presetUno({
      prefix: 'uno-',
    }),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetAttributify(),
    presetIcons({
      collections: {
        icon: FileSystemIconLoader('./src/assets/svg', (svg) => svg.replace(/#FFF/, 'currentColor')),
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
})
