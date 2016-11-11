let Log = require('../../src/models/logs.server.model')

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

    context('when passing an entity', () => {
      it.only('will generate the related links for that particular entity', sinon.test(function (done) {
        let entity = new Log({code: '200'})

        let hl = new Hypermedia(req)
        let next = args => done(args)

        entity = hl.setResponse(entity, next)

        expect(entity).to.be.instanceof(Log)
        expect(entity._doc).to.have.property('links')
        done()
      }))
    })
  })
})
