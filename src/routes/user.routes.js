const userService = require('../services/user.service')()
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')

const {
  getAllUsers,
  getByUserEmail
} = require('../controllers/user.controller')(userService)

module.exports = router => {
  router.get('/api/users', authenticate,
    authorize([{ name: 'Admin' }]), pageValidations, getAllUsers)

  router.get('/api/users/:userName', authenticate,
    authorize([{ name: 'Admin' }]), getByUserEmail)
}
