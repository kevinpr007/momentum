const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')

const locationSchema = new Schema({
  name: {
    type: String,
    index: {
      unique: true
    },
    required: true
  },
  description: {
    type: String
  },
  urlLocation: {
    type: String
  },
  address: {
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    }
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
  collection: mongoDB.Collection.Location
})

locationSchema.set('toJSON', {
  getters: true,
  virtuals: true
})

module.exports = mongoose.model('Location', locationSchema)
