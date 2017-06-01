/**
 * Retrieve all schedules by a single user for a specific application
 * ordered by schedule time ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.name': 'Admin'
    }
  },
  { $limit: 1 },
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
      firstName: { $first: '$firstName' },
      lastName: { $first: '$lastName' },
      email: { $first: '$email' },
      roles: { $first: '$roles' },
      schedules: { $push: '$schedules' }
    }
  }
])