<template>
  <div>
    <h1>element-ui-helper</h1>
  </div>
</template>

<script setup lang="tsx">
import { createFunctionDialog } from 'element-ui-helper'
import { defineComponent, onMounted } from 'vue'
import TestC from './test.vue'
import { formDialog } from './e-fn-d'
onMounted(() => {
  // @ts-ignore
  // window.dialog = testFnCall()

  const dialog_1 = createFunctionDialog({
    title: '测试',
    content: TestC,
    // content: 'String',
    // content: () => <div>FN</div>,
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
    decoratorProps: {
      title: 'prop-title',
    },
    onOpen() {
      console.debug(`onOpen`)
    },
    buttons: [
      {
        text: '关闭',
        onClick(ctx) {
          console.debug(`[关闭] ctx :>> `, ctx)
        },
      },
      {
        text: '确定',
        type: 'primary',
        async onClick(ctx) {
          console.debug(`[确定] ctx :>> `, ctx)
          await new Promise((r) => setTimeout(r, 1000))
          return false
        },
      },
    ],
  })
  // dialog_1.open()
  // @ts-ignore
  window.dialog_1 = dialog_1

  formDialog.open()
})
</script>

<style scoped></style>
