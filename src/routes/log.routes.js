const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)
const authenticate = require('passport').authenticate('jwt', {session: false})
const authorize = require('../services/auth.service')().authorize
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getLogs').path, authenticate, authorize(['sysAdmin']), logController.getAllLogs)
  router.get(routes.get('getByLogCode').path, authenticate, authorize(['sysAdmin']), logController.getByCode)
  router.get(routes.get('getByLogStatus').path, authenticate, authorize(['sysAdmin']), logController.getByStatus)
}
