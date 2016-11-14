const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')

const serviceSchema = new Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.User,
    required: true,
    index: true
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.User,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
}, {
  collection: mongoDB.Collection.Service
})

serviceSchema.virtual('show').get(function () {
  return `${this.name}: ${this.price} - ${this.time}`
})

serviceSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.id
    return ret
  }
})

module.exports = mongoose.model(mongoDB.Model.Service, serviceSchema)
