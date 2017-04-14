const mongoose = require('mongoose')
const Promise = require('bluebird')
mongoose.Promise = Promise
const faker = require('Faker')

const User = require('../src/models/user.model')
const Role = require('../src/models/role.model')
const ApplicationType = require('../src/models/application-type.model')
const Application = require('../src/models/application.model')

require('../src/config/mongoose')()

/**
 * Data-generating functions
 */
function createAppType () {
  return ApplicationType.create(new ApplicationType({
    name: faker.Lorem.words(1)
  }))
}

function createApplication (appTypeId) {
  return Application.create(new Application({
    name: faker.Company.companyName(),
    appTypeId
  }))
}

function createRole (name, appId) {
  return Role.create(new Role({name, appId}))
}

function createUser (roleId) {
  return User.create(new User({
    firstName: faker.Name.firstName(),
    lastName: faker.Name.lastName(),
    email: faker.Internet.email(),
    password: 'ABcd1234',
    roles: [{roleId}],
    address: {
      address1: faker.Address.streetAddress(),
      city: faker.Address.city(),
      state: faker.Address.usState(),
      zipCode: faker.Address.zipCode()
    }
  }))
}

/**
 * Program flow
 */
createAppType()
  .then(appType => createApplication(appType.id))
  .then(app => Promise.all([
    createRole('User', app.id),
    createRole('Employee', app.id)
  ]))
  .then(roles => Promise.map(roles, role => createUser(role.id)))
  .then(data => {
    console.log(data)
    process.exit()
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
