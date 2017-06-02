/**
 * Retrieve all services by a single user for a specific application
 * ordered by service name
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
      from: 'm_service',
      localField: '_id',
      foreignField: 'userId',
      as: 'services'
    }
  },
  { $unwind: '$services' },
  {
    $sort: {
      'services.name': 1
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
      services: {$push: '$services'}
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
        services: '$services'
      }
    }
  }
])
