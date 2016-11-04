const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const User = require('../models/user.server.model')
const _ = require('lodash')

let userService = () => {
  let getAll = (page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      User.count().exec(),
      User.find()
      .sort({email: 'asc'})
      .skip(pageSize * page)
      .limit(pageSize)
      .exec()
    ])
  }

  let getByEmail = email => {
    return User.findOne().where('email', email).exec()
  }

  let getById = id => {
    return User.findOne().where('_id', id).exec()
  }

  let registerUser = user => {
    return User.create(_.merge(user, User))
  }

  let upsertUser = user => {
    return _.merge(new User(), user).save()
  }

  return {
    getAll: getAll,
    getById: getById,
    getByEmail: getByEmail,
    registerUser: registerUser,
    upsertUser: upsertUser
  }
}

module.exports = userService
