const HttpStatus = require('http-status-codes')
const pagedResult = require('../util/paged-result')
const config = require('../config/config')()

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
      let err = new Error('Page size must be a number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    logService.getAll(page, pageSize)
    .then(logs => {
      res.body = pagedResult(page, pageSize, logs)
      next()
      res.status(HttpStatus.OK).json(res.body)
    })
    .catch(next)
  }

  let getByCode = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    if (page == undefined || isNaN(page)) {
      let err = new Error('You must provide a page number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)
    if (pageSize == undefined || isNaN(pageSize)) {
      let err = new Error('Page size must be a number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }
    
    logService.getByCode(req.params.code, page, pageSize)
    .then(logs => {
      res.body = pagedResult(page, pageSize, logs)
      next()
      res.status(HttpStatus.OK).json(res.body)
    })
    .catch(next)
  }

  let getByStatus = (req, res, next) => {
    let page = parseInt(req.query.page || 0)
    if (page == undefined || isNaN(page)) {
      let err = new Error('You must provide a page number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    let pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)
    if (pageSize == undefined || isNaN(pageSize)) {
      let err = new Error('Page size must be a number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }
    
    logService.getByStatus(req.params.status, page, pageSize)
    .then(logs => {
      res.body = pagedResult(page, pageSize, logs)
      next()
      res.status(HttpStatus.OK).json(res.body)
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
