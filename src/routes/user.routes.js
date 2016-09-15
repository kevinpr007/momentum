const userService = require('../services/userService')()
const userController = require('../controllers/user.controller')(userService)

module.exports = router => {
  router.get('/users', userController.getAllUsers)
  router.get('/users/:userName', userController.getByUserName)
}
