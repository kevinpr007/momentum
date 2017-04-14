const moment = require('moment')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const bcrypt = require('bcrypt-nodejs')

describe('User schema validation tests', () => {
  let User = require('../../src/models/user.model')

  describe('Given a user instance', () => {
    context('when password is not present', () => {
      it('will throw a validation error', done => {
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })
        user.validate().catch(err => {
          expect(err.errors).to.have.property('password')
          done()
        })
      })
    })

    context('when password is invalid', () => {
      it('will throw an error', sinon.test(function (done) {
        let passVar = 'Qwerty123'

        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: bcrypt.hashSync(passVar),
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })
        this.stub(bcrypt, 'compare').yields(new Error('Error Message'), null)
        user.isValidPassword(undefined).catch(err => {
          expect(err).to.be.an('Error')
          done()
        })
      }))
    })

    context('when address is not present', () => {
      it('will throw a validation error', done => {
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'juan@dev.com',
          password: 'Qwerty123'
        })
        user.validate().catch(err => {
          expect(err.errors).to.have.property('address.zipCode')
          expect(err.errors).to.have.property('address.state')
          expect(err.errors).to.have.property('address.city')
          expect(err.errors).to.have.property('address.address1')
          done()
        })
      })
    })

    context('when all required properties are included', () => {
      it('will pass all validations', done => {
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: 'Qwerty123',
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })
        user.validate().then(args => {
          expect(args).to.equal(undefined)
          done()
        }).catch(err => done(err))
      })
    })

    context('when a user set the email in UPPERCASE', () => {
      it('will automatically change it to lowercase', done => {
        let email = 'TEST@DEV.COM'

        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: email,
          password: 'Qwerty123',
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })

        user.save()

        expect(user.email).to.equal(email.toLowerCase())
        done()
      })
    })

    context('when password contains an invalid length', () => {
      it('will throw a validation error', done => {
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: 'Qwe'
        })
        user.validate().catch(err => {
          expect(err.errors).to.have.property('password')
          done()
        })
      })
    })

    context('when dob contains an invalid date of birth', () => {
      it('will throw a validation error', done => {
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: 'Qwerty123',
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          },
          dob: moment(new Date()).add(1, 'd')
        })
        user.validate().catch(err => {
          expect(err.errors).to.have.property('dob')
          done()
        })
      })
    })
  })

  describe('Given a saved user instance', () => {
    context('when passing all properties', () => {
      it('will return no error', sinon.test(function (done) {
        let password = 'Qwerty123'
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: password,
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })

        user.save()
        user.validate().then(args => {
          expect(args).to.be.equal(undefined)
          done()
        })
      }))
    })

    context('when generating salt for password fails', () => {
      it('will return a GenSalt error', sinon.test(function (done) {
        let password = 'Qwerty123'
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: password,
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })

        this.stub(bcrypt, 'genSalt').yields('Error GenSalt Message', null)
        user.save()
        user.validate(function (err) {
          expect(err).to.equal(null)
          expect(bcrypt.genSalt.calledOnce).to.equal(true)
          done()
        })
      }))
    })

    context('when generating hash for password fails', () => {
      it('will return a Hash error', sinon.test(function (done) {
        let password = 'Qwerty123'
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: password,
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })

        this.stub(bcrypt, 'hash').yields('Error Hash Message', null)
        user.save()
        user.validate(() => {
          expect(bcrypt.hash.calledOnce).to.equal(true)
          done()
        })
      }))

      it('will return a Hash error', sinon.test(function (done) {
        let password = 'Qwerty123'
        let user = new User({
          firstName: 'Juan',
          lastName: 'Del Pueblo',
          email: 'test@dev.com',
          password: password,
          address: {
            address1: '#123',
            address2: 'Test St.',
            city: 'San Juan',
            state: 'P.R.',
            zipCode: '00123-3322'
          }
        })

        this.stub(user, 'isModified').returns(false)
        user.save()
        user.validate(() => {
          expect(user.isModified.calledOnce).to.equal(true)
          done()
        })
      }))
    })
  })

  describe('Given a user requesting authentication', () => {
    context('when passing a valid password', () => {
      it('will return a fulfilled promise with value = true', done => {
        let user = new User({
          password: bcrypt.hashSync('Qwerty123')
        })
        user.isValidPassword('Qwerty123').then(result => {
          expect(result).to.equal(true)
          done()
        }).catch(err => done(err))
      })
    })

    context('when passing an invalid password', () => {
      it('will return a fulfilled promise with value = false', done => {
        let user = new User({
          password: bcrypt.hashSync('Qwerty123')
        })
        user.isValidPassword('Qwerty19q').then(result => {
          expect(result).to.equal(false)
          done()
        }).catch(err => done(err))
      })
    })
  })

  describe('Given a user changing his password', () => {
    context('when passing a valid password confirmation', () => {
      it('will return a fulfilled promise with value = true', done => {
        let password = null
        let confirmPassword = null
        let user = new User()
        password = 'qwerty12345'
        confirmPassword = 'qwerty12345'

        user.confirmPasswordValid(password, confirmPassword).then(result => {
          expect(result).to.equal(true)
          done()
        }).catch(err => done(err))
      })
    })

    context('when passing an invalid password confirmation', () => {
      it('will return a fulfilled promise with value = false', done => {
        let password = 'qwerty12345'
        let confirmPassword = 'changed'
        let user = new User()

        user.confirmPasswordValid(password, confirmPassword).then(result => {
          expect(result).to.equal(false)
          done()
        }).catch(err => done(err))
      })
    })

    context('when passing null values', () => {
      it('will return an error', sinon.test(function (done) {
        let password = null
        let confirmPassword = null
        let user = new User()

        user.confirmPasswordValid(password, confirmPassword).catch(err => {
          expect(err).to.be.an('Error')
          expect(err.message).to.contain('Password and Confirm Password')
          done()
        })
      }))
    })
  })
})
