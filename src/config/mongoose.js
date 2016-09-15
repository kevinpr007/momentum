const env = require('./env')
const mongoose = require('mongoose')

module.exports = logger => {
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

  mongoose.connection.on('error', err => logger.error(err))

  require('../models/user.server.model')
  require('../models/schedule.server.model')
  require('../models/workshift.server.model')
  require('../models/location.server.model')
  require('../models/service.server.model')

  return mongoose.connect(env('DB_URL'))
}
