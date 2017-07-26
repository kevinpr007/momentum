const swagger = require('swagger-express-router')
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./swagger.json')

const path = require('path')
const fs = require('fs')

const useBasePath = true
const showExplorer = false
const options = {}
const customCss = fs.readFileSync(path.resolve(__dirname, 'swagger-ui.css'), 'utf-8')

const middlewares = {
  'logs_mocks': require('./mocks/log.mocks'),
  'users_mocks': require('./mocks/user.mocks')
}

module.exports = app => {
  swagger.setUpRoutes(middlewares, app, swaggerConfig, useBasePath)
  app.use('/api-docs', swaggerUi.serve,
    swaggerUi.setup(swaggerConfig, showExplorer, options, customCss))
}
