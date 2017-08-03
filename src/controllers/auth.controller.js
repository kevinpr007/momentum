const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const emailFactory = require('../util/email.factory')
const util = require('../util/util.helpers')

const emails = {
  resetPassword: require('../services/emails/reset-password'),
  confirmResetPassword: require('../services/emails/confirm-reset-password'),
  newAccount: require('../services/emails/new-account')
}

module.exports = (authService, userService, emailService) => {
  function auth (req, res, next) {
    const setJWT = user => {
      user._doc.jwt = {
        token: authService.getToken(user),
        expiresIn: authService.setExpirationDate()
      }

      res.locals = user
      next()
    }

    const matchPassword = ({user, isMatch}) => {
      if (!isMatch) {
        let message = 'Authentication failed. User not found.'
        return util.generateError(message, HttpStatus.BAD_REQUEST)
      }

      return user
    }

    const validatePassword = user => 
      user.isValidPassword(req.body.password)
        .then(matchPassword)
        .then(setJWT)
        .catch(next)

    const validateUser = user => {
      if (!user) {
        let message = 'Authentication failed. User not found.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      return user
    }

    return userService.getByEmail(req.body.email)
      .then(validateUser)
      .then(validatePassword)
      .catch(next)
  }

  function register (req, res, next) {
    const validateUser = user => {
      if (user) {
        const err = new Error('That email address is already registered.')
        err.status = HttpStatus.UNPROCESSABLE_ENTITY
        throw err
      }

      return userService.registerUser(req.body)
    }

    const setResponse = user => {
      user._doc.jwt = {
        token: authService.getToken(user),
        expiresIn: authService.setExpirationDate()
      }

      res.status(HttpStatus.CREATED)
        .json(user)

      return user
    }

    const sendEmail = user => {
      let email = emails.newAccount(user, req.headers.host).getTemplate()
      let emailInfo = emailFactory(user.email, email.subject, email.html).getInfo()

      return emailService(emailInfo).send()
    }

    return userService.getByEmail(req.body.email)
      .then(validateUser)
      .then(setResponse)
      .then(sendEmail)
      .catch(next)
  }

  const resetPassword = (req, res, next) => 
    userService.getByEmail(req.body.email)
      .then(user => {
        if (!user) {
          const err = new Error('Your request could not be processed as entered. User does not exist.')
          err.status = HttpStatus.NOT_FOUND
          throw err
        }
        return authService.resetPasswordToken(user)
      })
      .then(user => {
        const host = req.headers.referer || `${req.protocol}://${req.headers.host}/`
        const email = emails.confirmResetPassword(host, user.resetPasswordToken).getTemplate()
        const emailInfo = emailFactory(user.email, email.subject, email.html).getInfo()

        return emailService(emailInfo).send()
      })
      .then(data => res.status(HttpStatus.OK).json({ data }))
      .catch(next)

  const newPassword = (req, res, next) => 
    authService.findByPasswordToken(req.body.token)
      .then(user => {
        if (!user) {
          const err = new Error('Invalid token. Please confirm this action through your email.')
          err.status = HttpStatus.UNPROCESSABLE_ENTITY
          throw err
        }
        return user.isValidPassword(req.body.currentPassword)
          .then(({isMatch}) => {
            if (isMatch) {
              return user.confirmPasswordValid(req.body.password, req.body.confirmPassword)
            } else {
              const err = new Error('Invalid password. Please validate your current password.')
              err.status = HttpStatus.BAD_REQUEST
              throw err
            }
          })
          .then(isConfirmed => {
            if (isConfirmed) {
              user.password = req.body.confirmPassword
              user.resetPasswordToken = undefined
              user.resetPasswordExpires = undefined
              return userService.upsertUser(user)
            } else {
              const err = new Error('Invalid confirmation password. Please validate your new password.')
              err.status = HttpStatus.BAD_REQUEST
              throw err
            }
          })
      })
      .then(user => {
        const email = emails.resetPassword().getTemplate()
        const emailInfo = emailFactory(user.email, email.subject, email.html).getInfo()

        return emailService(emailInfo).send()
      })
      .then(data => res.status(HttpStatus.OK).json({ data }))
      .catch(next)

  return {
    auth,
    register,
    newPassword,
    resetPassword
  }
}
