<template>
  <div>
    <h1>element-ui-helper</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { FunctionDialog, testFnCall } from 'element-ui-helper'

onMounted(() => {
  // @ts-ignore
  // window.dialog = testFnCall()

  const dialog_1 = new FunctionDialog({})
  dialog_1.open()
  // @ts-ignore
  window.dialog_1 = dialog_1
})
</script>

<style scoped></style>
