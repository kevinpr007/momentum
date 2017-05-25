/**
 * Retrieve all workshift related to all users for an specific application ordered by user's name and
 * schedule time ascending.
 *
 * References:
 * https://docs.mongodb.com/manual/reference/operator/aggregation/group/#group-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/first/#first-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/project/#project-aggregation
 * https://docs.mongodb.com/manual/reference/operator/aggregation/filter/#filter-aggregation
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
  {
    $sort: {
      'users.firstName': 1,
      'users.lastName': 1,
      'workshifts.startDate': -1
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
          $filter: {
            input: '$workshifts',
            as: 'wf',
            cond: { $eq: [ '$$wf.userId', '$users._id' ] }
          }
        }
      }
    }
  },
  {
    $group: {
      _id: '$_id',
      name: { $first: '$name' },
      apptypeId: { $first: '$appTypeId' },
      users: { $push: '$users' }
    }
  }
])
