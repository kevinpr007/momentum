const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService, router.templateModel)

  // TODO: Add a new middleware to have an automatic default authentication. I just want to add only the exceptions.
  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
  router.post('/reset-password', authController.newPassword)
  router.get('/reset-password/:token', authController.resetPassword)
  router.post('/confirm-reset-password', authController.confirmResetPassword)
}
