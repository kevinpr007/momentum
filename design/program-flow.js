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
    userId: userId,
    createdBy: userId
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
let user,
  admin,
  location,
  workshift

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
  .then(data => createSchedule(user.id, data.id, workshift.id, location.id))
  .then(runQueries)
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

/**
 * Queries
 */
function runQueries () {
  // Users with Admin role
  User.find({'roles.name': 'Admin'}).exec()
    .then(users => {
      console.log(`Admin users: ${users}`)
      process.exit()
    })




//Give me all Applications with their ApplicationType related ordered by application name ascending

//Give me all ApplicationTypes related to the Applications ordered by applicationType ascending

//Give me all logs related to an specific application ordered by createdDate descending

//Give me all users in the system ordered by name

//Give me all users in the system related to an specific application ordered by name

//Give me all user with the Admin role for a specific application ordered by the name of the user

//Give me all workshift related to all users for an specific application ordered by application name and the name of the user and the schedule time ascending 

//Give me all workshift related to an specific user for a specific application ordered by schedule time ascending 

//Give me all services by all users for an specific application ordered by the name of the user and service name

//Give me all services by an user for an specific application ordered by the name of the user and service name

//Give me all schedule by all users for an specific application ordered by schedule time ascending

//Give me all schedule by an user for an specific application ordered by schedule time ascending 


}
