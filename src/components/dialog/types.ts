import type { Component } from 'vue'

export interface FunctionDialogOptions {
  title?: string
  content?: Component | string | (() => Vue.VNode)
}
