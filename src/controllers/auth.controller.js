const HttpStatus = require('http-status-codes')
const resetPasswordEmail = require('../services/emails/reset-password')
const confirmResetPasswordEmail = require('../services/emails/confirm-reset-password')

let authController = (authService, templateModel) => {
  let userService = require('../services/user.service')()

  let auth = (req, res, next) => {
    userService.getByEmail(req.body.email).then(user => {
      if (!user) {
        res.status(HttpStatus.BAD_REQUEST)
            .json({error: 'Authentication failed. User not found.'})
      }
      user.isValidPassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          res.status(HttpStatus.OK).json({
            token: `JWT ${authService.generateToken(user)}`,
            user: user
          })
        } else {
          res.status(HttpStatus.BAD_REQUEST)
              .json({error: 'Authentication failed. Wrong password.'})
        }
      })
    }).catch(err => {
      req.log.error(err)
      next(err)
    })
  }

  let register = (req, res, next) => {
    userService.getByEmail(req.body.email).then(existingUser => {
      if (existingUser) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY)
            .json({error: 'That email address is already registered.'})
      }
      return userService.registerUser(req.body).then(user => {
        res.status(HttpStatus.CREATED).json({
          token: `JWT ${authService.generateToken(user)}`,
          user: user
        })
      })
    }).catch(err => {
      req.log.error(err)
      next(err)
    })
  }

  let confirmResetPassword = (req, res, next) => {
    userService.getByEmail(req.body.email).then(user => {
      if (!user) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY)
            .json({error: 'Your request could not be processed as entered. Please try again.'})
      }
      return authService.resetToken(user)
    }).then(user => {
      return confirmResetPasswordEmail(user, req.headers.host)
    }).then(data => {
      res.status(HttpStatus.OK).json({data: data})
    }).catch(err => {
      req.log.error(err)
      next(err)
    })
  }

  let resetPassword = (req, res, next) => {
    templateModel.token = req.params.token
    res.render('reset-password', templateModel)
  }

  let newPassword = (req, res, next) => {
    authService.resetUserPassword(req.body.token).then(user => {
      if (!user) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY)
            .json({error: 'Invalid token. Please confirm this action through your email.'})
      }
      user.password = req.body.password
      user.resetPasswordToken = undefined
      user.resetPasswordExpires = undefined
      return user.save()
    }).then(user => {
      return resetPasswordEmail(user)
    }).then(data => {
      res.status(HttpStatus.OK).json({data: data})
    }).catch(err => {
      req.log.error(err)
      next(err)
    })
  }

  return {
    auth: auth,
    register: register,
    newPassword: newPassword,
    resetPassword: resetPassword,
    confirmResetPassword: confirmResetPassword
  }
}

module.exports = authController
