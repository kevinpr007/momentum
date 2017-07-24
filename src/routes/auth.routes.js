const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')
const routes = require('./routes.config')

const {
  auth,
  register,
  newPassword,
  confirmResetPassword,
  resetPassword
  } = require('../controllers/auth.controller')(authService, userService, emailService)

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService,
    emailService)

  router.post(routes.get('auth').path, authController.auth)

  router.post(routes.get('register').path, authController.register)

  router.post(routes.get('newPassword').path, authController.newPassword)

  router.post(routes.get('resetPassword').path, authController.resetPassword)
}
