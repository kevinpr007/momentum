const config = require('../config/config')
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const User = require('../models/user.model')
const tokenLife = config.TOKEN_LIFE
const _ = require('lodash')

const randomBytes = Promise.promisify(require('crypto').randomBytes)

module.exports = () => {
  const generateToken = user =>
    jwt.sign(user, config.SECRET, {
      expiresIn: parseInt(tokenLife)
    })

  const getToken = user => `JWT ${generateToken(user)}`

  const resetPasswordToken = user => {
    const date = new Date()
    user = _.extend(user, User)
    return randomBytes(parseInt(config.RANDOM_BYTES)).then(buffer => {
      user.resetPasswordToken = buffer.toString('hex')
      user.resetPasswordExpires = date.setSeconds(date.getSeconds() + parseInt(tokenLife))
      return user.save()
    })
  }

  const findByPasswordToken = token =>
    User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: {
        $gt: new Date()
      }
    }).exec()

  return {
    resetPasswordToken,
    getToken,
    findByPasswordToken
  }
}
