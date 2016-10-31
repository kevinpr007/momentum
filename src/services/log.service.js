const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const _ = require('lodash')

const Log = require('../models/logs.server.model')

let logService = () => {
  let getAll = () => {
    return Log.find().sort({createdOn: -1}).exec()
  }

  let getByCode = code => {
    return Log.find().where('code', code).exec()
  }

  let getByStatus = status => {
    return Log.find().where('status', status).exec()
  }

  let saveLog = (log) => {
    return _.merge(Log, log).save()
  }

  return {
    getAll: getAll,
    getByCode: getByCode,
    getByStatus: getByStatus,
    saveLog: saveLog
  }
}

module.exports = logService
