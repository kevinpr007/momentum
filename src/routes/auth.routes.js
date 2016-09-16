const authService = require('../services/authService')()
const authController = require('../controllers/auth.controller')(authService)

module.exports = router => {
  router.post('/auth', authController.auth)
  router.post('/register', authController.register)
}
