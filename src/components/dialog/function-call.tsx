import { Dialog as ElDialog } from 'element-ui'
import Vue from 'vue'
import type { FunctionDialogOptions } from './types'

export class FunctionDialog {
  title
  dialogApp

  constructor(options: FunctionDialogOptions) {
    this.title = options.title

    this.dialogApp = new this.#DialogAppConstructor({})
  }

  get #DialogAppConstructor() {
    const instance = this
    return Vue.extend({
      name: `FunctionDialogApp`,
      data: () => ({ isVisible: false }),
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
            on={{
              'update:visible': (visible: boolean) => {
                self.isVisible = visible
              },
              open: () => {
                // console.debug(`[FunctionDialog][ElDialog] onOpen`)
                instance._handleOnOpen()
              },
              opened: () => {
                // console.debug(`[FunctionDialog][ElDialog] onOpened`)
              },
              close: () => {
                // console.debug(`[FunctionDialog][ElDialog] onClose`)
              },
              closed: () => {
                // console.debug(`[FunctionDialog][ElDialog] onClosed`)
                instance._handleClosed()
              },
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
    if (!this.dialogApp.$el) {
      this.dialogApp.$mount()
      document.body.appendChild(this.dialogApp.$el)
    }
    this.dialogApp.isVisible = true
  }

  close() {
    this.dialogApp.isVisible = false
  }

  private _handleClosed() {
    // console.debug(`[FunctionDialog] _handleClosed`)
    this.dialogApp.$destroy()
    this.dialogApp.$el.parentNode!.removeChild(this.dialogApp.$el)
  }

  private _handleOnOpen() {
    // console.debug(`[FunctionDialog] _handleOnOpen`)
  }

  private _getButtonClickContext() {
    // TODO: 类型。
    return { dialog: this }
  }
}

export const testFnCall = () => {
  console.log('testFnCall1')

  const DialogAppConstructor = Vue.extend({
    name: `FunctionDialogApp`,
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
