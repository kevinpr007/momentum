const HttpStatus = require('http-status-codes')

let logController = (logService) => {
  let getAllLogs = (req, res, next) => {
    let page = parseInt(req.params.page)

    if (page == undefined || isNaN(page)) {
      let err = new Error('You must provide a pagination number')
      err.status = HttpStatus.INTERNAL_SERVER_ERROR
      throw err
    }

    logService.getAll(page)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(err => next(err))
  }

  let getByCode = (req, res, next) => {
    logService.getByCode(req.params.code)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(err => next(err))
  }

  let getByStatus = (req, res, next) => {
    logService.getByStatus(req.params.status)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(err => next(err))
  }

  return {
    getAllLogs: getAllLogs,
    getByCode: getByCode,
    getByStatus: getByStatus
  }
}

module.exports = logController
