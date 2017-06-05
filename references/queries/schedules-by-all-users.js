/**
 * Retrieve all schedules by all users for a specific application ordered by schedule time ascending
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.name': 'Admin'
      //'roles.appId': ObjectId("5934a3ca5d7ec40549bf7544") //Appid is given.
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
        appId: '$roles.appId'
      },
      schedules: { $addToSet: '$schedules' }
    }
  },
  { $unwind: '$schedules' },
  { $sort: { 'schedules.startDate': 1 } },
  {
    $group: {
      _id: '$_id.appId',
      schedules: { $push: '$schedules' }
    }
  }
])
