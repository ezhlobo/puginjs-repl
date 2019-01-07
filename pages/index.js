import React from 'react'
import Head from 'next/head'

import App from '../components/App'

export default () => (
  <React.Fragment>
    <Head>
      <title>Pug-in-js REPL</title>

      <script src="https://unpkg.com/@babel/standalone/babel.min.js" />
      <script src="https://unpkg.com/prettier/standalone.js" />
      <script src="https://unpkg.com/prettier/parser-babylon.js" />
    </Head>

    <App />
  </React.Fragment>
)
