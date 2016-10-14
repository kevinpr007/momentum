describe('Log service tests', () => {
    let Log = require('../../src/models/logs.server.model')
    let logService = require('../../src/services/log.service')()

    const ERROR_CODE = '404'
    const STATUS = 'Status Desc'
    const MESSAGE = 'Error Message'

    describe('Given a Code of an existing log', () => {

      let log = new Log({
          code: ERROR_CODE,
          status: STATUS,
          Messages: MESSAGE
      })

        it('will return a log models by a specified Code', sinon.test(function (done) {
            let logMock = sinon.mock(Log)

            logMock.expects('find').chain('where')
                .withArgs('code', log.code)
                .chain('exec').resolves(log)

            logService.getByCode(ERROR_CODE).then(result => {
                logMock.verify()
                assert.notEqual(result, null)
                expect(result).to.have.property('_id')
                expect(result.code).to.be.equal(ERROR_CODE)
                done()
            }).catch(err => done(err))
        }))
    })

    describe('Given a Status of an existing log', () => {

      let log = new Log({
          code: ERROR_CODE,
          status: STATUS,
          Messages: MESSAGE
      })

        it('will return a log models by a specified Status', sinon.test(function (done) {
            let logMock = sinon.mock(Log)

            logMock.expects('find').chain('where')
                .withArgs('status', log.status)
                .chain('exec').resolves(log)

            logService.getByStatus(STATUS).then(result => {
                logMock.verify()
                assert.notEqual(result, null)
                expect(result).to.have.property('_id')
                expect(result.status).to.be.equal(STATUS)
                done()
            }).catch(err => done(err))
        }))
    })

    describe('Using the getAll function', () => {

      let log = new Log({
          code: ERROR_CODE,
          status: STATUS,
          Messages: MESSAGE
      })

        it('will return a list of all logs', sinon.test(function (done) {
            let logMock = sinon.mock(Log)

            let log2 = new Log({
                code: '500',
                status: '500 Status',
                Messages: '500 Message'
            })

            let logList = [log, log2]

            logMock.expects('find')
                .chain('exec').resolves(logList)

            logService.getAll().then(result => {
                logMock.verify()
                assert.notEqual(result, null)
                expect(result).to.be.a('Array')
                assert.equal(result.length, 2)
                expect(result[0]).to.have.property('_id')
                expect(result[1].code).to.be.equal('500')
                done()
            }).catch(err => done(err))
        }))
    })

    describe('Given a log information', () => {

      let plainLog = {
        code: ERROR_CODE,
        status: STATUS,
        Messages: MESSAGE
      }

      let log = new Log({
          code: ERROR_CODE,
          status: STATUS,
          Messages: MESSAGE
      })

        it('will save and return the log object', sinon.test(function (done) {

            this.stub(Log.prototype, 'save').yields(null, log)

            logService.saveLog(plainLog).then(result => {
                expect(Log.prototype.save.callCount).to.equal(1);
                expect(result.code).to.be.equal(plainLog.code)
                expect(result.message).to.be.equal(plainLog.message)
                expect(result.status).to.be.equal(plainLog.status)
                expect(result).to.have.property('_id')
                done()
            }).catch(err => done(err))
        }))
    })
})
