const chai = require('chai').use(require('chai-as-promised'))
const config = require('../../src/config/config')
const expect = chai.expect

const MongooseError = require('mongoose/lib/error')
const mongoose = require('mongoose')
const Promise = require('bluebird')

const userSchema = require('../../src/models/user.server.model.js').userSchema
const User = mongoose.model('User', userSchema)

let userService = require('../../src/services/user.service.js')()
let authService = require('../../src/services/auth.service.js')()

describe('User authentication', () => {
  describe('Given a user requesting to reset password with a valid email', () => {
    it('will create a new reset-password token')
  })
})
