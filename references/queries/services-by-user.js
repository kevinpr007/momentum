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
      _id: '$_id',
      firstName: { $first: '$firstName' },
      lastName: { $first: '$lastName' },
      email: { $first: '$email' },
      roles: { $first: '$roles' },
      services: { $push: '$services' }
    }
  }
])
