const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')
const hypermedia = require('../util/hypermedia/hypermedia.config')()
const routes = require('./routes.config')

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService,
    emailService, router.templateModel)

  router.post(routes.get('auth').path, authController.auth, hypermedia.setResponse)
  router.post(routes.get('register').path, authController.register, hypermedia.setResponse)
  router.post(routes.get('newPassword').path, authController.newPassword)
  router.get(routes.get('confirmResetPassword').path, authController.confirmResetPassword)
  router.post(routes.get('resetPassword').path, authController.resetPassword)
}
