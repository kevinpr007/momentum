const httpMocks = require('node-mocks-http')
const HttpStatus = require('http-status-codes')

describe.skip('Application entity requests', () => {
  let Aplication = require('../../src/models/application.model')
  let appController = require('../../src/controllers/application.controller')
  let appService, req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    })
    appService = require('../../src/services/application.service')
  })

  describe('Given a request to register a new application', () => {
    context('when leaving required fields empty', () => {
      it('will return a Bad Request Error (400)', sinon.test(function (done) {
        done()
      }))
    })

    context('when providing a valid request', () => {
      it('returns Created (201) with application object', sinon.test(function (done) {
        done()
      }))
    })
  })
})
