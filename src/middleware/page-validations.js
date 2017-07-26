const HttpStatus = require('http-status-codes')
const config = require('../config/config')

module.exports = (req, res, next) => {
  req.query.page = parseInt(req.query.page || 0)
  req.query.pageSize = parseInt(req.query.pageSize || config.PAGE_SIZE)

  if (req.query.page === undefined || isNaN(req.query.page)) {
    const err = new Error('You must provide a page number')
    err.status = HttpStatus.BAD_REQUEST
    next(err)
  }

  if (req.query.pageSize === undefined || isNaN(req.query.pageSize)) {
    const err = new Error('Page size must be a number')
    err.status = HttpStatus.BAD_REQUEST
    next(err)
  }

  next()
}
