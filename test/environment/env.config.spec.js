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

    context('when passing "staging" as value', () => {
      it('will set NODE_ENV to "staging"', sinon.test(function (done) {
        process.env.NODE_ENV = 'staging'
        clearModule('../../src/config/config')
        let envVariable = require('../../src/config/config')

        expect(envVariable.NODE_ENV).to.equal(process.env.NODE_ENV)
        done()
      }))
    })

    context('when passing a null or unknown value', () => {
      it('will throw an error', sinon.test(function (done) {
        process.env.NODE_ENV = 'unknown'

        try {
          clearModule('../../src/config/config')
          require('../../src/config/config')
        } catch (args) {
          expect(args).to.be.a('Error')
          expect(args.message).to.contain('Error setting the environment')
          done()
        }
      }))
    })
  })
})
