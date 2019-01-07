import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Loader from './Loader'
import Error from './Error'

class Input extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string.isRequired,
    codemirror: PropTypes.func.isRequired,
    error: PropTypes.string,
  }

  static defaultProps = {
    error: '',
  }

  componentDidMount() {
    this.codemirror = this.codemirror || this.props.codemirror(document.getElementById('input'), {
      value: this.props.initialValue,
      mode: 'pug',
      placeholder: 'Write your code here...',
    })

    this.codemirror.on('change', (instance) => {
      const value = instance.doc.getValue()

      this.props.onChange(value)
    })
  }

  render() {
    return (
      <React.Fragment>
        <div id="input" />

        {this.props.error && (
          <Error>
            {this.props.error}
          </Error>
        )}
      </React.Fragment>
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
  loading: Loader,
})

export default DynamicInput
