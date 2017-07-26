const logService = require('../services/log.service')()
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')
const routes = require('./routes.config')

const {
  getAllLogs,
  getByCode
} = require('../controllers/log.controller')(logService)

module.exports = router => {
  router.get(routes.get('getLogs').path, authenticate,
    authorize(['sysAdmin']), pageValidations, getAllLogs)

  router.get(routes.get('getByLogCode').path, authenticate,
    authorize(['sysAdmin']), pageValidations, getByCode)
}
