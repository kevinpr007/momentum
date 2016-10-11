const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')
const userFactory = require('../helpers/user.factory')

let userService = () => {
  let getAll = () => {
    return User.find().exec()
  }

  let getByEmail = email => {
    return User.findOne().where('email', email).exec()
  }

  let getById = id => {
    return User.findOne({_id: id}).exec()
  }

  let registerUser = user => {
    return userFactory(user).save()
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
