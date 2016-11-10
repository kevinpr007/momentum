const _ = require('lodash')
const routes = require('../../routes/routes.config')
const REGEX = /\/:\w+/

module.exports = () => {
  let setLinks = (req, log) => {
    let baseUrl = `${req.protocol}://${req.headers.host}`
    log.links = [{
      href: `${baseUrl}${routes.get('getLogs').path}`,
      rel: 'self',
      method: routes.get('getLogs').method
    },
    {
      href: `${baseUrl}${routes.get('getByLogCode').path}`.replace(REGEX, `/${log.code}`),
      rel: 'self',
      method: routes.get('getByLogCode').method
    },
    {
      href: `${baseUrl}${routes.get('getByLogStatus').path}`.replace(REGEX, `/${log.status}`),
      rel: 'self',
      method: routes.get('getByLogStatus').method
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
