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
      _id: '$_id',
      firstName: { $first: '$firstName' },
      lastName: { $first: '$lastName' },
      email: { $first: '$email' },
      roles: { $first: '$roles' },
      workshifts: { $push: '$workshifts' }
    }
  }
])