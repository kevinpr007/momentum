/**
 * Retrieve available time on a date for a specific Employee
 */

// ------------------------------------------------------------

/**
 * QUERY #1 - Retrieve all available work hours for a user in a specific date.
 */
db.getCollection('m_application').aggregate(
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
    $match: {
            //           'users.roles.name': 'Employee'
      'users.email': 'kevin.rivera@yahoo.com'
    }
  },
    { $limit: 1 },
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
    $match: {
      $and: [
        {
          'workshifts.startDate': {
            $gte: ISODate('2017-01-01T01:00:00.000Z')
          }
        },
        {
          'workshifts.endDate': {
            $lte: ISODate('2017-12-31T23:59:00.000Z')
          }
        }
      ]
    }
  },
  {
    $group: {
      _id: {
        _id: '$_id',
        name: '$name',
        users: '$users',
        appTypeId: '$appTypeId'
      },
      workshifts: { $push: '$workshifts' }
    }
  },
  {
    $project: {
      _id: '$_id._id',
      name: '$_id.name',
      user: {
        _id: '$_id.users._id',
        firstName: '$_id.users.firstName',
        lastName: '$_id.users.lastName',
        email: '$_id.users.email',
        workshifts: '$workshifts'
      }
    }
  }
)

/**
 * QUERY #2 - Retrieve all schedules or appointments for a user in a specific date.
 */
db.getCollection('m_application').aggregate(
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
    $match: {
            // 'users.roles.name': 'Employee'
      'users.email': 'kevin.rivera@yahoo.com'
    }
  },
    { $limit: 1 },
  {
    $lookup: {
      from: 'm_schedule',
      localField: 'users._id',
      foreignField: 'userId',
      as: 'schedules'
    }
  },
    { $unwind: '$schedules' },
  {
    $match: {
      $and: [
        {
          'schedules.startDate': {
            $gte: ISODate('2017-01-01T23:00:00.000Z')
          }
        },
        {
          'schedules.endDate': {
            $lte: ISODate('2017-12-31T23:44:00.000Z')
          }
        }
      ]
    }
  },
  {
    $group: {
      _id: {
        _id: '$_id',
        name: '$name',
        users: '$users',
        appTypeId: '$appTypeId'
      },
      schedules: { $push: '$schedules' }
    }
  },
  {
    $project: {
      _id: '$_id._id',
      name: '$_id.name',
      user: {
        _id: '$_id.users._id',
        firstName: '$_id.users.firstName',
        lastName: '$_id.users.lastName',
        email: '$_id.users.email',
        schedules: '$schedules'
      }
    }
  }
)
