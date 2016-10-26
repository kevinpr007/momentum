describe('Environment variables test', () => {

  beforeEach(() => {
    process.env.NODE_ENV = null
  })

  describe('Given an environment variable', () => {
    it('development variable', sinon.test(function (done) {
      process.env.NODE_ENV = 'development'
      let envVariable = require('../../src/config/config')()
      envVariable.setVariable(process.env.NODE_ENV)

      let result = envVariable.getVariable()

      expect(result.NODE_ENV).to.equal(process.env.NODE_ENV)
      done()
    }))

    it('staging variable', sinon.test(function (done) {
      process.env.NODE_ENV = 'staging'
      let envVariable = require('../../src/config/config')()
      envVariable.setVariable(process.env.NODE_ENV)

      let result = envVariable.getVariable()

      expect(result.NODE_ENV).to.equal(process.env.NODE_ENV)
      done()
    }))

    it('unknown variable', sinon.test(function (done) {
      process.env.NODE_ENV = 'unknown'
      let envVariable = require('../../src/config/config')()

      try {
        envVariable.setVariable(process.env.NODE_ENV)
      } catch (args) {
        expect(args).to.be.a('Error')
        expect(args.message).to.contain('Error setting the environment')
        done()
      }
    }))
  })
})
