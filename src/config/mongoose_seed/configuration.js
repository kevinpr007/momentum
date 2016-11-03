const seeder = require('mongoose-seed')
const _ = require('lodash')

const mongoDB = require('../../config/mongoose.collections.json')
const userData = require('../mongoose_seed/user.seed')
const logData = require('../mongoose_seed/log.seed')
const locationData = require('../mongoose_seed/location.seed')
const serviceData = require('../mongoose_seed/service.seed')
const scheduleData = require('../mongoose_seed/schedule.seed')
const workshiftData = require('../mongoose_seed/workshift.seed')

let mainData = _.concat(userData, logData, locationData, serviceData, scheduleData, workshiftData)
let config = require('../config')()
config.setVariable(process.env.NODE_ENV)
config = config.getVariable()

// Connect to MongoDB via Mongoose
seeder.connect(config.DB_URL, () => {
    // Load Mongoose models
  seeder.loadModels([
    './src/models/user.server.model',
    './src/models/logs.server.model',
    './src/models/location.server.model',
    './src/models/service.server.model',
    './src/models/schedule.server.model',
    './src/models/workshift.server.model'
  ])

    // Clear specified collections
  seeder.clearModels([mongoDB.Model.User, mongoDB.Model.Location, mongoDB.Model.Service, mongoDB.Model.Schedule,
      mongoDB.Model.Workshift], () => {
      // Callback to populate DB once collections have been cleared
    seeder.populateModels(mainData)
  })
})
