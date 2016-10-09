const config = require('../../src/config/config')
const MongooseError = require('mongoose/lib/error')

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = require('../../src/models/user.server.model.js')
let authService = require('../../src/services/auth.service.js')()

describe('User authentication', () => {
  describe('Given a user requesting to reset password with a valid email', () => {
    it('will create a new reset-password token')
  })
})
