<template>
  <div id='app'>
    <div>app:</div>
    <BaseProvider>
      <div>CONTENT</div>
    </BaseProvider>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import BaseProvider from './@table/base-provider'

console.clear()
export default defineComponent({
  name: 'App',
  components: {
    BaseProvider
  }
})
</script>
