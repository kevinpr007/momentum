const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')
const routes = require('./routes.config')

module.exports = (router) => {
  const userHypermedia = require('../util/hypermedia/user.hypermedia')(router)
  const authController = require('../controllers/auth.controller')(authService, userService,
    emailService, router.templateModel)

  router.post(routes.get('auth').path, authController.auth, userHypermedia.setResponse)
  router.post(routes.get('register').path, authController.register, userHypermedia.setResponse)
  router.post(routes.get('newPassword').path, authController.newPassword)
  router.get(routes.get('confirmResetPassword').path, authController.confirmResetPassword)
  router.post(routes.get('resetPassword').path, authController.resetPassword)
}
