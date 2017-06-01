/**
 * Retrieve a schedule given a specific time, user and application.
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
      $and: [
        {
          'schedules.startDate': {
            $gte: ISODate('2017-05-31T23:00:00.000Z')
          }
        },
        {
          'schedules.endDate': {
            $lte: ISODate('2017-05-31T23:44:00.000Z')
          }
        }
      ]
    }
  },
  {
    $group: {
      _id: {
        _id: '$_id',
        name: '$name',
        users: '$users',
        appTypeId: '$appTypeId'
      },
      schedules: {$push: '$schedules'}
    }
  },
  {
    $project: {
      _id: '$_id._id',
      name: '$_id.name',
      user: {
        _id: '$_id.users._id',
        firstName: '$_id.users.firstName',
        lastName: '$_id.users.lastName',
        email: '$_id.users.email',
        roles: '$_id.users.roles',
        schedules: '$schedules'
      }
    }
  }
])
