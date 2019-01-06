import React, { Component } from 'react'

import versions from '../lib/versions'

import Input from './Input'
import Result from './Result'

const getCache = () =>
  JSON.parse(decodeURI(window.location.hash).substring(1) || '{}')

const setCache = (object) => {
  const cache = getCache()

  window.location.hash = encodeURI(JSON.stringify({
    ...cache,
    ...object,
  }))
}

class Workspace extends Component {
  state = {
    version: versions[0],
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

  getHashFromCache() {
    return getCache().code || ''
  }

  getCodeFromCache() {
    return process.browser ? atob(this.getHashFromCache()) : ''
  }

  getVersionFromCache() {
    return getCache().version
  }

  cacheCode(code) {
    setCache({ code: btoa(code || '') })
    this.setFromCache()
  }

  cacheVersion(version) {
    setCache({ version })
    this.setFromCache()
  }

  setFromCache() {
    const version = this.getVersionFromCache()

    this.setState({ version }, () => this.transform())
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
