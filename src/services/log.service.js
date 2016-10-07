const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Log = require('../models/logs.server.model')

// TODO: Return a default message when is null
let logService = () => {
  let getAll = () => {
    return Log.find().sort({createdOn: -1}).exec()
  }

  let getByCode = (code) => {
    return Log.find().where('code', code).exec()
  }

  let getByStatus = (status) => {
    return Log.find().where('status', status).exec()
  }

  // TODO: Remove this factory from here
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

  let saveLog = (log) => {
    let newInst = logFactory(log)
    return newInst.save()
  }

  return {
    getAll: getAll,
    getByCode: getByCode,
    getByStatus: getByStatus,
    saveLog: saveLog
  }
}

module.exports = logService
