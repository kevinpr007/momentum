const Log = require('../../src/models/logs.server.model')
const HttpStatus = require('http-status-codes')
const httpMocks = require('node-mocks-http')

describe('Log controller test', () => {

    let req, res, logController, namespace

    beforeEach(() => {
        req = httpMocks.createRequest()
        res = httpMocks.createResponse({eventEmitter: require('events').EventEmitter})

        namespace = {
            mockLogService: require('../../src/services/log.service')
        }
    })

    afterEach(() => {
        req, res, logController, namespace = null
    })

    // /logs
    describe('Given a request to get all logs in the system', () => {
        it('it will returns an array of all logs in Database', sinon.test(function (done) {

            let logArray = [new Log({code: '200'}), new Log({code: '201'})]

            namespace = {
                mockLogService: require('../../src/services/log.service')
            }

            let methods = {
                getAll() {
                    return Promise.resolve(logArray)
                }
            }

            let next = (err) => {
                done(err)
            }

            sinon.stub(namespace, 'mockLogService').returns(methods)
            logController = require('../../src/controllers/log.controller')(namespace.mockLogService())

            res.on('end', function () {
                let data = JSON.parse(res._getData())
                res._isJSON().should.be.true
                expect(namespace.mockLogService.calledOnce).to.equal(true)
                expect(data.length).to.equal(2)
                expect(data[0].code).to.equal(logArray[0].code)
                expect(data[1].code).to.equal(logArray[1].code)
                done()
            })

            logController.getAllLogs(req, res, next)
        }))

        it('it will returns an error', sinon.test(function (done) {

            let errMessage = 'Internal Error Message'
            let err = new Error(errMessage)
            err.status = HttpStatus.INTERNAL_SERVER_ERROR

            let methods = {
                getAll() {
                    return Promise.reject(err)
                }
            }

            let next = (args) => {
                try {
                    expect(args).to.be.a('Error')
                    expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
                    expect(args.message).to.equal(errMessage)
                    done()
                } catch (err) {
                    done(err)
                }
            }

            sinon.stub(namespace, 'mockLogService').returns(methods)

            logController = require('../../src/controllers/log.controller')(namespace.mockLogService())
            logController.getAllLogs(req, res, next)
        }))
    })

    // /logs/code/:code
    describe('Given a request to get all logs by a code', () => {
        it('it will returns an array of all logs for that particular code', sinon.test(function (done) {
            let codeStr = '200'
            let logArray = new Log({code: codeStr})

            namespace = {
                mockLogService: require('../../src/services/log.service')
            }

            let methods = {
                getByCode(arg) {
                    return Promise.resolve(logArray)
                }
            }

            let next = (err) => {
                done(err)
            }

            req.params.code = codeStr

            sinon.stub(namespace, 'mockLogService').returns(methods)
            logController = require('../../src/controllers/log.controller')(namespace.mockLogService())

            res.on('end', function () {
                let data = JSON.parse(res._getData())
                res._isJSON().should.be.true
                expect(namespace.mockLogService.calledOnce).to.equal(true)
                expect(data.code).to.equal(codeStr)
                done()
            })

            logController.getByCode(req, res, next)
        }))

        it('it will returns an error', sinon.test(function (done) {

            let errMessage = 'Internal Error Message'
            let err = new Error(errMessage)
            err.status = HttpStatus.INTERNAL_SERVER_ERROR

            let methods = {
                getByCode(arg) {
                    return Promise.reject(err)
                }
            }

            let next = (args) => {
                try {
                    expect(args).to.be.a('Error')
                    expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
                    expect(args.message).to.equal(errMessage)
                    done()
                } catch (err) {
                    done(err)
                }
            }

            sinon.stub(namespace, 'mockLogService').returns(methods)

            logController = require('../../src/controllers/log.controller')(namespace.mockLogService())
            logController.getByCode(req, res, next)

        }))
    })

    // /logs/status/:status
    describe('Given a request to get all logs by a status', () => {
        it('it will returns an array of all logs for that particular status', sinon.test(function (done) {
            let codeStr = 'success'
            let logArray = new Log({status: codeStr})

            namespace = {
                mockLogService: require('../../src/services/log.service')
            }

            let methods = {
                getByStatus (arg) {
                    return Promise.resolve(logArray)
                }
            }

            let next = (err) => {
                done(err)
            }

            req.params.status = codeStr

            sinon.stub(namespace, 'mockLogService').returns(methods)
            logController = require('../../src/controllers/log.controller')(namespace.mockLogService())

            res.on('end', function () {
                let data = JSON.parse(res._getData())
                res._isJSON().should.be.true
                expect(namespace.mockLogService.calledOnce).to.equal(true)
                expect(data.status).to.equal(codeStr)
                done()
            })

            logController.getByStatus(req, res, next)
        }))

        it('it will returns an error', sinon.test(function (done) {

            let errMessage = 'Internal Error Message'
            let err = new Error(errMessage)
            err.status = HttpStatus.INTERNAL_SERVER_ERROR

            let methods = {
                getByStatus(arg) {
                    return Promise.reject(err)
                }
            }

            let next = (args) => {
                try {
                    expect(args).to.be.a('Error')
                    expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
                    expect(args.message).to.equal(errMessage)
                    done()
                } catch (err) {
                    done(err)
                }
            }

            sinon.stub(namespace, 'mockLogService').returns(methods)

            logController = require('../../src/controllers/log.controller')(namespace.mockLogService())
            logController.getByStatus(req, res, next)

        }))
    })
})
