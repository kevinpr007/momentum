const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const auth = require('passport').authenticate('jwt', {session: false})
const userHypermedia = require('../util/hypermedia/user.hypermedia')()
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getUsers').path, auth, userController.getAllUsers, userHypermedia.setResponse)
  router.get(routes.get('getByUserEmail').path, auth, userController.getByUserEmail, userHypermedia.setResponse)
}
