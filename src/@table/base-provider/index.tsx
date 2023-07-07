import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseProvider',
  setup(props, { slots }) {
    return () => {
      return slots.default?.();
    }
  }
})
