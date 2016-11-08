const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)

module.exports = router => {
  router.get('/api/logs', logController.getAllLogs)
  router.get('/api/logs/:code', logController.getByCode)
  router.get('/api/logs/:status', logController.getByStatus)
}
