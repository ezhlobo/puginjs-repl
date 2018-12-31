import React, { Component } from 'react'
import he from 'he'

import versions from '../lib/versions'

import Input from './Input'
import Result from './Result'

const getHash = () => {
  return process.browser
    ? window.location.hash.substring(1)
    : ''
}

const getValue = () => {
  const hash = getHash()

  return hash ? atob(hash) : ''
}

class App extends Component {
  state = {
    value: '',
    isTransforming: false,
    transformed: '',
    error: '',
    version: versions[0],
  }

  componentDidMount() {
    this.setValue(getValue())
  }

  render() {
    return (
      <div className="layout">
        <Input
          initialValue={getValue()}
          onChange={this.handleInputChange}
          error={this.state.error}
        />
        <Result
          value={this.state.transformed}
          version={this.state.version}
          onNewVersion={this.handleNewVersion}
          isTransforming={this.state.isTransforming}
        />
      </div>
    )
  }

  setValue = (value) => {
    const hash = btoa(value)
    window.location.hash = hash

    this.setState({ value })
    this.transform()
  }

  setVersion = (version) => {
    this.setState({ version }, () => {
      this.transform()
    })
  }

  handleInputChange = (value) => {
    this.setValue(value)
  }

  handleNewVersion = (version) => {
    this.setVersion(version)
  }

  transform = () => {
    this.setState({ isTransforming: true })
    const hash = getHash()

    fetch(`/transform?version=${this.state.version}&hash=${hash}`)
      .then(response => response.json())
      .then((json) => {
        let error = ''

        if (json.meta) {
          if (json.meta.msg) {
            error = json.meta.msg
          } else if (json.meta.code) {
            error = json.meta.code
          }
        }

        this.setState({
          transformed: atob(json.result),
          isTransforming: false,
          error,
        })
      })
      .catch((error) => {
        console.error(error)
        this.setState({ isTransforming: false })
      })
  }
}

export default App
