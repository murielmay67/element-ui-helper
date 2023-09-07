import { Dialog as ElDialog, Button as ElButton } from 'element-ui'
import Vue, { h } from 'vue'
import type { IButtonOnClickCtx, FunctionDialogButton, FunctionDialogOptions } from './types'

export class FunctionDialog<ButtonOnClickCtxType = any> {
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
  buttons: FunctionDialogButton<ButtonOnClickCtxType>[]
  private _dialogApp

  constructor(options: FunctionDialogOptions<ButtonOnClickCtxType>) {
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
    this.buttons = options.buttons || []
    this._dialogApp = new this.#DialogAppConstructor({})
  }

  get #DialogAppConstructor() {
    const instance = this

    return Vue.extend({
      name: `FunctionDialogApp`,
      data: () => ({
        isVisible: false,
        buttonLoading: { ...instance.buttons.map(() => false) },
      }),
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
        const appInstance = this

        // 弹窗内容。
        const resolveComponent = () => {
          const content = instance.content

          if (typeof content === 'string') {
            return content
          } else if (typeof content === 'function') {
            return (content as Function)()
          } else {
            return h(content, {
              props: {
                dialog: instance,
              },
            })
          }
        }

        // 弹窗按钮。
        const buttonsContent = instance.buttons.map((button, index) => (
          <ElButton
            props={{
              ...button,
              disabled: Object.values(appInstance.buttonLoading).some(Boolean),
              loading: appInstance.buttonLoading[index],
            }}
            onClick={async () => {
              let result = button.onClick?.(instance._buttonOnClickCtx)
              if (result instanceof Promise) {
                appInstance.buttonLoading[index] = true
                try {
                  result = await result
                } finally {
                  appInstance.buttonLoading[index] = false
                }
              }
              if (result !== false) {
                appInstance.isVisible = false
              }
            }}
          >
            {button.text}
          </ElButton>
        ))

        let appContent = (
          <ElDialog
            props={{
              visible: appInstance.isVisible,
              title: instance.title,
              width: instance.width,
              showClose: instance.showClose,
              closeOnClickModal: instance.closeOnClickModal,
              closeOnPressEscape: instance.closeOnPressEscape,
              customClass: instance.customClass,
            }}
            on={{
              'update:visible': (visible: boolean) => {
                appInstance.isVisible = visible
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

            <template slot="footer">{buttonsContent}</template>
          </ElDialog>
        )

        if (instance.decorator) {
          appContent = h(
            instance.decorator,
            {
              props: instance.decoratorProps,
            },
            [appContent]
          )
        }

        return appContent
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

  _handleClosed() {
    // console.debug(`[FunctionDialog] _handleClosed`)
    this._dialogApp.$destroy()
    this._dialogApp.$el.parentNode!.removeChild(this._dialogApp.$el)
  }

  _handleOnOpen() {
    // console.debug(`[FunctionDialog] _handleOnOpen`)
    this.onOpen?.()
  }

  protected get _buttonOnClickCtx() {
    return {
      dialog: this,
    } as ButtonOnClickCtxType
  }
}

export const createFunctionDialog = (options: FunctionDialogOptions<IButtonOnClickCtx>) => {
  return new FunctionDialog(options)
}
