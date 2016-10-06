const request = require('supertest')
const mockgoose = require('./config/mockgoose')()

let app = require('../src/config/express')()

describe('Navigating to index page', () => {
  before(() => {
    mockgoose.connect()
  })

  describe('Given a user that goes to the index route (GET /)', () => {
    it('returns the home page', (done) => {
      request(app).get('/')
          .expect('Content-Type', 'text/html; charset=utf-8')
          .expect(200, done)
    })
  })
})