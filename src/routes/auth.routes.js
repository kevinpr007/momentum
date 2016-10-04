const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService, router.templateModel)

  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
  router.post('/reset-password', authController.newPassword)
  router.get('/reset-password/:token', authController.resetPassword)
  router.post('/confirm-reset-password', authController.confirmResetPassword)
}
