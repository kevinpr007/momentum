describe('Logs schema validation tests', () => {
  let Log = require('../../src/models/logs.server.model.js')

  describe('Given a Log instance', () => {
    context('when using getError() function', () => {
      it('will return CODE - STATUS - MESSAGE', (done) => {
        let log = new Log({
          code: '400',
          status: 'error',
          message: 'Not Found'
        })

        expect(log.getError).to.be.equal('400 - error - Not Found')
        done()
      })
    })
  })
})
