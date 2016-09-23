const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')

let userService = () => {
  let getAll = () => {
    return User.find().exec()
  }

  let getByEmail = email => {
    return User.findOne().where('email', email).exec()
  }

  let getById = id => {
    return User.findOne({_id: id}, '-password -salt').exec()
  }

  let registerUser = user => {
    let newUser = new User({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      address: {
        address1: user.address.address1,
        address2: user.address.address2,
        city: user.address.city,
        state: user.address.state,
        zipCode: user.address.zipCode
      }
    })
    return newUser.save()
  }

  return {
    getAll: getAll,
    getById: getById,
    getByEmail: getByEmail,
    registerUser: registerUser
  }
}

module.exports = userService
