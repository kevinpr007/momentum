const _ = require('lodash')

module.exports = router => {
  let setLinks = (req, user, map) => {
    user.links = []
    user.links.push({
      href: `${req.protocol}://${req.headers.host}${map.get('getAllUsers').path}/${user.email}`,
      rel: 'self',
      method: map.get('getAllUsers').method
    })
    return user
  }

  let setResponse = (req, res, next) => {
    try {
      let routeMap = require('../route-map')(router)
      if ('data' in res.body) {
        res.body.data = _.each(res.body.data, elem => setLinks(req, elem._doc, routeMap))
      } else {
        res.body = setLinks(req, res.body._doc, routeMap)
      }
      res.json(res.body)
    } catch (err) {
      next(err)
    }
  }

  return {
    setResponse: setResponse
  }
}
