const chai = require('chai')
chai.use(require('chai-as-promised'))
const expect = chai.expect

const config = require('../../src/config/config')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise

describe('User validations', () => {

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
      })
    })
  })
})
