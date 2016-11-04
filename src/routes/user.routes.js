const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const auth = require('passport').authenticate('jwt', {session: false})
const setHypermedia = require('../util/user.hypermedia')

module.exports = router => {
  router.get('/users', auth, userController.getAllUsers, setHypermedia)
  router.get('/users/:userName', auth, userController.getByUserEmail)
}
