/**
 * Retrieve all workshifts related to all users for a specific application ordered by schedule time ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.appId': ObjectId('592db70fa9f02e3e3c788c40') // Appid is given.
    }
  },
  { $unwind: '$roles' },
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
    $group: {
      _id: {
        appId: '$roles.appId',
        email: '$email'
      },
      workshifts: { $addToSet: '$workshifts' }
    }
  },
  { $unwind: '$workshifts' },
  { $sort: { 'workshifts.startDate': 1 } },
  {
    $group: {
      _id: null,
      workshifts: {
        $push: {
          _id: '$workshifts._id',
          appId: '$_id.appId',
          startDate: '$workshifts.startDate',
          endDate: '$workshifts.endDate',
          createdBy: '$workshifts.createdBy',
          userId: '$workshifts.userId',
          email: '$_id.email',
          createdOn: '$workshifts.createdOn'
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      workshifts: 1
    }
  }
])
