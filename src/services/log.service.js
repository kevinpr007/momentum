const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Log = require('../models/logs.model')

module.exports = () => {
  let getAll = (page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      Log.count().exec(),
      Log.find()
        .sort({createdOn: -1})
        .skip(pageSize * page)
        .limit(pageSize)
        .select({code: 1, status: 1, message: 1})
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
    status = status.replace(/-/g, ' ') // TODO: Remove this and slugify
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

  let saveLog = log => {
    return Object.assign(new Log(), log).save()
  }

  return {
    getAll,
    getByCode,
    getByStatus,
    saveLog
  }
}
