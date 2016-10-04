const HttpStatus = require('http-status-codes')
const emailService = require('../services/email.service')
const emailFactory = require('../helpers/email.factory')

let authController = (authService, userService, templateModel) => {
  let auth = (req, res, next) => {
    let user = null
    userService.getByEmail(req.body.email).then(usr => {
      if (!usr) {
        next({
          status: HttpStatus.BAD_REQUEST,
          message: 'Authentication failed. User not found.'
        })
      }
      user = usr
      return user.isValidPassword(req.body.password)
    }).then(isMatch => {
      if (isMatch) {
        res.status(HttpStatus.OK).json({
          token: `JWT ${authService.generateToken(user)}`,
          user: user
        })
      } else {
        next({
          status: HttpStatus.BAD_REQUEST,
          message: 'Authentication failed. Wrong password.'
        })
      }
    }).catch(err => {
      req.log.error(err)
      next(err)
    })
  }

  let register = (req, res, next) => {
    let user = null
    userService.getByEmail(req.body.email).then(existingUser => {
      if (existingUser) {
        next({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          message: 'That email address is already registered.'
        })
      }
      return userService.registerUser(req.body)
    }).then(usr => {
      user = usr
      res.status(HttpStatus.CREATED).json({
        token: `JWT ${authService.generateToken(usr)}`,
        user: usr
      })
    }).then(() => {
      // Send email for new account
      let emailTemplate = require('../services/emails/new-account')(user, req.headers.host).getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
    }).catch(err => {
      req.log.error(err)
      next(err)
    })
  }

  let confirmResetPassword = (req, res, next) => {
    userService.getByEmail(req.body.email).then(user => {
      if (!user) {
        next({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          message: 'Your request could not be processed as entered. Please try again.'
        })
      }
      return authService.resetToken(user)
    }).then(user => {
      // Confirm Reset Password Email
      let emailTemplate = require('../services/emails/confirm-reset-password')(req.headers.host, user.resetPasswordToken).getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
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
    let user = null
    authService.resetUserPassword(req.body.token).then(usr => {
      if (!usr) {
        next({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          message: 'Invalid token. Please confirm this action through your email.'
        })
      }
      user = usr
      return user.isValidPassword(req.body.currentPassword)
    }).then(isMatch => {
      if (isMatch) {
        user.password = req.body.confirmPassword
        user.resetPasswordToken = undefined
        user.resetPasswordExpires = undefined
        return user.save()
      } else {
        next({
          status: HttpStatus.BAD_REQUEST,
          message: 'Invalid password. Please validate your current password.'
        })
      }
    }).then(user => {
      // Reset Password Email
      let emailTemplate = require('../services/emails/reset-password')().getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
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
