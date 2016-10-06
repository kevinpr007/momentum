const chai = require('chai').use(require('chai-as-promised'))
const mockgoose = require('./config/mockgoose')()
const expect = chai.expect

const MongooseError = require('mongoose/lib/error')
const Promise = require('bluebird')
const mongoose = require('mongoose')
const User = mongoose.model('User')

let userService = require('../src/services/user.service')()
let authService = require('../src/services/auth.service')()

describe('Registering as a new user', () => {
  before(() => {
    mockgoose.connect()
  })

  after(() => {
    mockgoose.reset()
  })

  describe('Given a valid email, password, full name and address', () => {
    let user = {
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'juan@dev.com',
      password: 'Qwerty123',
      address: {
        address1: '#123',
        address2: 'Test St.',
        city: 'San Juan',
        state: 'P.R.',
        zipCode: '00123-3322'
      }
    }

    it('registers the user successfully', () => {
      return expect(userService.registerUser(user))
          .to.eventually.have.property('_id')
    })
  })

  describe('Given a user with no password', () => {
    let user = {
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
    }

    it('will throw a validation error', () => {
      return expect(userService.registerUser(user))
          .to.eventually.be.rejectedWith(MongooseError.ValidationError)
    })
  })

  describe('Given a user with no address', () => {
    let user = {
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'juan@dev.com',
      password: 'Qwerty123'
    }

    it('will throw a validation error', () => {
      return expect(userService.registerUser(user))
          .to.eventually.be.rejectedWith(MongooseError.ValidationError)
    })
  })

  describe('Given an already registered email', () => {
    it('will throw a write error', () => {
      let user = {
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
      }

      return Promise.all([
        expect(userService.registerUser(user))
            .to.eventually.have.property('_id'),
        expect(userService.registerUser(user))
            .to.eventually.be.rejectedWith(MongooseError.WriteError)
      ])
    })
  })
})

describe('Resetting a user password', () => {
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
