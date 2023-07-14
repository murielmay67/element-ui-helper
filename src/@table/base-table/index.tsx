import { defineComponent, provide, reactive } from 'vue'
import { TableStoreSymbol } from '../shared/context'

export const BaseTable = defineComponent({
  name: 'BaseTable',
  setup(props, { slots }) {
    const tableStore = reactive({})
    provide(TableStoreSymbol, tableStore)
    return () => {
      return slots.default?.()
    }
  }
})
