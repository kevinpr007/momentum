/**
 * Retrieve a schedule given a specific time, user and application.
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
    $match: {
      $and: [
        {
          'schedules.startDate': {
            $gte: ISODate('2017-05-12T16:00:00.000Z')
          }
        },
        {
          'schedules.endDate': {
            $lte: ISODate('2017-05-12T18:00:00.000Z')
          }
        }
      ]
    }
  },
  {
    $group: {
      _id: {
        _id: '$_id',
        firstName: '$firstName',
        lastName: '$lastName',
        email: '$email',
        roles: '$roles'
      },
      schedules: {$push: '$schedules'}
    }
  },
  {
    $project: {
      _id: 0,
      user: {
        _id: '$_id._id',
        firstName: '$_id.firstName',
        lastName: '$_id.lastName',
        email: '$_id.email',
        roles: '$_id.roles',
        schedules: '$schedules'
      }
    }
  }
])
