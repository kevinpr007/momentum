describe('User service tests', () => {
  let User = require('../../src/models/user.model')
  let userService = require('../../src/services/user.service')()

  describe('Given a request to User resource', () => {
    context('when requesting a user by email', () => {
      it('will return user by specified email', sinon.test(function (done) {
        let findOne = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(new User())
          }
        }

        this.stub(User, 'findOne').returns(findOne)

        userService.getByEmail('ivan@dev.com').then(user => {
          expect(User.findOne.calledOnce).to.equal(true)
          assert.notEqual(user, null)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting a user by Id', () => {
      it('will return user by specified Id', sinon.test(function (done) {
        let findOne = {
          where () {
            return this
          },
          exec () {
            return Promise.resolve(new User())
          }
        }
        this.stub(User, 'findOne').returns(findOne)

        userService.getById('000-1234').then(user => {
          expect(User.findOne.calledOnce).to.equal(true)
          assert.notEqual(user, null)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting all users', () => {
      it('will return all existing users', sinon.test(function (done) {
        let users = [new User(), new User()]
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
          select () {
            return this
          },
          exec () {
            return Promise.resolve(users)
          }
        }
        let count = {
          exec () {
            return Promise.resolve(10)
          }
        }

        this.stub(User, 'find').returns(find)
        this.stub(User, 'count').returns(count)

        userService.getAll().then(users => {
          expect(User.find.calledOnce).to.equal(true)
          expect(User.count.calledOnce).to.equal(true)
          expect(users.length).to.equal(2)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting to register a new user', () => {
      it('will create a new user', sinon.test(function (done) {
        let user = new User()
        this.stub(User, 'create').resolves(user)

        userService.registerUser(user).then(() => {
          expect(User.create.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })

    context('when requesting to insert / update a user', () => {
      it("will create a new user if it doesn't exist", sinon.test(function (done) {
        let user = new User()
        this.stub(user, 'save').resolves(user)

        userService.upsertUser(user).then(() => {
          expect(user.save.calledOnce).to.equal(true)
          done()
        }).catch(err => done(err))
      }))
    })
  })
})
