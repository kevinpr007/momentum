const chai = require('chai').use(require('chai-as-promised'))
const expect = chai.expect

const MongooseError = require('mongoose/lib/error')
const config = require('../../src/config/config')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise

let User = require('../../src/models/user.server.model.js')
let userService = require('../../src/services/user.service.js')()

describe('User validations', () => {
  describe('Given a user with no password', () => {
    let user = new User({
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'test@dev.com',
      address: {
        address1: '#123',
        address2: 'Test St.',
        city: 'San Juan',
        state: 'P.R.',
        zipCode: '00123-3322'
      }
    })

    it.only('will throw a validation error', () => {
      return expect(user.validate()).to.eventually.be.
        rejectedWith(MongooseError.ValidationError)
    })
  })

  describe('Given a user with no address', () => {
    let user = new User({
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'juan@dev.com',
      password: 'Qwerty123'
    })

    it('will throw a validation error')
  })

  describe('Given an already registered email', () => {
    let user = new User({
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'test@dev.com',
      password: 'Qwerty123',
      address: {
        address1: '#123',
        address2: 'Test St.',
        city: 'San Juan',
        state: 'P.R.',
        zipCode: '00123-3322'
      }
    })

    it('will throw a write error')
  })
})
