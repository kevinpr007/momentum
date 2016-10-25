const httpMocks = require('node-mocks-http')

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
    it('returns Internal Server Error (500) leaving required fields empty', sinon.test(function (done) {
      req.method = 'POST'
      req.url = 'api/register'
      req.body = {
        email: 'test@dev.com'
      }

      let error = new Error('Required fields missing.')
      error.status = 500

      userService = this.stub(userService())
      userService.getByEmail.rejects(error)

      authController(null, userService).register(req, res, next)

      function next (args) {
        try {
          expect(args).to.be.an('Error')
          expect(args.status).to.equal(500)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Unprocessable Entity (422) providing an already registered email', sinon.test(function (done) {
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
          expect(args.status).to.equal(422)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Created (201) with json containing JWT token and user object providing a valid request', sinon.test(function (done) {
      let user = {
        email: 'test@dev.com'
      }
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
        send() {
          return Promise.resolve({
            sent: true
          })
        }
      })

      authController(authService, userService, emailService).register(req, res, next)

      res.on('end', () => {
        let data = JSON.parse(res._getData())
        expect(res.statusCode).to.equal(201)
        expect(data).to.have.property('token')
        expect(data).to.have.deep.property('user.email', user.email)

        assert.isTrue(userService.getByEmail.calledOnce)
        assert.isTrue(userService.registerUser.calledOnce)
        assert.isTrue(authService.getToken.calledOnce)
        done()
      })
    }))
  })

  describe('Given a user requesting authentication', () => {
    it('returns Not Found (404) and will receive a json with error providing a non existing user', sinon.test(function (done) {
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
          expect(args.status).to.equal(404)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Internal Server Error (500) and will receive a json with error providing incomplete arguments', sinon.test(function (done) {
      req.method = 'POST'
      req.url = 'api/auth'
      req.body = {
        email: 'test@dev.com'
      }

      let error = new Error('Required fields missing.')
      error.status = 500

      userService = this.stub(userService())
      userService.getByEmail.rejects(error)

      authController(null, userService).register(req, res, next)

      function next (args) {
        try {
          expect(args).to.be.an('Error')
          expect(args.status).to.equal(500)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Bad Request (400) and will receive a json with error providing invalid credentials', sinon.test(function (done) {
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
          expect(args.status).to.equal(400)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Ok (200) and will receive a json with JWT token providing valid credentials', sinon.test(function (done) {
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
        expect(res.statusCode).to.equal(200)
        expect(data).to.have.property('token')
        expect(data.token).to.equal('ABCD-1234')
        assert.isTrue(authService.getToken.calledOnce)
        assert.isTrue(userService.getByEmail.calledOnce)
        done()
      })
    }))
  })

  describe('Given a user requesting to reset password', () => {
    it('returns Not Found (404) for non-existing users', sinon.test(function (done) {
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
          expect(args.status).to.equal(404)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Ok (200) with json containing email confirmation providing a valid email', sinon.test(function (done) {
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
        send() {
          return Promise.resolve({
            sent: true
          })
        }
      })

      authController(authService, userService, emailService).resetPassword(req, res, next)

      res.on('end', () => {
        let data = JSON.parse(res._getData())
        expect(res.statusCode).to.equal(200)
        expect(data.data).to.have.deep.property('sent', true)
        assert.isTrue(authService.resetToken.calledOnce)
        assert.isTrue(userService.getByEmail.calledOnce)
        done()
      })
    }))
  })

  describe('Given a user requesting to reset password via email confirmation', () => {
    it('returns Not Found (404) if token is not set inside route', sinon.test(function (done) {
      templateModel = {}
      req.method = 'GET'
      req.url = 'api/confirm-reset-password'

      authController(null, null, null, templateModel).confirmResetPassword(req, res, next)

      function next (args) {
        try {
          expect(args).to.be.an('Error')
          expect(args.status).to.equal(404)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Ok (200) with reset-password page', sinon.test(function (done) {
      templateModel = {}
      req.method = 'GET'
      req.url = 'api/confirm-reset-password'
      req.params = {
        token: 'ABCD-1234'
      }

      authController(null, null, null, templateModel).confirmResetPassword(req, res)

      expect(res.statusCode).to.equal(200)
      done()
    }))
  })

  describe('Given a user resetting password via reset-password page', () => {
    it('returns Unprocessable Entity (422) providing an invalid token', sinon.test(function (done) {
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
          expect(args.status).to.equal(422)
          assert.isTrue(authService.findByPasswordToken.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Bad Request (400) providing invalid current password', sinon.test(function (done) {
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
          expect(args.status).to.equal(400)
          assert.isTrue(user.isValidPassword.calledOnce)
          assert.isTrue(authService.findByPasswordToken.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Bad Request (400) providing invalid confirmation password', sinon.test(function (done) {
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
          expect(args.status).to.equal(400)
          assert.isTrue(user.isValidPassword.calledOnce)
          assert.isTrue(user.confirmPasswordValid.calledOnce)
          assert.isTrue(authService.findByPasswordToken.calledOnce)
          done()
        } catch (err) {
          done(err)
        }
      }
    }))

    it('returns Ok (200) with json containing email confirmation providing a valid request', sinon.test(function (done) {
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
        send() {
          return Promise.resolve({
            sent: true
          })
        }
      })

      let next = args => done(args)
      authController(authService, userService, emailService).newPassword(req, res, next)

      res.on('end', () => {
        let data = JSON.parse(res._getData())
        expect(res.statusCode).to.equal(200)
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
