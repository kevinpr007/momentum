const _ = require('lodash')
const routes = require('../../routes/routes.config')

module.exports = () => {
  let setLinks = (req, log) => {
    let baseUrl = `${req.protocol}://${req.headers.host}`
    log.links = [{
      href: `${baseUrl}${routes.get('getLogs').path}`,
      rel: 'self',
      method: routes.get('getLogs').method
    }]

    return log
  }

  let setResponse = (req, res, next) => {
    try {
      if ('data' in res.body) {
        res.body.data = _.each(res.body.data, item => setLinks(req, item._doc))
      } else {
        res.body._doc = setLinks(req, res.body._doc)
      }
      return res.body
    } catch (err) {
      next(err)
    }
  }

  return {
    setResponse: setResponse
  }
}
