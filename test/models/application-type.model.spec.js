const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

describe('Application Type schema validation tests', () => {
  let AppType = require('../../src/models/application-type.model')

  describe('Given a Application Type instance', () => {
    context('when name is present', () => {
      it('will save and return no error', sinon.test(function (done) {
        let name = 'App-Type-Name'
        let appType = new AppType({
          name: name
        })

        appType.save()
        appType.validate().then(args => {
          expect(args).to.be.equal(undefined)
          done()
        })
      }))
    })

    context('when name is empty', () => {
      it('will throw an error', sinon.test(function (done) {
        let appType = new AppType()

        appType.save().catch(err => {
          expect(err.errors).to.have.property('name')
          done()
        })
      }))
    })
  })
})
