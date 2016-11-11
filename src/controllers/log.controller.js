const Hypermedia = require('../util/hypermedia/hypermedia.config')
const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/pagination/paged-result')
const config = require('../config/config')()
const pagValidations = require('../util/pagination/validations')

let logController = (logService) => {
  let getAllLogs = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    pagValidations(page, pageSize).getValidation()

    logService.getAll(page, pageSize)
    .then(logs => {
      logs = pagedResult(page, pageSize, logs)
      let model = logs[0].constructor.modelName
      res.status(HttpStatus.OK).json(new Hypermedia(req, model).setResponse(logs, next))
    })
    .catch(next)
  }

  let getByCode = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    pagValidations(page, pageSize).getValidation()

    logService.getByCode(req.params.code, page, pageSize)
    .then(logs => {
      logs = pagedResult(page, pageSize, logs)
      let model = logs[0].constructor.modelName
      res.status(HttpStatus.OK).json(new Hypermedia(req, model).setResponse(logs, next))
    })
    .catch(next)
  }

  let getByStatus = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

    pagValidations(page, pageSize).getValidation()

    logService.getByStatus(req.params.status, page, pageSize)
    .then(logs => {
      logs = pagedResult(page, pageSize, logs)
      let model = logs[0].constructor.modelName
      res.status(HttpStatus.OK).json(new Hypermedia(req, model).setResponse(logs, next))
    })
    .catch(next)
  }

  return {
    getAllLogs: getAllLogs,
    getByCode: getByCode,
    getByStatus: getByStatus
  }
}

module.exports = logController
