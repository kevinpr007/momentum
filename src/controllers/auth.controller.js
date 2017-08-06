const HttpStatus = require('http-status-codes')
const emailFactory = require('../util/email.factory')
const util = require('../util/util.helpers')

const emails = {
  resetPassword: require('../services/emails/reset-password'),
  confirmResetPassword: require('../services/emails/confirm-reset-password'),
  newAccount: require('../services/emails/new-account')
}

module.exports = (authService, userService, emailService) => {
  /**
   * @desc Authenticates a user.
   */
  function auth (req, res, next) {
    const validateUser = user => {
      if (!user) {
        let message = 'Authentication failed. User not found.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      return user.isValidPassword(req.body.password)
    }

    const validatePassword = ({user, isMatch}) => {
      if (!isMatch) {
        let message = 'Authentication failed. User not found.'
        return util.generateError(message, HttpStatus.BAD_REQUEST)
      }

      return user
    }

    const setResponse = user => {
      user._doc.jwt = {
        token: authService.getToken(user),
        expiresIn: authService.setExpirationDate()
      }

      return res.status(HttpStatus.OK).json(user)
    }

    return userService.getByEmail(req.body.email)
      .then(validateUser)
      .then(validatePassword)
      .then(setResponse)
      .catch(next)
  }

  /**
   * @desc Registers a new user.
   */
  function register (req, res, next) {
    const validateUser = user => {
      if (user) {
        let message = 'That email address is already registered.'
        return util.generateError(message, HttpStatus.UNPROCESSABLE_ENTITY)
      }

      return userService.registerUser(req.body)
    }

    const setResponse = user => {
      user._doc.jwt = {
        token: authService.getToken(user),
        expiresIn: authService.setExpirationDate()
      }

      res.status(HttpStatus.CREATED).json(user)

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

  /**
   * @desc Sends email to user with reset password instructions.
   */
  function resetPassword (req, res, next) {
    const validateUser = user => {
      if (!user) {
        let message = 'Your request could not be processed as entered. User does not exist.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      return authService.resetPasswordToken(user)
    }

    const sendConfirmationEmail = user => {
      const host = req.headers.referer || `${req.protocol}://${req.headers.host}/`
      const email = emails.confirmResetPassword(host, user.resetPasswordToken).getTemplate()
      const emailInfo = emailFactory(user.email, email.subject, email.html).getInfo()

      return emailService(emailInfo).send()
    }

    const setResponse = data => res.status(HttpStatus.OK).json({ data })

    return userService.getByEmail(req.body.email)
      .then(validateUser)
      .then(sendConfirmationEmail)
      .then(setResponse)
      .catch(next)
  }

  /**
   * @desc Resets user's password.
   */
  function newPassword (req, res, next) {
    const validateToken = user => {
      if (!user) {
        let message = 'Invalid token. Please confirm this action through your email.'
        return util.generateError(message, HttpStatus.UNPROCESSABLE_ENTITY)
      }

      return user.isValidPassword(req.body.currentPassword)
    }

    const validatePassword = ({user, isMatch}) => {
      if (!isMatch) {
        let message = 'Invalid password. Please validate your current password.'
        return util.generateError(message, HttpStatus.BAD_REQUEST)
      }

      return user.confirmPasswordValid(req.body.password, req.body.confirmPassword)
    }

    const validatePasswordConfirmation = ({user, isValid}) => {
      if (!isValid) {
        let message = 'Invalid confirmation password. Please validate your new password.'
        return util.generateError(message, HttpStatus.BAD_REQUEST)
      }

      user.password = req.body.confirmPassword
      user.resetPasswordToken = undefined
      user.resetPasswordExpires = undefined

      return userService.upsertUser(user)
    }

    const sendConfirmationEmail = user => {
      const email = emails.resetPassword().getTemplate()
      const emailInfo = emailFactory(user.email, email.subject, email.html).getInfo()

      return emailService(emailInfo).send()
    }

    const setResponse = data => res.status(HttpStatus.OK).json({ data })

    return authService.findByPasswordToken(req.body.token)
      .then(validateToken)
      .then(validatePassword)
      .then(validatePasswordConfirmation)
      .then(sendConfirmationEmail)
      .then(setResponse)
      .catch(next)
  }

  return {
    auth,
    register,
    newPassword,
    resetPassword
  }
}
