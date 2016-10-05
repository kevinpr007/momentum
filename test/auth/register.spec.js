const chai = require('chai').use(require('chai-as-promised'))
const mockgoose = require('./../config/mockgoose')()
const MongooseError = require('mongoose/lib/error')
const Promise = require('bluebird')
const expect = chai.expect

describe('Registering as a new user', () => {
  let sut
  let user
  let userFactory

  before(() => {
    mockgoose.connect()
    sut = require('../../src/services/user.service.js')()
    userFactory = require('../../src/helpers/user.factory')
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

  describe(' Given a valid email, password, full name and address', () => {
    it('registers the user successfully', () => {
      return expect(sut.registerUser(user)).to.eventually.have.property('_id')
    })
  })

  describe('Given an already registered email', () => {
    it('will throw a write error', () => {
      return Promise.all([
        expect(userFactory(user).save)
          .to.eventually.have.property('_id'),
        expect(sut.registerUser(user))
          .to.eventually.be.rejectedWith(MongooseError.WriteError)
      ])
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
