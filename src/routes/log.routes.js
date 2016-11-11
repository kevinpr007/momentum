const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getLogs').path, logController.getAllLogs)
  router.get(routes.get('getByLogCode').path, logController.getByCode)
  router.get(routes.get('getByLogStatus').path, logController.getByStatus)
}
