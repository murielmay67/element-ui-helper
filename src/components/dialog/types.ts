import type { ElDialog } from 'element-ui/types/dialog'
import type { ElButton } from 'element-ui/types/button'
import type { Component } from 'vue'
import type { FunctionDialog } from './function-call'

export interface ButtonOnClickCtx {
  dialog: FunctionDialog
  // k1: string
}

export type FunctionDialogButton<ButtonOnClickCtx> = Partial<Omit<ElButton, 'loading' | 'text'>> & {
  text: string

  /** 按钮点击事件，默认传入函数执行后会关闭弹窗，返回 false 可以阻止关闭。 */
  onClick?: (ctx: ButtonOnClickCtx) => boolean | Promise<boolean> | void
}

export interface FunctionDialogOptions<ButtonOnClickCtx> {
  title?: ElDialog['title']
  width?: ElDialog['width']
  customClass?: ElDialog['customClass']
  showClose?: ElDialog['showClose']
  closeOnClickModal?: ElDialog['closeOnClickModal']
  closeOnPressEscape?: ElDialog['closeOnPressEscape']
  content?: Component | string | (() => Vue.VNode)
  contentProps?: Record<string, any>
  decorator?: Component
  decoratorProps?: Record<string, any>
  onOpen?: () => void
  buttons?: FunctionDialogButton<ButtonOnClickCtx>[]
}
