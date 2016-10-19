const moment = require('moment')
const mongoose = require('mongoose')

describe('User service tests', () => {
  let User = require('../../src/models/user.server.model.js')
  let userService = require('../../src/services/user.service.js')()

  describe('Given an email of an existing user', () => {
    it('will return user by specified email', sinon.test(function (done) {
      let findOne = {
        where(email) {
          return this
        },
        exec() {
          return Promise.resolve(new User())
        }
      }
      this.stub(User, 'findOne').returns(findOne)

      userService.getByEmail('ivan@dev.com').then(user => {
        expect(User.findOne.calledOnce).to.equal(true)
        assert.notEqual(user, null)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given an Id of an existing user', () => {
    it('will return user by specified Id', sinon.test(function (done) {
      let findOne = {
        where(_id) {
          return this
        },
        exec() {
          return Promise.resolve(new User())
        }
      }
      this.stub(User, 'findOne').returns(findOne)

      userService.getByEmail('test@dev.com').then(user => {
        expect(User.findOne.calledOnce).to.equal(true)
        assert.notEqual(user, null)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given a request to retrieve all existing users', () => {
    it('will return all existing users', sinon.test(function (done) {
      let users = [new User(), new User()]
      let find = {
        exec() {
          return Promise.resolve(users)
        }
      }
      this.stub(User, 'find').returns(find)

      userService.getAll().then(users => {
        expect(User.find.calledOnce).to.equal(true)
        expect(users.length).to.equal(2)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given a request to register a new user', () => {
    it('will create a new user', sinon.test(function (done) {
      let user = new User()
      this.stub(User, 'create').resolves(user)

      userService.registerUser(user).then(() => {
        expect(User.create.calledOnce).to.equal(true)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given a request to insert / update a user', () => {
    it("will create a new user if it doesn't exist", sinon.test(function (done) {
      let user = new User()
      this.stub(user, 'save').resolves(user)

      userService.upsertUser(user).then(() => {
        expect(user.save.calledOnce).to.equal(true)
        done()
      }).catch(err => done(err))
    }))
  })
})
