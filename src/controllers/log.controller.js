const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/paged-result')
const config = require('../config/config')().getVariable()

let logController = (logService) => {
  let getAllLogs = (req, res, next) => {
    let page = parseInt(req.query.page || 0)

    if (page == undefined || isNaN(page)) {
      let err = new Error('You must provide a page number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)
    if (pageSize == undefined || isNaN(pageSize)) {
      let err = new Error('Page Size must be a number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    logService.getAll(page, pageSize)
    .then(logs => {
      let data = pagedResult(page, pageSize, logs)
      return res.status(HttpStatus.OK).json(data)
    })
    .catch(next)
  }

  let getByCode = (req, res, next) => {
    logService.getByCode(req.params.code)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(next)
  }

  let getByStatus = (req, res, next) => {
    logService.getByStatus(req.params.status)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(next)
  }

  return {
    getAllLogs: getAllLogs,
    getByCode: getByCode,
    getByStatus: getByStatus
  }
}

module.exports = logController
