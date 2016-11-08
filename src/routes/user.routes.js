const userService = require('../services/user.service')()
const userController = require('../controllers/user.controller')(userService)
const auth = require('passport').authenticate('jwt', {session: false})

module.exports = router => {
  const userHypermedia = require('../util/hypermedia/user.hypermedia')(router)

  router.get('/api/users', auth, userController.getAllUsers, userHypermedia.setResponse)
  router.get('/api/users/:userName', auth, userController.getByUserEmail, userHypermedia.setResponse)
}
