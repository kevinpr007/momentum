const {SECRET, RANDOM_BYTES, TOKEN_LIFE} = require('../config/config')
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const User = require('../models/user.model')
const tokenExpTime = parseInt(TOKEN_LIFE)
const moment = require('moment')
const _ = require('lodash')

const randomBytes = Promise.promisify(require('crypto').randomBytes)
const HOURS = 3600

module.exports = () => {
  const generateToken = user => jwt.sign(user, SECRET, {
    expiresIn: tokenExpTime
  })

  const getToken = user => `JWT ${generateToken(user)}`

  const setExpirationDate = () => moment().add((tokenExpTime / HOURS), 'h')

  const refreshToken = user => Promise.all([
    getToken(_.omit(user, ['exp'])),
    setExpirationDate()
  ])
    .then(([token, expiresIn]) => JSON.stringify({ token, expiresIn }))

  const resetPasswordToken = user => {
    const date = new Date()
    user = _.extend(user, User)
    return randomBytes(parseInt(RANDOM_BYTES))
      .then(buffer => {
        user.resetPasswordToken = buffer.toString('hex')
        user.resetPasswordExpires = date.setSeconds(date.getSeconds() + tokenExpTime)
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
    setExpirationDate,
    refreshToken
  }
}
