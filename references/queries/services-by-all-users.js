/**
 * Retrieve all services by all users for a specific application ordered by service name.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.name': 'Admin'
      //'roles.appId': ObjectId("5934a3ca5d7ec40549bf7544") //Appid is given.
    }
  },
  { $unwind: '$roles' },
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
    $group: {
      _id: {
        appId: '$roles.appId'
      },
      services: { $addToSet: '$services' }
    }
  },
  { $unwind: '$services' },
  { $sort: { 'services.name': 1 } },
  {
    $group: {
      _id: '$_id.appId',
      services: { $push: '$services' }
    }
  }
])
