const httpMocks = require('node-mocks-http')
const HttpStatus = require('http-status-codes')

describe('Index requests', () => {
  let indexController = require('../../src/controllers/index.controller')
  let req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    })
  })

  describe('Given a request to StylePoint API', () => {
    context('when requesting root url', () => {
      it('returns the home page', done => {
        let templateModel = {}
        req.method = 'GET'
        req.url = '/'

        indexController(templateModel).index(req, res)

        expect(res.statusCode).to.equal(HttpStatus.OK)
        done()
      })
    })
  })
})
