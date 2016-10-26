const httpMocks = require('node-mocks-http')

describe('User entity requests', () => {

  let User = require('../../src/models/user.server.model')
  let userController = require('../../src/controllers/user.controller')
  let userService, req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    })
    userService = require('../../src/services/user.service')
  })

  describe('Given a request to get all existing users', () => {
    it('returns Ok (200) with json array containing all existing users providing a valid request', sinon.test(function (done) {
      let users = [new User(), new User()]
      req.method = 'GET'
      req.url = 'api/users'
      next = args => done(args)

      userService = this.stub(userService())
      userService.getAll.resolves(users)

      userController(userService).getAllUsers(req, res, next)

      res.on('end', () => {
        let data = JSON.parse(res._getData())
        expect(data.length).to.equal(2)
        expect(res.statusCode).to.equal(200)
        assert.isTrue(userService.getAll.calledOnce)
        done()
      })
    }))
  })

  describe('Given a request to get a user by username', () => {
    it('returns Not Found (404) providing a non-existing username', sinon.test(function (done) {
      req.method = 'GET'
      req.url = 'api/users'
      req.params = {
        userName: 'test@dev.com'
      }

      userService = this.stub(userService())
      userService.getByEmail.resolves(null)

      userController(userService).getByUserEmail(req, res, next)

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

    it('returns Ok (200) with json containing user providing a valid username', sinon.test(function (done) {
      let user = new User({
        email: 'test@dev.com'
      })
      req.method = 'GET'
      req.url = 'api/users'
      req.params = {
        userName: 'test@dev.com'
      }
      next = args => done(args)

      userService = this.stub(userService())
      userService.getByEmail.resolves(user)
      
      userController(userService).getByUserEmail(req, res, next)

      res.on('end', () => {
        let data = JSON.parse(res._getData())
        expect(res.statusCode).to.equal(200)
        expect(data).to.have.property('email', user.email)
        assert.isTrue(userService.getByEmail.calledOnce)
        done()
      })
    }))
  })
})
