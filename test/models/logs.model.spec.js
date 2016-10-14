describe('Logs schema validation tests', () => {
  describe('Given a Logs model', () => {
    let LogModel = require('../../src/models/logs.server.model.js')

    it('Using the getError() function should return CODE - STATUS - MESSAGE', (done) => {
      let log = new LogModel({
        code: "400",
        status: "error",
        message: "Not Found"
      })

      expect(log.getError).to.be.equal('400 - error - Not Found')
      done()
    })
  })
})
