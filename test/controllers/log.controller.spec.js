const logService = require('../../src/services/log.service')
const Log = require('../../src/models/logs.server.model')
const HttpStatus = require('http-status-codes')
const httpMocks = require('node-mocks-http')

describe('Log controller test', () => {

  // /logs
  describe('Given a request to get all logs in the system', () => {
    it('it will returns an array of all logs in Database', sinon.test(function (done) {
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

    it('it will returns an error', sinon.test(function (done) {
      let req = httpMocks.createRequest()
      let res = httpMocks.createResponse({eventEmitter: require('events').EventEmitter})

      let err = new Error('Error Message')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR

      let PromiseTest = Promise.reject(err)

      const namespace = {
        MockService: require('../../src/services/log.service')
      }

      let methods = {
        getAll() {
          return PromiseTest
        }
      }

      let next = (args) => {
        try {
          expect(args).to.be.a('Error')
          expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
          done()
        } catch (err) {
          done(err)
        }
      }

      sinon.stub(namespace, 'MockService').returns(methods)
      const logController = require('../../src/controllers/log.controller')(namespace.MockService())

      logController.getAllLogs(req, res, next)
    }))
  })

  // /logs/code/:code
  describe('Given a request to get all logs by a code', () => {
    it('it will returns an array of all logs for that particular code')
    it('it will returns an error')
  })

  // /logs/status/:status
  describe('Given a request to get all logs by a status', () => {
    it('it will returns an array of all logs for that particular status')
    it('it will returns an error')
  })
})
