const chai = require('chai').use(require('chai-as-promised'))
const config = require('../src/config/config')
const expect = chai.expect

const MongooseError = require('mongoose/lib/error')
const mongoose = require('mongoose')
const Promise = require('bluebird')

let User = require('../src/models/user.server.model')
let userService = require('../src/services/user.service')()

describe('User validations', () => {
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

    it('user should be valid to register')
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

    it('will throw a validation error')
  })

  describe('Given a user with no address', () => {
    let user = {
      firstName: 'Juan',
      lastName: 'Del Pueblo',
      email: 'juan@dev.com',
      password: 'Qwerty123'
    }

    it('will throw a validation error')
  })

  describe('Given an already registered email', () => {
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

    it('will throw a write error')
  })
})