/**
 * Retrieve all services by a single user for a specific application
 * ordered by service name.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      _id: ObjectId('592db70fa9f02e3e3c788c48')
    }
  },
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
      email: { $first: '$email' },
      services: { $push: '$services' }
    }
  },
  {
    $project: {
      _id: 0,
      email: 1,
      services: '$services'
    }
  }
])
