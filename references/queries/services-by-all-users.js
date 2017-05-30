/**
 * Retrieve all services by all users for a specific application ordered by
 * user name and service name.
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
      from: 'm_service',
      localField: 'users._id',
      foreignField: 'userId',
      as: 'services'
    }
  },
  { $unwind: '$services' },
  {
    $sort: {
      'users.firstName': 1,
      'users.lastName': 1,
      'services.name': 1
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
          $cond: {
            if: {
              $eq: ['$services.userId', '$users._id']
            },
            then: '$services',
            else: null
          }
        }
      }
    }
  },
  {
    $group: {
      _id: {
        userId: '$users.services.userId',
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
      services: { $push: '$_id.users.services' }
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
          services: '$services'
        }
      }
    }
  }
])
