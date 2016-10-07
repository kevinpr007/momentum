const chai = require('chai').use(require('chai-as-promised'))
const config = require('../src/config/config')
const expect = chai.expect

const MongooseError = require('mongoose/lib/error')
const mongoose = require('mongoose')
const Promise = require('bluebird')
const mockgoose = require('./config/mockgoose')(mongoose)

const userSchema = require('../src/models/user.server.model').userSchema
const User = mongoose.model('User', userSchema)

let userService = require('../src/services/user.service')()
let authService = require('../src/services/auth.service')()

describe('User authentication', () => {
  before(() => {
    mockgoose.connect()
  })

  after(() => {
    mockgoose.reset()
  })

  describe('Given a user requesting to reset password with a valid email', () => {
    it('will create a new reset-password token')
  })
})