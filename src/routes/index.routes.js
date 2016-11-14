const routes = require('./routes.config')

module.exports = router => {
  const indexController = require('../controllers/index.controller')(router.templateModel)

  router.get(routes.get('index').path, indexController.index)
}
