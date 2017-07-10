describe('page validations tests', () => {
  const pageValidations = require('../../src/middleware/page-validations')

  describe('Given a request with pagination params', () => {
    context('when passing valid page / pageSize params', () => {
      it('will call next() with no errors', sinon.test(function (done) {
        let req = {
          query: {
            page: 1,
            pageSize: 10
          }
        }

        let spy = this.spy(next)
        pageValidations(req, null, spy)

        function next () {
          assert.isTrue(spy.calledOnce)
          expect(spy.args[0].length).to.equal(0)
          done()
        }
      }))
    })

    context('when requesting without params', () => {
      it('will call next() with default values', sinon.test(function (done) {
        let req = { query: { } }

        let spy = this.spy(next)
        pageValidations(req, null, spy)

        function next () {
          assert.isTrue(spy.calledOnce)
          expect(req.query).to.have.property('page', 0)
          expect(req.query).to.have.property('pageSize', parseInt(config.PAGE_SIZE))
          done()
        }
      }))
    })

    context('when passing invalid page param', () => {
      it('will call next with a Bad Request (400) error', sinon.test(function (done) {
        let req = {
          query: {
            page: 'one'
          }
        }

        let spy = this.spy(next)
        pageValidations(req, null, spy)

        function next () {
          assert.isTrue(spy.calledOnce)
          expect(spy.args[0].length).to.equal(1)
          assert.isTrue(spy.args[0][0] instanceof Error)
          done()
        }
      }))
    })

    context('when passing invalid pageSize param', () => {
      it('will call next with a Bad Request (400) error', sinon.test(function (done) {
        let req = {
          query: {
            pageSize: 'ten'
          }
        }

        let spy = this.spy(next)
        pageValidations(req, null, spy)

        function next () {
          assert.isTrue(spy.calledOnce)
          expect(spy.args[0].length).to.equal(1)
          assert.isTrue(spy.args[0][0] instanceof Error)
          done()
        }
      }))
    })
  })
})
