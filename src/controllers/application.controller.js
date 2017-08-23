const HttpStatus = require('http-status-codes')
const util = require('../util/util.helpers')

module.exports = appService => {

  function getAppById (req, res, next) {
    const setResponse = app => {
      if (!app) {
        let message = 'Application not found.'
        return util.generateError(message, HttpStatus.NOT_FOUND)
      }

      return res.status(HttpStatus.OK).json(app)
    }

    return appService.getById(req.query.id)
      .then(setResponse)
      .catch(next)
  }

  function createApp (req, res, next) {
    const setResponse = app => res.status(HttpStatus.CREATED).json(app)

    return appService.registerApp(req.body)
      .then(setResponse)
      .catch(next)
  }

  return {
    getAppById,
    createApp
  }
}
