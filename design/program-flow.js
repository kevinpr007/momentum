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
const Log = require('../src/models/logs.model')

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

function createLog (appId) {
  return Log.create(new Log({
    code: faker.random.number(),
    appId: appId
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
    // Retrieve all users ordered by last name
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
    ]),
    // Retrieve all users related to a specific application ordered by app name
    Application.aggregate([
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_user',
          localField: '_id',
          foreignField: 'roles.appId',
          as: 'users'
        }
      },
      { $sort: { 'name': 1 } }
    ]),
    /**
     * Retrieve all users with Admin role for a specific application ordered by user name:
     *
     * The $lookup aggregation pipeline stage will not work directly with an array. The main intent of
     * the design is for a "left join" as a "one to many" type of join ( or really a "lookup" ) on the
     * possible related data. But the value is intended to be singular and not an array. Therefore you
     * must "de-normalise" the content first prior to performing the $lookup operation in order for this
     * to work. And that means using $unwind.
     *
     * We need to $unwind the `users` array before applying the $match so that you can filter individual elements
     * and then use $group to put it back together.
     */
    Application.aggregate([
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_user',
          localField: '_id',
          foreignField: 'roles.appId',
          as: 'users'
        }
      },
      { $unwind: '$users' },
      {
        $match: {
          'users.roles.name': 'Admin'
        }
      },
      {
        $group: {
          '_id': '$_id',
          'users': { $push: '$users' }
        }
      },
      {
        $sort: {
          'users.lastName': 1
        }
      }
    ]),
    // Retrieve all workshifts related to a specific user ordered by schedule time ascending
    User.aggregate([
      {
        $match: {
          'roles.name': 'Admin'
        }
      },
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_workshift',
          localField: '_id',
          foreignField: 'userId',
          as: 'workshifts'
        }
      },
      // {
      //   $sort: {
      //     'workshifts.startDate': 1,
      //     'workshifts.endDate': 1
      //   }
      // }
    ]),

    // Retrieve all logs related to an specific application ordered by createdDate descending
    Application.aggregate([
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_log',
          localField: '_id',
          foreignField: 'appId',
          as: 'logs'
        }
      },
      { $unwind: '$logs' },
      {
        $sort: {
          'logs.createdOn': -1
        }
      },
      {
        $group: {
          '_id': '$_id',
          'logs': { $push: '$logs' }
        }
      }
    ]),

    // Retrieve all workshift related to all users for an specific application ordered by the name of the user and the schedule time ascending
    Application.aggregate([
      
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_user',
          localField: '_id',
          foreignField: 'roles.appId',
          as: 'users'
        }
      },
      
      { $unwind: '$users' },
      
      {
        $lookup: {
          from: 'm_workshift',
          localField: 'userId',
          foreignField: 'users._id',
          as: 'workshifts'
        }
      },
      
      { $unwind: '$workshifts' },
      
      {
        $sort: {
          'users.firstName': 1,
          'users.lastName': 1,
            'workshifts.startDate': -1
        }
      },
      
//       {
//         $group: {
//           'workshifts.userId': '$users._id',
//           'workshifts': { $push: '$workshifts' }
//         }
//       }
      
      ])

  ])

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
      createLog(app.id),
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
    ]).then(([logs, admin, user]) => Promise.all([
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
  ])).then(() => runQueries())
  .then(([users, apps, sortedUsers, appTypes, usersByApp, adminsByApp, workshiftsByUser, logsByApp, workshiftsByApp]) => {
    console.log('Retrieve all users with Admin role:\n')
    console.log(`${users}\n`)
    console.log('Retrieve all Applications with their related ApplicationType ordered by application name ascending:\n')
    console.log(`${apps}\n`)
    console.log('Retrieve all users ordered by last name:\n')
    console.log(`${sortedUsers}\n`)
    console.log('Retrieve all ApplicationTypes with related Applications ordered by applicationType ascending:\n')
    console.log(util.inspect(appTypes, {
      showHidden: false,
      depth: null
    }))
    console.log('Retrieve all users related to a specific application ordered by app name:\n')
    console.log(util.inspect(usersByApp, {
      showHidden: false,
      depth: null
    }))
    console.log('Retrieve all users with Admin role for a specific application ordered by user name:\n')
    console.log(util.inspect(adminsByApp, {
      showHidden: false,
      depth: null
    }))
    console.log('Retrieve all workshifts related to a specific user ordered by schedule time ascending:\n')
    console.log(util.inspect(workshiftsByUser, {
      showHidden: false,
      depth: null
    }))
    console.log('Retrieve all logs related to an specific application ordered by createdDate descending:\n')
    console.log(util.inspect(logsByApp, {
      showHidden: false,
      depth: null
    }))
    console.log('Retrieve all workshift related to all users for an specific application ordered by the name of the user and the schedule time ascending:\n')
    console.log(util.inspect(workshiftsByApp, {
      showHidden: false,
      depth: null
    }))
    process.exit()
  })
