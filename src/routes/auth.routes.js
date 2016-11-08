const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')

module.exports = (router) => {
  const userHypermedia = require('../util/hypermedia/user.hypermedia')(router)
  const authController = require('../controllers/auth.controller')(authService, userService,
    emailService, router.templateModel)

  router.post('/api/auth', authController.auth, userHypermedia.setResponse)
  router.post('/api/register', authController.register, userHypermedia.setResponse)
  router.post('/api/complete-reset-password', authController.newPassword)
  router.get('/api/confirm-reset-password/:token', authController.confirmResetPassword)
  router.post('/api/reset-password', authController.resetPassword)
}
