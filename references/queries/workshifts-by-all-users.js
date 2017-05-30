/**
 * Retrieve all workshifts related to all users for a specific application ordered by user's name and
 * schedule time ascending.
 *
 * References:
 * https://docs.mongodb.com/manual/reference/operator/aggregation/group/#group-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/first/#first-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/project/#project-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/filter/#filter-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/cond/#cond-aggregation
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
      from: 'm_workshift',
      localField: 'users._id',
      foreignField: 'userId',
      as: 'workshifts'
    }
  },
  { $unwind: '$workshifts' },
  {
    $sort: {
      'users.firstName': 1,
      'users.lastName': 1,
      'workshifts.startDate': 1
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
        workshifts: {
          $cond: {
            if: {
              $eq: ['$workshifts.userId', '$users._id']
            },
            then: '$workshifts',
            else: null
          }
        }
      }
    }
  },
  {
    $group: {
      _id: {
        userId: '$users.workshifts.userId',
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
      workshifts: { $push: '$_id.users.workshifts' }
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
          workshifts: '$workshifts'
        }
      }
    }
  }
])
