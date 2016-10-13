const mockReq = require('sinon-express-mock').mockReq
const mockRes = require('sinon-express-mock').mockRes

describe('User authentication requests', () => {

  let userService = require('../../src/services/user.service')
  let authService = require('../../src/services/auth.service')
  let authController = require('../../src/controllers/auth.controller')

  // api/register
  describe('Given a request to register a new user', () => {
    it('returns Internal Server Error (500) leaving required fields empty')
    it('returns Unprocessable Entity (422) providing an already registered email', sinon.test(function () {
      let user = {
        email: 'test@dev.com',
        password: 'abcd1234'
      }
      let req = mockReq({
        body: {
          email: user.email
        }
      })
      let res = mockRes()

      let mock = this.mock(userService())
      let mockUserService = mock.object
      mock.expects('getByEmail').withArgs(req.body.email)
        .resolves(user)

      authController(null, mockUserService, null).register(req, res)
      console.error(res)
    }))

    it('returns Created (201) with json containing JWT token and user object providing a valid request')
  })

  // api/auth
  describe('Given a user requesting authentication', () => {
    it('returns Bad Request (400) and will receive a json with error providing invalid credentials')
    it('returns Internal Server Error (500) and will receive a json with error providing incomplete arguments')
    it('returns Ok (200) and will receive a json with JWT token providing valid credentials')
  })

  // api/reset-password
  describe('Given a user requesting to reset password', () => {
    it('returns Not Found (404) for non-existing users')
    it('returns Ok (200) with json containing email confirmation providing a valid email')
  })

  // api/confirm-reset-password/:token
  describe('Given a user requesting to reset password via email confirmation', () => {
    it('returns Not Found (404) if token is not inside route')
    it('returns Ok (200) with reset-password page')
  })

  // api/complete-reset-password
  describe('Given a user resetting password via reset-password page', () => {
    it('returns Unprocessable Entity (422) providing an invalid token')
    it('returns Bad Request (400) providing invalid current password')
    it('returns Bad Request (400) providing invalid confirmation password')
    it('returns Ok (200) with json containing email confirmation providing a valid request')
  })
})
