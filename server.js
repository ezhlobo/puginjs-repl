const next = require('next')
const express = require('express')
const transform = require('./lib/transform')

const port = parseInt(process.env.PORT, 10) || 3000

const app = next({
  dev: process.env.NODE_ENV !== 'production',
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/transform', (req, res) => {
    const hash = req.query.hash
    const version = req.query.version
    const input = Buffer.from(hash, 'base64').toString()

    let code = ''
    let meta

    try {
      code = transform(input, version)
    } catch (error) {
      meta = error
    }

    const result = Buffer.from(code).toString('base64')

    return res.json({
      result,
      code,
      meta,
    })
  })

  server.use(handle)

  server.listen(port, (error) => {
    if (error) throw error

    console.log(`> Ready on http://localhost:${port}`)
  })
})
