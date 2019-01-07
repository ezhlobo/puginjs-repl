import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Loader from './Loader'

class Result extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    codemirror: PropTypes.func.isRequired,
    isReady: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.codemirror = this.codemirror || this.props.codemirror(document.getElementById('result'), {
      value: this.props.value,
      readOnly: true,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.codemirror.doc.setValue(this.props.value)
    }
  }

  render = () => (
    <React.Fragment>
      {!this.props.isReady && (
        <Loader />
      )}

      <div id="result" />
    </React.Fragment>
  )
}

const DynamicResult = dynamic({
  ssr: false,
  modules: () => ({
    CodeMirror: () => import('../lib/CodeMirror'),
  }),
  render: (props, { CodeMirror }) => (
    <Result codemirror={CodeMirror.default} {...props} />
  ),
  loading: Loader,
})

export default DynamicResult
