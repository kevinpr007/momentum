let Log = require('../../src/models/logs.model')
const HttpStatus = require('http-status-codes')

describe('Hypermedia tests', () => {
  const Hypermedia = require('../../src/util/hypermedia/hypermedia.config')
  const req = {
    protocol: 'http://localhost',
    headers: {
      host: '8080'
    }
  }

  describe('Given a base information to set a hyperlink', () => {
    context('when passing a list of entities', () => {
      it('will generate the related links for that particular records', sinon.test(function (done) {
        let entities = {
          data: [
            new Log({code: '200'}),
            new Log({code: '200'})
          ]
        }

        let hl = new Hypermedia(req)
        let next = args => done(args)

        entities = hl.setResponse(entities, next)

        expect(entities.data).to.be.instanceof(Array)
        expect(entities.data).to.have.length(2)
        expect(entities.data[0]._doc).to.have.property('links')
        done()
      }))
    })

    context('when passing an empty list', () => {
      it('will return an empty array inside entity.data property', sinon.test(function (done) {
        let entities = {
          data: []
        }

        let hl = new Hypermedia(req)
        let next = args => done(args)

        entities = hl.setResponse(entities, next)

        expect(entities.data).to.be.instanceof(Array)
        expect(entities.data).to.have.length(0)
        done()
      }))
    })

    context('when passing an entity', () => {
      it('will generate the related links for that particular entity', sinon.test(function (done) {
        let entity = new Log({code: '200'})

        let hl = new Hypermedia(req)
        let next = args => done(args)

        entity = hl.setResponse(entity, next)

        expect(entity).to.be.instanceof(Log)
        expect(entity._doc).to.have.property('links')
        done()
      }))
    })

    context('when passing an entity that does not exist', () => {
      it('will thrown an exception', sinon.test(function (done) {
        let entity = new Log({code: '500'})
        entity.constructor.modelName = 'Invalid'

        let hl = new Hypermedia(req)

        entity = hl.setResponse(entity, next)

        function next (args) {
          try {
            expect(args).to.be.an('Error')
            expect(args.status).to.equal(HttpStatus.INTERNAL_SERVER_ERROR)
            expect(args.message).to.contains('Entity')
            done()
          } catch (err) {
            done(err)
          }
        }
      }))
    })
  })
})
