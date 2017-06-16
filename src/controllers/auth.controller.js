const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const emailFactory = require('../util/email.factory')

/**
 * TODO:
 * use promise chaining instead of higher-scope variables.
 * use compoaing promises.
 */
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
        user._doc.token = authService.getToken(user)
        res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(user, next))
      } else {
        let err = new Error('Authentication failed. Wrong password.')
        err.status = HttpStatus.BAD_REQUEST
        throw err
      }
    }).catch(next)
  }

  /**
   * TODO:
   * use promise chaining instead of higher-scope variables.
   * use composing promises.
   */
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
      user._doc.token = authService.getToken(user)
      res.status(HttpStatus.CREATED).json(new Hypermedia(req).setResponse(user, next))
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
    } catch (err) {
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

  /**
   * TODO:
   * use promise chaining instead of higher-scope variables.
   * use composing promises.
   */
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
    auth,
    register,
    newPassword,
    resetPassword,
    confirmResetPassword
  }
}

module.exports = authController
