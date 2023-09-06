<template>
  <div>
    <h1>element-ui-helper</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { testFnCall } from 'element-ui-helper'

onMounted(() => {
  // @ts-ignore
  window.dialog = testFnCall()
})
</script>

<style scoped></style>
