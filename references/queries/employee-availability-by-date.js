/**
 * Employee availability by date
 */
;(function (startDate, endDate, userId, appId) {
  var isAvailable = workAvailability(startDate, endDate, userId, appId)
  if (isAvailable._batch.length) {
    isAvailable._batch[0].workshifts.forEach(function (workshift) {
      print({
        availableToWork: true,
        availableAtTime: availableAtTime(workshift._id, startDate, endDate)
      })
    })
  } else {
    print({
      availableToWork: false
    })
  }
}('2017-06-06T16:00:00.000Z', '2017-06-06T17:00:00.000Z', '5934a3ca5d7ec40549bf7547', '5934a3ca5d7ec40549bf7544'))

function workAvailability (startDate, endDate, userId, appId) {
  return db.getCollection('m_user').aggregate([
    {
      $match: {
        '_id': ObjectId(userId),
        'roles.appId': ObjectId(appId)
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
      $match: {
        $and: [
          {
            'workshifts.startDate': {
              $lte: ISODate(startDate)
            }
          },
          {
            'workshifts.endDate': {
              $gte: ISODate(endDate)
            }
          }
        ]
      }
    },
    {
      $group: {
        _id: '$_id',
        workshifts: { $push: '$workshifts' }
      }
    }
  ])
}

function availableAtTime (workshiftId, startDate, endDate) {
  var result = db.getCollection('m_schedule').aggregate([
    {
      $match: {
        $and: [
          {
            '_id': workshiftId
          },
          {
            'schedules.startDate': {
              $gte: ISODate(startDate)
            }
          },
          {
            'schedules.endDate': {
              $lte: ISODate(endDate)
            }
          }
        ]
      }
    }
  ])

  if (result._batch.length > 0) {
    return false
  } else {
    return true
  }
}
