const moment = require('moment')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const bcrypt = require('bcrypt-nodejs')
const config = require('../../src/config/config')

describe('User schema validation tests', () => {
  let User = require('../../src/models/user.server.model.js')

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

    it('will throw a validation error', done => {
      user.validate().catch(err => {
        expect(err.errors).to.have.property('password')
        done()
      })
    })
  })

  describe('Given a user with no address', () => {
    let user = new User({
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'juan@dev.com',
      password: 'Qwerty123'
    })

    it('will throw a validation error', done => {
      user.validate().catch(err => {
        expect(err.errors).to.have.property('address.zipCode')
        expect(err.errors).to.have.property('address.state')
        expect(err.errors).to.have.property('address.city')
        expect(err.errors).to.have.property('address.address1')
        done()
      })
    })
  })

  describe('Given a valid email, password and complete address', () => {
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

    it('will pass all validations', done => {
      user.validate().then(args => {
        expect(args).to.equal(undefined)
        done()
      }).catch(err => done(err))
    })
  })

  describe('Given a user requesting authentication with an valid password', () => {
    let user = new User({
      password: bcrypt.hashSync('Qwerty123')
    })

    it('will return a fulfilled promise with value = true', done => {
      user.isValidPassword('Qwerty123').then(result => {
        expect(result).to.equal(true)
        done()
      }).catch(err => done(err))
    })
  })

  describe('Given a user requesting authentication with an invalid password', () => {
    let user = new User({
      password: bcrypt.hashSync('Qwerty123')
    })

    it('will return a fulfilled promise with value = false', done => {
      user.isValidPassword('Qwerty19q').then(result => {
        expect(result).to.equal(false)
        done()
      }).catch(err => done(err))
    })
  })

  describe('Given a user changing his password', () => {
    let password = null
    let confirmPassword = null
    let user = new User()

    it('will return a fulfilled promise with value = true', done => {
      password = 'qwerty12345'
      confirmPassword = 'qwerty12345'

      user.confirmPasswordValid(password, confirmPassword).then(result => {
        expect(result).to.equal(true)
        done()
      }).catch(err => done(err))
    })

    it('will return a fulfilled promise with value = false', done => {
      password = 'qwerty12345'
      confirmPassword = 'changed'

      user.confirmPasswordValid(password, confirmPassword).then(result => {
        expect(result).to.equal(false)
        done()
      }).catch(err => done(err))
    })
  })

  describe('Given a user with an invalid password due to an invalid length', () => {
    let user = new User({
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'test@dev.com',
      password: 'Qwe'
    })

    it('will throw a validation error', done => {
      user.validate().catch(err => {
        expect(err.errors).to.have.property('password')
        done()
      })
    })
  })

  describe('Given a user with an invalid date of birth', () => {
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
      },
      dob: moment(new Date()).add(1, 'd')
    })

    it('will throw a validation error', done => {
      user.validate().catch(err => {
        expect(err.errors).to.have.property('dob')
        done()
      })
    })
  })
})
