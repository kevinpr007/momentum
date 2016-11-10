const _ = require('lodash')
const routes = require('../../routes/routes.config')

module.exports = () => {
  let setLinks = (req, user) => {
    let baseUrl = `${req.protocol}://${req.headers.host}`
    user.links = [{
      href: `${baseUrl}${routes.get('getUsers').path}/${user.email}`,
      rel: 'self',
      method: routes.get('getUsers').method
    }]

    return user
  }

  let setResponse = (req, res, next) => {
    try {
      if ('data' in res.body) {
        res.body.data = _.each(res.body.data, item => setLinks(req, item._doc))
      } else {
        res.body._doc = setLinks(req, res.body._doc)
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
