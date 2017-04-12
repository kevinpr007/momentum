const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')

const applicationSchema = new Schema({
  name: {
    type: String,
    index: {
      unique: true
    },
    required: true
  },
  appTypeId: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.ApplicationType,
    required: true
  }
}, {
  collection: mongoDB.Collection.Application
})

module.exports = mongoose.model(mongoDB.Model.Application, applicationSchema)
