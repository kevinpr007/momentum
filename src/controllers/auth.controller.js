const HttpStatus = require('http-status-codes')
const emailFactory = require('../helpers/email.factory')

let authController = (authService, userService, emailService, templateModel) => {
  let auth = (req, res, next) => {
    let user = null
    userService.getByEmail(req.body.email).then(usr => {
      if (!usr) {
        let err = new Error('Authentication failed. User not found.')
        err.status = HttpStatus.NOT_FOUND
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
      let emailTemplate = require('../services/emails/new-account')(user, req.headers.host).getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
    }).catch(next)
  }

  let confirmResetPassword = (req, res, next) => {
    try {
      if (!req.params.token) {
        let err = new Error('No token was provided.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }
      templateModel.token = req.params.token
      res.render('reset-password', templateModel)
    } catch(err) {
      next(err)
    }
  }

  let resetPassword = (req, res, next) => {
    userService.getByEmail(req.body.email).then(user => {
      if (!user) {
        let err = new Error('Your request could not be processed as entered. User does not exist.')
        err.status = HttpStatus.NOT_FOUND
        throw err
      }
      return authService.resetToken(user)
    }).then(user => {
      let emailTemplate = require('../services/emails/confirm-reset-password')(req.headers.host,
        user.resetPasswordToken).getTemplate()
      let emailInfo = emailFactory(user.email, emailTemplate.subject, emailTemplate.html).getInfo()
      return emailService(emailInfo).send()
    }).then(data => {
      res.status(HttpStatus.OK).json({data: data})
    }).catch(next)
  }

  let newPassword = (req, res, next) => {
    let user = null
    authService.findByPasswordToken(req.body.token).then(usr => {
      if (!usr) {
        let err = new Error('Invalid token. Please confirm this action through your email.')
        err.status = HttpStatus.UNPROCESSABLE_ENTITY
        throw err
      }
      user = usr
      return user.isValidPassword(req.body.currentPassword)
    }).then(isMatch => {
      if (isMatch) {
        return user.confirmPasswordValid(req.body.password, req.body.confirmPassword)
      } else {
        let err = new Error('Invalid password. Please validate your current password.')
        err.status = HttpStatus.BAD_REQUEST
        throw err
      }
    }).then(isConfirmed => {
      if (isConfirmed) {
        user.password = req.body.confirmPassword
        user.resetPasswordToken = undefined
        user.resetPasswordExpires = undefined
        return userService.upsertUser(user)
      } else {
        let err = new Error('Invalid confirmation password. Please validate your new password.')
        err.status = HttpStatus.BAD_REQUEST
        throw err
      }
    }).then(user => {
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
