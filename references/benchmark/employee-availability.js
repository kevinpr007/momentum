process.env.NODE_ENV = 'development'

const monitor = require('../../test/benchmark/monitor')
const User = require('../../src/models/user.model')
const Promise = require('bluebird')
const moment = require('moment')
const {ObjectID} = require('mongodb')

require('../../src/config/mongoose')()

var startDate = moment().hours(6).minutes(0)
    .seconds(0).milliseconds(0)

var endDate = moment().hours(7).minutes(0)
    .seconds(0).milliseconds(0)

var getAvailability = user =>
    User.aggregate([
      {
        $match: {
          _id: ObjectID(user._id.valueOf()),
          'roles.appId': ObjectID(user.roles[0].appId.valueOf())
        }
      },
      {
        $lookup: {
          from: 'm_workshift',
          localField: '_id',
          foreignField: 'userId',
          as: 'workshifts'
        }
      },
      {
        $lookup: {
          from: 'm_schedule',
          localField: '_id',
          foreignField: 'userId',
          as: 'schedules'
        }
      },
      { $unwind: '$workshifts' },
      { $unwind: '$schedules' },
      {
        $project: {
          _id: 1,
          email: 1,
          workshifts: {
            $cond: [
              {
                $and: [
                  {
                    $lte: [ '$workshifts.startDate', new Date(startDate) ]
                  },
                  {
                    $gte: [ '$workshifts.endDate', new Date(endDate) ]
                  }
                ]
              }, '$workshifts', null]
          },
          schedules: {
            $cond: [
              {
                $and: [
                  {
                    $eq: [ '$schedules.workshiftId', '$workshifts._id' ]
                  },
                  {
                    $gte: [ '$schedules.startDate', new Date(startDate) ]
                  },
                  {
                    $lte: [ '$schedules.endDate', new Date(endDate) ]
                  }
                ]
              }, '$schedules', null]
          }
        }
      },
      {
        $group: {
          _id: '$_id',
          email: { $first: '$email' },
          workshifts: { $first: '$workshifts' },
          schedules: { $first: '$schedules' }
        }
      }
    ])

/**
 * Benchmark: Execute getAvailability() query x10
 * Result: min: 269 msec - max: 374 msec
 */

 /**
 * Benchmark: Execute getAvailability() query x1000
 * Result: min: 2310 msec - max: 2839 msec - ave: 2523 msec
 */

User.findOne({
  'roles.name': 'Admin'
}, {
  '_id': 1, 'roles.appId': 1
})
  .then(user => {
    var promises = []
    for (let i = 0; i < 1000; i++) {
      promises.push(getAvailability(user))
    }

    var start = monitor()
    return Promise.all(promises)
      .then(() => {
        monitor(start, 'getAvailability()')
        process.exit()
      })
  })
