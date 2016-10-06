const config = require('./config')
const mongoose = require('mongoose')
const logger = require('./logger')

module.exports = () => {
  mongoose.set('debug', (coll, method, query, doc, options) => {
    let set = {
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

  // TODO: Add new events like 'online' 'offline', 'shutdown' logs
  mongoose.connection.on('error', err => logger.error(err))
  return mongoose.connect(config.DB_URL)
}
