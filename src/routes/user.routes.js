const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getUsers').path, authenticate,
    authorize(['Admin']), pageValidations, userController.getAllUsers)

  router.get(routes.get('getByUserEmail').path, authenticate,
    authorize(['Admin']), userController.getByUserEmail)
}
