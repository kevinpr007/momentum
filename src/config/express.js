const express = require('express')
const router = express.Router()
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const BunyanMiddleware = require('bunyan-middleware')
const HttpStatus = require('http-status-codes')
const helmet = require('helmet')

module.exports = logger => {
  /**
   * Express area
   */
  let app = express()

  /**
   * Security area
   */
  app.use(helmet())

  /**
   * Global App Config
   */
  app.use(BunyanMiddleware({
    headerName: 'X-Request-Id',
    propertyName: 'reqId',
    logName: 'req_id',
    obscureHeaders: [],
    logger: logger
  }))

  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.use(favicon('./public/img/favicon.ico'))
  app.use(express.static('./public'))
  app.set('views', './src/views')
  app.set('view engine', 'hbs')

  app.use(BunyanMiddleware({
    headerName: 'X-Request-Id',
    propertyName: 'reqId',
    logName: 'req_id',
    obscureHeaders: [],
    logger: logger
  }))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  /**
   * Routing Config
   */
  app.use('/api', router)

  require('../routes/index.routes')(router)
  require('../routes/auth.routes')(router)
  require('../routes/user.routes')(router)

  app.use((req, res, next) => {
    let err = new Error(HttpStatus.getStatusText(HttpStatus.NOT_FOUND))
    err.status = HttpStatus.NOT_FOUND
    next(err)
  })

  /**
   * CORS Config
   */
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  })

  /**
   * Global Error Config
   */
  app.use((err, req, res, next) => {
    logger.error(err)
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

  return app
}
