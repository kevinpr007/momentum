const mockReq = require('sinon-express-mock').mockReq
const mockRes = require('sinon-express-mock').mockRes

const logService = require('../../src/services/log.service')
let Log = require('../../src/models/logs.server.model')

describe.only('Log controller test', () => {

// /logs
// /logs/code/:code
// /logs/status/:status

  describe('Given a request to get all logs in the system', () => {
    it('returns an array of all logs in Database', sinon.test(function () {
        
        let logArr = [new Log({code: '200'}), new Log({code: '201'})]

        let req = mockReq()
        let resultTest = Promise.resolve(logArr)
        
        const namespace = {
          Service: require('../../src/services/log.service')
        };
      
        let object = {
          getAll() {
            return resultTest
          }
        }

        let res = mockRes({
          status(name){return name},

          json(name){
            return name
          }
        })
        
        sinon.stub(namespace, 'Service').returns(object);
        const logController = require('../../src/controllers/log.controller')(namespace.Service())

          logController.getAllLogs(req, res).then(result => {
          // expect(result.namespace.Service.calledOnce).to.equal(true)
          expect(result[0].code).to.equal('200')
          expect(result[1].code).to.equal('201')
          done()
        })
        
    }))

    it('returns an error')
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
