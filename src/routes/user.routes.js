const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const auth = require('passport').authenticate('jwt', {session: false})
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getUsers').path, auth, userController.getAllUsers)
  router.get(routes.get('getByUserEmail').path, auth, userController.getByUserEmail)
}
