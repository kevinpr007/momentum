const mongoose = require('mongoose')
const Promise = require('bluebird')
mongoose.Promise = Promise

const User = require('../src/models/user.model')
const ApplicationType = require('../src/models/application-type.model')

require('../src/config/mongoose')()

function createAppType () {
  return ApplicationType.create(new ApplicationType({
    name: 'Testing Design'
  }))
}

function createClient () {
  return User.create(new User({
    firstName: 'Juan',
    lastName: 'Del Pueblo',
    email: 'client@designTest.com',
    password: 'ABcd1234',
    roles: ['User'],
    address: {
      address1: 'St. 123',
      city: 'San Juan',
      state: 'P.R.',
      zipCode: '00123'
    }
  }))
}

function createEmployee () {
  return User.create(new User({
    firstName: 'Elba',
    lastName: 'Calado',
    email: 'employee@designTest.com',
    password: 'ABcd1234',
    roles: ['Employee'],
    address: {
      address1: 'St. 123',
      city: 'San Juan',
      state: 'P.R.',
      zipCode: '00123'
    }
  }))
}

Promise.all([
  createAppType(),
  createClient(),
  createEmployee()
]).then(data => {
  console.log(data)
  process.exit()
}).catch(err => {
  console.log(err)
})
