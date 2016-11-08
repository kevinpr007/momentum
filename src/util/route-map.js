const _ = require('lodash')

module.exports = router => {
  let routeMap = new Map()
  _.each(router.stack, item => {
    _.each(item.route.stack, r => {
      let method = r.method.toUpperCase()
      routeMap.set(r.name, {
        path: item.route.path,
        method: method
      })
    })
  })
  return routeMap
}
