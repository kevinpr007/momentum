const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const env = require('../config/env')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const User = mongoose.model('User')
const tokenLife = env('TOKEN_LIFE')

let authService = () => {
  let generateToken = user => {
    return jwt.sign(user, env('SECRET'), {
      expiresIn: parseInt(tokenLife)
    })
  }

  let resetToken = user => {
    crypto.randomBytes(48, (err, buffer) => {
      const token = buffer.toString('hex')
      if (err) {
        return err
      }
      user.resetPasswordToken = token
      user.resetPasswordExpires = Date.now() + parseInt(tokenLife)
      return user.save()
    })
  }

  let resetPassword = token => {
    return User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: {
        $gt: Date.now()
      }
    }).exec()
  }

  return {
    resetToken: resetToken,
    generateToken: generateToken,
    resetPassword: resetPassword
  }
}

module.exports = authService
