const request = require('supertest-as-promised')

describe('Index requests', () => {
  describe('Given a user that goes to the index route (GET /)', () => {
    it('returns the home page', () => {
      return request(app).get('/')
          .expect('Content-Type', 'text/html; charset=utf-8')
          .expect(200)
    })
  })
})
