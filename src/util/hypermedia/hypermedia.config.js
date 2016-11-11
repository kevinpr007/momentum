const mongoDB = require('../../config/mongoose.collections.json')
const routes = require('../../routes/routes.config')
const _ = require('lodash')
const REGEX = /\/:\w+/

module.exports = () => {
  let setLinks = (req, entity, model) => {
    let baseUrl = `${req.protocol}://${req.headers.host}`
    return getLinks(entity, baseUrl, routes, model)
  }

  let getLinks = (entity, baseUrl, routes, model) => {
    switch (model) {
      case mongoDB.Model.Log:
        // TODO: Business Logic
        require('./log.hypermedia.js')(entity, baseUrl, routes, REGEX)
        break

      case mongoDB.Model.User:
        // TODO: Business Logic
        require('./user.hypermedia.js')(entity, baseUrl, routes, REGEX)
        break

      default:
        throw new Error('Entity not defined')
    }
    return entity
  }

  let setResponse = (req, res, next) => {
    try {
      if ('data' in res.body) {
        let model = res.body.data[0].constructor.modelName
        res.body.data = _.each(res.body.data, item => setLinks(req, item._doc, model))
      } else {
        let model = res.body.constructor.modelName
        res.body._doc = setLinks(req, res.body._doc, model)
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
