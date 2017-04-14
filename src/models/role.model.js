const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')
const roles = require('./roles.enum')

const roleSchema = new Schema({
  name: {
    type: String,
    enum: roles,
    required: true
  },
  appId: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.Application,
    required: true
  }
}, {
  collection: mongoDB.Collection.Role
})

module.exports = mongoose.model(mongoDB.Model.Role, roleSchema)
