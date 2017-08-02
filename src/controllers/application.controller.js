const HttpStatus = require('http-status-codes')

module.exports = appService => {
  const getAppById = (req, res, next) => 
    appService.getById(req.query.id)
      .then(app => res.status(HttpStatus.OK).json(app))
      .catch(next)

  const createApp = (req, res, next) =>
    appService.registerApp(req.body)
      .then(app => res.status(HttpStatus.CREATED).json(app))
      .catch(next)

  return {
    getAppById,
    createApp
  }
}
