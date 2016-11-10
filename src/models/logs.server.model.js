const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')

const logSchema = new Schema({
  code: {
    type: String,
    default: null,
    index: true
  },
  status: {
    type: String,
    default: null,
    index: true
  },
  message: {
    type: String,
    default: null
  },
  stack: {
    type: String
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
}, {
  collection: mongoDB.Collection.Log,
  capped: {
    size: 5242880,
    max: 5000,
    autoIndexId: true
  } // 5 Megas
})

logSchema.virtual('getError').get(function () {
  return `${this.code} - ${this.status} - ${this.message}`
})

logSchema.set('toJSON', {
  getters: true,
  virtuals: true
})

module.exports = mongoose.model(mongoDB.Model.Log, logSchema)
