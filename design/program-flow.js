const mongoose = require('mongoose')
const Promise = require('bluebird')
const moment = require('moment')
mongoose.Promise = Promise
const faker = require('faker')

const User = require('../src/models/user.model')
const ApplicationType = require('../src/models/application-type.model')
const Application = require('../src/models/application.model')
const Location = require('../src/models/location.model')
const Workshift = require('../src/models/workshift.model')
const Service = require('../src/models/service.model')

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
    createdBy: userId,
    userId
  }))
}

function createService (userId) {
  return Service.create(new Service({
    name: faker.name.firstName(),
    description: faker.name.description,
    price: faker.random.number(),
    time: 30,
    user: userId,
    createdBy: userId,
    userId
  }))
}

/**
 * Program flow
 */

let user,
  admin,
  location,
  workshift,
  service

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
    admin = data[0]
    user = data[1]

    return Promise.all([
      createLocation(admin.id, admin.roles[0].appId),
      createWorkshift(admin.id)
    ])
  })
  .then(data => {
    location = data[0]
    workshift = data[1]

    return createService(admin.id)
  })
  .then(data => {
    service = data[0]

    console.log(user)
    console.log(admin)
    console.log(location)
    console.log(workshift)
    console.log(service)

    process.exit()
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
