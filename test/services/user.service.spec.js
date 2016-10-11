const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const config = require('../../src/config/config')

describe('User service tests', () => {
  let User = require('../../src/models/user.server.model.js')
  let userService = require('../../src/services/user.service.js')()

  describe('Given an email of an existing user', () => {
    it('will return user by specified email')
  })

  describe('Given an Id of an existing user', () => {
    it('will return user by specified Id')
  })

  describe('Given a request to retrieve all existing users', () => {
    it('will return all existing users')
  })

  describe('Given a request to register a new user', () => {
    it('will create a new user')
  })

  describe('Given a request to insert / update a user', () => {
    it('will create a new user')
  })
})
