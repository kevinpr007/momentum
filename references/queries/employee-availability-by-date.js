var user = db.getCollection('m_user').findOne({'roles.name': 'Admin'},
  {'_id': 1, 'roles.appId': 1})

/**
 * This time range is available on employee's workshift, but is already taken in schedule, 
 * so schedule's array won't be null.
 */
var startDate = '2017-06-19T10:00:00.000Z'
var endDate = '2017-06-19T11:00:00.000Z'

db.getCollection('m_user').aggregate([
  {
    $match: {
      _id: ObjectId(user._id.valueOf()),
      'roles.appId': ObjectId(user.roles[0].appId.valueOf())
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
