const env = require('../config/env')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')

let authService = () => {
  let generateToken = user => {
    return jwt.sign(user, env('SECRET'), {
      expiresIn: 10800 // 3 hrs.
    })
  }

  let resetPassword = token => {
    User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: {
        $gt: Date.now()
      }
    }).exec()
  }

  return {
    generateToken: generateToken,
    resetPassword: resetPassword
  }
}

module.exports = authService
