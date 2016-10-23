const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')()

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService,
    emailService, router.templateModel)

  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
  router.post('/complete-reset-password', authController.newPassword)
  router.get('/confirm-reset-password/:token', authController.confirmResetPassword)
  router.post('/reset-password', authController.resetPassword)
}
