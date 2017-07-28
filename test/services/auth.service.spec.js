const moment = require('moment')

describe('User authentication service test', () => {
  let User = require('../../src/models/user.model')
  let authService = require('../../src/services/auth.service')()

  describe('Given an authentication request', () => {
    context('when a user provides proper credentials', () => {
      it('will generate a JWT token', done => {
        let token = authService.getToken(new User())
        assert.notEqual(token, null)
        done()
      })
    })
  })

  describe('Given a user requesting to reset password', () => {
    context('when a user provides a valid email', () => {
      it('will create a new reset-password token', sinon.test(function (done) {
        let user = new User()
        this.stub(user, 'save').resolves(user)

        authService.resetPasswordToken(user).then(user => {
          assert.notEqual(user.resetPasswordToken, null)
          expect(user.save.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when a user provides a valid reset password token', () => {
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

  describe('Given a request with a JWT token', () => {
    context('When token is outdated (expTime <= 30 mins.)', () => {
      it('will generate a new token for the requester', done => {
        let user = {
          name: 'John',
          lastName: 'Smith'
        }
        let result = authService.refreshToken(user)
          .then(jwt => {
            jwt = JSON.parse(jwt)
            expect(jwt).to.have.property('token')
            expect(jwt).to.have.property('expiresIn')
            done()
          })
      })
    })
  })
})
