describe('Log service tests', () => {
  let Log = require('../../src/models/logs.server.model')
  let logService = require('../../src/services/log.service')()
  let log

  const ERROR_CODE = '404'
  const STATUS = 'Status Desc'
  const MESSAGE = 'Error Message'

  beforeEach(() => {
    log = new Log({
      code: ERROR_CODE,
      status: STATUS,
      Messages: MESSAGE
    })
  })

  describe('Given a request to Log resource', () => {
    context('when requesting a log by code', () => {
      it('will return log(s) by specified code', sinon.test(function (done) {
        let find = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(log)
          }
        }

        this.stub(Log, 'find').returns(find)

        logService.getByCode(ERROR_CODE).then(result => {
          assert.notEqual(result, null)
          expect(result.code).to.be.equal(ERROR_CODE)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting a log by status', () => {
      it('will return log(s) by specified status', sinon.test(function (done) {
        log = new Log({
          code: ERROR_CODE,
          status: STATUS,
          Messages: MESSAGE
        })

        let find = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(log)
          }
        }

        this.stub(Log, 'find').returns(find)

        logService.getByStatus(STATUS).then(result => {
          assert.notEqual(result, null)
          expect(result.status).to.be.equal(STATUS)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting all logs', () => {
      it('will return a list of logs with pagination', sinon.test(function (done) {
        let logs = [new Log(), new Log(), new Log(), new Log(), new Log(), new Log(), new Log({code: '500'})]

        let find = {
          sort () {
            return this
          },
          limit () {
            return this
          },
          skip () {
            return this
          },
          exec () {
            return Promise.resolve(logs)
          }
        }
        let count = {
          exec () {
            return Promise.resolve(10)
          }
        }

        this.stub(Log, 'find').returns(find)
        this.stub(Log, 'count').returns(count)

        logService.getAll().then(result => {
          assert.notEqual(result, null)
          expect(result).to.be.an('Array')
          assert.equal(result[1].length, 7)
          expect(result[1][6].code).to.be.equal('500')
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting to insert / update a log', () => {
      it('will save and return the log object', sinon.test(function (done) {
        let logCode = new Log({code: '500'})
        this.stub(logCode, 'save').resolves(logCode)

        logService.saveLog(logCode).then(result => {
          expect(result).to.have.property('code', '500')
          expect(logCode.save.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })
  })
})
