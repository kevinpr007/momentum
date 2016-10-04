process.env.NODE_ENV = 'development'

const mongoose = require('mongoose')
const mockgoose = require('mockgoose')
const config = require('../../src/config/config')

module.exports = () => {
  let connect = () => {
    return mockgoose(mongoose).then(() => {
      mongoose.connect(config.DB_URL)
    })
  }

  let reset = () => {
    return mockgoose.reset()
  }

  return {
    connect: connect,
    reset: reset
  }
}