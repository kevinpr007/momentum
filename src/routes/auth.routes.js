const authService = require('../services/auth.service')()
const userService = require('../services/user.service')()
const emailService = require('../services/email.service')
const routes = require('./routes.config')

const {
  auth,
  register,
  newPassword,
  resetPassword
  } = require('../controllers/auth.controller')(authService, userService, emailService)

module.exports = router => {
  router.post(routes.get('auth').path, auth)

  router.post(routes.get('register').path, register)

  router.post(routes.get('newPassword').path, newPassword)

  router.post(routes.get('resetPassword').path, resetPassword)
}
