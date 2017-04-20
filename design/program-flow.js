const mongoose = require('mongoose')
const Promise = require('bluebird')
const moment = require('moment')
mongoose.Promise = Promise
const faker = require('faker')

const days = require('../src/models/days.enum')
const User = require('../src/models/user.model')
const ApplicationType = require('../src/models/application-type.model')
const Application = require('../src/models/application.model')
const Location = require('../src/models/location.model')
const Workshift = require('../src/models/workshift.model')

require('../src/config/mongoose')()

/**
 * Data-generating functions
 */
function createAppType () {
  return ApplicationType.create(new ApplicationType({
    name: faker.lorem.words(1)
  }))
}

function createApplication (appTypeId) {
  return Application.create(new Application({
    name: faker.company.companyName(),
    appTypeId
  }))
}

function createUser (roles = []) {
  return User.create(new User({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'ABcd1234',
    roles: [...roles],
    address: {
      address1: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode()
    }
  }))
}

function createLocation (createdBy, appId) {
  return Location.create(new Location({
    name: faker.company.companyName(),
    address: {
      address1: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode()
    },
    appId,
    createdBy
  }))
}

function createWorkshift (userId) {
  return Workshift.create(new Workshift({
    startDate: moment(),
    endDate: moment().add(1, 'h'),
    day: days[Math.floor(Math.random() * days.length)], // randomly select item from array
    createdBy: userId,
    userId
  }))
}

/**
 * Program flow
 */
createAppType()
  .then(appType => createApplication(appType.id))
  .then(app => Promise.all([
    createUser([{
      name: 'Employee',
      appId: app.id
    }, {
      name: 'Admin',
      appId: app.id
    }]),
    createUser([{
      name: 'User',
      appId: app.id
    }])
  ]))
  .then(data => {
    let admin = data[0]
    return Promise.all([
      createLocation(admin.id, admin.roles[0].appId),
      createWorkshift(admin.id)
    ])
  })
  .then(data => {
    console.log(data)
    process.exit()
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
