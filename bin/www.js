const cluster = require('express-cluster')

cluster(function (worker) {
  const express = require('../src/config/express')
  const config = require('../src/config/config')

  const http = require('http')
  const port = config.PORT

  require('../src/config/mongoose')()
  require('../src/config/passport')()

  const app = express()
  const server = http.createServer(app)

  server.listen(port)
  server.on('error', error => {
    if (error.syscall !== 'listen') throw error
    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`)
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`)
        process.exit(1)
        break
      default:
        throw error
    }
  })

  server.on('listening', () => {
    const addr = server.address()
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
    console.log(`Listening on ${bind}`)
  })

  module.exports = app
}, {
  // count: 5,       // number of workers: defaults to os.cpus().length
  // respawn: true,  // respawn process on exit: defaults to true
  verbose: true // log what happens to console: defaults to false

// Attach the given function to each spawned worker. The function will
// be bound to the worker that sent the message so you can setup a two
// way message bus if you please. See examples/messaging.js for an
// example.
// workerListener: function(){}
})
