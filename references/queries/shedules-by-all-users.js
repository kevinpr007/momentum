/**
 * Retrieve all schedule by all users for an specific application ordered by
 * user name and schedule time ascending
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
      'users.firstName': 1,
      'users.lastName': 1,
      'schedules.startDate': 1
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
          $cond: {
            if: {
              $eq: ['$schedules.userId', '$users._id']
            },
            then: '$schedules',
            else: null
          }
        }
      }
    }
  },
  {
    $group: {
      _id: {
        userId: '$users.schedules.userId',
        name: '$name',
        appId: '$_id',
        appTypeId: '$appTypeId',
        users: '$users'
      }
    }
  },
  {
    $group: {
      _id: '$_id.users._id',
      name: { $first: '$_id.name' },
      appId: { $first: '$_id.appId' },
      appTypeId: { $first: '$_id.appTypeId' },
      userId: { $first: '$_id.users._id' },
      firstName: { $first: '$_id.users.firstName' },
      lastName: { $first: '$_id.users.lastName' },
      email: { $first: '$_id.users.email' },
      roles: { $first: '$_id.users.roles' },
      schedules: { $push: '$_id.users.schedules' }
    }
  },
  {
    $group: {
      _id: '$appId',
      name: { $first: '$name' },
      appTypeId: { $first: '$appTypeId' },
      users: {
        $addToSet: {
          _id: '$userId',
          firstName: '$firstName',
          lastName: '$lastName',
          email: '$email',
          roles: '$roles',
          schedules: '$schedules'
        }
      }
    }
  }
])
