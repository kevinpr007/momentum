const config = require('../config/config')
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const User = require('../models/user.model')
const tokenExpTime = config.TOKEN_LIFE
const moment = require('moment')
const _ = require('lodash')

const randomBytes = Promise.promisify(require('crypto').randomBytes)

module.exports = () => {
  const generateToken = user =>
    jwt.sign(user, config.SECRET, {
      expiresIn: parseInt(tokenExpTime)
    })

  const getToken = user => `JWT ${generateToken(user)}`

  const setExpirationDate = () =>
    moment().add((parseInt(tokenExpTime) / 3600), 'h')

  const resetPasswordToken = user => {
    const date = new Date()
    user = _.extend(user, User)
    return randomBytes(parseInt(config.RANDOM_BYTES)).then(buffer => {
      user.resetPasswordToken = buffer.toString('hex')
      user.resetPasswordExpires = date.setSeconds(date.getSeconds() + parseInt(tokenExpTime))
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
    findByPasswordToken,
    setExpirationDate
  }
}
