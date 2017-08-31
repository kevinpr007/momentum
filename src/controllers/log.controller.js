const HttpStatus = require('http-status-codes')

module.exports = logService => {
  /**
   * @desc Returns all logs.
   */
  function getAllLogs (req, res, next) {
    const setResponse = logs =>
      res.status(HttpStatus.OK).pagedJson(logs)

    const {page, pageSize} = req.query

    return logService.getAll(page, pageSize)
      .then(setResponse)
      .catch(next)
  }

  /**
   * @desc Returns log by status code.
   */
  function getByCode (req, res, next) {
    const setResponse = logs =>
      res.status(HttpStatus.OK).pagedJson(logs)

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
