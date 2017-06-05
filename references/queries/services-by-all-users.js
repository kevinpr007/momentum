/**
 * Retrieve all services by all users for a specific application ordered by service name ascending.
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.name': 'Admin'
    // 'roles.appId': ObjectId("592db70fa9f02e3e3c788c40") //Appid is given.
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
      _id: null,
      services: {
        $push: {
          _id: '$services._id',
          appId: '$_id.appId',
          name: '$services.name',
          price: '$services.price',
          time: '$services.time',
          createdBy: '$services.createdBy',
          userId: '$services.userId',
          createdOn: '$services.createdOn'
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      services: 1
    }
  }
])
