const moment = require('moment')

describe('User authentication service test', () => {
  let Role = require('../../src/models/role.model')
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

    context('when requesting an action that requires an authorization role', () => {
      it('will be authorized to proceed with the request when user has proper role', sinon.test(function (done) {
        let roles = [
          new Role({
            name: 'Admin',
            appId: '123'
          }),
          new Role({
            name: 'sysAdmin',
            appId: '456'
          })
        ]
        let req = {
          user: new User({
            roles: [{
              roleId: roles[0].id
            }]
          })
        }

        let spy = this.spy(next)
        authService.authorize(roles)(req, null, spy)

        function next () {
          assert.isTrue(spy.calledOnce)
          done()
        }
      }))

      it('will generate an Unauthorized (401) error when user has an invalid role', sinon.test(function (done) {
        let roles = [
          new Role({
            name: 'sysAdmin',
            appId: '456'
          })
        ]
        let req = {
          user: new User({
            roles: [{
              roleId: '123'
            }]
          })
        }

        try {
          authService.authorize(roles)(req)
        } catch (err) {
          expect(err).to.be.an('Error')
          expect(err).to.have.property('status', 401)
          done()
        }
      }))
    })
  })

  describe('Given a user requesting to reset password', () => {
    context('when a user provides a valid email', () => {
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

    context('when a user provides a valid reset password token', () => {
      it('will return a user by specified token', sinon.test(function (done) {
        let token = 'A1244'
        let findOne = {
          exec () {
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
})
