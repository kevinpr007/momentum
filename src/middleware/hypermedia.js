const HttpStatus = require('http-status-codes')

module.exports = (req, res, next) => {
  let data = res.locals
  return res.status(HttpStatus.OK).json(data)
}
