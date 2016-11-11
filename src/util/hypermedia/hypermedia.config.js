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
        require('./log.hypermedia.js')(entity, baseUrl, routes, REGEX)
        break

      case mongoDB.Model.User:        
        require('./user.hypermedia.js')(entity, baseUrl, routes, REGEX)
        break

      default:
        throw new Error('Entity not defined')
    }
    return entity
  }

  let setResponse = (req, entity, next) => {
    try {
      if ('data' in entity) {
        let model = entity.data[0].constructor.modelName
        entity.data = _.each(entity.data, item => setLinks(req, item._doc, model))
      } else {
        let model = entity.constructor.modelName
        entity._doc = setLinks(req, entity._doc, model)
      }
      return entity
    } catch (err) {
      next(err)
    }
  }

  return {
    setResponse: setResponse
  }
}
