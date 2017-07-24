describe('authorize middleware tests', () => {
  let User = require('../../src/models/user.model')
  let authorize = require('../../src/middlewares/authorize')

  describe('Given an authentication request', () => {
    context('when requesting an action that requires an authorization role', () => {
      it('will be authorized to proceed with the request when user has proper role', sinon.test(function (done) {
        let roles = [{ name: 'Admin' }, { name: 'sysAdmin' }]
        let req = {
          user: new User({
            roles: [{ name: 'Admin' }]
          })
        }

        let spy = this.spy(next)
        authorize(roles)(req, null, spy)

        function next () {
          assert.isTrue(spy.calledOnce)
          done()
        }
      }))

      it('will generate an Unauthorized (401) error when user has an invalid role', sinon.test(function (done) {
        let roles = [{ name: 'sysAdmin' }]
        let req = {
          user: new User({
            roles: [{ name: 'Admin' }]
          })
        }

        try {
          authorize(roles)(req)
        } catch (err) {
          expect(err).to.be.an('Error')
          expect(err).to.have.property('status', 401)
          done()
        }
      }))
    })
  })
})
