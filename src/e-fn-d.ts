import { FunctionDialog } from './components'
import type { ButtonOnClickCtx, FunctionDialogOptions } from './components/dialog/types'

// FunctionDialogOptions
interface FormDialogOptions extends FunctionDialogOptions<ButtonOnClickCtxForm> {}

type ButtonOnClickCtxForm = ButtonOnClickCtx & {
  xx: string
}

export class FormDialog extends FunctionDialog<ButtonOnClickCtxForm> {
  constructor(options: FormDialogOptions) {
    super(options)
  }

  _handleOnOpen(): void {
    console.log('[FormDialog] open')
  }

  protected get _buttonClickCtx(): ButtonOnClickCtxForm {
    return {
      ...super._buttonClickCtx,
      xx: 'xx',
    }
  }
}

new FormDialog({
  buttons: [
    {
      text: '确定',
      onClick(ctx) {
        console.debug(`ctx.xx :>> `, ctx.xx)
      },
    },
  ],
})
