/**
 * Retrieve all schedules by all users for a specific application ordered by schedule time ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.appId': ObjectId('592db70fa9f02e3e3c788c40') // Appid is given.
    }
  },
  { $unwind: '$roles' },
  {
    $lookup: {
      from: 'm_schedule',
      localField: '_id',
      foreignField: 'userId',
      as: 'schedules'
    }
  },
  { $unwind: '$schedules' },
  {
    $group: {
      _id: {
        appId: '$roles.appId',
        email: '$email'
      },
      schedules: { $addToSet: '$schedules' }
    }
  },
  { $unwind: '$schedules' },
  { $sort: { 'schedules.startDate': 1 } },
  {
    $group: {
      _id: null,
      schedules: {
        $push: {
          _id: '$schedules._id',
          appId: '$_id.appId',
          startDate: '$schedules.startDate',
          endDate: '$schedules.endDate',
          other: '$schedules.other',
          userId: '$schedules.userId',
          email: '$_id.email',
          scheduleType: '$schedules.scheduleType',
          serviceId: '$schedules.serviceId',
          workshiftId: '$schedules.workshiftId',
          locationId: '$schedules.locationId',
          createdBy: '$schedules.createdBy',
          createdOn: '$schedules.createdOn'
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      schedules: 1
    }
  }
])
