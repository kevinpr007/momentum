const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const applicationType = require('../models/application-type.model')
const _ = require('lodash')

module.exports = () => {
  const getAll = (page, pageSize) => {
    page = Math.max(0, page)
    return Promise.all([
      applicationType.count().exec(),
      applicationType.find()
        .sort({ createdOn: -1 })
        .skip(pageSize * page)
        .limit(pageSize)
        .find()
        .exec()
    ])
  }

  const getById = id => applicationType.findOne().where('_id', id).exec()

  const create = appType => applicationType.create(appType)

  const update = (appType, values) => _.merge(appType, values).save()

  const _delete = id => applicationType.remove().where('_id', id).exec()

  return {
    getAll,
    getById,
    create,
    update,
    _delete
  }
}
