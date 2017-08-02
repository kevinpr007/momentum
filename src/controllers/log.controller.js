const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')

module.exports = logService => {
  const getAllLogs = (req, res, next) =>
    logService.getAll(req.query.page, req.query.pageSize)
      .then(logs => {
        logs = pagedResult(req, logs)
        return res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
      })
      .catch(next)

  const getByCode = (req, res, next) =>
    logService.getByCode(req.params.code, req.query.page, req.query.pageSize)
      .then(logs => {
        logs = pagedResult(req, logs)
        return res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
      })
      .catch(next)

  return {
    getAllLogs,
    getByCode
  }
}
