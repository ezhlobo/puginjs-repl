import React, { Component } from 'react'

import versions from '../lib/versions'

import Input from './Input'
import Result from './Result'

class Workspace extends Component {
  state = {
    version: versions[0],
    code: '',
    transformed: '',
    error: '',
    isTransforming: false,
  }

  componentDidMount() {
    this.setFromCache()
  }

  render() {
    return (
      <React.Fragment>
        <Input
          initialValue={this.getCodeFromCache()}
          onChange={this.handleInputChange}
          error={this.state.error}
        />

        <Result
          value={this.state.transformed}
          version={this.state.version}
          onNewVersion={this.handleNewVersion}
          isTransforming={this.state.isTransforming}
        />
      </React.Fragment>
    )
  }

  cache() {
    return JSON.parse(decodeURI(window.location.hash).substring(1) || '{}')
  }

  getHashFromCache() {
    return this.cache().code || ''
  }

  getCodeFromCache() {
    return process.browser ? atob(this.getHashFromCache()) : ''
  }

  getVersionFromCache() {
    return this.cache().version
  }

  cacheObject(object) {
    const cache = this.cache()

    location.hash = encodeURI(JSON.stringify({
      ...cache,
      ...object,
    }))
  }

  cacheCode(code) {
    this.cacheObject({ code: btoa(code || '') })
    this.setFromCache()
  }

  cacheVersion(version) {
    this.cacheObject({ version })
    this.setFromCache()
  }

  setFromCache() {
    const code = this.getCodeFromCache()
    const version = this.getVersionFromCache()

    this.setState({ code, version }, () => this.transform())
  }

  transform() {
    const hash = this.getHashFromCache()

    this.setState({ isTransforming: true })

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
          isTransforming: false,
          transformed: atob(json.result),
          error,
        })
      })
      .catch((error) => {
        console.error(error)
        this.setState({ isTransforming: false })
      })
  }

  handleInputChange = (value) => {
    this.cacheCode(value)
  }

  handleNewVersion = (version) => {
    this.cacheVersion(version)
  }
}

export default Workspace
