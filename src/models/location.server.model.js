const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')

const locationSchema = new Schema({
  name: {type: String, index: 1, required: true},
  description: {type: String},
  urlLocation: {type: String},
  createdBy: {type: Schema.ObjectId, ref: mongoDB.Model.User, required: true},
  createdOn: {type: Date, default: Date.now}
}, {collection: mongoDB.Collection.Location})

locationSchema.set('toJSON', {getters: true, virtuals: true})
mongoose.model(mongoDB.Model.Location, locationSchema)
