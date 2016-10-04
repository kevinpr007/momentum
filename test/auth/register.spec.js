const MongooseError = require('mongoose/lib/error')
const chaiPromise = require('chai-as-promised')
const chai = require('chai').use(chaiPromise)
const mockgoose = require('./../config/mockgoose')()
const expect = chai.expect

describe('Registering as a new user', () => {
  let sut
  let user

  before(() => {
    mockgoose.connect()
    sut = require('../../src/services/user.service.js')()
  })

  beforeEach(() => {
    user = {
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
  })

  after(() => {
    mockgoose.reset()
  })

  describe('Given a valid email, password, full name and address', () => {
    it('registers the user successfully', () => {
      return expect(sut.registerUser(user)).to.eventually.have.property('_id')
    })
  })

  describe('Given an already registered email', () => {
    it('will throw a write error', () => {
      return expect(sut.registerUser(user))
          .to.eventually.be.rejectedWith(MongooseError.WriteError)
    })
  })

  describe('Given a user with no password', () => {
    it('will throw a validation error', () => {
      user.password = null
      user.email = 'test@dev.com'
      return expect(sut.registerUser(user))
          .to.eventually.be.rejectedWith(MongooseError.ValidationError)
    })
  })

  describe('Given a user with no address', () => {
    it('will throw a validation error', () => {
      user.address = null
      user.email = 'test@dev.com'
      return expect(sut.registerUser(user))
          .to.eventually.throw()
    })
  })
})