const httpMocks = require('node-mocks-http')
const HttpStatus = require('http-status-codes')

describe('User authentication requests', () => {
  let User = require('../../src/models/user.server.model')
  let authController = require('../../src/controllers/auth.controller')
  let userService, authService, emailService, req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    })
    userService = require('../../src/services/user.service')
    authService = require('../../src/services/auth.service')
    emailService = require('../../src/services/email.service')
  })

  describe('Given a request to register a new user', () => {
    context('when leaving required fields empty', () => {
      it('returns Internal Server Error (500)', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/register'
        req.body = {
          email: 'test@dev.com'
        }

        let error = new Error('Required fields missing.')
        error.status = HttpStatus.INTERNAL_SERVER_ERROR

        userService = this.stub(userService())
        userService.getByEmail.rejects(error)

        authController(null, userService).register(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
            assert.isTrue(userService.getByEmail.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing an already registered email', () => {
      it('returns Unprocessable Entity (422)', sinon.test(function (done) {
        let user = {
          email: 'test@dev.com'
        }
        req.method = 'POST'
        req.url = 'api/register'
        req.body = {
          email: user.email
        }

        userService = this.stub(userService())
        userService.getByEmail.resolves(user)

        authController(null, userService).register(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.UNPROCESSABLE_ENTITY)
            assert.isTrue(userService.getByEmail.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing a valid request', () => {
      it('returns Created (201) with json containing JWT token and user object', sinon.test(function (done) {
        let user = new User({
          email: 'test@dev.com'
        })
        req.method = 'POST'
        req.url = 'api/register'
        req.body = {
          email: user.email
        }
        next = args => done(args)

        userService = this.stub(userService())
        userService.getByEmail.resolves(null)
        userService.registerUser.resolves(user)

        authService = this.stub(authService())
        authService.getToken.returns('ABCD-1234')

        emailService = this.stub(emailService({
          to: 'test@dev.com'
        }), 'send').returns({
          send () {
            return Promise.resolve({
              sent: true
            })
          }
        })

        authController(authService, userService, emailService).register(req, res, next)

        res.on('end', () => {
          let data = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(201)
          expect(data).to.have.property('token', 'ABCD-1234')
          expect(data).to.have.deep.property('user.email', user.email)

          assert.isTrue(userService.getByEmail.calledOnce)
          assert.isTrue(userService.registerUser.calledOnce)
          assert.isTrue(authService.getToken.calledOnce)
          done()
        })
      }))
    })
  })

  describe('Given a user requesting authentication', () => {
    context('when providing a non existing user', () => {
      it('returns Not Found (404) and will receive a json with error', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/auth'
        req.body = {
          email: 'test@dev.com'
        }

        userService = this.stub(userService())
        userService.getByEmail.resolves(null)

        authController(null, userService).auth(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.NOT_FOUND)
            assert.isTrue(userService.getByEmail.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing incomplete arguments', () => {
      it('returns Internal Server Error (500) and will receive a json with error', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/auth'
        req.body = {
          email: 'test@dev.com'
        }

        let error = new Error('Required fields missing.')
        error.status = HttpStatus.INTERNAL_SERVER_ERROR

        userService = this.stub(userService())
        userService.getByEmail.rejects(error)

        authController(null, userService).register(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
            assert.isTrue(userService.getByEmail.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing invalid credentials', () => {
      it('returns Bad Request (400) and will receive a json with error', sinon.test(function (done) {
        let user = new User({
          email: 'test@dev.com'
        })
        req.method = 'POST'
        req.url = 'api/auth'
        req.body = {
          email: user.email
        }

        this.stub(user, 'isValidPassword').resolves(false)

        userService = this.stub(userService())
        userService.getByEmail.resolves(user)

        authController(null, userService).auth(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.BAD_REQUEST)
            assert.isTrue(userService.getByEmail.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing valid credentials', () => {
      it('returns Ok (200) and will receive a json with JWT token', sinon.test(function (done) {
        let user = new User({
          email: 'test@dev.com'
        })
        req.method = 'POST'
        req.url = 'api/auth'
        req.body = {
          email: user.email
        }
        next = args => done(args)

        this.stub(user, 'isValidPassword').resolves(true)

        userService = this.stub(userService())
        userService.getByEmail.resolves(user)

        authService = this.stub(authService())
        authService.getToken.returns('ABCD-1234')

        authController(authService, userService).auth(req, res, next)

        res.on('end', () => {
          let data = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(data).to.have.property('token', 'ABCD-1234')
          assert.isTrue(authService.getToken.calledOnce)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        })
      }))
    })
  })

  describe('Given a user requesting to reset password', () => {
    context('when a non-existing user is provided', () => {
      it('returns Not Found (404)', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/reset-password'
        req.body = {
          email: 'test@dev.com'
        }

        userService = this.stub(userService())
        userService.getByEmail.resolves(null)

        authController(null, userService).resetPassword(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.NOT_FOUND)
            assert.isTrue(userService.getByEmail.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing a valid email', () => {
      it('returns Ok (200) with json containing email confirmation', sinon.test(function (done) {
        let user = {
          email: 'test@dev.com',
          resetPasswordToken: 'ABCD-1234'
        }
        req.method = 'POST'
        req.url = 'api/reset-password'
        req.body = {
          email: user.email
        }
        next = args => done(args)

        userService = this.stub(userService())
        userService.getByEmail.resolves(user)

        authService = this.stub(authService())
        authService.resetToken.resolves(user)

        emailService = this.stub(emailService({
          to: 'test@dev.com'
        }), 'send').returns({
          send () {
            return Promise.resolve({
              sent: true
            })
          }
        })

        authController(authService, userService, emailService).resetPassword(req, res, next)

        res.on('end', () => {
          let data = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(data.data).to.have.deep.property('sent', true)
          assert.isTrue(authService.resetToken.calledOnce)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        })
      }))
    })
  })

  describe('Given a user requesting to reset password via email confirmation', () => {
    context('when token is not set inside route', () => {
      it('returns Not Found (404)', sinon.test(function (done) {
        let templateModel = {}
        req.method = 'GET'
        req.url = 'api/confirm-reset-password'

        authController(null, null, null, templateModel).confirmResetPassword(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.NOT_FOUND)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when token is provided inside route', () => {
      it('returns Ok (200) with reset-password page', sinon.test(function (done) {
        let templateModel = {}
        req.method = 'GET'
        req.url = 'api/confirm-reset-password'
        req.params = {
          token: 'ABCD-1234'
        }

        authController(null, null, null, templateModel).confirmResetPassword(req, res)

        expect(res.statusCode).to.equal(HttpStatus.OK)
        done()
      }))
    })
  })

  describe('Given a user resetting password via reset-password page', () => {
    context('when providing an invalid token', () => {
      it('returns Unprocessable Entity (422)', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/complete-reset-password'
        req.body = {
          token: 'ABCD-1234'
        }

        authService = this.stub(authService())
        authService.findByPasswordToken.resolves(null)

        authController(authService).newPassword(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.UNPROCESSABLE_ENTITY)
            assert.isTrue(authService.findByPasswordToken.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing invalid current password', () => {
      it('returns Bad Request (400)', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/complete-reset-password'
        req.body = {
          token: 'ABCD-1234'
        }

        let user = new User({
          email: 'test@dev.com'
        })
        this.stub(user, 'isValidPassword').resolves(false)

        authService = this.stub(authService())
        authService.findByPasswordToken.resolves(user)

        authController(authService).newPassword(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.BAD_REQUEST)
            assert.isTrue(user.isValidPassword.calledOnce)
            assert.isTrue(authService.findByPasswordToken.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing invalid confirmation password', () => {
      it('returns Bad Request (400)', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/complete-reset-password'
        req.body = {
          token: 'ABCD-1234'
        }

        let user = new User({
          email: 'test@dev.com'
        })

        user = this.stub(user)
        user.isValidPassword.resolves(true)
        user.confirmPasswordValid.resolves(false)

        authService = this.stub(authService())
        authService.findByPasswordToken.resolves(user)

        authController(authService).newPassword(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.BAD_REQUEST)
            assert.isTrue(user.isValidPassword.calledOnce)
            assert.isTrue(user.confirmPasswordValid.calledOnce)
            assert.isTrue(authService.findByPasswordToken.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })

    context('when providing a valid request', () => {
      it('returns Ok (200) with json containing email confirmation', sinon.test(function (done) {
        req.method = 'POST'
        req.url = 'api/complete-reset-password'
        req.body = {
          token: 'ABCD-1234',
          currentPassword: 'qwerty',
          password: 'test1',
          confirmPassword: 'test1'
        }

        let user = new User({
          email: 'test@dev.com'
        })

        user = this.stub(user)
        user.isValidPassword.resolves(true)
        user.confirmPasswordValid.resolves(true)

        authService = this.stub(authService())
        authService.findByPasswordToken.resolves(user)

        userService = this.stub(userService())
        userService.upsertUser.resolves(user)

        emailService = this.stub(emailService({
          to: 'test@dev.com'
        }), 'send').returns({
          send () {
            return Promise.resolve({
              sent: true
            })
          }
        })

        let next = args => done(args)
        authController(authService, userService, emailService).newPassword(req, res, next)

        res.on('end', () => {
          let data = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          assert.isTrue(user.isValidPassword.calledOnce)
          assert.isTrue(user.confirmPasswordValid.calledOnce)
          assert.isTrue(authService.findByPasswordToken.calledOnce)
          assert.isTrue(userService.upsertUser.calledOnce)
          expect(data.data).to.have.deep.property('sent', true)
          done()
        })
      }))
    })
  })
})
