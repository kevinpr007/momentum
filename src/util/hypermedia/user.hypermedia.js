const _ = require('lodash')

module.exports = router => {
  let setLinks = (req, user, map) => {
    let baseUrl = `${req.protocol}://${req.headers.host}`
    user.links = [{
      href: `${baseUrl}${map.get('getAllUsers').path}/${user.email}`,
      rel: 'self',
      method: map.get('getAllUsers').method
    }, {
      href: `${baseUrl}${map.get('auth').path}`,
      rel: 'auth',
      method: map.get('auth').method
    }]
    return user
  }

  let setResponse = (req, res, next) => {
    try {
      let routeMap = require('../route-map')(router)
      if ('data' in res.body) {
        res.body.data = _.each(res.body.data, item => setLinks(req, item._doc, routeMap))
      } else {
        res.body._doc = setLinks(req, res.body._doc, routeMap)
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
