const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const auth = require('passport').authenticate('jwt', {session: false})
const hypermedia = require('../util/hypermedia/hypermedia.config')()
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getUsers').path, auth, userController.getAllUsers, hypermedia.setResponse)
  router.get(routes.get('getByUserEmail').path, auth, userController.getByUserEmail, hypermedia.setResponse)
}
