const mongoDB = require('../../config/mongoose.collections.json')
const _ = require('lodash')

class Hypermedia {
  constructor (req) {
    this.baseUrl = `${req.protocol}://${req.headers.host}`
  }

  setLinks (model, entity) {
    switch (model) {
      case mongoDB.Model.Log:
        require('./log.hypermedia.js')(entity, this.baseUrl)
        break
      case mongoDB.Model.User:
        require('./user.hypermedia.js')(entity, this.baseUrl)
        break
      default:
        throw new Error('Entity not defined')
    }
    return entity
  }

  setResponse (entity, next) {
    try {
      if ('data' in entity) {
        let model = entity.data[0].constructor.modelName
        entity.data = _.each(entity.data, item => this.setLinks(model, item._doc))
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
