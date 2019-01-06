import React from 'react'
import Head from 'next/head'

import App from '../components/App'

import '../assets/styles.css'

export default () => (
  <React.Fragment>
    <Head>
      <title>Pug-in-js REPL</title>
    </Head>

    <App />
  </React.Fragment>
)
