const seeder = require('mongoose-seed')
const config = require('../config')

const mongoDB = require('../../config/mongoose.collections.json')
const userData = require('../mongoose_seed/user.seed')

// Connect to MongoDB via Mongoose
seeder.connect(config.DB_URL, () => {
    // Load Mongoose models
  seeder.loadModels([
    './src/models/user.server.model'
  ])

    // Clear specified collections
  seeder.clearModels([mongoDB.Model.User], () => {
        // Callback to populate DB once collections have been cleared
    seeder.populateModels(userData)
  })
})
