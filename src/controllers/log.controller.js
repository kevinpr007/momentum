const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')
const config = require('../config/config')
const getPageValidations = require('../util/pagination/page-validations')

module.exports = (logService) => {
  const getAllLogs = (req, res, next) => {
    const page = parseInt(req.query.page || 0)
    const pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    logService.getAll(page, pageSize)
    .then(logs => {
      logs = pagedResult(req, page, pageSize, logs)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
    })
    .catch(next)
  }

  const getByCode = (req, res, next) => {
    const page = parseInt(req.query.page || 0)
    const pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    logService.getByCode(req.params.code, page, pageSize)
    .then(logs => {
      logs = pagedResult(req, page, pageSize, logs)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
    })
    .catch(next)
  }

  const getByStatus = (req, res, next) => {
    const page = parseInt(req.query.page || 0)
    const pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    logService.getByStatus(req.params.status, page, pageSize)
    .then(logs => {
      logs = pagedResult(req, page, pageSize, logs)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
    })
    .catch(next)
  }

  return {
    getAllLogs,
    getByCode,
    getByStatus
  }
}
