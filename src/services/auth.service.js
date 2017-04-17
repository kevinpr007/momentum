const config = require('../config/config')()
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const User = require('../models/user.model')
const tokenLife = config.TOKEN_LIFE
const _ = require('lodash')

let randomBytes = Promise.promisify(require('crypto').randomBytes)

let authService = () => {
  let generateToken = user => {
    return jwt.sign(user, config.SECRET, {
      expiresIn: parseInt(tokenLife)
    })
  }

  let getToken = user => {
    return `JWT ${generateToken(user)}`
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

  let findByPasswordToken = token => {
    return User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: {
        $gt: new Date()
      }
    }).exec()
  }

  return {
    resetToken,
    getToken,
    findByPasswordToken
  }
}

module.exports = authService
