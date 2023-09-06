import type { Dialog } from 'element-ui'
import type { Component } from 'vue'

export interface FunctionDialogOptions {
  title?: Dialog['title']
  width?: Dialog['width']
  customClass?: Dialog['customClass']
  showClose?: Dialog['showClose']
  closeOnClickModal: Dialog['closeOnClickModal']
  closeOnPressEscape: Dialog['closeOnPressEscape']
  content?: Component | string | (() => Vue.VNode)
  contentProps?: Record<string, any>
  decorator?: Component
  decoratorProps?: Record<string, any>
  onOpen?: () => void
}
