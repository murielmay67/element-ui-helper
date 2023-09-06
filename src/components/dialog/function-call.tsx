import { Dialog as ElDialog } from 'element-ui'
import Vue, { h, type VNode } from 'vue'
import type { FunctionDialogOptions } from './types'

export class FunctionDialog {
  title
  width
  customClass
  showClose
  closeOnClickModal
  closeOnPressEscape
  content
  contentProps
  decorator
  decoratorProps
  onOpen
  private _dialogApp

  constructor(options: FunctionDialogOptions) {
    this.title = options.title
    this.content = options.content
    this.contentProps = options.contentProps
    this.decorator = options.decorator
    this.decoratorProps = options.decoratorProps
    this.width = options.width
    this.customClass = options.customClass
    this.showClose = options.showClose
    this.closeOnClickModal = options.closeOnClickModal
    this.closeOnPressEscape = options.closeOnPressEscape
    this.onOpen = options.onOpen
    this._dialogApp = new this.#DialogAppConstructor({})
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

        const resolveComponent = () => {
          const content = instance.content

          if (typeof content === 'string') {
            return content
          } else if (typeof content === 'function') {
            return (content as Function)()
          } else {
            return h(content, { props: { dialog: instance } })
          }
        }

        const instanceContent = (
          <ElDialog
            props={{
              visible: self.isVisible,
              title: instance.title,
              width: instance.width,
              showClose: instance.showClose,
              closeOnClickModal: instance.closeOnClickModal,
              closeOnPressEscape: instance.closeOnPressEscape,
              customClass: instance.customClass,
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
            <template slot="default">{resolveComponent()}</template>

            {/* <template slot="footer">{buttonsContent}</template> */}
          </ElDialog>
        )

        return instanceContent
      },
    })
  }

  open() {
    if (!this._dialogApp.$el) {
      this._dialogApp.$mount()
      document.body.appendChild(this._dialogApp.$el)
    }
    this._dialogApp.isVisible = true
  }

  close() {
    this._dialogApp.isVisible = false
  }

  private _handleClosed() {
    // console.debug(`[FunctionDialog] _handleClosed`)
    this._dialogApp.$destroy()
    this._dialogApp.$el.parentNode!.removeChild(this._dialogApp.$el)
  }

  private _handleOnOpen() {
    // console.debug(`[FunctionDialog] _handleOnOpen`)
  }

  private _getButtonClickContext() {
    // TODO: 类型。
    return { dialog: this }
  }
}

export const createFunctionDialog = (options: FunctionDialogOptions) => {
  return new FunctionDialog(options)
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
