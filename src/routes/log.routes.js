const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)
const hypermedia = require('../util/hypermedia/hypermedia.config')()
const routes = require('./routes.config')

module.exports = router => {
  router.get(routes.get('getLogs').path, logController.getAllLogs, hypermedia.setResponse)
  router.get(routes.get('getByLogCode').path, logController.getByCode, hypermedia.setResponse)
  router.get(routes.get('getByLogStatus').path, logController.getByStatus, hypermedia.setResponse)
}
