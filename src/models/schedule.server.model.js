const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoDB = require('../config/mongoose.collections.json')
const types = require('./schedule-types.server.enum')()

const scheduleSchema = new Schema({
  startDate: {
    type: Date,
    required: true,
    index: true
  },
  endDate: {
    type: Date,
    required: true,
    index: true
  },
  scheduleType: {
    type: String,
    enum: types,
    index: true
  },
  service: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.Service,
    required: true,
    index: true
  },
  workshift: {
    type: Schema.ObjectId,
    ref: mongoDB.Model.Workshift,
    required: true
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
  collection: mongoDB.Collection.Schedule
})

scheduleSchema.virtual('show').get(function () {
  return `${this.service}: ${this.startDate} - ${this.endDate}`
})

scheduleSchema.set('toJSON', {
  getters: true,
  virtuals: true
})

module.exports = mongoose.model('Schedule', scheduleSchema)
