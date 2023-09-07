import { FunctionDialog } from './components'
import type { IButtonOnClickCtx, FunctionDialogOptions } from './components/dialog/types'

// FunctionDialogOptions
interface FormDialogOptions extends FunctionDialogOptions<ButtonOnClickCtxForm> {}

interface ButtonOnClickCtxForm extends IButtonOnClickCtx {
  xx: string
}

export class FormDialog extends FunctionDialog<ButtonOnClickCtxForm> {
  constructor(options: FormDialogOptions) {
    super(options)
  }

  _handleOnOpen(): void {
    console.log('[FormDialog] open')
  }

  protected get _buttonOnClickCtx(): ButtonOnClickCtxForm {
    return {
      ...super._buttonOnClickCtx,
      xx: 'xx',
    }
  }
}

export const formDialog = new FormDialog({
  buttons: [
    {
      text: '确定',
      onClick(ctx) {
        console.debug(`[FormDialog] ctx :>> `, ctx)
      },
    },
  ],
})
