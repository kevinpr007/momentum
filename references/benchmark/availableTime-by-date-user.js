process.env.NODE_ENV = 'staging'

const monitor = require('../../test/benchmark/monitor')
const Application = require('../../src/models/application.model')
const Promise = require('bluebird')

require('../../src/config/mongoose')()

var roleName = 'Employee'

var workshiftStartDate = '2017-01-01T01:00:00.000Z'
var workshiftEndDate = '2017-12-31T23:59:00.000Z'

var scheduleStartDate = '2017-01-01T23:00:00.000Z'
var scheduleEndDate = '2017-12-31T23:44:00.000Z'

var getAllAvailableWorkHours = () => {
  return Application.aggregate(
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
        'users.roles.name': 'Employee'
      // 'users.email': 'kevin.rivera@yahoo.com'
      }
    },
    { $limit: 1 },
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
      $match: {
        $and: [
          {
            'workshifts.startDate': {
              $gte: new Date(workshiftStartDate)
            }
          },
          {
            'workshifts.endDate': {
              $lte: new Date(workshiftEndDate)
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
        workshifts: { $push: '$workshifts' }
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
          workshifts: '$workshifts'
        }
      }
    }
  )
}

var getAllSchedulesAppointments = () => {
  return Application.aggregate(
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
        'users.roles.name': roleName
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
              $gte: new Date(scheduleStartDate)
            }
          },
          {
            'schedules.endDate': {
              $lte: new Date(scheduleEndDate)
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
          schedules: '$schedules'
        }
      }
    }
  )
}

/**
 * Benchmark: Execute query x10
 * Result: min: 3992 msec - max: 4823 msec - ave: 4422 msec
 */

var promisesAvailableWorkHours = []
var promisesAllSchedulesAppointments = []

for (let i = 0; i < 1000; i++) {
  promisesAvailableWorkHours.push(getAllAvailableWorkHours())
  promisesAllSchedulesAppointments.push(getAllSchedulesAppointments())
}

var start = monitor()
Promise.all(promisesAvailableWorkHours)
  .then(() => {
    Promise.all(promisesAllSchedulesAppointments)
      .then(() => {
        monitor(start, 'getQueryResults()')
        process.exit()
      })
  })
