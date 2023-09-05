import Vue from 'vue'

export const testFnCall = () => {
  console.log('testFnCall')

  const DialogAppConstructor = Vue.extend({
    name: `FunctionDialogInstance`,
    data: () => ({ show: true }),
    render() {
      return <div class="#############################">{new Date().toLocaleString()}</div>
    },
  })
  const dialogApp = new DialogAppConstructor()
  dialogApp.$mount()
  document.body.appendChild(dialogApp.$el)
}
