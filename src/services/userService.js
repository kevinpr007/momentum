const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')

let userService = () => {
  let getAll = () => {
    return User.find().exec()
  }

  let getByUserName = (username) => {
    return User.findOne()
            .where('userName', username).exec()
  }

  return {
    getAll: getAll,
    getByUserName: getByUserName
  }
}

module.exports = userService
