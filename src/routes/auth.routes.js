const authService = require('../services/auth.service')()

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, router.navModel)

  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
  router.post('/reset-password', authController.newPassword)
  router.get('/reset-password/:token', authController.resetPassword)
  router.post('/confirm-reset-password', authController.confirmResetPassword)
}
