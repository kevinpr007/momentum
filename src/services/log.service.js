const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Log = require('../models/logs.model')

module.exports = () => {
  const getAll = (page, pageSize) => {
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

  const getByCode = (code, page, pageSize) => {
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

  const saveLog = log =>
    Object.assign(new Log(), log).save()

  return {
    getAll,
    getByCode,
    saveLog
  }
}
