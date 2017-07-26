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

function createWorkshift (userId, startDate, endDate) {
  return Workshift.create(new Workshift({
    startDate,
    endDate,
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

function createSchedule (userId, serviceId, workshiftId, locationId, startDate, endDate) {
  return Schedule.create(new Schedule({
    startDate,
    endDate,
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
      { $unwind: '$workshifts' },
      {
        $sort: {
          'workshifts.startDate': 1
        }
      },
      {
        $group: {
          _id: '$_id',
          firstName: { $first: '$firstName' },
          lastName: { $first: '$lastName' },
          email: { $first: '$email' },
          roles: { $first: '$roles' },
          workshifts: { $push: '$workshifts' }
        }
      }
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
    // Retrieve all workshifts related to all users for a specific application ordered by the name of the user and the schedule time ascending
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
          localField: 'users._id',
          foreignField: 'userId',
          as: 'workshifts'
        }
      },
      { $unwind: '$workshifts' },
      {
        $sort: {
          'users.firstName': 1,
          'users.lastName': 1,
          'workshifts.startDate': 1
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          appTypeId: 1,
          users: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
            roles: 1,
            workshifts: {
              $cond: {
                if: {
                  $eq: ['$workshifts.userId', '$users._id']
                },
                then: '$workshifts',
                else: null
              }
            }
          }
        }
      },
      {
        $group: {
          _id: {
            userId: '$users.workshifts.userId',
            name: '$name',
            appId: '$_id',
            appTypeId: '$appTypeId',
            users: '$users'
          }
        }
      },
      {
        $group: {
          _id: '$_id.users._id',
          name: { $first: '$_id.name' },
          appId: { $first: '$_id.appId' },
          appTypeId: { $first: '$_id.appTypeId' },
          userId: { $first: '$_id.users._id' },
          firstName: { $first: '$_id.users.firstName' },
          lastName: { $first: '$_id.users.lastName' },
          email: { $first: '$_id.users.email' },
          roles: { $first: '$_id.users.roles' },
          workshifts: { $push: '$_id.users.workshifts' }
        }
      },
      {
        $group: {
          _id: '$appId',
          name: { $first: '$name' },
          appTypeId: { $first: '$appTypeId' },
          users: {
            $addToSet: {
              _id: '$userId',
              firstName: '$firstName',
              lastName: '$lastName',
              email: '$email',
              roles: '$roles',
              workshifts: '$workshifts'
            }
          }
        }
      }
    ]),
    // Retrieve all services by all users for an specific application ordered by the name of the user and service name
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
          from: 'm_service',
          localField: 'users._id',
          foreignField: 'userId',
          as: 'services'
        }
      },
      { $unwind: '$services' },
      {
        $sort: {
          'users.firstName': 1,
          'users.lastName': 1,
          'services.name': 1
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          appTypeId: 1,
          users: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
            roles: 1,
            services: {
              $cond: {
                if: {
                  $eq: ['$services.userId', '$users._id']
                },
                then: '$services',
                else: null
              }
            }
          }
        }
      },
      {
        $group: {
          _id: {
            userId: '$users.services.userId',
            name: '$name',
            appId: '$_id',
            appTypeId: '$appTypeId',
            users: '$users'
          }
        }
      },
      {
        $group: {
          _id: '$_id.users._id',
          name: { $first: '$_id.name' },
          appId: { $first: '$_id.appId' },
          appTypeId: { $first: '$_id.appTypeId' },
          userId: { $first: '$_id.users._id' },
          firstName: { $first: '$_id.users.firstName' },
          lastName: { $first: '$_id.users.lastName' },
          email: { $first: '$_id.users.email' },
          roles: { $first: '$_id.users.roles' },
          services: { $push: '$_id.users.services' }
        }
      },
      {
        $group: {
          _id: '$appId',
          name: { $first: '$name' },
          appTypeId: { $first: '$appTypeId' },
          users: {
            $addToSet: {
              _id: '$userId',
              firstName: '$firstName',
              lastName: '$lastName',
              email: '$email',
              roles: '$roles',
              services: '$services'
            }
          }
        }
      }
    ]),
    // Retrieve all services by an user for an specific application ordered by service name
    Application.aggregate([
      {
        $match: {
          'roles.name': 'Admin'
        }
      },
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_service',
          localField: '_id',
          foreignField: 'userId',
          as: 'services'
        }
      },
      { $unwind: '$services' },
      {
        $sort: {
          'services.name': 1
        }
      },
      {
        $group: {
          _id: '$_id',
          firstName: { $first: '$firstName' },
          lastName: { $first: '$lastName' },
          email: { $first: '$email' },
          roles: { $first: '$roles' },
          services: { $push: '$services' }
        }
      }
    ]),
    // Retrieve all schedule by all users for an specific application ordered by the name of the user and schedule time ascending
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
          from: 'm_schedule',
          localField: 'users._id',
          foreignField: 'userId',
          as: 'schedules'
        }
      },
      { $unwind: '$schedules' },
      {
        $sort: {
          'users.firstName': 1,
          'users.lastName': 1,
          'schedules.startDate': 1
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          appTypeId: 1,
          users: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
            roles: 1,
            schedules: {
              $cond: {
                if: {
                  $eq: ['$schedules.userId', '$users._id']
                },
                then: '$schedules',
                else: null
              }
            }
          }
        }
      },
      {
        $group: {
          _id: {
            userId: '$users.schedules.userId',
            name: '$name',
            appId: '$_id',
            appTypeId: '$appTypeId',
            users: '$users'
          }
        }
      },
      {
        $group: {
          _id: '$_id.users._id',
          name: { $first: '$_id.name' },
          appId: { $first: '$_id.appId' },
          appTypeId: { $first: '$_id.appTypeId' },
          userId: { $first: '$_id.users._id' },
          firstName: { $first: '$_id.users.firstName' },
          lastName: { $first: '$_id.users.lastName' },
          email: { $first: '$_id.users.email' },
          roles: { $first: '$_id.users.roles' },
          schedules: { $push: '$_id.users.schedules' }
        }
      },
      {
        $group: {
          _id: '$appId',
          name: { $first: '$name' },
          appTypeId: { $first: '$appTypeId' },
          users: {
            $addToSet: {
              _id: '$userId',
              firstName: '$firstName',
              lastName: '$lastName',
              email: '$email',
              roles: '$roles',
              schedules: '$schedules'
            }
          }
        }
      }
    ]),
    // Retrieve all schedule by an user for an specific application ordered by schedule time ascending
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
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_schedule',
          localField: 'users._id',
          foreignField: 'userId',
          as: 'schedules'
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          appTypeId: 1,
          users: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
            roles: 1,
            schedules: {
              $filter: {
                input: '$schedules',
                as: 'sch',
                cond: { $eq: ['$$sch.userId', '$users._id'] }
              }
            }
          }
        }
      },
      { $unwind: '$users.schedules' },
      {
        $sort: {
          'users.schedules.startDate': 1
        }
      },
      {
        $group: {
          _id: '$_id',
          name: { $first: '$name' },
          appTypeId: { $first: '$appTypeId' },
          users: {
            $addToSet: {
              _id: '$users._id',
              firstName: '$users.firstName',
              lastName: '$users.lastName',
              email: '$users.email',
              roles: '$users.roles'
            }
          },
          schedules: { $push: '$users.schedules' }
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          appTypeId: 1,
          users: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            email: 1,
            roles: 1,
            schedules: '$schedules'
          }
        }
      }
    ]),
    // Retrieve a schedule given a specific time, user and application.
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
          // 'users.email': 'kevin.rivera@yahoo.com'
        }
      },
      { $limit: 1 },
      {
        $lookup: {
          from: 'm_schedule',
          localField: 'users._id',
          foreignField: 'userId',
          as: 'schedules'
        }
      },
      { $unwind: '$schedules' },
      {
        $match: {
          $and: [
            {
              'schedules.startDate': {
                $gte: new Date('2017-01-01T23:00:00.000Z')
              }
            },
            {
              'schedules.endDate': {
                $lte: new Date('2017-12-31T23:44:00.000Z')
              }
            }
          ]
        }
      },
      {
        $group: {
          _id: {
            _id: '$_id',
            name: '$name',
            users: '$users',
            appTypeId: '$appTypeId'
          },
          schedules: { $push: '$schedules' }
        }
      },
      {
        $project: {
          _id: '$_id._id',
          name: '$_id.name',
          user: {
            _id: '$_id.users._id',
            firstName: '$_id.users.firstName',
            lastName: '$_id.users.lastName',
            email: '$_id.users.email',
            roles: '$_id.users.roles',
            schedules: '$schedules'
          }
        }
      }
    ])
  ])
}

function createApp (type, appName) {
  var startDate = moment().hours(4)
    .minutes(0).seconds(0).milliseconds(0) // 4:00am => 8:00am local
  var endDate = moment().hours(13)
    .minutes(0).seconds(0).milliseconds(0) // 1:00pm => 5:00pm local
  var startAppointment = moment().hours(6)
    .minutes(0).seconds(0).milliseconds(0) // 6:00am => 10:00am local
  var endAppointment = moment().hours(7)
    .minutes(0).seconds(0).milliseconds(0) // 7:00am => 11:00am local

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
      createWorkshift(admin.id, startDate, endDate),
      createService(admin.id),
      createService(admin.id)
    ]).then(([location, workshift, service]) => Promise.all([
      createSchedule(admin.id, service.id, workshift.id, location.id,
        startAppointment, endAppointment),
      (function () {
        startAppointment = moment().hours(7).minutes(0)
        endAppointment = moment().hours(8).minutes(0)
        createSchedule(admin.id, service.id, workshift.id, location.id,
          startAppointment, endAppointment)
      }())
    ]))))
}

/**
 * Program flow
 */
setupEnv().then(() => Promise.all([
  createApp('Salon', 'Beauty Salon'),
  createApp('Landscaping', 'The Show Land Scaping')
])).then(() => runQueries())
  .then(([
    users,
    apps,
    sortedUsers,
    appTypes,
    usersByApp,
    adminsByApp,
    workshiftsByUser,
    logsByApp,
    workshiftsByApp,
    servicesByAllUsers,
    servicesByAnUser,
    schedulesByAllUsers,
    schedulesByAnUser,
    scheduleSpecificUser
    ]) => {
    console.log('Retrieve all users with Admin role:\n')
    console.log(`${users}\n`)

    console.log('Retrieve all Applications with their related ApplicationType ordered by application name ascending:\n')
    console.log(`${apps}\n`)

    console.log('Retrieve all users ordered by last name:\n')
    console.log(`${sortedUsers}\n`)

    console.log('Retrieve all ApplicationTypes with related Applications ordered by applicationType ascending:\n')
    console.log(util.inspect(appTypes, false, null))

    console.log('Retrieve all users related to a specific application ordered by app name:\n')
    console.log(util.inspect(usersByApp, false, null))

    console.log('Retrieve all users with Admin role for a specific application ordered by user name:\n')
    console.log(util.inspect(adminsByApp, false, null))

    console.log('Retrieve all workshifts related to a specific user ordered by schedule time ascending:\n')
    console.log(util.inspect(workshiftsByUser, false, null))

    console.log('Retrieve all logs related to an specific application ordered by createdDate descending:\n')
    console.log(util.inspect(logsByApp, false, null))

    console.log('Retrieve all workshift related to all users for an specific application ordered by the name of the user and the schedule time ascending:\n')
    console.log(util.inspect(workshiftsByApp, false, null))

    console.log('Retrieve all services by all users for an specific application ordered by the name of the user and service name:\n')
    console.log(util.inspect(servicesByAllUsers, false, null))

    console.log('Retrieve all services by an user for an specific application ordered by service name:\n')
    console.log(util.inspect(servicesByAnUser, false, null))

    console.log('Retrieve all schedule by all users for an specific application ordered by the name of the user and schedule time ascending:\n')
    console.log(util.inspect(schedulesByAllUsers, false, null))

    console.log('Retrieve all schedule by an user for an specific application ordered by schedule time ascending:\n')
    console.log(util.inspect(schedulesByAnUser, false, null))

    console.log('Retrieve a schedule given a specific time, user and application:\n')
    console.log(util.inspect(scheduleSpecificUser, false, null))
    process.exit()
  })
