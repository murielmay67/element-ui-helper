<template>
  <div>
    <h1>element-ui-helper</h1>
  </div>
</template>

<script setup lang="tsx">
import { createFunctionDialog } from 'element-ui-helper'
import { defineComponent, onMounted } from 'vue'
import TestC from './test.vue'
onMounted(() => {
  // @ts-ignore
  // window.dialog = testFnCall()

  const dialog_1 = createFunctionDialog({
    title: '测试',
    content: TestC,
    // content: 'String',
    // content: () => <div>FN</div>,
    decoratorProps: {
      title: 'prop-title',
    },
    decorator: defineComponent({
      props: ['title'],
      setup(props, { slots }) {
        return () => (
          <div class="decorator" title={props.title}>
            {slots.default?.()}
          </div>
        )
      },
    }),
    buttons: [
      {
        text: 'AAA',
        type: 'primary',
        onClick(ctx) {
          console.debug(`[onClick] ctx :>> `, ctx)
        },
      },
    ],
  })
  // dialog_1.open()
  // @ts-ignore
  window.dialog_1 = dialog_1
})
</script>

<style scoped></style>
