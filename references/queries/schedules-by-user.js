/**
 * Retrieve all schedule by a single user for an specific application
 * ordered by schedule time ascending.
 */
db.getCollection('m_application').aggregate([
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
  { $unwind: '$schedules' },
  {
    $sort: {
      'schedules.startDate': 1
    }
  },
  {
    $group: {
      _id: '$_id',
      name: { $first: '$name' },
      appTypeId: { $first: '$appTypeId' },
      users: { $first: '$users' },
      schedules: { $push: '$schedules' }
    }
  },
  {
    $project: {
      _id: 0,
      appId: '$_id',
      name: 1,
      appTypeId: 1,
      user: {
        _id: '$users._id',
        firstName: '$users.firstName',
        lastName: '$users.lastName',
        email: '$users.email',
        roles: '$users.roles',
        schedules: '$schedules'
      }
    }
  }
])