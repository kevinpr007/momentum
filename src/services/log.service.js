const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const _ = require('lodash')

const Log = require('../models/logs.server.model')

let logService = () => {
  let getAll = (page) => {
    return Log.find().sort({createdOn: -1}).limit(parseInt(process.env.DEFAULT_PAGINATION)).skip(parseInt(process.env.DEFAULT_PAGINATION) * (page - 1)).exec()
  }

  let getByCode = code => {
    return Log.find().where('code', code).exec()
  }

  let getByStatus = status => {
    return Log.find().where('status', status).exec()
  }

  let saveLog = log => {
    return _.merge(new Log(), log).save()
  }

  return {
    getAll: getAll,
    getByCode: getByCode,
    getByStatus: getByStatus,
    saveLog: saveLog
  }
}

module.exports = logService
