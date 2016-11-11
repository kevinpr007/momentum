const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Log = require('../models/logs.model')
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

  let getByCode = (code, page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      Log.find().where('code', code).count().exec(),
      Log.find()
        .where('code', code)
        .sort({createdOn: -1})
        .skip(pageSize * page)
        .limit(pageSize)
        .exec()
    ])
  }

  let getByStatus = (status, page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      Log.find().where('status', status).count().exec(),
      Log.find()
        .where('status', status)
        .sort({createdOn: -1})
        .skip(pageSize * page)
        .limit(pageSize)
        .exec()
    ])
  }

  let logFactory = (log) => {
    let newLog = new Log({
      code: log.code,
      status: log.status,
      message: log.message,
      stack: log.stack,
      createdOn: log.createdOn
    })
    return newLog
  }

  let saveLog = log => {
    // TODO: Fix the message field. It's always undefined
    // return _.merge(new Log(), log).save()
    let logInst = logFactory(log)
    return logInst.save()
  }

  return {
    getAll: getAll,
    getByCode: getByCode,
    getByStatus: getByStatus,
    saveLog: saveLog
  }
}

module.exports = logService
