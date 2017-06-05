/**
 * Retrieve all workshifts related to all users for a specific application ordered by schedule time ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.name': 'Admin'
    // 'roles.appId': ObjectId("5934a3ca5d7ec40549bf7544") //Appid is given.
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
        appId: '$roles.appId'
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
