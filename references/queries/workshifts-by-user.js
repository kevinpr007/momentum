/**
 * Retrieve all workshifts by a single user for a specific application
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
      from: 'm_workshift',
      localField: '_id',
      foreignField: 'userId',
      as: 'workshifts'
    }
  },
  { $unwind: '$workshifts' },
  {
    $sort: {
      'workshifts.startDate': 1
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
      workshifts: {$push: '$workshifts'}
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
        workshifts: '$workshifts'
      }
    }
  }
])
