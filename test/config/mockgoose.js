const mockgoose = require('mockgoose')
const config = require('../../src/config/config')

module.exports = mongoose => {
  let connect = () => {
    return mockgoose(mongoose).then(() => {
      mongoose.connect(config.DB_URL)
    })
  }

  let reset = () => {
    return mongoose.isMocked ? mockgoose.reset() : false
  }

  return {
    connect: connect,
    reset: reset
  }
}
