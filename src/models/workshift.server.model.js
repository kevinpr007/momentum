const days = require('./days.server.enum')()
const mongoDB = require('../config/mongoose.collections.json')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workshiftSchema = new Schema({
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  day: {type: String, enum: days, required: true},
  user: {type: Schema.ObjectId, ref: mongoDB.Model.User, required: true},
  createdBy: {type: Schema.ObjectId, ref: mongoDB.Model.User, required: true},
  createdOn: {type: Date, default: Date.now}
}, {collection: mongoDB.Collection.Workshift})

workshiftSchema.virtual('show').get(function () {
  return `${this.day}: ${this.startDate} - ${this.endDate}`
})

workshiftSchema.set('toJSON', {getters: true, virtuals: true})
mongoose.model(mongoDB.Model.Workshift, workshiftSchema)
