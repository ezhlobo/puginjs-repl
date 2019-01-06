import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/pug/pug'

export default (place, options) =>
  CodeMirror(place, {
    mode: 'jsx',
    lineNumbers: true,
    lineWrapping: true,
    inputStyle: 'textarea',
    specialCharPlaceholder: (char) => {
      const element = document.createElement('span')

      element.innerHTML = `{'\\\\${char.charCodeAt(0).toString(16)}'}`

      return element
    },
    tabSize: 2,
    extraKeys: {
      Tab(cm) {
        cm.replaceSelection('  ', 'end')
      },
    },
    ...options,
  })
