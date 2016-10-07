const chai = require('chai').use(require('chai-as-promised'))
const config = require('../src/config/config')
const expect = chai.expect

const MongooseError = require('mongoose/lib/error')
const mongoose = require('mongoose')
const mockgoose = require('./config/mockgoose')(mongoose)
const Promise = require('bluebird')

describe('User registration', () => {

  let User
  let userService

  before(() => {
    mockgoose.connect()
    User = mongoose.model('User', require('../src/models/user.server.model').userSchema)
    userService = require('../src/services/user.service')()
  })

  after(() => {
    
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
    it.skip('will throw a write error', () => {
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