import React, { Component } from 'react'

import GithubLogo from './GithubLogo'
import Workspace from './Workspace'

class App extends Component {
  render() {
    return (
      <div className="layout">
        <div className="layout__header">
          This is beta, the result can be incorrect
          <div className="layout__links">
            <a href="https://github.com/pugjs/babel-plugin-transform-react-pug">
              <GithubLogo width="20" height="20" />
              Plugin
            </a>
            <a href="https://github.com/ezhlobo/puginjs-repl">
              <GithubLogo width="20" height="20" />
              REPL
            </a>
          </div>
        </div>

        <div className="layout__body">
          <Workspace />
        </div>
      </div>
    )
  }
}

export default App
