/**
 * Retrieve all workshifts by a single user for a specific application
 * ordered by schedule time ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      _id: ObjectId('592db70fa9f02e3e3c788c42')
    }
  },
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
      email: { $first: '$email' },
      workshifts: { $push: '$workshifts' }
    }
  },
  {
    $project: {
      _id: 0,
      email: 1,
      workshifts: '$workshifts'
    }
  }
])
