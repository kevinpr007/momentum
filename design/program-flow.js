const mongoose = require('mongoose')
const Promise = require('bluebird')
const moment = require('moment')
const faker = require('faker')
const util = require('util')
mongoose.Promise = Promise

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
    .create(new ApplicationType({ name }))
}

function createApplication (appTypeId, name) {
  return Application
    .create(new Application({ name, appTypeId }))
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

/**
 * Helpers to pipe functions
 */
const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))
const pipe = (...fns) => fns.reduce(_pipe)

/**
 * Queries
 */
function runQueries () {
  return Promise.all([
    // Retrieve all users with Admin role
    User.find({ 'roles.name': 'Admin' }).exec(),
    // Retrieve all Applications with their related ApplicationType ordered by application name ascending
    Application.find({}).sort('name').populate('appTypeId').exec(),
    // Retrieve all users in the system ordered by last name
    User.find({}).sort('lastName').exec(),
    // Retrieve all ApplicationTypes with related Applications ordered by applicationType ascending
    ApplicationType.aggregate([
      {
        $sort: {
          name: 1
        }
      },
      {
        $lookup: {
          from: 'm_application',
          localField: '_id',
          foreignField: 'appTypeId',
          as: 'applications'
        }
      }
    ])
  ])

  // Retrieve all logs related to an specific application ordered by createdDate descending

  // Retrieve all users in the system related to an specific application ordered by name

  // Retrieve all users with the Admin role for a specific application ordered by the user name

  // Retrieve all workshift related to all users for an specific application ordered by application name and the name of the user and the schedule time ascending

  // Retrieve all workshift related to an specific user for a specific application ordered by schedule time ascending

  // Retrieve all services by all users for an specific application ordered by the name of the user and service name

  // Retrieve all services by an user for an specific application ordered by the name of the user and service name

  // Retrieve all schedule by all users for an specific application ordered by schedule time ascending

  // Retrieve all schedule by an user for an specific application ordered by schedule time ascending

  // Retrieve a schedule given a specific time

  // Retrieve available time on a date for a specific Employee
}

function createApp (type, appName) {
  return createAppType(type)
  .then(appType => createApplication(appType.id, appName))
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
  ]).then(([admin, user]) => Promise.all([
    createLocation(admin.id, app.id),
    createWorkshift(admin.id),
    createService(admin.id),
    createService(admin.id)
  ]).then(([location, workshift, service]) =>
    Promise.all([
      createSchedule(admin.id, service.id, workshift.id, location.id),
      createSchedule(admin.id, service.id, workshift.id, location.id)
    ]))))
}

/**
 * Program flow
 */
setupEnv().then(() =>
  Promise.all([
    createApp('Salon', 'Beauty Salon'),
    createApp('Landscaping', 'The Show Land Scaping')
  ])
  ).then(() => runQueries())
   .then(([users, apps, sortedUsers, appTypes]) => {
     console.log('Retrieve all users with Admin role:\n')
     console.log(`${users}\n`)
     console.log('Retrieve all Applications with their related ApplicationType ordered by application name ascending:\n')
     console.log(`${apps}\n`)
     console.log('Retrieve all users in the system ordered by last name:\n')
     console.log(`${sortedUsers}\n`)
     console.log('Retrieve all ApplicationTypes with related Applications ordered by applicationType ascending:\n')
     console.log(util.inspect(appTypes, {
       showHidden: false,
       depth: null
     }))
     process.exit()
   })
