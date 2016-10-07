const mockgoose = require('mockgoose')
const config = require('../../src/config/config')

/**
 * Mongoose connection state:
 * 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
 * */
module.exports = mongoose => {
  mongoose.Promise = require('bluebird')
  
  let connect = () => {
    mockgoose(mongoose)
    mongoose.connect(config.TEST_DB_URL)
  }

  let reset = () => {
    return mongoose.isMocked ? mockgoose.reset() : false
  }

  mongoose.connection.on('connected', () => {
    console.log('Mongoose> connected: ')
  })

  mongoose.connection.on('error', err => {
    console.log(`Mongoose> error: ${err}`)
  })

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose> disconnected')
  })

  return {
    connect: connect,
    reset: reset
  }
}
