const HttpStatus = require('http-status-codes')
const emailService = require('../services/email.service')
const emailFactory = require('../helpers/email.factory')

let authController = (authService, userService, templateModel) => {
  let auth = (req, res, next) => {
    let user = null
    userService.getByEmail(req.body.email).then(usr => {
      if (!usr) {
        let err = new Error('Authentication failed. User not found.')
        err.status = HttpStatus.BAD_REQUEST
        throw err
      }
      user = usr
      return user.isValidPassword(req.body.password)
    }).then(isMatch => {
      if (isMatch) {
        res.status(HttpStatus.OK).json({
          token: authService.getToken(user),
          user: user
        })
      } else {
        let err = new Error('Authentication failed. Wrong password.')
        err.status = HttpStatus.BAD_REQUEST
        throw err
      }
    }).catch(next)
  }

  let register = (req, res, next) => {
    let user = null
    userService.getByEmail(req.body.email).then(existingUser => {
      if (existingUser) {
        let err = new Error('That email address is already registered.')
        err.status = HttpStatus.UNPROCESSABLE_ENTITY
        throw err
      }
      return userService.registerUser(req.body)
    }).then(usr => {
      user = usr
      res.status(HttpStatus.CREATED).json({
        token: authService.getToken(usr),
        user: usr
      })
    }).then(() => {
      // Send email for new account
      let emailTemplate = require('../services/emails/new-account')(user, req.headers.host).getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
    }).catch(next)
  }

  let confirmResetPassword = (req, res, next) => {
    userService.getByEmail(req.body.email).then(user => {
      if (!user) {
        let err = new Error('Your request could not be processed as entered. Please try again.')
        err.status = HttpStatus.UNPROCESSABLE_ENTITY
        throw err
      }
      return authService.resetToken(user)
    }).then(user => {
      // Confirm Reset Password Email
      let emailTemplate = require('../services/emails/confirm-reset-password')(req.headers.host, user.resetPasswordToken).getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
    }).then(data => {
      res.status(HttpStatus.OK).json({data: data})
    }).catch(next)
  }

  let resetPassword = (req, res, next) => {
    templateModel.token = req.params.token
    res.render('reset-password', templateModel)
  }

  let newPassword = (req, res, next) => {
    let user = null
    authService.resetUserPassword(req.body.token).then(usr => {
      if (!usr) {
        let err = new Error('Invalid token. Please confirm this action through your email.')
        err.status = HttpStatus.UNPROCESSABLE_ENTITY
        throw err
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
        let err = new Error('Invalid password. Please validate your current password.')
        err.status = HttpStatus.BAD_REQUEST
        throw err
      }
    }).then(user => {
      // Reset Password Email
      let emailTemplate = require('../services/emails/reset-password')().getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
    }).then(data => {
      res.status(HttpStatus.OK).json({data: data})
    }).catch(next)
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
