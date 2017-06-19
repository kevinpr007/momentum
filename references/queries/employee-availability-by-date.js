module.exports = (User, Workshift, Schedule) => {
  var getWorkAvailability = (startDate, endDate, userId, appId) =>
    User.aggregate([
      {
        $match: {
          '_id': userId,
          'roles.appId': appId
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
      { $unwind: '$workshifts' },
      {
        $match: {
          $and: [
            {
              'workshifts.startDate': {
                $lte: startDate
              }
            },
            {
              'workshifts.endDate': {
                $gte: endDate
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

  var getAppointmentAvailability = workshiftId => 
    Workshift.find({'workshiftId': workshiftId}).exec()

  var availableAtTime = (workshiftId, startDate, endDate) =>
    Schedule.aggregate([
      {
        $match: {
          $and: [
            {
              'workshiftId': workshiftId
            },
            {
              'startDate': {
                $gte: startDate
              }
            },
            {
              'endDate': {
                $lte: endDate
              }
            }
          ]
        }
      }
    ])

  return {
    getWorkAvailability,
    getAppointmentAvailability,
    availableAtTime
  }
}
