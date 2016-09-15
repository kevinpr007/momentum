const authService = require('../services/authService')()
const authController = require('../controllers/auth.controller')(authService)

module.exports = router => {
  router.post('/login', authController.login)
  router.post('/register', authController.register)
}
