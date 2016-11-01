const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const auth = require('passport').authenticate('jwt', {session: false})

module.exports = router => {
  router.get('/users', auth, userController.getAllUsers)
  router.get('/users/:userName', auth, userController.getByUserEmail)
}
