import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

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
  ],
  transformers: [transformerVariantGroup()],
})
