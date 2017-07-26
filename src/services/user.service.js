const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const User = require('../models/user.model')
const _ = require('lodash')

module.exports = () => {
  const getAll = (page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      User.count().exec(),
      User.find()
        .sort({email: 'asc'})
        .skip(pageSize * page)
        .limit(pageSize)
        .select({email: 1, firstName: 1, lastName: 1, phone: 1})
        .exec()
    ])
  }

  const getByEmail = email =>
    User.findOne().where('email', email).exec()

  const getById = id =>
    User.findOne().where('_id', id).exec()

  const registerUser = user =>
    User.create(_.merge(user, User))

  const upsertUser = user =>
    _.merge(new User(), user).save()

  return {
    getAll,
    getById,
    getByEmail,
    registerUser,
    upsertUser
  }
}
