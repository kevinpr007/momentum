const logService = require('../services/log.service')()
const logController = require('../controllers/log.controller')(logService)

module.exports = router => {
  router.get('/logs', logController.getAllLogs)
  router.get('/logs/code/:code', logController.getByCode)
  router.get('/logs/status/:status', logController.getByStatus)
}
