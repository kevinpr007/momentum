module.exports = router => {
  const indexController = require('../controllers/index.controller')(router.templateModel)

  router.get('/', indexController.index)
}
