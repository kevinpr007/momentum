const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Log = require('../models/logs.server.model')
const _ = require('lodash')

let logService = () => {
  let getAll = (page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      Log.count().exec(),
      Log.find()
        .sort({createdOn: -1})
        .skip(pageSize * page)
        .limit(pageSize)
        .exec()
    ])
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
