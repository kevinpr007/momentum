const moment = require('moment')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

describe('User authentication service test', () => {
  let User = require('../../src/models/user.server.model.js')
  let authService = require('../../src/services/auth.service.js')()

  describe('Given an authenticated user', () => {
    it('will generate a JWT token', done => {
      let token = authService.getToken(new User())
      assert.notEqual(token, null)
      done()
    })
  })

  describe('Given a user requesting to reset password with a valid email', () => {
    it('will create a new reset-password token', sinon.test(function (done) {
      let user = new User()
      this.stub(user, 'save').resolves(user)

      authService.resetToken(user).then(user => {
        assert.notEqual(user.resetPasswordToken, null)
        expect(user.save.calledOnce).to.equal(true)
        done()
      }).catch(err => done(err))
    }))
  })

  describe('Given a user resetting his/her password by providing a valid reset password token', () => {
    it('will return a user by specified token', sinon.test(function (done) {
      let token = 'A1244'
      let findOne = {
        exec() {
          return Promise.resolve(new User({
            resetPasswordToken: token,
            resetPasswordExpires: moment(new Date()).add(1, 'd')
          }))
        }
      }
      this.stub(User, 'findOne').returns(findOne)

      authService.findByPasswordToken(token).then(user => {
        assert.notEqual(user, null)
        expect(User.findOne.calledOnce).to.equal(true)
        assert.equal(user.resetPasswordToken, token)
        done()
      }).catch(err => done(err))
    }))
  })
})
