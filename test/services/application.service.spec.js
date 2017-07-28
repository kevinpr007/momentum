describe('Application service tests', () => {
  const Application = require('../../src/models/application.model')
  const appService = require('../../src/services/application.service')()

  describe('Given a request to Application resource', () => {
    context('when requesting an application by id', () => {
      it('will return an application by specified id', sinon.test(function (done) {
        let findOne = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(new Application())
          }
        }

        this.stub(Application, 'findOne').returns(findOne)

        appService.getById('000-1234').then(app => {
          expect(Application.findOne.calledOnce).to.equal(true)
          assert.notEqual(app, null)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting to register a new application', () => {
      it.skip('will create a new application', sinon.test(function (done) {
        let app = new Application()
        this.stub(Application, 'create').resolves(app)

        appService.registerApp(app).then(() => {
          expect(Application.create.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })
  })
})
