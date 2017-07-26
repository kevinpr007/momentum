const userService = require('../services/user.service')()
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')
const routes = require('./routes.config')

const {
  getAllUsers,
  getByUserEmail
} = require('../controllers/user.controller')(userService)

module.exports = router => {
  router.get(routes.get('getUsers').path, authenticate,
    authorize(['Admin']), pageValidations, getAllUsers)

  router.get(routes.get('getByUserEmail').path, authenticate,
    authorize([{
      name: 'Admin'
    }]), getByUserEmail)
}
