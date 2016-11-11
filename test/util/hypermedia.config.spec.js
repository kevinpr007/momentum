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
      it.only('will generate the related links for that particular records', sinon.test(function (done) {
        let entity = {
          data: [
            new Log({code: '200'}),
            new Log({code: '200'})
          ]
        }

        let hl = new Hypermedia(req)
        let next = args => done(args)

        entity = hl.setResponse(entity, next)

        expect(entity.data).to.be.instanceof(Array)
        expect(entity.data).to.have.length(2)
        expect(entity.data[0]._doc).to.have.property('links')
        done()
      }))
    })
  })
})
