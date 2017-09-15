const appTypeService = require('../services/application-type.service')()
const authenticate = require('passport').authenticate('jwt', {session: false})
const pageValidations = require('../middleware/page-validations')
const authorize = require('../middleware/authorize')

const {
  getAllApplicationTypes,
  getByApplicationType,
  setApplicationType,
  updateApplicationType,
  deleteApplicationType
} = require('../controllers/application-type.controller')(appTypeService)

module.exports = router => {
  router.get('/api/application-type',
    authenticate,
    pageValidations,
    getAllApplicationTypes)

  router.get('/api/application-type/:id',
    authenticate,
    getByApplicationType)

  // TODO: Remove all hardcode roles
  router.post('/api/application-type',
    authenticate,
    authorize([{ name: 'sysAdmin' }]),
    setApplicationType)

  router.put('/api/application-type/:id',
    authenticate,
    authorize([{ name: 'sysAdmin' }]),
    updateApplicationType)

  router.delete('/api/application-type/:id',
    authenticate,
    authorize([{ name: 'sysAdmin' }]),
    deleteApplicationType)
}
