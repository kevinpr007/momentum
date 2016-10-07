const mockgoose = require('mockgoose')
const config = require('../../src/config/config')

/**
 * Mongoose connection state:
 * 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
 * */
module.exports = mongoose => {
  let connect = () => {
    return mockgoose(mongoose).then(() => {
      if (mongoose.connection.readyState != 1) {
        mongoose.connect(config.TEST_DB_URL)
      }
    }).catch(err => console.error(`\n${err}\n`))
  }

  let reset = () => {
    return mongoose.isMocked ? mockgoose.reset() : false
  }

  return {
    connect: connect,
    reset: reset
  }
}
