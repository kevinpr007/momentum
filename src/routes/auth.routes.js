const authService = require('../services/auth.service')()
const authController = require('../controllers/auth.controller')(authService)

module.exports = router => {
  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
  router.post('/reset-password/:token', authController.resetPassword)
  router.post('/confirm-reset-password', authController.confirmResetPassword)
}
