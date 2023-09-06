import Vue from 'vue'
import { Dialog as ElDialog } from 'element-ui'
import type { FunctionDialogAppInstance, FunctionDialogOptions } from './types'

export class FunctionDialog {
  title
  dialogApp!: FunctionDialogAppInstance

  constructor(options: FunctionDialogOptions) {
    this.title = options.title
  }

  get #InstanceConstructor() {
    const instance = this
    return Vue.extend({
      name: `FunctionDialogInstance`,
      data: () => ({ isVisible: true }),
      created() {
        // console.debug(`[FunctionDialog] App created`)
      },
      mounted() {
        // console.debug(`[FunctionDialog] App mounted`)
      },
      destroyed() {
        // console.debug(`[FunctionDialog] App destroyed`)
      },
      render() {
        // console.debug(`[FunctionDialog] renderApp this.isVisible :>> `, this.isVisible)
        const self = this

        const instanceContent = (
          <ElDialog
            props={{
              visible: self.isVisible,
              title: instance.title,
            }}
          >
            {/*  */}
          </ElDialog>
        )

        return instanceContent
      },
    })
  }

  open() {
    if (!this.dialogApp) {
      this.dialogApp = new this.#InstanceConstructor({})
      this.dialogApp.$mount()
      document.body.appendChild(this.dialogApp.$el)
    }
    this.dialogApp.isVisible = true
  }
}

export const testFnCall = () => {
  console.log('testFnCall1')

  const DialogAppConstructor = Vue.extend({
    name: `FunctionDialogInstance`,
    data: () => ({ isVisible: true }),
    render() {
      const self = this
      return <ElDialog props={{ visible: self.isVisible }}>{/*  */}</ElDialog>
    },
  })
  const dialogApp = new DialogAppConstructor()
  dialogApp.$mount()
  document.body.appendChild(dialogApp.$el)
  return dialogApp
}
