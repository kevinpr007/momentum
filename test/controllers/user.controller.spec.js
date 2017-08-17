const httpMocks = require('node-mocks-http')
const HttpStatus = require('http-status-codes')

describe('User entity requests', () => {
  let User = require('../../src/models/user.model')
  let userController = require('../../src/controllers/user.controller')
  let userService, req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = setPagedJson(req, httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    }))
    userService = require('../../src/services/user.service')
  })

  describe('Given a request to User resource', () => {
    context('when requesting to retrieve all users', () => {
      it('returns Ok (200) with json array with valid arguments', sinon.test(function (done) {
        let TotalCount = 100
        let result = [TotalCount, [new User(), new User()]]
        req.method = 'GET'
        req.url = 'api/users'
        req.query.page = '2'
        let next = args => done(args)

        userService = this.stub(userService())
        userService.getAll.resolves(result)

        userController(userService).getAllUsers(req, res, next)

        res.on('end', () => {
          let result = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(result.data.length).to.equal(2)
          assert.isTrue(userService.getAll.calledOnce)
          done()
        })
      }))
    })

    context('when requesting a user by username (email)', () => {
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
            expect(args.status).to.equal(HttpStatus.NOT_FOUND)
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
        let next = args => done(args)

        userService = this.stub(userService())
        userService.getByEmail.resolves(user)

        userController(userService).getByUserEmail(req, res, next)

        res.on('end', () => {
          let data = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(data).to.have.property('email', user.email)
          assert.isTrue(userService.getByEmail.calledOnce)
          done()
        })
      }))
    })
  })
})
