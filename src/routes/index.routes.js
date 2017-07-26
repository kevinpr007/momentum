const routes = require('./routes.config')

const {
  getIndex
} = require('../controllers/index.controller')()

module.exports = router => {
  router.get(routes.get('index').path, getIndex)
}
