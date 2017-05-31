/**
 * Retrieve a schedule given a specific time, user and application
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
    $match: {
      'schedules.startDate': { $gte: ISODate('2017-05-12T11:00:00.000Z') } // TODO: verify if endDate will be given.
    }
  },
  {
    $group: {
      _id: {
        userId: '$users.schedules.userId',
        name: '$name',
        appId: '$_id',
        appTypeId: '$appTypeId',
        users: '$users',
        schedules: '$schedules'
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
      schedules: { $push: '$_id.schedules' }
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      appId: 1,
      appTypeId: 1,
      user: {
        _id: '$userId',
        firstName: '$firstName',
        lastName: '$lastName',
        email: '$email',
        roles: '$roles',
        schedules: '$schedules'
      }
    }
  }
])
