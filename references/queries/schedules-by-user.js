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
  {
    $project: {
      _id: 1,
      name: 1,
      appTypeId: 1,
      users: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        roles: 1,
        schedules: {
          $filter: {
            input: '$schedules',
            as: 'sch',
            cond: { $eq: ['$$sch.userId', '$users._id'] }
          }
        }
      }
    }
  },
  { $unwind: '$users.schedules' },
  {
    $sort: {
      'users.schedules.startDate': 1
    }
  },
  {
    $group: {
      _id: '$_id',
      name: { $first: '$name' },
      appTypeId: { $first: '$appTypeId' },
      users: {
        $addToSet: {
          _id: '$users._id',
          firstName: '$users.firstName',
          lastName: '$users.lastName',
          email: '$users.email',
          roles: '$users.roles'
        }
      },
      schedules: { $push: '$users.schedules' }
    }
  },
  {
    $project: {
      _id: 1,
      name: 1,
      appTypeId: 1,
      users: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        roles: 1,
        schedules: '$schedules'
      }
    }
  }
])
