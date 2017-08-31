describe('Application Type service tests', () => {
  let AppType = require('../../src/models/application-type.model')
  let appTypeService = require('../../src/services/application-type.service')()

  describe('Given a request to Application Type resource', () => {
    context('when requesting an application type by Id', () => {
      it('will return application type by specified Id', sinon.test(function (done) {
        let findOne = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(new AppType({ name: 'nameApp' }))
          }
        }
        this.stub(AppType, 'findOne').returns(findOne)

        appTypeService.getById('000-1234').then(appType => {
          expect(AppType.findOne.calledOnce).to.equal(true)
          assert.notEqual(appType, null)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting all application types', () => {
      it('will return all existing application types', sinon.test(function (done) {
        let appTypes = [new AppType(), new AppType()]
        let find = {
          sort () {
            return this
          },
          skip () {
            return this
          },
          limit () {
            return this
          },
          find () {
            return this
          },
          exec () {
            return Promise.resolve(appTypes)
          }
        }
        let count = {
          exec () {
            return Promise.resolve(10)
          }
        }

        this.stub(AppType, 'find').returns(find)
        this.stub(AppType, 'count').returns(count)

        appTypeService.getAll().then(appTypes => {
          expect(AppType.find.calledOnce).to.equal(true)
          expect(AppType.count.calledOnce).to.equal(true)
          expect(appTypes.length).to.equal(2)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting to create a new application Type', () => {
      it('will create a new application Type', sinon.test(function (done) {
        let appType = new AppType()
        this.stub(AppType, 'create').resolves(appType)

        appTypeService.create(appType).then((result) => {
          expect(AppType.create.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting to update an application type', () => {
      it('will update an application type', sinon.test(function (done) {
        let appType = new AppType({ name: 'Original' })
        let obj = { name: 'Updated' }

        this.stub(appType, 'save').returns(null)

        appTypeService.update(appType, obj)
        expect(appType.save.calledOnce).to.equal(true)
        expect(appType.name).to.equal(obj.name)
        done()
      }))
    })

    context('when requesting to delete an application type', () => {
      it('will delete an application type', sinon.test(function (done) {
        let appType = new AppType()

        let remove = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(appType)
          }
        }
        this.stub(AppType, 'remove').returns(remove)

        appTypeService.delet('appType-ID-01234').then(() => {
          expect(AppType.remove.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })
  })
})
