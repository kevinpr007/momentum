const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const User = require('../models/user.server.model')
const _ = require('lodash')

let userService = () => {
  let getAll = () => {
    return User.find().exec()
  }

  let getByEmail = email => {
    return User.findOne().where('email', email).exec()
  }

  let getById = id => {
    return User.findOne().where('_id', id).exec()
  }

  let registerUser = user => {
    return User.create(_.extend(user, User))
  }

  let upsertUser = user => {
    return user.save()
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
