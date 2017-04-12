const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')

const appTypeSchema = new Schema({
  name: {
    type: String,
    index: {
      unique: true
    },
    required: true
  }
}, {
  collection: mongoDB.Collection.ApplicationType
})

appTypeSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.id
    return ret
  }
})

module.exports = mongoose.model(mongoDB.Model.ApplicationType, appTypeSchema)
