const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getLogs').path, authenticate,
    authorize(['sysAdmin']), pageValidations, logController.getAllLogs)

  router.get(routes.get('getByLogCode').path, authenticate,
    authorize(['sysAdmin']), pageValidations, logController.getByCode)
}
