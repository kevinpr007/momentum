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
  appTypeId: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.Role,
    required: true
  }
}, {
  collection: mongoDB.Collection.Role
})

module.exports = mongoose.model(mongoDB.Model.Application, roleSchema)
