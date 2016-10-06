const config = require('../config/config')
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise
const User = mongoose.model('User')
const tokenLife = config.TOKEN_LIFE
const _ = require('underscore')

let randomBytes = Promise
    .promisify(require('crypto').randomBytes)

let authService = () => {
  let generateToken = user => {
    return jwt.sign(user, config.SECRET, {
      expiresIn: parseInt(tokenLife)
    })
  }

  let resetToken = user => {
    let date = new Date()
    user = _.extend(user, User)
    return randomBytes(parseInt(config.RANDOM_BYTES)).then(buffer => {
      user.resetPasswordToken = buffer.toString('hex')
      user.resetPasswordExpires = date.setSeconds(date.getSeconds() + parseInt(tokenLife))
      return user.save()
    })
  }

  let resetUserPassword = token => {
    return User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: {
        $gt: new Date()
      }
    }).exec()
  }

  return {
    resetToken: resetToken,
    generateToken: generateToken,
    resetUserPassword: resetUserPassword
  }
}

module.exports = authService
