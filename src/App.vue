<template>
  <div>
    <Test />
    <Button @click="clickBtn">testFnCall</Button>
  </div>
</template>

<script setup lang="ts">
import Test from './test.vue'
import { Button } from 'element-ui'
import { testFnCall } from './components/dialog/function-call'

const clickBtn = () => {
  testFnCall()
}
</script>

<style scoped></style>
