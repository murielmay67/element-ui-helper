<template>
  <div>
    <h1>element-ui-helper</h1>
  </div>
</template>

<script setup lang="tsx">
import { onMounted } from 'vue'
import { FunctionDialog, testFnCall } from 'element-ui-helper'
import TestC from './test.vue'
onMounted(() => {
  // @ts-ignore
  // window.dialog = testFnCall()

  const dialog_1 = new FunctionDialog({
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
