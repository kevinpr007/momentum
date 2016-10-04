const HttpStatus = require('http-status-codes')

let logController = (logService) => {
  let getAllLogs = (req, res, next) => {
    logService.getAll()
    .then(logs => {
      return res.status(HttpStatus.OK).json(logs)
    })
    .catch(err => {
      next(err)
    })
  }

  let getByCode = (req, res, next) => {
    logService.getByCode(req.params.code)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(err => {
      next(err)
    })
  }

  let getByStatus = (req, res, next) => {
    logService.getByStatus(req.params.status)
    .then(logs => res.status(HttpStatus.OK).json(logs))
    .catch(err => {
      next(err)
    })
  }

  return {
    getAllLogs: getAllLogs,
    getByCode: getByCode,
    getByStatus: getByStatus
  }
}

module.exports = logController
