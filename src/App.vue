<template>
  <div>
    <h1>element-ui-helper</h1>
  </div>
</template>

<script setup lang="tsx">
import { createFunctionDialog } from 'element-ui-helper'
import { onMounted } from 'vue'
import TestC from './test.vue'
onMounted(() => {
  // @ts-ignore
  // window.dialog = testFnCall()

  const dialog_1 = createFunctionDialog({
    title: '测试',
    content: TestC,
    // content: 'String',
    // content: () => <div>FN</div>,
  })
  dialog_1.open()
  // @ts-ignore
  window.dialog_1 = dialog_1
})
</script>

<style scoped></style>
