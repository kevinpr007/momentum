const _ = require('lodash')

module.exports = router => {
  let routeMap = new Map()
  _.each(router.stack, item => {
    _.each(item.route.stack, r => {
      routeMap.set(r.name, {
        path: item.route.path,
        method: r.method.toUpperCase()
      })
    })
  })
  return routeMap
}
