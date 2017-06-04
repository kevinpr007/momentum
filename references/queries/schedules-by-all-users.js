/**
 * Retrieve all schedules by all users for a specific application ordered by
 * user name and schedule time ascending
 */
db.getCollection('m_user').aggregate([
  {
    $match: {
      'roles.name': 'Admin',
    // 'roles.appId': ObjectId("5915ac0d92eec1ac74d9510d") //Appid is given.
    }
  },
  { $unwind: '$roles' },
  {
    $lookup: {
      from: 'm_schedule',
      localField: '_id',
      foreignField: 'userId',
      as: 'schedules'
    }
  },
  { $unwind: '$schedules' },
  {
    $group: {
      _id: {
        appId: '$roles.appId',
        userId: '$_id',
        firstName: '$firstName',
        lastName: '$lastName',
        email: '$email',
        address: '$address'
      },
      roles: { $addToSet: '$roles' },
      schedules: { $addToSet: '$schedules' }
    }
  },
  {
    $group: {
      _id: '$_id.appId',
      users: {
        $addToSet: {
          userId: '$_id.userId',
          firstName: '$_id.firstName',
          lastName: '$_id.lastName',
          email: '$_id.email',
          address: '$_id.address',
          roles: '$roles',
          schedules: '$schedules'
        }
      }
    }
  },
  { $unwind: '$users' },
  {
    $sort: {
      'users.firstName': 1,
      'users.lastName': 1,
      'users.schedules.startDate': 1
    }
  },
  { $group: { _id: '$_id', users: { $push: '$users' } } }
])
