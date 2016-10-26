const httpMocks = require('node-mocks-http')
const express = require('express')

describe('Index requests', () => {
  let indexController = require('../../src/controllers/index.controller')
  let req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    })
  })

  describe('Given a user that goes to the index route (GET /)', () => {
    it('returns the home page', done => {
      templateModel = {}
      req.method = 'GET'
      req.url = '/'

      indexController(templateModel).index(req, res)

      expect(res.statusCode).to.equal(200)
      done()
    })
  })
})
