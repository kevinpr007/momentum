const httpMocks = require('node-mocks-http')
const HttpStatus = require('http-status-codes')

describe('Application Type entity requests', () => {
  let AppType = require('../../src/models/application-type.model')
  let appTypeController = require('../../src/controllers/application-type.controller')

  let appTypeService, req, res

  beforeEach(() => {
    req = httpMocks.createRequest()
    res = setPagedJson(req, httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    }))
    appTypeService = require('../../src/services/application-type.service')
  })

  describe('Given a request to Application Type resource', () => {
    context('when requesting to retrieve all application type', () => {
      it('returns Ok (200) with json array with valid arguments', sinon.test(function (done) {
        let TotalCount = 100
        let result = [TotalCount, [new AppType(), new AppType()]]
        req.method = 'GET'
        req.url = '/api/application-type'
        req.query.page = 2
        req.query.pageSize = 2
        let next = args => done(args)

        appTypeService = this.stub(appTypeService())
        appTypeService.getAll.resolves(result)

        appTypeController(appTypeService).getAllApplicationTypes(req, res, next)

        res.on('end', () => {
          let result = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(result.data.length).to.equal(2)
          assert.isTrue(appTypeService.getAll.calledOnce)
          done()
        })
      }))
    })

    context('when requesting a application type by ID', () => {
      it('returns Not Found (404) providing a non-existing application type', sinon.test(function (done) {
        req.method = 'GET'
        req.url = '/api/application-type/:id'
        req.params = {
          id: 'AppType-ID-12345'
        }

        appTypeService = this.stub(appTypeService())
        appTypeService.getById.resolves(null)

        appTypeController(appTypeService).getByApplicationType(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.NOT_FOUND)
            assert.isTrue(appTypeService.getById.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))

      it('returns Ok (200) with json containing application type providing a valid id', sinon.test(function (done) {
        let appName = 'App-Name'
        let appType = new AppType({
          name: appName
        })
        req.method = 'GET'
        req.url = '/api/application-type/:id'
        req.params = {
          id: appName
        }

        let next = args => done(args)

        appTypeService = this.stub(appTypeService())
        appTypeService.getById.resolves(appType)

        appTypeController(appTypeService).getByApplicationType(req, res, next)

        res.on('end', () => {
          let data = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(data).to.have.property('name', appType.name)
          expect(data.name).to.be.equal(appType.name)
          assert.isTrue(appTypeService.getById.calledOnce)
          done()
        })
      }))
    })

    context('when requesting to create an application type', () => {
      it('returns Ok (200) with the json result', sinon.test(function (done) {
        let appName = 'App-Name'
        let appType = new AppType({
          name: appName
        })
        req.method = 'POST'
        req.url = '/api/application-type'
        req.body = {
          name: appName
        }

        let next = args => done(args)

        appTypeService = this.stub(appTypeService())
        appTypeService.create.resolves(appType)

        appTypeController(appTypeService).setApplicationType(req, res, next)

        res.on('end', () => {
          let result = JSON.parse(res._getData())
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(result).to.not.equal(null)
          assert.isTrue(appTypeService.create.calledOnce)
          done()
        })
      }))
    })

    context('when requesting to update an application type', () => {
      it('returns Not Found (404)', sinon.test(function (done) {
        let appName = 'App-Name'
        let appNameEdit = 'Edited'
        let appType = new AppType({
          name: appName
        })
        req.method = 'PUT'
        req.url = '/api/application-type/:id'
        req.params = {
          id: appType.id
        }
        req.body = {
          name: appNameEdit
        }

        appTypeService = this.stub(appTypeService())
        appTypeService.getById.resolves(null)

        appTypeController(appTypeService).updateApplicationType(req, res, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.NOT_FOUND)
            assert.isTrue(appTypeService.getById.calledOnce)
            done()
          } catch (err) {
            done(err)
          }
        }
      }))

      it('returns OK(200) and update the application type', sinon.test(function (done) {
        let appName = 'App-Name'
        let appNameEdit = 'Edited'
        let appType = new AppType({
          name: appName
        })
        req.method = 'PUT'
        req.url = '/api/application-type/:id'
        req.params = {
          id: appType.id
        }
        req.body = {
          name: appNameEdit
        }

        let next = args => done(args)

        appTypeService = this.stub(appTypeService())
        appTypeService.getById.resolves(appType)
        appTypeService.update.resolves(null)

        appTypeController(appTypeService).updateApplicationType(req, res, next)

        res.on('end', () => {
          let result = res._getData()
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(result).to.equal('')
          assert.isTrue(appTypeService.update.calledOnce)
          done()
        })
      }))
    })

    context('when requesting to delete an application type', () => {
      it('returns OK(200)', sinon.test(function (done) {
        let appName = 'App-Name'
        let appType = new AppType({
          name: appName
        })
        req.method = 'DELETE'
        req.url = '/api/application-type/:id'
        req.params = {
          id: appType.id
        }

        let next = args => done(args)

        appTypeService = this.stub(appTypeService())
        appTypeService._delete.resolves(null)

        appTypeController(appTypeService).deleteApplicationType(req, res, next)

        res.on('end', () => {
          let result = res._getData()
          expect(res.statusCode).to.equal(HttpStatus.OK)
          expect(result).to.equal('')
          assert.isTrue(appTypeService._delete.calledOnce)
          done()
        })
      }))
    })
  })
})
