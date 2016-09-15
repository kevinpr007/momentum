const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')

let userService = () => {
  let getAll = () => {
    return User.find().exec()
  }

  let getByEmail = (email) => {
    return User.findOne().where('email', email).exec()
  }

  let getById = id => {
    return User.findOne({_id: id}, '-password -salt').exec()
  }

  let createUser = user => {
    let newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    })

    return newUser.save()
  }

  return {
    getAll: getAll,
    getById: getById,
    getByEmail: getByEmail,
    createUser: createUser
  }
}

module.exports = userService
