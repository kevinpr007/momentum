const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const BunyanMiddleware = require('bunyan-middleware')
const HttpStatus = require('http-status-codes')
const helmet = require('helmet')
const logger = require('./logger')
const logService = require('../services/log.service')()

module.exports = () => {
  const app = express()

  /**
   * Security middleware
   */
  app.use(helmet())

  /**
   * Parsing middleware
   */
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  /**
   * Logging middleware
   */
  app.use(BunyanMiddleware({
    headerName: 'X-Request-Id',
    propertyName: 'reqId',
    logName: 'req_id',
    obscureHeaders: [],
  logger}))

  /**
   * Routing middleware
   */
  app.use('/', router)
  require('../routes/auth.routes')(router)
  require('../routes/user.routes')(router)
  require('../routes/log.routes')(router)
  require('../routes/index.routes')(router)

  /**
   * CORS middleware
   */
  app.use((req, res, next) => {
    const allowedHeaders = ['Origin', 'X-Requested-With',
      'Content-Type', 'Accept', 'Authorization',
      'Access-Control-Allow-Credentials']

    const allowedMethods = ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', allowedMethods.join(', '))
    res.header('Access-Control-Allow-Headers', allowedHeaders.join(', '))
    res.header('Access-Control-Expose-Headers', 'X-Updated-JWT')
    next()
  })

  /**
   * Documentation middleware
   */
  require('../docs/swagger')(app)

  /**
   * Global Error middleware
   */
  app.use((req, res, next) => {
    const err = new Error(HttpStatus.getStatusText(HttpStatus.NOT_FOUND))
    err.status = HttpStatus.NOT_FOUND
    next(err)
  })

  app.use((err, req, res, next) => {
    logService.saveLog(err)
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

  return app
}
