const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')
const config = require('../config/config')()
const getPageValidations = require('../util/pagination/page-validations')

let logController = (logService) => {
  let getAllLogs = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    logService.getAll(page, pageSize)
    .then(logs => {
      logs = pagedResult(req, page, pageSize, logs)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
    })
    .catch(next)
  }

  let getByCode = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    getPageValidations(page, pageSize)

    logService.getByCode(req.params.code, page, pageSize)
    .then(logs => {
      logs = pagedResult(req, page, pageSize, logs)
      res.status(HttpStatus.OK).json(new Hypermedia(req).setResponse(logs, next))
    })
    .catch(next)
  }

  let getByStatus = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

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

module.exports = logController
