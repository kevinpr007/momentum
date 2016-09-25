const config = require('./config')
const mongoose = require('mongoose')

module.exports = logger => {
  // TODO: Fix hardcode
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

  require('../models/user.server.model')
  require('../models/schedule.server.model')
  require('../models/workshift.server.model')
  require('../models/location.server.model')
  require('../models/service.server.model')

  return mongoose.connect(config.DB_URL)
}
