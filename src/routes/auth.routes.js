const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()

module.exports = (router) => {
  const authController = require('../controllers/auth.controller')(authService, userService, router.templateModel)

  // TODO: Add a new middleware to have an automatic default authentication. I just want to add only the exceptions.
  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
  router.post('/complete-reset-password', authController.newPassword)
  router.get('/confirm-reset-password/:token', authController.confirmResetPassword)
  router.post('/reset-password', authController.resetPassword)
}
