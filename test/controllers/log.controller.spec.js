const HttpStatus = require('http-status-codes')
const httpMocks = require('node-mocks-http')

describe('Log entity requests', () => {
  let Log = require('../../src/models/logs.model')
  let logController = require('../../src/controllers/log.controller')
  let logService, req, res

  const TOTAL_FIELD = 0
  const DATA_FIELD = 1

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    })
    logService = require('../../src/services/log.service')
  })

  describe('Given a request to Log resource', () => {
    context('when requesting to retrieve all logs in the database', () => {
      it('returns Ok (200) with json array with valid arguments', sinon.test(function (done) {
        let TotalCount = 2

        let result = [TotalCount, [new Log({code: '200'}), new Log({code: '201'})]]
        let next = err => done(err)
        req.query.page = '1'
        req.query.pageSize = 1

        logService = this.stub(logService())
        logService.getAll.resolves(result)

        logController(logService).getAllLogs(req, res, next)

        res.on('end', function () {
          let response = JSON.parse(res._getData())
          assert.isTrue(res._isJSON())
          assert.isTrue(logService.getAll.calledOnce)
          expect(response.data.length).to.equal(2)
          expect(response.data[TOTAL_FIELD].code).to.equal(result[DATA_FIELD][0].code)
          expect(response.data[DATA_FIELD].code).to.equal(result[DATA_FIELD][1].code)
          done()
        })
      }))
    })

    context('when requesting to get a log by code', () => {
      it('returns Ok (200) with json array containing all logs for that particular code', sinon.test(function (done) {
        let codeStr = '200'
        req.params.code = codeStr

        let totalCount = 1
        let log = [totalCount, [new Log({code: codeStr})]]
        let next = (err) => done(err)

        logService = this.stub(logService())
        logService.getByCode.resolves(log)

        logController(logService).getByCode(req, res, next)

        res.on('end', function () {
          let data = JSON.parse(res._getData()).data
          assert.isTrue(res._isJSON())
          assert.isTrue(logService.getByCode.calledOnce)
          expect(data[0].code).to.equal(codeStr)
          done()
        })
      }))

      it('returns Internal Server Error (500) with error object', sinon.test(function (done) {
        let errMessage = 'Internal Error Message'
        let err = new Error(errMessage)
        err.status = HttpStatus.INTERNAL_SERVER_ERROR

        logService = this.stub(logService())
        logService.getByCode.rejects(err)

        logController(logService).getByCode(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.a('Error')
            expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
            expect(args.message).to.equal(errMessage)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })
  })
})
