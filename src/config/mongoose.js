const config = require('./config')
const mongoose = require('mongoose')
const logger = require('./logger')

module.exports = () => {
  mongoose.set('debug', (coll, method, query, doc, options) => {
    const set = {
      coll: coll,
      method: method,
      query: query,
      doc: doc,
      options: options
    }

    logger.info({
      dbQuery: set
    })
  })

  mongoose.connection.on('connecting', () => {
    logger.info('Trying to establish a connection to MongoDB')
  })

  mongoose.connection.on('connected', () => {
    logger.info('Connection established successfully')
  })

  mongoose.connection.on('error', err => {
    logger.error(`Connection to MongoDB failed: ${err}`)
  })

  mongoose.connection.on('disconnected', () => {
    logger.log('MongoDB connection closed')
  })

  return mongoose.connect(config.DB_URL)
}
