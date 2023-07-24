<template>
  <div id='app'>
    <BaseTable>
      <div>CONTENT</div>
    </BaseTable>

    <!--布局-->
    <div uno-border="1px solid blue-200" class="uno-p16 uno-flex">
      <div>

      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { BaseTable } from './@table/base-table'

console.clear()
export default defineComponent({
  name: 'App',
  components: {
    BaseTable
  }
})
</script>
