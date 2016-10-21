// /logs/code/:code
// /logs/status/:status

const logService = require('../../src/services/log.service')
const Log = require('../../src/models/logs.server.model')

var httpMocks = require('node-mocks-http')

describe('Log controller test', () => {

  // /logs Success
  describe('Given a request to get all logs in the system', () => {
    it('returns an array of all logs in Database', sinon.test(function (done) {
      let req = httpMocks.createRequest()
      let res = httpMocks.createResponse({eventEmitter: require('events').EventEmitter})

      let logArray = [new Log({code: '200'}), new Log({code: '201'})]
      let PromiseTest = Promise.resolve(logArray)

      const namespace = {
        MockService: require('../../src/services/log.service')
      }

      let methods = {
        getAll() {
          return PromiseTest
        }
      }

      let next = (err) => {
        done(err)
      }

      sinon.stub(namespace, 'MockService').returns(methods)
      const logController = require('../../src/controllers/log.controller')(namespace.MockService())

      res.on('end', function () {
        let data = JSON.parse(res._getData())

        res._isJSON().should.be.true
        expect(namespace.MockService.calledOnce).to.equal(true)
        expect(data.length).to.equal(2)
        expect(data[0].code).to.equal(logArray[0].code)
        expect(data[1].code).to.equal(logArray[1].code)
        done()
      })

      logController.getAllLogs(req, res, next)
    }))

    // /logs Error
    it('returns an error')
  })

  // api/reset-password
  describe('Given a user requesting to reset password', () => {
    it('returns Not Found (404) for non-existing users')
    it('returns Ok (200) with json containing email confirmation providing a valid email')
  })
  
})
