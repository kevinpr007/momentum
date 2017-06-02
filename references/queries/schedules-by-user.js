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