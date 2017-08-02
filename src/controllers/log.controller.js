const HttpStatus = require('http-status-codes')
const Hypermedia = require('../util/hypermedia/hypermedia.config')
const pagedResult = require('../util/pagination/paged-result')

module.exports = logService => {
  function getAllLogs (req, res, next) {
    const setResponse = logs => {
      logs = pagedResult(req, logs)

      res.status(HttpStatus.OK)
        .json(new Hypermedia(req)
        .setResponse(logs, next))
    }

    const {page, pageSize} = req.query

    return logService.getAll(page, pageSize)
      .then(setResponse)
      .catch(next)
  }

  function getByCode (req, res, next) {
    const setResponse = logs => {
      logs = pagedResult(req, logs)

      res.status(HttpStatus.OK)
        .json(new Hypermedia(req)
        .setResponse(logs, next))
    }

    const {code, page, pageSize} = req.params

    return logService.getByCode(code, page, pageSize)
      .then(setResponse)
      .catch(next)
  }

  return {
    getAllLogs,
    getByCode
  }
}
