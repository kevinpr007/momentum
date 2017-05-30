/**
 * Retrieve all services by an user for an specific application ordered by service name
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
      from: 'm_service',
      localField: 'users._id',
      foreignField: 'userId',
      as: 'services'
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
        services: {
          $filter: {
            input: '$services',
            as: 'ser',
            cond: { $eq: ["$$ser.userId", '$users._id'] }
          }
        }
      }
    }
  },
  { $unwind: '$users.services' },
  {
    $sort: {
      'users.services.name': 1
    }
  },
  {
    $group: {
      _id: '$_id',
      name: { $first: '$name' },
      appTypeId: { $first: '$appTypeId' },
      users: {
        $addToSet: {
          _id: "$users._id",
          firstName: "$users.firstName",
          lastName: "$users.lastName",
          email: "$users.email",
          roles: "$users.roles"
        }
      },
      services: { $push: '$users.services' }
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
        services: '$services'
      }
    }
  }
])