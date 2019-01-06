import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import versions from '../lib/versions'

class Result extends React.Component {
  static propTypes = {
    onNewVersion: PropTypes.func.isRequired,
    isTransforming: PropTypes.bool.isRequired,
    version: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    codemirror: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.codemirror = this.codemirror || this.props.codemirror(document.getElementById('result'), {
      value: this.props.value,
      readOnly: 'nocursor',
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.codemirror.doc.setValue(this.props.value)
    }
  }

  render() {
    return (
      <div className="result">
        <div className="result-version">
          <select onChange={this.handleNewVersion} value={this.props.version}>
            {versions.map(version => (
              <option
                key={version}
                value={version}
              >
                {version}
              </option>
            ))}
          </select>
        </div>

        {this.props.isTransforming && (
          <div className="is-transforming" />
        )}

        <div id="result" className="workspace" />
      </div>
    )
  }

  handleNewVersion = (event) => {
    this.props.onNewVersion(event.target.value)
  }
}

const DynamicResult = dynamic({
  ssr: false,
  modules: () => ({
    CodeMirror: () => import('../lib/CodeMirror'),
  }),
  render: (props, { CodeMirror }) => (
    <Result codemirror={CodeMirror.default} {...props} />
  ),
})

export default DynamicResult
