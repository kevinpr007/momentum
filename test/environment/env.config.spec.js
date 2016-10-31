describe('Environment variables test', () => {
  beforeEach(() => {
    process.env.NODE_ENV = null
  })

  describe('Given an environment setup', () => {
    context('when passing "development" as value', () => {
      it('will set NODE_ENV to "development"', sinon.test(function (done) {
        process.env.NODE_ENV = 'development'
        let envVariable = require('../../src/config/config')()
        envVariable.setVariable(process.env.NODE_ENV)

        let result = envVariable.getVariable()

        expect(result.NODE_ENV).to.equal(process.env.NODE_ENV)
        done()
      }))
    })

    context('when passing "staging" as value', () => {
      it('will set NODE_ENV to "staging"', sinon.test(function (done) {
        process.env.NODE_ENV = 'staging'
        let envVariable = require('../../src/config/config')()
        envVariable.setVariable(process.env.NODE_ENV)

        let result = envVariable.getVariable()

        expect(result.NODE_ENV).to.equal(process.env.NODE_ENV)
        done()
      }))
    })

    context('when passing a null or unknown value', () => {
      it('will throw an error', sinon.test(function (done) {
        process.env.NODE_ENV = process.env.NODE_ENV || 'unknown'
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
})
