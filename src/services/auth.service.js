const HttpStatus = require('http-status-codes')
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

  let authorize = roles => {
    return (req, res, next) => {
      if (!roles.includes(req.user.roles)) { // TODO: Check if a user could have multiple roles.
        let err = new Error('Your user does not have the required role(s) to execute this action.')
        err.status = HttpStatus.UNAUTHORIZED
        throw err
      }
      next()
    }
  }

  return {
    resetToken: resetToken,
    getToken: getToken,
    findByPasswordToken: findByPasswordToken,
    authorize: authorize
  }
}

module.exports = authService
