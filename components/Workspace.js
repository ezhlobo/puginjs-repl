import React, { Component } from 'react'

import transform from '../lib/transform'
import { setCodeToCache, getCodeFromCache } from '../lib/cache'

import Input from './Input'
import Result from './Result'

class Workspace extends Component {
  state = {
    transformed: '',
    error: '',
  }

  componentDidMount() {
    import('../bundles/6.0.1')
      .then((plugin) => {
        const code = getCodeFromCache()

        this.plugin = plugin.default
        this.transform(code)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Input
          initialValue={getCodeFromCache()}
          onChange={this.handleInputChange}
          error={this.state.error}
        />

        <Result
          value={this.state.transformed}
        />
      </React.Fragment>
    )
  }

  cacheCode(code) {
    setCodeToCache(code)
    this.transform(code)
  }

  transform(code) {
    if (!this.plugin) {
      return
    }

    const result = transform(code, {
      plugins: [this.plugin],
    })

    this.setState({
      transformed: result.code,
      error: result.error.message,
    })
  }

  handleInputChange = (value) => {
    this.cacheCode(value)
  }
}

export default Workspace
