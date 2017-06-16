describe('Environment variables test', () => {
  beforeEach(() => {
    process.env.NODE_ENV = null
  })

  describe('Given an environment setup', () => {
    context('when passing "development" as value', () => {
      it('will set NODE_ENV to "development"', sinon.test(function (done) {
        process.env.NODE_ENV = 'development'
        let envVariable = require('../../src/config/config')

        expect(envVariable.NODE_ENV).to.equal(process.env.NODE_ENV)
        done()
      }))
    })
  })
})
