const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const config = require('../../src/config/config')

describe('User service tests', () => {
  let User = require('../../src/models/user.server.model.js')
  let userService = require('../../src/services/user.service.js')()

  describe('Given an email of an existing user', () => {
    it('will return user by specified email', sinon.test(function (done) {
      let mock = this.mock(User)
      let user = new User({
        email: 'ivan@dev.com'
      })

      mock.expects('findOne').chain('where')
          .withArgs('email', user.email)
          .chain('exec').resolves(user)

      userService.getByEmail('ivan@dev.com').then(user => {
        mock.restore()
        mock.verify()
        assert.notEqual(user, null)
        expect(user).to.have.property('_id')
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given an Id of an existing user', () => {
    it('will return user by specified Id', sinon.test(function (done) {
      let _id = '1234-abcd'
      let mock = this.mock(User)
      let user = new User({
        _id: _id,
        email: 'test@dev.com'
      })

      mock.expects('findOne').chain('where')
          .withArgs('_id', _id)
          .chain('exec').resolves(user)

      userService.getById(_id).then(user => {
        mock.restore()
        mock.verify()
        assert.notEqual(user, null)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given a request to retrieve all existing users', () => {
    it('will return all existing users', sinon.test(function (done) {
      let mock = this.mock(User)
      let users = [
        new User({
          email: 'test1@dev.com'
        }), new User({
          email: 'test2@dev.com'
        })]

      mock.expects('find').chain('exec').resolves(users)

      userService.getAll().then(users => {
        mock.restore()
        mock.verify()
        expect(users.length).to.equal(2)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given a request to register a new user', () => {
    it('will create a new user')
  })

  describe('Given a request to insert / update a user', () => {
    it('will create a new user')
  })
})
