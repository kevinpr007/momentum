const {getIndex} = require('../controllers/index.controller')()

module.exports = router => {
  router.get('/', getIndex)
}
