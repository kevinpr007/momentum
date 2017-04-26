const mongoose = require('mongoose')
const Promise = require('bluebird')
const moment = require('moment')
mongoose.Promise = Promise
const faker = require('faker')

const scheduleType = require('../src/models/schedule-types.enum')
const User = require('../src/models/user.model')
const ApplicationType = require('../src/models/application-type.model')
const Application = require('../src/models/application.model')
const Location = require('../src/models/location.model')
const Workshift = require('../src/models/workshift.model')
const Service = require('../src/models/service.model')
const Schedule = require('../src/models/schedule.model')

require('../src/config/mongoose')()

/**
 * Data-generating functions
 */
function createAppType (name) {
  return ApplicationType
    .create(new ApplicationType({ name}))
}

function createApplication (appTypeId, name) {
  return Application
    .create(new Application({ name, appTypeId}))
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
    createdBy: userId,
    userId
  }))
}

function createSchedule (userId, serviceId, workshiftId, locationId) {
  return Schedule.create(new Schedule({
    startDate: moment(),
    endDate: moment().add(1, 'h'),
    other: 'Other Info',
    userId: userId,
    scheduleType: scheduleType[Math.floor(Math.random() * scheduleType.length)], // randomly select item from array ,
    serviceId: serviceId,
    workshiftId: workshiftId,
    locationId: locationId,
    createdBy: userId
  }))
}

/**
 * Program flow
 */
let appTypeSalon,
  appTypeLandscaping,
  applicationSalon,
  applicationLandScaping,
  salonUser,
  salonAdmin,
  landScapingUser,
  landScapingAdmin,
  location,
  workshift

function setupEnv () {
  return Promise.all([
    ApplicationType.remove({}),
    Application.remove({}),
    User.remove({}),
    Location.remove({}),
    Workshift.remove({}),
    Service.remove({}),
    Schedule.remove({})
  ])
}

function seed () {
  return createAppType('Salon').then(data => {
    appTypeSalon = data
    return createAppType('Landscaping')
  }).then((data) => {
    appTypeLandscaping = data
    return createApplication(appTypeSalon.id, 'Beauty Salon')
  }).then((data) => {
    applicationSalon = data
    return createApplication(appTypeLandscaping.id, 'The Show Land Scaping')
  }).then((data) => {
    applicationLandscaping = data
  }).then(() => {
    return Promise.all([
      createUser([{
        name: 'Employee',
        appId: applicationSalon.id
      }, {
        name: 'Admin',
        appId: applicationSalon.id
      }]),
      createUser([{
        name: 'User',
        appId: applicationSalon.id
      }]),
      createUser([{
        name: 'Employee',
        appId: applicationLandscaping.id
      }, {
        name: 'Admin',
        appId: applicationLandscaping.id
      }]),
      createUser([{
        name: 'User',
        appId: applicationLandscaping.id
      }])
    ])
  }).then((data) => {
    salonAdmin = data[0]
    salonUser = data[1]

    landScapingAdmin = data[3]
    landScapingUser = data[4]
  })
}

function runQueries () {
  // Retrieve all users with Admin role
  return User.find({ 'roles.name': 'Admin' }).exec()
    .then(users => {
      console.log(`Admin users: ${users}`)
    })

  // Retrieve all Applications with their ApplicationType related ordered by application name ascending

  // Retrieve all ApplicationTypes related to the Applications ordered by applicationType ascending

  // Retrieve all logs related to an specific application ordered by createdDate descending

  // Retrieve all users in the system ordered by name

  // Retrieve all users in the system related to an specific application ordered by name

  // Retrieve all user with the Admin role for a specific application ordered by the name of the user

  // Retrieve all workshift related to all users for an specific application ordered by application name and the name of the user and the schedule time ascending

  // Retrieve all workshift related to an specific user for a specific application ordered by schedule time ascending

  // Retrieve all services by all users for an specific application ordered by the name of the user and service name

  // Retrieve all services by an user for an specific application ordered by the name of the user and service name

  // Retrieve all schedule by all users for an specific application ordered by schedule time ascending

  // Retrieve all schedule by an user for an specific application ordered by schedule time ascending
}

setupEnv().then(() => {
  console.log('All collections removed.')
  return seed()
}).then(() => {
  console.log('All collections set.')
  return runQueries()
}).then(process.exit)
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
