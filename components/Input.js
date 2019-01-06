import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    codemirror: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.codemirror = this.codemirror || this.props.codemirror(document.getElementById('input'), {
      value: this.props.initialValue,
      mode: 'pug',
    })

    this.codemirror.on('change', (instance) => {
      const value = instance.doc.getValue()

      this.props.onChange(value)
    })
  }

  render() {
    return (
      <div className="input">
        <div id="input" className="workspace" />

        {this.props.error && (
          <div className="error">
            {this.props.error}
          </div>
        )}
      </div>
    )
  }
}

const DynamicInput = dynamic({
  ssr: false,
  modules: () => ({
    CodeMirror: () => import('../lib/CodeMirror'),
  }),
  render: (props, { CodeMirror }) => (
    <Input codemirror={CodeMirror.default} {...props} />
  ),
})

export default DynamicInput
