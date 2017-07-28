const Promise = require('bluebird')
const mongoose = require('mongoose')
mongoose.Promise = Promise
const _ = require('lodash')

const Application = require('../models/application.model')

module.exports = () => {
  const getById = id => Application.findOne().where('_id', id).exec()

  const registerApp = app => Application.create(_.merge(app, Application))

  return {
    getById,
    registerApp
  }
}
