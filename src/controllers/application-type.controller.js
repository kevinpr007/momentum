const HttpStatus = require('http-status-codes')
const util = require('../util/util.helpers')

module.exports = appTypeService => {
  function getAllApplicationTypes (req, res, next) {
    const setResponse = appTypes => {
      res.status(HttpStatus.OK)
        .pagedJson(appTypes)
    }

    const { page, pageSize } = req.query

    return appTypeService.getAll(page, pageSize)
      .then(setResponse)
      .catch(next)
  }

  function getByApplicationType (req, res, next) {
    const setResponse = appType => {
      if (!appType) {
        let message = 'Application Type not found.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      res.status(HttpStatus.OK)
        .json(appType)
    }

    const { id } = req.params

    return appTypeService.getById(id)
      .then(setResponse)
      .catch(next)
  }

  function setApplicationType (req, res, next) {
    const setResponse = appType => {
      res.status(HttpStatus.OK)
        .json(appType)
    }

    const appType = req.body

    return appTypeService.create(appType)
      .then(setResponse)
      .catch(next)
  }

  function updateApplicationType (req, res, next) {
    const setResponse = appType => {
      res.status(HttpStatus.OK).json()
    }

    const getAppType = appType => {
      if (!appType) {
        let message = 'Application Type not found.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      return appTypeService.update(appType, values)
    }

    const {id} = req.params
    const values = req.body

    return appTypeService.getById(id)
      .then(getAppType)
      .then(setResponse)
      .catch(next)
  }

  function deleteApplicationType (req, res, next) {
    const setResponse = appType => {
      res.status(HttpStatus.OK).json()
    }

    const { id } = req.params

    return appTypeService.delet(id)
      .then(setResponse)
      .catch(next)
  }

  return {
    getAllApplicationTypes,
    getByApplicationType,
    setApplicationType,
    updateApplicationType,
    deleteApplicationType
  }
}
