/**
 * Retrieve all schedules by a single user for a specific application
 * ordered by schedule time ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      _id: ObjectId('592db70fa9f02e3e3c788c48')
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
  { $unwind: '$schedules' },
  {
    $sort: {
      'schedules.startDate': 1
    }
  },
  {
    $group: {
      _id: '$_id',
      schedules: {$push: '$schedules'}
    }
  },
  {
    $project: {
      _id: 0,
      schedules: '$schedules'
    }
  }
])
