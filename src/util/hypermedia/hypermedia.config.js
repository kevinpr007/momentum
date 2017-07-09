const mongoDB = require('../../config/mongoose.collections.json')
const HttpStatus = require('http-status-codes')
const _ = require('lodash')

class Hypermedia {
  constructor (req) {
    this.baseUrl = `${req.protocol}://${req.headers.host}`
  }

  setLinks (model, entity) {
    switch (model) {
      case mongoDB.Model.Log:
        require('./log.hypermedia')(entity, this.baseUrl)
        break
      case mongoDB.Model.User:
        require('./user.hypermedia')(entity, this.baseUrl)
        break
      default:
        const err = new Error('Entity not defined')
        err.status = HttpStatus.INTERNAL_SERVER_ERROR
        throw err
    }
    return entity
  }

  setResponse (entity, next) {
    try {
      if ('data' in entity) {
        if (entity.data.length > 0) {
          const model = entity.data[0].constructor.modelName
          entity.data = _.each(entity.data, item => this.setLinks(model, item._doc))
        }
      } else {
        entity._doc = this.setLinks(entity.constructor.modelName, entity._doc)
      }
      return entity
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Hypermedia
