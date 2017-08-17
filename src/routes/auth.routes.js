const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')

const {
  auth,
  register,
  newPassword,
  resetPassword
  } = require('../controllers/auth.controller')(authService, userService, emailService)

module.exports = router => {
  router.post('/api/auth', auth)
  router.post('/api/register', register)
  router.post('/api/complete-reset-password', newPassword)
  router.post('/api/reset-password', resetPassword)
}
