import Vue from 'vue'
import { Dialog as ElDialog } from 'element-ui'

export const testFnCall = () => {
  console.log('testFnCall')

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
}
