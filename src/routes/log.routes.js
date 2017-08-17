const logService = require('../services/log.service')()
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')

const {
  getAllLogs,
  getByCode
} = require('../controllers/log.controller')(logService)

module.exports = router => {
  router.get('/api/logs', authenticate,
    authorize([{ name: 'sysAdmin' }]), pageValidations, getAllLogs)

  router.get('/api/logs/:code(\\d+)', authenticate,
    authorize([{ name: 'sysAdmin' }]), pageValidations, getByCode)
}
